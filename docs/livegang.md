# Livegang — open punten en stappenplan

Doorlichting van 18 augustus 2026, gemeten op de productiebouw (137 routes).
Alles wat ík kon repareren is gerepareerd; wat overblijft staat hieronder.

---

## Deel 1 — Wat ik vandaag heb gerepareerd

Zodat je weet wat er níét meer op je lijstje staat.

| Wat | Waarom het uitmaakte |
|---|---|
| **Canonical op alle 137 routes** | 53 Nederlandse pagina's hadden er geen. Zonder canonical kan Google zelf een adres kiezen dat jij niet bedoelt. |
| **hreflang, wederkerig** | De Engelse pagina's wezen naar de Nederlandse, maar niet andersom. Google negeert eenrichtings-hreflang volledig, dus het signaal deed niets. Nu wijzen alle 118 vertaalde pagina's over en weer, en dat is machinaal gecontroleerd. |
| **Eigen 404-pagina** | Er was er geen. Iemand met een oude link kreeg een kale Engelse standaardpagina zonder menu. Nu een tweetalige pagina met de weg terug. |
| **Deelbeeld van de calculator** | Beide calculator-bestanden verwezen naar een afbeelding die niet bestond. Elke deling op LinkedIn liet een leeg vlak zien. |
| **Standaardtitel in de root** | Stond nog op "Online events & remote work specialisten", terwijl het inmiddels Virtueel Kantoor heet. |
| **Vier routes ontbraken in mijn controlelijst** | `/nl/nieuwsbrief`, `/nl/technologie/hulp`, `/nl/technologie/tools` en `/nl/meeting-calculator` liepen nooit mee in de sweeps. Nu wel — en daardoor kwamen hun ontbrekende hreflang-tags alsnog aan het licht. |

**Stand van de bouw nu:** 137 routes zonder 404, 137 × 3 breedtes zonder
overloop, eslint 0 fouten, sitemap 118 adressen die allemaal bestaan en geen
enkele doorverwijzing bevatten, alle beelden hebben alt-tekst, elke pagina
precies één H1.

---

## Deel 2 — Open punten

### Blokkeert de livegang

**1. Twaalf commits staan nog niet op GitHub.**
Al het werk van vandaag staat lokaal. Zolang je niet pusht, gaat er niets live.
→ *Stap 1 van het stappenplan.*

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

**7. Er is geen enkele vorm van statistiek.**
Geen Google Analytics, geen Plausible, niets. Je gaat dus live zonder te kunnen
zien wat er gebeurt. Dat is een keuze, geen fout — maar wel een die je bewust
moet maken, want de eerste weken na een livegang zijn de interessantste. Wil je
het wel, dan is een privacyvriendelijke variant (Plausible, Simple Analytics)
het makkelijkst: die vraagt geen cookietoestemming, dus de banner hoeft niet mee
te veranderen. Google Analytics kan ook, maar dan moet het achter de
cookiekeuze en moet de cookieverklaring erop worden aangepast.

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

### Stap 1 · Het werk naar GitHub

```bash
cd ~/meetingmasters-web
git status          # verwacht: nothing to commit, working tree clean
git push origin main
```

**Controle:** open github.com/evanrappard/meetingmasters-web en kijk of de
laatste commit van vandaag is.

> Vraag je mij dit te doen, dan doe ik het — pushen doe ik alleen als je het
> vraagt.

### Stap 2 · Vercel aan GitHub koppelen

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

**Controle:** open na de redeploy de tijdelijke Vercel-URL en kijk of de
homepage de logo's en cijfers toont. Zie je de vaste standaardcijfers, dan
komt Sanity nog niet door.

### Stap 4 · Het domein aan Vercel hangen

1. Vercel → project → **Settings** → **Domains** → **Add**
2. Voeg toe: `www.meetingmasters.online` **en** `meetingmasters.online`
3. Zet `meetingmasters.online` op **Redirect to www** — de hele site gebruikt
   `www` in canonical, hreflang en sitemap, dus dat moet het hoofdadres zijn
4. Vercel toont nu de DNS-records die je nodig hebt

### Stap 5 · DNS bij YourHosting

Log in bij YourHosting → domein `meetingmasters.online` → DNS-beheer.

| Type | Naam | Waarde |
|---|---|---|
| `A` | `@` | het IP-adres dat Vercel toont (meestal `76.76.21.21`) |
| `CNAME` | `www` | `cname.vercel-dns.com` |

**Neem de waarden over uit het scherm van Vercel**, niet uit deze tabel — ze
kunnen per project verschillen.

**Raak je e-mail-records niet aan.** MX, SPF, DKIM en DMARC blijven ongemoeid;
verwijder je die per ongeluk, dan komt je mail niet meer aan.

**Controle:** DNS heeft tijd nodig, meestal een half uur tot een paar uur. In
Vercel → Domains hoort er een groen vinkje te komen. Ondertussen kun je
controleren met:

```bash
dig www.meetingmasters.online
```

### Stap 6 · Certificaat en doorverwijzingen

Vercel regelt het https-certificaat zelf zodra de DNS klopt. Wacht tot het
groene vinkje er staat.

**Controle — loop deze vijf adressen in je browser langs:**

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

### Stap 8 · Google Search Console

1. search.google.com/search-console → **Property toevoegen** → **URL-prefix** →
   `https://www.meetingmasters.online`
2. Verifiëren via **DNS-record** (TXT bij YourHosting) of via het
   HTML-bestand dat Google aanbiedt — vraag mij bij de tweede route, dan zet ik
   het bestand erin
3. **Sitemaps** → toevoegen: `sitemap.xml`
4. **URL-inspectie** → plak `https://www.meetingmasters.online/nl/home` →
   **Indexering aanvragen**

Doe hetzelfde voor `/en/home`, zodat Google de Engelse kant meteen oppikt.

### Stap 9 · Formulieren echt testen

Klik ze één voor één door en kijk of de inzending in HubSpot binnenkomt. Ik heb
gecontroleerd dat alle vijftien formulier-ID's in HubSpot bestaan, maar of ze
ook aankomen kun je alleen echt testen door te versturen.

- `/nl/contact` en `/en/contact`
- `/nl/offerte` en `/en/quote`
- `/nl/boeken` en `/en/booking`
- `/nl/nieuwsbrief` en `/en/newsletter`
- `/nl/expert-advies` en `/en/expert-advice`
- `/nl/demo` en `/en/demo` (dit is de agenda, geen formulier — boek een
  proefafspraak en zet hem daarna weer af)
- De calculator op `/nl/meeting-calculator` en `/en/meeting-calculator`:
  vul een e-mailadres in en klik **Download als pdf**

### Stap 10 · Laatste blik

- Open de site op je **telefoon**, niet alleen op de laptop
- Klik in de balk op **EN** en daarna op **NL**, op drie verschillende
  pagina's — je hoort steeds op dezelfde pagina in de andere taal te landen
- Klik de cookiebanner weg en kijk of hij wegblijft
- Speel één video af en kijk of hij pas laadt als je klikt

---

## Wat je mij kunt vragen

- De 12 commits pushen
- Het LinkedIn-adres overal gelijkzetten zodra je weet welke het is
- De Genuine Contact-link vervangen of weghalen
- Statistiek inbouwen, als je dat wilt — inclusief de aanpassing in de
  cookieverklaring als het Google Analytics wordt
- Een verificatiebestand van Search Console plaatsen

## Wat alleen jij kunt doen

Vercel koppelen, DNS wijzigen bij YourHosting, Supabase-instellingen, Search
Console verifiëren, en de formulieren echt versturen. Daar heb ik geen toegang
toe, en dat hoort ook zo.
