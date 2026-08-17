# Wijzigingslog — MeetingMasters website

Centraal overzicht van álle ontwikkelingen aan de site: **tekst**, **beeld** en
**componenten/code**. Dit is de plek om te kijken als je wilt weten *wat er is
veranderd, wanneer, door wie, en of het al live staat.*

> Bijgehouden door: Claude Code (de bouwer).
> Laatst bijgewerkt: 2026-08-17

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
| 0 | **GitHub en Vercel zijn niet gekoppeld** — pushen start géén deploy. Laatste deploy is 8 mei 2026, met de hand vanaf de commandoregel. Koppelen in Vercel → Project → Settings → Git vóór de livegang | C | Emilie | open — blokkeert livegang |
| 1 | Bouwlijst componenten nieuwe website — nog te bepalen | C | Emilie | open |
| 2 | Engelse vertaling van de NL-pagina's | T | Copy-Claude | **uitgesteld** — pas oppakken als álle Nederlandse tekst final is (besluit 12 aug 2026) |
| 3 | Virtueel Kantoor en R@venHack hebben een verborgen `sr-only` H1 boven een zichtbare `<h2>`-hero. Eén H1, maar wel een onzichtbare — nog bepalen of de zichtbare kop de H1 moet worden | C | Emilie | open |
| 4 | `npx eslint .` loopt ook over `node_modules` (54k meldingen) — eslint-config mist een ignore | C | bouwer | open |
| 5 | Mobiele weergave gemeten op 320/375/414px: 0 problemen. Nog wel op een écht toestel bekijken | C | Emilie | open — Emilie checkt |
| 6 | Cases, Partners en Kwaliteit & vertrouwelijkheid terugzetten in `lib/navigatie.ts` zodra de pagina's gevuld zijn | T C | Emilie | geparkeerd — routes bestaan nog, alleen uit menu en footer |
| 7 | `/nl/remote-office` en `/nl/publicaties` bestonden nooit als NL-route. Nog bepalen of ze er alsnog moeten komen | C | Emilie | open |
| 8 | Wheel of Fortune geeft een JS-fout (`addEventListener` op null) in de Netlify-app zelf, niet in deze site. Oppakken in die codebase | C | bouwer | open |
| 9 | Schermafdrukken van de mobiele controle staan in `.gitignore` — werkmateriaal, opnieuw te maken met `npm run mobiel:shots` | C | bouwer | besloten |
| 10 | De site draait lokaal in **ontwikkelmodus** (`next dev -H 0.0.0.0`), bereikbaar op het netwerk-IP. Wijzigingen zijn meteen zichtbaar, zonder bouwen of herstarten (gewijzigd 15 aug 2026) | C | bouwer | let op |
| 11 | **Aanleverroute nog niet afgesproken:** hoe komen copy en visuals bij de bouwer binnen — geplakt in het gesprek of als bestand in `docs/`? Zolang dat niet vastligt, kan werk blijven liggen | T B | Emilie | open |
| 12 | Copy van `/nl/nieuwsbrief` is door de bouwer geschreven, niet door de copy-Claude. Mag alsnog langs de merkstem worden gelegd | T | Copy-Claude | open |
| 14 | ~~Drie events zonder eigen hero~~ | B | Emilie | **afgerond 15 aug 2026** — alle 20 events hebben nu een hero |
| 15 | Twee hero's zijn te licht achter de witte kop: `events-allhands-hero` (53,7%) en `events-community-hero-v2` (16,9%) | B | visuals | **geparkeerd** — goed zo voor nu (17 aug 2026) |
| 16 | Nog **1** praktijk-kaart op de placeholder: bedrijfsfeest → "Internationaal team". Bewust zo gelaten. Was 48 | B | Emilie | vrijwel af |
| 17 | De turkooizen hero-kicker ("← Event Formats") heeft op lichte beelden te weinig contrast (open-space 1,2:1, onboardingdag 1,5:1). Een donkerlaag lost dit **niet** op: turkoois zit qua helderheid in het midden, dus lichter én donkerder eromheen geeft weinig verschil. Echte oplossing is een lichtere kleur of een klein donker vlakje eronder | C B | Emilie | **bewust geparkeerd** (17 aug 2026) — houden zoals het is; tekstschaduw is de pleister |
| 18 | ~~Ongebruikte beeldbestanden opruimen~~ | B | — | **afgerond 17 aug 2026** — acht bestanden weg, alles terug te halen uit git |
| 19 | ~~Spiegelbeeld in de conferentie-hero~~ | B | visuals | **afgerond 17 aug 2026** — `-v2` ingebouwd, script bewaard |
| 20 | Praktijk-kaart 2 bij `teamuitje` noemt een escape room in de tekst, terwijl het escape-beeld op kaart 3 staat. Beeld wisselen of tekst aanpassen | T B | Emilie | open |
| 21 | Tekst bij `bedrijfsfeest` kaart 3 begint met "Voor een grote groep", terwijl het label nu MKB is | T | Copy-Claude | open |
| 22 | **Briefing-tool** onder "Voor je begint" — nog te bedenken en te bouwen. Hoort bij de calculator, in hetzelfde blok | C | Emilie | open — nog **niet** zichtbaar op de site |
| 23 | **Duidelijkere landingsplek voor "Check je format"**, aansluitend op "Voor je begint" | C T | Emilie | open — nog **niet** zichtbaar op de site |
| 24 | **Tools mogelijk een eigen plek in het menu.** Besluit 17 aug 2026: pas doen zodra er méér tools zijn; nu blijft het onder Games & Tools | C | Emilie | geparkeerd |
| 25 | ~~Blogdatum "Niet hetzelfde. Wel goed."~~ | T | Emilie | **afgerond 17 aug 2026** — 13 juli, en het overzicht sorteert nu op datum |
| 26 | ~~Eigen visual voor "Terug naar kantoor"~~ | B | Emilie | **afgerond 17 aug 2026** |
| 27 | **Doorverwijzingen voor oude bloglinks.** Live staat op `/nl/blogs/lange-slug`, hier op `/nl/blog/korte-slug`. Bij livegang breekt elke gedeelde link. Volledige lijst oude URL's nodig | C | bouwer | open — vóór livegang |
| 28 | **Vergadermacht op de downloadspagina.** Loopt via een HubSpot-landingspagina met formulier; de URL daarvan ontbreekt nog. Ook: welke publicaties horen er verder in? | T | Emilie | open — URL nodig |
| 29 | **Boekingstool van HubSpot inbouwen.** Advies: primair op de rondleiding/demo, als tweede optie onder het formulier bij "Plan een gesprek", en níét op Contact. Boekingslink nog nodig | C | Emilie | open — link nodig |
| 30 | **Downloads staat nu ook in de hoofdnavigatie** (groep diensten). Daarmee heeft de balk zeven items. Alternatief: alleen in de footerkolom Diensten laten staan | C | Emilie | te beslissen |
| 13 | De Engelse pagina's gebruiken de **Nederlandse** navigatie: `app/en/layout.tsx` laadt dezelfde Navbar en Footer, en die lezen `NAV_ITEMS` uit `lib/navigatie.ts` (allemaal `/nl/`-links). Bij de Engelse ronde hier een EN-variant naast zetten. Ook de NL/EN-schakelaar in de balk wijst nu twee keer naar `/nl/home` | C | bouwer | open — hoort bij punt 2 |

---

## 5. Log

### 2026-08-17 — Blogcorrecties en een downloadspagina

- **T B** — **"Niet hetzelfde. Wel goed." staat nu op 13 juli 2026**, zoals live.
  Het blogoverzicht sorteert voortaan op datum in plaats van op volgorde in het
  bestand; anders staat een post zo op de verkeerde plek.
- **B** — **Eigen visual voor "Terug naar kantoor"** — het geleende beeld van
  "Heen en weer" is vervangen.
- **C T** — **Nieuwe downloadspagina** `/nl/downloads`, opgenomen in de groep
  diensten (dus in het menu én in de footerkolom). Twee groepen: publicaties, en
  handleidingen voor deelnemers. De laatste twee stonden al in `public/downloads`
  maar waren alleen bereikbaar vanaf de hulppagina.


### 2026-08-17 — Blog bijgewerkt en de vergaderkosten-calculator ingebouwd

- **T** — **Nieuwste blogartikel overgenomen** van de live site: "Terug naar
  kantoor: het antwoord op de verkeerde vraag" (14 augustus). Dat was het enige
  dat hier nog miste. Beeld is voorlopig geleend van "Heen en weer".
- **C** — **Vergaderkosten-calculator ingebouwd** op `/nl/meeting-calculator`,
  het adres waar de canonical in het bestand zelf al naar wees. De tool staat als
  losse app in `public/tools/vergaderkosten-calculator/` en wordt met `ToolKader`
  ingesloten, net als bingo en storytelling.
- **C** — **Nieuw blok "Voor je begint"** op Games & Tools, met de calculator erin.
  Bewust géén vijfde tegel bij de bestaande tools: die gebruik je tíjdens een
  bijeenkomst, de calculator ervóór. Ander moment, andere gebruiker. In dat blok
  komen later de briefing-tool en "Check je format" erbij.
- **T** — Eigen FAQ op de calculatorpagina, met FAQPage-schema. Eerste vraag die
  hij wegneemt: nee, dit is geen offerte — het zegt niets over wat wij kosten.


### 2026-08-17 — Conferentie-hero rechtgezet en opgeruimd

- **B** — **Het scherm in de conferentie-hero is niet langer spiegelbeeld.** Alleen
  het beeldscherm is omgedraaid, binnen zijn eigen perspectief, zodat de
  schermrand exact op zijn plek blijft. Het hele beeld omdraaien zou de persoon
  naar de andere kant verplaatsen en de lichte kant precies achter de kop zetten.
  Nieuw bestand `events-conferentie-hero-v2.webp`; de techniek staat bewaard in
  `scripts/scherm-spiegelen.mjs` voor als dit nog eens voorkomt.
- **B** — **Acht ongebruikte beeldbestanden verwijderd**, waaronder de twee
  eerdere hulp-hero's die door de video zijn vervangen. Gecontroleerd dat er geen
  enkele verwijzing meer naar wees; alle 187 beeldpaden in de code wijzen naar een
  bestaand bestand. Alles blijft terug te halen uit git.


### 2026-08-17 — Tech hulp en Meeting Platforms afgerond

- **B C** — **Hulppagina opnieuw opgebouwd.** Hero is een video (geluidloos,
  herhaalt zichzelf, 983 kB mp4 en 691 kB webm met poster). Daaronder vier
  probleemblokken met een kwart beeld, in de kleuren die letterlijk uit de
  illustraties komen: geel, aqua, pistache en rose.
- **T** — **Alle 74 hulpvragen staan nu in genummerde stappen**, ook de
  tool-specifieke. Vulzinnen als "Geen paniek" zijn eruit, net als de
  escalatieregel onder elk antwoord. Vragen die eigenlijk een conclusie waren
  ("de browser vroeg toestemming en ik klikte op blokkeren") zijn opgegaan in de
  stappen van de vraag waar iemand ze tegenkomt.
- **C** — **Tool-antwoorden vervangen de algemene** in plaats van ze aan te
  vullen. Wie een tool koos, kreeg allebei de sets en moest zelf ontdubbelen.
- **C** — **Zoeken gerepareerd.** Het antwoordveld was leeg geraakt door de
  omzetting naar stappen, en er werd op de hele zin gezocht in plaats van op
  losse woorden. Van 48 realistische zoektermen leverden er twaalf niets op; nu
  nog één. Drie ontbrekende onderwerpen toegevoegd: opnames, hand opsteken en
  ondertiteling.
- **T** — **FAQ's op de hulppagina** in drie groepen: algemene techniek,
  instellingen op je eigen apparaat, en hulp tijdens de bijeenkomst — met het
  verschil tussen een tech host en een Meeting Master.
- **T C** — **Instellingen voor organisaties**: per platform wat een IT-afdeling
  nodig heeft, als uitklapper. Alle vijf de links zijn nagelopen op inhoud, niet
  alleen op of ze laden. Alles staat op de documentatie van de leverancier zelf.
- **B T C** — **Meeting Platforms**: eigen hero (witranden van 248 en 227px eerst
  weggesneden), vier selecteerbare platformkaarten met SpatialChat standaard aan,
  en een nieuwe FAQ in de vorm van de event-pagina's — zes vragen plus zes achter
  "Meer antwoorden?", met FAQPage-schema. Onderwerpen gekozen op wat online het
  meest gezocht wordt.
- **C** — **Menu**: "Tech hulp" landt op de hulppagina, met daaronder Meeting
  Platforms en SpatialChat. **Footer**: de losse nieuwsbriefsectie is weg;
  "Nieuwsbrief (aanmelden)" staat nu in de kolom Organisatie.
- **B** — **Negen tool-logo's** verwerkt: doorzichtige achtergrond via een vulling
  vanaf de rand (zodat wit ín een logo blijft staan) en geschaald op inktoppervlak,
  anders oogt een compact woordmerk als Zoom veel groter dan streamAlive.
  Script: `scripts/logo-normaliseren.mjs`.


### 2026-08-16 — Technologie-sectie herbouwd

Aanleiding: er landden twee verschillende bezoekers op dezelfde pagina's — iemand
die rustig een platform kiest, en een deelnemer die twee minuten voor aanvang
vastloopt. Die tweede kreeg nergens voorrang; de helpdesk had precies één
inkomende link en stond niet in het menu. Besluiten en archief staan in
`docs/technologie-herinrichting.md`.

- **C** — **Nieuwe hulppagina** `/nl/technologie/hulp` — "Directe hulp bij online
  meetings". Werkt in de volgorde waarin iemand in stress denkt: eerst wát er
  misgaat, dan pas in welke tool. Met een knop "Dat weet ik niet" die uitlegt hoe
  je de tool aan de link in je uitnodiging herkent, én je gewoon door laat gaan
  met de algemene antwoorden. Nooit doodlopend.
- **T** — **Het telefoonnummer is uit alle antwoorden gehaald** (zestien stuks).
  Telefonische support wordt niet aan elke klant verkocht, dus de antwoorden
  verwijzen nu naar de contactpersoon uit de uitnodiging.
- **T** — **Disclaimer op de hulppagina**: opgesteld uit onze praktijk, en kijk
  voor de nieuwste versie ook bij de toolleverancier zelf.
- **C B** — **Nieuwe tools-pagina** `/nl/technologie/tools`. Onderscheid tussen de
  vier **platforms** (ruime beschrijving, inclusief waar ze ophouden) en de vijf
  **tools** die we ermee combineren (kort). Vooral bedoeld voor vindbaarheid: wie
  op "Teams" of "Mentimeter" zoekt, kan zo bij MeetingMasters uitkomen.
- **B** — **Negen tool-logo's** verwerkt naar `public/images/logos/tools/`.
  Doorzichtige achtergrond via een vulling vanaf de rand, zodat wit *ín* een logo
  blijft staan (het vinkje van Vote Company, de letters van Zoom Events).
  Geschaald op inktoppervlak in plaats van op het omhullende kader — anders oogt
  een compact woordmerk als Zoom veel groter dan een breed logo als streamAlive.
  Script: `scripts/logo-normaliseren.mjs`.
- **C** — **Vijf routes opgeheven** via doorverwijzing: `faq` en `helpdesk` → hulp,
  `platforms` → tools, `hoe-het-werkt` → spatialchat, `support` → de hub. De
  bestanden staan er nog; doorverwijzingen gaan vóór op de routes, dus er is
  niets weg en je kunt terug.
- **C** — **Menu**: "Technologie" heet nu **"Tech hulp"** en landt meteen op de
  hulppagina. Daaronder: directe hulp, waar wij mee werken, SpatialChat, platform
  kiezen.
  Gecontroleerd: `tsc --noEmit` en `npm run build` schoon, alle routes 200 of 308,
  geen interne links meer naar de opgeheven pagina's.

### 2026-08-15 — Event-beelden: de hele reeks rond

Vandaag zijn alle twintig event-pagina's beeld voor beeld nagelopen. De stand
vooraf: 4 events met een eigen hero, 12 van de 60 praktijk-kaarten gevuld. Nu:
**20 hero's en 59 kaarten**. De ene overgebleven kaart (bedrijfsfeest →
"Internationaal team") staat bewust nog op de placeholder.

- **B** — **Alle ontbrekende hero's en praktijk-kaarten ingebouwd.** Bronnen uit
  `Downloads/`, `Desktop/` en OneDrive → WebP kwaliteit 82; hero's 1600×900,
  kaarten 1200×592. Bronnen kleiner dan 1200px zijn op ware grootte gesneden in
  plaats van opgeblazen.
- **B** — **Nieuwe hero voor `bewonersparticipatie`** (`-v3`, luchtfoto van de
  wijk op het iMac-scherm). Dat beeld is achter de kop veel rustiger dan het
  vorige — 1,7% tegen 8,5% te licht — dus de zwaardere donkerlaag kon eraf.
  De oude hero is hergebruikt als hero voor `klankbordgroep`, opnieuw uit het
  origineel gesneden onder een eigen naam.
- **B** — **`alv`-hero omlaag** (`objectPosition: center 8%`) zodat de "Vote
  now"-knop in beeld blijft.
- **B** — **Randen weggesneden bij vijf beelden** (wit, geel en zwart; tot 297px)
  en de CoP24-regiekamer opgelicht (+22%, gamma 1,15).
- **C B** — **Alt-teksten voor elk beeld.** Nieuwe velden `heroAlt` en
  `cases[].imgAlt`: 20 hero-beschrijvingen en 60 kaartbeschrijvingen, elk in de
  context van het event. De event-iconen zijn decoratief en kregen bewust
  `alt=""` — hun titel staat er als tekst naast, en dubbel voorlezen helpt
  niemand.
- **C** — **Donkerlaag over de hero instelbaar** via `heroOverlay`, drie standen.
  Negen hero's staan hoger dan standaard omdat de witte kop er anders overheen
  liep; de rest blijft op de lichtste stand.
- **C** — **Tekstschaduw op de hero-kicker** ("← Event Formats"), het enige
  hero-element dat er geen had.
- **C** — **`scripts/hero-shots.mjs`** toegevoegd: opnames van de hero-band op
  1440px, met `--alle` en `--sectie "<tekst>"`.
- **C** — De lokale site draait weer in **ontwikkelmodus**, zodat wijzigingen
  meteen zichtbaar zijn zonder bouwen en herstarten.

Volledig overzicht per event — welk beeld waar staat, met welke donkerlaag en
uitsnede — in `docs/website-visuals.md`.

### 2026-08-15 — Online ALV (pagina voor pagina)

- **B** — **Hero omlaag geschoven** (`objectPosition: center 8%`), zodat de
  "Vote now"-knop bovenin het laptopscherm in beeld blijft; die viel er eerst
  helemaal boven af. De tekstzone werd er ook rustiger van: van 0,35 naar 0,29
  gemiddelde helderheid, 0% te licht.
- **B** — **Twee praktijk-kaarten gevuld.** Europese branchevereniging →
  `events-alv-praktijk-branchevereniging.webp` (`2.png`, zwarte balk van 297px
  links weggesneden). Investeringsmaatschappij →
  `events-alv-praktijk-gewogen-stemmen.webp` (`votecompany screen.jpg`).
  Stichting → `events-alv-praktijk-jaarstukken.webp`
  (`Laptop in spatial chat meeting.png`). **Alle drie de ALV-kaarten hebben nu
  eigen beeld**; deze pagina staat niet meer op placeholders.
- **C** — `scripts/hero-shots.mjs` kreeg `--sectie "<tekst>"`, om ook een
  sectie verderop de pagina vast te leggen.

### 2026-08-15

- **B C** — **Dertien event-hero's ingebouwd.** `townhall`, `alv`,
  `teambuilding`, `training-workshop`, `brainstormen`, `onboardingdag`,
  `bedrijfsfeest`, `teamuitje`, `bewonersparticipatie`, `world-cafe`,
  `webinar`, `open-space` en `netwerkevent` hadden geen eigen hero en vielen
  terug op de placeholder `events-bijeenkomst.webp`. Bronnen uit `Downloads/`
  (3200×1800, webinar 1672×941) → WebP 1600×900, kwaliteit 82, 53–146 kB.
  Nu heeft 17 van de 20 events een eigen hero.
- **C** — **Donkerlaag over de hero instelbaar gemaakt.** Nieuw veld
  `heroOverlay` op `EventData`, met drie standen (`HERO_DIM_LICHT` /
  `MEDIUM` / `STERK`) bovenin `app/nl/events/[slug]/page.tsx`. Standaard blijft
  licht; zeven hero's staan hoger omdat de witte kop daar anders wegviel.
  `alv` op sterk (wit rapport pal achter de kop), zes op medium. Onderbouwing en
  meetmethode staan in het visuals-register.
- **B** — **Witranden weggesneden bij drie aangeleverde beelden**: `teambuilding`
  (248px links én rechts), `netwerkevent` (15px rechts),
  `bewonersparticipatie` (44px onder). Die kwamen als grijze balken in de hero.
  Opnieuw uit het origineel gesneden en als `-v2` opgeslagen; de eerste versies
  zijn ongebruikt en mogen weg.
- **C** — **Tekstschaduw op de hero-kicker** ("← Event Formats"). Dat was het
  enige hero-element zónder schaduw, terwijl de kop en de subkop die wel hebben.
  Op lichte beelden viel het turkoois helemaal weg. Raakt alle 20 event-pagina's.
- **C** — `scripts/hero-shots.mjs` toegevoegd: maakt opnames van de hero-band op
  1440px in `schermafdrukken/hero/`, tegen het netwerk-IP.
  Gecontroleerd: `tsc --noEmit` en `npm run build` schoon, alle 20 hero's bekeken.

### 2026-08-12

- **T C** — **Home: de verborgen tweede H1 verwijderd.** De pagina had er twee:
  een onzichtbare `sr-only`-regel ("MeetingMasters — online events en virtual
  office specialist op SpatialChat") én de zichtbare hero-kop. Twee
  concurrerende hoofdkoppen verdelen het signaal naar Google, en een
  schermlezer las er twee achter elkaar voor. De onzichtbare is weg; de
  hero-kop is nu de enige H1. Er verandert niets aan de weergave. De
  zoekwoorden blijven behouden via de paginatitel, de meta-omschrijving en de
  drie kaarten onder de hero. Gecontroleerd: één `<h1>` in de uitgeleverde
  HTML, `tsc --noEmit` en `npm run build` schoon.

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
- **C** — **Mobiele weergave: menu en hero's gerepareerd.** Twee bugs, dezelfde
  oorzaak — vaste hoogtes die op een telefoon niet meeschalen.
  1. *Menu.* Het mobiele paneel zat in de `sticky top-0` header. Zodra je een
     submenu openklapte werd die header hoger dan het scherm; sticky pint de
     bovenkant vast, dus alles onder de schermrand — inclusief "Plan een
     gesprek" — was onbereikbaar. Paneel is nu `fixed` onder de balk, scrollt
     zelf, en de achtergrond zet vast zolang het open staat.
  2. *Hero's.* De tekst stond `absolute` in een container met een vaste hoogte
     (300–360px op mobiel), terwijl de H1 daar in vier regels breekt. Het
     overschot liep bovenlangs het beeld uit: afgeknipt bij pagina's met
     `overflow-hidden`, achter de navbar bij de rest. De container groeit nu
     mee met de tekst op smalle schermen; koppen zijn kleiner op mobiel.
  Aangepast op 12 pagina's: NL home, about, blog, events + event-detail,
  games-tools + ravenhack, virtual-office + zaaltje/huren/kantoor-cultuur,
  EN home. Alle wijzigingen zitten achter `md:`-breakpoints — vanaf 768px is er
  niets veranderd, de desktopweergave is ongemoeid.
  Gecontroleerd met `tsc --noEmit` (schoon) en alle 12 pagina's opgehaald bij de
  dev-server (200). *Gecommit (`eaa8cd3`).*
- **C** — **Menu reageerde niet op mobiel: het lag aan de cookiebanner.** De
  banner is `fixed bottom-0` met een *doorzichtige* wrapper eromheen. Op desktop
  is dat één lage balk, maar op een smal scherm stapelt de inhoud en wordt de
  banner ~500px hoog — hoger dan de zichtbare schermhoogte van een iPhone SE in
  Safari toelaat. Die onzichtbare wrapper liep zo door tot achter de navbar en
  ving daar de tikken op het hamburgermenu op. Opgelost met
  `pointer-events-none` op de wrapper en `pointer-events-auto` op de kaart; de
  kaart is bovendien begrensd op `max-h-[70vh]` met eigen scroll.
- **C** — Z-index-lagen opnieuw geordend, nodig door het bovenstaande: navbar
  van `z-50` naar `z-[60]` (stond gelijk met de cookiebanner, die later in de
  DOM komt en er daardoor overheen viel). De volledig-scherm-modus van de tools
  (`ToolKader`, `InspiratieKaarten`) mee omhoog naar `z-[70]`, anders zou de
  navbar over een tool in volledig scherm heen komen — op iOS valt die altijd
  terug op deze modus, want Safari staat `requestFullscreen` daar niet toe.
- **C** — Event-formats: de bollen waren `w-40 h-40` (160px vast) in een kolom
  van ~141px op een iPhone SE, waardoor ze elkaar overlapten. Nu
  `w-full aspect-square max-w-[176px]`: meeschalend, en vanaf ±828px exact even
  groot als voorheen.
- **C** — `TechFaq`: de sticky zoek-/filterbalk stond op `top-0` en schoof
  daardoor achter de navbar. Nu `top-[88px]`, en de ankers van de categorieën
  hebben genoeg `scroll-mt` om onder beide balken vandaan te blijven.
- **C** — Koppen kleiner op smalle schermen: 33 sectiekoppen van `text-3xl` naar
  `text-2xl sm:text-3xl` en 9 paginakoppen van `text-4xl` naar
  `text-3xl sm:text-4xl`. Alleen onder 640px; desktop ongewijzigd.
- **C** — Doorgelicht en in orde bevonden (geen wijziging nodig): geen enkele
  vaste breedte boven 320px, de vergelijkingstabel op Technologie heeft al
  `overflow-x-auto`, de 3×3-rasters op Technologie/SpatialChat zijn kleine
  decoratieve blokjes, footer en carrousels wikkelen netjes, en er staan geen
  lange onbreekbare teksten (e-mail, URL's) in de opmaak.
  Controle over het geheel: `tsc --noEmit` schoon en alle **72** live NL-pagina's
  opgehaald bij de dev-server — allemaal 200. *Gecommit (`eaa8cd3`).*
- **C** — **Correctie op het bovenstaande: die 200-statussen bewezen niets.**
  Next geeft in dev een 200 mét foutoverlay, dus een pagina kan "goed" lijken
  terwijl er een runtime-fout staat. Bovendien meet een overflow-check op
  schermbreedte de fout van de event-bollen niet: die vielen buiten hun *kolom*,
  niet buiten het scherm. Op verzoek van Emilie daarom overgestapt op echt meten
  en zelf kijken.
- **C** — **Mobiele controle ingericht** (`playwright-core` als devDependency;
  stuurt de al geïnstalleerde Chrome aan, geen eigen browser-download):
  - `npm run mobiel` — 72 routes × 320/375/414px, meldt buiten beeld, buiten
    eigen kader én overlappende broertjes, met selector en aantal pixels.
  - `npm run mobiel:menu` — bedienbaarheid van het menu op drie schermen, mét de
    cookiebanner in beeld; controleert met `elementFromPoint` of de hamburger
    echt het bovenste element is.
  - `npm run mobiel:shots` — leesbare schermvullende opnames in
    `docs/mobiel/schermen/`.
  De detector is getoetst door de bollen-fout tijdelijk terug te zetten: die
  werd correct gemeld als "15px buiten eigen kader".
- **C** — Wat het meten alsnog aan het licht bracht, en is opgelost:
  1. *Technologie* — de 3×3 vakjes waren `w-7 h-7` (28px vast) in `1fr`-kolommen
     die op smalle schermen smaller worden; ze liepen 21px over elkaar heen.
     Nu een vast kader van 92px (gelijk aan de rondjes ernaast) met vakjes die
     hun kolom vullen. Onder 360px staan de twee beelden onder elkaar: daar is
     206px ruimte voor 236px inhoud.
  2. *Contact* — het e-mailadres stak 15px buiten zijn regel op 320px. Een
     flex-item krimpt niet onder zijn min-content, en `break-words` verandert
     die niet; opgelost met `min-w-0` + `[overflow-wrap:anywhere]`.
  3. *Technologie → Platforms* — het gele "aanbevolen"-label stak 7px uit de
     titelregel. Regel mag nu wikkelen.
- **C** — **Leesbaarheid hero's op mobiel.** Op de opnames viel op dat de witte
  tekst wegviel tegen lichte beelden (vooral Events): de bestaande verlopen zijn
  gemaakt voor de desktopcompositie, terwijl de tekst op mobiel nu lager en over
  een ander deel van het beeld staat. Toegevoegd: een zachte sluier van onderaf
  (`bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden`) op
  alle 12 hero's. Bovenin blijft het beeld onaangetast en boven 768px verandert
  er niets.
  Eindstand: `tsc --noEmit` schoon, **72 routes × 3 breedtes = 0 problemen**, en
  de menutest slaagt op 320/375/390px. *Gecommit (`eaa8cd3`).*
- **C** — **De échte oorzaak van het niet-werkende menu: `allowedDevOrigins`.**
  Alle bovenstaande reparaties waren op zichzelf terecht, maar ze losten
  Emilies klacht niet op — want de oorzaak lag niet in de opmaak. Next 16
  weigert in ontwikkelmodus verzoeken naar `/_next/*` die een `Origin`-kop van
  een ander adres meesturen. Wie de site op zijn telefoon bekijkt via het
  netwerk-IP (`http://192.168.1.44:3000`) kreeg op **elk JavaScript-bestand een
  403**. De pagina laadde en zag er goed uit — server-side HTML en CSS komen wel
  door — maar er draaide niets: geen menu, geen cookiebanner, geen zoekfilters.
  Opgelost door in `next.config.ts` de eigen netwerkadressen toe te staan. Die
  worden uitgelezen met `os.networkInterfaces()`, dus er staat geen IP hard in
  de code; verandert het adres, dan blijft het werken. Raakt alleen `next dev`.
  Aangetoond: `curl` met `Origin`-kop gaf 403 en na de fix 200, en de menutest
  tegen het netwerk-IP faalde eerst op precies Emilies twee symptomen en slaagt
  nu volledig.
- **C** — Les uit het bovenstaande, verwerkt in de scripts: mijn tests draaiden
  tegen `localhost` en slaagden daarom allemaal, terwijl de site op het adres
  dat Emilie gebruikte stukging. De drie `mobiel`-scripts testen nu standaard
  tegen het netwerk-IP (`scripts/mobiel-basis.mjs`); met `BASIS=` is dat te
  overrulen. **Test op het adres waarop de ander kijkt.**
- **C** — **Consolemeldingen opgeruimd** (het rode "issue"-bolletje van Next).
  Nieuw script `npm run mobiel:console` leest fouten, waarschuwingen en
  mislukte verzoeken uit over alle routes. Stond op 12 meldingen, nu op 0 uit
  eigen code:
  - *Footer* — het logo was opgegeven als 140×36, terwijl het bestand 227×83 is
    (verhouding 3,89 tegenover 2,74). Verbeterd naar de echte afmetingen.
  - *Events* — de format-iconen gebruiken `fill` zonder `sizes`, waardoor de
    browser onnodig grote varianten laadt. `sizes` toegevoegd.
  - *Escape rooms* en *Team* — het grootste beeld boven de vouw laadde lui, wat
    de laadtijd meetbaar vertraagt. `priority` + `sizes` toegevoegd.
  - *Wheel of Fortune* — `TypeError: Cannot read properties of null (reading
    'addEventListener')`. **Zit niet in deze site:** de tool draait in een
    iframe op `mm-wheel-of-fortune.netlify.app` en de fout treedt ook op als je
    die app los opent. Hoort thuis in die aparte codebase.
- **C** — **Hydration mismatch op iPhone: `format-detection` uitgezet.** Op
  Emilies telefoon bleef één Console Error staan: *"A tree hydrated but some
  attributes of the server rendered HTML didn't match the client properties."*
  Niet te reproduceren in headless Chrome, dus omgevingsgebonden. iOS maakt uit
  zichzelf links van telefoonnummers, adressen en datums in gewone tekst, nog
  vóórdat React de pagina overneemt — en dan wijkt de DOM af van de
  server-HTML. Alle vier de ingrediënten staan op de homepagina (twee
  telefoonnummers, het adres, de postcode en "juni 2026" in de footer) en
  `format-detection` was nergens ingesteld. Nu in `app/layout.tsx` via de
  Metadata-API: `telephone=no, date=no, address=no, email=no`. Onze eigen
  `tel:`- en `mailto:`-links staan expliciet in de code en blijven werken —
  gecontroleerd.
  Vooraf uitgesloten dat het aan eigen code lag: al het `window`/`navigator`-
  gebruik zit in `useEffect` of achter een `typeof window`-guard, `LastUpdated`
  is een pure tekstcomponent, en er staat nergens een `suppressHydrationWarning`
  die iets zou maskeren.
  **Nog te bevestigen door Emilie** — dit is de enige reparatie in deze reeks
  die ik niet zelf heb kunnen natesten.

- **C** — **Footer opgeschoond en gelijkgetrokken met het menu.**
  1. *Nieuwsbrief.* Het HubSpot-formulier stond rauw ingebed in de donkere
     footer — de lichte standaardstijl van HubSpot laat zich daar niet temmen.
     Het formulier verhuisd naar een eigen pagina `/nl/nieuwsbrief` (opgebouwd
     met het bestaande `FormulierPagina`-sjabloon, net als demo/offerte/boeken).
     In de footer staat nu een uitnodigende regel met de knop "Schrijf je in".
  2. *Synchroon met het menu.* Menu en footer hadden elk hun eigen lijst en
     waren uit elkaar gelopen. Beide lezen nu uit `lib/navigatie.ts`. Een pagina
     toevoegen of verbergen doe je nog op één plek.
  3. *Verwijderd uit de footer:* Cases, Partners en Kwaliteit & vertrouwelijk-
     heid (bewust nog niet gevuld) plus twee dode links — `/nl/remote-office` en
     `/nl/publicaties` bestaan niet als NL-route. De footer verwijst nu naar
     Events, Virtueel Kantoor, Games en Technologie (diensten) en Over ons,
     Blog, Contact, Plan een gesprek, Nieuwsbrief (organisatie).
  `tsc --noEmit` schoon, `next build` schoon, `/nl/nieuwsbrief` staat in de
  routelijst. *Gecommit (`eaa8cd3`).*
- **T** — Nieuwe copy geschreven voor `/nl/nieuwsbrief` (intro + formulierkop),
  in je-vorm, conform merkstem. Mag door de copy-Claude worden nagelopen.

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
