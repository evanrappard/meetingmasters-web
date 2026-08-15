/**
 * Maakt opnames van de hero-band van event-pagina's, op desktopformaat.
 * Bedoeld om te beoordelen of de witte kop leesbaar blijft over het beeld —
 * precies de zone waar `heroOverlay` op ingesteld wordt.
 *
 *   node scripts/hero-shots.mjs alv world-cafe
 *   node scripts/hero-shots.mjs --alle
 *
 * Opnames komen in `schermafdrukken/hero/`. Draait tegen het netwerk-IP, om
 * dezelfde reden als de mobiele controle (zie scripts/mobiel-basis.mjs).
 */
import { chromium } from "playwright-core";
import { standaardBasis } from "./mobiel-basis.mjs";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const ALLE = [
  "strategiedagen", "townhall", "all-hands", "alv", "teambuilding",
  "training-workshop", "brainstormen", "onboardingdag", "bedrijfsfeest",
  "kerstfeest", "teamuitje", "community-building", "bewonersparticipatie",
  "klankbordgroep", "focusgroep", "world-cafe", "webinar", "conferentie",
  "open-space", "netwerkevent",
];

const args = process.argv.slice(2);
const slugs = args.includes("--alle") ? ALLE : args.filter((a) => !a.startsWith("--"));
if (slugs.length === 0) {
  console.error("Geef een of meer slugs op, of --alle.");
  process.exit(1);
}

const basis = standaardBasis();
const map = join(process.cwd(), "schermafdrukken", "hero");
mkdirSync(map, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const pagina = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

const sIdx = args.indexOf("--sectie");
const sectie = sIdx >= 0 ? args[sIdx + 1] : null;

for (const slug of slugs) {
  const url = `${basis}/nl/events/${slug}`;
  const antwoord = await pagina.goto(url, { waitUntil: "networkidle" });
  if (!antwoord?.ok()) {
    console.error(`${slug}: HTTP ${antwoord?.status()} — overgeslagen`);
    continue;
  }

  if (sectie) {
    const kop = pagina.getByText(sectie, { exact: false }).first();
    if ((await kop.count()) === 0) {
      console.error(`${slug}: sectie "${sectie}" niet gevonden — overgeslagen`);
      continue;
    }
    await kop.scrollIntoViewIfNeeded();
    await pagina.waitForTimeout(400);
    const naam = sectie.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const bestand = join(map, `${naam}-${slug}.png`);
    await pagina.screenshot({ path: bestand });
    console.log(`${slug} → ${bestand}`);
    continue;
  }

  const bestand = join(map, `hero-${slug}.png`);
  await pagina.screenshot({ path: bestand, clip: { x: 0, y: 0, width: 1440, height: 560 } });
  console.log(`${slug} → ${bestand}`);
}

await browser.close();
