/**
 * Loopt alle interne links op de live site na en meldt wat stuk is.
 *   node scripts/linkcheck.mjs [adres]
 */
import dns from "node:dns";
import { Agent, setGlobalDispatcher } from "undici";
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const adressen = new Map();
setGlobalDispatcher(new Agent({ connect: { lookup: (h, o, cb) => {
  (adressen.get(h) ? Promise.resolve(adressen.get(h)) : dns.promises.resolve4(h).then(([ip]) => { adressen.set(h, ip); return ip; }))
    .then((ip) => (o?.all ? cb(null, [{ address: ip, family: 4 }]) : cb(null, ip, 4))).catch(cb);
} } }));

const BASIS = (process.argv[2] || "https://www.meetingmasters.online").replace(/\/$/, "");
const paden = [...new Set((await (await fetch(`${BASIS}/sitemap.xml`)).text())
  .match(/<loc>[^<]+<\/loc>/g).map((m) => m.slice(5, -6).replace(BASIS, "")))];

const gezien = new Map();
const kapot = [];
let n = 0;
for (const pad of paden) {
  const html = await (await fetch(BASIS + pad)).text();
  const links = [...new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]))];
  for (const l of links) {
    if (/\.(pdf|png|jpe?g|webp|svg|ico|xml|txt|mp4|webmanifest)$/i.test(l)) continue;
    if (!gezien.has(l)) {
      const r = await fetch(BASIS + l, { redirect: "manual" });
      gezien.set(l, r.status);
      n++;
      if (r.status >= 400) kapot.push({ link: l, status: r.status, op: pad });
    } else if (gezien.get(l) >= 400) {
      kapot.push({ link: l, status: gezien.get(l), op: pad });
    }
  }
}
console.log(`  ${paden.length} pagina's doorlopen, ${n} verschillende interne links getest`);
if (!kapot.length) { console.log("  geen kapotte links ✓"); }
else {
  const per = {};
  for (const k of kapot) (per[`${k.status} ${k.link}`] ??= []).push(k.op);
  console.log(`  ${Object.keys(per).length} kapotte links:\n`);
  for (const [l, waar] of Object.entries(per))
    console.log(`   ${l}\n      staat op: ${waar.slice(0, 4).join(", ")}${waar.length > 4 ? ` (+${waar.length - 4})` : ""}`);
}
process.exit(kapot.length ? 1 : 0);
