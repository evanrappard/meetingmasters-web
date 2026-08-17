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
| 1 | **MM Website — Vrijblijvend advies** | Idee of vraag vrijblijvend voorleggen | `/nl/expert-advies` — vervangt het mailto-formulier, dat is verwijderd | naam, e-mail, telefoon (optioneel), bericht | ✅ | `02bdc77f-14e3-4826-9d48-96449c8ca062` |
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

## Hoe ze zijn aangemaakt

Alle zes zijn op 3 aug 2026 via de HubSpot Forms API aangemaakt met
[`scripts/create-hubspot-forms.mjs`](../scripts/create-hubspot-forms.mjs). Dat
script maakt eerst de benodigde contacteigenschappen aan
(`mm_boeking_type`, `mm_gewenste_datum`, `mm_aantal_deelnemers`,
`mm_type_event`, `mm_voorkeursmoment`) en daarna de formulieren zelf, inclusief
Nederlandse labels, knopteksten, bedanktekst, e-mailmelding en **onzichtbare
reCAPTCHA**. Het is idempotent: bestaande eigenschappen en formulieren worden
overgeslagen, niet overschreven.

Draaien vereist `HUBSPOT_PRIVATE_APP_TOKEN` in `.env.local` (legacy/private app
met scopes `forms`, `crm.schemas.contacts.read`, `crm.schemas.contacts.write`).
Proefdraaien kan met `--dry-run`.

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
