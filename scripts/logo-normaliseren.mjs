/**
 * Zet losse tool-logo's om naar één strakke reeks: overal dezelfde
 * hoogte, dezelfde witruimte erboven en eronder, en een doorzichtige
 * achtergrond zodat ze op elke kleur passen.
 *
 *   node scripts/logo-normaliseren.mjs
 *
 * De witte achtergrond wordt weggehaald met een vulling vanaf de rand, niet
 * met een simpele kleurdrempel. Dat is belangrijk: in het Vote Company-logo
 * en in de letters van Zoom Events zit óók wit, en dat moet blijven staan.
 *
 * Komen er tools bij (bv. voor opnames en transcripten): zet ze in LOGOS
 * en draai het script opnieuw. Bestaande bestanden worden overgeslagen.
 */
import sharp from "sharp";
import { existsSync } from "node:fs";

const DOWNLOADS = "/Users/emilievanrappard/Downloads/";

const LOGOS = [
  ["zoom", "zoom.png"],
  ["zoom-events", "zoom events.png"],
  ["teams", "teams.jpeg"],
  ["spatialchat", "spatialchat.jpeg"],
  ["miro", "miro logo.png"],
  ["mentimeter", "mentimeter logo.png"],
  ["kahoot", "kahoot logo.png"],
  ["streamalive", "streamalive logo.jpeg"],
  ["votecompany", "votecompany.png"],
];

// Doek en inhoudsvak. De inhoud past altijd binnen VAK_B x VAK_H en staat
// gecentreerd, dus de witruimte boven en onder is per definitie gelijk.
const DOEK_B = 440, DOEK_H = 176;
const VAK_B = 380, VAK_H = 92;
const WIT = 240; // vanaf deze waarde per kanaal geldt een pixel als achtergrond

/** Maakt de achtergrond doorzichtig via een vulling vanaf de rand. */
function achtergrondWeg(data, W, H) {
  const achter = new Uint8Array(W * H);
  const stapel = [];
  const isWit = (i) => data[i] >= WIT && data[i + 1] >= WIT && data[i + 2] >= WIT;

  for (let x = 0; x < W; x++) {
    for (const y of [0, H - 1]) {
      const p = y * W + x;
      if (!achter[p] && isWit(p * 4)) { achter[p] = 1; stapel.push(p); }
    }
  }
  for (let y = 0; y < H; y++) {
    for (const x of [0, W - 1]) {
      const p = y * W + x;
      if (!achter[p] && isWit(p * 4)) { achter[p] = 1; stapel.push(p); }
    }
  }
  while (stapel.length) {
    const p = stapel.pop();
    const x = p % W, y = (p / W) | 0;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
      const q = ny * W + nx;
      if (achter[q] || !isWit(q * 4)) continue;
      achter[q] = 1; stapel.push(q);
    }
  }
  for (let p = 0; p < W * H; p++) if (achter[p]) data[p * 4 + 3] = 0;
  return achter;
}

/** Kleinste rechthoek om alles wat niet doorzichtig is. */
function inhoudsvak(data, W, H) {
  let x0 = W, y0 = H, x1 = -1, y1 = -1;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * 4 + 3] > 24) {
        if (x < x0) x0 = x; if (x > x1) x1 = x;
        if (y < y0) y0 = y; if (y > y1) y1 = y;
      }
    }
  }
  return x1 < 0 ? null : { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
}

const overschrijf = process.argv.includes("--overschrijf");

// ── Ronde 1: uitsnijden en het inktoppervlak meten ──────────────────────
// Schalen op het omhullende kader laat een compact woordmerk (Zoom) veel
// groter ogen dan een breed logo (streamAlive). Daarom normaliseren we op
// hoeveel inkt er staat, niet op hoe groot het kader is.
const gemeten = [];
for (const [naam, bestand] of LOGOS) {
  const bron = DOWNLOADS + bestand;
  if (!existsSync(bron)) { console.error(`ONTBREEKT: ${bestand}`); continue; }

  const { data, info } = await sharp(bron).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  achtergrondWeg(data, info.width, info.height);
  const vak = inhoudsvak(data, info.width, info.height);
  if (!vak) { console.error(`geen inhoud gevonden in ${bestand}`); continue; }

  let inkt = 0;
  for (let y = vak.top; y < vak.top + vak.height; y++)
    for (let x = vak.left; x < vak.left + vak.width; x++)
      if (data[(y * info.width + x) * 4 + 3] > 24) inkt++;

  const bijgesneden = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract(vak).png().toBuffer();

  gemeten.push({ naam, bijgesneden, vak, inkt, bron: `${info.width}x${info.height}` });
}

// Doelinkt = mediaan van wat elk logo zou hebben bij een uitsnede op kaderbasis.
const bijKader = gemeten.map((g) => {
  const s = Math.min(VAK_B / g.vak.width, VAK_H / g.vak.height);
  return g.inkt * s * s;
}).sort((a, b) => a - b);
const doelInkt = bijKader[Math.floor(bijKader.length / 2)];

// ── Ronde 2: schalen en op het doek zetten ──────────────────────────────
let gemaakt = 0, overgeslagen = 0;
for (const g of gemeten) {
  const uit = `public/images/logos/tools/${g.naam}.webp`;
  if (existsSync(uit) && !overschrijf) { console.log(`bestaat al, overgeslagen: ${g.naam}  (--overschrijf om te vernieuwen)`); overgeslagen++; continue; }

  // Schaal op inkt, maar nooit buiten het vak.
  const opInkt = Math.sqrt(doelInkt / g.inkt);
  const maxPas = Math.min(VAK_B / g.vak.width, VAK_H / g.vak.height);
  const schaal = Math.min(opInkt, maxPas);

  const b = Math.max(1, Math.round(g.vak.width * schaal));
  const h = Math.max(1, Math.round(g.vak.height * schaal));
  const geschaald = await sharp(g.bijgesneden).resize(b, h, { fit: "fill" }).png().toBuffer();

  const i = await sharp({
    create: { width: DOEK_B, height: DOEK_H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: geschaald, left: Math.round((DOEK_B - b) / 2), top: Math.round((DOEK_H - h) / 2) }])
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(uit);

  const rem = schaal === maxPas ? " (vak vol)" : "";
  console.log(`${g.naam.padEnd(13)} bron ${g.bron} → ${b}x${h} op ${i.width}x${i.height}  ${Math.round(i.size / 1024)} kB${rem}`);
  gemaakt++;
}
console.log(`\nklaar: ${gemaakt} gemaakt, ${overgeslagen} overgeslagen`);
