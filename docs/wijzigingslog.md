# Wijzigingslog — MeetingMasters website

Centraal overzicht van álle ontwikkelingen aan de site: **tekst**, **beeld** en
**componenten/code**. Dit is de plek om te kijken als je wilt weten *wat er is
veranderd, wanneer, door wie, en of het al live staat.*

> Bijgehouden door: Claude Code (de bouwer).
> Laatst bijgewerkt: 2026-08-26

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
| 2 | ~~Engelse vertaling van de NL-pagina's~~ | T | bouwer | **afgerond 18 aug 2026** — 59 Engelse routes, alle vier de losse tools tweetalig. Privacy en cookies nog juridisch laten nakijken. Zie `docs/vertaling-voortgang.md` |
| 3 | Virtueel Kantoor en R@venHack hebben een verborgen `sr-only` H1 boven een zichtbare `<h2>`-hero. Eén H1, maar wel een onzichtbare — nog bepalen of de zichtbare kop de H1 moet worden | C | Emilie | open |
| 4 | `npx eslint .` loopt ook over `node_modules` (54k meldingen) — eslint-config mist een ignore | C | bouwer | open |
| 5 | Mobiele weergave gemeten op 320/375/414px: 0 problemen. Nog wel op een écht toestel bekijken | C | Emilie | open — Emilie checkt |
| 6 | Cases, Partners en Kwaliteit & vertrouwelijkheid terugzetten in `lib/navigatie.ts` zodra de pagina's gevuld zijn | T C | Emilie | geparkeerd — routes bestaan nog, alleen uit menu en footer |
| 7 | `/nl/remote-office` en `/nl/publicaties` bestonden nooit als NL-route. Nog bepalen of ze er alsnog moeten komen | C | Emilie | open |
| 32 | **Privacy statement en cookieverklaring in het Engels juridisch laten nakijken** vóór livegang. Ze staan er nu wel, in een eigen bestand per taal | T | Emilie | open — vóór livegang |
| 33 | **Bingo en de vergaderkosten-calculator zijn kopieën**, geen gedeelde bestanden: `public/tools/bingo/en/` en `public/tools/vergaderkosten-calculator/en/`. Verandert de rekenlogica of de spelregels, dan in beide aanpassen | C | bouwer | let op |
| 34 | **Blog-hero bevat het Nederlandse menu.** Op de Engelse blog staat nu het Nederlandse beeld; nieuw beeld maken | B | visuals | geparkeerd — besluit Emilie 17 aug 2026 |
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
| 28 | ~~Vergadermacht op de downloadspagina~~ | T B | Emilie | **afgerond 17 aug 2026** — formulier ingesloten, beeld van het boek erbij |
| 31 | **Keuzekompas Meeting Mix** stond op de oude site achter een e-mailaanmelding; het bestand zelf is niet publiek. Terughalen? Dan is het pdf plus formulier | T | Emilie | open |
| 29 | ~~Boekingstool van HubSpot inbouwen~~ | C | Emilie | **afgerond 17 aug 2026** — agenda op de rondleiding, knop bij Plan een gesprek, niet op Contact |
| 30 | ~~Downloads in de hoofdnavigatie~~ | C | Emilie | **besloten 17 aug 2026** — alleen in de footer, via `alleenFooter` op het menu-item |
| 13 | ~~Engelse navigatie en taalschakelaar~~ | C | bouwer | **afgerond 18 aug 2026** — menu, footer en schakelaar lezen `lib/talen.ts`; elke pagina landt op zijn eigen tegenhanger |

---

## 5. Log

### 2026-08-17 — Downloads met voorbladen, en de ALV-checklist bij het event

- **B** — **Voorbladen bij het manifest en de ALV-checklist.** Gemaakt met
  `qlmanage` (Quick Look, zit op elke Mac) uit de pdf zelf, dus het is echt de
  eerste pagina. Staand kader: een liggend kader op een A4 sneed de verticale
  MANIFEST-tekst af.
- **C** — **Downloadblok in het event-sjabloon.** Optioneel veld `download` op
  `EventData`; nu gevuld bij `alv`, met de checklist vlak vóór de FAQ. Wie tot
  daar leest is serieus bezig en heeft meer aan een checklist dan aan nog een
  alinea. Andere events kunnen hetzelfde krijgen.
- **T** — Zin onder Vergadermacht vervangen: nu de vraag hoe je de
  verantwoordelijkheid belegt voor de plek waar strategie en beleid tot leven
  komen.


### 2026-08-17 — Boekingsagenda, downloads opgeschoond en het Keuzekompas erbij

- **C** — **Boekingsagenda ingebouwd.** Nieuw component `HubSpotAgenda`, met een
  gewone link als terugval: laadt het script niet, dan ziet iemand anders een leeg
  vlak en denkt hij dat het stuk is. Agenda op de rondleiding, knop bij Plan een
  gesprek, op Contact bewust niet.
- **T** — **Vier checklists opgehaald van de oude site.** Drie daarvan zijn op
  verzoek meteen weer van de pagina gehaald: te gedateerd, worden aangescherpt.
  Alleen de ALV-checklist blijft staan. Ze staan in git, dus terughalen kan.
- **T B** — **Keuzekompas Meeting Mix** toegevoegd, met het filmpje erbij (14
  seconden, lokaal gehost met bediening — er zit gesproken tekst op, dus niets
  start vanzelf). Ook een link naar de YouTube-versie.
- **T** — **Datum bij elke download.** Een deel is van 2022 en dat lees je eruit;
  beter dat de lezer dat vooraf ziet dan gaandeweg ontdekt. Bij het Keuzekompas
  staat het er ook in woorden bij.
- **B** — Eigen hero voor de downloadspagina, en het boek in beeld bij
  Vergadermacht met de ondertitel van de publicatie.


### 2026-08-17 — Boekingsagenda en de downloads van de oude site

- **C** — **Boekingsagenda ingebouwd.** Nieuw component `HubSpotAgenda`, met een
  gewone link als terugval: laadt het script niet, dan ziet iemand anders een leeg
  vlak en denkt hij dat het stuk is. Op de rondleiding staat de agenda nu wáár
  eerst het formulier stond. Bij Plan een gesprek staat hij eronder als tweede
  route; op Contact bewust niet.
- **T** — **Vier checklists opgehaald van de oude site** — online vergaderen,
  doelgericht vergaderen, online samenwerken en online ALV. Die stonden daar als
  losse pdf's en waren nergens anders bewaard.
- **B** — **Beeld bij Vergadermacht** (het boek in handen) met de ondertitel van
  de publicatie, en een **eigen hero** voor de downloadspagina.


### 2026-08-17 — Downloads afgerond

- **C** — **Downloads staat alleen nog in de footer.** Nieuw veld `alleenFooter`
  op een menu-item: de pagina hoort erbij, maar hoeft de balk niet langer te
  maken. Bruikbaar voor volgende pagina's met dezelfde vraag.
- **C T** — **Vergadermacht op de downloadspagina**, met het HubSpot-formulier
  ingesloten in plaats van een doorverwijzing naar de landingspagina. Zelfde
  formulier, zelfde leads, maar in de eigen stijl en zonder sprong naar
  hs-sites. Het formulier-ID is uit de landingspagina gehaald en staat nu in
  `lib/hubspot-forms.ts`.


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

## 17 augustus 2026 — werkbrief afgewerkt

Punten uit `docs/go-live-werkbrief.html` waar Emilie akkoord op gaf. Van de 24
zijn er nu 21 klaar; de drie die overblijven vragen een besluit of een handeling
van haar. Zie `docs/open-punten.html`.

**Privacy**
- Lettertypes van de vergaderkosten-calculator (Rajdhani + Open Sans) en de
  storytelling-tool (Rajdhani) staan nu in het bestand zelf. Geen enkel verzoek
  naar Google Fonts meer.
- De storytelling-tool laadde per thema een ander lettertype bij Google. Die
  aanroep is eruit; thema's vallen terug op Rajdhani. **Gevolg om te melden aan
  Emilie:** thema's met een eigen lettertype zien er nu anders uit.

**Vindbaarheid**
- Uitklapmenu's in de Navbar staan altijd in de DOM en worden alleen met CSS
  verborgen. Ze werden eerder pas bij hover aangemaakt.
- Titels ingekort tot onder 62 tekens, omschrijvingen tussen 120 en 160.
  Blogkoppen en event-taglines blijven ongewijzigd: waar ze niet passen is er nu
  een `metaTitle` (posts.ts) of `metaOmschrijving` (EVENT_DATA).
- Logo wijst naar `/nl/home` in plaats van `/` met omleiding.
- Verborgen `sr-only` H1 weg op Virtueel Kantoor en R@venHack; de zichtbare
  herokop is daar nu de H1.
- Omschrijving toegevoegd aan bingo en storytelling; storytelling van drie naar
  één H1 (`.card-header h1` uitgebreid naar `h2` zodat de vormgeving gelijk blijft).

**Inhoud**
- Online teamuitje: beelden 2 en 3 gewisseld.
- Donkerlaag medium op de hero's van all-hands en community-building.
- Datum van de ALV-checklist naar 2024, op Downloads én op de ALV-eventpagina.

**Onderhoud**
- `eslint.config.mjs`: uitsluitingslijst plus per-bestand uitzondering voor de
  bewuste `<img>`-gevallen. Van 54.000 meldingen naar 0.
- `scripts/tekst-in-beeld.swift`: leest tekst uit afbeeldingen met de
  tekstherkenning van macOS. Gebruikt om de 289 beelden na te lopen op
  Nederlandse tekst.

**Opgeleverd**
- `docs/open-punten.html` — wat er nog open staat
- `docs/engelse-versie-inventaris.html` — wat Emilie moet aanleveren voor Engels
- Lichte keuzekompas-pdf op OneDrive gezet als *Keuzekompas meetingmix - lichte
  webversie.pdf*. Het origineel uit 2022 is niet aangeraakt.

**Gecontroleerd op de productiebouw:** 116 pagina's, 63 bereikbare paden zonder
404, 72 routes × 3 breedtes schoon, sitemap op 59 adressen.

## 18 augustus 2026 — dubbele manifest-pdf

`public/manifest-meetingmasters.pdf` is een identieke kopie (zelfde md5) van
`public/downloads/meetingmasters-manifest.pdf`. Nagekeken: hij staat nergens in
de code, niet in de gebouwde site en niet in de sitemap, en de site heeft nooit
live gestaan — er kan dus geen externe link naar bestaan. Beide talen wijzen nu
naar het exemplaar in `/downloads`. Het losse bestand blijft staan maar wordt
nergens meer gebruikt; het mag bij een opruimronde weg.

## 18 augustus 2026 — de site draait volledig tweetalig

De laatste vier pagina's en de twee overgebleven losse tools zijn omgezet.

- **T C** — **Downloads** (`/en/downloads`). Gedeelde template
  `components/downloads/DownloadsPagina.tsx`, Nederlandse tekst in `data.ts`,
  Engelse in `tekst-en.ts`. Het Vergadermacht-blok valt weg in het Engels: die
  publicatie bestaat er niet, en het formulier erachter evenmin. De Engelse
  pdf's en de Engelse Keuzekompas-video hangen eraan vast.
- **T C** — **Vergaderkosten-calculator** (`/en/meeting-calculator`), plus een
  Engelse kopie van de tool zelf in `public/tools/vergaderkosten-calculator/en/`.
  Vertaald: de vijf stappen, de reisprofielen, de organisatiekosten, de
  offline/online-vergelijking, het pdf-kaartje en de samenvatting die naar
  HubSpot gaat. Getallen staan nu in `en-GB`-opmaak, het formulier eronder is
  het Engelse (`77dffdf4-…`).
- **C** — **Bingo in het Engels** ingehangen. De Engelse kopie in
  `public/tools/bingo/en/` bestond al, inclusief hostpaneel en Engelse
  standaardwoorden; `embedVoor()` in `lib/tools.ts` wijst er nu naartoe.
- **T C** — **Privacy statement** (`/en/privacy-statement`) en
  **cookieverklaring** (`/en/cookie-statement`). Bewust een eigen bestand per
  taal en geen gedeelde template met tekstobject: juridische tekst moet per taal
  nagelezen kunnen worden. De cookiebanner en de keuzeknop zijn nu ook Engels,
  en de banner linkt naar de verklaring in de eigen taal — de regel "(in Dutch)"
  kon eruit.
- **T** — **Nederlandse resten opgeruimd** die via componenten binnenkwamen: de
  drie alinea's en de vergelijkingslijst op SpatialChat, de terugkoppeling naar
  Technologie, de kop bij "Our solutions" op de homepage, het manifest-citaat op
  Over ons, en de terugvaltekst van de HubSpot-agenda op de demo-pagina. Die
  stonden vast in de JSX in plaats van in het tekstobject.

**Gecontroleerd op de productiebouw:** 132 routes zonder 404 (op negen bedoelde
308-doorverwijzingen na), 132 routes × 3 breedtes zonder overloop, eslint 0
fouten, en alle 59 Engelse routes doorzocht op Nederlandse stopwoorden in de
**gebouwde** HTML — schoon. Het enige wat de zoekopdracht nog vindt is "Het
Cultuurfonds" op de testimonials: een organisatienaam.

## 18 augustus 2026 — Engelse copy-ronde

De hele Engelse site nagelopen als Engelse tekst, niet als vertaling. Nederlands
naast me als bron, maar niet bindend.

- **T** — **Nederlandismen eruit.** Uitdrukkingen die letterlijk waren
  overgezet en in het Engels niet bestaan of iets anders betekenen: *think
  along* (meedenken, 20×), *by itself* (vanzelf, 16×), *house style*
  (huisstijl), *low threshold* (laagdrempelig), *harvest* (oogst — alleen op
  World Café laten staan, daar is het de vakterm), *unburden* (ontzorgen),
  *instrument* (voor tool), *concrete* (voor specifiek/hard).
- **T** — **Echte fouten.** *How we come across each other* betekent in het
  Engels iets anders dan "hoe we elkaar tegenkomen". *Less turnover* leest in
  het VK als mínder omzet — nu "Better retention". *Constitutionally sound*
  gaat over een grondwet, niet over statuten. *Stands up before a notary*: een
  notaris speelt in het VK die rol niet.
- **T** — **UK-Engels doorgevoerd.** Spelling was al goed; de
  Microsoft-hulplinks wezen naar `en-us` en staan nu op `en-gb` (beide
  gecontroleerd). ALV heet nu **AGM**, de gangbare Britse term.
- **T** — **Samentrekkingen ingevoerd** (besluit Emilie): *don't*, *it's*,
  *you'll*. Uitgezonderd: FAQ-vragen in zoekvorm, de juridische pagina's, de
  klantquotes op Ervaringen, en een paar koppen waar de volle vorm harder
  aankomt. De hulpvragen in de stem van de bezoeker ("I can't hear anyone")
  juist wél.
- **T** — **Blogtitel** "A stick to beat it with" → **"Blaming online"**
  (besluit Emilie). Slug mee omgezet naar `/en/blog/blaming-online`, de
  beeldspraak van de stok blijft in het artikel staan.
- **C** — **Twee foute links hersteld**: het Engelse CTA-blok wees naar
  `/nl/events`, en de platformpagina naar `/nl/games-tools#tools`. Ook de
  Engelse link naar de Autoriteit Persoonsgegevens gaf 404 en staat nu op hun
  Engelse hoofdpagina.

De afspraken die hieruit volgen staan in `docs/vertaling-voortgang.md`, zodat
nieuwe Engelse tekst er niet vanaf gaat wijken.

**Gecontroleerd op de productiebouw:** 132 routes zonder 404, 132 routes × 3
breedtes schoon, eslint 0 fouten, geen Nederlandse resten in de gebouwde HTML,
en geen samentrekking op een plek waar de volle vorm moet staan.

## 18 augustus 2026 — engagement, en een briefing voor de Engelse H1

- **T** — **"involvement" heet overal "engagement"** (besluit Emilie). 41
  plekken. "Involved" als bijvoeglijk naamwoord blijft staan, dat is een ander
  woord. Eén plek om in de gaten te houden: in het manifest-citaat staat nu
  "guardians of engagement", wat in een geloofsuitspraak net iets zakelijker
  klinkt dan de rest van die zin.
- **C** — **`docs/hero-briefing-en.md`** aangemaakt: alles wat nodig is om in
  de Claude-app te brainstormen over de Engelse H1 van de homepage. Inclusief
  het **gemeten** tekenbudget (max ± 24 tekens per regel; desktop is de krapste
  situatie, niet mobiel), de koppen die al op andere pagina's staan, en wat er
  al is geprobeerd en waarom het afviel.

## 18 augustus 2026 — livegang-doorlichting

Volledige technische doorlichting op de productiebouw, met het oog op de
livegang. Wat ik kon repareren is gerepareerd:

- **C** — **Canonical op alle routes.** 53 Nederlandse pagina's hadden er geen.
- **C** — **hreflang wederkerig gemaakt.** De Engelse pagina's wezen naar de
  Nederlandse, maar niet andersom, en eenrichtings-hreflang wordt door Google
  volledig genegeerd. Nieuwe helper `taalAlternates()` in `lib/talen.ts` haalt
  beide kanten uit dezelfde bron, zodat het niet meer scheef kan lopen. 118
  vertaalde pagina's machinaal gecontroleerd op wederkerigheid.
- **C** — **Eigen 404-pagina** (`app/not-found.tsx`), tweetalig, met de weg
  terug. Die was er niet.
- **B** — **Deelbeeld voor de calculator** aangemaakt; beide calculator-
  bestanden verwezen naar een afbeelding die niet bestond.
- **T** — De standaardtitel in de root noemde nog "remote work specialisten".
- **C** — Vier levende routes ontbraken in `scripts/mobiel-routes.txt` en
  liepen dus nooit mee in de controles. Toegevoegd; daardoor kwamen hun
  ontbrekende hreflang-tags alsnog boven water.

Alles wat overblijft staat in **`docs/livegang.md`**: open punten plus een
stappenplan van tien stappen voor de aansluitingen die Emilie zelf moet doen
(GitHub pushen, Vercel koppelen, env-variabelen, domein, DNS bij YourHosting,
certificaat, Supabase, Search Console, formulieren testen).

**Gecontroleerd:** 137 routes zonder 404, 137 × 3 breedtes schoon, eslint 0
fouten, sitemap 118 adressen die alle bestaan en geen doorverwijzing bevatten,
elke pagina precies één H1, alle beelden met alt-tekst, alle 15 HubSpot-
formulier-ID's bestaan nog in het portaal, alle externe links bereikbaar op twee
na (LinkedIn blokkeert bots; genuinecontact.net bestaat niet meer).

## 19 augustus 2026 — Google Analytics en vindbaarheid

- **C** — **Google Analytics ingebouwd, achter de cookiekeuze.**
  `components/ui/Analytics.tsx` laadt het script pas bij "Alles accepteren".
  Gemeten met een echte browser: geen keuze → 0 verzoeken naar Google, alleen
  noodzakelijk → 0, alles accepteren → 2 verzoeken en 2 cookies, en na
  intrekken zijn die cookies weg. IP-adres ingekort, advertentiegegevens uit.
  Zonder `NEXT_PUBLIC_GA_ID` doet het component niets, dus lokaal en op
  previews wordt er niet gemeten.
- **T** — **Cookie- en privacyverklaring bijgewerkt** in beide talen: Google
  Analytics staat er nu bij naam in, met wanneer het laadt, wat er gebeurt bij
  intrekken, en dat er géén marketingcookies zijn.
- **C** — **Kruimelpad (BreadcrumbList)** op de 20 eventpagina's, in beide
  talen. Nieuwe helper `lib/kruimels.ts`.
- **C B** — **Hero-video's lichter.** Vier hero's stonden op `preload="auto"`
  en haalden tot 2,3 MB binnen tijdens het renderen. Nu `preload="metadata"`,
  en de home- en events-hero hebben een stilstaand beeld gekregen (uit de video
  gehaald met ffmpeg-static). LCP gemeten op 116 ms.
- **Bevinding:** de huidige Squarespace-site draait op `UA-215126398-2`, een
  Universal Analytics-property. Die verwerkt sinds 1 juli 2023 geen gegevens
  meer en kan dus niet hergebruikt worden; er moet een GA4-property komen.
  Staat uitgelegd in `docs/livegang.md`, stap 3a.
- **C** — 13 commits naar GitHub gepusht.

`docs/livegang.md` is uitgebreid met een volledige vindbaarheidssectie (stap 8:
Search Console, Bing, wat je de eerste weken volgt, wat er al klaarstaat, en
wat ná de livegang nog telt) en met een terugvalplan (stap 9a): de
Squarespace-site blijft het vangnet tot de nieuwe twee weken goed draait.

## 19 augustus 2026 — deelbeelden en het vignet als favicon

- **B C** — **Elke pagina deelt nu zijn eigen beeld.** Alleen de 22
  blogartikelen hadden een eigen `og:image`; de overige 106 routes deelden
  allemaal hetzelfde algemene beeld, dus een gedeelde link naar de strategiedag
  zag er precies zo uit als een link naar de homepage. Nieuw register
  `lib/deelbeelden.ts` plus `scripts/deelbeelden-maken.mjs`, dat 34 beelden
  bijsnijdt naar 1200×630 **jpg** in `public/images/share/`. Jpg en niet de webp
  van de hero zelf, omdat LinkedIn niet betrouwbaar omgaat met webp. Stand nu:
  68 pagina's met een eigen deelbeeld, 22 met hun blogbeeld, 38 op het algemene
  (formulieren, juridische pagina's en de tools — daar is dat juist).
  Verandert er een hero, draai dan het script opnieuw.
- **B** — **Het MM-vignet als favicon.** Er stond nog de standaard van Next.js,
  een zwarte cirkel met een driehoek. Nu `app/icon.png` (512), `app/apple-icon.png`
  (180, vullend op MM-geel omdat iOS transparantie slecht verwerkt),
  `app/favicon.ico` (16/32/48) en `app/manifest.webmanifest`. Bron is
  `public/images/logo-vignet.webp`, met de transparante rand eraf zodat het merk
  op 16px zo veel mogelijk vlak vult.
- **T** — De titel van de Nederlandse homepage noemde nog "remote work
  specialisten"; dat heet inmiddels Virtueel Kantoor.
- **C** — `docs/livegang.md` uitgebreid met stap 9b: LinkedIn onthoudt oude
  deelbeelden, dus die moet je via de Post Inspector opfrissen.

## 19 augustus 2026 — titel van de homepage

- **T** — **`Online events, virtual offices & gamification | MeetingMasters`**
  (besluit Emilie), in beide talen. Wat er stond noemde maar twee van de drie
  beloftes en zette de merknaam vooraan — en juist daar passen in een tabblad
  maar ongeveer 25 tekens, dus die gingen helemaal op aan de eigen naam. Gemeten
  in een zoekresultaat: 540 px breed, en er past 600 px, dus hij wordt niet
  afgekapt.
- **B** — `docs/beeld/tabbalk-en-titels.png`: hoe het vignet en de titels er in
  de tabbalk uitzien, oud naast nieuw.

- **T** — De haakjes **"(Virtual Office)"** uit de titel van Virtueel kantoor
  gehaald. Dat was een zoekmachine-truc uit een eerdere ronde; nu er een echte
  Engelse pagina is die op die term mikt, en hreflang de twee verbindt, deed hij
  geen werk meer. Nu: *Virtueel kantoor voor teams | MeetingMasters*.
- **T** — **`Online Event Formats`** naar `Online event formats`. Dat was de
  enige titel op de site met hoofdletters midden in de zin.

Gecontroleerd of er meer van dit soort titels stonden: nee. De overige
hoofdletters zijn eigennamen van formats en tools (Open Space, Wheel of Fortune,
Inspiration Cards, Kantoor + Cultuur) en die horen zo.

## 19 augustus 2026 — livecheck-script en een eerlijker taakverdeling

Emilie vroeg of het stappenplan zo geschreven was dat ík alles doe wat ik kan,
en zij alleen wordt ingezet waar een handmatige koppeling nodig is. Dat was het
niet: van de zes controlemomenten stonden er vier op haar naam terwijl ik ze kan
automatiseren.

- **C** — **`scripts/livecheck.mjs`** (`npm run livecheck`), 31 controles tegen
  het live adres: doorverwijzingen (kaal → www, http → https), de elf oude
  bloglinks, elke pagina uit de sitemap, robots, canonical, hreflang, of de
  deelbeelden bestaan, de iconen, de taalschakelaar heen en terug, de
  cookiebanner, Analytics bij alle drie de keuzes, of de HubSpot-formulieren
  laden, en het gewicht van de hero-video. Werkt ook tegen een preview of tegen
  localhost: adressen naar het productiedomein worden dan omgezet, en wat lokaal
  niet te testen valt komt als `!` in plaats van als fout.
- **T** — `docs/livegang.md` en de webversie herschreven: de vier controles die
  ik kan doen staan nu op mijn naam, met een tabel van de zeven dingen die
  alleen zij kan doen en waarom. Plus het aanbod om ook de Vercel-stappen over
  te nemen met een token.

## 19 augustus 2026 — mislukte deploy op Vercel opgelost

De eerste deploy na het koppelen van Vercel faalde. Gereproduceerd door lokaal
te bouwen zonder `.env.local`:

```
Error: Failed to collect configuration for /en/home
  [cause]: Error: Configuration must contain `projectId`
```

- **C** — **`sanity/client.ts`** maakte de client aan bij het laden van de
  module. Ontbrak `NEXT_PUBLIC_SANITY_PROJECT_ID`, dan gooide `createClient`
  meteen een fout — vóórdat de `.catch(() => null)` in de homepage zijn werk kon
  doen. De hele bouw liep daarop stuk. `client` is nu `null` als Sanity niet is
  ingesteld.
- **C** — **`sanity/queries.ts`** geeft dan lege lijsten of `null` terug, en de
  pagina's gebruiken hun vaste terugvalwaarden. **`sanity/image.ts`** maakt de
  builder pas bij de eerste aanroep.
- **T** — In `docs/livegang.md` een waarschuwing bij stap 2: koppelen start
  meteen een bouw, nog vóór de variabelen er staan. Dat kan nu geen kwaad meer,
  maar wie zeker wil zijn doet stap 3 eerst.

Gecontroleerd: bouwt mét én zonder `.env.local`, en met de variabelen komt de
CMS-inhoud gewoon binnen (cijferbalk en klantlogo's staan er). 31 livecheck-
controles goed.

## 19 augustus 2026 — Vercel ingericht

Met een tijdelijk Vercel-token (team-gebonden, één dag geldig) de stappen 2 tot
en met 4 uit `docs/livegang.md` uitgevoerd. Wat ik heb gedraaid:

- **Bouwlogboek van de mislukte deploy opgehaald.** Bevestigt de diagnose
  woordelijk: `Failed to collect configuration for /en/home` met als oorzaak
  `Configuration must contain projectId`. De deploy daarná, met de reparatie
  in `sanity/client.ts`, staat op READY.
- **Acht omgevingsvariabelen gezet** (er stonden er drie). De drie
  Supabase-sleutels zijn door Vercel als *gevoelig* gemarkeerd en kunnen daardoor
  alleen op Production staan; dat is precies goed, de site gebruikt Supabase
  nergens meer.
- **Opnieuw gedeployd**, bouw geslaagd.
- **Beide domeinen toegevoegd**, met het kale domein op redirect naar www (308).
  Zolang de DNS naar Squarespace wijst verandert er niets voor bezoekers.
- **De echte DNS-waarden uitgelezen.** Die wijken af van wat ik in het plan had
  staan: het is **niet** `76.76.21.21` / `cname.vercel-dns.com` maar
  `216.198.79.1` en `aa82fb7ae2858b93.vercel-dns-017.com.` — dit project krijgt
  zijn eigen adres.
- **De huidige DNS vastgelegd** met `dig`, zodat het terugvalplan echte waarden
  heeft: A naar vier Squarespace-adressen, CNAME www naar
  `ext-cust.squarespace.com.`
- **Drie records gevonden die moeten blijven staan**: de MX naar Outlook, een
  SPF die Outlook én HubSpot toestaat, en een bestaande
  `google-site-verification` — die scheelt werk bij stap 8.

**Niet aangeraakt:** de beveiligingsinstelling (`ssoProtection` staat op
*all_except_custom_domains*, dus previews achter een login en het eigen domein
publiek — precies goed), facturering, en andere projecten.

## 19 augustus 2026 — DE SITE STAAT LIVE

| | |
|---|---|
| 16:05 | DNS gewijzigd in het beheerscherm (VIP Internet) |
| 16:15 | Doorgevoerd bij de nameservers — zoneserie van `2026022601` naar `2026081901` |
| 16:19 | https-certificaat afgegeven door Vercel |
| 16:25 | 31 controles gedraaid: **alles goed** |

**Twee records gewijzigd, verder niets.** `A @` van vier Squarespace-adressen
naar `216.198.79.1`, en `CNAME www` van `ext-cust.squarespace.com` naar
`aa82fb7ae2858b93.vercel-dns-017.com`. Alle acht e-mailrecords (MX, SPF, DMARC,
autodiscover, twee Microsoft-DKIM's en twee HubSpot-DKIM's) zijn voor én na
gecontroleerd en ongemoeid.

- **C** — `scripts/livecheck.mjs` liep eerst tegen de oude site aan: vlak na een
  DNS-wijziging hangt de resolver van het eigen netwerk nog op de oude waarde.
  `dns.setServers()` lost dat niet op, want dat werkt alleen voor `resolve*` en
  niet voor `lookup` — en juist `lookup` gebruikt `fetch`. Nu zit er een
  undici-dispatcher in die zelf via 1.1.1.1 opzoekt, plus
  `--host-resolver-rules` voor Chrome. Zo meet het script wat bezoekers zien in
  plaats van wat deze Mac onthoudt.
- **Opgemerkt:** de ping-adressen van Google en Bing voor sitemaps zijn
  afgeschaft (404 en 410). Aanmelden gaat via Search Console; dat staat al zo in
  het plan.

Nog open: het GA4-nummer, Search Console en Bing, één formulier echt versturen,
de LinkedIn Post Inspector, en het Vercel-token intrekken.

## 19 augustus 2026 — beelden ontbraken op de Engelse eventpagina's

Emilie zag het: de praktijkvoorbeelden op de Engelse eventpagina's hadden wél de
tekst, maar geen beeld.

**Oorzaak.** `eventInTaal()` in `components/events/EventPagina.tsx` voegde de
Engelse teksten samen met een gewone objectsamenvoeging. Bij een lijst vervangt
dat de héle lijst. Het Engelse bestand bevat alleen tekst — `label`, `title`,
`body`, `imgAlt` — dus het veld `img` verdween. Datzelfde gold voor de stappen
en de randvoorwaarden.

**Oplossing.** De samenvoeging gaat nu per onderdeel: het Nederlandse item is de
basis, de Engelse tekst gaat eroverheen. Wat het Engels niet noemt blijft staan.
Daarmee zijn beeld, icoon en kleur voortaan taalloos, zoals bedoeld.

**Gecontroleerd:** alle twintig events tonen nu in beide talen evenveel beelden
bij de praktijkvoorbeelden, en over alle 59 vertaalde paren zijn er nog maar twee
verschillen — allebei bedoeld: de Engelse homepage slaat het CMS over, en de
Engelse downloadspagina mist het Vergadermacht-blok.

## 19 augustus 2026 — drie ontwerpcorrecties

Van Emilie, na haar controle van de live site.

**1. Koppen niet verder dan 60% van het beeld.**
Gemeten op 1440px: de H1's zaten al goed (35–44%), maar **21 sectiekoppen liepen
tot 78%, en het CTA-blok zelfs tot 83%**. Een regel in `app/globals.css` legt nu
`max-width: min(60vw, 860px)` op `main h1` en `main h2`, vanaf tablet — op een
telefoon zou 60% te smal worden. Gecentreerde koppen (Contact, Ervaringen)
houden hun `margin-inline: auto` en blijven dus gecentreerd. Na de wijziging:
**nul koppen boven de 60%**.

**2. Bodycopy 20% donkerder.**
385 tekstkleuren omgezet; elke tint behoudt 80% van zijn waarde.

| was | wordt | contrast op wit |
|---|---|---|
| `#545454` | `#434343` | 7,57 → 9,89 |
| `#666666` | `#525252` | 5,74 → 7,81 |
| `#777777` | `#5F5F5F` | 4,48 → 6,39 |
| `#555555` | `#444444` | 7,46 → 9,74 |
| `#898989` | `#6E6E6E` | 3,50 → **5,10** |
| `#888888` | `#6D6D6D` | 3,54 → **5,17** |

Meegenomen voordeel: `#898989` en `#888888` haalden met 3,5:1 de WCAG
AA-drempel van 4,5:1 niet. Nu wel. Ook `dark-grey` en `mid-grey` in
`tailwind.config.ts` en de body-kleur in `globals.css` zijn mee omgezet.

**3. Alle blokken in dezelfde container.**
Het CTA-blok had de marge **buiten** de maximumbreedte staan
(`<section className="… px-6 lg:px-10">` met daarin `max-w-content mx-auto`),
terwijl de rest van de site het andersom doet. Daardoor viel dat blok 80px
breder uit en begon het 40px verder naar links. Nu dezelfde opbouw als overal:
op de homepage staan alle tien containers op links 120, breedte 1200.

**Gecontroleerd:** 137 routes × 3 breedtes zonder overloop, eslint 0 fouten,
gecentreerde koppen nog gecentreerd, en op de gebouwde pagina is de hoofdtekst
nu `rgb(67,67,67)`.

**Aanvulling, zelfde dag:** op verzoek van Emilie geldt de 60%-grens nu ook voor
lopende tekst — `main p`, `main li` en `main blockquote`. Gemeten vóóraf: van de
290 tekstblokken liepen er maar **vijf** over de 60%; de rest staat al in een
kolom of kaart en is dus smaller dan 860px. De regel knijpt alleen wat te breed
is en laat de rest ongemoeid. Na de wijziging is er nog één blok over: het label
*"Wij maken ontmoetingen — samen met onze klanten"* boven de logobalk op Over
ons. Dat heeft een eigen `max-w-content` in de opmaak, past op één regel en lijnt
uit met de carrousel eronder — bewust zo gelaten.

## 20 augustus 2026 — de laatste twee open punten gesloten

- **C** — **LinkedIn gelijkgetrokken.** Op Over ons stond
  `nl.linkedin.com/company/meetingmasters`, terwijl de footer en de
  bedrijfsgegevens naar `www.linkedin.com/company/meetingmastersonline` wezen —
  twee verschillende bedrijfspagina's. Emilie bevestigde welke de juiste is;
  alle drie de plekken wijzen nu daarheen. Haar persoonlijke profiel
  (`/in/emilievanrappard/`) stond al goed.
- **T** — **Genuine Contact:** het adres `genuinecontact.net` klopt, alleen ligt
  hun server eruit (521). Bevestigd door Emilie. Er staat nu een notitie bij in
  de code, zodat niemand hem later "repareert" als een controle erover klaagt.

---

## 20 augustus 2026 — batch na de scan (footer, doorverwijzingen, home, cookiebanner)

Alles hieronder is in **beide talen** doorgevoerd.

**Footer (C)** — de tekst was grijs op donker en daarmee slecht leesbaar. Nu
`text-white` voor de koppen, `/85` en `/70` voor de links, `/60` voor de
laatst-bijgewerkt-regel. Elke hover is geel (`#EEBE3D`) in plaats van wit.
`LastUpdated` had zijn grijs hard in het component staan; die kleur komt nu van
buiten.

**Doorverwijzingen (C)** — twaalf oude adressen erbij: `/nl/spatialchat`,
`/nl/webinar`, `/nl/zoom`, `/nl/zoom-events`, `/zoom-events`,
`/nl/onlinekerstfeestje`, `/nl/online-bedrijfsbijeenkomst`, `/nl-organisatie`,
`/nl-academy-1-1`, `/nlplanningdesign-copy`, `/en/online-all-staff`,
`/en/planning-support`. `cases` en `planning-support` zijn uit `enPaths`
gehaald — een pad dat daar staat, is als route onbereikbaar.

**Escape Room (C)** — was een event-format, is het niet meer. `/nl/events/escaperoom`
en `/en/events/escaperoom` (plus `/nl/escaperoom` en `/en/escape-room`) gaan nu
naar het Games-anker op Games & Tools, niet meer naar het Teamuitje.

**Ankers bleven niet staan (C)** — `engelsPad`, `nederlandsPad` en
`anderTaalPad` gooiden het `#deel` van een adres weg. Wie op
`/nl/games-tools#games` op EN klikte, kwam bovenaan de pagina uit. Het anker
wordt nu bewaard.

**Cases weg (T/C)** — de pagina's zijn verwijderd, `/nl/cases` en `/en/cases`
verwijzen naar de testimonials, en `/nl/inspiratie` en `/en/inspiratie` ook.

**Home (T/C)** — hero lager (`44vw`, van onderen gesneden op `center 38%`) zodat
de drie oplossingsblokken boven de vouw staan en "YOUR JOURNEY STARTS HERE" in
beeld blijft. Nieuwe kop boven de oplossingen: *"Hoe je elkaar ontmoet maakt
verschil. Wij maken je online bijeenkomsten weer waardevol."* De zin *"Hoe we
elkaar tegenkomen maakt het verschil."* is uit alinea 2 gehaald — die stond er
nu twee keer. De contactlink onder de essentie is weg. Het item over de
Olympiërs verwijst naar het blogartikel.

**Cijfers (T)** — bij `94%` staat nu een sterretje, en onder de
SpatialChat-cijfers staat waar ze vandaan komen.

**Aansprakelijkheid (T)** — nieuwe FAQ onderaan Techhulp: *"Waar zijn jullie
verantwoordelijk voor, en waar niet?"* Software van derden (zoals SpatialChat)
en de werkplek van de deelnemer vallen buiten wat wij kunnen garanderen. Staat
bewust in de FAQ en niet op de pagina zelf. Geen vervanging voor algemene
voorwaarden — dat staat als notitie in de code.

**Cookiebanner (T/C)** — nam als iframe (bijvoorbeeld in SpatialChat) het halve
scherm in. Beide teksten van 64 naar ~35 woorden, smaller kader (820px),
kleinere letter en knoppen naast elkaar. Nu 13% van de hoogte op 1440×900, 21%
op 900×560, 27% op mobiel.

**Over ons (C)** — na *"Wat wij doen"* viel de sectie terug naar een kleinere
schaal dan de secties erboven. Kop is nu `h2` op dezelfde grootte, intro op
dezelfde grootte, en de koppenreeks eronder klopt weer (`h3`/`h4`).

**Bronbestand events (T)** — `docs/event-format-teksten.md` had nog
`team-ontwikkeling`, `ontwikkeltraject` en `escaperoom` staan. Alle twintig
slugs komen nu overeen met de site; gecontroleerd tegen `data.ts`.

**Planning & support (C)** — de scan meldde `/en/planning-support` als kapot, en
dat klopte: hij stond in `enPaths` en stuurde je dus naar de Nederlandse
noindex-pagina. Wegsturen naar `/en/events` was de eerste reactie, maar er staat
een echte, bijgehouden Engelse pagina (hij kreeg de engagement-ronde én de
ontwerpronde mee). Daarom nu als paar in `PAREN`, met dezelfde status als de
Nederlandse: bereikbaar, wederkerige hreflang, niet in de zoekresultaten en niet
in de sitemap. Zeg het als je hem tóch liever laat doorverwijzen.

---

## 20 augustus 2026 — Over ons en Ervaringen

Beide talen, tenzij anders vermeld.

**Over ons (T)** — *"En die houdt nog steeds"* liep niet; is *"En dat geldt nog
steeds."* De teambeschrijving stond in het enkelvoud (*"zijn student"*) terwijl
de FAQ het meervoud gebruikte. Beide staan nu gelijk, met de Academy vóór de
selectiecriteria: opleiding eerst, dan wie ze zijn.

**Manifestbeeld (B/C)** — het voorbeeldbeeld van de film werd extern gehaald bij
`i.ytimg.com`. Dat is een adres dat we niet in de hand hebben, en het maakt de
bezoeker bij YouTube bekend nog vóór hij op play klikt. Beide beelden staan nu
lokaal (`manifest-video-nl.webp` / `-en.webp`, 51–53 kB), zwarte balken
weggesneden, met een alt die vertelt wat er te zien is. `YouTubeEmbed` heeft
daarvoor een `poster`-optie gekregen; zonder poster valt hij terug op het oude
gedrag.

**Eigen uitnodiging op Over ons (T/C)** — de enige twee knoppen bij "de mensen"
waren links naar LinkedIn, terwijl dit de pagina is waar iemand besluit of hij
ons vertrouwt. Er staat nu een blok onder de twee portretten: *"Liever meteen
kennismaken?"* met **Plan een gesprek** en **Lees eerst wat klanten zeggen**.

**Ervaringen beter vindbaar (T/C)** — twaalf quotes van herkenbare namen zaten
te diep weggestopt. Nu drie ingangen: een link naast **KLANTEN** op de home,
een link naast de klantenregel op Over ons, en de FAQ *"Waarom kiezen
organisaties voor MeetingMasters?"* op het eventoverzicht verwijst er nu
naartoe. Een FAQ-antwoord kan daarvoor een `href` meekrijgen; het FAQ-schema
voor Google pakt nog steeds alleen vraag en antwoord op.

**Dubbele slotzin (T)** — ROC TOP en Bergman Clinics eindigden allebei met
*"Een waardevolle bijdrage aan verbinding in deze tijd."* Bij ROC TOP zat die
zin er los op: het citaat gaat over flexibiliteit en creatieve kwaliteiten. Hij
is daar weggehaald. **Let op:** dit is geen fout die bij het overzetten is
ontstaan — de dubbeling staat al in de állereerste commit (`2d142c6`), in beide
talen. Hij komt dus mee van de oude site. Wie het originele citaat van ROC TOP
heeft, kan nakijken of er nog een eigen slotzin bij hoorde.

**CTA op Ervaringen (C)** — de pagina eindigde in het niets. Nu staat het vaste
CTA-blok eronder, in beide talen.

---

## 20 augustus 2026 — blog: rubrieken, filter en een vervolgstap

**Slotzin definitief weg (T)** — de dubbele zin *"Een waardevolle bijdrage aan
verbinding in deze tijd"* is nu ook bij Bergman Clinics verdwenen (de langste
van de twee teksten). Hij staat daarmee nergens meer op de site.

**Blog krijgt een vervolgstap (C)** — het overzicht was de enige pagina zónder
CTA: elf stukken en geen enkele volgende stap, terwijl dit juist het verkeer is
dat Google en AI-tools aanleveren. Het vaste CTA-blok staat er nu onder, in
beide talen. De artikelen zelf hadden al een eigen CTA; die blijft.

**Rubrieken en filter (C)** — elk artikel heeft een rubriek gekregen:
Meetingontwerp (5), Online ontmoeten (3), Thuiswerken en hybride (2),
Praktijkverhaal (1). De sleutel is taalonafhankelijk, dus een artikel staat in
beide talen in dezelfde rubriek; de labels staan per taal
(`BLOG_RUBRIEKEN` / `BLOG_RUBRIEKEN_EN`). Boven het overzicht staan knoppen met
het aantal erbij; een lege rubriek verschijnt niet. De rubriek staat ook op de
kaart, vóór de datum.

Belangrijk voor vindbaarheid: het filteren gebeurt in de browser, maar de
pagina rendert nog steeds alle elf kaarten aan de serverkant. Een crawler die
geen JavaScript draait, ziet dus gewoon alle artikelen.

**Verder lezen volgt nu de rubriek (C)** — onderaan een artikel stonden simpelweg
de drie nieuwste andere stukken. Nu eerst uit dezelfde rubriek, daarna
aangevuld op datum.

**Eén component in plaats van twee pagina's (C)** — `app/nl/blog/page.tsx` en
`app/en/blog/page.tsx` hadden hun opmaak ieder apart staan. Beide zijn nu een
dunne wikkel om `components/blog/BlogOverzicht.tsx`, zoals de rest van de site.
Een wijziging aan het overzicht raakt daarmee vanzelf beide talen.

---

## 20 augustus 2026 — events: koppen, praktijkbeelden en meta descriptions

### Randvoorwaardenkop is nu een vrij veld

De kop werd samengesteld uit *"Randvoorwaarden voor een geslaagde online"* plus
de formatnaam in kleine letters. Dat ging op twee manieren mis: bij het-woorden
klopte *geslaagde* niet, en bij eigennamen (World Café, Open Space, ALV)
verdwenen de hoofdletters. `randvoorwaardenKop` is nu een **verplicht** veld op
`EventData`, ingevuld voor alle twintig formats. Verplicht, zodat een nieuw
format een keuze afdwingt in plaats van stilletjes terug te vallen op een
regel die niet klopt. Acht koppen aangepast, twaalf ongewijzigd.

**In het Engels was het erger dan gedacht.** Het werkwoord werd eraf gehaald met
een Nederlandse regex (`organiseren|geven|opbouwen|houden`), dus bij álle twintig
Engelse pagina's bleef het Engelse werkwoord staan: *"What a successful **running
an online** strategy day needs."* Dat stond zo live. Alle twintig hebben nu een
eigen Engelse kop.

### Praktijkbeelden nagelopen

Alle zestig praktijkbeelden gecontroleerd op vier dingen: zit de slug in de
bestandsnaam, staat hetzelfde bestand op meerdere pagina's, staat dezelfde
alt-tekst op meerdere plekken, en bestaat het bestand. Uitkomst: precies de vier
gemelde gevallen, geen vijfde.

| Pagina | Stond er | Staat er nu |
|---|---|---|
| Focusgroep 2 | `events-bedrijfsfeest-praktijk-activiteiten` | `zaaltje-bosdag` |
| Focusgroep 3 | `events-open-space-hero` | `zaaltje-werksessie` |
| Klankbordgroep 3 | `events-teambuilding-praktijk-internationaal` | `vo-project` |
| Bedrijfsfeest 1 | `events-bijeenkomst` (generiek) | `vo-clubhuis` |

**Let op bij de vervangers:** er bestaat voor deze vier gevallen geen eigen
praktijkbeeld. De vervangers komen uit de gedeelde ruimtes van het virtueel
kantoor — echte MeetingMasters-omgevingen, en geen praktijkbeeld van een ánder
format. Ze staan nergens anders in de events-sectie. Wil je hier alsnog eigen
beeld, dan is dit de plek.

Elk nieuw beeld heeft een eigen alt gekregen, in beide talen; de oude alt is
níét meegekopieerd. Bij Teamuitje 3 stond de alt van voorbeeld 2 (*"na een
intensief traject"*) — die beschrijft nu wat er te zien is.

### Meta descriptions

Negentien van de twintig waren een kopie van de kaarttekst: 70 tot 90 tekens,
zonder cijfer en zonder merknaam. Alle negentien herschreven volgens het recept
van de webinarpagina: format en belofte, één hard gegeven van de pagina zelf,
en wat MeetingMasters doet. Alle twintig zitten nu tussen 140 en 160 tekens.
De cijfers zijn stuk voor stuk teruggezocht in de pagina (`range`, en de duur
bij brainstorm, klankbordgroep en World Café).

**Ook in het Engels gedaan**, hoewel er geen Engelse concepten lagen: daar stond
precies hetzelfde probleem, en vindbaarheid is juist het doel. Zelfde recept,
zelfde cijfers, 140 tot 160 tekens.

---

## 22 augustus 2026 — laadsnelheid op de telefoon, en de titels

### Hero-video's laden niet meer op de telefoon

Dit was verreweg het grootste punt. Op een telefoon woog de home 2,7 MB, en
2,4 MB daarvan was de hero-video. Events 2,2 MB, virtueel kantoor 1,9 MB, Games
1,8 MB, Techhulp 0,9 MB — steeds bijna alles video.

Alle vijf de hero's gaan nu door één component,
`components/ui/HeroAchtergrond.tsx`. Dat toont altijd het rustbeeld en hangt de
video er alléén overheen als het scherm breder is dan 768px, de bezoeker geen
"verminder beweging" aan heeft staan, en er geen databesparing of trage
verbinding is. De `<video>` komt pas ná die beslissing in de pagina, dus er
wordt niets gedownload dat we daarna weggooien.

De posters hangen in een `<picture>` met een media-query, niet in een srcset met
breedtes. Reden: bij srcset telt de browser de pixeldichtheid mee, en een
telefoon met dichtheid 3 vroeg alsnog het grootste bestand op. Nu kiezen wij:
onder 768px het 900px-bestand, daarboven 1600px.

`scripts/hero-posters.mjs` maakt die varianten. De desktopvariant wordt alleen
bewaard als hij écht kleiner is dan het origineel — bij het events-poster (een
korrelige videostill) is dat niet zo, en die blijft dus zoals hij was.

### Wat er verder is gedaan

- **AVIF aangezet** in `next.config.ts`. Op onze eigen beelden 9 tot 25% kleiner
  dan WebP; browsers die het niet aankunnen krijgen gewoon WebP. Tegelijk de
  `deviceSizes` afgetopt op 1920 in plaats van 3840 — geen beeld op deze site
  wordt zo groot getoond.
- **Blogoverzicht laadde alle artikelteksten in de browser.** Het is een
  client-component (voor het filter) en importeerde de hele postlijst, dus de
  volledige tekst van 22 artikelen zat in de bundel: 123 kB voor een overzicht
  dat alleen titels en samenvattingen laat zien. De pagina geeft nu een
  uitgeklede lijst mee; de teksten blijven aan de serverkant.
- **HubSpot-formulieren laden pas als ze in de buurt komen.** Het HubSpot-script
  trekt reCAPTCHA mee — ruim 300 kB — en dat werd op elke formulierpagina
  meteen geladen, ook als het formulier pas na drie schermen in beeld kwam. Nu
  met een marge van 600px, dus de bezoeker merkt er niets van.

### Wat is onderzocht en níét gedaan

- **De video's opnieuw comprimeren.** Geprobeerd met VP9 (webm) en met x264 op
  verschillende kwaliteitsstanden. De webm-versies werden groter dan de
  bestaande mp4's en de x264-hercodering leverde niets op: de bronbestanden zijn
  al efficiënt gecodeerd. Opnieuw coderen zou alleen kwaliteit kosten.
- **Beelden die groter geladen worden dan ze getoond worden.** Nagemeten over
  acht pagina's op 390px en 1440px: op vijf logo's na klopt alles. Die vijf zijn
  bestanden van een paar kB. De `sizes`-opgaven stonden dus al goed.

### Titels

Vijf paren hadden in het Nederlands en het Engels exact dezelfde titel, en
dertien titels waren korter dan 30 tekens (*"Blog | MeetingMasters"*). Een titel
is het sterkste on-page-signaal dat er is; zo kort is dat weggegooid. Alle
dertien herschreven naar 45 tot 60 tekens met het onderwerp vóór de merknaam —
en daarmee zijn de dubbelingen ook weg. Gecontroleerd over alle 127 routes:
geen dubbele titels meer, en geen te korte buiten de pagina's die bewust op
`noindex` staan.

**Wat we níét doen: de URL's aanpassen.** Een SEO-controle merkte 19 adressen
aan als "poorly formatted". Onze adressen zijn kleine letters, met streepjes,
kort en met het onderwerp erin. Een live adres wijzigen kost ranking en vraagt
weer een doorverwijzing, voor niets. Laten staan.

**Vastgelegd in de controle.** `npm run livecheck` heeft er drie controles bij:
op /nl/home, /nl/events en /nl/virtual-office mag er op een telefoonscherm nul
byte video geladen worden. Zet iemand later een `<video>` terug in een hero,
dan valt dat meteen op. De teller staat nu op 35 controles.

**Wat níét gelukt is.** Het HubSpot-formulier laadt op de meeste
formulierpagina's tóch meteen. De formulieren staan daar 714 tot 1252 px van
boven, en op een telefoonscherm van 844 px valt dat binnen de marge van 600px
waarmee we vooruit laden. Dat is ook goed: op die pagina's ís het formulier het
doel, en een bezoeker die scrolt hoort geen leeg vak te zien. Het uitstellen
werkt wél op pagina's waar het formulier dieper staat, en beschermt toekomstige
pagina's.

---

## 22 augustus 2026 — privacy- en cookiepagina's

Alles in beide talen, in acht commits.

**Wat de meting liet zien.** `scripts/cookie-inventaris.mjs` (nieuw) loopt de
site af in drie situaties — geen keuze, alleen noodzakelijk, alles accepteren —
en zegt precies welke cookies en opslagsleutels er landen. Uitkomst:

- Zonder keuze staat er **niets** in je browser, behalve `__cf_bm` op de
  domeinen van HubSpot, en dan alleen op pagina's met een formulier. Dat is de
  botfilter van hun CDN, dertig minuten geldig.
- De **HubSpot-trackingcookies bestonden hier helemaal niet.** We laden alleen
  het formulier-embedscript, niet HubSpots algemene trackingscript. Dus geen
  `hubspotutk`, geen `__hstc`, geen `__hssc`, geen `__hssrc` — in geen van de
  drie situaties.
- Na "Alles accepteren": `_ga` en `_ga_<meetnummer>`, 400 dagen.

**Wat er toch is gebouwd.** `lib/hubspot-toestemming.ts` zet `_hsq` op
`doNotTrack` vóór elk HubSpot-script laadt, en pas bij "Alles accepteren" op
`track: true`. Bij intrekken gaat hij terug én wissen we de vier
trackingcookies. Dat is nu vooral een grendel voor later: zodra iemand het
algemene trackingscript toevoegt, is de toestemming al geregeld. Eén plek waar
het nú al telt: de **agenda**. De meetings-embed trekt HubSpots analytics-stack
mee (`hs-analytics.net`, `hs-banner.com`, `track-eu1.hubspot.com`).

**Wat daar niet mee opgelost is.** De agenda is een pagina van HubSpot zelf in
een venster. Wat daarbinnen gebeurt, bereikt onze `_hsq` niet — dat is hun
domein. Gemeten: ook zonder toestemming vuurt dat venster twee verzoeken naar
HubSpots eigen tracking af. In de cookieverklaring staat dat nu zo beschreven,
met een link naar hun beleid. Wil je dat helemaal dicht, dan moet de agenda net
als de YouTube-video's achter een klik — dat kost een klik op een boekingspagina
en is dus een keuze van Emilie.

**De cookietabel** staat in beide verklaringen: naam, plaatser, doel,
bewaartermijn, gesplitst naar "altijd" en "alleen na toestemming". Categorieën
alleen volstaan niet (HvJ EU, Planet49). Op een smal scherm schuift de tabel in
haar eigen kader; de pagina zelf beweegt niet mee.

**De datums.** De pagina's zeiden augustus 2026 en de voettekst juni 2026, en de
Engelse pagina's toonden *"Last updated: augustus 2026"*. Beide komen nu uit
`lib/bijgewerkt.ts`, per taal uitgeschreven. Het blijven er bewust twee: de
datum onder een privacy statement hoort niet mee te schuiven met elke knop die
we op de site verzetten.

**Tekst.** Openingszin scheidt nu wat wij als verantwoordelijke doen van wat wij
in opdracht doen. Rechtenverzoeken: bericht binnen een paar dagen, afhandeling
binnen de wettelijke maand (was "binnen drie werkdagen" — een belofte die je
niet altijd waar kunt maken). Zin over geen geautomatiseerde besluitvorming.
Nieuwsbrief: opens en clicks worden gemeten, dat stond er niet. Google Analytics
naar GA4-taal — het "inkorten van je IP-adres" is Universal Analytics en klopt
niet meer. Doorgifte concreet: HubSpot in een Europees datacentrum, Vercel en
Google onder het EU-VS Data Privacy Framework. WhatsApp: Meta verwerkt daarbij
zelf ook gegevens. Klachtlink naar de juiste AP-pagina, in beide talen
gecontroleerd op status 200.

**Nog te doen, buiten deze repo:** in de GA4-property nakijken dat Google
Signals en data sharing uitstaan. De tekst zegt nu dat dat zo is.

---

## 23 augustus 2026 — alt-teksten

Bing meldde drie eventpagina's: kerstfeest, teambuilding en strategiedagen. Er
ontbrak daar geen alt-attribuut — wat er stond was `alt=""` zonder erbij te
zetten dat het om versiering gaat, en dat leest een controleprogramma als
"vergeten". Het gaat om de pictogrammen op de kaartjes van gerelateerde formats,
en om dezelfde soort beeldjes in de hulpknoppen op Techhulp. Die staan pal naast
hun eigen naam, dus leeg alt is de goede keuze — nu mét `aria-hidden`, zodat de
bedoeling er staat.

Nagelopen over de hele site met een nieuwe controle, `npm run altcheck`: 137
routes, 1008 beelden, nergens een ontbrekend alt-attribuut en nergens meer een
leeg alt zonder aria-hidden. Die controle staat er nu bij naast livecheck,
linkcheck en mobiel.

Kort daarna weer weggehaald: ik had ook beschrijvende alt-teksten toegevoegd voor
het grote pictogram naast de intro van een eventpagina. Dat pictogram rendert
nergens — alle twintig formats gebruiken de validation-variant van die sectie, en
daar zit het niet in. Dode data, dus eruit.

---

## 23 augustus 2026 — indexering: de dubbele pagina en de doodlopers

**De dubbele pagina was een tool, geen pagina.** Search Console wees
`/tools/storytelling/index.html?theme=default-en&set=happy-mad-sad-en` aan. Dat
bestand is de machinerie achter `/nl/games-tools/tools/storytelling`: elke
combinatie van `theme` en `set` levert hetzelfde HTML-bestand op, en een los
HTML-bestand heeft geen canonical. Zo krijgt Google een handvol adressen met
dezelfde inhoud en geen aanwijzing welk adres het origineel is.

Alles onder `/tools` krijgt nu `X-Robots-Tag: noindex, follow` mee. Eén regel in
`next.config.ts`, dus hij dekt ook de querystrings en de Engelse submappen.
Delen en insluiten blijft gewoon werken — alleen zoeken valt af. De echte
toolpagina's blijven indexeerbaar en houden hun eigen canonical.

Eerder al gedaan in deze ronde: canonical op `/embed/inspiratiekaarten` (de enige
pagina zonder), en `noindex` op preview-deployments van Vercel.

**Acht doodlopende adressen doorverwezen**, uit de 404-lijst:

| Adres | Gaat naar |
|---|---|
| `/nl/themagame-raven-hack` | `/nl/games-tools/ravenhack` |
| `/nl/visiestrategie2copy-1` | `/nl/events/strategiedagen` |
| `/nl/planningdesign-copy` | `/nl/events` |
| `/nl/organisatie` | `/nl/about` |
| `/nl/academy-1` | `/nl/about` |
| `/home` | `/nl/home` |
| `/cookieverklaring-nl` | `/nl/cookieverklaring` |
| `/vacature` | `/nl/about` |

Let op: er stonden al doorverwijzingen voor `/nl-organisatie`, `/nl-academy-1-1`
en `/nlplanningdesign-copy` — dezelfde adressen zónder schuine streep na "nl".
De oude site had ze allebei. Beide varianten staan er nu.

Later diezelfde dag de laatste drie erbij: `/nl/academy` en `/en/academy` naar
Over ons (waar de Academy beschreven staat) en `/uk-organisation` naar de
Engelse Over ons. Alle dertien uit de lijst geven nu een 308 naar een bestaande
pagina.

`/en` en `/en/` stonden ook in de lijst, maar die verwijzen allang door naar
`/nl/home`; dat is een oude waarneming van Google.

---

## 24 augustus 2026 — uitsnede van de hero-video op de homepage

De ontmoeting in het beeld — de gespreksbubbels met gezichten — viel er aan de
onderkant af. De hero heeft een vaste hoogte (44vw, maximaal 560px) terwijl het
filmbeeld 16:9 is; er wordt dus altijd boven- en onderlangs iets weggesneden.
Welk deel je ziet, bepaalt `objectPosition` op zowel de video als het rustbeeld.

Die stond op `center 38%`. Eerst op `53%` gezet (15% omhoog, zoals gevraagd),
daarna heeft Emilie zelf de uitsnede gekozen in een HTML-proefpagina met een
schuif: **`center 82%`**. Het beeld staat daarmee flink hoger — nauwelijks nog
plafond, de ruimte en de bubbels vullen de band. De koptekst hangt onderaan en
houdt bovenlangs lucht.

Eén regel in `components/home/HomePagina.tsx`; geldt voor zowel de Nederlandse
als de Engelse homepage, want die delen dit component.

De proefpagina zelf staat niet in het project (scratchpad, `hero-uitsnede.html`):
het rustbeeld in twee uitsnedes naast elkaar, plus een schuif van 0 tot 100 en
drie schermbreedtes. Handig patroon om te herhalen bij een volgende uitsnedevraag.

---

## 25 augustus 2026 — rustpauze in de hero-video

De bubbel die uit het cirkeltje achterin naar voren komt, keerde te snel weer om.
Emilie wilde langer rust op het moment dat ze achterin staat, zonder dat het naar
voren komen trager wordt.

Wat er in de video zit: de bron (`Downloads/welcome hero stock.mp4`, 387 frames)
is één ronde — achterin, naar voren, groeten, terug. Die is 20% vertraagd (484
frames) en daarna gespiegeld achter zichzelf geplakt. Dat spiegelen is geen
sierlijkheid maar noodzaak: het laatste beeld van de bron verschilt meetbaar van
het eerste (gemiddeld verschil 1,7 tegen 0,06–0,15 tussen opeenvolgende beelden in
de rustfase), dus kaal herhalen geeft een zichtbaar sprongetje bij elke ronde.

De bubbel staat daardoor twee keer per ronde stil achterin: op het keerpunt van de
boomerang en bij de naad naar de volgende ronde. Op allebei die plekken staat nu
**1,8 seconde stil beeld**. Alleen aan het eind zou een ongelijk ritme geven.

Emilie koos die 1,8 s uit een proefpagina met vier versies naast elkaar (0, 1,0,
1,8 en 3,0 seconden), in de hero-vorm met de 82%-uitsnede.

Nieuw bestand: `public/videos/hero-boomerang-pauze.mp4` (2,7 MB, 35,9 s), opgebouwd
uit het originele bronbestand en niet uit het al gecomprimeerde websitebestand —
dat scheelt een compressieronde. `hero-boomerang.mp4` blijft staan maar wordt niet
meer gebruikt. Het recept staat in `scripts/hero-video-pauze.mjs`, met een eigen
pauzeduur als argument.

Verder niets veranderd aan de hero: de bestaande verdonkering en de witte tekst
blijven zoals ze waren. Ik had "geen donkere filter erbij" eerst gelezen als "haal
de laag weg"; zonder die laag valt de witte subkop weg tegen de lichte vloer, dus
dat is teruggedraaid.

---

## 26 augustus 2026 — hero-video 40% lichter

Vraag van Emilie: is de video wel zo licht mogelijk? Nagemeten in plaats van
gegokt. Alle varianten opgebouwd uit dezelfde bron en vergeleken met SSIM tegen
een bijna verliesvrije ijkversie:

| variant | grootte | SSIM |
|---|---|---|
| H.264 crf 25 (wat live stond) | 2,68 MB | 0,993 |
| **H.264 crf 29 (nu live)** | **1,61 MB** | **0,988** |
| H.264 crf 31 | 1,30 MB | 0,985 |
| VP9 crf 36 (WebM) | 2,84 MB | 0,989 |
| AV1 crf 40 | 4,37 MB | 0,995 |

Twee conclusies. **H.264 wint hier**: VP9 en AV1 leverden op vergelijkbare
kwaliteit een gróter bestand, dus een WebM- of AV1-variant ernaast heeft geen zin
— dat scheelt ook een tweede bestand om bij te houden. En **crf 29 is niet van
crf 25 te onderscheiden**: op ware grootte naast elkaar gelegd, ingezoomd op de
gezichten in de bubbels, zie je geen verschil. Dit beeld staat bovendien achter
een verloop en wordt teruggeschaald naar een band van 1440 px.

Nieuw bestand `hero-boomerang-pauze-licht.mp4` (1,61 MB). De twee voorgangers
staan er nog maar worden niet meer gebruikt; die mogen weg zodra Emilie het zegt.

Het script kent nu `--crf=` en `--naam=`, met crf 29 als standaard.

**Nog open, apart van de video:** statische bestanden uit `public/` worden
geserveerd met `cache-control: public, max-age=0, must-revalidate`. Beelden en
video's worden daardoor bij elk bezoek opnieuw gecontroleerd bij de server. Een
langere cache-header voor `/videos/*` en `/images/*` scheelt terugkerende
bezoekers verkeer — maar dan moet een vervangen beeld wél een nieuwe
bestandsnaam krijgen, anders blijven mensen het oude zien. Nog niet gedaan.

---

## 26 augustus 2026 — R@venHack: Experience en Quick

Doel: bezoekers naar het grote pakket sturen. De namen zijn veranderd, de
volgorde omgedraaid en de teksten zetten de Experience nu neer als het
uitgangspunt.

### Namen en volgorde

| Was | Wordt |
|---|---|
| R@venHack XL — uitgebreide versie | **R@venHack Experience** |
| R@venHack — gewone versie | **R@venHack Quick** |

De Experience staat nu vooraan, de Quick daarnaast. In beide talen; de Engelse
teksten staan op dezelfde volgorde, want het component koppelt de Nederlandse en
Engelse kaarten op positie.

### Keuze-gedrag

Nieuw component `components/games/VersieKeuze.tsx`, dat het gedrag van
`PlatformKeuze` op de platformspagina overneemt: de Experience staat standaard
aan met het lichtgele vlak (`#FFFBEE`) en de gele rand, en beide kaarten krijgen
datzelfde vlak als je er met de muis overheen gaat.

Eén verschil met `PlatformKeuze`: daar is de kaart een `<button>`, hier een `div`
met `role="button"`. In deze kaarten staan twee links, en een link in een knop mag
niet van HTML. De div luistert zelf op klik en op Enter/spatie, en negeert kliks
die op een link terechtkomen.

### Teksten

**De afweging is de verbinding, niet de groepsgrootte.** Dat is de kern van het
verhaal, en die kreeg in de eerste versie van deze teksten te weinig aandacht.
In de Experience (90 minuten) is tijd ingebouwd om elkaar te leren kennen: samen
vastlopen, er samen uitkomen, na afloop rustig napraten. Mensen die elkaar nog
niet kenden, kennen elkaar daarna wel. Daar bovenop komen de extra scenario's,
de securitythema's en de uitgebreide nabespreking.

De Quick (60 minuten, tot 30 deelnemers) slaat precies dat verbindende deel over.
Daarom staat er expliciet bij dat hij alléén werkt voor groepen die elkaar al
goed kennen, met de doorverwijzing erachteraan: kennen ze elkaar nog niet, of wil
je dat de groep hechter naar buiten loopt dan hij binnenkwam, neem dan de
Experience.

Let op: de Quick is niet beperkt tot één team. Ook daar spelen meerdere teams
tegelijk; de grens ligt op 30 deelnemers. Het FAQ-antwoord over groepsgrootte
zegt daarom letterlijk dat de groepsgrootte niet je eerste afweging moet zijn.

Aangepast: de twee versiekaarten, de sectiekop en -intro, vier FAQ-antwoorden, de
hero-intro, de praktijkregel, de metabeschrijving, en op de overzichtspagina
Games & Tools het R@venHack-blok plus de duur-FAQ. In beide talen. Op de twee
escape-room-pagina's is een regel toegevoegd die het verschil uitlegt; daar
stonden de versies nog niet genoemd.

Kop van de sectie is nu een bewering in plaats van een keuzevraag: "De Experience
is het uitgangspunt." (was: "Kies de R@venHack die bij je team past.")

### Nog open

Het boekingsformulier kent alleen "R@venHack" als keuze, zonder versie. Wil je
sturen op Experience, dan hoort daar een veld bij (Experience standaard
voorgeselecteerd). Dat is een wijziging in HubSpot via
`scripts/create-hubspot-forms.mjs`, nog niet gedaan.

---

## 26 augustus 2026 — R@venHack-pagina: nieuw beeld, nieuwe video, verhaallijn

Een reeks aanpassingen op `/nl|en/games-tools/ravenhack`, aangeleverd door Emilie.

### Beeld

- **Nieuwe hero**: `ravenhack-hero-v2.webp`, uit `Downloads/Erik_en_Dave_HSZ_scherper.png`
  (2338×1212, teruggeschaald naar 1920 breed, 108 kB). Zichtbaar scherper dan de
  vorige, die een uitsnede van een schermafdruk was.
- **Play-knop weggepoetst** uit het crisisbeeld van stap 1. Het beeld was een
  schermafdruk van een videospeler, inclusief knop. Weggehaald door een lap uit een
  egaal zwart stuk ernaast eroverheen te zetten: `ravenhack-crisis-v2.webp`.

### Video

De oude trailer (`5g3Vv51_hR0`) is vervangen door de uitlegvideo, per taal een
eigen versie: NL `k8fXvDLmXtg`, EN `_y8yi-YgEhk`. Posters gemaakt uit de
bronbestanden in OneDrive (frame 300, de High Security Zone met deelnemers in
beeld): `ravenhack-video-poster-nl.webp` en `-en.webp`.

Let op: op de overzichtspagina Games & Tools staat de oude trailer nog.

### Van crisis naar doorbraak: één verhaal

De drie stappen lazen als drie losse voorbeelden. Nu een zichtbare verhaallijn:
een gele lijn met genummerde bolletjes (1, 2, 3) verbindt de drie kaarten, op de
telefoon rechtop tussen de kaarten in. De teksten haken nu ook aan elkaar: "Het
begint met een melding die niet klopt" → "Dan gaat je team op onderzoek" → "En
dan valt alles op zijn plek".

### Teksten en knoppen

- **Wat het is** en **Voor wie**: nieuwe teksten, aangeleverd door Emilie,
  vertaald naar het Engels.
- **Hero**: twee knoppen in plaats van één, in deze volgorde: Kostenindicatie
  (geel, naar de offerte) en Check beschikbaarheid (wit omlijnd, naar boeken).
- **Videoblok**: kopje was "In de praktijk", wordt "Bekijk de video" met als kop
  "Zo werkt R@venHack." Emilie koos die formulering; "Bekijk de trailer" stond in
  haar lijstje, maar het is geen trailer meer.
- **Tijdsindicator** op beide versiekaarten: 90 minuten en 60 minuten, als klein
  geel label naast de tag.
- **Quick, vierde kenmerk**: "Korte nabespreking" is "Sterke kick-off voor een
  teamdag of securityweek" geworden.

De naam R@venHack Quick blijft; "Light" stond in het lijstje, maar dat was
geschreven tegen de pagina van vóór de hernoeming.

---

## 26 augustus 2026 — Games & Tools: Engelse kant recht getrokken en de herhaling eruit

### Eén kapotte regel legde twee tools plat

In `public/tools/storytelling/index.html` stond een tekenreeks over twee regels
afgebroken:

```js
document.querySelectorAll('.card-header h1,
        .card-header h2')[0].textContent = data.title;
```

Dat is een syntaxfout, en die sloopt het hele inline script. Gevolg: de
Start-knop deed niets, én de tool laadde zijn thema en vragenset niet meer. Op de
Engelse pagina zag je daardoor de Nederlandse versie: de parameters
`?theme=default-en&set=happy-mad-sad-en` werden nooit uitgelezen. Eén regel
hersteld, beide klachten weg. De andere tools zijn nagelopen met een
syntaxcontrole: bingo (5 scripts), Engelse bingo (5) en de calculator (2) zijn
schoon.

### Engelse pagina

- De drie CTA's onder de gamekaarten wezen naar Nederlandse pagina's, omdat de
  `href` in de Nederlandse data stond en alleen de tools per taal werden
  overschreven. Nu heeft `links.games` een eigen Engelse lijst.
- Trailer in het R@venHack-blok is per taal: EN `hE8qs_akrxM`, met een eigen
  poster uit de Engelse bron.
- De startkaart van de inspiratiekaarten stond in het Nederlands. De titel zit in
  het beeld gebakken, dus er is een Engelse versie gemaakt:
  `public/images/tools/inspiratiekaarten/en/achterkant.webp`, met hetzelfde
  lettertype (Rajdhani Bold) en dezelfde plek en kleur als het origineel.

### CTA's opnieuw gekozen (beide talen)

Vier knoppen begonnen met "Check" en gingen naar drie bestemmingen, waaronder één
die niet klopte: "Check beschikbaarheid" leidde naar de R@venHack-pagina, waar
geen beschikbaarheid staat.

| Waar | Was | Wordt | Gaat naar |
|---|---|---|---|
| Hero | Check beschikbaarheid → | Plan een game → | boeken |
| Escape room | Check beschikbaarheid (naar R@venHack-pagina) | Check beschikbaarheid | boeken |
| Korte games | Check je format (naar contact) | Vraag vrijblijvend advies | expert-advies |
| Maatwerk | Check wat kan (naar contact) | Bespreek je idee | expert-advies |

### Herhaling eruit

De twee teaserblokken bovenaan zeiden bijna letterlijk hetzelfde als de secties
eronder. "Speelklaar of helemaal afgestemd op je thema" stond twee keer, "openen
in de browser en je scherm delen" drie keer. De teasers gaan nu over het waaróm;
de uitleg staat één keer, in de sectie zelf. De FAQ noemt het scherm delen nog
een keer, maar dat is een antwoord op een expliciete vraag.

### Verder

- Kop boven de calculator: "Voor de meeting maak je de belangrijkste keuzes."
  (was "Eerst de vraag, dan de bijeenkomst.")
- Kicker bij de trailer: "Escape Room R@venHack", gelijk aan het menulabel.
- Nieuw bovenaan: één zin die de pagina aan de rest van het verhaal knoopt, zodat
  hij minder als catalogus leest. "Een game is geen extraatje aan het eind van de
  dag. Het is de kortste weg naar wat elke bijeenkomst nodig heeft: mensen die
  samen iets doen in plaats van samen luisteren."
- Inspiratiekaarten pasten niet op één scherm: de kaart is 874×1240 en schaalt met
  `max-h-full`, maar de container had alleen een mínimumhoogte. Zonder begrensde
  hoogte heeft `max-h-full` niets om zich tegen af te zetten, dus rendeerde het
  beeld op ware grootte en moest je scrollen. Nu `height: min(64dvh, 620px)`:
  kaart plus knoppen passen op laptop, klein venster en telefoon.

---

## 26 augustus 2026 — pagina's openen bovenaan, formulier in beeld, twee punten op de i

### Pagina's openden niet bovenaan

Klikte je door naar een volgende pagina, dan stond je zo'n 89 pixels onder de
bovenkant: je moest eerst omhoog scrollen om het begin te zien. De oorzaak stond
in `app/globals.css`: `scroll-behavior: smooth` op `html`. Next scrollt bij een
paginawissel naar 0, maar met zacht scrollen wordt dat een animatie die halverwege
blijft steken.

Nu geldt zacht scrollen alleen nog als er echt een anker in de URL staat
(`html:has(:target)`). Paginawissels springen weer hard naar boven; de ankerlinks
binnen een pagina (#games, #tools) scrollen nog steeds zacht. Nagelopen op twaalf
routes via de voettekst: allemaal bovenaan.

### Formulier stond te laag

Op "Plan een gesprek" en "Plan een rondleiding" stond de rechterhelft van het
openingsblok leeg terwijl het formulier pas ná een scherm tekst begon. Het
formulier staat nu in een wit kaartje rechts naast de introtekst, meteen in beeld.
"Liever direct contact?" is de sectie eronder geworden.

Dat geldt voor beide talen en voor alle pagina's die `FormulierPagina` gebruiken:
rondleiding, boeking en kostenindicatie.

### Formulier laadde soms niet

Emilie zag soms een leeg vlak of een foutmelding, en na herladen werkte het wel.
`HubSpotForm` wachtte alleen op het `load`-event van het HubSpot-script. Stond dat
script al in de pagina van een eerdere formulierpagina, dan kan dat event al
geweest zijn voordat het component zijn luisteraar aanhaakt: die gaat dan nooit
meer af en je houdt een leeg vlak tot je herlaadt.

Drie voorzorgen toegevoegd:

1. **Pollen** (elke 200 ms) naast het `load`-event, zodat een gemist event niet
   meer uitmaakt.
2. **Foutafhandeling** op het script. Blokkeert een browser of extensie het,
   dan verschijnt een boodschap met mail- en telefoonknop in plaats van niets.
3. **Tijdslimiet** van 10 seconden met diezelfde terugval, plus een knop
   "Probeer opnieuw" die het formulier opnieuw opbouwt zonder paginaherlading.

### Homepage

- **Sterretje bij 94%.** De cijfers komen uit de CMS, en daar ontbrak het
  sterretje bij "tevredenheid na afloop" terwijl 47% en 66% het wél hadden.
  Daardoor leek dat cijfer van onszelf te komen in plaats van uit
  SpatialChat-platformdata. De code zet het sterretje nu zeker bij de drie
  SpatialChat-cijfers (94%, 47%, 66%), ongeacht wat er in de CMS staat.
- **LinkedIn-icoon in de voet.** Was een dunne omtrek uit lucide en werd niet
  herkend. Nu het officiële merkteken, diapositief: gevuld vierkant met de
  letters uitgespaard, als inline SVG (scherp op elk formaat, geen extra bestand).

### Opgemerkt, niet aangeraakt

In `scripts/seed-sanity.mjs` staat een Sanity-schrijftoken hard in de code, en dat
bestand staat in git. Volgens de afspraak in `CLAUDE.md` horen tokens alleen in
`.env.local`. Dat token kan iedereen met toegang tot de repo gebruiken om
CMS-inhoud te wijzigen; intrekken en vervangen is verstandig.

---

## 26 augustus 2026 — Sanity-schrijftoken uit de code

`scripts/seed-sanity.mjs` had het Sanity-schrijftoken hard in de code staan. Deze
repository is **openbaar** op GitHub, dus dat token lag daarmee op straat, en wel
sinds commit `2d142c6` van 8 juni 2026.

Nagemeten wat het token kan: het is nog geldig en heeft de rol Editor, oftewel
lees- én schrijftoegang tot alle datasets van project `u17ha8px`. Iemand met dat
token kan dus de teksten, cijfers en cases op de homepage aanpassen of wissen.

Het script leest het token nu uit `.env.local` (dat bestand staat in .gitignore),
net als `scripts/create-hubspot-forms.mjs`. Ontbreekt het, dan stopt het script
met uitleg in plaats van een onbegrijpelijke fout.

**Wat de code níét oplost: het token blijft in de git-historie staan.** Wie de
repo kloont kan het daar terugvinden. Het intrekken van het token is dus de
eigenlijke oplossing, en dat kan alleen Emilie doen:

1. sanity.io/manage → project `u17ha8px` → API → Tokens
2. het token met de naam **"Seed script"** verwijderen
3. een nieuw token aanmaken met dezelfde rol (Editor) en dat in `.env.local`
   zetten als `SANITY_API_TOKEN`

Zolang stap 2 niet gebeurd is, verandert er feitelijk niets aan het risico.

De rest van de historie is nagelopen op dezelfde soort lekken. De treffers op
`pat-eu1-` (HubSpot) en `service_role` (Supabase) waren vals alarm: een
voorbeeldregel in een commentaar en een uitleg in een SQL-migratie. Er staan geen
`.env`-bestanden in de historie, alleen `.env.example`.

---

## 26 augustus 2026 — Events: nieuwe hero, scherpere CTA's en twee embed-bugs

### Nieuwe hero-video

`events-hero-v2.mp4` uit `Downloads/files (2)/MM_hero3_loop_v3.mp4`. Alleen
gecomprimeerd (CRF 29, faststart, geen audio): 2,7 MB → 1,26 MB, en daarmee
lichter dan de vorige hero. De poster komt uit hetzelfde bestand, dus still en
video sluiten naadloos op elkaar aan. Geladen via `HeroAchtergrond`, dus niet op
de telefoon, niet bij "verminder beweging" en niet bij databesparing.

Onderweg een crossfade-loop gebouwd en weer weggegooid: de bron loopt zelf al
rond en de crossfade maakte de naad juist slechter. Eerst kijken of het nodig is.

**Uitsnede `center 70%`.** Op brede schermen wordt de band naar verhouding het
meest bijgesneden (560px hoog van een beeld van 1080), en met `center` viel de
onderste rij bolletjes weg. Op 70% staan alle zes in beeld, op 1100, 1440 en
1920 px gecontroleerd. Het verloop links is iets sterker gezet (van black/55 naar
black/70), want dit beeld is lichter dan het vorige en de subkop viel weg tegen
het gras.

### Events-pagina

- Hero-CTA: "Expert advies" wordt **"Advies op maat"** (EN: "Tailored advice").
- Onder het bolletjesoverzicht staat nu een slotregel met knop **Plan een
  gesprek**, voor wie zijn format er niet bij ziet staan.
- FAQ: "Wat is een online event?" was te generiek en is vervangen door **"Wat is
  het verschil tussen een webinar en een online event?"**, in beide talen.
- **"Bekijk alle events"** in de CTA-balk deed niets op de eventspagina zelf: het
  was een link naar de pagina waar je al stond. `CTABlock` kent nu een
  `eventsHref`, en daar geven we `#formats` mee.

### Alle twintig formatpagina's

- **"Vrijblijvende offerte" was geen knop.** Het stond als `<span>` met
  `cursor-default`: het zag eruit als de primaire CTA van twintig pagina's, maar
  je kon er niet op klikken. Nu een link naar de kostenindicatie (`/nl/offerte`,
  EN `/en/quote`).
- **Koppeltekens in de bodytekst.** Tien plekken waar een `-` stond op de plek van
  een gedachtestreepje, vervangen volgens de stijlgids: komma, dubbele punt of
  een nieuwe zin, afhankelijk van wat het streepje deed.
- **Randvoorwaarden-koppen nagelopen, alle twintig.** Die kloppen al: de zes
  het-woorden (bedrijfsfeest, kerstfeest, teamuitje, netwerkevent, webinar, World
  Café) hebben "geslaagd", de veertien de-woorden "geslaagde".

### Twee embed-bugs, één symptoom

Emilie zag de agenda pas na het verversen, en bij "Plan een gesprek" soms een
foutmelding. Het waren twee losse oorzaken:

1. **De agenda.** HubSpots `MeetingsEmbedCode.js` zoekt alleen bij het laden van
   het script naar `.meetings-iframe-container`. Kwam je via een link binnen de
   site, dan stond dat script er al van een eerdere pagina en draaide het niet
   opnieuw: de agenda werd nooit opgebouwd. Het script wordt nu bij elke montage
   verwijderd en opnieuw geplaatst, zodat het altijd een verse ronde maakt.
2. **Het formulier.** Diezelfde agenda-embed zet óók `window.hbspt`, maar zonder
   `forms`. `HubSpotForm` keek alleen of `hbspt` bestond, dacht dus dat het
   formulierenscript er al was, en klapte eruit op `hbspt.forms.create`. Precies
   wanneer je van "Plan een rondleiding" doorklikte naar "Plan een gesprek". Nu
   wordt op `hbspt.forms.create` zelf gecontroleerd.

Nagelopen in vier stappen achter elkaar: rondleiding via een klik, daarna
gesprek, dan terug naar de rondleiding, en tot slot gesprek vanaf de
eventspagina. Alle vier laden nu meteen, zonder verversen en zonder JS-fouten.


---

## 26 augustus 2026 — zes formatpagina's nagelopen

**Townhall.** "Het ontwerp bepaalt de richtlijn en mate van participatie" liep
niet en is nu "Een doordacht ontwerp bepaalt waar, wanneer en hoe deelnemers
bijdragen." Het verschil tussen townhall en all-hands stond alleen op de
all-handspagina; die uitleg staat er nu ook, en op allebei de pagina's benoemt
hij nu beide kanten. Kort: bij een townhall staat het gesprek centraal, bij een
all-hands het gezamenlijke beeld.

**All-hands.** "technische ondersteuning van alle aanwezigen" is "voor alle
aanwezigen" geworden.

**ALV.** De kop stond al met hoofdletters, ook live; daar was niets aan te doen.
Wel een extra vraag toegevoegd aan het uitklapmenu, over leden die niet online
kunnen of willen meedoen. Dat is de vraag die bij vrijwel elke vereniging op tafel
komt en die bepaalt of de vergadering rechtsgeldig verloopt.

**Teambuilding.** De pagina sprak zichzelf tegen: kop en titel zeiden
teambuilding, de body en een FAQ zeiden teamontwikkeling, en weer een andere FAQ
legde uit dat het twee verschillende dingen zijn. Nu overal teambuilding, de
hoofdterm waar mensen op zoeken. De FAQ die het verschil uitlegde is vervangen
door "Blijft het bij gezelligheid, of levert het ook iets op?": dezelfde inhoud,
maar zonder de eigen paginanaam te ondergraven. En-dash in de FAQ vervangen.

**Trainingen & workshops.** Titel en overzichtskaart staan nu in het meervoud, wat
aansluit bij de ondertitel en bij de inhoud. De kop noemde twee dingen die niemand
verwacht ("geen computerprogramma of digitaal college"); die is vervangen door
"Online training? Een leerervaring vraagt meer dan alleen kennisoverdracht", met
de bijbehorende body.

**Brainstorm.** Kaart en H1 heetten anders; de kaart heet nu ook "Online
brainstormsessie" (de slug blijft brainstormen). De meta description was de
kaarttekst; nu Emilies zin als opening, aangevuld tot 158 tekens met de gegevens
die er al waren. De zes denkhoeden van De Bono stonden alleen in de alt-tekst van
het hero-beeld en staan nu ook in de tekst zelf.

**Sitebreed.** "Meestal valt het mee" stond in de brainstorm-FAQ en op de
offertepagina. Vervangen door "Vraag vooral een vrijblijvende offerte aan om een
beeld te krijgen van de kosten." Verder stond in het blok met gerelateerde
formats nog een los koppelteken in "Misschien past dit ook - of zelfs beter"; dat
is een komma geworden. Daarmee staat er op geen van de zes pagina's nog een los
koppelteken.

**Opgemerkt, niet gedaan:** de Engelse eventpagina's hebben geen eigen meta
description. /en/events/brainstorm valt terug op de algemene sitebeschrijving.


---

## 26 augustus 2026 — zes formatpagina's uit de tweede ronde

**Teamuitje.** Nieuwe slotzin bij de internationale case, en een FAQ die het
verschil met het bedrijfsfeest uitlegt: teamuitje is kleiner en draait om samen
iets beleven, bedrijfsfeest is groter en feestelijker. Met de raad om bij twijfel
naar groepsgrootte, doel en sfeer te kijken.

**Netwerkevent.** Het kostenantwoord liep dood; het eindigt nu net als de andere
formats met de uitnodiging om een vrijblijvende offerte aan te vragen.

**Onboarding.** Zes van de twaalf FAQ-antwoorden zeiden niets. Herschreven:
software (met SpatialChat als voorkeur en waarom), hybride, kosten, managers,
benodigdheden, kennismaking en opnames. Verder: "onboardingsprogramma's" heeft nu
de juiste spelling, het woord cohort is overal vervangen door groep, de
apostrofs zijn gelijkgetrokken (recht, de norm in dit bestand) en de kaart heet
"Online onboarding" in plaats van "Online onboardingdag". De meta description is
teruggebracht tot 153 tekens.

**Bedrijfsfeest.** De vraag "moeten deelnemers iets installeren?" werd niet
beantwoord; nu begint het antwoord met "Nee" en staat de reden erbij. Het label
"MKB" in de praktijkvoorbeelden is "Online mid year" geworden, met het
middelgrote bedrijf verwerkt in de tekst eronder.

**Kerstfeest.** Het menu zei "Virtuele kerstborrel" en de pagina "Online
kerstfeest"; het menu volgt nu de pagina. De intro begon ook met kerstborrel en
zegt nu kerstfeest. In het antwoord over groepsgrootte staat nu het aantal
(10 tot 500), want dat is wat AI-tools overnemen. Randvoorwaardenkop en meta
description waren al in orde.

**Community.** Vier namen voor één format teruggebracht tot één: menu en kaart
heten nu "Online community", en dat is ook wat als kop op de pagina staat (de
titel houdt "opbouwen" voor de zoekmachine). Het bereik is nu een getal:
25-500 leden per bijeenkomst, met uitleg in de FAQ over wat er boven de 500
gebeurt. De claim dat SpatialChat "als enige" websites en meetings combineert is
vervangen door wat het platform hier doet: spontane ontmoetingen mogelijk maken.
En het antwoord op "event of traject" verwijst nu naar de mogelijkheid van een
eigen plek zoals een virtueel kantoor.

**Sitebreed.** Dertien gedachtestreepjes uit de eventteksten en vier uit de
voettekst vervangen door een komma, dubbele punt of nieuwe zin. De stijlgids
schrijft dat voor; de voettekst staat op elke pagina, dus dat scheelt op de hele
site.

**Niet gedaan:** in de Engelse teksten staat "cohort" nog. Daar is het een gewoon
woord in trainingscontext, dus dat heb ik laten staan.


---

## 26 augustus 2026 — netwerkevent: uitsnede gecontroleerd, alt-tekst hersteld

De uitsnede zelf is in orde. Nagekeken op 1100, 1440 en 1920 px: het laptopscherm
met de SpatialChat-ruimte blijft op alle drie volledig in beeld, de handen ook, en
de tekstkolom links blijft leesbaar. Er is dus geen eigen crop of donkerlaag nodig.

Wel klopte de alt-tekst niet. Die beschreef "een virtuele bar waar deelnemers
elkaar informeel ontmoeten", terwijl het beeld een vrouw achter haar laptop toont
met een virtuele ruimte vol planten op het scherm. Dat is iets anders dan wat er
staat, en het is precies waar een screenreader op afgaat. In beide talen vervangen
door een beschrijving van wat er werkelijk te zien is.

Ter controle `npm run altcheck` gedraaid: 1008 beelden, allemaal met alt of als
versiering aangemerkt.


---

## 26 augustus 2026 — dialoog, inspraak, kennis en netwerk

**Bewonersparticipatie.** De langste H2 van de site (24 woorden, twee zinnen,
tweede zin wij-taal) is nu "Goede bewonersparticipatie begint met een breed
gesprek." De claim over diversiteit is niet verdwenen maar verhuisd naar de tekst
eronder, waar hij thuishoort. Verder: 'vote with your feet' staat nu tussen
dubbele aanhalingstekens, het hybride-antwoord zegt eindelijk iets (de valkuil
van een zaal met een paar mensen thuis), en de meta description volgt nu het
model van de webinar-pagina: eerst een bewering, dan de cijfers.

**De Roosendaal-koppeling.** Gemeente Roosendaal stond met de quote "Online
participatiesessie" alleen in de carrousel op het overzicht, terwijl dat precies
dit format is. Die getuigenis staat nu ook op de bewonersparticipatie-pagina
zelf, onder de praktijkvoorbeelden. Nieuw veld `getuigenis` op een event: vul de
naam van een klant in en de quote verschijnt. Zo kan hetzelfde bij andere formats.

Onderweg liep dat stuk: de lijst met getuigenissen stond in een client-component,
en dan krijgt een servercomponent daar geen echte array uit maar een verwijzing
(`SLIDES.find is not a function`). De gegevens staan nu in `lib/getuigenissen.ts`
en worden door beide kanten gelezen.

**Klankbordgroep.** Spatiefout "klankbord opzet" hersteld. De alt-tekst ging over
CO2-besparing, wat in het voorbeeld nergens terugkomt; die beschrijft nu de
sessie zelf. En de privacy-randvoorwaarde van de focusgroep staat er nu ook: wat
wordt vastgelegd, wat wordt gedeeld en met wie.

**Focusgroep.** Het software-antwoord noemt nu platforms en de voorkeur voor
SpatialChat, met de reden erbij. De en-dash in de groepsgrootte is een komma
geworden. En de vergelijkende vraag staat er nu ook in spiegelbeeld: het verschil
tussen een focusgroep (inzicht ophalen) en een klankbordgroep (draagvlak en
correcties ophalen). Dat patroon staat nu op vier plekken en werkt goed voor
antwoordmachines: het beantwoordt precies de vraag die mensen stellen.

**World Café.** Intern jargon uit de alt-tekst ("de MMs") vervangen door een
beschrijving van wat er te zien is. Het buzzword-antwoord over "sterke alignment
in de te gebruiken tooling" is vervangen door Emilies formulering. En de
meervoudsvorm is nu World Cafés.

**Webinar.** De kromme zin over registratie is vervangen. "Leads die echt iets
opstaken" is "Waardevolle leads als resultaat" geworden. Meta description en kop
bewust ongemoeid gelaten: die zijn goed.

**Conferentie.** De alt noemde "CoP24", wat leest als de VN-klimaattop. Nu
voluit: de EU Community of Practice on Peace Mediation, editie 2024.

**Netwerkevent.** Het kostenantwoord was in de vorige ronde al afgerond.


---

## 26 augustus 2026 — blog: "Spel is nergens goed voor. Dat is erg nuttig."

Nieuw artikel in de rubriek Meetingontwerp, over waarom spel werkt in een
bijeenkomst en waarom die laag online als eerste wegvalt. Tekst van Emilie,
onveranderd overgenomen op wat kleine redactie na: een paar zinnen vloeiender
gemaakt en "meeten" vervangen door "vergaderen".

Beeld: `Downloads/Spatial magic spel.png` (3200x1800) naar
`public/images/blog/spel-is-nuttig.webp`, 1400 px breed, 104 kB.

**Nieuw bloktype `cta`.** Het artikel eindigt met een verwijzing naar Games &
Tools. Alinea's in de blog renderen platte tekst, dus een link in de lopende
tekst werd een kale URL. Er is nu een bloktype dat een alinea met een echte knop
toont; beide taalversies van de artikelpagina kennen het. Handig voor elk
volgend stuk dat ergens naartoe wijst.

Nog niet vertaald: dit stuk staat alleen in het Nederlands.

Engelse versie erbij: `/en/blog/play-is-good-for-nothing`. Het taalpaar staat in
`lib/talen.ts`, want de schakelaar werkt met een vaste lijst; zonder die regel
biedt hij op een nieuw artikel geen vertaling aan. Beide kanten gecontroleerd.


---

## 26 augustus 2026 — R@venHack-hero: scherper, en waarom niet met het nieuwe bestand

Emilie leverde `Downloads/Erik_en_Dave_HSZ_hero.webp` aan (2560x1327) als
scherpere versie. Nagemeten: dat bestand heeft meer pixels maar mínder detail.
Het is namelijk al stevig gecomprimeerd, 139 kB voor 3,4 megapixel. Op dezelfde
weergavebreedte scoorde het onder wat er al stond, en dat was op ware grootte ook
te zien: zachtere letterranden, minder textuur in de gezichten.

Wat wél hielp, in twee stappen:

1. **De oorspronkelijke PNG op eigen resolutie.** `Erik_en_Dave_HSZ_scherper.png`
   is verliesvrij en 2338 px breed; wij schaalden hem eerder terug naar 1920.
   Nu op eigen formaat als `ravenhack-hero-v3.webp` (180 kB).
2. **Kwaliteit 90 geprobeerd en weer teruggedraaid.** Next hercomprimeert elk
   beeld zelf, en op de standaard 75 wordt dit beeld korrelig rond de
   neonletters en de cijferpatronen. Op 90 was dat zichtbaar beter, maar de hero
   ging van 66 naar 99 kB (AVIF) en dat is nu juist het beeld dat de laadtijd van
   die pagina bepaalt. Emilie koos snelheid boven scherpte, dus staat de
   kwaliteit weer op de sitebrede 75 en is `qualities` uit `next.config.ts`
   gehaald.

De winst zit dus in de bron: een verliesvrij bestand op eigen resolutie in plaats
van een al gecomprimeerde versie. De uitgeleverde hero blijft 66 kB.

Wat níét meer helpt: `deviceSizes` in `next.config.ts` gaat tot 1920. Op een
retina-scherm wordt de band daarboven opgerekt. Een grotere maat toestaan zou
scherper zijn, maar dat raakt élk beeld op de site en dus de laadtijd. Niet
gedaan, wel het noemen waard.


---

## 26 augustus 2026 — cache, sleutelcontrole en twee kleine dingen

**Beelden en video's werden nooit bewaard.** Alles uit `public/` kwam binnen met
`max-age=0, must-revalidate`: een terugkerende bezoeker vroeg elk beeld opnieuw
op. Nu staan video's op een jaar met `immutable` (die vervangen we zelden, en dan
onder een nieuwe naam) en beelden op dertig dagen, zodat een vergissing zichzelf
binnen een maand herstelt. Pagina's blijven onveranderd vers.

De voorwaarde die hierbij hoort: **een vervangen beeld krijgt een nieuwe
bestandsnaam.** Dat stond al als afspraak in het beeldregister; nu hangt er ook
echt iets vanaf.

**Sleutelcontrole vóór elke commit.** `scripts/sleutelcheck.mjs` kijkt naar wat
er klaarstaat en herkent Sanity-tokens, HubSpot private app tokens, JWT's zoals de
Supabase service role, AWS- en Google-sleutels en privésleutels. Wordt er iets
gevonden, dan gaat de commit niet door en staat er bij welk bestand en welke
regel. Voorbeelden met `...` of `<placeholder>` worden overgeslagen.

De haak staat in `.githooks/pre-commit`, in git dus, en wordt aangezet met
`git config core.hooksPath .githooks` (eenmalig per computer, hier al gedaan).
De hele repo nakijken kan met `npm run sleutelcheck`; die gaf bij invoering
298 bestanden en geen treffers. Getest met een nepsleutel: de commit werd
tegengehouden.

**`docs/waar-staat-wat.md` staat nu in git.** Dat bestand was untracked, dus het
liep niet mee in de back-up en was niet terug te draaien.

**Engelse eventpagina's:** loos alarm van mijn kant. Alle twintig hebben een eigen
meta description. Ik had eerder `/en/events/brainstorm` bekeken, maar die pagina
heet `brainstorm-session`; ik keek dus naar een 404. Alle twintig nagelopen.


---

## 26 augustus 2026 — adviesformulier: logo, kortere labeltekst en een bijlage

Drie wijzigingen in **MM Website — Vrijblijvend advies** en de Engelse tegenhanger
**Free advice**:

1. Het MeetingMasters-logo staat nu bovenaan het formulier. Het opent soms los,
   en dan was er geen enkele verwijzing naar de afzender. Hergebruikt beeld uit
   de bestandsmanager van HubSpot, hetzelfde dat het nieuwsbriefformulier al
   gebruikte.
2. Het berichtlabel is "Vraag of bericht" geworden (Engels: "Question or
   message"), zonder het "Je" ervoor.
3. Daaronder staat een uploadveld voor een bestand of foto. Nieuwe
   contacteigenschap `mm_bijlage` (type string, fieldType file), zodat de bijlage
   bij het contact terechtkomt.

Doorgevoerd met het nieuwe `scripts/hubspot-advies-bijwerken.mjs`, dat eerst een
reservekopie wegschrijft naar `schermafdrukken/hubspot-backups/` en veilig
opnieuw te draaien is. Nagekeken op de live site, in beide talen: logo zichtbaar,
label goed, uploadveld werkt.

**Opgemerkt, niet aangeraakt:** onder het formulier staat een reCAPTCHA-badge met
de melding "This reCAPTCHA is for testing purposes only". Dat wijst op testsleutels
in de HubSpot-instellingen; dan beschermt hij niet echt tegen spam. Zie de
formulierinstellingen in HubSpot.


---

## 26 augustus 2026 — adviesformulier: knop, disclaimer en bedanktekst

Vervolg op de wijziging van eerder vandaag, opnieuw in beide talen:

- **Bedanktekst**: "Dank je wel. We komen uiterlijk binnen twee dagen bij je
  terug. Meer haast? Bel ons even: 020 239 03 13." Het nummer staat met spaties,
  zoals overal op de site.
- **Disclaimer** van 14px naar 11px, gelijk aan de labels erboven. Hij trok
  eerder meer aandacht dan de vragen zelf.
- **Verzendknop**: "Verstuur" (Engels: "Send") in MM-geel met donkere letters,
  in plaats van "Stuur mijn vraag" in HubSpot-oranje.

Nagemeten op de live site: knop `rgb(238, 190, 61)` met tekst `rgb(45, 45, 45)`,
disclaimer 11px, in beide talen.

**Alle verwijzingen nagelopen.** Het formulier-ID is niet veranderd, dus elke
insluiting wijst vanzelf naar de bijgewerkte versie. Ter controle: in HubSpot
bestaan er precies twee advies-formulieren (NL en EN, geen van beide gearchiveerd),
in de code wordt alleen `HUBSPOT_FORMS.advies` gebruikt op `/nl/expert-advies` en
`/en/expert-advice`, en alle 40 links op de site die over advies of een gesprek
gaan wijzen naar die twee pagina's. Er is dus geen oude versie meer in omloop.


---

## 26 augustus 2026 — adviespagina: nieuwe opening, één tekstgrootte

De linkerkolom van `/nl/expert-advies` en `/en/expert-advice`:

- **Nieuwe kop en opening.** "Even sparren maakt veel verschil." met daaronder
  de tekst van Emilie. De oude kop ("Houd je idee vrijblijvend tegen ons aan.")
  is vervallen, want haar tekst begon met een eigen kop.
- **Eén tekstgrootte.** De tweede alinea stond op `text-base` en de eerste op
  `text-lg`; dat las als een voetnoot in plaats van als doorlopende tekst. Nu
  allebei `text-lg` (18 px).
- **De directe routes staan nu bij de tekst.** Het blok "Liever direct contact?"
  met mail, telefoon en WhatsApp is uit de sectie onder het formulier gehaald en
  staat in de linkerkolom. De agenda is daar gewoon een vierde optie geworden,
  zonder eigen tussenzin. De sectie eronder is daarmee vervallen, dus de pagina
  is een blok korter.
- **De tweede alinea is één zin**: "Stel je vraag via het formulier of plan gewoon
  een gesprek." 

Het gedachtestreepje in de tweede alinea is meteen een dubbele punt geworden,
zoals de stijlgids voorschrijft.

**Bestandsveld niet aangeraakt.** "Bestand kiezen" en "Geen bestand gekozen" zijn
tekst van de browser zelf (16 px, Helvetica Neue), binnen het venster dat HubSpot
om het formulier zet. Onze opmaak komt daar niet bij, en de Forms API kent geen
instelling per veld. Het had gekund door het formulier zonder dat venster te laten
renderen, maar dan verandert het uiterlijk overal; Emilie koos ervoor het te
laten zoals het is.


---

## 26 augustus 2026 — rondleidingsformulier en één script voor alle formulieren

Het rondleidingsformulier heeft in beide talen dezelfde behandeling gekregen als
het adviesformulier: logo bovenaan, disclaimer op 11px, knop in MM-geel. De knop
heet nu "Plan een rondleiding" (Engels: "Book a tour"), in plaats van "Plan mijn
rondleiding →".

Nieuw daarboven: **"Waarover wil je meer weten en zien?"** met vijf aankruisbare
opties (Algemeen, Events, Virtueel kantoor, Escape Room, Anders), meerdere keuzes
mogelijk. Nieuwe contacteigenschap `mm_interesse`.

Onderweg liep dat één keer stuk: de CRM-API noemt dit veldtype `checkbox`, de
Forms-API `multiple_checkboxes`. Staat nu in `docs/hubspot-forms.md`.

**Eén script voor alle formulieren.** `hubspot-advies-bijwerken.mjs` is opgegaan
in `hubspot-formulieren-bijwerken.mjs`, dat per formulier beschrijft wat er moet
staan: labels, extra velden vóór of ná een bestaand veld, knoptekst en
bedanktekst. Stijl en logo staan er één keer in, dus alle formulieren blijven
gelijk. Herhaalbaar: staat iets al goed, dan verandert er niets.

**Belangrijk om te weten:** het rondleidingsformulier staat niet op de site.
`/nl/demo` en `/en/demo` tonen de agenda. Het formulier is dus bijgewerkt, maar
een bezoeker ziet het alleen via een gedeelde link.
