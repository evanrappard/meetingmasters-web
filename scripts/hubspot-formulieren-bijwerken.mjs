/**
 * Werkt bestaande HubSpot-formulieren bij, in beide talen.
 *
 *   node scripts/hubspot-formulieren-bijwerken.mjs --dry-run       # toont wat er verandert
 *   node scripts/hubspot-formulieren-bijwerken.mjs                 # alle formulieren hieronder
 *   node scripts/hubspot-formulieren-bijwerken.mjs --alleen demo   # alleen dat ene
 *
 * Waarom naast `create-hubspot-forms.mjs`: dat script maakt formulieren áán en
 * slaat bestaande over. Dat is bewust, anders overschrijf je handwerk in HubSpot.
 * Wil je een bestaand formulier wél wijzigen, dan doe je dat hier, gericht en
 * met een reservekopie.
 *
 * Alles hieronder is herhaalbaar: staat het logo, een veld of een stijl al goed,
 * dan verandert er niets. Vóór elke wijziging gaat er een kopie van het
 * formulier naar `schermafdrukken/hubspot-backups/`.
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
const alleenArg = process.argv.indexOf("--alleen");
const ALLEEN = alleenArg !== -1 ? process.argv[alleenArg + 1] : null;

/**
 * De huisstijl van de formulieren. HubSpot rendert ze in een eigen venster, dus
 * onze CSS komt er niet bij: dit zijn de enige knoppen die we hebben.
 *
 * - De verzendknop stond op HubSpot-oranje. Nu MM-geel met donkere letters,
 *   zoals elke knop op de site.
 * - De disclaimer stond op 14px en schreeuwde daarmee harder dan de labels
 *   erboven. Nu 11px, gelijk aan die labels.
 */
const STIJL = {
  submitColor: "#EEBE3D",
  submitFontColor: "#2D2D2D",
  legalConsentTextSize: "11px",
};

/**
 * Het logo staat al in de bestandsmanager van HubSpot; dit is hetzelfde adres
 * dat het nieuwsbriefformulier gebruikt. Eén bestand, dus geen twee logo's die
 * uit elkaar kunnen lopen. Nodig omdat een formulier soms los opent, en er dan
 * geen enkele verwijzing naar de afzender in beeld is.
 */
const LOGO_BLOK = {
  groupType: "default_group",
  richTextType: "text",
  richText:
    '<p><img src="https://147433380.fs1.hubspotusercontent-eu1.net/hubfs/147433380/LogoMM%20kopie.png"' +
    ' style="height: auto; max-width: 160px; width: 160px;" alt="MeetingMasters" width="160" height="58" loading="lazy"></p>',
};

const veld = (name, label, fieldType, extra = {}) => ({
  objectTypeId: "0-1",
  name,
  label,
  required: false,
  hidden: false,
  fieldType,
  ...extra,
});

/**
 * De keuzelijst slaat de wáárde op, niet het label. Het Engelse formulier toont
 * dus een Engels label bij dezelfde waarde, en in HubSpot komt alles in één veld
 * terecht. Zelfde afspraak als in create-hubspot-forms.mjs.
 */
const INTERESSE_OPTIES = {
  nl: ["Algemeen", "Events", "Virtueel kantoor", "Escape Room", "Anders"],
  en: ["General", "Events", "Virtual office", "Escape room", "Something else"],
};
const INTERESSE_WAARDEN = ["algemeen", "events", "virtueel-kantoor", "escape-room", "anders"];

/**
 * Let op het veldtype: de contacteigenschap heet in de CRM-API `checkbox`, maar
 * de Forms-API kent dat woord niet. Daar heet hetzelfde ding
 * `multiple_checkboxes`.
 */
const interesseVeld = (taal, label) =>
  veld("mm_interesse", label, "multiple_checkboxes", {
    options: INTERESSE_WAARDEN.map((value, i) => ({
      label: INTERESSE_OPTIES[taal][i],
      value,
      displayOrder: i,
    })),
  });

/**
 * De keuzelijst "wat wil je boeken / waar gaat je vraag over". Zelfde waarden op
 * beide formulieren en in beide talen, zodat alles in HubSpot in één veld
 * terechtkomt en vergelijkbaar blijft.
 *
 * `escapemasters` staat nog wel in de contacteigenschap, maar niet meer in de
 * formulieren: oude aanmeldingen moeten leesbaar blijven.
 */
const BOEKING_WAARDEN = ["zaaltje", "event", "ravenhack", "anders"];
const BOEKING_OPTIES = {
  nl: ["Online zaaltje", "Event", "Escape Room R@venHack", "Anders (licht hieronder toe)"],
  en: ["Online meeting room", "Event", "Escape Room R@venHack", "Other (please specify below)"],
};
const boekingVeld = (taal, label) =>
  veld("mm_boeking_type", label, "dropdown", {
    options: BOEKING_WAARDEN.map((value, i) => ({
      label: BOEKING_OPTIES[taal][i],
      value,
      displayOrder: i,
    })),
  });

/**
 * Per formulier: wat er moet staan.
 *
 *   labels        past het label van een bestaand veld aan
 *   placeholders  zet een voorbeeldtekst ín een bestaand veld
 *   voorVeld      zet een nieuw veld vóór een bestaand veld
 *   naVeld        zet een nieuw veld ná een bestaand veld
 *   opDezelfdeRegel  zet een nieuw veld naast een bestaand veld, in dezelfde
 *                    groep; HubSpot toont een groep met twee velden als één rij
 *   velden        vervangt een bestaand veld door een nieuwe versie
 *   weg           haalt een veld uit het formulier (de gegevens in HubSpot
 *                 blijven bestaan)
 */
const FORMULIEREN = {
  advies: {
    nl: {
      id: "02bdc77f-14e3-4826-9d48-96449c8ca062",
      knop: "Verstuur",
      dank: "Dank je wel. We komen uiterlijk binnen twee dagen bij je terug. Meer haast? Bel ons even: 020 239 03 13.",
      labels: { message: "Vraag of bericht" },
      naVeld: { message: () => veld("mm_bijlage", "Bestand of foto meesturen (optioneel)", "file") },
    },
    en: {
      id: "e4d50964-6457-440f-a73c-5f31726c6060",
      knop: "Send",
      dank: "Thank you. We will come back to you within two days at the latest. In a hurry? Give us a call: +31 20 239 03 13.",
      labels: { message: "Question or message" },
      naVeld: { message: () => veld("mm_bijlage", "Attach a file or photo (optional)", "file") },
    },
  },
  boeking: {
    nl: {
      id: "ddf3e496-b036-4720-b7b1-44eed87f7506",
      knop: "Check beschikbaarheid",
      dank: "Dank je wel. We bevestigen je aanvraag binnen twee werkdagen. Iets met haast? Bel of mail ons: +31 6 4575 2819 | contact@meetingmasters.online",
      velden: { mm_boeking_type: () => boekingVeld("nl", "Wat wil je boeken?") },
      opDezelfdeRegel: {
        mm_gewenste_datum: () => veld("mm_voorkeurstijd", "Voorkeurstijd (van … tot)", "single_line_text", { placeholder: "bijvoorbeeld 10:00 tot 12:00" }),
      },
    },
    en: {
      id: "d2cce099-ab58-4753-915c-0d1c20a00eb1",
      knop: "Check availability",
      dank: "Thank you. We will confirm your request within 2 working days. Anything urgent? Call or email us: +31 6 45752819 | contact@meetingmasters.online",
      velden: { mm_boeking_type: () => boekingVeld("en", "What would you like to book?") },
      opDezelfdeRegel: {
        mm_gewenste_datum: () => veld("mm_voorkeurstijd", "Preferred time (from … to)", "single_line_text", { placeholder: "for example 10:00 to 12:00" }),
      },
    },
  },
  kostenindicatie: {
    nl: {
      id: "8fb6d169-df70-45f0-bb36-671df8ad0f58",
      knop: "Vraag een indicatie aan",
      dank: "Dank je wel! We komen zo snel mogelijk bij je terug. Meer haast? Bel of mail ons even: +31 6 4575 2819 | contact@meetingmasters.online",
      voorVeld: { mm_aantal_deelnemers: () => boekingVeld("nl", "Waarover gaat deze vraag?") },
      labels: { message: "Kun je hier meer over vertellen?" },
      placeholders: { message: "Soort event, doel, aanleiding, voorlopige data, voorziene duur" },
      // De keuzelijst vraagt nu waar het over gaat; het losse tekstveld met
      // dezelfde vraag zou de bezoeker twee keer hetzelfde laten invullen.
      weg: ["mm_type_event"],
    },
    en: {
      id: "ae15b8b5-de37-40eb-8172-52da38e2cff2",
      knop: "Request an estimate",
      dank: "Thank you! We will get back to you as soon as we can. In a hurry? Call or email us: +31 6 45752819 | contact@meetingmasters.online",
      voorVeld: { mm_aantal_deelnemers: () => boekingVeld("en", "What is your question about?") },
      labels: { message: "Can you tell us a bit more?" },
      placeholders: { message: "Kind of event, purpose, occasion, provisional dates, expected length" },
      weg: ["mm_type_event"],
    },
  },
  contact: {
    // Alleen de huisstijl: logo, disclaimer op 11px en de knop in MM-geel.
    nl: { id: "c747d7cd-4850-44f4-965f-a87120e55d38", knop: "Versturen" },
    en: { id: "8afa782e-bc97-4fb0-a182-2621167527d1", knop: "Send" },
  },
  demo: {
    nl: {
      id: "a052e71e-9ed7-4c11-adc9-36d8e8b26ea8",
      knop: "Plan een rondleiding",
      voorVeld: { message: () => interesseVeld("nl", "Waarover wil je meer weten en zien?") },
    },
    en: {
      id: "e7294822-87d4-4759-97fc-532b52a4c9e2",
      knop: "Book a tour",
      voorVeld: { message: () => interesseVeld("en", "What would you like to know and see more about?") },
    },
  },
};

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
  if (!res.ok) throw new Error(`${res.status} ${pad} — ${body?.message ?? res.statusText}`);
  return body;
}

const backupMap = resolve(__dirname, "../schermafdrukken/hubspot-backups");

for (const [sleutel, talen] of Object.entries(FORMULIEREN)) {
  if (ALLEEN && ALLEEN !== sleutel) continue;

  for (const [taal, f] of Object.entries(talen)) {
    const form = await hs(`/marketing/v3/forms/${f.id}`);
    mkdirSync(backupMap, { recursive: true });
    writeFileSync(resolve(backupMap, `${sleutel}-${taal}-voor.json`), JSON.stringify(form, null, 2));

    const groepen = [...form.fieldGroups];
    const aanwezig = (naam) => groepen.some((g) => (g.fields ?? []).some((v) => v.name === naam));

    // Logo bovenaan, alleen als het er nog niet staat.
    const heeftLogo = groepen.some((g) => (g.richText ?? "").includes("LogoMM"));
    if (!heeftLogo) groepen.unshift(LOGO_BLOK);

    const uit = [];
    const toegevoegd = [];
    for (const g of groepen) {
      let velden = (g.fields ?? []).map((v) => {
        let nieuwVeld = f.velden?.[v.name] ? { ...f.velden[v.name]() } : { ...v };
        if (f.labels?.[v.name]) nieuwVeld = { ...nieuwVeld, label: f.labels[v.name] };
        if (f.placeholders?.[v.name]) nieuwVeld = { ...nieuwVeld, placeholder: f.placeholders[v.name] };
        return nieuwVeld;
      });

      // Velden die eruit mogen.
      const voor = velden.length;
      velden = velden.filter((v) => !(f.weg ?? []).includes(v.name));
      if (velden.length < voor) toegevoegd.push(`${voor - velden.length} veld weg`);
      if (!velden.length && !g.richText) continue;

      // Een tweede veld in dezelfde groep, dus op dezelfde regel.
      for (const [anker, maak] of Object.entries(f.opDezelfdeRegel ?? {})) {
        const nieuw = maak();
        if (velden.some((v) => v.name === anker) && !aanwezig(nieuw.name)) {
          velden = [...velden, nieuw];
          toegevoegd.push(`${nieuw.name} naast ${anker}`);
        }
      }

      // Een nieuw veld vóór een bestaand veld.
      for (const [anker, maak] of Object.entries(f.voorVeld ?? {})) {
        const nieuw = maak();
        if (velden.some((v) => v.name === anker) && !aanwezig(nieuw.name)) {
          uit.push({ groupType: "default_group", richTextType: "text", fields: [nieuw] });
          toegevoegd.push(`${nieuw.name} vóór ${anker}`);
        }
      }

      uit.push({ ...g, ...(g.fields ? { fields: velden } : {}) });

      // Of erna.
      for (const [anker, maak] of Object.entries(f.naVeld ?? {})) {
        const nieuw = maak();
        if (velden.some((v) => v.name === anker) && !aanwezig(nieuw.name)) {
          uit.push({ groupType: "default_group", richTextType: "text", fields: [nieuw] });
          toegevoegd.push(`${nieuw.name} na ${anker}`);
        }
      }
    }

    console.log(`\n${sleutel} · ${taal.toUpperCase()} — ${form.name}`);
    console.log(`  logo:        ${heeftLogo ? "stond er al" : "toegevoegd"}`);
    console.log(`  velden:      ${toegevoegd.length ? toegevoegd.join(", ") : "geen nieuwe"}`);
    if (f.labels) console.log(`  labels:      ${Object.values(f.labels).join(", ")}`);
    console.log(`  knop:        "${f.knop}" in ${STIJL.submitColor}`);
    console.log(`  disclaimer:  ${STIJL.legalConsentTextSize}`);

    if (DRY_RUN) {
      console.log("  (proefdraai, niets gewijzigd)");
      continue;
    }

    await hs(`/marketing/v3/forms/${f.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        fieldGroups: uit,
        displayOptions: {
          ...form.displayOptions,
          submitButtonText: f.knop,
          style: { ...form.displayOptions.style, ...STIJL },
        },
        ...(f.dank && {
          configuration: {
            ...form.configuration,
            postSubmitAction: { type: "thank_you", value: f.dank },
          },
        }),
      }),
    });
    console.log("  bijgewerkt in HubSpot");
  }
}
