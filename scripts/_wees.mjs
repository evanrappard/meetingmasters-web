import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

// Alle routes uit de app-map afleiden.
const routes = [];
(function loop(d, pad) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    if (e.name.startsWith("_") || e.name === "api") continue;
    const p = join(d, e.name);
    if (e.isDirectory()) {
      const deel = e.name.startsWith("(") ? "" : "/" + e.name;
      loop(p, pad + deel);
    } else if (e.name === "page.tsx") {
      routes.push(pad || "/");
    }
  }
})("app", "");

const BASIS = "http://192.168.1.44:3000";
const bereikbaar = new Set();
const wachtrij = ["/nl/home"];
const gezien = new Set();
while (wachtrij.length) {
  const pad = wachtrij.shift();
  if (gezien.has(pad)) continue;
  gezien.add(pad);
  const r = await fetch(BASIS + pad, { redirect: "manual" }).catch(() => null);
  if (!r || r.status !== 200) continue;
  bereikbaar.add(pad);
  const ct = r.headers.get("content-type") || "";
  if (!ct.includes("text/html")) continue;
  const html = await r.text();
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const h = m[1].replace(/\/$/, "") || "/";
    if (/\.(png|jpg|jpeg|webp|svg|ico|xml|txt|pdf|mp4|webm|js|css)$/i.test(h)) continue;
    if (!gezien.has(h)) wachtrij.push(h);
  }
}

const statisch = routes.filter((r) => !r.includes("["));
const wees = statisch.filter((r) => !bereikbaar.has(r));
console.log(`Routes in de code: ${statisch.length} (zonder dynamische)`);
console.log(`Bereikbaar vanaf de home: ${bereikbaar.size}\n`);
console.log("NERGENS NAARTOE GELINKT:");
for (const r of wees.sort()) {
  const s = await fetch(BASIS + r, { redirect: "manual" }).then((x) => x.status).catch(() => "?");
  console.log(`  ${String(s).padEnd(5)} ${r}`);
}
