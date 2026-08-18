# Engelse site — wat er staat en wat er nog moet

Bijgewerkt 17 augustus 2026.

De machinerie is klaar: elke pagina *kan* tweetalig draaien. Wat nog moet is de
vertaling zelf, pagina voor pagina.

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

## Klaar (50 pagina's)

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
| 20 eventpagina's | 20 eventpagina's, eigen Engels adres per stuk |
| `/nl/events` | `/en/events` |
| `/nl/technologie/hulp` | `/en/help` — inclusief de 77 hulpvragen |
| `/nl/technologie/spatialchat` | `/en/spatialchat` |
| `/nl/technologie/tools` | `/en/platforms` |
| `/nl/virtual-office` | `/en/virtual-office` |
| `/nl/virtual-office/zaaltje` | `/en/virtual-office/meeting-room` |
| `/nl/virtual-office/huren` | `/en/virtual-office/rent` |
| `/nl/virtual-office/kantoor-cultuur` | `/en/virtual-office/office-and-culture` |

Ook tweetalig: menu, footer, cookiebanner, het CTA-blok en de gedeelde
formulierpagina. De zeven Engelse HubSpot-formulieren hangen eraan vast.

## Nog te doen — op volgorde van omvang

| Pagina | Woorden | Opmerking |
|---|---:|---|
| `games-tools/ravenhack` | 1.240 | |
| `privacy-statement` | 1.060 | juridisch — laten nakijken vóór publicatie |
| `downloads/page` | 810 | Vergadermacht valt weg in het Engels |
| `meeting-calculator` | 650 | plus de losse tool zelf |
| `cookieverklaring` | 550 | juridisch — laten nakijken |
| 4 × tools-landingspagina | 1.690 | bingo, storytelling, wheel of fortune, inspiration cards |

**Samen ongeveer 6.500 woorden.** Ter vergelijking: de elf blogartikelen waren
7.700, de twintig events 13.400 en de hulppagina met de 77 vragen 5.800. Dit is
dus nog ongeveer twee rondes.

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

- **De losse tools** (bingo, storytelling, calculator) staan buiten de site, in
  `public/tools/`. Storytelling is al tweetalig via thema's; bingo en de
  calculator moeten nog. Zie `docs/engelse-media-register.md`.
- **Privacy en cookies** zijn juridische teksten. Ik vertaal ze, maar laat ze
  nakijken voordat ze live gaan.
- **Vergadermacht** bestaat niet in het Engels; dat blok valt op de Engelse
  Downloads-pagina weg. Besluit van Emilie, 17 aug 2026.
- **De blog-hero** bevat het Nederlandse menu. Staat geparkeerd; op de Engelse
  blog staat nu het Nederlandse beeld.
