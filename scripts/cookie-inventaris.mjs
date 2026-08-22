/**
 * Welke cookies en localStorage-sleutels worden er écht gezet?
 *
 * Drie scenario's: geen keuze, "alleen noodzakelijk", "alles accepteren".
 * De uitkomst is de bron voor de tabel in de cookieverklaring — die tabel mag
 * niet uit het hoofd geschreven worden.
 *
 * Draaien:  node scripts/cookie-inventaris.mjs [basis-url]
 */
import { chromium } from "playwright-core";

const BASIS = process.argv[2] || "https://www.meetingmasters.online";
const PAGINAS = ["/nl/home", "/nl/contact", "/nl/boeken"];

const browser = await chromium.launch({ channel: "chrome", headless: true });

for (const scenario of ["geen keuze", "alleen-noodzakelijk", "alles"]) {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  for (const pad of PAGINAS) {
    await page.goto(BASIS + pad, { waitUntil: "load" });
    if (scenario !== "geen keuze") {
      await page.evaluate((keuze) => {
        localStorage.setItem("mm-cookie-keuze", JSON.stringify({ keuze, datum: new Date().toISOString() }));
      }, scenario);
      await page.reload({ waitUntil: "load" });
    }
    await page.waitForTimeout(4000);
    // even scrollen: sommige onderdelen laden pas als ze in beeld komen
    await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(3000);
  }

  const cookies = await ctx.cookies();
  const opslag = await page.evaluate(() => Object.keys(localStorage));
  console.log(`\n── ${scenario} ──`);
  if (!cookies.length) console.log("   (geen cookies)");
  for (const c of cookies.sort((a, b) => a.name.localeCompare(b.name))) {
    const dagen = c.expires > 0 ? Math.round((c.expires * 1000 - Date.now()) / 86400000) : null;
    console.log(`   ${c.name.padEnd(22)} ${c.domain.padEnd(30)} ${dagen === null ? "sessie" : dagen + " dagen"}`);
  }
  console.log(`   localStorage: ${opslag.join(", ") || "leeg"}`);
  await ctx.close();
}
await browser.close();
