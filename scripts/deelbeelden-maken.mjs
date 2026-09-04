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
import { readFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

const UIT = "public/images/share";
mkdirSync(UIT, { recursive: true });

/** De routes met een eigen hero, uit lib/deelbeelden.ts. */
const bronTekst = readFileSync("lib/deelbeelden.ts", "utf8");
const uitRegister = [...bronTekst.matchAll(/"(\/images\/[^"]+)"/g)].map((m) => m[1]);

/** De hero's van de twintig eventpagina's. */
const eventTekst = readFileSync("app/nl/events/[slug]/data.ts", "utf8");
const uitEvents = [...eventTekst.matchAll(/heroSrc:\s*"(\/images\/[^"]+)"/g)].map((m) => m[1]);

/** De beelden bij de blogartikelen. De Engelse artikelen delen dezelfde. */
const blogTekst = readFileSync("app/nl/blog/posts.ts", "utf8") + readFileSync("app/en/blog/posts.ts", "utf8");
const uitBlog = [...blogTekst.matchAll(/"img":\s*"(\/images\/[^"]+)"/g)].map((m) => m[1]);

const bronnen = [...new Set([...uitRegister, ...uitEvents, ...uitBlog])];

/** De hero van de homepage; dient ook als terugvalbeeld voor de hele site. */
const HERO_PER_ROUTE_HOME = bronTekst.match(/"\/home":\s*"([^"]+)"/)[1];

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

/**
 * Het terugvalbeeld: `app/opengraph-image.png` en `app/twitter-image.png`.
 *
 * Next.js gebruikt die twee voor élke pagina die zelf geen openGraph-beeld
 * meegeeft — contact, offerte, de tools, en alles wat later bijkomt. Er stond
 * jarenlang nog het voorbeeldbeeld van de Next.js-startset in (een screenshot
 * met code); dat kwam dus omhoog bij het delen van zulke links. Nu is het de
 * hero van de homepage.
 *
 * Jpg en niet png: dezelfde foto weegt als png ruim een megabyte, en de
 * bestandsnaam bepaalt het content-type dat Next meestuurt. Staat er nog een
 * oude .png naast, dan weet Next niet welke van de twee het moet zijn — die
 * ruimen we hier op.
 */
const TERUGVAL_BRON = join("public", HERO_PER_ROUTE_HOME);
for (const naam of ["opengraph-image", "twitter-image"]) {
  const info = await sharp(TERUGVAL_BRON)
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`app/${naam}.jpg`);
  rmSync(`app/${naam}.png`, { force: true });
  console.log(`  ${`app/${naam}.jpg`.padEnd(42)} ${Math.round(info.size / 1024)} kB`);
}

console.log(`\n${gemaakt} deelbeelden gemaakt in ${UIT}`);
if (ontbreekt.length) {
  console.log("\nBron niet gevonden — nakijken:");
  ontbreekt.forEach((b) => console.log("   " + b));
}
