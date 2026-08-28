/**
 * Maakt het R@venHack-boekingsformulier aan in HubSpot, in het Nederlands en
 * het Engels, plus de contacteigenschappen die het nodig heeft.
 *
 *   node scripts/ravenhack-formulier.mjs --dry-run   laat zien wat er zou gebeuren
 *   node scripts/ravenhack-formulier.mjs             maakt het echt aan
 *
 * Het script is herhaalbaar: bestaat een eigenschap of een formulier al, dan
 * laat het die met rust en drukt alleen het ID af. Dat ID zet je in
 * config/ravenhack.ts bij BOEKINGSFORMULIER.
 *
 * Waarom een gewoon HubSpot-formulier en geen eigen API-route: HubSpot doet
 * dan zelf het opslaan, het koppelen aan een bestaand contact, de melding aan
 * Emilie en de spamcontrole. Daar hebben we geen extra rechten voor nodig — de
 * sleutel in .env.local mag formulieren en contacteigenschappen, en verder
 * niets. Zie docs/hubspot-forms.md.
 *
 * De keuzes uit de calculator (spel, taal, deelnemers, datum, prijs) komen als
 * verborgen velden mee. Die staan hieronder in VERBORGEN en moeten hetzelfde
 * heten als in config/ravenhack.ts → FORMULIERVELDEN.
 */

import { readFileSync } from "node:fs";

/* ── Sleutel en verbinding ────────────────────────────────────────────────── */

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split("\n")
    .filter((r) => r.includes("=") && !r.trim().startsWith("#"))
    .map((r) => {
      const i = r.indexOf("=");
      return [r.slice(0, i).trim(), r.slice(i + 1).trim()];
    })
);
const TOKEN = env.HUBSPOT_PRIVATE_APP_TOKEN;
if (!TOKEN) {
  console.error("HUBSPOT_PRIVATE_APP_TOKEN ontbreekt in .env.local");
  process.exit(1);
}

const DRY_RUN = process.argv.includes("--dry-run");

async function hs(pad, opties = {}) {
  const r = await fetch(`https://api.hubapi.com${pad}`, {
    ...opties,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      ...opties.headers,
    },
  });
  const tekst = await r.text();
  if (!r.ok) throw new Error(`${opties.method ?? "GET"} ${pad} → ${r.status}\n${tekst}`);
  return tekst ? JSON.parse(tekst) : null;
}

/* ── Contacteigenschappen ─────────────────────────────────────────────────── */

const GROEP = "contactinformation";

/**
 * Alles wat de calculator meestuurt is tekst, ook het deelnemersaantal en het
 * bedrag. Reden: een verborgen veld op een datum- of keuzelijst-eigenschap kan
 * bij het versturen stukbreken op de opmaak, en dat zou een boeking kosten.
 * Leesbaar is hier belangrijker dan filterbaar; de datum staat als 2026-09-12,
 * dus op alfabetische volgorde staat hij ook op chronologische volgorde.
 */
const EIGENSCHAPPEN = [
  { name: "mm_btw_nummer", label: "Btw-nummer", type: "string", fieldType: "text" },
  { name: "mm_factuur_email", label: "Factuur-e-mailadres", type: "string", fieldType: "text" },
  { name: "rh_po_nummer", label: "R@venHack PO- of referentienummer", type: "string", fieldType: "text" },
  { name: "rh_variant", label: "R@venHack versie", type: "string", fieldType: "text" },
  { name: "rh_taal", label: "R@venHack taal van de sessie", type: "string", fieldType: "text" },
  { name: "rh_deelnemers", label: "R@venHack aantal deelnemers", type: "string", fieldType: "text" },
  { name: "rh_speeldatum", label: "R@venHack gewenste datum", type: "string", fieldType: "text" },
  { name: "rh_starttijd", label: "R@venHack gewenste starttijd", type: "string", fieldType: "text" },
  { name: "rh_toeslag_toegepast", label: "R@venHack toeslag toegepast", type: "string", fieldType: "text" },
  { name: "rh_kortingscode", label: "R@venHack kortingscode", type: "string", fieldType: "text" },
  { name: "rh_kortingspercentage", label: "R@venHack kortingspercentage", type: "string", fieldType: "text" },
  { name: "rh_totaal_excl_btw", label: "R@venHack totaal excl. btw", type: "string", fieldType: "text" },
  {
    name: "rh_prijsopbouw",
    label: "R@venHack prijsopbouw",
    type: "string",
    fieldType: "textarea",
  },
];

async function zorgVoorEigenschappen() {
  const bestaand = new Set();
  const alles = await hs("/crm/v3/properties/contacts?archived=false");
  for (const p of alles.results) bestaand.add(p.name);

  for (const eigenschap of EIGENSCHAPPEN) {
    if (bestaand.has(eigenschap.name)) {
      console.log(`  = ${eigenschap.name} bestaat al`);
      continue;
    }
    if (DRY_RUN) {
      console.log(`  + ${eigenschap.name} (${eigenschap.type}) zou aangemaakt worden`);
      continue;
    }
    await hs("/crm/v3/properties/contacts", {
      method: "POST",
      body: JSON.stringify({ ...eigenschap, groupName: GROEP }),
    });
    console.log(`  + ${eigenschap.name} aangemaakt`);
  }
}

/* ── Vorm en huisstijl, gelijk aan de andere formulieren ──────────────────── */

const STIJL = { submitColor: "#EEBE3D", submitFontColor: "#2D2D2D", legalConsentTextSize: "11px" };

const LOGO_BLOK = {
  groupType: "default_group",
  richTextType: "text",
  richText:
    '<p><img src="https://147433380.fs1.hubspotusercontent-eu1.net/hubfs/147433380/LogoMM%20kopie.png"' +
    ' style="height: auto; max-width: 160px; width: 160px;" alt="MeetingMasters" width="160" height="58" loading="lazy"></p>',
};

/** Emilie krijgt de melding, net als bij de andere formulieren. */
const MELDING_AAN = "27615657";
const ABONNEMENT_ID = 1739557409;

const veld = (name, label, fieldType, verplicht = false, extra = {}) => ({
  objectTypeId: "0-1",
  name,
  label,
  required: verplicht,
  hidden: false,
  fieldType,
  ...extra,
});

/** Een verborgen veld: de bezoeker ziet het niet, de calculator vult het. */
const verborgen = (name) => ({
  objectTypeId: "0-1",
  name,
  label: name,
  required: false,
  hidden: true,
  fieldType: "single_line_text",
});

const VERBORGEN = [
  "rh_variant",
  "rh_taal",
  "rh_deelnemers",
  "rh_speeldatum",
  "rh_starttijd",
  "rh_toeslag_toegepast",
  "rh_kortingscode",
  "rh_kortingspercentage",
  "rh_prijsopbouw",
  "rh_totaal_excl_btw",
];

/* ── Teksten ──────────────────────────────────────────────────────────────── */

const TEKST = {
  nl: {
    naam: "MM Website — R@venHack boeking",
    knop: "Verstuur aanvraag",
    dank:
      "Dank je wel! We hebben je aanvraag binnen en bevestigen binnen twee werkdagen. " +
      "Pas dan staat de boeking vast. Iets met haast? Bel of mail ons: " +
      "+31 6 4575 2819 | contact@meetingmasters.online",
    velden: {
      firstname: "Voornaam",
      lastname: "Achternaam",
      email: "E-mailadres",
      company: "Organisatie",
      address: "Straat en huisnummer",
      zip: "Postcode",
      city: "Plaats",
      country: "Land",
      btw: "Btw-nummer",
      factuurmail: "Factuur-e-mailadres (als dat een ander adres is)",
      po: "PO- of referentienummer",
    },
    juridisch: {
      privacyText:
        "Wij geven om je privacy. Lees hoe we met je gegevens omgaan in ons " +
        '<a href="https://www.meetingmasters.online/nl/privacy" target="_blank" rel="noopener">Privacybeleid</a>.',
      consentToProcessText:
        "Om je aanvraag te kunnen behandelen, hebben we je toestemming nodig om je gegevens op te slaan en te verwerken.",
      communicationConsentText:
        "Door dit formulier te versturen ga je ermee akkoord dat MeetingMasters contact met je opneemt. Je kunt je altijd afmelden.",
      vinkje: "Ik ontvang graag ook andere berichten van MeetingMasters.",
    },
  },
  en: {
    naam: "MM Website EN — R@venHack booking",
    knop: "Send request",
    dank:
      "Thank you. We have your request and will confirm within two working days. " +
      "Only then is the booking fixed. Anything urgent? Call or email us: " +
      "+31 6 45752819 | contact@meetingmasters.online",
    velden: {
      firstname: "First name",
      lastname: "Last name",
      email: "Email address",
      company: "Organisation",
      address: "Street and number",
      zip: "Postcode",
      city: "Town or city",
      country: "Country",
      btw: "VAT number",
      factuurmail: "Invoice email address (if that is a different one)",
      po: "PO or reference number",
    },
    juridisch: {
      privacyText:
        "We care about your privacy. Read how we handle your data in our " +
        '<a href="https://www.meetingmasters.online/en/privacy" target="_blank" rel="noopener">Privacy policy</a>.',
      consentToProcessText:
        "To handle your request, we need your permission to store and process your details.",
      communicationConsentText:
        "By sending this form you agree that MeetingMasters may contact you. You can unsubscribe at any time.",
      vinkje: "I would also like to receive other messages from MeetingMasters.",
    },
  },
};

/**
 * De velden, in groepen. Twee velden in één groep zetten HubSpot naast elkaar
 * op één regel — zo staan voor- en achternaam, en postcode en plaats, netjes
 * naast elkaar.
 */
function groepen(taal) {
  const v = TEKST[taal].velden;
  return [
    LOGO_BLOK,
    rij([
      veld("firstname", v.firstname, "single_line_text", true),
      veld("lastname", v.lastname, "single_line_text", true),
    ]),
    rij([
      veld("email", v.email, "email", true, {
        validation: { blockedEmailDomains: [], useDefaultBlockList: false },
      }),
    ]),
    rij([veld("company", v.company, "single_line_text", true)]),
    rij([veld("address", v.address, "single_line_text", true)]),
    rij([
      veld("zip", v.zip, "single_line_text", true),
      veld("city", v.city, "single_line_text", true),
    ]),
    rij([veld("country", v.country, "single_line_text", true)]),
    // Btw-nummer is bewust niet verplicht: verenigingen, stichtingen en
    // particulieren hebben er geen, en die moeten wel kunnen boeken.
    rij([veld("mm_btw_nummer", v.btw, "single_line_text", false)]),
    rij([veld("mm_factuur_email", v.factuurmail, "single_line_text", false)]),
    rij([veld("rh_po_nummer", v.po, "single_line_text", false)]),
    // HubSpot laat hoogstens drie velden per groep toe, dus de verborgen velden
    // gaan met drie tegelijk. Zichtbaar maakt het niets uit; ze staan er alleen
    // om de keuzes uit de calculator mee te sturen.
    ...perDrie(VERBORGEN.map(verborgen)).map(rij),
  ];
}

function perDrie(lijst) {
  const uit = [];
  for (let i = 0; i < lijst.length; i += 3) uit.push(lijst.slice(i, i + 3));
  return uit;
}

const rij = (velden) => ({ groupType: "default_group", richTextType: "text", fields: velden });

function inhoud(taal) {
  const t = TEKST[taal];
  const nu = new Date().toISOString();
  return {
    formType: "hubspot",
    name: t.naam,
    createdAt: nu,
    updatedAt: nu,
    archived: false,
    fieldGroups: groepen(taal),
    configuration: {
      language: taal,
      cloneable: true,
      editable: true,
      archivable: true,
      allowLinkToResetKnownValues: false,
      prePopulateKnownValues: false,
      createNewContactForNewEmail: true,
      notifyContactOwner: false,
      notifyRecipients: [MELDING_AAN],
      recaptchaEnabled: true,
      embedType: "V3",
      postSubmitAction: { type: "thank_you", value: t.dank },
    },
    displayOptions: {
      renderRawHtml: false,
      theme: "default_style",
      submitButtonText: t.knop,
      style: STIJL,
      cssClass: "",
    },
    legalConsentOptions: {
      type: "implicit_consent_to_process",
      privacyText: t.juridisch.privacyText,
      consentToProcessText: t.juridisch.consentToProcessText,
      communicationConsentText: t.juridisch.communicationConsentText,
      communicationsCheckboxes: [
        { required: false, subscriptionTypeId: ABONNEMENT_ID, label: t.juridisch.vinkje },
      ],
    },
  };
}

/* ── Uitvoeren ────────────────────────────────────────────────────────────── */

async function bestaandeFormulieren() {
  const kaart = new Map();
  let na;
  do {
    const q = na ? `?after=${na}&limit=100` : "?limit=100";
    const pagina = await hs(`/marketing/v3/forms/${q}`);
    for (const f of pagina.results) kaart.set(f.name, f.id);
    na = pagina.paging?.next?.after;
  } while (na);
  return kaart;
}

console.log(DRY_RUN ? "Proefdraai — er wordt niets gewijzigd.\n" : "");
console.log("Contacteigenschappen:");
await zorgVoorEigenschappen();

console.log("\nFormulieren:");
const bestaand = await bestaandeFormulieren();
const uitkomst = {};
for (const taal of ["nl", "en"]) {
  const naam = TEKST[taal].naam;
  if (bestaand.has(naam)) {
    uitkomst[taal] = bestaand.get(naam);
    console.log(`  = ${naam} bestaat al (${uitkomst[taal]})`);
    continue;
  }
  if (DRY_RUN) {
    console.log(`  + ${naam} zou aangemaakt worden — ${groepen(taal).length} groepen`);
    continue;
  }
  const gemaakt = await hs("/marketing/v3/forms/", {
    method: "POST",
    body: JSON.stringify(inhoud(taal)),
  });
  uitkomst[taal] = gemaakt.id;
  console.log(`  + ${naam} aangemaakt (${gemaakt.id})`);
}

if (!DRY_RUN && uitkomst.nl && uitkomst.en) {
  console.log("\nZet dit in config/ravenhack.ts:");
  console.log(
    `export const BOEKINGSFORMULIER = { nl: "${uitkomst.nl}", en: "${uitkomst.en}" };`
  );
}
