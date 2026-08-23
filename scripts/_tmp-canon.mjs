import fs from "node:fs";
const BASIS = "https://www.meetingmasters.online";
const routes = fs.readFileSync("scripts/mobiel-routes.txt", "utf-8").split("\n").map(r => r.trim()).filter(r => r && !r.startsWith("#"));
const zonder = [], afwijkend = [], perCanon = new Map();
for (const r of routes) {
  const res = await fetch(BASIS + r, { redirect: "manual" });
  if (res.status >= 300 && res.status < 400) continue;
  const h = await res.text();
  const c = h.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(h);
  if (!c) { zonder.push([r, noindex]); continue; }
  const eigen = c === BASIS + r;
  if (!eigen) afwijkend.push([r, c, noindex]);
  if (!perCanon.has(c)) perCanon.set(c, []);
  perCanon.get(c).push(r);
}
console.log(`== geen canonical (${zonder.length}) ==`);
for (const [r, n] of zonder) console.log(`   ${r}${n ? "  (noindex)" : ""}`);
console.log(`\n== canonical wijst ergens anders heen (${afwijkend.length}) ==`);
for (const [r, c, n] of afwijkend) console.log(`   ${r}\n      → ${c}${n ? "  (noindex)" : ""}`);
console.log(`\n== meerdere adressen met dezelfde canonical ==`);
let dubbel = 0;
for (const [c, rs] of perCanon) if (rs.length > 1) { dubbel++; console.log(`   ${c}\n      ${rs.join(", ")}`); }
if (!dubbel) console.log("   geen");
