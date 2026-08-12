/**
 * Maakt schermvullende opnames (geen eindeloze full-page strook) zodat een
 * mens — of ik — ze daadwerkelijk kan beoordelen. Per pagina een aantal
 * schermen naar beneden.
 *
 *   node scripts/mobiel-shots.mjs /nl/home /nl/events
 *   node scripts/mobiel-shots.mjs --schermen 6 /nl/home
 */
import { chromium } from "playwright-core";
import { standaardBasis } from "./mobiel-basis.mjs";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const BASIS = process.env.BASIS ?? standaardBasis();
const UIT = "docs/mobiel/schermen";

const arg = process.argv.slice(2);
const nIdx = arg.indexOf("--schermen");
const schermen = nIdx >= 0 ? Number(arg[nIdx + 1]) : 4;
const routes = arg.filter((a) => a.startsWith("/"));

mkdirSync(UIT, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const context = await browser.newContext({
  viewport: { width: 375, height: 667 },
  deviceScaleFactor: 1,
  isMobile: true,
  hasTouch: true,
});
await context.addInitScript(() => {
  try {
    localStorage.setItem("mm-cookie-keuze",
      JSON.stringify({ keuze: "alles", datum: new Date().toISOString() }));
  } catch {}
});
const page = await context.newPage();

for (const route of routes) {
  await page.goto(BASIS + route, { waitUntil: "load" });
  await page.waitForTimeout(900);
  const naam = route.replace(/^\//, "").replace(/\//g, "_");
  const hoogte = await page.evaluate(() => document.scrollingElement.scrollHeight);
  for (let i = 0; i < schermen; i++) {
    const y = i * 620;
    if (y > hoogte) break;
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(450);
    await page.screenshot({ path: join(UIT, `${naam}-${i + 1}.png`) });
  }
  console.log(`${route} — ${Math.min(schermen, Math.ceil(hoogte / 620))} schermen (pagina ${hoogte}px hoog)`);
}

await browser.close();
