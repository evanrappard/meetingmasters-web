# Stand van zaken — MeetingMasters website

Bijgewerkt 20 augustus 2026. Bedoeld als startpunt voor een nieuw gesprek:
lees dit, dan weet je waar het project staat.

## De site is live

`https://www.meetingmasters.online` sinds 19 augustus 2026, 16:20.
Gehost op **Vercel**, dat automatisch deployt bij elke push naar `main` op
`github.com/evanrappard/meetingmasters-web`. DNS staat bij **VIP Internet**.
De oude Squarespace-site draait nog als vangnet.

Tweetalig: 59 Engelse routes naast de Nederlandse, met wederkerige hreflang.

## Controleren

| | |
|---|---|
| `npm run livecheck` | 32 controles tegen de live site |
| `npm run linkcheck` | alle interne links |
| `npm run mobiel` | 137 routes × 3 breedtes op overloop |
| `npm run build` | moet 0 fouten geven |
| `npx eslint .` | 0 fouten, 2 bekende waarschuwingen over `<img>` |

**Val niet in deze valkuil:** vlak na een DNS-wijziging meet je je eigen
resolver, niet de wereld. `dns.setServers()` lost dat niet op, want `fetch`
gebruikt `lookup`. Beide scripts hebben daarom een undici-dispatcher die via
1.1.1.1 opzoekt.

## Hoe het werkt

- **Tweetaligheid** — `lib/talen.ts` is de spil: `PAREN` koppelt elke Nederlandse
  route aan de Engelse, `taalAlternates()` levert canonical en hreflang.
- **Teksten** — Nederlands in `data.ts` per sectie, Engels in `tekst-en.ts`
  ernaast, gedeelde template in `components/`.
- **Beeld is taalloos.** Bij events voegt `eventInTaal()` per onderdeel samen, zodat
  velden die het Engels niet noemt (zoals `img`) blijven staan. Een gewone
  objectsamenvoeging liet de beelden verdwijnen — dat is een keer misgegaan.
- **Deelbeelden** — `lib/deelbeelden.ts` plus `scripts/deelbeelden-maken.mjs`.
  Verandert een hero, draai dat script opnieuw.
- **Ontwerpregels** staan in `app/globals.css`: koppen en lopende tekst blijven
  binnen 60% van het beeld, vanaf tablet.

## Nog te doen

1. **Engelse privacy- en cookieverklaring juridisch laten nakijken.** Het enige
   punt met een aansprakelijkheidsrisico.
2. **Eén formulier echt versturen** en controleren of het in HubSpot binnenkomt.
   Niet automatisch te controleren: het token mag formulieren lezen, geen contacten.
3. **Squarespace opzeggen**, niet vóór begin september, en eerst een kopie maken
   van wat er alleen daar staat.

## Niet aankomen

- `genuinecontact.net` geeft 521 — adres klopt, hun server ligt eruit.
- `meetingmasters-web.vercel.app` is publiek; canonical en sitemap wijzen naar
  het echte domein, dus dat is gedekt.
- Negen oude Nederlandse pagina's staan bewust op `noindex` tot ze gevuld zijn.
- De blog-hero bevat het Nederlandse menu; op de Engelse blog staat bewust
  hetzelfde beeld.
- Vergadermacht bestaat niet in het Engels en valt daar weg.
- Bingo en de vergaderkosten-calculator zijn **kopieën** onder
  `public/tools/*/en/`. Verandert de rekenlogica, pas het in beide aan.

## De documenten

| | |
|---|---|
| `docs/livegang.md` en `.html` | het stappenplan, met wat af is |
| `docs/wijzigingslog.md` | wat er wanneer is veranderd en waarom |
| `docs/vertaling-voortgang.md` | de afspraken over de Engelse copy |
| `docs/tekststijlgids.md` | hoe een Nederlandse zin wordt gebouwd |
| `docs/website-visuals.md` | elk beeld: pad, bron, crop |
| `docs/hubspot-forms.md` | welk formulier waar staat |
