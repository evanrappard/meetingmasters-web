/** Zoekt indexeerbare pagina's met (bijna) dezelfde zichtbare tekst. */
import fs from "node:fs";
const BASIS = "https://www.meetingmasters.online";
const routes = fs.readFileSync("scripts/mobiel-routes.txt", "utf-8").split("\n").map(r => r.trim()).filter(r => r && !r.startsWith("#"));
const paginas = [];
for (const r of routes) {
  const res = await fetch(BASIS + r, { redirect: "manual" });
  if (res.status !== 200) continue;
  const h = await res.text();
  if (/<meta name="robots" content="[^"]*noindex/.test(h)) continue;
  const body = h.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  paginas.push({ r, woorden: new Set(body.split(" ").filter(w => w.length > 3)) });
}
console.log(`${paginas.length} indexeerbare pagina's vergeleken\n`);
const paren = [];
for (let i = 0; i < paginas.length; i++) for (let j = i + 1; j < paginas.length; j++) {
  const a = paginas[i].woorden, b = paginas[j].woorden;
  let gedeeld = 0; for (const w of a) if (b.has(w)) gedeeld++;
  const overlap = gedeeld / Math.min(a.size, b.size);
  if (overlap > 0.82) paren.push([overlap, paginas[i].r, paginas[j].r]);
}
paren.sort((x, y) => y[0] - x[0]);
console.log(`paren met meer dan 82% woordoverlap: ${paren.length}`);
for (const [o, a, b] of paren.slice(0, 20)) console.log(`   ${(o * 100).toFixed(0)}%  ${a}   ↔   ${b}`);
