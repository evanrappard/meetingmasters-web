import { chromium } from "playwright-core";
const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
for (const route of process.argv.slice(2)) {
  await p.goto("http://192.168.1.44:3000" + route, { waitUntil: "networkidle" });
  console.log(`\n── ${route}`);
  const r = await p.evaluate(() => {
    const uit = [];
    document.querySelectorAll("section, footer > div, [class*='max-w-content']").forEach((el) => {
      const kind = el.querySelector("[class*='max-w-content']") || el;
      const box = kind.getBoundingClientRect();
      if (box.width < 300 || box.height < 40) return;
      const kop = el.querySelector("h1,h2,h3");
      uit.push({
        links: Math.round(box.left),
        breedte: Math.round(box.width),
        tekst: (kop?.textContent || el.textContent || "").trim().slice(0, 46).replace(/\s+/g, " "),
      });
    });
    // dubbele posities samenvouwen
    const gezien = new Set();
    return uit.filter((x) => { const k = x.links + "|" + x.breedte; if (gezien.has(k)) return false; gezien.add(k); return true; });
  });
  for (const x of r) console.log(`   links ${String(x.links).padStart(4)}  breed ${String(x.breedte).padStart(4)}   ${x.tekst}`);
}
await b.close();
