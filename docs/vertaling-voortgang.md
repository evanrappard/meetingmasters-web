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

## Klaar (39 pagina's)

| Nederlands | Engels |
|---|---|
| `/nl/blog` | `/en/blog` |
| 11 blogartikelen | 11 blogartikelen, eigen slug per stuk |
| `/nl/contact` | `/en/contact` |
| `/nl/demo` | `/en/demo` |
| `/nl/offerte` | `/en/quote` |
| `/nl/boeken` | `/en/booking` |
| `/nl/nieuwsbrief` | `/en/newsletter` |
| `/nl/expert-advies` | `/en/expert-advice` |
| `/nl/testimonials` | `/en/testimonials` |
| 20 eventpagina's | 20 eventpagina's, eigen Engels adres per stuk |

Ook tweetalig: menu, footer, cookiebanner, het CTA-blok en de gedeelde
formulierpagina. De zeven Engelse HubSpot-formulieren hangen eraan vast.

## Nog te doen — op volgorde van omvang

| Pagina | Woorden | Opmerking |
|---|---:|---|
| `technologie/hulp/vragen.ts` | 2.520 | 74 vragen met stappen |
| `events/page` | 1.680 | het eventoverzicht |
| `home/page` | 1.650 | |
| `technologie/tools/page` | 1.610 | Meeting Platforms |
| `virtual-office/page` | 1.590 | |
| `about/page` | 1.560 | |
| `technologie/hulp/page` | 1.480 | |
| `games-tools/ravenhack` | 1.240 | |
| `games-tools/page` | 1.230 | |
| `privacy-statement` | 1.060 | juridisch — laten nakijken vóór publicatie |
| `technologie/spatialchat` | 840 | |
| `downloads/page` | 810 | Vergadermacht valt weg in het Engels |
| `virtual-office/kantoor-cultuur` | 750 | |
| `virtual-office/zaaltje` | 710 | |
| `virtual-office/huren` | 680 | |
| `meeting-calculator` | 650 | plus de losse tool zelf |
| `cookieverklaring` | 550 | juridisch — laten nakijken |
| 4 × tools-landingspagina | 1.690 | bingo, storytelling, wheel of fortune, inspiration cards |

**Samen ongeveer 23.000 woorden.** Ter vergelijking: de elf blogartikelen waren
7.700 en de twintig events 13.400. Dit zijn dus nog twee tot drie rondes.

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
