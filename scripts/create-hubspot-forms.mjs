/**
 * Maakt de website-formulieren aan in HubSpot via de Forms API v3.
 *
 * Vereist in .env.local:
 *   HUBSPOT_PRIVATE_APP_TOKEN=pat-eu1-...
 * Scopes op de private app: forms, crm.schemas.contacts.read, crm.schemas.contacts.write
 *
 * Gebruik:
 *   node scripts/create-hubspot-forms.mjs --dry-run       # toont wat er zou gebeuren
 *   node scripts/create-hubspot-forms.mjs                 # Nederlandse formulieren
 *   node scripts/create-hubspot-forms.mjs --taal en       # Engelse formulieren
 *
 * De teksten staan per taal in TEKSTEN hieronder. Eén script voor beide talen,
 * geen tweede kopie: anders lopen ze uit elkaar zodra er een veld bij komt.
 *
 * De contacteigenschappen zijn taalloos — een keuzelijst slaat de wáárde op
 * ('zaaltje'), niet het label. Het Engelse formulier toont dus een Engels label
 * bij dezelfde waarde, en in HubSpot komt alles in hetzelfde veld terecht.
 *
 * Het script is idempotent: bestaande eigenschappen en formulieren met dezelfde
 * naam worden overgeslagen, niet overschreven. Zie docs/hubspot-forms.md.
 */

import { config } from 'dotenv'

config({ path: new URL('../.env.local', import.meta.url).pathname })

const TOKEN = process.env.HUBSPOT_PRIVATE_APP_TOKEN
const DRY_RUN = process.argv.includes('--dry-run')

const taalArg = process.argv.indexOf('--taal')
const TAAL = taalArg !== -1 ? process.argv[taalArg + 1] : 'nl'
if (!['nl', 'en'].includes(TAAL)) {
  console.error(`Onbekende taal "${TAAL}". Kies nl of en.`)
  process.exit(1)
}

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

/* ── Teksten per taal ─────────────────────────────────────────────────────── */

const TEKSTEN = {
  nl: {
    voorvoegsel: 'MM Website',
    velden: {
      firstname: 'Voornaam',
      lastname: 'Achternaam',
      email: 'E-mailadres',
      phone: 'Telefoonnummer (optioneel)',
      company: 'Organisatie',
      message: 'Je vraag of bericht',
      moment: 'Wanneer komt het jou uit?',
      benieuwd: 'Waar ben je vooral benieuwd naar?',
      boekingType: 'Wat wil je boeken?',
      datum: 'Gewenste datum',
      aantal: 'Aantal deelnemers',
      opmerkingen: 'Opmerkingen',
      typeEvent: 'Om welk type event of kantoor gaat het?',
      organiseren: 'Wat wil je organiseren?',
      berekening: 'Berekening vergaderkosten',
    },
    boekingOpties: [
      { label: 'Een online zaaltje', value: 'zaaltje' },
      { label: 'R@venHack', value: 'ravenhack' },
      { label: 'EscapeMasters', value: 'escapemasters' },
      { label: 'Iets anders', value: 'anders' },
    ],
    juridisch: {
      privacyText:
        'Wij geven om je privacy. Lees hoe we met je gegevens omgaan in ons Privacybeleid.',
      consentToProcessText:
        'Om je vraag te kunnen behandelen, hebben we je toestemming nodig om je gegevens op te slaan en te verwerken.',
      communicationConsentText:
        'Door dit formulier te versturen ga je ermee akkoord dat MeetingMasters contact met je opneemt. Je kunt je altijd afmelden.',
      vinkje: 'Ik ontvang graag ook andere berichten van MeetingMasters.',
    },
    formulieren: {
      advies: { naam: 'Vrijblijvend advies', knop: 'Stuur mijn vraag →', dank: 'Dank je wel. We lezen je vraag en reageren binnen één werkdag.' },
      contact: { naam: 'Algemeen contact', knop: 'Versturen →', dank: 'Dank je wel. We nemen zo snel mogelijk contact met je op.' },
      demo: { naam: 'Demo of rondleiding', knop: 'Plan mijn rondleiding →', dank: 'Dank je wel. We stemmen een moment met je af voor de rondleiding.' },
      boeking: { naam: 'Boeking & beschikbaarheid', knop: 'Check beschikbaarheid →', dank: 'Dank je wel. We laten je snel weten wat er mogelijk is.' },
      kostenindicatie: { naam: 'Kostenindicatie', knop: 'Vraag een indicatie aan →', dank: 'Dank je wel. Je krijgt een vrijblijvende indicatie van ons.' },
      nieuwsbrief: { naam: 'Nieuwsbrief', knop: 'Schrijf mij in →', dank: 'Je staat op de lijst. Tot in de volgende nieuwsbrief.' },
      // Dit formulier bestond al vóór dit script, onder deze naam en zonder
      // voorvoegsel. Zo herkent het script hem en maakt hij geen dubbele aan.
      calculator: { naam: 'Vergaderkosten Calculator', losseNaam: true, knop: 'Verzenden', dank: 'Dank je wel! Download hier je berekening.' },
    },
  },
  en: {
    // Het voorvoegsel maakt de Engelse formulieren herkenbaar in de HubSpot-lijst.
    voorvoegsel: 'MM Website EN',
    velden: {
      firstname: 'First name',
      lastname: 'Last name',
      email: 'Email address',
      phone: 'Phone number (optional)',
      company: 'Organisation',
      message: 'Your question or message',
      moment: 'When would suit you?',
      benieuwd: 'What are you most curious about?',
      boekingType: 'What would you like to book?',
      datum: 'Preferred date',
      aantal: 'Number of participants',
      opmerkingen: 'Anything else we should know?',
      typeEvent: 'What kind of event or office is it?',
      organiseren: 'What would you like to organise?',
      berekening: 'Meeting cost calculation',
    },
    // Dezelfde waarden als in het Nederlands, alleen het label verschilt.
    boekingOpties: [
      { label: 'An online meeting room', value: 'zaaltje' },
      { label: 'R@venHack', value: 'ravenhack' },
      { label: 'EscapeMasters', value: 'escapemasters' },
      { label: 'Something else', value: 'anders' },
    ],
    juridisch: {
      privacyText:
        'We care about your privacy. Read how we handle your details in our Privacy Policy.',
      consentToProcessText:
        'To be able to handle your question, we need your permission to store and process your details.',
      communicationConsentText:
        'By submitting this form you agree that MeetingMasters may contact you. You can unsubscribe at any time.',
      vinkje: 'I would also like to receive other updates from MeetingMasters.',
    },
    formulieren: {
      advies: { naam: 'Free advice', knop: 'Send my question →', dank: 'Thank you. We will read your question and reply within one working day.' },
      contact: { naam: 'General contact', knop: 'Send →', dank: 'Thank you. We will get back to you as soon as we can.' },
      demo: { naam: 'Demo or tour', knop: 'Book my tour →', dank: 'Thank you. We will arrange a moment with you for the tour.' },
      boeking: { naam: 'Booking & availability', knop: 'Check availability →', dank: 'Thank you. We will let you know what is possible shortly.' },
      kostenindicatie: { naam: 'Cost estimate', knop: 'Request an estimate →', dank: 'Thank you. You will receive a no-obligation estimate from us.' },
      nieuwsbrief: { naam: 'Newsletter', knop: 'Sign me up →', dank: 'You are on the list. See you in the next newsletter.' },
      calculator: { naam: 'Meeting cost calculator', knop: 'Send me the calculation →', dank: 'Thank you. Your calculation is on its way.' },
    },
  },
}

const T = TEKSTEN[TAAL]

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
  field('firstname', T.velden.firstname, 'single_line_text', true),
  field('lastname', T.velden.lastname, 'single_line_text', true),
]
// Alleen het e-mailveld heeft een verplicht validation-blok (zie een bestaand
// HubSpot-formulier: GET /marketing/v3/forms/{id}).
const EMAIL = field('email', T.velden.email, 'email', true, {
  validation: { blockedEmailDomains: [], useDefaultBlockList: false },
})
const TEL = field('phone', T.velden.phone, 'phone')
const ORG = field('company', T.velden.company, 'single_line_text', true)
const BERICHT = field('message', T.velden.message, 'multi_line_text', true)

/* ── De formulieren ───────────────────────────────────────────────────────── */

const naamVan = (sleutel) => {
  const f = T.formulieren[sleutel]
  return f.losseNaam ? f.naam : `${T.voorvoegsel} — ${f.naam}`
}

const FORMS = [
  {
    key: 'advies',
    fields: [...NAAM, EMAIL, TEL, BERICHT],
  },
  {
    key: 'contact',
    fields: [...NAAM, EMAIL, TEL, BERICHT],
  },
  {
    key: 'demo',
    fields: [
      ...NAAM,
      EMAIL,
      ORG,
      field('mm_voorkeursmoment', T.velden.moment, 'single_line_text'),
      field('message', T.velden.benieuwd, 'multi_line_text'),
    ],
  },
  {
    key: 'boeking',
    fields: [
      ...NAAM,
      EMAIL,
      ORG,
      field('mm_boeking_type', T.velden.boekingType, 'dropdown', true, {
        // Elke optie heeft een displayOrder nodig in de Forms API.
        options: T.boekingOpties.map((o, i) => ({ ...o, displayOrder: i })),
      }),
      field('mm_gewenste_datum', T.velden.datum, 'datepicker'),
      field('mm_aantal_deelnemers', T.velden.aantal, 'number'),
      field('message', T.velden.opmerkingen, 'multi_line_text'),
    ],
  },
  {
    key: 'kostenindicatie',
    fields: [
      ...NAAM,
      EMAIL,
      ORG,
      field('mm_type_event', T.velden.typeEvent, 'single_line_text', true),
      field('mm_aantal_deelnemers', T.velden.aantal, 'number'),
      field('message', T.velden.organiseren, 'multi_line_text'),
    ],
  },
  {
    key: 'nieuwsbrief',
    fields: [EMAIL],
  },
  {
    // De Nederlandse calculator heeft al een eigen formulier van vóór dit
    // script; deze regel is er voor de Engelse variant. Bestaat hij al onder
    // deze naam, dan slaat het script hem over.
    key: 'calculator',
    fields: [
      field('firstname', T.velden.firstname, 'single_line_text'),
      field('lastname', T.velden.lastname, 'single_line_text'),
      EMAIL,
      field('berekening_vergaderkosten', T.velden.berekening, 'multi_line_text'),
    ],
  },
].map((f) => ({
  ...f,
  name: naamVan(f.key),
  submitButtonText: T.formulieren[f.key].knop,
  thankYou: T.formulieren[f.key].dank,
}))

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
      language: TAAL,
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
      privacyText: T.juridisch.privacyText,
      consentToProcessText: T.juridisch.consentToProcessText,
      communicationConsentText: T.juridisch.communicationConsentText,
      communicationsCheckboxes: [
        {
          required: false,
          subscriptionTypeId: SUBSCRIPTION_TYPE_ID,
          label: T.juridisch.vinkje,
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

console.log(DRY_RUN ? `\nProefrun (${TAAL}) — er wordt niets aangemaakt.\n` : `\nTaal: ${TAAL}\n`)
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
