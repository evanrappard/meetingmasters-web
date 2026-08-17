const BASIS = "http://192.168.1.44:3000";
const gezien = new Map();          // pad -> status
const herkomst = new Map();        // pad -> [pagina's die ernaar linken]
const wachtrij = ["/nl/home"];
const externe = new Map();

const isIntern = (h) => h.startsWith("/") && !h.startsWith("//");

while (wachtrij.length) {
  const pad = wachtrij.shift();
  if (gezien.has(pad)) continue;
  let r;
  try { r = await fetch(BASIS + pad, { redirect: "manual" }); }
  catch { gezien.set(pad, "FOUT"); continue; }
  gezien.set(pad, r.status);
  if (r.status !== 200) continue;

  const ct = r.headers.get("content-type") || "";
  if (!ct.includes("text/html")) continue;
  const html = await r.text();

  for (const m of html.matchAll(/href="([^"#?]+)[^"]*"/g)) {
    const h = m[1];
    if (h.startsWith("http")) {
      try { externe.set(new URL(h).origin + new URL(h).pathname, (externe.get(h) || 0) + 1); } catch {}
      continue;
    }
    if (!isIntern(h)) continue;
    if (/\.(png|jpg|jpeg|webp|svg|ico|xml|txt|js|css|woff2?)$/i.test(h)) continue;
    const schoon = h.replace(/\/$/, "") || "/";
    if (!herkomst.has(schoon)) herkomst.set(schoon, []);
    herkomst.get(schoon).push(pad);
    if (!gezien.has(schoon)) wachtrij.push(schoon);
  }
}

const stuk = [...gezien].filter(([, s]) => s !== 200);
console.log(`Gekropen: ${gezien.size} pagina's\n`);
if (stuk.length) {
  console.log("NIET 200:");
  for (const [p, s] of stuk.sort((a, b) => a[1] - b[1])) {
    const van = (herkomst.get(p) || []).slice(0, 3).join(", ");
    console.log(`  ${String(s).padEnd(5)} ${p.padEnd(46)} ← ${van || "(startpunt)"}`);
  }
} else console.log("Alle interne links geven 200.");

console.log(`\nExterne adressen (${externe.size}):`);
[...externe.keys()].sort().forEach((u) => console.log("  " + u));
