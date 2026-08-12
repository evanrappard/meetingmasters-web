/**
 * Test of het mobiele menu écht bedienbaar is — inclusief de situatie die het
 * kapotmaakte: een verse bezoeker met de cookiebanner nog in beeld, op een
 * klein scherm.
 *
 *   node scripts/mobiel-menu-check.mjs
 */
import { chromium } from "playwright-core";
import { standaardBasis } from "./mobiel-basis.mjs";

const BASIS = process.env.BASIS ?? standaardBasis();

// Hoogte 553 = wat een iPhone SE in Safari daadwerkelijk toont (667 min de
// browserbalken). Juist daar liep het mis.
const SCHERMEN = [
  { naam: "iPhone SE (Safari, zichtbaar deel)", w: 375, h: 553 },
  { naam: "iPhone SE 1e gen", w: 320, h: 460 },
  { naam: "iPhone 14", w: 390, h: 664 },
];

const browser = await chromium.launch({ channel: "chrome", headless: true });
let fouten = 0;
const meld = (ok, tekst) => {
  console.log(`   ${ok ? "✓" : "✗"} ${tekst}`);
  if (!ok) fouten++;
};

for (const s of SCHERMEN) {
  console.log(`\n▸ ${s.naam} — ${s.w}×${s.h}`);
  const context = await browser.newContext({
    viewport: { width: s.w, height: s.h },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  // Geen cookiekeuze: de banner staat in beeld, net als bij een echte
  // eerste bezoeker.
  await page.goto(`${BASIS}/nl/home`, { waitUntil: "load" });
  await page.waitForTimeout(800);

  const bannerZichtbaar = await page.locator('[role="dialog"][aria-label="Cookies"]').isVisible();
  meld(bannerZichtbaar, "cookiebanner staat in beeld (uitgangssituatie)");

  const knop = page.getByRole("button", { name: /Menu openen|Menu sluiten/ });
  const doos = await knop.boundingBox();
  meld(Boolean(doos), "hamburgerknop gevonden");

  // De kern: is de knop op zijn eigen plek ook echt het bovenste element?
  const bovenste = await page.evaluate(({ x, y }) => {
    const el = document.elementFromPoint(x, y);
    if (!el) return "niets";
    const knop = el.closest("button");
    if (knop && /Menu/.test(knop.getAttribute("aria-label") ?? "")) return "de knop zelf";
    const dialoog = el.closest('[role="dialog"]');
    if (dialoog) return `cookiebanner (${el.tagName.toLowerCase()})`;
    return `${el.tagName.toLowerCase()}.${(el.className || "").toString().split(/\s+/)[0]}`;
  }, { x: doos.x + doos.width / 2, y: doos.y + doos.height / 2 });
  meld(bovenste === "de knop zelf", `wat ligt er op de knop? → ${bovenste}`);

  await knop.click();
  await page.waitForTimeout(400);

  const paneel = page.locator("header div.fixed").first();
  meld(await paneel.isVisible(), "menu gaat open");

  // Submenu openklappen — precies wat het paneel te hoog maakte.
  const events = page.locator("header button", { hasText: "Events" }).first();
  if (await events.count()) {
    await events.click();
    await page.waitForTimeout(400);
  }

  // Is de onderste knop te bereiken? Vroeger niet: de sticky header pinde zich
  // vast en alles onder de schermrand bleef onbereikbaar.
  // Binnen het paneel zoeken, niet in de hele header: de desktopversie van
  // dezelfde knop staat daar ook en is op mobiel verborgen.
  const cta = paneel.locator('a:has-text("Plan een gesprek")').first();
  const bereikbaar = await cta.evaluate((el) => {
    const houder = el.closest("div.fixed");
    if (!houder) return false;
    houder.scrollTop = houder.scrollHeight;
    const r = el.getBoundingClientRect();
    return r.top >= 0 && r.bottom <= window.innerHeight + 1 && r.height > 0;
  });
  meld(bereikbaar, '"Plan een gesprek" is bereikbaar na uitklappen van Events');

  // Klikt de knop ook echt door, of ligt er iets overheen?
  const raak = await cta.evaluate((el) => {
    const r = el.getBoundingClientRect();
    const el2 = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
    return el2 === el || el.contains(el2);
  });
  meld(raak, "die knop is ook echt aanklikbaar (niets ligt eroverheen)");

  await context.close();
}

await browser.close();
console.log(`\n────────\n${fouten === 0 ? "alles goed" : fouten + " controle(s) mislukt"}`);
process.exit(fouten === 0 ? 0 : 1);
