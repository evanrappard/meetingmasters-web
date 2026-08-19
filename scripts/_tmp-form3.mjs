import { chromium } from "playwright-core";
import dns from "node:dns";
dns.setServers(["1.1.1.1"]);
const [ip] = await dns.promises.resolve4("www.meetingmasters.online");
const b = await chromium.launch({ channel: "chrome", headless: true,
  args: [`--host-resolver-rules=MAP www.meetingmasters.online ${ip}`] });
const c = await b.newContext({ viewport: { width: 1280, height: 900 } });
await c.addInitScript(() => localStorage.setItem("mm-cookie-keuze",
  JSON.stringify({ keuze: "alles", datum: new Date().toISOString() })));
const p = await c.newPage();
await p.goto("https://www.meetingmasters.online/nl/contact", { waitUntil: "networkidle" });
await p.waitForTimeout(6000);

// scroll naar het formulierblok
await p.evaluate(() => {
  const k = [...document.querySelectorAll("h2,h3")].find(e => /bericht|message/i.test(e.textContent));
  if (k) k.scrollIntoView({ block: "start" });
});
await p.waitForTimeout(2500);
await p.screenshot({ path: "/tmp/form-blok.png" });

const info = await p.evaluate(() => {
  const h = document.body.innerHTML;
  const el = document.querySelector('[id^="hbspt-form"], .hbspt-form, form');
  return {
    hbsptDivs: document.querySelectorAll('[class*="hbspt"],[id*="hbspt"]').length,
    formulieren: document.querySelectorAll("form").length,
    inputs: document.querySelectorAll("input").length,
    houder: el ? el.className + " | kinderen: " + el.children.length : "geen",
    bevatFout: /kan niet|error|not found/i.test(document.body.innerText.slice(0,4000)),
  };
});
console.log("  ", JSON.stringify(info, null, 2).replace(/\n/g, "\n   "));
await b.close();
