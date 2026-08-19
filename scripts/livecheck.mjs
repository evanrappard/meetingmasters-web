/**
 * Controleert de live site na de livegang. Alles wat ik zonder inloggen kan
 * nakijken, zit hierin — zodat Emilie alleen hoeft te doen wat een wachtwoord
 * of een dashboard vraagt.
 *
 *     node scripts/livecheck.mjs                       (www.meetingmasters.online)
 *     node scripts/livecheck.mjs https://iets-anders   (bv. een Vercel-preview)
 *
 * Sluit af met code 1 als er iets mis is, zodat het ook in een script kan.
 */
import { chromium } from "playwright-core";
import dns from "node:dns";
import { Agent, setGlobalDispatcher } from "undici";

/**
 * Vlak na een DNS-wijziging hangt de resolver van je eigen netwerk of provider
 * nog op de oude waarde, terwijl de rest van de wereld al bij is. Daarom vragen
 * we het rechtstreeks aan publieke resolvers — dan meten we wat bezoekers zien
 * en niet wat deze Mac toevallig nog onthoudt.
 */
dns.setServers(["1.1.1.1", "8.8.8.8", "9.9.9.9"]);

/**
 * `dns.setServers` werkt alleen voor `resolve*`, niet voor `lookup` — en juist
 * `lookup` is wat `fetch` en het besturingssysteem gebruiken. Vandaar deze
 * dispatcher: hij zoekt het adres op via de publieke resolvers en verbindt
 * daarmee, met de juiste hostnaam voor het certificaat.
 */
const adressen = new Map();
async function zoekOp(host) {
  if (adressen.has(host)) return adressen.get(host);
  const [ip] = await dns.promises.resolve4(host);
  adressen.set(host, ip);
  return ip;
}
const agent = new Agent({
  connect: {
    lookup: (host, opts, cb) =>
      zoekOp(host)
        // Met `all` wil Node een lijst; zonder, een los adres.
        .then((ip) => (opts?.all ? cb(null, [{ address: ip, family: 4 }]) : cb(null, ip, 4)))
        .catch((e) => cb(e)),
  },
});
setGlobalDispatcher(agent);

const PRODUCTIE = "https://www.meetingmasters.online";
const BASIS = (process.argv[2] || PRODUCTIE).replace(/\/$/, "");
const KAAL = BASIS.replace("://www.", "://");
const LOKAAL = BASIS !== PRODUCTIE;

/**
 * Sitemap, canonical en deelbeelden verwijzen altijd naar het productiedomein —
 * dat hoort ook zo. Test je tegen een preview of tegen localhost, dan zetten we
 * ze om, anders klopt de controle niet.
 */
const naarBasis = (u) => (LOKAAL ? u.replace(PRODUCTIE, BASIS) : u);

const groen = (s) => `\x1b[32m${s}\x1b[0m`;
const rood = (s) => `\x1b[31m${s}\x1b[0m`;
const grijs = (s) => `\x1b[90m${s}\x1b[0m`;
const geel = (s) => `\x1b[33m${s}\x1b[0m`;

let fouten = 0;
let gedaan = 0;

function meld(ok, titel, detail = "") {
  gedaan++;
  if (!ok) fouten++;
  console.log(`  ${ok ? groen("✓") : rood("✗")} ${titel}${detail ? grijs("  — " + detail) : ""}`);
}
function kop(t) { console.log(`\n${t}`); }
/** Iets om te weten, maar geen fout — bijvoorbeeld omdat het lokaal niet kán. */
function let_op(titel, detail = "") {
  gedaan++;
  console.log(`  ${geel("!")} ${titel}${detail ? grijs("  — " + detail) : ""}`);
}

async function status(url, volgen = false) {
  try {
    const r = await fetch(url, { redirect: volgen ? "follow" : "manual" });
    return { code: r.status, naar: r.headers.get("location"), url: r.url, r };
  } catch (e) { return { code: 0, fout: String(e.message).slice(0, 60) }; }
}

// ── 1. Bereikbaarheid en doorverwijzingen ──────────────────────────────────
kop("Doorverwijzingen en certificaat");
{
  const a = await status(`${KAAL}`, true);
  meld(a.url?.startsWith(`${BASIS}/nl/home`), "kaal domein → www + /nl/home", a.url);

  const b = await status(`${BASIS}`, true);
  meld(b.url?.includes("/nl/home"), "www → /nl/home", b.url);

  if (LOKAAL) {
    let_op("http → https", "niet te testen buiten productie");
  } else {
    const c = await status(BASIS.replace("https://", "http://"), true);
    meld(c.url?.startsWith("https://"), "http → https", c.url);
  }

  const d = await status(`${BASIS}/nl/bestaat-niet-xyz`);
  meld(d.code === 404, "onbekend adres geeft 404", `status ${d.code}`);
  if (d.r) {
    const t = await d.r.text();
    meld(t.includes("Deze pagina bestaat niet meer"), "eigen 404-pagina, niet die van Next");
  }
}

// ── 2. Oude bloglinks ──────────────────────────────────────────────────────
kop("Oude bloglinks blijven werken");
{
  const oud = [
    ["/nl/blogs/rondjes-versus-vierkantjes", "/nl/blog/rondjes-versus-vierkantjes"],
    ["/nl/blogs/systeemwoede-maakt-meer-kapot-dan-je-lief-is", "/nl/blog/systeemwoede"],
    ["/nl/blogs/een-online-thuis-voor-oud-olympiers-wereldwijd", "/nl/blog/olympiers"],
    ["/nl/blogs/verzonnen-oud-adres", "/nl/blog"],
  ];
  for (const [van, naar] of oud) {
    const r = await status(BASIS + van, true);
    meld(r.url === BASIS + naar, `${van.slice(0, 44)}…`, r.url?.replace(BASIS, ""));
  }
}

// ── 3. Sitemap en robots ───────────────────────────────────────────────────
kop("Sitemap en robots");
let sitemapUrls = [];
{
  const s = await status(`${BASIS}/sitemap.xml`);
  meld(s.code === 200, "sitemap.xml bereikbaar", `status ${s.code}`);
  if (s.code === 200) {
    const xml = await s.r.text();
    sitemapUrls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    meld(sitemapUrls.length > 100, `${sitemapUrls.length} adressen in de sitemap`);
    const fout = sitemapUrls.filter((u) => !u.startsWith(PRODUCTIE));
    meld(fout.length === 0, "alle adressen op het productiedomein", fout[0] || "");
  }
  const r = await status(`${BASIS}/robots.txt`);
  const tekst = r.code === 200 ? await r.r.text() : "";
  meld(r.code === 200, "robots.txt bereikbaar");
  meld(tekst.includes("Sitemap:"), "robots verwijst naar de sitemap");
  meld(!/Disallow: \/$/m.test(tekst), "site is niet per ongeluk afgesloten");
}

// ── 4. Elke pagina uit de sitemap bestaat ──────────────────────────────────
kop("Elke pagina uit de sitemap");
{
  const stuk = [];
  for (const u of sitemapUrls) {
    const r = await status(naarBasis(u));
    if (r.code !== 200) stuk.push(`${u.replace(PRODUCTIE, "")} (${r.code})`);
  }
  meld(stuk.length === 0, `${sitemapUrls.length} pagina's zonder fout`, stuk.slice(0, 3).join(", "));
}

// ── 5. Vindbaarheid: canonical, hreflang, deelbeeld ────────────────────────
kop("Vindbaarheid per pagina");
{
  const proef = ["/nl/home", "/en/home", "/nl/events/strategiedagen", "/en/events/strategy-day",
                 "/nl/virtual-office", "/nl/blog/systeemwoede"];
  let zonderCanon = 0, zonderHref = 0, kapotBeeld = 0;
  for (const p of proef) {
    const r = await status(BASIS + p);
    if (r.code !== 200) { meld(false, `${p} onbereikbaar`, `status ${r.code}`); continue; }
    const h = await r.r.text();
    const kopdeel = h.slice(0, h.indexOf("</head>"));
    if (!/rel="canonical"/i.test(kopdeel)) zonderCanon++;
    if (!/rel="alternate"[^>]*hreflang=/i.test(kopdeel)) zonderHref++;
    const b = kopdeel.match(/property="og:image" content="([^"]+)"/);
    if (b) {
      const bb = await status(naarBasis(b[1]));
      if (bb.code !== 200) kapotBeeld++;
    }
  }
  meld(zonderCanon === 0, "canonical op alle steekproefpagina's", zonderCanon ? `${zonderCanon} missen` : "");
  meld(zonderHref === 0, "hreflang op alle steekproefpagina's", zonderHref ? `${zonderHref} missen` : "");
  meld(kapotBeeld === 0, "deelbeelden bestaan", kapotBeeld ? `${kapotBeeld} kapot` : "");
}

// ── 6. Iconen ──────────────────────────────────────────────────────────────
kop("Iconen");
for (const f of ["/favicon.ico", "/icon.png", "/apple-icon.png", "/manifest.webmanifest"]) {
  const r = await status(BASIS + f);
  meld(r.code === 200, f, `status ${r.code}`);
}

// ── 7. In de browser: taalschakelaar, cookies, Analytics, video ────────────
kop("In een echte browser");
// Chrome heeft een eigen resolver, los van die van Node. We zoeken het adres
// dus zelf op via de publieke resolvers en geven het aan Chrome mee.
const gastheer = new URL(BASIS).hostname;
let resolverRegel = [];
try {
  const [address] = await dns.promises.resolve4(gastheer);
  resolverRegel = [`--host-resolver-rules=MAP ${gastheer} ${address}, MAP ${gastheer.replace(/^www\./, "")} ${address}`];
} catch { /* lukt het niet, dan gebruikt Chrome gewoon de eigen resolver */ }

const browser = await chromium.launch({ channel: "chrome", headless: true, args: resolverRegel });
try {
  // taalschakelaar heen en terug
  {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    let alleGoed = true, details = [];
    for (const [start, verwacht] of [
      ["/nl/events/strategiedagen", "/en/events/strategy-day"],
      ["/en/virtual-office/rent", "/nl/virtual-office/huren"],
      ["/nl/blog/systeemwoede", "/en/blog/system-rage"],
    ]) {
      await page.goto(BASIS + start, { waitUntil: "domcontentloaded" });
      const link = await page.locator(`header a[href*="${verwacht}"]`).first().count();
      if (!link) { alleGoed = false; details.push(start); }
    }
    meld(alleGoed, "taalschakelaar landt op dezelfde pagina", details.join(", "));
    await ctx.close();
  }

  // Google Analytics pas na toestemming
  for (const [keuze, verwachtAantal] of [[null, 0], ["alleen-noodzakelijk", 0], ["alles", 1]]) {
    const ctx = await browser.newContext();
    if (keuze) {
      await ctx.addInitScript((k) => {
        localStorage.setItem("mm-cookie-keuze", JSON.stringify({ keuze: k, datum: new Date().toISOString() }));
      }, keuze);
    }
    const page = await ctx.newPage();
    const naarGoogle = [];
    page.on("request", (r) => { if (/googletagmanager|google-analytics/.test(r.url())) naarGoogle.push(r.url()); });
    await page.goto(`${BASIS}/nl/home`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);
    if (verwachtAantal > 0 && naarGoogle.length === 0) {
      let_op(`Analytics bij keuze "alles"`, "geen NEXT_PUBLIC_GA_ID ingesteld — Analytics staat nog uit");
    } else {
      const ok = verwachtAantal === 0 ? naarGoogle.length === 0 : naarGoogle.length > 0;
      meld(ok, `Analytics bij keuze "${keuze ?? "geen"}"`, `${naarGoogle.length} verzoeken naar Google`);
    }
    await ctx.close();
  }

  // cookiebanner verdwijnt en blijft weg
  {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.goto(`${BASIS}/nl/home`, { waitUntil: "networkidle" });
    const banner = page.getByRole("dialog", { name: /cookies/i });
    const zichtbaar = await banner.isVisible().catch(() => false);
    meld(zichtbaar, "cookiebanner verschijnt bij een eerste bezoek");
    if (zichtbaar) {
      await page.getByRole("button", { name: /alleen noodzakelijk/i }).click();
      await page.waitForTimeout(400);
      await page.goto(`${BASIS}/nl/events`, { waitUntil: "networkidle" });
      const nogSteeds = await page.getByRole("dialog", { name: /cookies/i }).isVisible().catch(() => false);
      meld(!nogSteeds, "en blijft weg na een keuze");
    }
    await ctx.close();
  }

  // formulieren laden echt
  {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    let alleGoed = true, leeg = [];
    for (const p of ["/nl/contact", "/en/quote", "/nl/nieuwsbrief"]) {
      await page.goto(BASIS + p, { waitUntil: "networkidle" });
      await page.waitForTimeout(2500);
      const velden = await page.locator("form input, iframe").count();
      if (velden === 0) { alleGoed = false; leeg.push(p); }
    }
    meld(alleGoed, "HubSpot-formulieren laden", leeg.join(", "));
    await ctx.close();
  }

  // video's laden niet vooruit
  {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    let mb = 0;
    page.on("response", (r) => { const l = r.headers()["content-length"]; if (l && /\.mp4/.test(r.url())) mb += Number(l); });
    await page.goto(`${BASIS}/nl/home`, { waitUntil: "load" });
    await page.waitForTimeout(1500);
    meld(mb < 3 * 1048576, "hero-video weegt niet te zwaar bij het laden", `${(mb / 1048576).toFixed(1)} MB`);
    await ctx.close();
  }
} finally {
  await browser.close();
}

console.log(`\n${"─".repeat(60)}`);
console.log(fouten === 0
  ? groen(`  ${gedaan} controles op ${BASIS} — alles goed`)
  : rood(`  ${gedaan} controles op ${BASIS} — ${fouten} met een probleem`));
if (LOKAAL) console.log(grijs("  (niet op productie getest; regels met ! konden hier niet)"));
process.exit(fouten === 0 ? 0 : 1);
