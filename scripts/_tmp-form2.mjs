import { chromium } from "playwright-core";
import dns from "node:dns";
dns.setServers(["1.1.1.1"]);
const [ip] = await dns.promises.resolve4("www.meetingmasters.online");
const b = await chromium.launch({ channel: "chrome", headless: true,
  args: [`--host-resolver-rules=MAP www.meetingmasters.online ${ip}`] });
const c = await b.newContext({ viewport: { width: 1280, height: 1000 } });
await c.addInitScript(() => localStorage.setItem("mm-cookie-keuze",
  JSON.stringify({ keuze: "alles", datum: new Date().toISOString() })));
const p = await c.newPage();
const verzoeken = [];
p.on("request", r => { if (/hsforms|hubspot|hsappstatic/.test(r.url())) verzoeken.push(r.url()); });
p.on("response", async r => { if (/hsforms|hubspot|hsappstatic/.test(r.url())) console.log(`  ${r.status()}  ${r.url().slice(0,110)}`); });
p.on("console", m => console.log(`  console[${m.type()}] ${m.text().slice(0,120)}`));
p.on("pageerror", e => console.log(`  pageerror: ${String(e).slice(0,140)}`));

await p.goto("https://www.meetingmasters.online/nl/contact", { waitUntil: "networkidle" });
await p.waitForTimeout(6000);

console.log("\n  --- frames ---");
for (const f of p.frames()) console.log(`     ${f.url().slice(0,110)}`);

console.log("\n  --- het element waar het formulier in moet ---");
const html = await p.evaluate(() => {
  const el = document.querySelector(".hbspt-form, [class*=hbspt], [id*=hbspt], form");
  return el ? el.outerHTML.slice(0, 400) : "GEEN formulier-element gevonden";
});
console.log("     " + html.replace(/\n/g, " ").slice(0, 380));
await p.screenshot({ path: "/tmp/form.png", fullPage: false });
await b.close();
