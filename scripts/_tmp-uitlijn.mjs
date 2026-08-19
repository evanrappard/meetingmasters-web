import { chromium } from "playwright-core";
const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
for (const r of ["/nl/home", "/nl/events", "/nl/about"]) {
  await p.goto("http://192.168.1.44:3000" + r, { waitUntil: "networkidle" });
  const x = await p.evaluate(() => {
    const uit = new Map();
    document.querySelectorAll("main [class*='max-w-content']").forEach((el) => {
      const b = el.getBoundingClientRect();
      if (b.width < 200) return;
      const sleutel = `${Math.round(b.left)}|${Math.round(b.width)}`;
      uit.set(sleutel, (uit.get(sleutel) || 0) + 1);
    });
    return [...uit.entries()];
  });
  console.log(`  ${r}`);
  for (const [k, n] of x) console.log(`     links ${k.split("|")[0].padStart(4)}  breed ${k.split("|")[1].padStart(4)}   ${n}× `);
}
await b.close();
