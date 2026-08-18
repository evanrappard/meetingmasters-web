# Engelse site — wat er staat en wat er nog moet

Bijgewerkt 18 augustus 2026 (na de copy-ronde).

**De site draait volledig tweetalig.** Elke publieke pagina bestaat in beide
talen, de losse tools ook. Wat resteert is nalezen — zie "Nog open" onderaan.

## Hoe je een pagina vertaalt

1. Haal de teksten uit de pagina naar een `T`-object met `nl` en `en`, of geef
   het component een `taal`-prop als het er al een heeft.
2. Maak `app/en/<engelse-route>/page.tsx` die hetzelfde component rendert met
   `taal="en"`, met een eigen `metadata` inclusief `alternates.languages`.
3. Zet het paar in `PAREN` in [`lib/talen.ts`](../lib/talen.ts).
4. Staat de Nederlandse route in `enPaths` in `next.config.ts`? Haal 'm daar
   weg — anders verwijst hij door en is de Engelse pagina onbereikbaar.
5. Voeg de Engelse route toe aan `scripts/mobiel-routes.txt`.

Meer is het niet. Menu, footer, sitemap en taalschakelaar volgen `lib/talen.ts`
vanzelf. Vergeet je stap 3, dan blijft de schakelaar de andere taal grijs tonen
— dat is het signaal dat er nog iets ontbreekt.

## Klaar (59 pagina's)

| Nederlands | Engels |
|---|---|
| `/nl/home` | `/en/home` |
| `/nl/blog` | `/en/blog` |
| 11 blogartikelen | 11 blogartikelen, eigen slug per stuk |
| `/nl/contact` | `/en/contact` |
| `/nl/demo` | `/en/demo` |
| `/nl/offerte` | `/en/quote` |
| `/nl/boeken` | `/en/booking` |
| `/nl/nieuwsbrief` | `/en/newsletter` |
| `/nl/expert-advies` | `/en/expert-advice` |
| `/nl/testimonials` | `/en/testimonials` |
| `/nl/about` | `/en/about` |
| `/nl/games-tools` | `/en/games-tools` |
| `/nl/games-tools/ravenhack` | `/en/games-tools/ravenhack` |
| 4 × tools-landingspagina | zelfde adressen onder `/en` |
| 20 eventpagina's | 20 eventpagina's, eigen Engels adres per stuk |
| `/nl/events` | `/en/events` |
| `/nl/technologie/hulp` | `/en/help` — inclusief de 77 hulpvragen |
| `/nl/technologie/spatialchat` | `/en/spatialchat` |
| `/nl/technologie/tools` | `/en/platforms` |
| `/nl/virtual-office` | `/en/virtual-office` |
| `/nl/virtual-office/zaaltje` | `/en/virtual-office/meeting-room` |
| `/nl/virtual-office/huren` | `/en/virtual-office/rent` |
| `/nl/virtual-office/kantoor-cultuur` | `/en/virtual-office/office-and-culture` |
| `/nl/downloads` | `/en/downloads` — Vergadermacht valt weg |
| `/nl/meeting-calculator` | `/en/meeting-calculator` |
| `/nl/privacy-statement` | `/en/privacy-statement` |
| `/nl/cookieverklaring` | `/en/cookie-statement` |

Ook tweetalig: menu, footer, cookiebanner, het CTA-blok en de gedeelde
formulierpagina. De zeven Engelse HubSpot-formulieren hangen eraan vast.

## Afspraken over de Engelse copy

Vastgelegd 18 augustus 2026, zodat nieuwe tekst er niet vanaf gaat wijken.

| Punt | Afspraak |
|---|---|
| Spelling | **Brits**: organisation, programme, -ise, travellers. Geen -ize, geen color/center. |
| Samentrekkingen | **Wel gebruiken**: don't, it's, you'll, we'll. Uitzonderingen: FAQ-vragen in zoekvorm ("What is a virtual office?"), de privacy- en cookieverklaring, en koppen waarin juist de ontkenning de klap uitdeelt ("An hour of meeting with twenty people is not an hour"). Klantquotes blijven onaangeroerd. |
| Betrokkenheid | Overal **engagement** (besluit Emilie, 18 aug 2026). Niet "involvement". Let op: "involved" als bijvoeglijk naamwoord blijft gewoon staan. |
| Bijeenkomst | **gathering** in merkverhaal, **event** waar op gezocht wordt. |
| Huisstijl | **branding**, niet "house style". |
| Meedenken | Niet "think along" — dat bestaat niet in het Engels. Gebruik "advise on", "think it through with you", "help work out". |
| Vanzelf | Niet "by itself". Abstract: "does not just happen". Techniek: "automatically" of "on its own". |
| ALV | **AGM**; bij de eerste vermelding op een pagina voluit ("annual general meeting"). |
| Oogst | "harvest" alleen op World Café, waar het de vakterm is. Elders: output, results, record. |
| Laagdrempelig | Niet "low threshold". Gebruik "easy access", "easy to join", "anyone can use". |

## Nog open

| Punt | Wat er moet gebeuren |
|---|---|
| Privacy statement en cookieverklaring | Juridisch nalezen vóór publicatie. Beide staan er nu wel in het Engels. |
| Blog-hero | Het beeld bevat het Nederlandse menu. Op de Engelse blog staat nu het Nederlandse beeld; nieuw beeld maken. |
| Vergadermacht | Bestaat niet in het Engels. Komt er een Engelse versie, dan kan het blok terug in `components/downloads/DownloadsPagina.tsx`. |

## Hoe je controleert of er nog Nederlands in staat

Bouw de site, start hem, en lees de **gebouwde HTML** — niet de bron. Zo vind je
ook wat via een component binnenkomt:

```bash
npm run build && npx next start -p 3000
# daarna elke route uit scripts/mobiel-routes.txt ophalen en de tekst
# afspeuren op stopwoorden: het, een, niet, maar, wordt, deze, onze, zijn
```

Vals alarm om te herkennen: "Het Cultuurfonds" (organisatienaam), "door" en
"over" (bestaan ook in het Engels).

### De homepage haalt content uit Sanity
De Engelse homepage praat **niet** met het CMS: de inhoud daar is Nederlands.
Die gebruikt altijd de teksten uit `tekst-en.ts`. Komt er ooit Engelse content
in Sanity, dan is dat één regel in `components/home/HomePagina.tsx`.

### Let op bij helpteksten
De knoppen en menupaden in de hulpvragen zijn de **echte Engelse labels** van de
platforms: "Join from your browser", "Start Video", "System Settings → Privacy &
Security → Screen Recording". Een letterlijke vertaling van de Nederlandse
instructie stuurt een Engelse deelnemer naar een knop die niet bestaat. Datzelfde
geldt voor de links naar Zoom en Microsoft: die wijzen naar de Engelse variant
van hun hulppagina.

### Hoe een event vertalen werkt
De teksten staan in losse bestanden; `scripts/_events-en-bouw.mjs` maakt daar
`app/nl/events/[slug]/tekst-en.ts` van. Menu, sitemap en taalschakelaar volgen
vanzelf, want `lib/talen.ts` leest de eventparen daaruit. Zelfde patroon is
bruikbaar voor de 74 techvragen.

## Aandachtspunten

- **De losse tools** staan buiten de site, in `public/tools/`, en zijn nu alle
  vier tweetalig. Welke variant een pagina laadt, staat in `embedVoor()` in
  [`lib/tools.ts`](../lib/tools.ts):
  - *Storytelling* — één app, Engels thema via `?theme=default-en`.
  - *Inspiratiekaarten* — één app, Engelse set via `?taal=en`.
  - *Wheel of Fortune* — draait op Netlify en kiest zijn taal zelf.
  - *Bingo* — eigen Engelse kopie in `public/tools/bingo/en/`, inclusief
    hostpaneel en Engelse standaardwoorden.
  - *Vergaderkosten-calculator* — eigen Engelse kopie in
    `public/tools/vergaderkosten-calculator/en/`, met het Engelse
    HubSpot-formulier eronder.

  Let op bij die laatste twee: het zijn **kopieën**, geen gedeelde bestanden.
  Verander je iets aan de rekenlogica of de spelregels, doe het dan in beide.
- **Privacy en cookies** staan er nu in het Engels, in een eigen bestand per
  taal (geen gedeelde template): juridische tekst moet per taal nagelezen
  kunnen worden. Laat ze nakijken voordat ze live gaan.
- **Vergadermacht** bestaat niet in het Engels; dat blok valt op de Engelse
  Downloads-pagina weg. Besluit van Emilie, 17 aug 2026.
- **De blog-hero** bevat het Nederlandse menu. Staat geparkeerd; op de Engelse
  blog staat nu het Nederlandse beeld.
