const BASIS = "http://192.168.1.44:3000";
const paden = [];
const gezien = new Set(), wachtrij = ["/nl/home"];
while (wachtrij.length) {
  const p = wachtrij.shift();
  if (gezien.has(p)) continue;
  gezien.add(p);
  const r = await fetch(BASIS + p, { redirect: "manual" }).catch(() => null);
  if (!r || r.status !== 200) continue;
  const ct = r.headers.get("content-type") || "";
  if (!ct.includes("text/html")) continue;
  const html = await r.text();
  paden.push([p, html]);
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const h = m[1].replace(/\/$/, "") || "/";
    if (/\.(png|jpg|jpeg|webp|svg|ico|xml|txt|pdf|mp4|webm|js|css)$/i.test(h)) continue;
    if (!gezien.has(h)) wachtrij.push(h);
  }
}

const problemen = { geenH1: [], meerdereH1: [], geenDesc: [], langeTitel: [], korteDesc: [], langeDesc: [], geenAlt: [] };
for (const [p, html] of paden) {
  const h1 = [...html.matchAll(/<h1[\s>]/g)].length;
  if (h1 === 0) problemen.geenH1.push(p);
  if (h1 > 1) problemen.meerdereH1.push(`${p} (${h1})`);

  const titel = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  if (titel.length > 62) problemen.langeTitel.push(`${p} (${titel.length})`);

  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!desc) problemen.geenDesc.push(p);
  else if (desc.length < 70) problemen.korteDesc.push(`${p} (${desc.length})`);
  else if (desc.length > 165) problemen.langeDesc.push(`${p} (${desc.length})`);

  const zonderAlt = [...html.matchAll(/<img (?![^>]*\balt=)[^>]*>/g)].length;
  if (zonderAlt) problemen.geenAlt.push(`${p} (${zonderAlt})`);
}

console.log(`Gecontroleerd: ${paden.length} pagina's\n`);
const toon = (k, label) => {
  const v = problemen[k];
  console.log(`${label}: ${v.length}`);
  v.slice(0, 8).forEach((x) => console.log("   " + x));
  if (v.length > 8) console.log(`   … en nog ${v.length - 8}`);
};
toon("geenH1", "Zonder h1");
toon("meerdereH1", "Meer dan één h1");
toon("geenDesc", "Zonder meta-omschrijving");
toon("langeTitel", "Titel langer dan 62 tekens");
toon("korteDesc", "Omschrijving korter dan 70");
toon("langeDesc", "Omschrijving langer dan 165");
toon("geenAlt", "Afbeeldingen zonder alt");
