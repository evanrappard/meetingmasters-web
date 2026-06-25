# HubSpot-formulieren — overzicht

Levend overzicht van de formulieren die in de HubSpot-omgeving aangemaakt moeten
worden en op de site geëmbed worden. Emilie maakt de formulieren aan in HubSpot
en levert per formulier de embed-gegevens aan (portalId + formId + region);
daarna bouwen we ze in via het herbruikbare component
[`components/ui/HubSpotForm.tsx`](../components/ui/HubSpotForm.tsx).

**Status-legenda:** 🔲 te maken in HubSpot · 🟡 embed-code ontvangen, in te bouwen · ✅ live op de site

| # | Formulier | Doel | Embed-locatie | Voorgestelde velden | Status | portalId / formId |
|---|-----------|------|---------------|---------------------|--------|-------------------|
| 1 | **Vrijblijvend advies** | Idee of vraag vrijblijvend voorleggen | `/nl/expert-advies` — vervangt het huidige `AdviesForm` (mailto) | naam, e-mail, telefoon (optioneel), bericht | 🔲 | — |
| 2 | **Algemeen contact** | Algemene contactvraag | `/nl/contact` (+ `/en/contact`) | naam, e-mail, telefoon (optioneel), bericht | 🔲 | — |
| 3 | **Demo / rondleiding** | Demo of rondleiding aanvragen | nog te bepalen (eigen pagina `/nl/demo` of via de "Plan een rondleiding/demo"-CTA's) | naam, e-mail, organisatie, gewenste datum, bericht | 🔲 | — |
| 4 | **Nieuwsbrief** | Inschrijven op de nieuwsbrief | footer (`components/layout/Footer.tsx`) | e-mail | 🔲 | — |
| 5 | **Krijg een kostenindicatie** | Vrijblijvende prijsindicatie aanvragen | nog te bepalen (event-format-detailpagina's i.p.v. de statische "Vrijblijvende offerte", en/of `/nl/expert-advies`) | naam, e-mail, type event, groepsgrootte, bericht | 🔲 | — |

## Werkwijze per formulier
1. Emilie maakt het formulier aan in HubSpot en stuurt de embed-gegevens
   (portalId, formId, region — bv. `eu1` of `na1`).
2. Wij plaatsen `<HubSpotForm portalId="…" formId="…" region="…" />` op de
   afgesproken locatie.
3. Status hierboven bijwerken naar ✅ live + portalId/formId invullen.

## Aandachtspunten
- **Spam / captcha (per formulier aanzetten in HubSpot):** zet bij elk formulier
  de ingebouwde **spam-bescherming** + **onzichtbare reCAPTCHA** aan
  (formulierinstellingen in HubSpot). Onzichtbaar = geen puzzels/frictie voor
  bezoekers. Hierdoor is er **geen losse captcha op de site** nodig.
- **Plaatsing nog te bepalen** voor *Demo / rondleiding* (#3) en
  *Krijg een kostenindicatie* (#5) — samen vastleggen.
- Het huidige `components/ui/AdviesForm.tsx` (mailto) is tijdelijk en wordt
  verwijderd zodra formulier #1 via HubSpot live staat.
- De contactpagina's gebruiken nu alleen `mailto:`/`tel:`; die blijven naast het
  HubSpot-contactformulier staan als directe opties.
