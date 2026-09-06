# Website-visuals — centraal register

Eén overzicht van álle beelden en video's op de site: waar ze staan, waar ze
vandaan komen en (waar bekend) welk bronbestand ze zijn. Dit is de plek om te
kijken vóór je een visual wijzigt.

> Laatst bijgewerkt: 2026-09-06

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
| Hero (achtergrondvideo) | `/videos/hero-boomerang-pauze-licht.mp4` | LOKAAL | `Downloads/welcome hero stock.mp4` → 1080p, **20% vertraagd** (`setpts=1.25*PTS`), boomerang, **1,8 s rustpauze op beide keerpunten**, **CRF 29**, ~1,6 MB, 35,9 s. Opnieuw te maken met `node scripts/hero-video-pauze.mjs [seconden]`. Plain `<video autoplay muted loop playsinline>`, meteen instarten. **Uitsnede** `object-position: center 82%` (24 aug 2026, was 38% — beeld omhoog zodat de bubbels ruimer in beeld staan, keuze van Emilie uit een schuifproef); geldt ook voor de posters. Voorgangers `hero-boomerang.mp4` (zonder pauze, 2,35 MB) en `hero-boomerang-pauze.mp4` (CRF 25, 2,68 MB) staan er nog, worden niet meer gebruikt |
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
| Hero (achtergrondvideo) | `/videos/events-hero-v2.mp4` | LOKAAL | 26 aug 2026; bron `Downloads/files (2)/MM_hero3_loop_v3.mp4` (1920×1080, 11,9s) → alleen gecomprimeerd (CRF 29, faststart, geen audio), 1,26 MB. Die bron loopt zelf al rond; een crossfade bleek onnodig en maakte de naad juist slechter. Posters uit hetzelfde bestand: `/images/events-hero-poster-v3.webp` (1280 br, 191 kB) en `-v2-mobiel.webp` (900 br, 141 kB). De desktopposter was 1600 br en 386 kB; op desktop is hij maar 265 ms in beeld voordat de video hem bedekt, dus die afmeting leverde niets op. Wie "verminder beweging" aan heeft ziet hem wél permanent, vandaar 1280 en niet kleiner. **Uitsnede** `object-position: center 70%`: op brede schermen wordt de band naar verhouding het meest bijgesneden en viel met "center" de onderste rij bolletjes weg. Voorganger `events-hero.mp4` (1,82 MB) staat er nog, niet meer in gebruik |
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
| R@venHack-blok | YouTube-facade, **per taal**: NL trailer `5g3Vv51_hR0` + poster `/images/ravenhack-video-poster.jpg`, EN trailer `hE8qs_akrxM` + poster `/images/ravenhack-trailer-poster-en.webp` (frame 360 uit `R@venHack Trailer UK.mp4` in OneDrive, het Engelse equivalent van het Nederlandse posterbeeld) — verving `format-2.webp` | LOKAAL + YouTube |
| Tool-cards (4×, volgorde Inspiration→Bingo→Storytelling→Wheel) | `/images/tool-inspiration-cards-v2.webp`, `tool-bingo-v2.webp`, `tool-storytelling-v2.webp`, `tool-wheel-of-fortune-v2.webp` — uniform 400×480, per beeld eigen achtergrondkleur bijgebakken (contain + trim). Oude `tool-*.webp` (zonder `-v2`) niet meer gebruikt. | LOKAAL |

### NL Games/Escape — subpagina's
| `/nl/games-tools/ravenhack` | hero `/images/ravenhack-hero-v7.webp` (28 aug 2026, aangeleverd door Emilie: `Downloads/MM Website afbeeldingen (22).png`, 3200×1800. Derde versie van deze wand op één dag; in deze staat alles wat ertoe doet — de kop van het silhouet, de gezichten en de hint-knop — tussen 37% en 82% van de hoogte, en dat past ruim in de gewone heroband van 44vw / max. 560 px. `objectPosition: center 70%`. Opgeslagen op 2560 breed, kwaliteit 88); Hoe-het-werkt stappen `ravenhack-crisis-v2.webp` (play-knop uit het beeld gepoetst met een lap uit een egaal stuk ernaast) / stap 2 = `ravenhack-hero-v3.webp` (de oude hero, `Downloads/Erik_en_Dave_HSZ_scherper.png`, 2338×1212) / `ravenhack-doorbraak.webp` (`UK Designs Escape (2)`); videoblok = YouTube-facade, NL `k8fXvDLmXtg` + poster `ravenhack-video-poster-nl.webp`, EN `_y8yi-YgEhk` + poster `ravenhack-video-poster-en.webp`. **Let op:** stap 2 en het posterbeeld tonen allebei de High Security Zone. Niet meer in gebruik: `ravenhack-hero-v6.webp`, `-v5.webp` en `-v4.webp` (alle drie kort hero geweest op 28 aug), `ravenhack-hero.webp`, `ravenhack-onderzoek.webp`, `ravenhack-crisis.webp`, `ravenhack-video-poster.jpg` en de oude trailer `5g3Vv51_hR0` | LOKAAL + YouTube |
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


---

## Hero's: donkere ondergrond, en let op het gewicht

Hero's gaan door `components/ui/HeroBeeld.tsx`. Dat zet één ding extra: een
donkere ondergrond, zodat je geen wit vlak ziet terwijl het beeld laadt.

Een vervaagde miniatuur eronder is geprobeerd en weer weggehaald: je zag de hero
dan zachtjes scherp worden in plaats van er gewoon te staan.

**Waar het wél in zit: het gewicht.** Meet bij een nieuwe hero wat de browser
binnenhaalt (netwerktabblad, of `_next/image?url=…&w=1920&q=…` opvragen). Onze
hero's zitten op 57 tot 127 kB. Zit je daar ver boven, kijk dan eerst naar
kwaliteit 75 in plaats van 90, en snijd het beeld bij op de band die je ook echt
toont — bij een brede band valt een derde van een 16:9-beeld buiten beeld, en die
pixels worden wel gedownload.

---

## Deelnemerspagina R@venHack — `/nl/games-tools/ravenhack/deelnemers` en `/en/games-tools/ravenhack/participants`

Nagebouwd van de oude Squarespace-pagina (1 september 2026). Staat niet in het
menu en niet in de sitemap; deelnemers krijgen de link in de uitnodiging. Beide
talen gebruiken dezelfde vier beelden.

| Plek | Bestand | Bron |
|---|---|---|
| Hero | `/images/deelnemers-hero.webp` (2560×1440) | OneDrive → `Commercie/Escape Rooms/Achtergronden NL/Designs New Product - Escape (1)/51.png` (3200×1800) |
| EscapeMasters-logo op de hero | `/images/logos/escape-masters-wit.webp` | OneDrive → `Commercie/Escape Rooms/EscapeMasters logo/witte tekst.png` |
| Spelbeeld, zwarte sectie | `/images/deelnemers-spel.webp` (632×606) | uitsnede uit het bestaande `/images/ravenhack-hero.webp` |
| Sloten boven de stad, crèmesectie | `/images/deelnemers-veilig.webp` (1450×1200) | OneDrive → dezelfde map, `48.png` (3200×1800), midden bijgesneden naar 1.21:1 |

**Let op bij de hero:** het beeld dat de site al had (`inspiratie-escape.webp`)
is dezelfde foto, maar met het oude EscapeMasters-logo eríngebakken, in een
verwassen grijs. Daarom staat hier de schone versie uit OneDrive, met het goede
logo er als los beeld overheen. Gebruik `inspiratie-escape.webp` dus niet op
deze pagina.

Gewicht van de hero: 202 kB op 1920 breed bij kwaliteit 75 (op 90 was dat 344 kB
zonder zichtbaar verschil). Binaire code comprimeert slecht; dit zit onder de
R@venHack-hero, die op 278 kB zit.


---

## 1klik — `/nl/games-tools/ravenhack/1klik` en `/en/games-tools/ravenhack/1click`

Nagebouwd van de oude Squarespace-pagina (1 september 2026). Buiten het menu en
buiten de sitemap.

| Plek | Bestand | Bron |
|---|---|---|
| Hero | `/images/1klik-hero.webp` (2560×1440) | OneDrive → `Commercie/Escape Rooms/Achtergronden NL/Designs New Product - Escape (1)/36.png` |
| Logoblokje in de hero | `/images/logos/escape-masters.webp` | OneDrive → `Commercie/Escape Rooms/EscapeMasters logo/1.png` |
| VPN-beeld bij de basisregels | `/images/1klik-vpn.webp` (1800×1013) | dezelfde map, `37.png` |
| Slotbeeld NL | `/images/1klik-scene.webp` (2560×1440) | dezelfde map, `8.png` + aantekeningen, zie hieronder |
| Slotbeeld EN | `/images/1klik-scene-en.webp` (2560×1440) | Downloads → `(Engels) (6).png` |

**Let op bij het hero-beeld:** in Downloads staat `(Engels) (4).png` met dezelfde
foto, maar met het Cyber Security Month-zegel en de tekst "Cybersecurity? Ga het
gesprek aan!" eríngebakken. Gebruik die niet; `36.png` is de schone versie.

### Het slotbeeld: de aantekeningen zijn samengesteld

De scène bestond in twee versies: `8.png` is de Nederlandse werkplek zónder
aantekeningen, en `(Engels) (6).png` is de Engelse mét de rode cirkel, de rode
pijl en de WORD-blokjes. Een Nederlandse versie mét aantekeningen bestond niet.

Die is gemaakt door de aantekeningen uit de Engelse over te zetten op de
Nederlandse: de rode pixels zijn met een kleurmasker uit de Engelse gelicht en
op dezelfde plek geplakt (de twee foto's staan bijna gelijk: de pop-up begint op
x 1447 tegen x 1480), en de WORD-blokjes zijn als rechthoek overgezet met een
zachte rand. De Engelse "UNLOCK" binnen de cirkel is bewust uitgesloten, anders
lag die dubbel over de Nederlandse.

Komt er ooit een échte Nederlandse versie mét aantekeningen, vervang dan
`1klik-scene.webp` — verder hoeft er niets te veranderen.


---

## Organisatorenpagina R@venHack — `/nl/games-tools/ravenhack/organisatoren` en `/en/…/organisers`

Gebouwd 2 september 2026. Buiten het menu en buiten de sitemap.

| Plek | Bestand | Bron |
|---|---|---|
| Hero, breed scherm | `/images/organisatoren-hero-v2.webp` (2560×959) | Downloads → `UK Designs Escape (14).png`, y 300–1499 |
| Hero, telefoon | `/images/organisatoren-hero-mobiel-v2.webp` (1460×1670) | dezelfde foto, staande uitsnede x 730–2190, y 120–1790 |
| Logo op de hero | `/images/logos/escape-masters-wit.webp` | zelfde als op de deelnemerspagina |
| Teamindeling | `/images/organisatoren-teams-v2.webp` (1800×1013) | Downloads → `(Engels) (7).png` |
| Uitnodiging | `/images/organisatoren-uitnodiging-v2.webp` (2560×1252) | Downloads → `UK Designs Escape (12).png`, liggende band x 420–2980, y 520–1772 (2,04:1) |
| Agenda-afspraak | `/images/organisatoren-agenda-v2.webp` (1200×1800) | Downloads → `(Engels) (8).png`, staande uitsnede rond de schaduwfiguur op x 814 |
| Technische tips | `/images/deelnemers-veilig.webp` | gedeeld met de deelnemerspagina |

**De hero is vooraf bijgesneden op de vorm van de band**: 3200×1199 uit
`UK Designs Escape (14).png` (y 300–1499), precies 2,67:1. Dat is de volle
breedte van de foto — zo ver uitgezoomd als deze bandvorm toelaat — waardoor de
hele bol, de zoekbalk en de klikkende hand erin passen. De vingertop die klikt
komt daarmee op 40% van de band uit, net boven het midden.

In de component staat daarom `objectPosition: center center`. Wil je het anders,
snijd dan het bestand anders uit; ga niet schuiven met `objectPosition`, want dan
verlies je juist wat je wilt laten zien.

De tekst staat onderin de band (`items-end`), met een verloop dat onderin donker
is en bovenin bijna doorzichtig. Zo blijft de klikkende vinger zichtbaar en heeft
de tekst toch een leesbare ondergrond.

**Waarom `-v2` in de bestandsnamen staat.** Next stuurt geoptimaliseerde
beelden mee met een cache van dertig dagen, met het pad als sleutel. Vervang je
een beeld onder dezelfde naam, dan blijven browsers de oude versie tonen — ook al
staat de nieuwe allang op de server, en ook al gooi je `.next/cache/images` weg.
Een nieuwe bestandsnaam is de enige zekere manier. Vervang je hier ooit een
beeld, hernoem het dan naar `-v3`.

**Elk beeld is vooraf uitgesneden op ongeveer de vorm van zijn kader.** Dat is
de les van deze pagina: laat je de browser een 4:3-foto in een 2:1-kader
bijsnijden, dan ziet dat er samengeduwd uit, ook al ís het technisch alleen
bijgesneden. Snijd het bestand op maat, dan klopt het beeld.

**De drie beelden naast de tekst worden bijgesneden, niet geschaald.** Ze zitten
in `BeeldKolom`: een kolom die de hoogte van de tekst ernaast volgt, met
`object-cover` en een `objectPosition` per beeld. Zo is het beeld altijd precies
zo hoog als de tekst en wordt er nooit iets uitgerekt. Wil je een ander deel van
een foto zien, verander dan de `positie` op de `BeeldKolom` — niet het bestand.


---

## Hulppagina — de vier categorie-illustraties

| Bestand | Waar |
|---|---|
| `/images/hulp-link-v3.webp` | Ik kom er niet in |
| `/images/hulp-audio-v3.webp` | Mijn audio werkt niet |
| `/images/hulp-video-v3.webp` | Mijn video doet het niet |
| `/images/hulp-overig-v3.webp` | Er gaat iets anders mis |

Hertekend op 2 september 2026 uit de oude versies (zonder achtervoegsel): de gekleurde
achtergrond is wit geworden en de laptop staat nu in de donkere tint van de
categorie. Het rode verbodsteken is onveranderd gebleven — dat is het teken dat
zegt dat er iets níét werkt.

In `-v3` zijn ze bovendien bijgesneden op de tekening zelf en vierkant gemaakt,
zodat het icoon zijn vlak vult in plaats van in een zee van wit te zweven.

De tinten staan in `app/nl/technologie/hulp/data.ts` bij `KLEUREN`. Wil je een
kleur wijzigen, pas daar `randHex` en `vlakHex` aan én teken het beeld opnieuw;
de kleur van de laptop zit in het bestand, niet in de CSS.

---

## Deelbeelden (og:image) — het beeld bij een gedeelde link

Deelt iemand een link op LinkedIn, in een mail of in een chat, dan toont die
app het `og:image` van de pagina. Dat is **niet** de hero zelf, maar een
uitsnede ervan: 1200×630 **jpg** in `public/images/share/`.

- Waarom een aparte uitsnede: die verhouding (1,91:1) verwachten LinkedIn,
  Facebook en WhatsApp. Een hero is meestal veel breder of veel hoger.
- Waarom jpg en niet webp: LinkedIn gaat niet betrouwbaar om met webp en laat
  dan een leeg vlak zien.
- Ze worden **gemaakt, niet met de hand bijgehouden**:
  `node scripts/deelbeelden-maken.mjs`. Draai dat opnieuw zodra een hero,
  een event-beeld of een blogbeeld verandert.

Welke pagina welk beeld krijgt staat in `lib/deelbeelden.ts`
(`HERO_PER_ROUTE`). De event- en blogpagina's leiden het af uit hun eigen
beeld, dus die staan niet in dat register.

**Terugvalbeeld.** Pagina's zonder eigen hero (contact, offerte, nieuwsbrief,
de juridische pagina's) krijgen `app/opengraph-image.jpg` en
`app/twitter-image.jpg`. Dat is de hero van de homepage. Tot 4 september 2026
stond daar nog het voorbeeldbeeld van de Next.js-startset in — een screenshot
met programmeercode — en dát kwam omhoog bij het delen van zulke links. Beide
bestanden worden nu door hetzelfde script gemaakt, dus ze kunnen niet meer
terugvallen op iets vreemds.

### Eén beeld dat apart wordt bijgesneden

| Bestand | Waarom |
|---|---|
| `/images/organisatoren-hero-share.webp` | De hero van de organisatorenpagina is 2560×959 met donkere vulranden links en rechts. Die vielen in het deelbeeld als balken op. Dit is een uitsnede van alleen het fotovlak (1103×579) uit `organisatoren-hero-v2.webp`; hij staat nergens op de site zelf. |

---

## WebP-opruiming van 6 september 2026

`public/` woog 86 MB en dat telt bij Vercel per deployment mee. Nu 66 MB.

Bij achttien beelden bestond de `.webp` al náást het zware origineel; de code
wees alleen nog naar de `.png` of `.jpg`. Die originelen zijn weg — de `.webp`
met dezelfde naam en dezelfde afmetingen staat er nog. Verwijderd:

`format-escape.png` · `format-party.png` · `planning-1.png` · `strategy-1.png`
· `planning-3.jpg` · `format-2.png` · `planning-2.jpg` · `team-emilie.jpg` ·
`planning-4.jpg` · `hero-4.jpg` · `hero-1.jpg` · `team-group.jpg` ·
`remote-office-virtual.png` · `spatial-entree.png` · `events-bijeenkomst.jpg` ·
`logos/gemeente-utrecht.png` · `logos/roosendaal.jpg` · `logos/ing.png`

Nieuw omgezet (het origineel is weg, de `.webp` is nieuw): `hero-v2.jpg` en de
vier beelden van de storytelling-tool
(`public/tools/storytelling/themes/default{,-en}/cover.png` en `logo.png`).

Alles is terug te halen uit git. De bronadressen op de oude Squarespace-site
staan nog in `scripts/download-assets.sh`.

**Deze drie blijven met opzet jpg of png:**

| Bestand | Waarom |
|---|---|
| `vo-hero-office.jpg`, `games-hero-v5.jpg` | Posters van de hero-video's, met een fallback-keten eromheen. Besparen samen 0,24 MB — niet de moeite waard om aan te komen. |
| alles in `public/images/share/` | Zie hierboven: dat zijn allemaal deelbeelden. |

---

## De calculator in beeld (6 september 2026)

Een schermafdruk van de vergaderkosten-calculator op een projectiescherm in een
lege vergaderzaal. Eén bestand met **twee rollen**: het staat naast de
calculator-kaart op Games & Tools, én het is het deelbeeld van de tool. Vandaar
de neutrale naam "scherm".

| Bestand | Taal | Bron |
|---|---|---|
| `/images/meeting-calculator-scherm.webp` | NL | `~/Downloads/Kantoorruimte.png` (3200×1800) |
| `/images/meeting-calculator-scherm-en.webp` | EN | `~/Downloads/MM Website afbeeldingen (25).png` (3200×1800) |

Bewerking: 60 px van boven en 60 px van onder weggenomen (16:9 → 1,91:1, de
verhouding die LinkedIn wil), daarna terug naar 2400×1260. Zo hoeft
`deelbeelden-maken.mjs` alleen nog te verkleinen en snijdt het niets weg.

Ze zijn het enige paar in `lib/deelbeelden.ts` dat in `DEELBEELD_PER_TAAL`
staat en niet in `HERO_PER_ROUTE`: dat register kent alleen de route zónder
taaldeel, en hier verschilt het beeld juist per taal.

**Waar ze staan.** Op de pagina: het blok "Voor je begint" op
`/nl/games-tools` en `/en/games-tools` — tekst links, dit beeld rechts, samen
één klikbare kaart (`components/games/GamesToolsPagina.tsx`; het pad staat bij
de teksten in `app/nl/games-tools/data.ts` en `tekst-en.ts`). Dit is het enige
beeld op die pagina dat per taal verschilt.

Als deelbeeld: `/nl/meeting-calculator`, `/en/meeting-calculator` en de twee
losse tool-bestanden in
`public/tools/vergaderkosten-calculator/{,en/}index.html`.

**Weg:** `meeting-calculator-share.png`. Dat was — net als het oude
`app/opengraph-image.png` — het voorbeeldbeeld van de Next.js-startset, een
screenshot met programmeercode. Het stond als deelbeeld in beide losse
tool-bestanden. Daarmee is dat plaatje nu overal van de site verdwenen.
