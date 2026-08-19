import { chromium } from "playwright-core";
const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
const routes = ["/nl/home","/nl/events","/nl/virtual-office","/nl/games-tools","/nl/about",
  "/nl/downloads","/nl/technologie/tools","/nl/technologie/hulp","/nl/technologie/spatialchat",
  "/nl/events/strategiedagen","/nl/blog","/nl/meeting-calculator","/nl/virtual-office/huren"];
console.log("  H1-breedte als deel van het venster (1440px) — >60% is te breed");
for (const r of routes) {
  await p.goto("http://192.168.1.44:3000" + r, { waitUntil: "domcontentloaded" });
  const x = await p.evaluate(() => {
    const h = document.querySelector("h1"); if (!h) return null;
    const b = h.getBoundingClientRect();
    let o = h.parentElement, houder = null;
    while (o && !houder) { if (/max-w-/.test(o.className||"")) houder = o; o = o.parentElement; }
    return { breed: Math.round(b.width), klasse: (houder?.className||"").match(/max-w-\S+/)?.[0] ?? "-",
             tekst: h.textContent.trim().slice(0,34).replace(/\s+/g," ") };
  });
  if (!x) { console.log(`  ${r.padEnd(30)} geen h1`); continue; }
  const pct = Math.round((x.breed / 1440) * 100);
  console.log(`  ${r.padEnd(30)} ${String(x.breed).padStart(4)}px  ${String(pct).padStart(3)}%  ${pct>60?"⚠ TE BREED":"       ok"}  ${x.klasse.padEnd(16)} ${x.tekst}`);
}
await b.close();
