# CLAUDE.md — MeetingMasters Web

## Stack

- **Next.js 16 (App Router) + TypeScript** — alle pagina's staan als code in
  `app/nl/…` en `app/en/…`; de teksten zitten in de paginacode zelf, niet in een
  database.
- **Tailwind CSS + shadcn/ui** — de basisonderdelen (knop, label, badge) staan in
  `components/ui/`.
- **HubSpot** — formulieren, agenda en contacten. Zie `lib/hubspot-forms.ts` en
  `docs/hubspot-forms.md`.
- **Sanity** — alleen voor de cijfers, logo's en cases op de homepage, en alleen
  áls het is ingesteld. Zonder `NEXT_PUBLIC_SANITY_PROJECT_ID` is `client` null
  en gebruiken die blokken hun vaste tekst (`sanity/client.ts`).
- **Vercel** — hosting. GitHub en Vercel **zijn** gekoppeld: elke push naar
  `main` start vanzelf een productie-deploy. Draai er dus **niet** ook nog
  `vercel --prod` achteraan — dan krijg je twee deployments van dezelfde
  commit, en die tellen allebei mee voor de opslaglimiet (10 GB gratis).
  Dat is precies wat er tussen 19 augustus en 4 september 2026 gebeurde.

**Géén database, géén inloggen.** Er is geen Supabase, geen andere backend en
geen gebruikersaccount. Alles wat een bezoeker invult gaat naar HubSpot. Kom je
ergens nog een verwijzing naar Supabase tegen, dan is dat een restant uit de
begintijd van dit project — die hoort weg (opgeruimd op 31 augustus 2026).

## Afbeeldingen

- Altijd WebP, met beschrijvende alt-tekst voor SEO.
- Ze staan **lokaal** in `public/images/`. Er is geen upload-stap.
- Eén uitzondering: de klantlogo's en de cases op de Nederlandse homepage komen
  uit Sanity en staan op `cdn.sanity.io`. Die hostnaam is de enige in
  `remotePatterns` in `next.config.ts` — haal hem daar niet weg, dan verdwijnt
  de logobalk van de homepage.
- Elk beeld staat beschreven in `docs/website-visuals.md` — raadplegen én
  bijwerken vóór en na een wijziging.

## Sleutels

- Alles wat geheim is staat in `.env.local` (staat in `.gitignore`).
- **De repo is openbaar.** `npm run sleutelcheck` draait als pre-commit hook en
  houdt sleutels tegen; nooit een sleutel in code of in een script zetten.

## Vaste registers

| Bestand | Waarvoor |
|---|---|
| `docs/wijzigingslog.md` | Álle tekst-, beeld- en componentwijzigingen, plus de openstaand-lijst |
| `docs/website-visuals.md` | Elk beeld en elke video: pad, bron, crop |
| `docs/hubspot-forms.md` | Welk formulier waar staat, met portal- en form-ID |
| `docs/tekststijlgids.md` | Lezen vóór het schrijven van copy |
| `docs/waar-staat-wat.md` | Waar welk bestand op deze Mac staat |

## Handige commando's

```bash
npm run dev          # ontwikkelserver
npm run build        # productiebouw
npm run livecheck    # controleert de live site
npm run linkcheck    # zoekt dode links over de hele site
npm run mobiel       # mobiele weergave nameten
npm run altcheck     # alt-teksten controleren
npm run sleutelcheck # zoekt sleutels in de code
```
