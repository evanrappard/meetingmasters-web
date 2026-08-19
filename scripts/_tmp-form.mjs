import { chromium } from "playwright-core";
import dns from "node:dns";
dns.setServers(["1.1.1.1"]);
const [ip] = await dns.promises.resolve4("www.meetingmasters.online");
const b = await chromium.launch({ channel: "chrome", headless: true,
  args: [`--host-resolver-rules=MAP www.meetingmasters.online ${ip}`] });

const paden = ["/nl/contact","/nl/offerte","/nl/boeken","/nl/nieuwsbrief","/nl/expert-advies",
               "/en/contact","/en/quote","/en/booking","/en/newsletter","/en/expert-advice"];

for (const pad of paden) {
  const c = await b.newContext();
  await c.addInitScript(() => localStorage.setItem("mm-cookie-keuze",
    JSON.stringify({ keuze: "alles", datum: new Date().toISOString() })));
  const p = await c.newPage();
  const mislukt = [], fouten = [];
  p.on("requestfailed", r => { if (/hsforms|hubspot/.test(r.url())) mislukt.push(r.url().slice(0,80)); });
  p.on("response", r => { if (/hsforms|hubspot/.test(r.url()) && r.status() >= 400) mislukt.push(`${r.status()} ${r.url().slice(0,95)}`); });
  p.on("console", m => { if (m.type() === "error") fouten.push(m.text().slice(0,90)); });
  await p.goto("https://www.meetingmasters.online" + pad, { waitUntil: "networkidle" }).catch(()=>{});
  await p.waitForTimeout(4000);
  const velden = await p.locator("form input:visible, form textarea:visible").count();
  const iframes = await p.locator("iframe").count();
  const vlag = velden > 0 ? "✓" : "✗";
  console.log(`  ${vlag} ${pad.padEnd(20)} zichtbare velden: ${String(velden).padStart(2)}   iframes: ${iframes}`);
  [...new Set(mislukt)].forEach(m => console.log(`       ↳ ${m}`));
  [...new Set(fouten)].slice(0,2).forEach(m => console.log(`       ↳ console: ${m}`));
  await c.close();
}
await b.close();
