/**
 * Alt-teksten controleren over de hele site.
 *
 * Twee dingen worden gemeld:
 *  - een <img> zónder alt-attribuut. Dat is altijd fout.
 *  - alt="" zonder aria-hidden. Een leeg alt is de júiste keuze voor een
 *    plaatje dat alleen versiert, maar dan hoort erbij te staan dát het
 *    versiering is. Anders is niet te zien of iemand het vergeten is —
 *    en Bing meldt het als een ontbrekende alt.
 *
 * Draaien:  npm run altcheck  [basis-url]
 */
import { chromium } from "playwright-core";
import fs from "node:fs";

const BASIS = process.argv[2] || "https://www.meetingmasters.online";
const routes = fs.readFileSync("scripts/mobiel-routes.txt", "utf-8").split("\n").map(r => r.trim()).filter(r => r && !r.startsWith("#"));
const b = await chromium.launch({ channel: "chrome", headless: true });
const ctx = await b.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await ctx.newPage();

const zonder = [];   // alt-attribuut ontbreekt volledig
const leeg = [];     // alt="" — geldig voor decoratie, maar even nalopen
let totaal = 0;

for (const r of routes) {
  try { await page.goto(BASIS + r, { waitUntil: "load", timeout: 45000 }); } catch { continue; }
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 800) { scrollTo(0, y); await new Promise(s => setTimeout(s, 40)); } });
  await page.waitForTimeout(500);
  const beelden = await page.evaluate(() => [...document.querySelectorAll("img")].map(i => ({
    heeftAlt: i.hasAttribute("alt"),
    alt: i.getAttribute("alt") ?? "",
    verborgen: i.getAttribute("aria-hidden") === "true",
    src: (i.getAttribute("src") || "").slice(0, 110),
  })));
  totaal += beelden.length;
  for (const i of beelden) {
    if (!i.heeftAlt) zonder.push([r, i.src]);
    else if (i.alt.trim() === "" && !i.verborgen) leeg.push([r, i.src]);
  }
}

const groen = (s) => `\u001b[32m${s}\u001b[0m`;
const rood = (s) => `\u001b[31m${s}\u001b[0m`;
console.log(`${routes.length} routes, ${totaal} <img>-elementen bekeken\n`);
console.log(`== alt-attribuut ontbreekt (${zonder.length}) ==`);
for (const [r, s] of zonder) console.log(`   ${r.padEnd(34)} ${decodeURIComponent(s).replace(/^.*?(images|_next).*?url=/, "")}`);
console.log(`\n== alt="" zonder aria-hidden (${leeg.length}) ==`);
const uniek = new Map();
for (const [r, s] of leeg) { const k = decodeURIComponent(s).replace(/^.*url=/, "").slice(0, 70); if (!uniek.has(k)) uniek.set(k, []); uniek.get(k).push(r); }
for (const [k, rs] of uniek) console.log(`   ${k}\n      ${rs.length} pagina's, bv. ${rs.slice(0, 3).join(", ")}`);
await b.close();

const fout = zonder.length + leeg.length;
console.log("\n" + "─".repeat(60));
console.log(fout === 0
  ? groen(`  alle ${totaal} beelden hebben een alt, of staan als versiering aangemerkt`)
  : rood(`  ${fout} beelden zonder bruikbare alt`));
process.exit(fout === 0 ? 0 : 1);
