# HubSpot-formulieren — overzicht

Levend overzicht van de formulieren die in HubSpot aangemaakt moeten worden en op
de site geëmbed worden. Emilie maakt het formulier aan in HubSpot en levert de
`formId` aan; daarna bouwen we het in via het herbruikbare component
[`components/ui/HubSpotForm.tsx`](../components/ui/HubSpotForm.tsx).

**Portal ID: `147433380`** · **Region: `eu1`** — beide bekend en bevestigd
(account draait op `app-eu1.hubspot.com`). Per formulier hoeft dus alleen de
`formId` aangeleverd te worden. `eu1` is al de standaardwaarde in
`HubSpotForm.tsx`, dus die hoeft niet per embed meegegeven te worden.

**Status-legenda:** 🔲 te maken in HubSpot · 🟡 formId ontvangen, in te bouwen · ✅ live op de site

## De formulieren

| # | Naam in HubSpot | Doel | Embed-locatie | Velden | Status | formId |
|---|-----------------|------|---------------|--------|--------|--------|
| 1 | **MM Website — Vrijblijvend advies** | Idee of vraag vrijblijvend voorleggen | `/nl/expert-advies` — vervangt het mailto-formulier, dat is verwijderd | logo, naam, e-mail, telefoon (optioneel), vraag of bericht, bijlage (optioneel) | ✅ | `02bdc77f-14e3-4826-9d48-96449c8ca062` |
| 2 | **MM Website — Algemeen contact** | Algemene contactvraag | `/nl/contact` — onder de contactgegevens | naam, e-mail, telefoon (optioneel), bericht | ✅ | `c747d7cd-4850-44f4-965f-a87120e55d38` |
| 3 | **MM Website — Demo of rondleiding** | De "20 minuten ervaren"-CTA | `/nl/demo` — CTA's 'Plan een rondleiding', 'Plan een demo' en 'Ervaar het zelf' wijzen hierheen | naam, e-mail, organisatie, voorkeursmoment, bericht | ✅ | `a052e71e-9ed7-4c11-adc9-36d8e8b26ea8` |
| 4 | **MM Website — Boeking & beschikbaarheid** | Zaaltje, R@venHack of EscapeMasters boeken | `/nl/boeken` — CTA's 'Boek je zaaltje', 'Check beschikbaarheid', 'Boek R@venHack' en 'Boek EscapeMasters' | naam, e-mail, organisatie, dropdown "wat wil je boeken", datum, aantal deelnemers | ✅ | `ddf3e496-b036-4720-b7b1-44eed87f7506` |
| 5 | **MM Website — Kostenindicatie** | Vrijblijvende offerte | `/nl/offerte` — CTA's rond offerte en kosten | naam, e-mail, organisatie, type event, groepsgrootte, bericht | ✅ | `8fb6d169-df70-45f0-bb36-671df8ad0f58` |
| 6 | **MM Website — Nieuwsbrief** | Inschrijving nieuwsbrief | `/nl/nieuwsbrief` — de footer linkt ernaartoe met "Schrijf je in" (het formulier stond eerst in de footer zelf, maar de lichte HubSpot-stijl liet zich in die donkere balk niet temmen) | e-mail | ✅ | `0992ca5c-97ed-4940-a45d-55357d69f57a` |
| 7 | **Vergadermacht — download** | Publicatie downloaden | `/nl/downloads` — ingesloten, niet via de HubSpot-landingspagina | voornaam, achternaam, e-mail | ✅ | `cbf9b66f-20d8-4dae-86d4-f85b1dda4331` |
| — | *(bestaat al)* | Berekening toesturen | vergaderkosten-calculator (los HTML-bestand) | e-mail, `berekening_samenvatting` | ✅ | `229f1966-fafc-4929-bfae-173a27b5edee` |

### Waarom zes en niet meer

Er staan 43 losse CTA's naar `/nl/contact` met acht verschillende teksten
("Boek je zaaltje", "Check beschikbaarheid", "Vraag tooladvies", "Plan een
gesprek", …). Die vangen we af met één boekingsformulier met een dropdown, in
plaats van vijf bijna-identieke formulieren die allemaal apart onderhouden
moeten worden.

## De Engelse formulieren

Aangemaakt op 17 aug 2026 met hetzelfde script, met `--taal en`. Zeven stuks,
herkenbaar aan het voorvoegsel **MM Website EN** in de HubSpot-lijst.

| Sleutel | Naam in HubSpot | formId |
|---|---|---|
| `advies` | MM Website EN — Free advice | `e4d50964-6457-440f-a73c-5f31726c6060` |
| `contact` | MM Website EN — General contact | `8afa782e-bc97-4fb0-a182-2621167527d1` |
| `demo` | MM Website EN — Demo or tour | `e7294822-87d4-4759-97fc-532b52a4c9e2` |
| `boeking` | MM Website EN — Booking & availability | `d2cce099-ab58-4753-915c-0d1c20a00eb1` |
| `kostenindicatie` | MM Website EN — Cost estimate | `ae15b8b5-de37-40eb-8172-52da38e2cff2` |
| `nieuwsbrief` | MM Website EN — Newsletter | `d6c9525f-7b57-46b2-bd74-243c30c3250e` |
| `calculator` | MM Website EN — Meeting cost calculator | `77dffdf4-e911-49d3-ace3-8bc77b9c2cc7` |

**Vergadermacht heeft geen Engelse variant.** Die publicatie bestaat niet in het
Engels; op de Engelse site valt dat blok weg. Besluit van Emilie, 17 aug 2026.

De contacteigenschappen zijn taalloos. Een keuzelijst slaat de wáárde op
(`zaaltje`), niet het label, dus het Engelse formulier toont "An online meeting
room" en er komt gewoon `zaaltje` in het CRM. Nederlandse en Engelse
inzendingen belanden dus in hetzelfde veld en zijn samen te filteren.

In de code: `HUBSPOT_FORMS_EN` in `lib/hubspot-forms.ts`, of gebruik
`formulierVoor("contact", "en")`.

## Hoe ze zijn aangemaakt

Alle zes Nederlandse zijn op 3 aug 2026 via de HubSpot Forms API aangemaakt met
[`scripts/create-hubspot-forms.mjs`](../scripts/create-hubspot-forms.mjs), de
zeven Engelse op 17 aug 2026 met hetzelfde script en `--taal en`. Alle teksten
staan per taal in `TEKSTEN` bovenin dat script — één bestand voor beide talen,
geen tweede kopie, anders lopen ze uit elkaar zodra er een veld bij komt. Het
script maakt eerst de benodigde contacteigenschappen aan
(`mm_boeking_type`, `mm_gewenste_datum`, `mm_aantal_deelnemers`,
`mm_type_event`, `mm_voorkeursmoment`) en daarna de formulieren zelf, inclusief
Nederlandse labels, knopteksten, bedanktekst, e-mailmelding en **onzichtbare
reCAPTCHA**. Het is idempotent: bestaande eigenschappen en formulieren worden
overgeslagen, niet overschreven.

Draaien vereist `HUBSPOT_PRIVATE_APP_TOKEN` in `.env.local` (private app met
scopes `forms`, `crm.schemas.contacts.read`, `crm.schemas.contacts.write`).
Proefdraaien kan met `--dry-run`; dat toont per formulier of hij al bestaat of
aangemaakt zou worden, zonder iets te veranderen. Doe dat altijd eerst.

**Let op bij het token:** het oude token gaf op 17 aug 2026 een 401 — de private
app was verwijderd of het token vernieuwd. Loopt het script vast op
authenticatie, maak dan in HubSpot onder Instellingen → Integraties → Private
Apps een nieuw token met bovenstaande scopes.

De formId's staan in [`lib/hubspot-forms.ts`](../lib/hubspot-forms.ts); pagina's
verwijzen daarnaar in plaats van de ID's los te herhalen.

### Valkuilen in de Forms API (voor als er ooit een formulier bij komt)

- `createdAt`, `updatedAt` en `archived` moeten mee in het POST-verzoek, ook al
  bepaalt de server de echte waarden.
- `legalConsentOptions: { type: "none" }` bestaat niet; gebruik
  `implicit_consent_to_process` met de bijbehorende teksten.
- Het meerregelige veld heet `multi_line_text`, een datumveld `datepicker`.
- Alleen het e-mailveld heeft een verplicht `validation`-blok.
- Dropdown-opties hebben elk een `displayOrder` nodig.

## Aandachtspunten

- **Spam / captcha:** staat bij alle zes al aan (`recaptchaEnabled`), gezet via
  het script. Onzichtbaar, dus geen puzzels of frictie voor bezoekers. Hierdoor
  is er **geen losse captcha op de site** nodig.
- **Melding bij inzending** gaat naar Emilie (HubSpot-gebruiker `27615657`).
- `components/ui/AdviesForm.tsx` (het tijdelijke mailto-formulier) is
  **verwijderd** nu formulier #1 live staat.
- **Drie pagina's zijn nieuw** voor de CTA-formulieren: `/nl/demo`,
  `/nl/boeken` en `/nl/offerte`. Ze delen één opzet:
  [`components/ui/FormulierPagina.tsx`](../components/ui/FormulierPagina.tsx).
  Zo staat er niet op twintig event-pagina's een eigen formulier.
- CTA's met een duidelijke bedoeling wijzen nu naar die pagina's; generiek
  "Neem contact op" blijft naar `/nl/contact` gaan.
- `HubSpotForm.tsx` laadt het **regio-specifieke** embed-script
  (`js-eu1.hsforms.net` voor dit account). Het algemene adres werkt niet
  betrouwbaar voor EU-portals.
- De contactpagina's houden hun `mailto:`/`tel:`-opties naast het
  HubSpot-contactformulier staan als directe route.
- Wil je op losse velden kunnen segmenteren of rapporteren (bijvoorbeeld
  groepsgrootte of type event), maak die dan als contacteigenschap aan vóórdat
  je het formulier bouwt.

> **Vergadermacht.** De HubSpot-landingspagina op `147433380.hs-sites-eu1.com/vergadermacht`
> blijft bestaan, maar de site gebruikt hetzelfde formulier ingesloten. Dezelfde
> leads, zonder sprong naar een ander domein en in de eigen stijl. Wijzig je het
> formulier in HubSpot, dan verandert het op beide plekken mee.

## Boekingsagenda

Naast de formulieren draait er een HubSpot-agenda waarin bezoekers zelf een
moment kiezen. Staat als `HUBSPOT_AGENDA` in `lib/hubspot-forms.ts` en wordt
ingesloten met `components/ui/HubSpotAgenda.tsx`.

| Waar | Hoe |
|---|---|
| `/nl/demo` (rondleiding) | **Hoofdroute** — de agenda staat waar eerst het formulier stond. Een rondleiding is kort en vast; zelf een moment kiezen is sneller dan een voorkeursmoment opgeven en op antwoord wachten. |
| `/nl/expert-advies` | **Tweede route** — het formulier blijft voorop, want daarin staat waar het over gaat en daardoor is het eerste gesprek meteen inhoudelijk. Daaronder een knop voor wie liever meteen prikt. |
| `/nl/contact` | **Bewust niet.** Contact is een vangnet voor facturen, sollicitaties en persvragen; een boekingslink trekt daar de verkeerde afspraken binnen. |

> Direct geboekte afspraken hebben een hoger no-show-percentage dan afspraken die
> per mail zijn afgestemd. Zet de herinneringen in HubSpot aan.

## Boekingsagenda

Naast de formulieren draait er een HubSpot-agenda waarin bezoekers zelf een
moment kiezen. Staat als `HUBSPOT_AGENDA` in `lib/hubspot-forms.ts`, ingesloten
met `components/ui/HubSpotAgenda.tsx`.

| Waar | Hoe |
|---|---|
| `/nl/demo` (rondleiding) | **Hoofdroute** — de agenda staat waar eerst het formulier stond. Kort en vast; zelf een moment kiezen is sneller dan een voorkeur opgeven en wachten. |
| `/nl/expert-advies` | **Tweede route** — het formulier blijft voorop, want daarin staat waar het over gaat. Daaronder een knop voor wie liever meteen prikt. |
| `/nl/contact` | **Bewust niet.** Vangnet voor facturen, sollicitaties en persvragen; een boekingslink trekt daar de verkeerde afspraken binnen. |

> Direct geboekte afspraken hebben een hoger no-show-percentage dan afspraken die
> per mail zijn afgestemd. Zet de herinneringen in HubSpot aan.


## Het adviesformulier wijkt af (26 augustus 2026)

Als enige formulier heeft dit er drie dingen bij:

- **Het logo bovenaan.** Het formulier opent soms los, en dan is er verder geen
  verwijzing naar de afzender. Het beeld komt uit de bestandsmanager van HubSpot
  en is hetzelfde als het nieuwsbriefformulier gebruikt, dus er is één bestand
  om bij te houden.
- **Een uploadveld** onder het berichtveld, voor een bestand of foto. Dat schrijft
  naar de contacteigenschap `mm_bijlage` (type `string`, fieldType `file`), die
  op 26 augustus 2026 is aangemaakt.
- **Het berichtlabel is korter**: "Vraag of bericht" in plaats van "Je vraag of
  bericht" (Engels: "Question or message").
- **De verzendknop** heet "Verstuur" (Engels: "Send") en staat in MM-geel
  (`#EEBE3D`) met donkere letters, in plaats van HubSpot-oranje.
- **De disclaimer** staat op 11px, gelijk aan de labels erboven. Hij stond op
  14px en schreeuwde daarmee harder dan de vragen zelf.
- **De bedanktekst** noemt twee dagen en geeft het telefoonnummer voor wie haast
  heeft.

Stijl gaat via `displayOptions.style` in de Forms API. HubSpot rendert het
formulier in een iframe, dus onze eigen CSS komt er niet bij: die instellingen
zijn de enige knoppen die we hebben.

Doorgevoerd met `node scripts/hubspot-advies-bijwerken.mjs`. Dat script maakt
eerst een reservekopie van het formulier in `schermafdrukken/hubspot-backups/`
en is veilig opnieuw te draaien: staat het logo of het uploadveld er al, dan
laat hij ze staan.

**Let op het verschil met `create-hubspot-forms.mjs`.** Dat script maakt
formulieren áán en slaat bestaande over, juist om handwerk in HubSpot niet te
overschrijven. Wil je een bestaand formulier wijzigen, dan doe je dat gericht,
zoals hierboven.


## Het rondleidingsformulier (26 augustus 2026)

**MM Website — Demo of rondleiding** en **Demo or tour** hebben dezelfde
huisstijl gekregen als het adviesformulier: logo bovenaan, disclaimer op 11px en
de knop in MM-geel. De knop heet nu "Plan een rondleiding" (Engels: "Book a
tour").

Nieuw veld boven "Waar ben je vooral benieuwd naar?": **"Waarover wil je meer
weten en zien?"**, meerdere keuzes mogelijk. Schrijft naar de contacteigenschap
`mm_interesse` (type `enumeration`, fieldType `checkbox`), met de waarden
`algemeen`, `events`, `virtueel-kantoor`, `escape-room` en `anders`. De labels
verschillen per taal, de waarden niet, dus in HubSpot komt alles in één veld.

> Let op bij het toevoegen van zo'n veld: de CRM-API noemt dit veldtype
> `checkbox`, de Forms-API `multiple_checkboxes`. Met `checkbox` geeft de
> Forms-API een 400.

**Dit formulier staat niet op de site.** `/nl/demo` en `/en/demo` tonen de
HubSpot-agenda, niet dit formulier: bij een rondleiding is zelf een moment kiezen
sneller dan een voorkeur opgeven en wachten. Het formulier bestaat dus wel, maar
een bezoeker ziet het alleen als je de link zelf deelt.


## Boeking, kostenindicatie en contact (26 augustus 2026)

Alle drie hebben nu de huisstijl van de andere formulieren: logo bovenaan,
disclaimer op 11px, knop in MM-geel.

**Boeking & beschikbaarheid.** De keuzelijst "Wat wil je boeken?" heeft nieuwe
opties: Online zaaltje, Event, Escape Room R@venHack, Anders (licht hieronder
toe). De waarde `escapemasters` staat nog wél in de contacteigenschap maar niet
meer in het formulier, zodat oude aanmeldingen leesbaar blijven; `event` is
toegevoegd. Naast "Gewenste datum" staat nu "Voorkeurstijd (van … tot)", niet
verplicht, met een voorbeeld in het veld. Twee velden in één veldgroep zetten
levert bij HubSpot één rij op, dus ze staan naast elkaar.

**Kostenindicatie.** Dezelfde keuzelijst, hier met de vraag "Waarover gaat deze
vraag?". Het open veld heet nu "Kun je hier meer over vertellen?" met als
voorbeeld in het veld: soort event, doel, aanleiding, voorlopige data, voorziene
duur. Het losse tekstveld `mm_type_event` is uit het formulier gehaald: dat
vroeg hetzelfde als de nieuwe keuzelijst. De eigenschap en de eerder ingevulde
antwoorden blijven in HubSpot staan.

**Algemeen contact.** Alleen de huisstijl; velden en teksten ongewijzigd.

Nieuwe contacteigenschap: `mm_voorkeurstijd` (string/text).
