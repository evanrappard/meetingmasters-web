# Technologie-sectie — herinrichting

Werkdocument voor de verbouwing van de technologiepagina's. Bevat de besluiten,
het archief van bestaande teksten (zodat er niets verdwijnt) en de voorzet voor
de nieuwe tools-pagina.

> Opgesteld 16 augustus 2026 · **gebouwd en afgerond 17 augustus 2026** (t/m `d3caf83`)

---

## 1. Besluiten (Emilie, 16 aug 2026)

| # | Besluit |
|---|---|
| 1 | Er komt een eigen pagina: **Directe hulp bij online meetings**. |
| 2 | **Het telefoonnummer komt níét prominent in beeld.** Telefonische support wordt niet aan elke klant verkocht. Het nummer mag dieper in de pagina staan, niet in de hero. |
| 3 | De FAQ gaat op in de hulppagina, **voor zover het helpdesk-vragen zijn**. Bij het bouwen worden ze nog een keer nagelopen en aangevuld. |
| 4 | Op de hulppagina komt een **disclaimer**: opgesteld op basis van onze ervaring; het loont soms om bij de toolleverancier zelf te kijken, want die heeft de nieuwste versie. Dit dekt de belangrijkste vragen op de meest gebruikersvriendelijke manier. |
| 5 | Menu: **"Tech hulp"** als kopje, met de hulppagina meteen als landingspagina. Geen eindeloos uitklapmenu. |
| 6 | Knop in de hero van de hulppagina: **"Meer weten per tool"**. |
| 7 | Onderaan de hulppagina een blok **"Meer weten per tool"** dat doorlinkt naar een aparte tools-pagina. |
| 8 | Die tools-pagina beschrijft **alle** tools die we gebruiken, met logo — inclusief Miro, StreamAlive, Kahoot en Mentimeter. Uitbreidbaar. |
| 9 | **SpatialChat houdt een eigen uitgebreide pagina.** |
| 10 | **Onderscheid platforms / tools.** De vier platforms — waar de bijeenkomst plaatsvindt — krijgen een ruime beschrijving. De tools die we ermee combineren (Miro, Mentimeter, Kahoot, StreamAlive, VoteCompany) een korte: die kies je niet, die zetten wij erbij. |
| 11 | **De cijfers van de platforms-pagina vervallen.** Ze bestaan alleen voor SpatialChat en staan al op de home. |
| 12 | **VoteCompany hoort bij de tools**, omdat er traceerbaar en notarieel bruikbaar mee gestemd kan worden. |
| 13 | **Hulppagina: eerst het symptoom, dan de tool.** Na de eerste klik volgt "Waar vindt je meeting plaats?", zodat het antwoord meteen to the point is. Met een knop **"Dat weet ik niet"** die uitlegt hoe je het aan de link in de uitnodiging ziet — én je gewoon door laat gaan met een algemeen antwoord. Nooit doodlopend. |
| 14 | Er komen later nog **drie tools bij voor opnames en transcripten**. |

### Waarom die tools-pagina er komt

Twee redenen, en de tweede is de belangrijkste:

1. Laten zien met welke techniek we werken en dat we die zelf beheersen.
2. **Vindbaarheid.** Wie zoekt op "Teams" of "Mentimeter" kan zo bij MeetingMasters
   uitkomen. Daarna kunnen we uitleggen dat ze eigenlijk naar SpatialChat willen.

Dat tweede doel bepaalt de opzet: elke tool krijgt genoeg eigen tekst om op te
kunnen ranken, en elke tool eindigt met een brug naar wat wij aanraden.

---

## 2. Nieuwe structuur

> Bijgesteld 17 aug 2026: de oude hub `/nl/technologie` is óók opgeheven, net als
> de losse pagina's voor Zoom, Teams en Zoom Events. Alles verwijst door naar
> `/tools`, dat in het menu **Meeting Platforms** heet.

| Route | Rol |
|---|---|
| `/nl/technologie/hulp` | **Directe support voor je online meeting** — landing onder "Tech hulp" |
| `/nl/technologie/tools` | Meeting Platforms: platforms, tools en FAQ — ook voor vindbaarheid |
| `/nl/technologie/spatialchat` | Het eigen, uitgebreide verhaal |

Op te heffen en door te verwijzen: `platforms`, `hoe-het-werkt`, `helpdesk`,
`faq`, `support`. Hun inhoud is hieronder bewaard.

> ⚠️ **Niets weggooien.** Bij het opheffen van een route wordt de tekst eerst
> hierheen overgezet. Alles staat bovendien in git (commit `e6ce92a` en eerder),
> dus ook zonder dit document is niets definitief weg.

---

## 3. Archief — wat er nu op de pagina's staat

Per pagina de koppen en de bruikbare tekstblokken, met de bestemming.

### `/nl/technologie` (hoofdpagina) → blijft, wordt de kiespagina

**Koppen:** De tool volgt het doel. Kies een platform dat bij je past. · Techniek
is er om connectie te ondersteunen. · Er zijn er veel. Dit zijn de drie soorten
die tellen. · De vorm van je ruimte bepaalt hoe mensen zich gedragen. · Welke
tool wanneer? · Tools die interactie versterken. · Je staat er nooit alleen voor.

**Behouden — de platformomschrijvingen:**

| Platform | Tag | Omschrijving |
|---|---|---|
| Teams | Intern · office-tool | De vertrouwde tool voor dagelijks intern overleg — al aanwezig in je Microsoft-omgeving. |
| Zoom | Meeting-tool | Kwalitatief hoogwaardig en stabiel. De betrouwbare keuze voor overleg en samenwerking. |
| Zoom Events | Events & congressen | Voor grote bijeenkomsten en congressen: registratie, meerdere sessies en schaal. |
| SpatialChat | Proximity-platform | Van levensecht persoonlijk contact tot webinars — je beweegt vrij en loopt spontaan bij elkaar aan. |

**Behouden — de drie soorten tools:**

- **Standaard vergadertools** — "Vertrouwd, vierkant, prima samenwerking." De
  bekende grid-tools voor overleg en samenwerken. Iedereen in een vakje,
  uitstekend voor de dagelijkse meeting. *(Zoom · Teams — tot 300 deelnemers)*
- **Event-platforms** — "Webinar-based, gebouwd voor uitzendingen." Voor grote
  bijeenkomsten en congressen: registratie, meerdere parallelle sessies en een
  professionele uitstraling. *(Zoom Events — vanaf 300 personen)*
- **Proximity-platforms** — "Immersief, lifelike, vrij bewegen." Van levensecht
  persoonlijk contact tot webinars. Je beweegt zelf door de ruimte en loopt
  spontaan bij elkaar aan. *(SpatialChat — tot 600 deelnemers)*

### `/nl/technologie/platforms` → op in de hoofdpagina

**Koppen:** Niet elk platform doet hetzelfde. · Vier platforms, vier doelen. ·
Waarom MeetingMasters voor SpatialChat kiest.

**Bewaren — de SpatialChat-argumenten (verhuizen naar de SpatialChat-pagina):**

- **Proximity-based video** — Je hoort en ziet mensen naarmate je dichter bij ze
  staat. Precies zoals in het echte leven. Dit verandert fundamenteel hoe
  deelnemers zich gedragen in een online ruimte.
- **Geen download vereist** — SpatialChat werkt volledig in de browser (Chrome,
  Edge of Firefox). Deelnemers klikken op een link en zijn er. Geen
  IT-installatie, geen versieconflicten.
- **Volledig aanpasbaar** — Achtergronden, kamers, sfeer en indeling zijn volledig
  op maat te maken. Je kantoor, je event, je identiteit.

**Bewaren — de cijfers** (herkomst nog te controleren vóór hergebruik): meer
betrokkenheid vs. regulier videobellen · hogere opkomst en aanwezigheid ·
tevredenheid na afloop · gebruikers in meer dan 90 landen.

### `/nl/technologie/hoe-het-werkt` → op in de SpatialChat-pagina

**Koppen:** Hoe SpatialChat werkt. · Zes stappen van link naar gesprek. · Wat je
nodig hebt. · Vier soorten ruimtes.

Dit is instructie-inhoud. De zes stappen en "wat je nodig hebt" zijn ook bruikbaar
op de hulppagina, als voorbereidings-blok.

### `/nl/technologie/helpdesk` → op in de hulppagina

**Koppen:** Iets werkt niet? · Live hulp via onze digitale assistent.

De pagina kondigt een assistent aan die er nog niet is: *"Binnenkort staat hier
een assistent die je direct kan helpen bij technische vragen."* Dat is de
chatbot — zie de openstaande punten.

### `/nl/technologie/faq` → op in de hulppagina

**Kop:** Loopt er iets vast? Rustig — hier vind je snel het antwoord.

76 vragen, verdeeld over vier categorieën (link, audio, video, overig) en per
tool. Component: `components/ui/TechFaq.tsx`, met zoekbalk en filter — **die blijft**.

De toon is de kracht: *"Geen paniek."* · *"Rustig aan, dit is meestal zo
opgelost."* · *"Je bent niet de enige die dit overkomt — we zijn het gewend."*
Die stem vasthouden bij het aanvullen.

Supportnummer staat als constante bovenin: `const SUPPORT = "+31 6 33 03 47 07"`.
Let op besluit 2: níét prominent.

### `/nl/technologie/support` → sectie op de hoofdpagina

**Koppen:** Van planning tot uitvoer staan wij naast je. · Drie manieren waarop je
op ons kunt bouwen. · Support in elke fase van je bijeenkomst.

**Behouden — de drie vormen van support:**

- **Voorbereiding** — Duidelijke handleidingen, een technische doorloop en een
  testmoment vooraf.
- **Telefonische support** — Een half uur voor aanvang en tijdens de bijeenkomst
  direct bereikbaar. *(let op: niet standaard bij elke klant)*
- **Live in de meeting** — Een host of producer is er live bij, zodat je je op de
  inhoud richt.

### `/nl/technologie/spatialchat` → blijft, wordt uitgebreid

**Koppen:** Videobellen dat voelt als echt ontmoeten. · Niet een betere
vergadering. Een andere ervaring. · Alles wat een live bijeenkomst nodig heeft. ·
Eén platform, meerdere formats. · Wij zijn de Nederlandse partner van SpatialChat.

### `/nl/technologie/[tool]` → blijft

Sjabloon voor Zoom, Teams en Zoom Events. Koppen: De belangrijkste redenen om te
kiezen. · Events die wij op {tool} draaiden. · Een goede tool is niets zonder
goede begeleiding. · Veelgestelde vragen.

---

## 4. Voorzet: de tools-pagina

**Route:** `/nl/technologie/tools`
**Werktitel:** Waar wij mee werken — en waarom

### Opzet

Drie groepen, want dat is hoe de tools zich tot elkaar verhouden. Per tool een
logo, twee tot drie zinnen, en waar het kan een eerlijke grens ("hier is het niet
voor"). Dat laatste is wat de pagina geloofwaardig maakt.

Elke tool eindigt met een lijn naar wat wij zouden adviseren. Niet als
verkooppraatje, maar als antwoord op de vraag die de bezoeker eigenlijk heeft.

### Introtekst (voorzet)

> **Waar wij mee werken**
>
> Wij zijn niet aan één tool getrouwd. We kiezen wat past bij je doel, je groep en
> wat je deelnemers aankunnen — en we beheersen ze alle vier goed genoeg om te
> weten waar ze ophouden.
>
> Hieronder staat waar we mee werken en wat elk ding goed doet. Zoek je iets
> specifieks: gebruik gerust de zoekfunctie van je browser.

### Groep 1 — Waar de bijeenkomst plaatsvindt

| Tool | Voorzet-tekst | Grens |
|---|---|---|
| **SpatialChat** | Ons voorkeursplatform. Je hoort mensen harder naarmate je dichterbij staat, dus je kunt echt naar iemand toe lopen. Daardoor ontstaan gesprekken die in een grid nooit ontstaan. Draait in de browser, zonder installatie. | Voor kort, strak eenrichtingsoverleg is het meer dan nodig. |
| **Zoom** | Stabiel, voorspelbaar en door bijna iedereen herkend. Als het gesprek strak en to the point moet zijn, is Zoom een prima keus. | Iedereen blijft in zijn vakje; spontane ontmoeting komt er niet vanzelf. |
| **Microsoft Teams** | Staat al op de laptop van je collega's en zit vast aan je agenda. Voor intern overleg scheelt dat gedoe. | Externe deelnemers lopen vaker tegen drempels aan; voor events is het niet gebouwd. |
| **Zoom Events** | Voor congressen: registratie vooraf, meerdere sessies naast elkaar, een lobby en een programma. Schaalt naar honderden deelnemers. | Zwaar geschut voor een sessie van twintig man. |

### Groep 2 — Waar samen gewerkt wordt

| Tool | Voorzet-tekst |
|---|---|
| **Miro** | Het digitale whiteboard waar we het meeste mee doen. Post-its, tijdlijnen, canvassen — iedereen werkt tegelijk op hetzelfde bord, en aan het eind heb je de oogst meteen op papier. Wij bouwen het bord vooraf op, zodat deelnemers alleen nog hoeven te schrijven. |
| **Mentimeter** | Voor peilingen, woordwolken en stemmingen tijdens een presentatie. Deelnemers antwoorden op hun telefoon en zien de uitslag live verschijnen. Goed om een grote groep in tien seconden aan het woord te laten. |

### Groep 3 — Waar het levendig van wordt

| Tool | Voorzet-tekst |
|---|---|
| **StreamAlive** | Haalt reacties uit de chat en zet ze live op het scherm — als kaart, wolk of wedstrijdje. Werkt goed bij grote groepen waar niet iedereen kan praten, maar wel iedereen iets wil zeggen. |
| **Kahoot** | De quiz die iedereen kent. Kort, competitief en verrassend effectief om de energie terug te halen na een uur luisteren. Wij maken de vragen op maat voor jouw organisatie. |
| **VoteCompany** | Voor formele stemmingen waar het echt op aankomt: gewogen stemrecht, geheime stemming en een rapportage die de vergadering rechtsgeldig maakt. Zetten we in bij ALV's en bestuursvergaderingen. |

> Deze lijst groeit mee. Werk je met iets wat er niet bij staat? Dan kijken we of
> het past — meestal kan het.

### Afsluiting (voorzet)

> **En wat moet jij nu kiezen?**
>
> Waarschijnlijk niets. Vertel ons wat je met je bijeenkomst wilt bereiken, dan
> stellen wij de combinatie voor. In negen van de tien gevallen komen we uit bij
> SpatialChat met Miro erbij — maar niet omdat het onze standaard is.
> Omdat het meestal het beste werkt.

### Wat er nog nodig is

- ✅ **Logo's: klaar.** Negen stuks in `public/images/logos/tools/*.webp` —
  440×176, doorzichtige achtergrond, geschaald op **inktoppervlak** zodat ze naast
  elkaar even zwaar ogen. Op kaderbasis schalen werkte niet: een compact
  woordmerk als Zoom werd dan veel groter dan een breed logo als streamAlive.
  Gemaakt met `scripts/logo-normaliseren.mjs`. Komen er tools bij (opnames,
  transcripten): zet ze in de lijst bovenin dat script en draai het opnieuw —
  bestaande bestanden worden overgeslagen tenzij je `--overschrijf` meegeeft.
- ✅ **Cijfers: vervallen** (besluit 11).
- **De teksten in dit document zijn een voorzet van de bouwer**, niet van de
  copy-Claude. Ze mogen langs de merkstem (`docs/copy-project-briefing.md` en
  `docs/tekststijlgids.md`).
- **URL-herkenning nakijken** aan een echte uitnodiging, voor de knop "Dat weet
  ik niet": `spatial.chat` → SpatialChat, `zoom.us` → Zoom, `events.zoom.us` →
  Zoom Events, `teams.microsoft.com` → Teams.

---

## 5. Voorzet: de disclaimer op de hulppagina

Besluit 4, in de toon van de site:

> **Even eerlijk over deze pagina**
>
> Alles hieronder is opgeschreven op basis van wat wij in de praktijk tegenkomen
> — honderden bijeenkomsten, en steeds dezelfde vragen. Het dekt de dingen die
> het vaakst misgaan, in gewone taal.
>
> Werkt jouw tool net even anders? Dat kan. De makers van Zoom, Teams en
> SpatialChat passen hun software regelmatig aan en hun eigen helppagina's zijn
> altijd het meest actueel. Kom je er hier niet uit, kijk daar dan ook even.

---

## 6. Gebouwd op 16 augustus 2026

| Wat | Waar |
|---|---|
| Hulppagina | `app/nl/technologie/hulp/page.tsx` |
| De vragen, los van de pagina | `app/nl/technologie/hulp/vragen.ts` |
| Het hulpcomponent (symptoom → tool → antwoord) | `components/ui/TechHulp.tsx` |
| Tools-pagina | `app/nl/technologie/tools/page.tsx` |
| Logo's | `public/images/logos/tools/*.webp` |
| Logo-script | `scripts/logo-normaliseren.mjs` |
| Doorverwijzingen | `next.config.ts` |
| Menu | `lib/navigatie.ts` — "Tech hulp", landt op de hulppagina |

**Het telefoonnummer staat niet meer in de vragen.** Alle zestien verwijzingen zijn
vervangen door een verwijzing naar de contactpersoon uit de uitnodiging. Wil je het
nummer tóch ergens tonen, dan is dat één bewuste toevoeging — het staat nu nergens
meer per ongeluk.

**De oude pagina's staan er nog.** `faq`, `helpdesk`, `platforms`, `hoe-het-werkt`
en `support` zijn niet verwijderd; de doorverwijzingen in `next.config.ts` gaan
vóór op de routes, dus ze zijn niet meer bereikbaar. Zo is er niets weg en kun je
terug. Opruimen kan zodra de nieuwe opzet bevalt.

**`stappen` is voorbereid.** In `vragen.ts` kan elk antwoord een `stappen: string[]`
krijgen; staat dat er, dan toont de hulppagina genummerde stappen in plaats van een
alinea. Nog niet ingevuld — dat is het herschrijfwerk uit besluit 3.

## 6b. Bijgesteld na eerste oplevering (16 aug 2026)

De eerste versie leek te veel op de mockup en te weinig op de site. Bijgesteld:

| Wat | Hoe |
|---|---|
| **Hero hulppagina** | Foto `tech-hulp-hero.webp` (`Vrouw achter laptop spatial meeting.png`). De vier hulpvragen staan als knoppen **ín het zwarte laptopscherm**, en worden eronder herhaald als kaarten — voor wie ze daar niet zag. Onder `lg` valt de overlay weg; dan doen de kaarten het werk. |
| **Kleur** | Elke categorie een eigen kleur: link geel, geluid turkoois, beeld groen, overig terracotta. Kleurstreep links op de kaart, stip in de hero. |
| **Disclaimer** | Van eigen blok met kop naar **kleine grijze regel** onderaan. Inhoud: onze inzichten; veel hangt af van je apparaat en de instellingen in je organisatie; platformvragen naar de leverancier, apparaatvragen naar je eigen IT-servicedesk. |
| **Platforms** | Terug naar de oude, droge opzet: **vier op een rij**, per stuk "Sterk in", een korte alinea met de voordelen erin verweven, plus Groep en Wanneer. |
| **"Waar het ophoudt"** | Vervallen — past niet bij hoe we adviseren. |
| **"Ons voorstel"-label** | Vervallen. SpatialChat krijgt alleen een geel randje; de voorkeur blijkt uit de inhoud en uit de rest van de site. |
| **De tools** | Nieuwe inleiding: externe tools om interactie en samenwerking te verhogen, plus een verwijzing naar de **eigen tools** (`/nl/games-tools#tools`), die ook op maat gemaakt kunnen worden. |
| **"Wat kies jij?"** | Nieuwe slotsectie: wij beginnen bij het doel, niet bij de tool. Geen "we komen uit bij SpatialChat en Miro". |

## 6c. Stand na afronding (17 aug 2026)

| Wat | Waar |
|---|---|
| Hulppagina, met video-hero en FAQ's | `app/nl/technologie/hulp/page.tsx` |
| 74 hulpvragen, allemaal in stappen | `app/nl/technologie/hulp/vragen.ts` |
| Symptoom → tool → antwoord, met zoeken | `components/ui/TechHulp.tsx` |
| Meeting Platforms, met FAQ en FAQPage-schema | `app/nl/technologie/tools/page.tsx` |
| Selecteerbare platformkaarten | `components/ui/PlatformKeuze.tsx` |
| Logo's + script | `public/images/logos/tools/`, `scripts/logo-normaliseren.mjs` |
| Hero-video en poster | `public/videos/tech-hulp-hero.*`, `public/images/tech-hulp-hero-poster.jpg` |
| Handleidingen | `public/downloads/{zoom,spatialchat}-instructies-deelnemer.pdf` |

**Zoeken.** Werkt op losse woorden met een vulwoordenlijst, niet op de hele zin —
anders vindt "ik hoor niets" alleen de vraag die letterlijk zo heet. Het veld
`antwoord` wordt gevuld met de stappen; laat je dat leeg, dan zoekt de pagina
alleen nog in de vraagtitels. Controleer na inhoudelijke wijzigingen even of
gangbare zoektermen nog treffers opleveren.

**Tool versus algemeen.** Kiest iemand een tool, dan **vervangen** die antwoorden
de algemene. Beide tonen dwingt de bezoeker om zelf te ontdubbelen.

## 7. Nog te doen

| # | Wat | Wanneer |
|---|---|---|
| 1 | ~~Vragen nalopen en omzetten naar stappen~~ | **afgerond** — alle 74 staan in stappen |
| 2 | **URL-herkenning controleren** aan een echte uitnodiging: `spatial.chat`, `zoom.us`, `events.zoom.us`, `teams.microsoft.com` | vóór livegang |
| 3 | Teksten van de tools-pagina langs de merkstem | vóór livegang |
| 4 | ~~Telefoonnummer op de oude hub~~ | **vervallen** — die hub verwijst nu door naar /tools |
| 5 | **Eigen uitgebreide pagina voor SpatialChat**, met de inhoud van `hoe-het-werkt` erin | na livegang |
| 6 | **Chatbot per tool**, gevoed door `vragen.ts` | later |
| 7 | Oude pagina's verwijderen zodra de nieuwe opzet bevalt | later |
| 8 | Drie tools voor opnames en transcripten toevoegen | later |
