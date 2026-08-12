/**
 * Leest de browserconsole uit: fouten, waarschuwingen en mislukte verzoeken.
 * Dit is wat het rode "1 Issue"-bolletje van Next in beeld brengt.
 *
 *   npm run mobiel:console                 # alle routes
 *   npm run mobiel:console -- /nl/home     # één route
 */
import { chromium } from "playwright-core";
import { standaardBasis } from "./mobiel-basis.mjs";
import { readFileSync } from "node:fs";

const BASIS = process.env.BASIS ?? standaardBasis();
const gevraagd = process.argv.slice(2).filter((a) => a.startsWith("/"));
const routes = gevraagd.length
  ? gevraagd
  : readFileSync("scripts/mobiel-routes.txt", "utf8").split("\n").map((r) => r.trim()).filter(Boolean);

console.log(`adres: ${BASIS}\n`);

const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({
  viewport: { width: 375, height: 667 },
  isMobile: true,
  hasTouch: true,
});

let totaal = 0;
for (const route of routes) {
  const meldingen = [];
  const page = await context.newPage();

  page.on("console", (m) => {
    if (m.type() === "error" || m.type() === "warning") {
      meldingen.push({ soort: m.type(), tekst: m.text().slice(0, 300) });
    }
  });
  page.on("pageerror", (e) => meldingen.push({ soort: "pageerror", tekst: String(e).slice(0, 300) }));
  page.on("requestfailed", (r) =>
    meldingen.push({ soort: "verzoek mislukt", tekst: `${r.url().slice(0, 120)} — ${r.failure()?.errorText}` })
  );
  page.on("response", (r) => {
    if (r.status() >= 400) meldingen.push({ soort: `HTTP ${r.status()}`, tekst: r.url().slice(0, 140) });
  });

  try {
    await page.goto(BASIS + route, { waitUntil: "load", timeout: 45000 });
    await page.waitForTimeout(1500);
  } catch (e) {
    meldingen.push({ soort: "laadfout", tekst: String(e).split("\n")[0] });
  }

  if (meldingen.length) {
    totaal += meldingen.length;
    console.log(`✗ ${route}`);
    for (const m of meldingen) console.log(`    [${m.soort}] ${m.tekst}`);
    console.log("");
  }
  await page.close();
}

await browser.close();
console.log(`────────\n${routes.length} routes — ${totaal} melding(en)`);
