/**
 * Spiegelt de inhoud van één beeldscherm binnen een foto, zonder de rest aan
 * te raken.
 *
 * Waarom: op de conferentie-hero staat het hele beeld in spiegelbeeld, dus de
 * tekst op het dashboard leest achterstevoren. Het hele beeld omdraaien lost dat
 * op, maar dan verhuist de persoon naar de andere kant en staat de lichte kant
 * juist waar de kop staat. Dus draaien we alleen het scherm om.
 *
 * Een gewone rechthoekige spiegeling werkt niet: het scherm staat in
 * perspectief, dus de linkerrand loopt anders dan de rechter. Daarom rekenen we
 * met een homografie — we mappen het scherm naar een vierkant, spiegelen daarin,
 * en mappen terug. De schermrand blijft daardoor exact op zijn plek.
 *
 *   node scripts/scherm-spiegelen.mjs <bron> <doel> x1,y1 x2,y2 x3,y3 x4,y4
 *
 * De vier hoekpunten met de klok mee vanaf linksboven, in pixels van de bron.
 * Neem ze iets ruim: net in de zwarte schermrand spiegelen valt niet op, maar
 * een randje missen wel.
 */
import sharp from "sharp";

const [bron, doel, ...hoeken] = process.argv.slice(2);
if (!bron || !doel || hoeken.length !== 4) {
  console.error("Gebruik: node scripts/scherm-spiegelen.mjs <bron> <doel> x1,y1 x2,y2 x3,y3 x4,y4");
  process.exit(1);
}
const Q = hoeken.map((h) => h.split(",").map(Number));

/** Homografie van het eenheidsvierkant naar de vier hoekpunten. */
function homografie([p0, p1, p2, p3]) {
  const [x0, y0] = p0, [x1, y1] = p1, [x2, y2] = p2, [x3, y3] = p3;
  const dx1 = x1 - x2, dx2 = x3 - x2, sx = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2, dy2 = y3 - y2, sy = y0 - y1 + y2 - y3;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (sx * dy2 - dx2 * sy) / den;
  const h = (dx1 * sy - sx * dy1) / den;
  return [
    [x1 - x0 + g * x1, x3 - x0 + h * x3, x0],
    [y1 - y0 + g * y1, y3 - y0 + h * y3, y0],
    [g, h, 1],
  ];
}

function inverteer(m) {
  const [[a, b, c], [d, e, f], [g, h, i]] = m;
  const A = e * i - f * h, B = c * h - b * i, C = b * f - c * e;
  const D = f * g - d * i, E = a * i - c * g, F = c * d - a * f;
  const G = d * h - e * g, H = b * g - a * h, I = a * e - b * d;
  const det = a * A + b * D + c * G;
  return [[A / det, B / det, C / det], [D / det, E / det, F / det], [G / det, H / det, I / det]];
}

const pas = (m, x, y) => {
  const w = m[2][0] * x + m[2][1] * y + m[2][2];
  return [(m[0][0] * x + m[0][1] * y + m[0][2]) / w, (m[1][0] * x + m[1][1] * y + m[1][2]) / w];
};

const { data, info } = await sharp(bron).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;
const uit = Buffer.from(data);

const Hm = homografie(Q);
const Hi = inverteer(Hm);
const xs = Q.map((p) => p[0]), ys = Q.map((p) => p[1]);
const x0 = Math.max(0, Math.floor(Math.min(...xs))), x1 = Math.min(W, Math.ceil(Math.max(...xs)));
const y0 = Math.max(0, Math.floor(Math.min(...ys))), y1 = Math.min(H, Math.ceil(Math.max(...ys)));

/** Bilineair bemonsteren; anders wordt de gespiegelde tekst rafelig. */
function bemonster(fx, fy, px) {
  const ix = Math.floor(fx), iy = Math.floor(fy), tx = fx - ix, ty = fy - iy;
  for (let c = 0; c < C; c++) {
    let v = 0;
    for (const [dx, dy, w] of [[0, 0, (1 - tx) * (1 - ty)], [1, 0, tx * (1 - ty)], [0, 1, (1 - tx) * ty], [1, 1, tx * ty]]) {
      const sx = Math.min(W - 1, Math.max(0, ix + dx));
      const sy = Math.min(H - 1, Math.max(0, iy + dy));
      v += data[(sy * W + sx) * C + c] * w;
    }
    uit[px + c] = Math.round(v);
  }
}

let n = 0;
for (let y = y0; y < y1; y++) {
  for (let x = x0; x < x1; x++) {
    const [u, v] = pas(Hi, x + 0.5, y + 0.5);
    if (u < 0 || u > 1 || v < 0 || v > 1) continue;
    const [sx, sy] = pas(Hm, 1 - u, v); // gespiegeld in de breedte
    if (sx < 0 || sy < 0 || sx >= W - 1 || sy >= H - 1) continue;
    bemonster(sx, sy, (y * W + x) * C);
    n++;
  }
}

await sharp(uit, { raw: { width: W, height: H, channels: C } }).png().toFile(doel);
console.log(`${n.toLocaleString("nl-NL")} pixels gespiegeld binnen het scherm → ${doel}`);
