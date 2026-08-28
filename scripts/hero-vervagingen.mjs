/**
 * Maakt de vervaagde miniaturen die achter een hero staan tot het echte beeld
 * geladen is.
 *
 *   node scripts/hero-vervagingen.mjs
 *
 * Waarom: een hero is een groot bestand. Zolang die onderweg is, is het vlak
 * leeg — en omdat de pagina wit is, zie je een witte flits. Met een miniatuur
 * van 20 pixels breed, vervaagd uitgerekt, staat er meteen iets in de goede
 * kleuren. Zodra het echte beeld er is, verdwijnt het eronder.
 *
 * Die miniaturen zijn klein genoeg om in de pagina zelf mee te sturen: rond de
 * 300 bytes per stuk. Ze staan als data-URI in `lib/hero-vervaging.ts`, dat
 * alleen op de server wordt gelezen — er gaat dus per pagina één regeltje mee
 * naar de browser, niet de hele lijst.
 *
 * Welke beelden: alles wat in de code naast `priority` staat (dat zijn de
 * hero's), alles met "hero" in de naam, en de beelden die de event- en
 * blogpagina's uit hun data halen.
 */

import { execSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const BEELDMAP = "public/images";

/** Alle paden die in de broncode als beeld worden gebruikt. */
function verzamelPaden() {
  const paden = new Set();

  // 1. Beelden met "hero" in de bestandsnaam.
  const zoekMappen = [BEELDMAP, `${BEELDMAP}/blog`, `${BEELDMAP}/events`];
  for (const map of zoekMappen) {
    if (!existsSync(map)) continue;
    for (const naam of readdirSync(map)) {
      if (/hero/i.test(naam) && /\.(webp|jpe?g|png)$/i.test(naam)) {
        paden.add(`/${map.replace("public/", "")}/${naam}`);
      }
    }
  }

  // 2. Beelden die in de code voorkomen in een bestand met `priority`, en de
  //    hero- en afbeeldingsvelden uit de databestanden.
  const bestanden = execSync(
    "grep -rl -e priority -e heroSrc -e 'img:' --include=*.tsx --include=*.ts components app",
    { encoding: "utf8" }
  )
    .trim()
    .split("\n")
    .filter(Boolean);

  for (const bestand of bestanden) {
    const inhoud = readFileSync(bestand, "utf8");
    for (const m of inhoud.matchAll(/["'`](\/images\/[^"'`]+\.(?:webp|jpe?g|png))["'`]/g)) {
      paden.add(m[1]);
    }
  }

  // Logo's en dergelijke hebben geen vervaging nodig; die zijn klein en staan
  // niet als vlak achter tekst.
  return [...paden].filter((p) => !/logo|vignet|favicon/i.test(p)).sort();
}

const paden = verzamelPaden();
const uit = {};
let overgeslagen = 0;

for (const pad of paden) {
  const bestand = `public${pad}`;
  if (!existsSync(bestand)) {
    overgeslagen++;
    continue;
  }
  // 20 px breed is genoeg: het wordt toch uitgerekt en vervaagd getoond.
  const mini = await sharp(bestand)
    .resize(20, null, { fit: "inside" })
    .webp({ quality: 35, alphaQuality: 40, effort: 6 })
    .toBuffer();
  uit[pad] = `data:image/webp;base64,${mini.toString("base64")}`;
}

const regels = Object.entries(uit)
  .map(([pad, data]) => `  "${pad}":\n    "${data}",`)
  .join("\n");

const bytes = Object.values(uit).reduce((n, d) => n + d.length, 0);

writeFileSync(
  "lib/hero-vervaging.ts",
  `/**
 * Vervaagde miniaturen voor achter de hero's — GEGENEREERD BESTAND.
 *
 * Niet met de hand aanpassen. Opnieuw maken met:
 *   node scripts/hero-vervagingen.mjs
 *
 * Lees dit bestand alleen in servercomponenten. Doe je het in een component met
 * "use client", dan gaat de hele lijst mee naar de browser in plaats van het
 * ene regeltje dat die pagina nodig heeft.
 */

const VERVAGINGEN: Record<string, string> = {
${regels}
};

/** De miniatuur bij een beeld, of undefined als we er geen hebben. */
export function vervaging(src?: string): string | undefined {
  if (!src) return undefined;
  return VERVAGINGEN[src];
}
`
);

console.log(`${Object.keys(uit).length} miniaturen weggeschreven naar lib/hero-vervaging.ts`);
console.log(`samen ${Math.round(bytes / 1024)} kB; gemiddeld ${Math.round(bytes / Object.keys(uit).length)} bytes per beeld`);
if (overgeslagen) console.log(`${overgeslagen} paden overgeslagen (bestand bestaat niet)`);
