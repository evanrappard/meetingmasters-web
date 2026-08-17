# Website-visuals — centraal register

Eén overzicht van álle beelden en video's op de site: waar ze staan, waar ze
vandaan komen en (waar bekend) welk bronbestand ze zijn. Dit is de plek om te
kijken vóór je een visual wijzigt.

> Laatst bijgewerkt: 2026-08-15

## Hoe het werkt (belangrijk)

De beelden zitten op dit moment in **twee** soorten opslag:

- **LOKAAL** — bestand in `public/images/` of `public/videos/`. Direct te
  wijzigen: bestand vervangen + het pad in de code klopt al. Verreweg het meeste.
- **CMS (Sanity)** — komt live uit de Sanity-database. Alleen op de **NL-homepage**
  (klantenlogo-balk + inspiratie-cases), telkens mét lokale fallback.

**Afspraak (juli 2026): we beheren visuals voorlopig LOKAAL** en migreren later in
één keer alles naar de CMS. Waar een sectie eigenlijk CMS-gedreven is maar we het
beeld lokaal willen, gebruiken we een expliciete override in de code (zie NL Home
→ Inspiratie).

## Een visual wijzigen — stappen

1. Zoek de visual hieronder op → noteer **bestandspad** en **bron**.
2. Zet het nieuwe bronbestand klaar (bronmap: zie onderaan).
3. Converteer/optimaliseer (geen `ffmpeg`/`cwebp`/`brew` op deze Mac → gebruik
   `ffmpeg-static` via npm; zie geheugen `mm-media-processing`):
   - **Afbeelding → WebP:** `ffmpeg -i in.png -vf "scale=1600:-2:flags=lanczos" -c:v libwebp -quality 82 -compression_level 6 out.webp`
   - **Hero-video (comprimeren + boomerang):** schaal naar 1080p, `-filter_complex "[0:v]scale=1920:1080:flags=lanczos,setsar=1[s];[s]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1[v]"` + `libx264 -crf 29 -preset slow -pix_fmt yuv420p -movflags +faststart -an`.
4. Kopieer het resultaat naar `public/images` of `public/videos`.
5. **LOKAAL:** pas het pad in de code aan. ⚠️ **Bij het VERVANGEN van een bestaand
   beeld: geef het nieuwe bestand een nieuwe naam** (bv. `-v2`) i.p.v. dezelfde
   naam overschrijven. Anders serveert de browser/Next-image-cache de oude versie
   en lijkt de wijziging niet door te komen. Verwijder daarna het oude bestand.
   **CMS:** wijzig in Sanity, óf voeg een lokale override toe (zoals Inspiratie).
6. Werk dit register bij (pad, bron, bronbestand, crop).
7. Controleer op `http://localhost:3000/<route>`.

---

## NL Home — `app/nl/home/page.tsx`  ⚠️ enige CMS-afhankelijke pagina

| Sectie | Bestand / CMS-veld | Bron | Bronbestand & instellingen |
|---|---|---|---|
| Hero (achtergrondvideo) | `/videos/hero-boomerang.mp4` | LOKAAL | `Downloads/welcome hero stock.mp4` → 1080p, **20% vertraagd** (`setpts=1.25*PTS`), boomerang, CRF 25, ~2,5 MB. Plain `<video autoplay muted loop playsinline>`, meteen instarten |
| Klantenlogo-balk | `cmsLogos[].logo.asset.url` (fallback: 16× `/images/logos/*.webp`) | CMS (fallback lokaal) | — |
| Oplossing 01 — Events | `/images/home-oplossing-events.webp` | LOKAAL | `MM Website afbeeldingen (17).png` · **crop** `scale(2.2)`, origin `54% 52%` (inzoom op laptopscherm) |
| Oplossing 02 — Virtueel kantoor | `/images/home-oplossing-virtueelkantoor.webp` | LOKAAL | `home-oplossing-virtueelkantoor.png` · object-position center |
| Oplossing 03 — Games & Tools | `/images/format-escape.webp` | LOKAAL | bestaand beeld · **crop** `scale(1.2)`, origin `30% center` |
| Inspiratie 1 — Online Strategiedag | `/images/home-inspiratie-strategiedag.webp` (override `LOCAL_INSPIRATIE_IMG`) | CMS-tekst + LOKAAL beeld | `MM Website afbeeldingen (26).png` |
| Inspiratie 2 — Virtueel Clubhuis | `/images/home-inspiratie-virtualoffice.webp` (override `LOCAL_INSPIRATIE_IMG`) | CMS-tekst + LOKAAL beeld | `home-inspiratie-virtualoffice.png` |
| Inspiratie 3 — Escape/Games | `cmsCases[].image.asset.url` (fallback `/images/inspiratie-escape.webp`) | CMS (fallback lokaal) | nog te vervangen door lokaal? |
| Essentie-sectie ("Waar wij voor staan", beeld links, witte bg, CTA's manifest-download + Contact) | `/images/home-essentie.webp` | LOKAAL | `Vrouw achter laptop spatial MM.png` (Downloads) — SpatialChat-blok gespiegeld. Manifest-PDF: `public/downloads/meetingmasters-manifest.pdf` |
| Spatial-sectie | YouTube-facade (video-ID `kBHFSnQDhX4`), poster `/images/spatialchat-video-poster.jpg` — **tijdelijk** i.p.v. carrousel; verving `spatial-entree.webp` | LOKAAL + YouTube |

Sanity-query's: `sanity/queries.ts` (`getLogos`, `getHomepageCases`, `getHomepageContent`). Enige importeur is deze pagina. `homepageContent` (heroHeadline/subline/stats) is CMS maar zonder beeld.

## NL Over ons — `app/nl/about/page.tsx`

| Sectie | Bestand | Bron |
|---|---|---|
| Hero | `/images/about-hero.webp` | LOKAAL |
| Klantenlogo's (10×) | `/images/logos/*.webp` | LOKAAL |
| Manifest-video | YouTube `Cling07_Kas` (YouTubeEmbed) | EXTERN |
| Oprichter | `/images/emilie-ad-v2.webp` | LOKAAL | `Downloads/ChatGPT Image 11 aug 2026, 16_12_45.png` — 1262×1246, scherpe versie van dezelfde foto. Verving `emilie-ad.webp` (was 286×284, te zacht); oude bestand verwijderd 12 aug 2026. Kader is `aspect-[4/3]` + `object-cover object-center` → boven/onder valt weg |
| Team | `/images/team-mm.webp` | LOKAAL |

## NL Team — `app/nl/team/page.tsx`
| Portret Emilie | `/images/team-emilie.jpg` | LOKAAL |
| Groepsfoto | `/images/team-group.jpg` | LOKAAL |

## NL Events (overzicht) — `app/nl/events/page.tsx`
| Hero (achtergrondvideo) | `/videos/events-hero.mp4` | LOKAAL | bron `Downloads/Hero events korter.mp4` → 3200×1800→1080p, 9,5s, **naadloze crossfade-loop** (1s, einde vloeit over in begin via split+overlay+alpha-fade), CRF 25, ~1,9 MB, niet vertraagd. Was `events-hero.webp` (nu vervangen) |
| Event-type iconen (10×) | `/images/icons/*.png` | LOKAAL |
| Spatial-sectie | `/images/events-spatial.webp` | LOKAAL |
| Testimonials | `<TestimonialsCarousel />` → 4 lokale logo's | LOKAAL |

## NL Event-detail — `app/nl/events/[slug]/page.tsx` (template, `EVENT_DATA`)

**Stand 15 augustus 2026: alle 20 events hebben een eigen hero; van de 60
praktijk-kaarten staat er nog 1 op de placeholder.** Daarvoor waren dat
4 hero's en 12 kaarten.

| Veld | Waar |
|---|---|
| Hero | `event.heroSrc`, fallback `/images/events-bijeenkomst.webp` |
| Hero-uitsnede | `event.heroImgStyle` (optioneel) |
| Donkerlaag hero | `event.heroOverlay` (optioneel, zie hieronder) |
| Alt-tekst hero | `event.heroAlt` — per event geschreven, beschrijft het beeld |
| Praktijk-kaarten | `cases[].img` + `cases[].imgAlt` + `cases[].imgStyle` |
| Event-iconen | `/images/icons/*.png` — decoratief (`alt=""`), Next levert ze als WebP uit |

### Overzicht per event

Praktijk-kaarten staan in de volgorde waarin ze op de pagina verschijnen.

| Event | Hero | Donkerlaag | Praktijk-kaarten |
|---|---|---|---|
| `strategiedagen` | `events-strategiedag-hero.webp` | licht | Branchevereniging: `events-praktijk-branchevereniging.webp`<br>Multinational: `events-praktijk-whiteboard.webp`<br>Non-profit: `events-praktijk-forum.webp` |
| `townhall` | `events-townhall-hero.webp` | medium | Grote organisatie: `events-townhall-praktijk-directie.webp`<br>Verandertraject: `events-townhall-praktijk-verandertraject.webp`<br>Internationaal team: `events-townhall-praktijk-internationaal.webp` |
| `all-hands` | `events-allhands-hero.webp` | licht | Internationaal MKB: `events-allhands-koers.webp`<br>HR en communicatie: `events-allhands-diversity.webp`<br>Middelgroot Nederlands bedrijf: `events-allhands-terugkerend.webp` |
| `alv` | `events-alv-hero.webp` · eigen crop | sterk | Europese branchevereniging: `events-alv-praktijk-branchevereniging.webp`<br>Investeringsmaatschappij: `events-alv-praktijk-gewogen-stemmen.webp`<br>Stichting: `events-alv-praktijk-jaarstukken.webp` |
| `teambuilding` | `events-teambuilding-hero-v2.webp` | licht | Nieuw projectteam: `events-teambuilding-praktijk-kennismaken.webp`<br>Hybride afdeling: `events-teambuilding-praktijk-hybride.webp`<br>Internationaal team: `events-teambuilding-praktijk-internationaal.webp` |
| `training-workshop` | `events-training-workshop-hero.webp` | medium | L&D-team: `events-training-praktijk-bekendheid.webp`<br>Opleidingsinstituut: `events-training-praktijk-cohorten.webp`<br>Interne experts: `events-training-praktijk-trainers.webp` |
| `brainstormen` | `events-brainstormen-hero.webp` | medium | Marketingteam: `events-brainstormen-praktijk-campagne.webp`<br>Innovatieteam: `events-brainstormen-praktijk-concepten.webp`<br>Strategieteam: `events-brainstormen-praktijk-kansen.webp` |
| `onboardingdag` | `events-onboardingdag-hero.webp` | medium | Groeiende organisatie: `events-onboarding-praktijk-maandelijks.webp`<br>Internationale groep: `events-onboarding-praktijk-internationaal.webp`<br>HR en L&D: `events-onboarding-praktijk-ervaring.webp` |
| `bedrijfsfeest` | `events-bedrijfsfeest-hero.webp` | licht | Internationaal team: `events-bijeenkomst.webp`<br>Afdelingsevent: `events-bedrijfsfeest-praktijk-quiz.webp`<br>MKB: `events-bedrijfsfeest-praktijk-activiteiten.webp` |
| `kerstfeest` | `events-kerst-hero.webp` | licht | Teamfeest: `events-kerst-kerstquiz.webp`<br>Grote organisatie: `events-kerst-leveranciers.webp`<br>Coöperatie: `events-kerst-stemmig.webp` |
| `teamuitje` | `events-teamuitje-hero.webp` | licht | Internationaal team: `events-teamuitje-praktijk-terras.webp`<br>Projectteam: `events-teamuitje-praktijk-energie.webp`<br>Afdeling: `events-teamuitje-praktijk-escape.webp` |
| `community-building` | `events-community-hero-v2.webp` | licht | Internationaal netwerk: `events-community-olympiers.webp`<br>Alumninetwerk: `events-community-terugkerend.webp`<br>Professionele community: `events-community-professioneel-v2.webp` |
| `bewonersparticipatie` | `events-bewonersparticipatie-hero-v3.webp` | licht | Gemeente: `events-bewoners-praktijk-buurtgesprek.webp`<br>Woningcorporatie: `events-bewoners-praktijk-huurders.webp`<br>Stadsbrede consultatie: `events-bewoners-praktijk-consultatie.webp` |
| `klankbordgroep` | `events-klankbordgroep-hero.webp` | medium | Beleidsprogramma: `events-klankbord-praktijk-stakeholders.webp`<br>Ledenorganisatie: `events-klankbord-praktijk-heartbeat.webp`<br>Projectteam: `events-teambuilding-praktijk-internationaal.webp` |
| `focusgroep` | `events-focusgroep-hero.webp` | licht | Marktonderzoek: `events-focusgroep-praktijk-concept.webp`<br>Beleidsonderzoek: `events-bedrijfsfeest-praktijk-activiteiten.webp`<br>Productontwikkeling: `events-open-space-hero.webp` |
| `world-cafe` | `events-world-cafe-hero.webp` | medium | Kennisnetwerk: `events-worldcafe-praktijk-ervaringen.webp`<br>Interne organisatie: `events-worldcafe-praktijk-leren.webp`<br>Samenwerkingsverband: `events-worldcafe-praktijk-inzicht.webp` |
| `webinar` | `events-webinar-hero.webp` | licht | Kennisorganisatie: `events-webinar-praktijk-gesprek.webp`<br>Marketingteam: `events-webinar-praktijk-leads.webp`<br>L&D-team: `events-webinar-praktijk-leren.webp` |
| `conferentie` | `events-conferentie-hero-v2.webp` | sterk | Internationale conferentie: `events-conferentie-praktijk-hybride.webp`<br>Kennisinstelling: `events-conferentie-praktijk-meerdaags.webp`<br>Brancheorganisatie: `events-conferentie-praktijk-brancheorganisatie.webp` |
| `open-space` | `events-open-space-hero.webp` | licht | Innovatietraject: `events-openspace-praktijk-innovatie.webp`<br>Community of Practice: `events-openspace-praktijk-community.webp`<br>Strategische verkenning: `events-openspace-praktijk-verkenning.webp` |
| `netwerkevent` | `events-netwerkevent-hero-v2.webp` | licht | Internationaal netwerk: `events-netwerk-praktijk-clubhuis.webp`<br>Alumni: `events-netwerk-praktijk-alumni.webp`<br>Conferentie: `events-netwerk-praktijk-conferentie.webp` |

**Formaten.** Alle inhoudelijke beelden zijn WebP, kwaliteit 82. Hero's 1600×900,
praktijk-kaarten 1200×592 (de kaart is ongeveer 2:1). Bronnen kleiner dan 1200px
worden **niet** opgeblazen maar op ware grootte gesneden — opblazen maakt een
beeld zachter, niet scherper.

**Alt-teksten.** Elk beeld heeft een eigen beschrijving in de context van het
event; de iconen zijn decoratief en hebben bewust `alt=""`, omdat de titel er als
tekst naast staat en een dubbele voorlezing niets toevoegt.

### Hergebruikte beelden (bewust)

| Bestand | Staat op |
|---|---|
| `events-teambuilding-praktijk-internationaal.webp` | teambuilding + klankbordgroep |
| `events-bedrijfsfeest-praktijk-activiteiten.webp` | bedrijfsfeest + focusgroep |
| `events-open-space-hero.webp` | hero van open-space + kaart bij focusgroep |

### Randen wegsnijden — let op bij nieuw beeld

Vijf aangeleverde beelden hadden balken die als strook in het kader terugkwamen:
teambuilding (wit, 248px links én rechts), netwerkevent (wit, 15px rechts),
bewonersparticipatie (wit, 44px onder), world-café/inzicht (geel, 126px boven en
onder) en conferentie/branche (zwart, 297px links). Wegsnijden gebeurt op het
**origineel**, daarna pas schalen.

Eén beeld is opgelicht: de CoP24-regiekamer (`events-conferentie-praktijk-hybride`),
+22% helderheid en gamma 1,15, omdat de details anders wegvielen in het donker.

### Donkerlaag over event-hero's (`heroOverlay`)

De witte kop staat linksonder in de hero. Waar het beeld daar te licht is, valt de
tekst weg. Drie standen, gedefinieerd bovenin `app/nl/events/[slug]/page.tsx`:

| Stand | Klasse | Wanneer |
|---|---|---|
| `HERO_DIM_LICHT` (standaard) | `from-black/55 via-black/15 to-transparent` | beeld links al rustig/donker |
| `HERO_DIM_MEDIUM` | `from-black/70 via-black/30 to-transparent` | licht of druk achter de kop |
| `HERO_DIM_STERK` | `from-black/80 via-black/45 to-black/10` | wit vlak pal achter de kop |

Gemeten op de tekstzone van de desktop-uitsnede (beeld 1600×900 → zichtbaar
1440×520, tekst op x 176–848 / y 335–667). Vuistregel: méér dan ~6% van die zone
lichter dan 0,62 luminantie → een stand omhoog. Ter ijking: de goedgekeurde
`events-kerst-hero` zit op 5,4%.

> ⚠️ Twee hero's van vóór deze ronde vallen buiten die norm en staan nog op licht:
> `events-allhands-hero` (53,7% te licht) en `events-community-hero-v2` (16,9%).
> Kandidaat om ook op medium/sterk te zetten.

**Nakijken.** `node scripts/hero-shots.mjs <slug>...` of `--alle` maakt opnames van
de hero-band op 1440px in `schermafdrukken/hero/`. Met `--sectie "<tekst>"` legt
hij een sectie verderop de pagina vast. Draait tegen het netwerk-IP.

## NL Virtueel kantoor — `app/nl/virtual-office/page.tsx`
| Hero (video) | `/videos/vo-hero-office-v4.webm` + `.mp4`, poster `/images/vo-hero-office.jpg` | LOKAAL |
| Toepassingen-cards (6×) | `/images/vo-clubhuis.webp`, `vo-museum.webp`, `vo-thuisbasis.webp`, `vo-hub.webp`, `vo-community.webp`, `vo-project.webp` | LOKAAL |
| Ingangen-cards (3×, "Drie manieren om binnen te komen", beeld boven tekst) | `/images/vo-zaaltje-v2.webp` (`Kantoorruimte.png`), `vo-huren-v2.webp` (`Kantoorruimte (1).png`), `vo-fundament-v2.webp` (`MM Website afbeeldingen (20).png`) — zelfde beelden als subpagina-hero's | LOKAAL |
| Clubhouse-sectie | `/images/oly-clubhouse.webp` | LOKAAL |

### NL Virtueel kantoor — subpagina's
| `/nl/virtual-office/zaaltje` | hero `/images/vo-zaaltje-v2.webp` (`Kantoorruimte (3).png`); "Kies je locatie" 6× `zaaltje-strandhuis.webp` / `zaaltje-bosdag.webp` (`Natuur bos.png`) / `zaaltje-heisessie.webp` (`Werkplek.png`, heideveld) / `zaaltje-creatief.webp` (`Service to OLY 2- OLY Gallery.png`) / `zaaltje-bezinning.webp` (`ChatGPT Image …12_58_22.png`) / `zaaltje-werksessie.webp` (`Spatial meeting achtergrond … Digibord MM.png`) | LOKAAL |
| `/nl/virtual-office/kantoor-cultuur` (voorheen `/fundament`) | hero `/images/vo-fundament-v2.webp` (`MM Website afbeeldingen (20).png`; oude lege plattegrond `vo-fundament.webp` niet meer gebruikt) | LOKAAL |
| `/nl/virtual-office/huren` | hero `/images/vo-huren-v2.webp` (`Kantoorruimte (2).png`); In de praktijk `/images/oly-bar-milano.webp` (`Spatial bar.png`) | LOKAAL |

## NL Technologie — `app/nl/technologie/page.tsx`  🚧 (andere Claude werkt hieraan)
| Tool-types (3×) | `/images/events-bijeenkomst.webp`, `events-spatial.webp`, `spatial-entree.webp` | LOKAAL |
| Tools-grid logo | `/images/logo.webp` | LOKAAL |
| Subpagina's (faq, helpdesk, hoe-het-werkt, platforms, spatialchat, support) | geen beeld | n.v.t. |

## NL Games & Tools — `app/nl/games-tools/page.tsx`
| Hero (video) | `/videos/games-hero-v5.webm` + `.mp4`, poster `/images/games-hero-v5.jpg` | LOKAAL |
| Games-cards | Online escape room `/images/format-escape.webp`, Korte games `format-party.webp`, Maatwerk `/images/game-maatwerk.webp` (`Close up laptop scherm.png`) | LOKAAL |
| R@venHack-blok | YouTube-facade (video-ID `5g3Vv51_hR0`), poster `/images/ravenhack-video-poster.jpg` — verving `format-2.webp` | LOKAAL + YouTube |
| Tool-cards (4×, volgorde Inspiration→Bingo→Storytelling→Wheel) | `/images/tool-inspiration-cards-v2.webp`, `tool-bingo-v2.webp`, `tool-storytelling-v2.webp`, `tool-wheel-of-fortune-v2.webp` — uniform 400×480, per beeld eigen achtergrondkleur bijgebakken (contain + trim). Oude `tool-*.webp` (zonder `-v2`) niet meer gebruikt. | LOKAAL |

### NL Games/Escape — subpagina's
| `/nl/games-tools/ravenhack` | hero `/images/ravenhack-hero.webp` (`Scherm…2025-10-08 om 21.21.45.png`, OneDrive escape-marketing); Hoe-het-werkt stappen `ravenhack-crisis.webp` / `ravenhack-onderzoek.webp` (`UK Designs Escape (1)`) / `ravenhack-doorbraak.webp` (`UK Designs Escape (2)`); In-de-praktijk = YouTube-facade `5g3Vv51_hR0` + poster `ravenhack-video-poster.jpg` | LOKAAL + YouTube |
| `/nl/escape-rooms` | `/images/format-escape.png`, `/images/format-2.png` | LOKAAL |
| `/nl/games-tools/tools/*` | geen beeld (interactieve tools) | n.v.t. |

## NL Strategy-concept — `app/nl/strategy-concept/page.tsx`
| Banner | `/images/strategy-banner.jpg` | LOKAAL |
| Kaarten | `/images/strategy-1.png`, `format-1.jpg`, `planning-1.png` | LOKAAL |

## NL Meeting-formats — `app/nl/meeting-formats/page.tsx`
| Header | `/images/format-1.jpg` | LOKAAL |
| Format-cards | `/images/format-party.png`, `format-escape.png`, `strategy-banner.jpg` | LOKAAL |

## NL Planning-support — `app/nl/planning-support/page.tsx`
| Header | `/images/planning-2.jpg` | LOKAAL |
| Kaarten | `/images/planning-3.jpg`, `planning-4.jpg`, `planning-1.png` | LOKAAL |

## NL Blog — `app/nl/blog/page.tsx` + `app/nl/blog/[slug]/page.tsx`
| Hero (overzicht) | `/images/blog/blog-hero.webp` | LOKAAL |
| Overzichtskaarten (10) | `/images/blog/{heen-en-weer,online-beheersen,wat-gamers-weten,rondjes-versus-vierkantjes,systeemwoede,ai-paradox,niet-hetzelfde-wel-goed,acht-grens,stok-om-mee-te-slaan,olympiers}.webp` | LOKAAL |
| Detailpagina | herhaalt de kaart-visual als 16:9 hero (zelfde bestand per slug) | LOKAAL |

Data-bron: `app/nl/blog/posts.ts` (gedeeld door overzicht + detail).

## NL pagina's zónder beeld (tekst/UI-only)
`cases`, `inspiratie`, `partners`, `quality`, `csr`, `contact`,
`expert-advies`, `about/{csr,team,partners,quality}`, `testimonials`.

---

## Losse routes (zonder taalprefix, ouder)
| `/events` | `/images/events-bijeenkomst.webp` | LOKAAL |
| `/games` | `/images/inspiratie-escape.webp` | LOKAAL |
| `/games/ravenhack` | `/images/inspiratie-escape.webp` | LOKAAL |
| `/games/escape-masters` | `/images/format-escape.webp` | LOKAAL |
| `/technology/*` | geen beeld | n.v.t. |

## EN routes — `app/en/*`  (oudere statische variant, **geen** spiegel, **geen** CMS)
Alle EN-beelden zijn LOKAAL; layout wijkt af van NL.
| EN Home | hero `/images/hero-2.webp` (statisch, geen video); logo's hard-coded; verder `events-bijeenkomst.webp`, `remote-office-virtual.webp`, `format-escape.webp`, `hero-1.webp`, `inspiratie-olyhouse.webp`, `inspiratie-escape.webp`, `spatial-entree.webp` | LOKAAL |
| EN Events | `/images/hero-1.jpg` | LOKAAL |
| EN About | `/images/team-emilie.jpg`, `team-group.jpg` (geen hero/YouTube zoals NL) | LOKAAL |
| EN remote-office | `/images/planning-3.jpg`, `strategy-1.png` | LOKAAL |
| EN team, meeting-formats, planning-support, strategy-concept, escape-rooms, games-tools(+ravenhack, escape-masters) | dezelfde lokale bestanden als NL-tegenhanger (grotendeels `.png/.jpg`) | LOKAAL |

---

## Gedeelde componenten
| Navbar (`components/layout/Navbar.tsx`) | `/images/logo.webp` | LOKAAL (UI) — 🚧 andere Claude |
| Footer (`components/layout/Footer.tsx`) | `/images/logo-diapositief.webp` | LOKAAL (UI) |
| TestimonialsCarousel | `/images/logos/{roosendaal,bergman-clinics,pharmaccess,pbcf}.webp` | LOKAAL |
| YouTubeEmbed | `youtube-nocookie.com/embed/{id}` + `ytimg.com` thumbnail | EXTERN |
| HeroCarousel | `/images/hero-1..4.jpg` | **NIET in productie gebruikt** (dode code) |
| HeroVideo | props `src`/`startImage` | **NIET meer in productie gebruikt** (Home-hero is nu plain `<video>`) |

---

## Opschonen (kandidaten)
- **Dode componenten/assets:** `HeroCarousel`, `HeroVideo`, `components/hero.tsx` + `hero-1.jpg … hero-4.jpg`, `hero-v2.jpg`, `hero-v2.mp4` (oude home-hero). Niet meer geïmporteerd.
- **Placeholder-hergebruik:** `events-bijeenkomst.webp` is de case-afbeelding voor álle ~20 events in `[slug]` — kandidaat voor unieke beelden per event.
- **Experiment-/preview-routes** (`home-v2/3/4`, `app/preview/*`, `design-preview`, `layout-preview`, `*.v1-v4.tsx`): buiten dit register gelaten (zie geheugen `mm-cleanup-experiment-files`).

## Bronbestanden
Nieuwe visuals staan in OneDrive:
`~/Library/CloudStorage/OneDrive-MeetingMasters/MeetingMasters/Marketing & PR/Website/website 2026/website visuals/`
(Directe padvariabelen in de shell kunnen falen → eerst `cd` in de map, dan kopiëren.)
