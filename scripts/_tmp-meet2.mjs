import { chromium } from "playwright-core";
const b = await chromium.launch({ channel: "chrome", headless: true });
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
await p.goto("http://192.168.1.44:3000/nl/home", { waitUntil: "networkidle" });
const r = await p.evaluate(() => {
  const uit = [];
  document.querySelectorAll("main section, main > div > section, main h2, main h1").forEach((el) => {
    if (!/^H[12]$/.test(el.tagName)) return;
    const box = el.getBoundingClientRect();
    // de dichtstbijzijnde ouder met een breedtebeperking
    let ouder = el.parentElement, houder = null;
    while (ouder && !houder) {
      if (/max-w-/.test(ouder.className || "")) houder = ouder;
      ouder = ouder.parentElement;
    }
    const hb = houder?.getBoundingClientRect();
    uit.push({
      tag: el.tagName,
      tekst: el.textContent.trim().slice(0, 40).replace(/\s+/g, " "),
      kopLinks: Math.round(box.left), kopBreed: Math.round(box.width),
      houderLinks: hb ? Math.round(hb.left) : "-", houderBreed: hb ? Math.round(hb.width) : "-",
      houderKlasse: (houder?.className || "").match(/max-w-\S+/)?.[0] ?? "-",
    });
  });
  return uit;
});
console.log("  tag  kop-links kop-breed | houder-links houder-breed  klasse       tekst");
for (const x of r)
  console.log(`  ${x.tag}   ${String(x.kopLinks).padStart(6)} ${String(x.kopBreed).padStart(9)} | ${String(x.houderLinks).padStart(11)} ${String(x.houderBreed).padStart(12)}  ${String(x.houderKlasse).padEnd(18)} ${x.tekst}`);
await b.close();
