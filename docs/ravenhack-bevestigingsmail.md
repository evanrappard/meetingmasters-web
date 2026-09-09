# R@venHack — bevestiging per e-mail

Wie het boekingsformulier verstuurt, ziet de bevestiging in een geel blok op het
scherm. Dit document beschrijft hoe diezelfde bevestiging ook in zijn mailbox
komt: waarom dat niet via HubSpot kan, wat er gebouwd is, en wat er nog nodig is
om het aan te zetten.

> Stand: 7 september 2026. De code staat er en is getest; er ontbreekt alleen
> nog een verzendaccount. Zie [Wat Emilie doet](#wat-emilie-doet).

---

## 1. Waarom niet via HubSpot

De eerste route was de logische: HubSpot heeft de gegevens al en verstuurt al
mail. Die route is op 7 september 2026 stukgelopen, en niet op een detail.

Een e-mail uit HubSpot is een **marketing**bericht. Die gaat alleen naar
*marketingcontacten* die zijn aangemeld voor een abonnementstype. Op het
boekingsformulier staat het vinkje *"Ik ontvang graag ook andere berichten van
MeetingMasters"* bewust **niet verplicht** — en wie dat vinkje laat staan, krijgt
dus ook de bevestiging niet.

Dat is niet met een schakelaar te repareren, en je zou het ook niet moeten
willen. Een boekingsbevestiging is een **transactioneel** bericht: nodig om de
afspraak uit te voeren. Daar heb je geen marketingtoestemming voor nodig en er
hoeft geen afmeldlink onder. Het vinkje verplicht maken zou betekenen dat je
marketingtoestemming afdwingt voor iets wat geen marketing is — juridisch
slechter, niet beter. Bovendien tellen marketingcontacten mee voor de betaalde
contactlimiet.

HubSpots eigen antwoord hiervoor is de losse **Transactional Email add-on**, een
apart betaald product van enkele honderden euro's per maand. Voor één
bevestigingsmail is dat niet te verdedigen.

**Onderweg ook nog gezien:** er was in HubSpot een lósse marketinge-mail gemaakt.
Die hing nergens aan vast (`followUpId` op het formulier was leeg) en verstuurde
daarom sowieso niets. Voor de volledigheid: een e-mail gaat in HubSpot pas
vanzelf de deur uit als het soort **Geautomatiseerd** is (een normale e-mail gaat
alleen met de hand naar een lijst, en het soort is achteraf niet te wijzigen),
als hij is opgeslagen met **Opslaan voor automatisering**, én als hij bij het
formulier onder **Automatisering** is gekoppeld. Ook dan blijft de beperking van
hierboven staan, dus dit spoor is verlaten.

## 2. Wat er nu gebouwd is

De site verstuurt de mail zelf. Het formulier gaat nog steeds rechtstreeks naar
HubSpot — daar verandert niets aan.

| Bestand | Wat het doet |
|---|---|
| `lib/mail/verzend.ts` | De enige plek waar de site mail verstuurt. Praat met Resend via een gewone `fetch`; geen npm-pakket nodig. |
| `lib/ravenhack/bevestigingsmail.ts` | Bouwt onderwerp, HTML en platte tekst, in het Nederlands en het Engels. |
| `app/api/ravenhack/bevestiging/route.ts` | Neemt de melding aan, controleert alles, rekent de prijs opnieuw uit en verstuurt. |
| `components/ui/HubSpotForm.tsx` | Nieuwe eigenschap `bijVerzonden`: meldt één keer dat het formulier verstuurd is, met wat er in de velden stond. |
| `components/ravenhack/BoekNu.tsx` | Koppelt die melding aan de route hierboven. |

**Hoe het loopt.** De bezoeker verstuurt het formulier → HubSpot slaat het op en
zet de bedanktekst neer → de pagina merkt dat en meldt zich bij
`/api/ravenhack/bevestiging` → die stuurt de mail.

**Wat er níét uit de browser wordt geloofd.** Alleen de keuzes gaan mee: welk
spel, hoeveel mensen, welke datum en tijd, en een eventuele kortingscode. De
prijs wordt op de server opnieuw uitgerekend en de kortingscode daar opnieuw
beoordeeld, met dezelfde functies als de rest van de site. Er is dus geen veld
waarin iemand een eigen bedrag of een eigen tekst de mail in kan schrijven.

Wat wél kan, is de route aanroepen met het adres van iemand anders. Daar staat
een rem op: vijf per IP-adres en twee per ontvanger per tien minuten. De tellers
staan in het geheugen van de server, net als bij de kortingscodes.

**Gaat het versturen mis, dan blijft dat stil.** De aanvraag staat dan allang in
HubSpot en Emilie heeft haar melding; een foutmelding op het scherm zou de
bezoeker alleen maar laten denken dat zijn aanvraag niet is aangekomen.

**Staat het verzendaccount nog niet ingesteld, dan gebeurt er niets.** Geen fout,
geen halve mail — de site werkt gewoon zoals hij nu werkt. Er kan dus niets
stukgaan door dit alvast te laten staan.

### Het logo

Bovenaan de mail staat het logo, met een link naar de site in de taal van de
mail. Drie dingen die daarbij van belang zijn:

- Een mailprogramma haalt beeld op van internet en kan niets met een bestand uit
  `public/`. Daarom staat er het volledige adres
  `https://www.meetingmasters.online/images/logo.png` — mét `www.`, want zonder
  dat verwijst de site door en niet elk mailprogramma volgt zo'n doorverwijzing
  voor een plaatje.
- **PNG en geen WebP.** Outlook en een aantal andere mailprogramma's kennen WebP
  niet en laten dan een leeg vak zien.
- Veel mensen hebben beeld standaard uit staan. Dan valt de alt-tekst in
  ("MeetingMasters Online"), en die is opgemaakt in het geel van de huisstijl,
  zodat er ook zonder plaatje netjes de naam staat.

Wordt `public/images/logo.png` ooit vervangen of hernoemd, dan staat er in
eerder verstuurde mail een gebroken plaatje. Dat staat als waarschuwing in
`docs/website-visuals.md`.

## 3. De mail bekijken zonder te versturen

Draait de site lokaal, dan staat de mail hier:

```
http://localhost:3000/api/ravenhack/bevestiging?taal=nl
http://localhost:3000/api/ravenhack/bevestiging?taal=en
http://localhost:3000/api/ravenhack/bevestiging?tekst=1     ← platte versie
```

Bij te sturen met `?deelnemers=`, `?variant=quick`, `?datum=`, `?tijd=`. Buiten
de ontwikkelomgeving is dit adres afgesloten.

---

## Wat Emilie doet

Drie stappen. Zolang stap 1 en 2 niet gedaan zijn, verstuurt de site niets en
gaat er niets stuk.

**1. Een verzendaccount maken.** Ga naar `resend.com` en maak een account. Gratis
tot 3.000 mails per maand; dat is voor dit doel ruim.

**2. Het domein aanmelden en de DNS-regels zetten.** Meld
`meetingmasters.online` aan in Resend. Resend geeft dan een paar DNS-regels
(DKIM). Die zet je bij **VIP Internet**, waar de rest van de DNS ook staat.

Wat er níét hoeft: je bestaande SPF-regel aanpassen. Die staat al goed voor
Outlook en HubSpot, en je DMARC staat op `p=none`. Aan je gewone mail verandert
dus niets.

**3. Twee instellingen doorgeven.** In Vercel onder Settings → Environment
Variables, en ook in `.env.local` als je het lokaal wilt proberen:

```
RESEND_API_KEY=re_...
MAIL_AFZENDER=MeetingMasters <contact@meetingmasters.online>
```

> **Let op:** in Vercel wordt een omgevingsvariabele tijdens het bouwen
> meegebakken. Na het zetten moet er dus opnieuw gebouwd worden — alleen de
> variabele zetten doet niets. Dat gold ook voor
> `NEXT_PUBLIC_RAVENHACK_MODULES`.

**Daarna:** één keer een testboeking doen op de site en kijken of de mail
aankomt. Kijk ook even in de map ongewenste post.

## 4. Wat er nog open staat

- De bedanktekst in het gele blok mag een regel krijgen dat de bevestiging ook
  per e-mail onderweg is. Dat doen we pas als de mail echt verstuurt, anders
  beloven we iets wat niet gebeurt. Staat als punt 43 in het wijzigingslog.
- De rem op de route staat in het geheugen van de server en begint na elke
  nieuwe versie opnieuw. Voor dit aantal aanvragen ruim voldoende; wordt het
  ooit druk, dan hoort daar iets duurzamers onder.

Zie ook `docs/hubspot-forms.md` voor het formulierenregister en
`docs/waar-staat-wat.md` voor waar alles staat.
