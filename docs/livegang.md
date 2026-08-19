# Livegang — open punten en stappenplan

> **Fijner leesbare versie:** `docs/livegang.html` — open dat bestand in je
> browser. Zelfde inhoud, maar met afvinkbare stappen (die blijven staan als je
> de pagina sluit), een voortgangsbalk, en aparte opmaak voor de controles en de
> waarschuwingen. Ook als webpagina gepubliceerd; zie het gesprek voor de link.

Doorlichting van 18–19 augustus 2026, gemeten op de productiebouw (137 routes).
Alles wat ík kon repareren is gerepareerd; wat overblijft staat hieronder.

De huidige site draait op **Squarespace**, de nieuwe komt op **Vercel**. De
overstap gebeurt in stap 5, met het omzetten van de DNS. Lees stap 9a
(terugvalplan) vóórdat je daaraan begint.

---

## Deel 1 — Wat ik vandaag heb gerepareerd

Zodat je weet wat er níét meer op je lijstje staat.

| Wat | Waarom het uitmaakte |
|---|---|
| **Canonical op alle 137 routes** | 53 Nederlandse pagina's hadden er geen. Zonder canonical kan Google zelf een adres kiezen dat jij niet bedoelt. |
| **hreflang, wederkerig** | De Engelse pagina's wezen naar de Nederlandse, maar niet andersom. Google negeert eenrichtings-hreflang volledig, dus het signaal deed niets. Nu wijzen alle 118 vertaalde pagina's over en weer, en dat is machinaal gecontroleerd. |
| **Eigen 404-pagina** | Er was er geen. Iemand met een oude link kreeg een kale Engelse standaardpagina zonder menu. Nu een tweetalige pagina met de weg terug. |
| **Deelbeeld van de calculator** | Beide calculator-bestanden verwezen naar een afbeelding die niet bestond. Elke deling op LinkedIn liet een leeg vlak zien. |
| **Eigen deelbeeld per pagina** | Alleen de blogartikelen hadden er een; alle 106 andere pagina's deelden hetzelfde algemene beeld. Nu deelt elke event-, kantoor- en gamespagina zijn eigen hero. 34 beelden op 1200×630 jpg. |
| **Het MM-vignet als favicon** | Er stond nog de standaard van Next.js: een zwarte cirkel met een driehoek. Nu het vignet, in alle maten plus een webmanifest. |
| **Standaardtitel in de root** | Stond nog op "Online events & remote work specialisten", terwijl het inmiddels Virtueel Kantoor heet. |
| **Vier routes ontbraken in mijn controlelijst** | `/nl/nieuwsbrief`, `/nl/technologie/hulp`, `/nl/technologie/tools` en `/nl/meeting-calculator` liepen nooit mee in de sweeps. Nu wel — en daardoor kwamen hun ontbrekende hreflang-tags alsnog aan het licht. |
| **Google Analytics ingebouwd**, achter de cookiekeuze | Zie de aparte sectie hieronder. Jij hoeft alleen nog het meet-ID aan te leveren. |
| **Kruimelpad op de 20 eventpagina's** | Google toont dan *Home › Events › Online strategiedag* boven het zoekresultaat in plaats van het kale adres. Dat levert meer kliks op. |
| **Hero-video's lichter gemaakt** | Vier hero's haalden de hele video binnen terwijl de pagina nog moest renderen (`preload="auto"`, tot 2,3 MB). Nu `preload="metadata"`, en de twee die geen stilstaand beeld hadden hebben er nu een. Snelheid telt mee in de rangschikking. |

**Stand van de bouw nu:** 137 routes zonder 404, 137 × 3 breedtes zonder
overloop, eslint 0 fouten, sitemap 118 adressen die allemaal bestaan en geen
enkele doorverwijzing bevatten, alle beelden hebben alt-tekst, elke pagina
precies één H1.

---

## Deel 2 — Open punten

### Blokkeert de livegang

**2. GitHub en Vercel zijn niet gekoppeld.**
Pushen start geen deploy. De laatste deploy is van 8 mei 2026, met de hand.
→ *Stap 2.*

**3. De omgevingsvariabelen staan alleen lokaal.**
Acht sleutels in `.env.local`, die Vercel niet kent. Zonder deze bouwt de site
wel, maar valt de homepage terug op de vaste teksten in plaats van op Sanity, en
werkt het aanmaken van HubSpot-formulieren niet meer.
→ *Stap 3.*

### Moet je zelf beslissen of navragen

**4. De Engelse privacy- en cookieverklaring zijn niet juridisch nagekeken.**
Ik heb ze vertaald, niet getoetst. De Nederlandse zijn eerder wel bekeken; de
Engelse tekst is een eigen bestand per taal, juist zodat een jurist ze apart kan
nalezen. Dit is het enige punt op deze lijst met een aansprakelijkheidsrisico.

**5. Er staan twee verschillende LinkedIn-adressen in de code.**
`linkedin.com/company/meetingmastersonline` in de footer en in de
bedrijfsgegevens die zoekmachines uitlezen, en
`nl.linkedin.com/company/meetingmasters` op Over ons. LinkedIn blokkeert
geautomatiseerde controles, dus ik kan niet vaststellen welke werkt. **Open ze
allebei in je browser** en geef door welke de goede is; dan zet ik hem overal
gelijk.

**6. De link naar Genuine Contact is dood.**
`genuinecontact.net` bestaat niet meer — ook niet met `www` of op `.com`. Hij
staat op de inspiratiekaarten-pagina, in beide talen, als bronvermelding bij
Dalar Consultancy. Geef het juiste adres door, of zeg dat de link eruit mag en
alleen de naam blijft staan.

**7. Google Analytics: het meet-ID ontbreekt nog.**
De koppeling is gebouwd en getest; wat ontbreekt is jouw meet-ID (`G-XXXXXXX`).
→ *Stap 3a van het stappenplan.*

**8. Supabase: staat aanmelden nog open?**
De site zelf gebruikt Supabase nergens meer — de auth is eruit. De bestanden in
`lib/supabase/` staan er nog en de sleutels ook. Als aanmelden in het
Supabase-dashboard nog aan staat, kan iedereen accounts blijven aanmaken in een
project dat niets meer doet. Uitzetten kost een minuut.
→ *Stap 7.*

### Kan ook na de livegang

**9. Negen oude Nederlandse pagina's staan op `noindex`.**
Cases, MVO, escape rooms, vergaderformats, partners, planning & support,
kwaliteit, strategie & concept, team. Ze zijn uit het menu en uit de sitemap,
maar wél bereikbaar. Zolang ze halfgevuld zijn is dat de juiste stand. Vul je er
een af, haal dan de `robots`-regel uit die pagina en zet hem terug in
`lib/navigatie.ts`.

**10. De blog-hero bevat het Nederlandse menu.**
Op de Engelse blog staat nu het Nederlandse beeld. Bewust geparkeerd.

**11. Vergadermacht bestaat niet in het Engels.**
Dat blok valt weg op de Engelse Downloads-pagina.

**12. Bingo en de vergaderkosten-calculator zijn kopieën.**
`public/tools/bingo/en/` en `public/tools/vergaderkosten-calculator/en/` zijn
losse bestanden, geen gedeelde code. Verandert de rekenlogica of de spelregels,
dan moet dat in beide.

**13. HubSpot laadt vóór de cookiekeuze.**
Dit is bewust en het staat expliciet uitgelegd in beide cookieverklaringen: het
formulier ís de dienst, dus zonder dat script zie je een leeg vlak. Daarmee is
het verdedigbaar. Wil je het strenger, dan moet er een knop "toon het
formulier" voor.

---

## Deel 3 — Stappenplan voor de livegang

Doe ze op volgorde. Bij elke stap staat hoe je controleert of het gelukt is,
zodat je niet pas aan het eind ontdekt dat er iets mis is.

### Stap 1 · Het werk naar GitHub ✅ gedaan

Alles staat op `github.com/evanrappard/meetingmasters-web`, branch `main`.

### Stap 2 · Vercel aan GitHub koppelen

> **Let op de volgorde.** Zodra je koppelt, start Vercel meteen een bouw — nog
> vóór je in stap 3 de omgevingsvariabelen hebt gezet. Dat gaf op 19 augustus
> een mislukte deploy: de Sanity-client werd aangemaakt bij het laden van de
> module en gooide `Configuration must contain projectId`. Dat is nu in de code
> opgelost, dus de eerste bouw slaagt ook zonder variabelen. Wil je het zeker
> weten, doe dan stap 3 vóór stap 2 — dan is er niets om over na te denken.

1. vercel.com → je project → **Settings** → **Git**
2. **Connect Git Repository** → GitHub → `evanrappard/meetingmasters-web`
3. Production Branch op **main**

**Controle:** ga naar het tabblad **Deployments**. Er hoort meteen een build te
starten. Duurt hij langer dan vijf minuten of wordt hij rood, stop dan en stuur
me de foutmelding — verder gaan heeft dan geen zin.

### Stap 3 · Omgevingsvariabelen in Vercel

vercel.com → project → **Settings** → **Environment Variables**. Zet ze allemaal
op **Production, Preview én Development**. De waarden staan in je `.env.local`
op deze Mac; open dat bestand en neem ze letterlijk over.

| Sleutel | Waarvoor |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | homepage-content uit het CMS |
| `NEXT_PUBLIC_SANITY_DATASET` | idem |
| `SANITY_API_TOKEN` | idem |
| `NEXT_PUBLIC_SUPABASE_URL` | alleen nog voor scripts |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | idem |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | idem |
| `SUPABASE_SERVICE_ROLE_KEY` | **server-only** — nooit ergens anders neerzetten |
| `HUBSPOT_PRIVATE_APP_TOKEN` | alleen voor het aanmaken van formulieren |

**Let op:** na het toevoegen moet je opnieuw deployen, anders pakt hij ze niet
op. Deployments → laatste build → **⋯** → **Redeploy**.

**Controle — die doe ik:** stuur me de tijdelijke Vercel-URL, dan draai ik
`npm run livecheck` daartegen. Dan zie je meteen of alles staat, nog vóór de
DNS om is. Wil je zelf kijken: staan de logo's en de cijfers op de homepage?
Zie je de vaste standaardcijfers, dan komt Sanity nog niet door.

### Stap 3a · Google Analytics aanzetten

De koppeling zit al in de site. Wat ontbreekt is jouw meet-ID.

**Wat ik op je huidige site vond:** de Squarespace-site draait op
`UA-215126398-2`. Dat is een **Universal Analytics**-property, en die verwerkt
sinds 1 juli 2023 geen gegevens meer — Google heeft die generatie uitgezet.
Je kunt dat ID dus niet hergebruiken; de nieuwe site heeft een **GA4**-property
nodig, herkenbaar aan de vorm `G-XXXXXXXXXX`.

Kijk eerst of je die al hebt. Bij de overstap in 2023/2024 heeft Google voor
veel accounts automatisch een GA4-property naast de oude gezet:

1. analytics.google.com → linksboven op de **propertykiezer** klikken
2. Zoek onder hetzelfde account (MeetingMasters) naar een property met een ID
   dat met **G-** begint

**Heb je die?** Gebruik dat ID en sla stap 3 hieronder over. Je houdt dan één
account, één plek waar alles samenkomt.

**Heb je die niet?** Maak hem aan — in **hetzelfde account**, niet in een nieuw:

1. analytics.google.com → **Beheer** → onder de kolom *Property*: **Property maken**
   - Naam: MeetingMasters · tijdzone Nederland · valuta euro
2. **Gegevensstream** → **Web** → `https://www.meetingmasters.online`
3. Boven in het scherm staat je **meet-ID**, in de vorm `G-XXXXXXXXXX`. Kopieer die.

Let op: verwacht geen historische cijfers. De Squarespace-site stuurde alleen
naar de oude UA-property, dus ook een bestaande GA4-property is waarschijnlijk
leeg. Je begint hoe dan ook bij nul — dat is geen fout, dat is hoe het ligt.

Daarna:

4. Vercel → Settings → Environment Variables → nieuw:

   | Sleutel | Waarde |
   |---|---|
   | `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` |

5. Opnieuw deployen (Deployments → **⋯** → Redeploy)

**Hoe het werkt, zodat je weet wat je zegt als iemand ernaar vraagt:** het
Google-script wordt pas geladen op het moment dat een bezoeker **Alles
accepteren** kiest. Kiest hij *Alleen noodzakelijk*, of maakt hij geen keuze,
dan gaat er geen enkel verzoek naar Google — dus ook geen IP-adres. Trekt hij
zijn toestemming later in, dan stopt het meten en worden de Google-cookies
gewist. Advertentiegegevens staan uit en het IP-adres wordt ingekort. Dat staat
allemaal in beide cookieverklaringen en in beide privacyverklaringen.

Ik heb dit gemeten, niet aangenomen:

```
keuze: geen                → 0 verzoeken naar Google, 0 cookies
keuze: alleen noodzakelijk → 0 verzoeken naar Google, 0 cookies
keuze: alles accepteren    → 2 verzoeken, 2 cookies
toestemming ingetrokken    → cookies weg
```

**Controle:** dít moet je zelf doen, want het vraagt je Google-account. Open de
live site, klik **Alles accepteren**, en kijk in Google Analytics onder
**Rapporten → Realtime** of je jezelf ziet binnenkomen. Dat duurt meestal minder
dan een minuut. (Of het script überhaupt laadt en of het vóór de toestemming
zwijgt, controleer ík met `npm run livecheck`.)

### Stap 4 · Het domein aan Vercel hangen ✅ gedaan

Beide domeinen staan eraan, met het kale domein op *redirect naar www* (308).
Zolang de DNS nog naar Squarespace wijst verandert er niets aan wat bezoekers
zien — dat gebeurt pas in stap 5.

### Stap 5 · DNS bij YourHosting

Log in bij YourHosting → domein `meetingmasters.online` → DNS-beheer.

**Dit zijn de exacte waarden**, uitgelezen uit jouw Vercel-project op 19 aug 2026:

| Type | Naam | Waarde |
|---|---|---|
| `A` | `@` | `216.198.79.1` |
| `CNAME` | `www` | `aa82fb7ae2858b93.vercel-dns-017.com.` |

Let op: dit is níét het oude `76.76.21.21` / `cname.vercel-dns.com` dat je overal
op internet tegenkomt. Vercel geeft dit project zijn eigen adres. Wijkt het
scherm van Vercel af van deze tabel, dan wint dat scherm.

#### Wat er nu staat, voor als je terug moet

Vastgelegd vóór de wijziging, zodat het terugvalplan uit stap 9a echte waarden
heeft in plaats van een herinnering:

| Type | Naam | Huidige waarde (Squarespace) |
|---|---|---|
| `A` | `@` | `198.185.159.144`, `198.185.159.145`, `198.49.23.144`, `198.49.23.145` |
| `CNAME` | `www` | `ext-cust.squarespace.com.` |

#### Deze drie laat je staan

| Type | Waarde | Waarvoor |
|---|---|---|
| `MX` | `meetingmasters-online.mail.protection.outlook.com.` | **je e-mail** — raak dit niet aan |
| `TXT` | `v=spf1 include:spf.protection.outlook.com include:147433380.spf01.hubspotemail.net -all` | e-mail van Outlook én HubSpot mag namens jou verzenden |
| `TXT` | `google-site-verification=rtFiH4mENnAsVC2t7ZQaZ0WvMj7fneLASmDuwVU8qzs` | een bestaande Google-verificatie — laat staan, scheelt je werk bij stap 8 |

**Raak je e-mail-records niet aan.** MX, SPF, DKIM en DMARC blijven ongemoeid;
verwijder je die per ongeluk, dan komt je mail niet meer aan.

**Controle:** DNS heeft tijd nodig, meestal een half uur tot een paar uur. In
Vercel → Domains hoort er een groen vinkje te komen. Zeg het zodra dat er staat,
dan neem ik het over.

### Stap 6 · Certificaat en doorverwijzingen

Vercel regelt het https-certificaat zelf zodra de DNS klopt. Wacht tot het
groene vinkje er staat.

**Controle — die doe ik.** `npm run livecheck` loopt deze vijf adressen langs
én zesentwintig andere dingen. Zeg het zodra het groene vinkje in Vercel staat.
Wil je toch zelf even kijken:

| Je typt | Je hoort te landen op |
|---|---|
| `meetingmasters.online` | `https://www.meetingmasters.online/nl/home` |
| `www.meetingmasters.online` | idem |
| `http://www.meetingmasters.online` | idem, maar op **https** |
| `www.meetingmasters.online/nl/blogs/rondjes-versus-vierkantjes` | het blogartikel op het nieuwe adres |
| `www.meetingmasters.online/nl/bestaat-niet` | de nieuwe 404-pagina |

### Stap 7 · Supabase dichtzetten

1. supabase.com → project `mgkzogvgqpfvsynrfera`
2. **Authentication** → **Providers** → **Email** → *Allow new users to sign up*
   op **uit**

De site gebruikt Supabase nergens meer, dus dit breekt niets.

### Stap 8 · Gevonden worden — indexering op gang brengen

Dit is de belangrijkste stap van het hele plan, want vindbaarheid is een van de
hoofddoelen van de site. Een nieuwe site wordt niet vanzelf gevonden: Google
moet weten dat hij bestaat, en jij moet kunnen zien of het lukt.

#### 8a · Search Console instellen

1. search.google.com/search-console → **Property toevoegen** → kies
   **Domein** (niet URL-prefix). Dan vallen `www`, kaal domein en alle
   subdomeinen er in één keer onder.
2. Verifiëren via een **TXT-record** bij YourHosting. Google geeft de waarde;
   zet hem erbij zoals je in stap 5 de andere records hebt gezet.
3. **Sitemaps** → toevoegen: `sitemap.xml`

   Er staan 118 adressen in, en die is **automatisch gegenereerd uit de
   routes** — hij kan dus niet meer scheefgroeien zoals de oude, handmatige.

4. **Instellingen → Internationale targeting** hoeft niet: dat regelt de
   hreflang die nu op alle 118 vertaalde pagina's staat.

#### 8b · De eerste pagina's met de hand aanmelden

Google vindt de rest vanzelf via de sitemap, maar deze tien wil je meteen
binnen hebben. Ga per stuk naar **URL-inspectie**, plak het adres en klik
**Indexering aanvragen**:

```
https://www.meetingmasters.online/nl/home
https://www.meetingmasters.online/en/home
https://www.meetingmasters.online/nl/events
https://www.meetingmasters.online/en/events
https://www.meetingmasters.online/nl/virtual-office
https://www.meetingmasters.online/en/virtual-office
https://www.meetingmasters.online/nl/events/strategiedagen
https://www.meetingmasters.online/nl/blog
https://www.meetingmasters.online/nl/about
https://www.meetingmasters.online/nl/contact
```

#### 8c · Bing niet vergeten

Bing voedt ook ChatGPT en Copilot, en dat wordt snel belangrijker.
bing.com/webmasters → **Import from Google Search Console**. Dat is twee
klikken; je hoeft niets opnieuw in te stellen.

#### 8d · Wat je de eerste weken volgt

Kijk **niet elke dag**. Zet twee momenten in je agenda:

| Wanneer | Waar | Wat je wilt zien |
|---|---|---|
| Na 3 dagen | Search Console → **Pagina's** | Het aantal geïndexeerde pagina's loopt op. Staat er nog niets, dan is er iets mis met de verificatie of de sitemap. |
| Na 2 weken | Search Console → **Pagina's** → *Niet geïndexeerd* | Hier staat per pagina wáárom hij er niet in staat. "Gecrawld, momenteel niet geïndexeerd" is normaal in het begin. "Pagina met omleiding" of "Alternatieve pagina met correcte canonical" bij een pagina die je wél wilt: stuur me dat door. |
| Na 4–6 weken | Search Console → **Prestaties** | De eerste zoektermen. Dít is de informatie waar je iets mee kunt: waarop word je gevonden, en waarop niet terwijl je het wel verdient? |

#### 8e · Wat er al voor je klaarstaat

Zodat je weet wat je níét hoeft te regelen:

| | |
|---|---|
| **Sitemap** | 118 adressen, automatisch uit de routes, geen doorverwijzingen erin |
| **robots.txt** | Alles toegestaan, inclusief de AI-crawlers (GPTBot, ClaudeBot, PerplexityBot). Dat is een bewuste keuze: zo kun je ook in AI-antwoorden opduiken |
| **Canonical** | Op alle 137 routes |
| **hreflang** | Op alle 118 vertaalde pagina's, wederkerig gecontroleerd |
| **Gestructureerde data** | 72× FAQ, 22× blogartikel, 20× kruimelpad, 8× tool, 6× dienst, 2× organisatie |
| **Titels en omschrijvingen** | Op elke pagina aanwezig, geen dubbele omschrijvingen |
| **Doorverwijzingen** | Alle 11 oude blogadressen wijzen naar het nieuwe artikel; oude `/nl/blogs/...`-links breken dus niet |
| **Snelheid** | Hero-video's laden niet meer vooruit; er verschijnt eerst een stilstaand beeld |
| **Koppen en alt-teksten** | Elke pagina één H1, elk beeld een alt-tekst |

#### 8f · Wat vindbaarheid ná de livegang bepaalt

De techniek is nu in orde. Wat er daarna nog toe doet is geen code meer:

- **Links van buitenaf.** Zet het nieuwe adres op je LinkedIn-bedrijfspagina,
  in je e-mailhandtekening, en vraag partners en klanten of ze de link
  bijwerken. Dit is de zwaarste factor die je zelf in de hand hebt.
- **Blijf publiceren.** Elf artikelen is een goede start; de blog is de motor
  onder je vindbaarheid. Eén nieuw stuk per maand doet meer dan welke
  technische ingreep ook.
- **Nog niet gevulde pagina's.** Cases, Partners en Kwaliteit staan bewust op
  `noindex` zolang ze half zijn. Vul je er een af, zeg het dan — dan haal ik de
  rem eraf en zet ik hem terug in het menu.
- **Google Bedrijfsprofiel.** Heb je dat nog niet, dan is het gratis en zorgt
  het ervoor dat je bij een zoekopdracht op je eigen naam netjes rechts in beeld
  komt met adres, telefoon en link.

### Stap 9 · Formulieren echt versturen

**Wat ik al doe:** `npm run livecheck` controleert of elk formulier daadwerkelijk
laadt in de browser, en ik heb nagekeken dat alle vijftien formulier-ID's in
HubSpot bestaan.

**Wat jij moet doen:** één keer echt versturen en kijken of het in HubSpot
binnenkomt. Dat kan ik niet voor je doen — een testinzending maakt een echt
contact in jouw CRM aan, en dat is niet aan mij.

- `/nl/contact` en `/en/contact`
- `/nl/offerte` en `/en/quote`
- `/nl/boeken` en `/en/booking`
- `/nl/nieuwsbrief` en `/en/newsletter`
- `/nl/expert-advies` en `/en/expert-advice`
- `/nl/demo` en `/en/demo` (dit is de agenda, geen formulier — boek een
  proefafspraak en zet hem daarna weer af)
- De calculator op `/nl/meeting-calculator` en `/en/meeting-calculator`:
  vul een e-mailadres in en klik **Download als pdf**

### Stap 9a · Terugvalplan — zeg Squarespace nog niet op

De huidige site draait op **Squarespace**. Zodra je in stap 5 de DNS omzet,
gaat al het verkeer naar Vercel en is de Squarespace-site niet meer bereikbaar
op je eigen domein — maar hij bestáát nog wel, op zijn eigen Squarespace-adres.

Dat is je vangnet. Blijkt er iets grondig mis, dan zet je de DNS-records terug
zoals ze waren en staat de oude site binnen een paar uur weer op het domein.

**Dus: zeg het Squarespace-abonnement pas op als de nieuwe site een week of
twee zonder problemen draait.** Maak vóór je opzegt een kopie van wat er alleen
daar staat — oude blogafbeeldingen bijvoorbeeld, of formulierinzendingen die
niet in HubSpot staan.

> **Schrijf op wat de DNS-records nú zijn**, vóór je stap 5 doet. Een
> schermafdruk van het DNS-scherm bij YourHosting is genoeg. Zonder dat kun je
> niet terug.

### Stap 9b · LinkedIn zijn geheugen opfrissen

LinkedIn onthoudt het deelbeeld van een adres, soms maanden. Heb je een link
eerder gedeeld, dan blijft hij het oude beeld tonen — of een leeg vlak, als er
toen niets was.

Ga naar **linkedin.com/post-inspector**, plak het adres en klik
**Inspect**. Daarmee haalt LinkedIn het beeld opnieuw op. Doe dat in elk geval
voor de homepage en voor de pagina's die je binnenkort gaat delen.

**Controle:** je ziet in het Post Inspector meteen welk beeld en welke titel
LinkedIn nu bij dat adres heeft.

### Stap 10 · Laatste blik

- Open de site op je **telefoon**, niet alleen op de laptop
- Klik in de balk op **EN** en daarna op **NL**, op drie verschillende
  pagina's — je hoort steeds op dezelfde pagina in de andere taal te landen
- Klik de cookiebanner weg en kijk of hij wegblijft
- Speel één video af en kijk of hij pas laadt als je klikt

---

## De taakverdeling

### Wat ik doe

| | |
|---|---|
| **Alle controles** | `npm run livecheck` doet er 31 in één keer: doorverwijzingen, oude bloglinks, elke pagina uit de sitemap, canonical, hreflang, deelbeelden, iconen, taalschakelaar, cookiebanner, Analytics vóór en ná toestemming, of de formulieren laden, en het gewicht van de hero-video. Zeg wanneer, dan draai ik hem. |
| Het LinkedIn-adres gelijkzetten | zodra je weet welke werkt |
| De Genuine Contact-link | vervangen of weghalen |
| Een verificatiebestand voor Search Console | als je liever niet met een DNS-record verifieert |
| Meekijken in Search Console | zodra er cijfers binnenkomen |
| Alles repareren wat de controle vindt | — |

### Wat alleen jij kunt doen

Vijf dingen, en alle vijf omdat er een wachtwoord of een account aan hangt:

| Stap | Waarom ik het niet kan |
|---|---|
| **2, 3, 3a, 4** — Vercel | Ik heb geen toegang tot je Vercel-account |
| **5** — DNS bij YourHosting | Idem, en dit is de stap waar een fout je e-mail kan raken |
| **3a** — het GA4-meet-ID ophalen | Zit in jouw Google-account |
| **7** — Supabase dichtzetten | Zit in jouw Supabase-dashboard |
| **8** — Search Console en Bing | Verificatie hangt aan jouw Google-account |
| **9** — één formulier echt versturen | Een testinzending maakt een echt contact in jouw CRM |
| **9b** — LinkedIn Post Inspector | Vraagt een LinkedIn-login |

> **Wil je ook de Vercel-stappen uit handen geven?** Dat kan: met een Vercel-token
> kan ik de koppeling, de omgevingsvariabelen, het meet-ID en het domein zelf
> instellen. Dan houd jij alleen DNS, Google en het versturen van één formulier
> over. Zeg het als je dat wilt, dan leg ik uit hoe je zo'n token maakt en
> daarna weer intrekt.
