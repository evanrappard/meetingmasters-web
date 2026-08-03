/**
 * Maakt de website-formulieren aan in HubSpot via de Forms API v3.
 *
 * Vereist in .env.local:
 *   HUBSPOT_PRIVATE_APP_TOKEN=pat-eu1-...
 * Scopes op de private app: forms, crm.schemas.contacts.read, crm.schemas.contacts.write
 *
 * Gebruik:
 *   node scripts/create-hubspot-forms.mjs --dry-run   # toont wat er zou gebeuren
 *   node scripts/create-hubspot-forms.mjs             # maakt properties + formulieren aan
 *
 * Het script is idempotent: bestaande eigenschappen en formulieren met dezelfde
 * naam worden overgeslagen, niet overschreven. Zie docs/hubspot-forms.md.
 */

import { config } from 'dotenv'

config({ path: new URL('../.env.local', import.meta.url).pathname })

const TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN
const DRY_RUN = process.argv.includes('--dry-run')

if (!TOKEN) {
  console.error('Ontbrekende HUBSPOT_PRIVATE_APP_TOKEN in .env.local')
  process.exit(1)
}

const API = 'https://api.hubapi.com'

async function hs(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  const text = await res.text()
  const body = text ? JSON.parse(text) : null
  if (!res.ok) {
    const msg = body?.message || body?.errors?.[0]?.message || res.statusText
    throw new Error(`${res.status} ${path} — ${msg}`)
  }
  return body
}

/* ── Contacteigenschappen die de formulieren nodig hebben ─────────────────── */

const PROPERTIES = [
  {
    name: 'mm_boeking_type',
    label: 'Wat wil je boeken',
    type: 'enumeration',
    fieldType: 'select',
    options: [
      { label: 'Een online zaaltje', value: 'zaaltje' },
      { label: 'R@venHack', value: 'ravenhack' },
      { label: 'EscapeMasters', value: 'escapemasters' },
      { label: 'Iets anders', value: 'anders' },
    ],
  },
  { name: 'mm_gewenste_datum', label: 'Gewenste datum', type: 'date', fieldType: 'date' },
  { name: 'mm_aantal_deelnemers', label: 'Aantal deelnemers', type: 'number', fieldType: 'number' },
  { name: 'mm_type_event', label: 'Type event', type: 'string', fieldType: 'text' },
  { name: 'mm_voorkeursmoment', label: 'Voorkeursmoment', type: 'string', fieldType: 'text' },
]

const GROUP = 'contactinformation'

/** HubSpot-gebruiker die een melding krijgt bij elke inzending (Emilie). */
const NOTIFY_USER_ID = '27615657'

/** Abonnementstype voor het optionele communicatie-vinkje (uit het bestaande calculator-formulier). */
const SUBSCRIPTION_TYPE_ID = 1739557409

async function ensureProperties() {
  const existing = new Set()
  const all = await hs('/crm/v3/properties/contacts')
  for (const p of all.results) existing.add(p.name)

  for (const prop of PROPERTIES) {
    if (existing.has(prop.name)) {
      console.log(`  = eigenschap ${prop.name} bestaat al`)
      continue
    }
    if (DRY_RUN) {
      console.log(`  + eigenschap ${prop.name} (${prop.type}) zou aangemaakt worden`)
      continue
    }
    await hs('/crm/v3/properties/contacts', {
      method: 'POST',
      body: JSON.stringify({ ...prop, groupName: GROUP }),
    })
    console.log(`  + eigenschap ${prop.name} aangemaakt`)
  }
}

/* ── Velddefinities ───────────────────────────────────────────────────────── */

const field = (name, label, fieldType, required = false, extra = {}) => ({
  objectTypeId: '0-1',
  name,
  label,
  required,
  hidden: false,
  fieldType,
  ...extra,
})

const NAAM = [
  field('firstname', 'Voornaam', 'single_line_text', true),
  field('lastname', 'Achternaam', 'single_line_text', true),
]
// Alleen het e-mailveld heeft een verplicht validation-blok (zie een bestaand
// HubSpot-formulier: GET /marketing/v3/forms/{id}).
const EMAIL = field('email', 'E-mailadres', 'email', true, {
  validation: { blockedEmailDomains: [], useDefaultBlockList: false },
})
const TEL = field('phone', 'Telefoonnummer (optioneel)', 'phone')
const ORG = field('company', 'Organisatie', 'single_line_text', true)
const BERICHT = field('message', 'Je vraag of bericht', 'multi_line_text', true)

/* ── De formulieren ───────────────────────────────────────────────────────── */

const FORMS = [
  {
    key: 'advies',
    name: 'MM Website — Vrijblijvend advies',
    submitButtonText: 'Stuur mijn vraag →',
    thankYou: 'Dank je wel. We lezen je vraag en reageren binnen één werkdag.',
    fields: [...NAAM, EMAIL, TEL, BERICHT],
  },
  {
    key: 'contact',
    name: 'MM Website — Algemeen contact',
    submitButtonText: 'Versturen →',
    thankYou: 'Dank je wel. We nemen zo snel mogelijk contact met je op.',
    fields: [...NAAM, EMAIL, TEL, BERICHT],
  },
  {
    key: 'demo',
    name: 'MM Website — Demo of rondleiding',
    submitButtonText: 'Plan mijn rondleiding →',
    thankYou: 'Dank je wel. We stemmen een moment met je af voor de rondleiding.',
    fields: [
      ...NAAM,
      EMAIL,
      ORG,
      field('mm_voorkeursmoment', 'Wanneer komt het jou uit?', 'single_line_text'),
      field('message', 'Waar ben je vooral benieuwd naar?', 'multi_line_text'),
    ],
  },
  {
    key: 'boeking',
    name: 'MM Website — Boeking & beschikbaarheid',
    submitButtonText: 'Check beschikbaarheid →',
    thankYou: 'Dank je wel. We laten je snel weten wat er mogelijk is.',
    fields: [
      ...NAAM,
      EMAIL,
      ORG,
      field('mm_boeking_type', 'Wat wil je boeken?', 'dropdown', true, {
        // Elke optie heeft een displayOrder nodig in de Forms API.
        options: PROPERTIES[0].options.map((o, i) => ({ ...o, displayOrder: i })),
      }),
      field('mm_gewenste_datum', 'Gewenste datum', 'datepicker'),
      field('mm_aantal_deelnemers', 'Aantal deelnemers', 'number'),
      field('message', 'Opmerkingen', 'multi_line_text'),
    ],
  },
  {
    key: 'kostenindicatie',
    name: 'MM Website — Kostenindicatie',
    submitButtonText: 'Vraag een indicatie aan →',
    thankYou: 'Dank je wel. Je krijgt een vrijblijvende indicatie van ons.',
    fields: [
      ...NAAM,
      EMAIL,
      ORG,
      field('mm_type_event', 'Om welk type event of kantoor gaat het?', 'single_line_text', true),
      field('mm_aantal_deelnemers', 'Aantal deelnemers', 'number'),
      field('message', 'Wat wil je organiseren?', 'multi_line_text'),
    ],
  },
  {
    key: 'nieuwsbrief',
    name: 'MM Website — Nieuwsbrief',
    submitButtonText: 'Schrijf mij in →',
    thankYou: 'Je staat op de lijst. Tot in de volgende nieuwsbrief.',
    fields: [EMAIL],
  },
]

function payload(form) {
  const now = new Date().toISOString()
  return {
    formType: 'hubspot',
    name: form.name,
    // HubSpot's create-endpoint verwacht deze drie ook in het verzoek, ook al
    // bepaalt de server de uiteindelijke waarden.
    createdAt: now,
    updatedAt: now,
    archived: false,
    // Eén veld per groep = elk veld op een eigen regel, zoals HubSpot zelf doet.
    fieldGroups: form.fields.map((f) => ({
      groupType: 'default_group',
      richTextType: 'text',
      fields: [f],
    })),
    configuration: {
      language: 'nl',
      cloneable: true,
      editable: true,
      archivable: true,
      allowLinkToResetKnownValues: false,
      prePopulateKnownValues: false,
      createNewContactForNewEmail: true,
      notifyContactOwner: false,
      // Zelfde ontvanger als het bestaande calculator-formulier (Emilie).
      notifyRecipients: [NOTIFY_USER_ID],
      // Onzichtbare reCAPTCHA + spambescherming direct aan, scheelt handwerk.
      recaptchaEnabled: true,
      embedType: 'V3',
      postSubmitAction: { type: 'thank_you', value: form.thankYou },
    },
    displayOptions: {
      renderRawHtml: false,
      theme: 'default_style',
      submitButtonText: form.submitButtonText,
      style: {},
      cssClass: '',
    },
    // Zelfde AVG-opzet als het bestaande calculator-formulier.
    legalConsentOptions: {
      type: 'implicit_consent_to_process',
      privacyText:
        'Wij geven om je privacy. Lees hoe we met je gegevens omgaan in ons Privacybeleid.',
      consentToProcessText:
        'Om je vraag te kunnen behandelen, hebben we je toestemming nodig om je gegevens op te slaan en te verwerken.',
      communicationConsentText:
        'Door dit formulier te versturen ga je ermee akkoord dat MeetingMasters contact met je opneemt. Je kunt je altijd afmelden.',
      communicationsCheckboxes: [
        {
          required: false,
          subscriptionTypeId: SUBSCRIPTION_TYPE_ID,
          label: 'Ik ontvang graag ook andere berichten van MeetingMasters.',
        },
      ],
    },
  }
}

async function createForms() {
  const existing = new Map()
  let after
  do {
    const q = after ? `?after=${after}&limit=100` : '?limit=100'
    const page = await hs(`/marketing/v3/forms/${q}`)
    for (const f of page.results) existing.set(f.name, f.id)
    after = page.paging?.next?.after
  } while (after)

  const results = []
  for (const form of FORMS) {
    if (existing.has(form.name)) {
      console.log(`  = ${form.name} bestaat al (${existing.get(form.name)})`)
      results.push({ key: form.key, name: form.name, id: existing.get(form.name) })
      continue
    }
    if (DRY_RUN) {
      console.log(`  + ${form.name} — ${form.fields.length} velden, zou aangemaakt worden`)
      continue
    }
    const created = await hs('/marketing/v3/forms/', {
      method: 'POST',
      body: JSON.stringify(payload(form)),
    })
    console.log(`  + ${form.name} aangemaakt`)
    results.push({ key: form.key, name: form.name, id: created.id })
  }
  return results
}

/* ── Uitvoeren ────────────────────────────────────────────────────────────── */

console.log(DRY_RUN ? '\nProefrun — er wordt niets aangemaakt.\n' : '')
console.log('Contacteigenschappen:')
await ensureProperties()
console.log('\nFormulieren:')
const results = await createForms()

if (results.length) {
  console.log('\nformId per formulier (voor lib/hubspot-forms.ts):\n')
  for (const r of results) console.log(`  ${r.key.padEnd(16)} ${r.id}`)
}
console.log(
  '\nreCAPTCHA en e-mailmelding staan al aan via de configuratie hierboven.',
  '\nZet de formId(s) in lib/hubspot-forms.ts.\n'
)
