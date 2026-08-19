import { chromium } from "playwright-core";
const b = await chromium.launch({ channel: "chrome", headless: true });
for (const [r, naam, w, h] of [["/nl/home","home",1440,800],["/nl/contact","contact",1440,700],
                                ["/nl/events","events-cta",1440,800],["/nl/home","home-mob",390,800]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto("http://192.168.1.44:3000" + r, { waitUntil: "networkidle" });
  await p.evaluate(() => localStorage.setItem("mm-cookie-keuze", JSON.stringify({keuze:"alleen-noodzakelijk",datum:new Date().toISOString()})));
  await p.reload({ waitUntil: "networkidle" });
  if (naam === "events-cta") await p.evaluate(() => {
    const h = [...document.querySelectorAll("h2")].find(e => /maar dan anders/i.test(e.textContent));
    h?.scrollIntoView({ block: "center" });
  });
  await p.waitForTimeout(900);
  await p.screenshot({ path: `/tmp/d-${naam}.png` });
  await p.close();
}
await b.close();
