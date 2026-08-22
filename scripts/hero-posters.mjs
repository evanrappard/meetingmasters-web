/**
 * Maakt van elk hero-beeld een mobiele en een desktop-variant in WebP.
 *
 * Waarom: de posters zijn op de telefoon het LCP-element — het beeld waar de
 * bezoeker op wacht — en werden daar op volle desktopgrootte geladen (tot
 * 351 kB). De mobiele variant is 900px breed; de desktopvariant houden we
 * alleen als hij écht kleiner is dan het origineel. Sommige posters zijn
 * videostills met veel korrel; die comprimeren slecht en blijven dan gewoon
 * zoals ze waren.
 *
 * Draaien:  node scripts/hero-posters.mjs
 */
import sharp from "sharp";
import fs from "node:fs";

const POSTERS = [
  "home-hero-poster.jpg",
  "events-hero-poster.jpg",
  "games-hero-v5.jpg",
  "vo-hero-office.jpg",
  "tech-hulp-hero-poster.jpg",
  "blog/blog-hero.webp",
  "about-hero.webp",
  "downloads-hero.webp",
];

const kB = (p) => Math.round(fs.statSync(p).size / 1024);

for (const naam of POSTERS) {
  const bron = "public/images/" + naam;
  if (!fs.existsSync(bron)) { console.log("  mist:", naam); continue; }
  const basis = naam.replace(/\.(jpe?g|png|webp)$/, "");
  const meta = await sharp(bron).metadata();

  const mobiel = `public/images/${basis}-mobiel.webp`;
  await sharp(bron).resize({ width: Math.min(900, meta.width) }).webp({ quality: 72, effort: 6 }).toFile(mobiel);

  const desktop = `public/images/${basis}-desktop.webp`;
  await sharp(bron).resize({ width: Math.min(1600, meta.width) }).webp({ quality: 70, effort: 6 }).toFile(desktop);

  const behouden = kB(desktop) < kB(bron) * 0.9;
  if (!behouden) fs.unlinkSync(desktop);

  console.log(
    `  ${naam.padEnd(26)} ${String(meta.width + "×" + meta.height).padEnd(11)} ` +
    `origineel ${String(kB(bron)).padStart(4)} kB → mobiel ${String(kB(mobiel)).padStart(3)} kB` +
    (behouden ? `, desktop ${kB(desktop)} kB` : `, desktop: origineel is al kleiner`)
  );
}
