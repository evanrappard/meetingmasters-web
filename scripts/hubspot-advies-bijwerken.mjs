/**
 * Werkt het adviesformulier bij in HubSpot, in beide talen.
 *
 *   node scripts/hubspot-advies-bijwerken.mjs --dry-run   # toont wat er verandert
 *   node scripts/hubspot-advies-bijwerken.mjs             # voert het door
 *
 * Waarom een apart script: `create-hubspot-forms.mjs` maakt formulieren aan en
 * slaat bestaande over. Dat is bewust, anders overschrijf je per ongeluk
 * handwerk in HubSpot. Wil je een bestaand formulier wél wijzigen, dan doe je
 * dat gericht, zoals hier.
 *
 * Wat dit script doet (26 augustus 2026):
 *  1. Het logo bovenaan, zodat de afzender herkenbaar is als het formulier los
 *     opent. Zelfde beeld en maat als het nieuwsbriefformulier al gebruikte;
 *     dat staat al in de bestandsmanager van HubSpot.
 *  2. Het label van het berichtveld: "Je vraag of bericht" wordt "Vraag of
 *     bericht" (Engels: "Question or message").
 *  3. Een uploadveld eronder, zodat iemand een bestand of foto kan meesturen.
 *     Dat schrijft naar de contacteigenschap `mm_bijlage` (type string,
 *     fieldType file).
 *
 * Vóór elke wijziging schrijft het script een reservekopie van het formulier
 * naar `schermafdrukken/hubspot-backups/`. Ging er iets mis, dan zet je die
 * terug met een PATCH.
 */

import { config } from "dotenv";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env.local") });

const TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
if (!TOKEN) {
  console.error("Ontbrekende HUBSPOT_PRIVATE_APP_TOKEN in .env.local");
  process.exit(1);
}
const DRY_RUN = process.argv.includes("--dry-run");

/** De twee formulieren, zoals ze in lib/hubspot-forms.ts staan. */
const FORMULIEREN = {
  nl: {
    id: "02bdc77f-14e3-4826-9d48-96449c8ca062",
    berichtLabel: "Vraag of bericht",
    bijlageLabel: "Bestand of foto meesturen (optioneel)",
  },
  en: {
    id: "e4d50964-6457-440f-a73c-5f31726c6060",
    berichtLabel: "Question or message",
    bijlageLabel: "Attach a file or photo (optional)",
  },
};

/**
 * Het logo staat al in de bestandsmanager van HubSpot; dit is hetzelfde adres
 * en dezelfde maat als het nieuwsbriefformulier gebruikt. Geen tweede kopie,
 * dus geen twee logo's die uit elkaar kunnen lopen.
 */
const LOGO_BLOK = {
  groupType: "default_group",
  richTextType: "text",
  richText:
    '<p><img src="https://147433380.fs1.hubspotusercontent-eu1.net/hubfs/147433380/LogoMM%20kopie.png"' +
    ' style="height: auto; max-width: 160px; width: 160px;" alt="MeetingMasters" width="160" height="58" loading="lazy"></p>',
};

const BIJLAGE_VELD = (label) => ({
  objectTypeId: "0-1",
  name: "mm_bijlage",
  label,
  required: false,
  hidden: false,
  fieldType: "file",
});

async function hs(pad, opties = {}) {
  const res = await fetch(`https://api.hubapi.com${pad}`, {
    ...opties,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      ...opties.headers,
    },
  });
  const tekst = await res.text();
  const body = tekst ? JSON.parse(tekst) : null;
  if (!res.ok) {
    throw new Error(`${res.status} ${pad} — ${body?.message ?? res.statusText}`);
  }
  return body;
}

const backupMap = resolve(__dirname, "../schermafdrukken/hubspot-backups");

for (const [taal, f] of Object.entries(FORMULIEREN)) {
  const form = await hs(`/marketing/v3/forms/${f.id}`);
  mkdirSync(backupMap, { recursive: true });
  const backup = resolve(backupMap, `advies-${taal}-voor.json`);
  writeFileSync(backup, JSON.stringify(form, null, 2));

  const groepen = [...form.fieldGroups];

  // 1. Logo bovenaan, alleen als het er nog niet staat.
  const heeftLogo = groepen.some((g) => (g.richText ?? "").includes("LogoMM"));
  if (!heeftLogo) groepen.unshift(LOGO_BLOK);

  // 2 en 3. Label bijstellen en het uploadveld eronder zetten.
  const heeftBijlage = groepen.some((g) => (g.fields ?? []).some((v) => v.name === "mm_bijlage"));
  const uit = [];
  for (const g of groepen) {
    const velden = (g.fields ?? []).map((v) =>
      v.name === "message" ? { ...v, label: f.berichtLabel } : v
    );
    uit.push({ ...g, ...(g.fields ? { fields: velden } : {}) });
    if (!heeftBijlage && velden.some((v) => v.name === "message")) {
      uit.push({ groupType: "default_group", richTextType: "text", fields: [BIJLAGE_VELD(f.bijlageLabel)] });
    }
  }

  console.log(`\n${taal.toUpperCase()} — ${form.name}`);
  console.log(`  logo bovenaan:      ${heeftLogo ? "stond er al" : "toegevoegd"}`);
  console.log(`  berichtlabel:       "${f.berichtLabel}"`);
  console.log(`  uploadveld:         ${heeftBijlage ? "stond er al" : "toegevoegd"}`);
  console.log(`  reservekopie:       ${backup.replace(resolve(__dirname, ".."), ".")}`);

  if (DRY_RUN) {
    console.log("  (proefdraai, niets gewijzigd)");
    continue;
  }

  await hs(`/marketing/v3/forms/${f.id}`, {
    method: "PATCH",
    body: JSON.stringify({ fieldGroups: uit }),
  });
  console.log("  bijgewerkt in HubSpot");
}
