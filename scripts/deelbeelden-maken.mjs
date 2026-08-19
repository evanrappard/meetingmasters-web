/**
 * Maakt de deelbeelden (og:image) voor LinkedIn en consorten.
 *
 * Elke hero wordt bijgesneden naar 1200×630 jpg in `public/images/share/`.
 * Dat formaat verwachten LinkedIn, Facebook en WhatsApp; en jpg omdat LinkedIn
 * niet betrouwbaar omgaat met webp — dan zie je een leeg vlak.
 *
 * Draai dit opnieuw zodra een hero verandert:
 *     node scripts/deelbeelden-maken.mjs
 */
import sharp from "sharp";
import { readFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const UIT = "public/images/share";
mkdirSync(UIT, { recursive: true });

/** De routes met een eigen hero, uit lib/deelbeelden.ts. */
const bronTekst = readFileSync("lib/deelbeelden.ts", "utf8");
const uitRegister = [...bronTekst.matchAll(/"(\/images\/[^"]+)"/g)].map((m) => m[1]);

/** De hero's van de twintig eventpagina's. */
const eventTekst = readFileSync("app/nl/events/[slug]/data.ts", "utf8");
const uitEvents = [...eventTekst.matchAll(/heroSrc:\s*"(\/images\/[^"]+)"/g)].map((m) => m[1]);

const bronnen = [...new Set([...uitRegister, ...uitEvents])];

let gemaakt = 0;
const ontbreekt = [];

for (const bron of bronnen) {
  const pad = join("public", bron);
  if (!existsSync(pad)) { ontbreekt.push(bron); continue; }
  const naam = bron.replace(/^\/images\//, "").replace(/\//g, "-").replace(/\.(webp|jpg|jpeg|png)$/, "") + ".jpg";
  const doel = join(UIT, naam);
  // cover: vult 1200×630 en snijdt bij vanuit het midden, zodat er nooit
  // balken naast het beeld staan
  const info = await sharp(pad)
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(doel);
  gemaakt++;
  console.log(`  ${naam.padEnd(42)} ${Math.round(info.size / 1024)} kB`);
}

console.log(`\n${gemaakt} deelbeelden gemaakt in ${UIT}`);
if (ontbreekt.length) {
  console.log("\nBron niet gevonden — nakijken:");
  ontbreekt.forEach((b) => console.log("   " + b));
}
