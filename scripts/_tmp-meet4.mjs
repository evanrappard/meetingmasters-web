import { chromium } from "playwright-core";
const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
const routes = ["/nl/home","/nl/events","/nl/virtual-office","/nl/games-tools","/nl/about",
  "/nl/downloads","/nl/technologie/tools","/nl/technologie/hulp","/nl/technologie/spatialchat",
  "/nl/events/strategiedagen","/nl/blog","/nl/meeting-calculator","/nl/virtual-office/huren",
  "/nl/games-tools/ravenhack","/nl/testimonials","/nl/contact"];
const teBreed = [];
for (const r of routes) {
  await p.goto("http://192.168.1.44:3000" + r, { waitUntil: "domcontentloaded" });
  const x = await p.evaluate(() => {
    const uit = [];
    document.querySelectorAll("h1,h2").forEach((h) => {
      const box = h.getBoundingClientRect();
      if (box.width < 100) return;
      let o = h.parentElement, houder = null;
      while (o && !houder) { if (/max-w-/.test(o.className||"")) houder = o; o = o.parentElement; }
      uit.push({ tag: h.tagName, breed: Math.round(box.width),
        klasse: (houder?.className||"").match(/max-w-\S+/)?.[0] ?? "geen",
        tekst: h.textContent.trim().slice(0,44).replace(/\s+/g," ") });
    });
    return uit;
  });
  for (const y of x) {
    const pct = Math.round((y.breed / 1440) * 100);
    if (pct > 60) teBreed.push({ route: r, ...y, pct });
  }
}
console.log(`  ${teBreed.length} koppen breder dan 60% van het venster:\n`);
const perKlasse = {};
for (const t of teBreed) perKlasse[t.klasse] = (perKlasse[t.klasse] || 0) + 1;
for (const t of teBreed.slice(0, 26))
  console.log(`  ${t.tag} ${String(t.pct).padStart(3)}%  ${t.klasse.padEnd(15)} ${t.route.padEnd(28)} ${t.tekst}`);
console.log("\n  per houder-klasse:", JSON.stringify(perKlasse));
await b.close();
