# MeetingMasters Online — website

De tweetalige website van MeetingMasters Online: [meetingmasters.online](https://meetingmasters.online).

Gebouwd met Next.js 16 (App Router), TypeScript en Tailwind CSS, gehost op
Vercel. De pagina's staan als code in `app/nl/` en `app/en/`; de teksten zitten
in de paginacode zelf. Formulieren en agenda lopen via HubSpot. Sanity vult
alleen de cijfers, klantlogo's en cases op de Nederlandse homepage.

## Aan de slag

```bash
npm install
npm run dev        # http://localhost:3000
```

Voor de homepage-logo's is een `.env.local` nodig; zie `.env.example` voor de
namen. Zonder die waarden draait de site gewoon, met vaste teksten en beelden.

## Commando's

| Commando | Wat het doet |
|---|---|
| `npm run dev` | Ontwikkelserver |
| `npm run build` | Productiebouw |
| `npm run livecheck` | Controleert de live site |
| `npm run linkcheck` | Zoekt dode links over de hele site |
| `npm run mobiel` | Meet de mobiele weergave na |
| `npm run altcheck` | Controleert alt-teksten |
| `npm run sleutelcheck` | Zoekt sleutels in de code (draait als pre-commit hook) |

## Waar wat staat

| Bestand | Waarvoor |
|---|---|
| `CLAUDE.md` | Wat er draait, en de afspraken bij het werken aan deze site |
| `docs/wijzigingslog.md` | Alle wijzigingen plus de lijst met openstaande punten |
| `docs/website-visuals.md` | Elk beeld en elke video: pad, bron, crop |
| `docs/hubspot-forms.md` | Welk formulier waar staat |
| `docs/tekststijlgids.md` | Schrijfregels voor de teksten |

## Let op

Deze repository is **openbaar**. Sleutels horen in `.env.local`, nooit in de
code. `npm run sleutelcheck` draait als pre-commit hook en houdt ze tegen.
