/**
 * Bouwt de hero-video van de homepage opnieuw op, mét een rustpauze.
 *
 *   node scripts/hero-video-pauze.mjs                    → 1,8 s pauze, crf 29
 *   node scripts/hero-video-pauze.mjs 2.5                → eigen pauzeduur
 *   node scripts/hero-video-pauze.mjs --crf=25           → mooier en zwaarder
 *   node scripts/hero-video-pauze.mjs --naam=proef.mp4   → ander uitvoerbestand
 *   node scripts/hero-video-pauze.mjs --overschrijf      → bestaand bestand vervangen
 *
 * Wat er gebeurt, en waarom zo:
 *
 * 1. **Bron.** `Downloads/welcome hero stock.mp4` — 387 frames, 30 fps, 1080p.
 *    Eén ronde: de bubbel staat achterin in het kleine cirkeltje, komt naar
 *    voren, groet het tweetal, en gaat weer terug. We bouwen vanaf het origineel
 *    en niet vanaf `hero-boomerang.mp4`, want dat is al één keer gecomprimeerd;
 *    daar nog een ronde overheen kost zichtbaar kwaliteit.
 *
 * 2. **20% vertraagd** (`setpts=1.25*PTS`), zoals het bestaande bestand. 387 →
 *    484 frames, 16,1 s.
 *
 * 3. **Boomerang**: heen, en daarna dezelfde beelden achterstevoren. Dat is nodig
 *    omdat de bron níét rond loopt: het laatste beeld verschilt meetbaar van het
 *    eerste (gemiddeld verschil 1,7 op een schaal waar opeenvolgende beelden in
 *    de rustfase 0,06 tot 0,15 schelen). Zou je de bron kaal herhalen, dan zie je
 *    bij elke ronde een sprongetje. Achterstevoren erachter plakken maakt de naad
 *    onzichtbaar: einde en begin zijn dan hetzelfde beeld.
 *
 * 4. **De pauze.** De bubbel staat twee keer per ronde stil achterin: halverwege
 *    (het keerpunt van de boomerang) en aan het eind (de naad naar de volgende
 *    ronde). Op allebei die plekken bevriezen we het laatste beeld, anders krijg
 *    je een ongelijk ritme. Het naar voren komen blijft even snel.
 *
 * 5. **Compressie: CRF 29.** Gemeten tegen een bijna verliesvrije ijkversie
 *    (SSIM): crf 25 → 0,993 bij 2,68 MB; crf 29 → 0,988 bij 1,61 MB; crf 31 →
 *    0,985 bij 1,30 MB. Op ware grootte is 29 niet van 25 te onderscheiden,
 *    ook niet op de gezichten in de bubbels — en dit beeld staat achter een
 *    verloop, op een band die naar 1440 px wordt teruggeschaald. VP9 (2,84 MB)
 *    en AV1 (4,37 MB) waren op vergelijkbare kwaliteit groter dan H.264, dus
 *    een WebM-variant ernaast heeft hier geen zin.
 *
 * Uitvoer: `public/videos/hero-boomerang-pauze-licht.mp4`. Eerdere versies
 * (`hero-boomerang.mp4`, `hero-boomerang-pauze.mp4`) blijven staan; dit script
 * overschrijft niets zonder `--overschrijf`.
 */
import { spawn } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import ffmpeg from "ffmpeg-static";

const args = process.argv.slice(2);
const pauze = Number(args.find((a) => !a.startsWith("--")) ?? 1.8);
const overschrijven = args.includes("--overschrijf");
const crf = Number(args.find((a) => a.startsWith("--crf="))?.slice(6) ?? 29);
const naam = args.find((a) => a.startsWith("--naam="))?.slice(7)
  ?? "hero-boomerang-pauze-licht.mp4";

if (!Number.isFinite(pauze) || pauze < 0 || pauze > 10) {
  console.error("Geef een pauze tussen 0 en 10 seconden.");
  process.exit(1);
}
if (!Number.isInteger(crf) || crf < 16 || crf > 40) {
  console.error("Geef een crf tussen 16 en 40 (lager = mooier en zwaarder).");
  process.exit(1);
}

const bron = join(homedir(), "Downloads", "welcome hero stock.mp4");
const doel = join(process.cwd(), "public", "videos", naam);

if (!existsSync(bron)) {
  console.error(`Bronbestand niet gevonden: ${bron}`);
  process.exit(1);
}
if (existsSync(doel) && !overschrijven) {
  console.error(`${doel} bestaat al. Gebruik --overschrijf als je hem wilt vervangen.`);
  process.exit(1);
}

const filter = [
  `[0:v]setpts=1.25*PTS,fps=30,split[heen][terug]`,
  `[heen]tpad=stop_mode=clone:stop_duration=${pauze}[a]`,
  `[terug]reverse,tpad=stop_mode=clone:stop_duration=${pauze}[b]`,
  `[a][b]concat=n=2:v=1:a=0[v]`,
].join(";");

console.log(`Bouwen met ${pauze} s pauze op beide rustpunten, crf ${crf} → ${naam}…`);

const ff = spawn(ffmpeg, [
  "-hide_banner", "-loglevel", "error", "-stats",
  "-i", bron,
  "-filter_complex", filter,
  "-map", "[v]", "-an",
  "-c:v", "libx264", "-preset", "slow", "-crf", String(crf),
  "-pix_fmt", "yuv420p", "-movflags", "+faststart",
  "-y", doel,
], { stdio: "inherit" });

ff.on("close", (code) => {
  if (code !== 0) {
    console.error(`ffmpeg stopte met code ${code}`);
    process.exit(code ?? 1);
  }
  const mb = (statSync(doel).size / 1024 / 1024).toFixed(2);
  console.log(`\nKlaar: ${doel} (${mb} MB)`);
});
