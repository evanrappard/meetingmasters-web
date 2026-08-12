# Wijzigingslog — MeetingMasters website

Centraal overzicht van álle ontwikkelingen aan de site: **tekst**, **beeld** en
**componenten/code**. Dit is de plek om te kijken als je wilt weten *wat er is
veranderd, wanneer, door wie, en of het al live staat.*

> Bijgehouden door: Claude Code (de bouwer).
> Laatst bijgewerkt: 2026-08-12

---

## 1. Wie doet wat

Er werken drie Claudes aan de site, elk met een eigen rol:

| Rol | Waar | Levert |
|---|---|---|
| **Copy** | claude.ai-project "MeetingMasters copy" | Nederlandse teksten in het vaste aanlever-format (PAGINA / SECTIE / VERVANGT / KOP / SUBKOP / BODY / CTA-LABEL / CTA-LINK) |
| **Visuals** | apart | Beelden/video's + bronbestand, crop en gewenste plek |
| **Bouwer** (Claude Code, terminal) | dit project | Bouwt componenten, bouwt copy en beeld in, houdt dit logboek bij |

De bouwer is het punt waar alles samenkomt: copy en beeld worden pas "waar" als
ze in de code staan én hier zijn genoteerd.

## 2. Vaste registers

Dit logboek is chronologisch (*wat is er gebeurd*). Daarnaast zijn er drie
registers die de **actuele stand** beschrijven — die blijven leidend:

| Register | Beschrijft |
|---|---|
| `docs/website-visuals.md` | Elk beeld/video op de site: pad, bron, bronbestand, crop |
| `docs/hubspot-forms.md` | Alle formulieren: welk formulier waar staat, portal/form-ID |
| `docs/copy-project-briefing.md` | Merkstem, schrijfregels, aanlever-format voor copy |

**Afspraak:** een visual-wijziging wordt zowel hier gelogd *als* in het
visuals-register verwerkt. Een tekstwijziging wordt hier gelogd (de tekst zelf
leeft in de paginacode, niet in een apart bestand).

## 3. Legenda

- **T** = tekst/copy · **B** = beeld/video · **C** = component/code
- Status: `ingebouwd` (lokaal klaar) · `gecommit` (in git) · `open` (nog te doen)

---

## 4. Openstaand

| # | Wat | Type | Van wie | Status |
|---|---|---|---|---|
| 1 | Bouwlijst componenten nieuwe website — nog te bepalen | C | Emilie | open |
| 2 | Engelse vertaling van de NL-pagina's | T | Copy-Claude | **uitgesteld** — pas oppakken als álle Nederlandse tekst final is (besluit 12 aug 2026) |
| 3 | Mobiele fixes op NL Home (hero-hoogte) en Navbar (scroll-lock) staan onbevestigd in de werkmap | C | andere sessie | open — niet van mij, laat ik met rust |

---

## 5. Log

### 2026-08-12

- **C** — Dit logboek aangemaakt. Vanaf nu loopt elke tekst-, beeld- en
  componentwijziging hierlangs.
- **B** — `public/images/emilie-ad-v2.webp` ingebouwd op `app/nl/about/page.tsx`
  (Over ons → Oprichter). Verving `emilie-ad.webp` (286×284, te zacht) door
  1262×1246. Oude bestand verwijderd. Visuals-register bijgewerkt. *Gecommit.*
- **C** — Opgeruimd: de ongebruikte resten van de Supabase-starter uit
  `components/` — `auth-button`, `deploy-button`, `env-var-warning`,
  `forgot-password-form`, `hero`, `login-form`, `logout-button`, `next-logo`,
  `sign-up-form`, `supabase-logo`, `theme-switcher`, `update-password-form` en
  de hele map `tutorial/`. Vooraf gecontroleerd op nul verwijzingen; daarna
  typecheck en `npm run build` schoon. *Gecommit.*
- **T** — Besluit: de Engelse vertaling wachten we af tot alle Nederlandse
  tekst final is.

### Eerder — samenvatting per commit

Hieronder de hoofdlijn van wat er vóór dit logboek is gebouwd. Volledige
geschiedenis: `git log`.

| Commit | Wat | Type |
|---|---|---|
| `f29a016` | Over ons: rollen gesplitst in *voor* en *tijdens* de bijeenkomst | T |
| `4b53fc6` | Privacy statement, cookieverklaring en cookiebanner | T C |
| `987b838` | HubSpot-formulieren live op de site | C |
| `3da4499` | Games & Tools: vier gratis tools als één serie (screenshare + iframe) | T C |
| `05cdeed` | HubSpot: zes website-formulieren aangemaakt + centraal vastgelegd | C |
| `38e5966` | R@venHack: ritme van de secties bijgesteld | T |
| `d4ad4ee` | Virtueel Kantoor + Cultuur: fundament-teksten | T |
| `32b936e` | VO: "Bouw vanuit het fundament" → "Kantoor + Cultuur" | T |
| `18ef4fa` | Events: slugs gelijkgetrokken met titels + 308-redirects | C |
| `9166e2c` | Events review: grammatica, consistentie, variatie in herhaalde copy | T |
| `39bb987` | SEO: alt-teksten verrijkt | T B |
| `c70a41d` | VO zaaltje: beeld omgewisseld + prijs € 189 | T B |
| `6e163c7` | VO huren: nieuwe Instapklaar-tekst + OLY Bar-beeld | T B |
| `6f0c44f` | VO zaaltje: "Voor wie" → "Kies je locatie" (6 locaties) | T |
| `b094aad` | VO: hero-beelden zaaltje & huren vernieuwd (-v2) | B |
| `5dc5cd8` | Home: SpatialChat-sectie tijdelijk YouTube-facade | C B |
