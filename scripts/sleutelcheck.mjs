/**
 * Waarschuwt als er een sleutel in de code belandt.
 *
 *   node scripts/sleutelcheck.mjs            → kijkt naar wat er klaarstaat voor de commit
 *   node scripts/sleutelcheck.mjs --alles    → kijkt naar alle bestanden in git
 *
 * Aanleiding: het Sanity-schrijftoken stond hard in `scripts/seed-sanity.mjs` en
 * deze repository is openbaar. Het lag daarmee vanaf 8 juni 2026 op straat.
 * Sleutels horen in `.env.local`, dat in .gitignore staat.
 *
 * Deze controle draait automatisch vóór elke commit via `.githooks/pre-commit`.
 * Werkt dat bij jou niet, dan staat de haak nog niet aan:
 *
 *   git config core.hooksPath .githooks
 *
 * Vind je een terechte treffer, dan is de code weghalen niet genoeg: een sleutel
 * die ooit gecommit is, staat in de geschiedenis. Trek hem in bij de dienst zelf
 * en maak een nieuwe aan.
 */
import { execSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";

/** Waar we niet naar kijken: gegenereerd, gedownload of van nature vol hashes. */
const OVERSLAAN = [
  /(^|\/)node_modules\//,
  /(^|\/)\.next\//,
  /(^|\/)package-lock\.json$/,
  /(^|\/)\.git\//,
  /\.(png|jpe?g|webp|avif|gif|svg|ico|mp4|webm|woff2?|pdf|zip)$/i,
];

/**
 * De patronen. Elk met een naam, zodat de melding zegt wát er gevonden is.
 * Bewust streng op vorm en lengte: liever een enkele valse treffer die je
 * wegstreept dan een sleutel die erdoorheen glipt.
 */
const PATRONEN = [
  { naam: "Sanity-token", regex: /\bsk[A-Za-z0-9]{40,}\b/ },
  { naam: "HubSpot private app token", regex: /\bpat-[a-z0-9]{2,4}-[A-Za-z0-9-]{20,}\b/ },
  { naam: "JWT (bv. Supabase service role)", regex: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/ },
  { naam: "AWS-sleutel", regex: /\bAKIA[0-9A-Z]{16}\b/ },
  { naam: "OpenAI-sleutel", regex: /\bsk-(proj-)?[A-Za-z0-9]{32,}\b/ },
  { naam: "Google API-sleutel", regex: /\bAIza[0-9A-Za-z_-]{35}\b/ },
  { naam: "privésleutel", regex: /-----BEGIN [A-Z ]*PRIVATE KEY-----/ },
];

/**
 * Voorbeelden en placeholders zijn geen sleutels. `pat-eu1-...` in een
 * commentaarregel is uitleg, geen lek.
 */
const ONSCHULDIG = [/\.{3}/, /<[a-z-]+>/i, /XXXX/i, /\bvoorbeeld\b/i, /\bexample\b/i];

const alles = process.argv.includes("--alles");
const bestanden = execSync(
  alles ? "git ls-files" : "git diff --cached --name-only --diff-filter=ACM",
  { encoding: "utf8" }
)
  .split("\n")
  .filter(Boolean)
  .filter((f) => !OVERSLAAN.some((r) => r.test(f)));

const treffers = [];

for (const bestand of bestanden) {
  let inhoud;
  try {
    if (statSync(bestand).size > 2_000_000) continue;
    inhoud = readFileSync(bestand, "utf8");
  } catch {
    continue; // verwijderd of onleesbaar
  }
  inhoud.split("\n").forEach((regel, i) => {
    for (const { naam, regex } of PATRONEN) {
      const m = regel.match(regex);
      if (!m) continue;
      if (ONSCHULDIG.some((r) => r.test(regel))) continue;
      treffers.push({
        bestand,
        regel: i + 1,
        naam,
        stukje: m[0].slice(0, 12) + "…",
      });
    }
  });
}

if (treffers.length === 0) {
  console.log(
    `Sleutelcontrole: schoon (${bestanden.length} ${bestanden.length === 1 ? "bestand" : "bestanden"} bekeken).`
  );
  process.exit(0);
}

console.error("\n  Mogelijke sleutel gevonden. De commit is tegengehouden.\n");
for (const t of treffers) {
  console.error(`  ${t.bestand}:${t.regel}  ${t.naam}  (${t.stukje})`);
}
console.error(`
  Deze repository is openbaar. Zet de sleutel in .env.local en lees hem uit met
  process.env, zoals scripts/create-hubspot-forms.mjs doet.

  Klopt de melding niet? Dan kun je deze commit doorlaten met:
      git commit --no-verify
`);
process.exit(1);
