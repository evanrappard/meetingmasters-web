# MeetingMasters — Project Resume
*Gebruik dit document om een nieuwe Claude Code-sessie op te starten waar je gebleven was.*
*Laatst bijgewerkt: 27 mei 2026 — Supabase eruit gehaald op 31 augustus 2026*

> **Let op: dit document is van mei 2026 en op meer punten ingehaald.** De
> poortnummers, de opmerking dat er alleen `/nl/`-routes zijn en de
> preview-pagina's kloppen niet meer. Leidend zijn `CLAUDE.md` (wat er draait)
> en `docs/wijzigingslog.md` (wat er is gebeurd en wat er nog openstaat).

---

## HOE TE GEBRUIKEN

1. Open Claude Code in de map `/Users/emilievanrappard/meetingmasters-web`
2. Kopieer en plak de **STARTPROMPT** hieronder als je eerste bericht
3. Start de dev server (zie onderaan)

---

## GLOBALE CLAUDE CODE-INSTELLINGEN

Deze staan in `~/.claude/settings.json` en zijn al actief — je hoeft ze niet opnieuw in te stellen:

```json
{
  "skipDangerousModePermissionPrompt": true,
  "theme": "dark-ansi"
}
```

`skipDangerousModePermissionPrompt: true` betekent dat Claude Code tools uitvoert zonder elke keer om bevestiging te vragen. Dit is bewust ingesteld voor dit project.

---

## STARTPROMPT
*(kopieer alles tussen de backticks)*

```
We werken aan de MeetingMasters Online website in /Users/emilievanrappard/meetingmasters-web.

PROJECTCONTEXT:
- Next.js 16 App Router + TypeScript + Tailwind CSS + Sanity CMS (alleen homepage-cijfers)
- Dev server draait op poort 3001: npm run dev -- --port 3001
- Taal: Nederlands. Routes zijn /nl/ (niet /en/)
- Productie-homepage: localhost:3001/nl/home
- Preview-varianten: localhost:3001/preview/grey (grijze variant), localhost:3001/preview/ (alle concepten)
- Sanity CMS (Studio): localhost:3001/studio — project ID: u17ha8px, dataset: production
- GitHub: https://github.com/evanrappard/meetingmasters-web

BRAND:
- Kleuren: #EEBE3D (geel/primary), #28A8AA (aqua/accent), #2D2D2D (donker), #545454 (bodytekst), #EBEBEB (borders)
- Tagline: "Een vergadering heb je. Een ontmoeting maak je."
- Doelgroep: HR-managers, communicatieprofessionals, directeuren — B2B, 50-500 deelnemers
- Drie pijlers: Events / Remote Office / Games & Tools
- Kerntechnologie: SpatialChat (proximity-based video, gecertificeerd Channel & Strategy Partner Europa)

WAT AL GEDAAN IS:
1. /app/en/ hernoemd naar /app/nl/ — alle interne links bijgewerkt, 308-redirect van /en/ naar /nl/
2. Sanity CMS opgezet — Studio embedded op /studio, schemas voor: homepageContent, service, caseStudy, testimonial, logo
3. Homepage (/nl/home) haalt live data op uit Sanity via unstable_cache (fallback naar hardcoded data)
4. Sanity seed-script gedraaid — alle content staat in de CMS (stats, services, cases, logos)
5. cdn.sanity.io toegevoegd aan next.config.ts remotePatterns
6. Grey-variant besloten NIET te gebruiken — productie-homepage (/nl/home) is de basis
7. ~~Supabase-migratie-infrastructuur opgezet~~ — nooit gebruikt, er kwam geen database en geen inloggen. Op 31 augustus 2026 helemaal verwijderd
8. CLAUDE.md aangemaakt met projectinstructies voor toekomstige sessies
9. Homepage volledig gerond qua design, tekst, SEO en toegankelijkheid (sessie 27 mei 2026)

HOMEPAGE — DESIGN BESLISSINGEN (27 mei 2026):
- Drie oplossingskaarten: uniforme achtergrondkleur #E8EDE4, foto's per kaart ingezoomd (zie imgStyle in solutions array)
- Logobalk: zelfde hoogte als feitenbalk (pt-14 pb-10), logo's h-14
- CTABlock ("Online maar dan anders"): achtergrond olijf #C4CBBD
- SpatialChat-sectie: achtergrond #F0F0EA (hersteld), H2 = "Waarom wij werken met SpatialChat"
- Inspiratie: volgorde geforceerd Event > Virtual Office > Games & Tools, "Remote Office" → "Virtual Office" in label
- Inspiratiekaarten zijn klikbaar naar /nl/inspiratie
- Hero: sr-only h1 voor SEO, "Bekijk voorbeelden" is ankerlink naar #inspiratie
- Hero CTA: "Ervaar het zelf →"
- SpatialChat CTA: "Plan een demo →"

SEO-STATUS HOMEPAGE:
- Meta title: "MeetingMasters | Online events & remote work specialisten"
- Verborgen h1 (sr-only): "MeetingMasters — online events en virtual office specialist op SpatialChat"
- H2 SpatialChat: "Waarom wij werken met SpatialChat"
- "Klanten" label boven logobalk (links uitgelijnd)
- R@venHack aria-label fix doorgevoerd

HERO-VIDEO (NOG TE DOEN):
- Specificaties: MP4 H.264, 1920x1080, max 8MB, geen audio, 6-15 sec loop → /public/videos/hero.mp4
- Vervang <Image> door <video autoPlay muted loop playsInline aria-hidden="true">
- Verwijder style={{ transform: "scaleX(-1)" }} van de huidige Image
- sr-only h1 blijft staan, gradient-overlay blijft ongewijzigd
- Controleer contrast witte hero-tekst op eerste frame van video

OPENSTAAND WERK:
- Hero-video implementeren zodra video-bestand beschikbaar is
- Overige pagina's uitbouwen (Events, Remote Office, Games & Tools, About, Contact)
- Sanity koppelen aan meer pagina's (nu alleen homepage)
- /nl/inspiratie pagina bouwen (kaarten linken er al naartoe)

STIJLREGELS:
- Bodytekst minimaal 15px, kleur #545454
- Geel altijd #EEBE3D — nooit afzwakken
- Geen dark/donkere secties op de homepage
- Afbeeldingen altijd WebP met beschrijvende alt-tekst voor SEO
- WebP converteren via Python Pillow (sips werkt NIET): python3 -c "from PIL import Image; Image.open('in.jpg').convert('RGBA').save('out.webp','WEBP',quality=85)"
- Geen comments in code tenzij de WHY niet-voor-de-hand-liggend is
- Sectiekoppen (aqua, xs, bold, tracking-widest, uppercase): altijd links uitgelijnd
- "Remote Office" heet op de homepage "Virtual Office" in de inspiratiesectie — consequent doorvoeren op nieuwe pagina's
- Merkpositionering NIET 100% aan SpatialChat koppelen — wij zijn de specialist, SpatialChat is het platform

BESTANDEN OM TE KENNEN:
- /app/nl/home/page.tsx — productiehomepage (met Sanity-koppeling)
- /app/nl/home/page.saved.tsx — backup van homepage vóór Sanity
- /app/preview/grey/page.tsx — grijze design-variant
- /sanity/queries.ts — alle Sanity-queries (met unstable_cache)
- /sanity/schemas/ — CMS-schemas (homepageContent, service, caseStudy, testimonial, logo)
- /components/layout/Navbar.tsx — navigatie
- /components/layout/Footer.tsx — footer
- /CLAUDE.md — projectinstructies voor Claude Code
- /.env.local — bevat de Sanity- en HubSpot-sleutels (niet committen)
- /scripts/seed-sanity.mjs — script om Sanity te vullen met startdata

SANITY-TOKEN: staat in .env.local als SANITY_API_TOKEN (niet hardcoden in nieuwe bestanden)

Lees eerst CLAUDE.md en daarna PRODUCT.md en design.md voor de volledige brand- en projectspecificaties.
```

---

## DEV SERVER STARTEN

```bash
cd /Users/emilievanrappard/meetingmasters-web && npm run dev -- --port 3001
```

Poort 3000 is bezet — altijd poort 3001 gebruiken.

---

## HANDIGE URLS TIJDENS SESSIE

| URL | Wat |
|-----|-----|
| `localhost:3001/nl/home` | Productie-homepage |
| `localhost:3001/preview/grey` | Grijze design-variant |
| `localhost:3001/preview/` | Overzicht alle preview-concepten |
| `localhost:3001/studio` | Sanity CMS editor |
| `sanity.io/manage` | Sanity projectbeheer (members, tokens, CORS) |
| `github.com/evanrappard/meetingmasters-web` | GitHub repo |

---

## SPATIALCHAT VIDEO-PROJECT

Twee video's in productie voor de website:
- **Script A v2** (meest actueel) — Hero-filmpje 10-15 sec: Google Doc ID `1O9f3kXeSLM1_gJBq91YU6EPcNND9ZkrY20EhNsSN5V0`
- **Script B** — What is SpatialChat 60-90 sec (nog niet goed genoeg per Emilie)
- Google Drive folder "SpatialChat Compleet": ID `1bQCq2WjC4MhSF-1lLeEuiGTY9_br4Z34`
