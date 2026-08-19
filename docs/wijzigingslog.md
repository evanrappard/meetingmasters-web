# Wijzigingslog — MeetingMasters website

Centraal overzicht van álle ontwikkelingen aan de site: **tekst**, **beeld** en
**componenten/code**. Dit is de plek om te kijken als je wilt weten *wat er is
veranderd, wanneer, door wie, en of het al live staat.*

> Bijgehouden door: Claude Code (de bouwer).
> Laatst bijgewerkt: 2026-08-19

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
