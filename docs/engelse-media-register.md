# Engelse media — wat er klaarstaat

Bijgewerkt 17 augustus 2026. Dit is de bron van waarheid voor de Engelse site:
alle bestanden staan al in het project, met hun Nederlandse tegenhanger ernaast.
Bouw je een Engelse pagina, pak dan het bestand uit de rechterkolom.

Wat hier **niet** in staat, staat in `docs/engelse-versie-inventaris.html` onder
"nog nodig".

---

## Downloads (pdf)

| Nederlands | Engels | Herkomst |
|---|---|---|
| `downloads/meetingmasters-manifest.pdf` | `downloads/en/meetingmasters-manifesto.pdf` | Emilie, OneDrive |
| `downloads/keuzekompas-meeting-mix.pdf` | `downloads/en/meeting-compass.pdf` | Emilie |
| `downloads/spatialchat-instructies-deelnemer.pdf` | `downloads/en/spatialchat-participant-instructions.pdf` | Emilie, OneDrive |
| `downloads/zoom-instructies-deelnemer.pdf` | `downloads/en/zoom-participant-instructions.pdf` | Emilie, OneDrive |
| `downloads/checklist-online-alv.pdf` | `downloads/en/online-agm-checklist.pdf` | **zelf vertaald en opgemaakt** |

De ALV-checklist bestond niet in het Engels. Ik heb de volledige inhoud uit de
Nederlandse pdf gehaald, vertaald en opnieuw opgemaakt in de huisstijl. Bron:
`scripts/naar-pdf.mjs` zet een HTML-bestand om naar pdf met de Chrome op deze
Mac. "ALV" is "AGM" geworden — de gangbare Engelse term.

**Vergadermacht bestaat nog niet in het Engels.** Dat blok valt op de Engelse
Downloads-pagina dus weg, of blijft Nederlands met een opmerking erbij.

## Voorbladen

| Nederlands | Engels |
|---|---|
| `images/downloads/manifest-voorblad.webp` | `images/downloads/en/manifest-voorblad.webp` |
| `images/keuzekompas-poster.jpg` | `images/downloads/en/keuzekompas-voorblad.webp` |

Beide gemaakt uit de eerste pagina van de Engelse pdf zelf, niet uit een
schermafbeelding. Zo blijven ze scherp.

## Video's

| Waar | Nederlands | Engels |
|---|---|---|
| Home | YouTube `kBHFSnQDhX4` | YouTube `UdWCdR02dLs` — *Welcome to SpatialChat* |
| Over ons | YouTube `Cling07_Kas` | YouTube `0zKaXLEHtMQ` — *het manifest* |
| Games & Tools + R@venHack | YouTube `5g3Vv51_hR0` | YouTube `hE8qs_akrxM` — *R@venHack promo* |
| Downloads (keuzekompas) | `videos/keuzekompas.mp4` | `videos/meeting-compass.mp4` |
| Downloads (keuzekompas, YouTube) | — | YouTube `y4cW29ukTKM` |

**Alle Engelse video's zijn Engels gesproken.** Ondertiteling is niet nodig.

De overige video's op de site (hero's van Home, Events, Virtueel Kantoor, Tech
hulp, Games, Meeting Platforms) bevatten geen tekst en gaan ongewijzigd mee.

## Beelden

| Nederlands | Engels |
|---|---|
| `images/spatial-entree.webp` | `images/en/spatial-entree.webp` |
| `images/ravenhack-doorbraak.webp` | `images/en/ravenhack-doorbraak.webp` |
| `images/tool-storytelling-v2.webp` | `images/en/tool-storytelling.webp` |

**Nieuw voor beide talen:** `images/spatialchat-hero-v3.webp` — de hero op de
SpatialChat-pagina. Stond er nog niet; die pagina had alleen een donker
tekstblok. Nu ingebouwd op de Nederlandse pagina, en klaar voor de Engelse.

### Beelden die Nederlands blijven, op verzoek van Emilie

Townhall (verandertraject), ALV (gewogen stemmen), Training & workshop
(bekendheid), World café (leren), All-hands (diversity), alle blogvisuals en
de blog-hero. Die zijn goed genoeg zoals ze zijn; de blog-hero staat geparkeerd.

`images/planning-1.webp` telt niet mee: die staat op Planning support, en dat is
een van de negen pagina's die op noindex staan.

## Inspiratiekaarten

`images/tools/inspiratiekaarten/en/kaart-2.webp` t/m `kaart-50.webp` — 49 kaarten.
De achterkant (`achterkant.webp`) is taalloos en wordt gedeeld.

Herkomst: `~/spelenmetclaude/inspiration-cards-app/images/`, al eerder gemaakt.
Omgezet van PNG naar WebP in hetzelfde formaat als de Nederlandse set
(874×1240), samen 2,7 MB.

**Let op:** het trefwoord is Engels, maar de werktitel eronder is bij 22 kaarten
nog Nederlands — *Meisje met de parel* onder "Simplicity", *De Nachtwacht* onder
"Power". Voor een Engelse bezoeker leest dat vreemd bij juist de bekendste
werken. Zie de open-puntenlijst.

## Storytelling

Bestaat al Engels in het project zelf, als thema en vragenset:

- thema: `public/tools/storytelling/themes/default-en/`
- vragen: `public/tools/storytelling/questions/happy-mad-sad-en.json`

De Engelse tool draait op
`/tools/storytelling/index.html?theme=default-en&set=happy-mad-sad-en`.
Er hoeft dus niets gebouwd te worden — alleen een Engelse landingspagina die
naar dat adres verwijst.

## Nog te bouwen door mij

- **Bingo** — losse tool, teksten staan hard in het bestand. Zelfde aanpak als
  storytelling: één bestand met een taalschakelaar, geen tweede kopie.
- **Vergaderkosten-calculator** — idem, en de grootste van de drie.
- Beide moeten ook een Engels HubSpot-formulier krijgen; zie hieronder.

## HubSpot

Ik kan de formulieren **niet** vertalen. De koppeling die ik met HubSpot heb,
geeft toegang tot contacten, campagnes, blogposts en landingspagina's — maar
niet tot formulieren (`forms.read` ontbreekt). Dat is een instelling aan
HubSpot-kant, geen bouwprobleem.

Wat wel kan: ik lever de Engelse teksten aan (veldlabels, knoptekst,
bedanktekst, foutmeldingen) en Emilie plakt ze in HubSpot. Daarna geeft ze de
nieuwe formulier-id's door en hang ik ze aan de Engelse pagina's in
`lib/hubspot-forms.ts`.

Acht formulieren: contact, advies, demo, boeking, kostenindicatie, nieuwsbrief,
Vergadermacht, calculator. Plus de boekingsagenda, die een eigen taalinstelling
in HubSpot heeft.
