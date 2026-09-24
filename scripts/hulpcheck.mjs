/**
 * Controleert de hulpvragen op /nl/technologie/hulp en hun aanvullingen.
 *
 * De mobiele regels staan in `notities.ts`, met het id van een
 * vraag als sleutel. Dat id is `<tool>-<categorie>-<nummer>`, en dat nummer is
 * de plek in de lijst — verschuif je een vraag, dan hangt de notitie ineens
 * onder een andere vraag. Dit script vangt dat: het meldt sleutels die bij
 * geen enkele vraag horen, en notities die maar in één taal bestaan.
 *
 * Draaien: npm run hulpcheck
 */
import { VRAGEN } from "../app/nl/technologie/hulp/vragen.ts";
import { VRAGEN_EN } from "../app/nl/technologie/hulp/vragen-en.ts";
import { NOTITIES } from "../app/nl/technologie/hulp/notities.ts";

let fouten = 0;
const meld = (regel) => {
  console.log("  " + regel);
  fouten++;
};

const ids = new Set(VRAGEN.map((v) => v.id));
const idsEn = new Set(VRAGEN_EN.map((v) => v.id));

console.log(`Vragen: ${VRAGEN.length} NL, ${VRAGEN_EN.length} EN`);
if (VRAGEN.length !== VRAGEN_EN.length) meld("Niet evenveel vragen in beide talen.");

for (const id of ids) if (!idsEn.has(id)) meld(`${id} bestaat alleen in het Nederlands.`);
for (const id of idsEn) if (!ids.has(id)) meld(`${id} bestaat alleen in het Engels.`);

for (const [id, n] of Object.entries(NOTITIES)) {
  if (!ids.has(id)) {
    meld(`Notitie "${id}" hoort bij geen enkele vraag — is er een vraag verschoven of hernoemd?`);
    continue;
  }
  for (const veld of ["mobiel", "iphone", "android"]) {
    if (Boolean(n.nl?.[veld]) !== Boolean(n.en?.[veld]))
      meld(`Notitie "${id}": ${veld} staat wel in het ${n.nl?.[veld] ? "Nederlands" : "Engels"} maar niet in het ${n.nl?.[veld] ? "Engels" : "Nederlands"}.`);
  }
  if (!n.nl?.mobiel && !n.nl?.iphone && !n.nl?.android)
    meld(`Notitie "${id}" is leeg; haal hem weg.`);
}

const metMobiel = VRAGEN.filter((v) => v.mobiel || v.iphone || v.android).length;
const metToestel = VRAGEN.filter((v) => v.iphone || v.android).length;
console.log(`Aanvullingen: ${metMobiel} vragen met een mobiel-blokje, waarvan ${metToestel} met losse regels voor iPhone en Android.`);

// Windows en Mac horen tussen de stappen te staan, met de naam vooraan.
for (const v of [...VRAGEN, ...VRAGEN_EN]) {
  for (const s of v.stappen ?? []) {
    if (/\b(Windows|Mac)\b/.test(s) && !/^(Windows|Mac|Op Windows|Op een Mac)\b/.test(s))
      meld(`${v.id}: "${s.slice(0, 60)}…" noemt Windows of Mac, maar niet vooraan in de zin.`);
  }
}

if (fouten) {
  console.log(`\n${fouten} ${fouten === 1 ? "probleem" : "problemen"} gevonden.`);
  process.exit(1);
}
console.log("Alles klopt.");
