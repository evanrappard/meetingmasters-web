/**
 * De vragen achter /nl/technologie/hulp.
 *
 * Overgenomen uit de oude FAQ-pagina (`faq/page.tsx`) zodat de inhoud op één
 * plek staat en zowel de hulppagina als een latere chatbot eruit kan putten.
 *
 * `stappen` is optioneel. Staat het er, dan toont de hulppagina genummerde
 * stappen in plaats van een lopende alinea — dat leest een deelnemer in stress
 * veel beter. De rest volgt later; `antwoord` blijft altijd de volledige tekst.
 */

export type Vraag = {
  id: string;
  categorie: string;
  tool: string;
  vraag: string;
  antwoord: string;
  stappen?: string[];
};

export type Categorie = { id: string; label: string; icoon: string; intro?: string };

export const CATEGORIEEN: Categorie[] = [
  { id: "link", label: "Ik kom er niet in", icoon: "🔑", intro: "Link kwijt, of hij doet niets als je erop klikt." },
  { id: "audio", label: "Mijn audio werkt niet", icoon: "🔊", intro: "Ik hoor niemand, of niemand hoort mij." },
  { id: "video", label: "Mijn video doet het niet", icoon: "📷", intro: "Camera zwart of bevroren, of je ziet de anderen niet." },
  { id: "overig", label: "Er gaat iets anders mis", icoon: "🛟", intro: "Haperingen, schermdelen, breakout rooms of anders." },
];

export const TOOLS = ["Algemeen", "SpatialChat", "Zoom Events", "Zoom", "Microsoft Teams"];

// ── Inhoud per tool en categorie ───────────────────────────────────────
type QA = { q: string; a?: string; stappen?: string[] };
type ToolBlock = { link: QA[]; audio: QA[]; video: QA[]; overig: QA[] };

const DATA: Record<string, ToolBlock> = {
  Algemeen: {
    // Volgorde bouwt op: eerst binnenkomen, dan pas wat er binnen misgaat.
    link: [
      {
        q: "Waar vind ik de link naar de bijeenkomst?",
        stappen: [
"Zoek in je mailbox op de naam van de organisator of op “uitnodiging”.",
"Kijk in je agenda: bij een agenda-uitnodiging staat de link in de afspraak zelf.",
"Kijk in je map ongewenste e-mail of spam; verplaats de mail naar je inbox en klik daarna pas op de link.",
        ],
      },
      {
        q: "Ik klik op de link en er gebeurt niets.",
        stappen: [
"Kopieer de hele link en plak hem in de adresbalk van je browser.",
"Gebruik Google Chrome. Edge en Firefox werken meestal ook; Safari geeft de meeste problemen.",
"Sluit een eerder geopend venster van dezelfde meeting; twee vensters tegelijk werkt niet.",
        ],
      },
      {
        q: "Ik krijg een foutmelding als ik wil binnenkomen.",
        stappen: [
"Lees welke knop de melding aanbiedt — meestal “toestaan” of “openen” — en klik die aan.",
"Sluit het venster en klik opnieuw op de link uit de mail.",
"Werkt het nog niet: open de link in een privé- of incognitovenster, dan tellen oude cookies niet mee.",
        ],
      },
      {
        q: "Ik moet inloggen of een account aanmaken.",
        stappen: [
"Kijk of er een knop “deelnemen als gast” of “join in browser” staat; vaak hoef je niets aan te maken.",
"Vraagt het platform wel om een account, gebruik dan het e-mailadres waarop je de uitnodiging kreeg.",
"Bij SpatialChat hoef je nooit in te loggen: je vult alleen je naam in.",
        ],
      },
      {
        q: "Ik sta in een wachtkamer en er gebeurt niets.",
        stappen: [
"Blijf staan: de organisator moet je binnenlaten en ziet je in de lijst staan.",
"Controleer of je naam herkenbaar is; staat er “iPhone van…”, pas hem dan aan.",
"Duurt het lang, ververs de pagina dan één keer — je komt automatisch weer in de rij.",
        ],
      },
    ],
    audio: [
      {
        q: "Ik hoor niemand.",
        stappen: [
"Zet het geluid van je computer aan en hard genoeg — controleer ook of het niet gedempt staat. Bellen of vergaderen via de browser gebruikt hetzelfde geluidsapparaat als de rest van je computer.",
"Kies in de instellingen van de meeting bewust de juiste speaker (bijvoorbeeld je koptelefoon in plaats van de laptopspeaker).",
"Draag je oortjes of een headset? Haal ze eruit en stop ze opnieuw in, zodat het apparaat opnieuw wordt herkend.",
"Test het geluid met de testknop van de meeting, als die er is.",
        ],
      },
      {
        q: "Niemand hoort mij.",
        stappen: [
"Kijk of je microfoon niet uitstaat: er mag geen streepje door het microfoon-icoon staan.",
"Kies in de meeting de juiste microfoon; praat en kijk of het balkje beweegt.",
"Geef je browser toestemming: klik links in de adresbalk op het icoon vóór het webadres — in Chrome zijn dat twee schuifjes, in Firefox, Edge en Safari een slotje. Zet microfoon op “toestaan” en ververs de pagina.",
"Blijft het stil, dan blokkeert je besturingssysteem het. Mac: Systeeminstellingen → Privacy en beveiliging → Microfoon, en vink je browser aan. Windows: Instellingen → Privacy en beveiliging → Microfoon.",
        ],
      },
      {
        q: "Mijn geluid komt uit het verkeerde apparaat.",
        stappen: [
"Kies het juiste apparaat in de meeting, apart voor de microfoon en apart voor de speaker.",
"Stel het daarna ook in bij de geluidsinstellingen van je computer zelf.",
"Sluit je een headset aan tijdens de meeting? Kies hem daarna alsnog handmatig; dat gaat niet altijd vanzelf.",
        ],
      },
      {
        q: "Er is een echo of een piep.",
        stappen: [
"Zit je met meerdere mensen in dezelfde ruimte, laat dan maar één apparaat het geluid aan hebben.",
"Gebruik een headset of oortjes; dat lost een echo bijna altijd op.",
"Zet je microfoon uit als je niet praat.",
        ],
      },
      {
        q: "Mijn geluid hapert of klinkt blikkerig.",
        stappen: [
"Zet je camera uit; beeld kost veruit de meeste bandbreedte, geluid blijft dan meestal goed.",
"Sluit programma's die op de achtergrond synchroniseren of downloaden.",
"Ga dichter bij je wifi-punt zitten, of sluit een netwerkkabel aan. Een traag of haperend internet is veruit de meest voorkomende oorzaak.",
        ],
      },
    ],
    video: [
      {
        q: "Mijn camera doet het niet.",
        stappen: [
"Kijk of je camera niet uitstaat: er mag geen streepje door het camera-icoon staan.",
"Kies in de meeting de juiste camera; laptops hebben er soms meer dan één.",
"Geef je browser toestemming: klik links in de adresbalk op het icoon vóór het webadres — in Chrome zijn dat twee schuifjes, in Firefox, Edge en Safari een slotje. Zet camera op “toestaan” en ververs de pagina.",
"Helpt dat niet, dan blokkeert je besturingssysteem het. Mac: Systeeminstellingen → Privacy en beveiliging → Camera, en vink je browser aan. Windows: Instellingen → Privacy en beveiliging → Camera.",
"Gebruikt een ander programma je camera al? Sluit dat volledig af — ook als het alleen nog op de achtergrond draait — en ververs de pagina.",
"Controleer tot slot of er geen schuifje of dopje voor je cameralens zit.",
        ],
      },
      {
        q: "Ik zie de anderen niet.",
        stappen: [
"Controleer of de anderen hun camera aan hebben; vaak ligt het niet aan jou.",
"Ververs de pagina; beelden komen daarna opnieuw binnen.",
"Zet je eigen camera even uit en weer aan, dan wordt de videoverbinding opnieuw opgebouwd.",
        ],
      },
      {
        q: "Mijn beeld hapert of bevriest.",
        stappen: [
"Zet je camera uit en na een paar seconden weer aan.",
"Sluit andere programma's; video kost veel van je processor.",
"Blijft het haperen, laat je camera dan uit — het gesprek loopt op geluid gewoon door.",
        ],
      },
    ],
    overig: [
      {
        q: "Ik kan mijn scherm niet delen.",
        stappen: [
"Klik op “scherm delen” en kies wat je wilt tonen: je hele scherm, één venster of één tabblad.",
"Op een Mac moet je je browser eerst toestemming geven: Systeeminstellingen → Privacy en beveiliging → Schermopname. Daarna moet je de browser afsluiten en opnieuw openen.",
"Deel je een video met geluid, vink dan “geluid delen” aan.",
        ],
      },
      {
        q: "Ik word in een breakout room gezet. Wat moet ik doen?",
        stappen: [
"Dat is een apart kamertje voor een gesprek in kleine kring; klik op “deelnemen” als dat gevraagd wordt.",
"Je beeld en geluid gaan gewoon mee; je hoeft niets opnieuw in te stellen.",
"Kom je er niet uit, klik dan op “vraag om hulp”. De begeleider komt dan naar je toe.",
        ],
      },
      {
        q: "Mijn verbinding hapert.",
        stappen: [
"Zet je camera uit.",
"Sluit programma's die je niet nodig hebt.",
"Ga dichter bij je wifi-punt zitten of gebruik een kabel.",
"Helpt niets: verlaat de meeting en kom opnieuw binnen via de link.",
        ],
      },
      {
        q: "Ik werk op een computer van mijn organisatie en er wordt van alles geblokkeerd.",
        stappen: [
"Probeer eerst een andere browser; soms is er maar één toegestaan.",
"Lukt het niet, dan zit er een blokkade op het netwerk of op je beheerdersrechten.",
"Stuur je IT-afdeling de instellingen onderaan deze pagina; daar staat per platform wat zij nodig hebben.",
"Kan het snel? Doe mee via je telefoon of een privélaptop.",
        ],
      },
      {
        q: "Wordt de bijeenkomst opgenomen? (opnemen en terugkijken)",
        stappen: [
          "De organisator bepaalt dat, en moet het vooraf melden.",
          "Loopt er een opname, dan zie je dat aan een melding of een rood bolletje in beeld.",
          "Wil je niet in beeld, zet dan je camera uit; je kunt gewoon blijven meedoen.",
          "Vraag de organisator of je de opname achteraf kunt terugkijken.",
        ],
      },
      {
        q: "Hoe steek ik mijn hand op? (hand opsteken)",
        stappen: [
          "Zoek in de balk onderin naar het handje, vaak onder Reacties.",
          "Klik erop; de begeleider ziet dat je iets wilt zeggen.",
          "Vergeet niet je hand daarna weer te laten zakken — dat gaat niet vanzelf.",
          "Zit het handje er niet bij, typ je vraag dan in de chat.",
        ],
      },
      {
        q: "Kan ik ondertiteling aanzetten?",
        stappen: [
          "Veel platforms hebben live ondertiteling; kijk in de balk onderin of onder de drie puntjes.",
          "Staat die er niet, dan heeft de organisator het uitgezet of ondersteunt de licentie het niet.",
          "Vraag het even; het is meestal met één instelling aan te zetten.",
        ],
      },
      {
        q: "Niets werkt.",
        stappen: [
"Sluit de meeting helemaal af en klik opnieuw op de link uit je uitnodiging.",
"Open de link in Google Chrome.",
"Herstart je computer — vaak sneller dan blijven proberen.",
"Doe mee via je telefoon; dat werkt vrijwel altijd, ook als je laptop dwarsligt.",
        ],
      },
    ],
  },
  SpatialChat: {
    link: [
      {
        q: "Ik kan mijn uitnodigingslink niet vinden.",
        stappen: [
          "Zoek in je mailbox op de naam van de organisator of op “uitnodiging”.",
          "Kijk in je agenda: bij een agenda-uitnodiging staat de link in de afspraak.",
          "Kijk in je map ongewenste e-mail of spam en verplaats de mail naar je inbox.",
        ],
      },
      {
        q: "Ik klik op de link en er gebeurt niets.",
        stappen: [
          "Kopieer de hele link en plak hem in de adresbalk van je browser.",
          "Gebruik Chrome, Firefox of Edge — niet Safari.",
          "Druk op Enter. SpatialChat opent vanzelf; downloaden hoeft niet.",
        ],
      },
      {
        q: "Moet ik een account aanmaken of iets installeren?",
        stappen: [
          "Nee. Klik op de link en je bent er.",
          "Vul je naam en organisatie in; dat is je visitekaartje in de ruimte.",
          "Klik op Continue.",
        ],
      },
      {
        q: "Ik ben het SpatialChat-tabblad kwijt.",
        stappen: [
          "Kijk in je browser naar het tabblad met een rood stipje.",
          "Dat stipje betekent dat je microfoon en camera daar actief zijn — daar staat je bijeenkomst dus nog open.",
        ],
      },
      {
        q: "Ik kom een kamer niet in.",
        stappen: [
          "Kijk achter de kamernaam naar het aantal deelnemers, bijvoorbeeld 50/50. Staat het vol, dan kun je er niet in.",
          "Ga naar een andere kamer, of probeer het over een paar minuten opnieuw.",
        ],
      },
    ],
    audio: [
      {
        q: "Mijn microfoon doet het niet.",
        stappen: [
          "Kijk in de balk onderin: staat er een rode streep door het microfoon-icoon, klik erop zodat het groen wordt.",
          "Klik links in de adresbalk op het icoon vóór het webadres — in Chrome zijn dat twee schuifjes, in Firefox, Edge en Safari een slotje — en zet de microfoon op Toestaan. Ook als je eerder per ongeluk op Blokkeren klikte — dat is verreweg de meest voorkomende oorzaak.",
          "Herlaad de pagina.",
          "Blijft het stil, dan staat de toegang op je computer uit. Windows: Instellingen → Privacy en beveiliging → Microfoon. Mac: Systeeminstellingen → Privacy en beveiliging → Microfoon. Zet je browser daar aan en start hem opnieuw.",
        ],
      },
      {
        q: "Anderen horen mij niet, of ik hoor hen niet.",
        stappen: [
          "Net als in het echt moet je binnen gehoorsafstand staan.",
          "Klik op je eigen beeld, houd vast en sleep jezelf dichter naar de ander toe.",
          "Wil je de hele kamer toespreken, klik dan op de megafoon in de onderbalk. Dan hoort iedereen je, ongeacht de afstand.",
        ],
      },
      {
        q: "Alles staat goed, maar het geluid klopt niet.",
        stappen: [
          "Klik op het tandwiel-icoon voor de instellingen.",
          "Controleer of de juiste microfoon én de juiste speaker gekozen zijn.",
          "Gebruik je een oortje of headset? Controleer of die met je computer verbonden is en niet nog met je telefoon.",
        ],
      },
    ],
    video: [
      {
        q: "Mijn camera doet het niet.",
        stappen: [
          "Kijk in de onderbalk: staat er een rode streep door het camera-icoon, klik erop zodat het groen wordt.",
          "Klik links in de adresbalk op het icoon vóór het webadres — in Chrome zijn dat twee schuifjes, in Firefox, Edge en Safari een slotje — en zet de camera op Toestaan.",
          "Herlaad de pagina.",
          "Zie je jezelf nog niet, dan staat de toegang op je computer uit. Windows: Instellingen → Privacy en beveiliging → Camera. Mac: Systeeminstellingen → Privacy en beveiliging → Camera. Zet je browser daar aan en start hem opnieuw.",
        ],
      },
      {
        q: "Ik zie mezelf wel, maar anderen niet.",
        stappen: [
          "Je camera staat dan goed; je bent waarschijnlijk te ver weg.",
          "Sleep je eigen beeld dichter naar de ander toe; de videoverbinding verschijnt vanzelf.",
          "Controleer ook of de camera van de ander aanstaat.",
        ],
      },
      {
        q: "In de presentatiekamer staat mijn camera uit.",
        stappen: [
          "Dat hoort zo. De presentatiekamer is een luisterruimte: alleen de presentator is te zien en te horen.",
          "Ga je terug naar een gewone kamer, zet dan zelf je camera en microfoon weer aan in de onderbalk.",
        ],
      },
    ],
    overig: [
      {
        q: "Welke browser en welk apparaat kan ik het beste gebruiken?",
        stappen: [
          "Gebruik een laptop of computer; daar werken alle functies.",
          "Kies Chrome, Firefox of Edge. Safari werkt niet altijd goed.",
          "Op een telefoon of tablet — ook een iPad — werkt niet alles en is het scherm klein.",
        ],
      },
      {
        q: "Hoe beweeg ik door de ruimte en tussen kamers?",
        stappen: [
          "Klik op je eigen beeld, houd vast en sleep jezelf naar de plek waar je wilt staan.",
          "Zoom in en uit met je muiswiel, of met de knoppen rechtsonder.",
          "Andere kamers vind je rechtsboven: klik op een kamernaam en je loopt er vanzelf heen.",
        ],
      },
      {
        q: "Hoe deel ik mijn scherm?",
        stappen: [
          "Klik in de onderbalk op het scherm-icoon, naast de microfoon en de camera.",
          "Kies of je een tabblad, een venster of je hele scherm deelt.",
          "Deel liever één tabblad of venster; dat is rustiger voor iedereen. Ga je presenteren, zet je presentatie dan vooraf al klaar.",
        ],
      },
      {
        q: "Ik zit op een bedrijfsnetwerk en de verbinding hapert.",
        stappen: [
          "Sommige zakelijke netwerken blokkeren video- en audioverkeer via de firewall, en ook een VPN kan in de weg zitten.",
          "Zet je VPN even uit, of probeer een ander netwerk of de hotspot van je telefoon.",
          "Blijft het haperen, stuur je IT-afdeling dan de instellingen onderaan deze pagina.",
        ],
      },
    ],
  },
  "Zoom Events": {
    link: [
      {
        q: "Ik heb geen registratie- of join-mail ontvangen.",
        stappen: [
          "Kijk in je map ongewenste e-mail of spam; daar zit hij meestal in.",
          "Verplaats de mail naar je inbox; daarna werkt de link gewoon.",
          "Vind je niets, vraag de organisator dan om een persoonlijke join-link.",
        ],
      },
      {
        q: "Ik heb geregistreerd maar krijg geen enkele Zoom-mail.",
        stappen: [
          "Maak een gratis Zoom-account aan met hetzelfde e-mailadres waarmee je je hebt aangemeld.",
          "Je persoonlijke join-link is aan dat adres gekoppeld en komt dan alsnog binnen.",
        ],
      },
      {
        q: "Mijn join-link werkt niet.",
        stappen: [
          "Controleer of je bent ingelogd met hetzelfde e-mailadres als bij de registratie; daar is je toegang aan gekoppeld.",
          "Log zo nodig uit en opnieuw in met het juiste adres.",
          "Lukt het nog niet, vraag de organisator dan om je handmatig toe te voegen.",
        ],
      },
    ],
    audio: [
      {
        q: "Ik hoor niets.",
        stappen: [
          "Klik op het pijltje naast het microfoon-icoon onderin.",
          "Kies bij de speaker het juiste apparaat, bijvoorbeeld je koptelefoon in plaats van de laptopspeaker.",
          "Zet het volume open en ververs zo nodig de pagina.",
        ],
      },
      {
        q: "Anderen horen mij niet.",
        stappen: [
          "Kijk of je niet gedempt staat: bij een rode streep door de microfoon klik je op Unmute.",
          "Klik op het pijltje naast de microfoon en kies de juiste microfoon.",
          "Geef je browser toestemming voor de microfoon en ververs de pagina.",
          "Sluit andere programma's die je microfoon gebruiken, zoals Teams of een tweede Zoom-venster.",
        ],
      },
      {
        q: "Ik kan mijn microfoon helemaal niet aanzetten.",
        stappen: [
          "In een webinar-sessie staan je audio en video bewust uit; dat hoort zo.",
          "Stel je vraag daar via de Q&A.",
          "In een gewone meeting-sessie kun je wél zelf je microfoon aanzetten.",
        ],
      },
    ],
    video: [
      {
        q: "Mijn camera doet het niet.",
        stappen: [
          "Zie je een rode streep door het camera-icoon, klik dan op Start video.",
          "Klik op het pijltje naast het icoon en kies de juiste camera.",
          "Geef je browser toestemming voor de camera. Blijft het zwart, dan staat de toegang op je computer uit. Windows: Instellingen → Privacy en beveiliging → Camera. Mac: Systeeminstellingen → Privacy en beveiliging → Camera. Zet je browser daar aan.",
          "Sluit andere programma's die de camera gebruiken; Zoom kan hem niet aanzetten als een ander programma hem vasthoudt.",
        ],
      },
      {
        q: "Ik zie een zwart beeld of de verkeerde camera.",
        stappen: [
          "Klik op het pijltje naast het camera-icoon.",
          "Kies bij de camera-instellingen de juiste webcam.",
          "Controleer of er geen schuifje of dopje voor de lens zit.",
        ],
      },
      {
        q: "Ik kan mezelf niet in beeld brengen.",
        stappen: [
          "In een webinar-sessie kun je bewust geen beeld delen; je volgt de sprekers en stelt vragen via de Q&A.",
          "In een gewone meeting-sessie zet je je camera aan met Start video.",
        ],
      },
    ],
    overig: [
      {
        q: "Ik zie de join-knop niet bij een sessie.",
        stappen: [
          "Dan is de sessie nog niet gestart.",
          "Wacht tot de spreker opent; de blauwe Join-knop verschijnt dan vanzelf.",
          "Sessies die live zijn herken je aan het rode Now.",
        ],
      },
      {
        q: "Hoe wissel ik tussen sessies?",
        stappen: [
          "Klik bovenin op de tab Sessions voor het volledige programma.",
          "Achter elke sessie staat een Join-knop.",
          "Met het bladwijzer-icoon zet je sessies in je eigen Itinerary, zodat je makkelijk overstapt.",
        ],
      },
      {
        q: "Waar vind ik de koffie- of lunchpauze?",
        stappen: [
          "Ga naar de tab Expo.",
          "Kies een ruimte die in progress is; die staat rood aangegeven.",
          "Klik op Enter booth en daarna op Join.",
        ],
      },
      {
        q: "Ik kom helemaal niet in het event.",
        stappen: [
          "Probeer een andere browser; vrijwel elke browser werkt.",
          "Op een Chromebook gebruik je het beste de Zoom-webapp.",
          "Ben je spreker? Doe dan mee via de Zoom-app.",
        ],
      },
    ],
  },
  Zoom: {
    link: [
      {
        q: "Ik kan de link niet vinden.",
        stappen: [
          "Zoek in je mailbox op “Zoom” of “uitnodiging”, en kijk ook in je spam.",
          "In de mail staat een blauwe link of een adres dat begint met zoom.us.",
          "Klik daarop.",
        ],
      },
      {
        q: "Er wordt om een wachtwoord of code gevraagd.",
        stappen: [
          "Die passcode staat onderaan dezelfde uitnodigingsmail.",
          "Kopieer hem of typ hem over.",
        ],
      },
      {
        q: "Ik moet Zoom downloaden, maar dat lukt niet.",
        stappen: [
          "Dat hoeft niet. Klik in het scherm dat verschijnt op Annuleren.",
          "Kies onderaan de pagina Join from your browser.",
          "Vul je naam in en je bent binnen, zonder installatie.",
        ],
      },
      {
        q: "Ik zie “De host laat u zo binnen”.",
        stappen: [
          "Dat hoort zo: je staat in de digitale wachtkamer.",
          "Blijf in dit scherm en sluit het niet af; je wordt binnen een minuut toegelaten.",
        ],
      },
    ],
    audio: [
      {
        q: "Ik hoor niemand.",
        stappen: [
          "Klik linksonder bij de microfoon op Deelnemen met computeraudio, als dat nog niet is gebeurd.",
          "Zet het volume van je apparaat hoger.",
          "Klik op het pijltje naast de microfoon en kies bij Selecteer een speaker je koptelefoon of luidsprekers.",
        ],
      },
      {
        q: "Niemand kan mij horen.",
        stappen: [
          "Kijk linksonder: bij een rode streep door de microfoon sta je op stil. Klik er één keer op.",
          "Klik op het pijltje naast de microfoon en kies de juiste microfoon.",
          "Een headset of oortjes werken vaak beter dan de ingebouwde microfoon.",
        ],
      },
      {
        q: "Ik hoor een echo.",
        stappen: [
          "Een echo komt bijna altijd doordat iemand met twee apparaten tegelijk meedoet, of doordat twee mensen dicht bij elkaar zitten.",
          "Laat op één apparaat het geluid dempen.",
          "Gebruik een headset; dat lost het meestal meteen op.",
        ],
      },
    ],
    video: [
      {
        q: "Anderen kunnen mij niet zien.",
        stappen: [
          "Kijk linksonder bij het camera-icoon: bij een rode streep klik je op Start Video.",
          "Sluit programma's die je camera al gebruiken, zoals Teams of FaceTime.",
          "Klik op het pijltje naast de camera en kies de juiste camera.",
        ],
      },
      {
        q: "Ik krijg helemaal geen beeld.",
        stappen: [
          "Waarschijnlijk staat de toegang uit. Windows: Instellingen → Privacy → Camera. Mac: Systeeminstellingen → Privacy en beveiliging → Camera.",
          "Zet Zoom daar aan.",
          "Helpt dat niet, herstart dan je computer.",
        ],
      },
      {
        q: "Het beeld hapert of bevriest.",
        stappen: [
          "Ga dichter bij je wifi-punt zitten of gebruik een netwerkkabel.",
          "Zet je eigen camera even uit; dat maakt bandbreedte vrij.",
          "Sluit andere programma's.",
        ],
      },
    ],
    overig: [
      {
        q: "Hoe verander ik mijn weergavenaam? (naam wijzigen)",
        stappen: [
          "Klik onderin op Deelnemers.",
          "Ga met je muis over je eigen naam en klik op More.",
          "Kies Hernoemen, typ je naam en klik op OK.",
        ],
      },
      {
        q: "Hoe deel ik mijn scherm?",
        stappen: [
          "Klik onderin op de groene knop Scherm delen.",
          "Kies het venster dat je wilt tonen en klik op Delen. Ga je presenteren, zet je presentatie dan vooraf al klaar.",
          "Op een Mac geef je Zoom eenmalig toestemming via Systeeminstellingen → Privacy en beveiliging → Schermopname.",
          "Lukt het niet, dan heeft de host het delen misschien beperkt; vraag het even.",
        ],
      },
      {
        q: "Ik word in een breakout room gezet. Wat nu?",
        stappen: [
          "Dat is een apart kamertje voor een gesprek in kleine kring.",
          "Klik op Join als dat gevraagd wordt.",
          "Kom je er niet uit, klik dan op Ask for Help; de begeleider komt naar je toe.",
        ],
      },
      {
        q: "Ik ben eruit gevlogen.",
        stappen: [
          "Klik opnieuw op de uitnodigingslink om terug te komen.",
          "Blijft het misgaan, herstart dan Zoom.",
          "Helpt dat niet, herstart je computer.",
        ],
      },
    ],
  },
  "Microsoft Teams": {
    link: [
      {
        q: "Ik kan de link naar de meeting niet vinden.",
        stappen: [
          "Kijk in de e-mailuitnodiging en in je agenda-afspraak; daar staat de knop Deelnemen aan de vergadering.",
          "Zoek anders in je mailbox op “Teams”.",
          "Kijk ook in je map ongewenste e-mail.",
        ],
      },
      {
        q: "Ik klik op de link en hij vraagt om de app.",
        stappen: [
          "Je hoeft niets te installeren. Kies Doorgaan in deze browser.",
          "Werkt de link nog niet, kopieer hem dan en plak hem in Microsoft Edge of Google Chrome.",
        ],
      },
      {
        q: "Ik moet inloggen of een code invullen.",
        stappen: [
          "Teams stuurt soms een eenmalige code naar je e-mail; vul die in.",
          "Lukt dat niet, vul dan je naam in en neem deel als gast.",
        ],
      },
    ],
    audio: [
      {
        q: "Ik hoor de anderen niet.",
        stappen: [
          "Zet het geluid van je computer aan en hard genoeg.",
          "Klik in de meeting op de drie puntjes en dan op Apparaatinstellingen.",
          "Controleer of de juiste luidspreker geselecteerd is.",
          "Helpt dat niet, probeer dan een koptelefoon of oortjes.",
        ],
      },
      {
        q: "De anderen kunnen mij niet horen.",
        stappen: [
          "Kijk of je microfoon niet gedempt staat; er mag geen streep door het microfoontje lopen.",
          "Klik op de drie puntjes en dan op Apparaatinstellingen, en kies de juiste microfoon.",
          "Een headset met microfoon werkt vaak beter dan de ingebouwde microfoon.",
        ],
      },
      {
        q: "Teams herkent mijn microfoon niet.",
        stappen: [
          "Gebruik je een losse Bluetooth- of USB-microfoon? Kies dan tijdelijk de microfoon van de computer zelf.",
          "Zet in de Teams-instellingen onder Machtigingen de optie Media aan.",
          "Zet de toegang aan in de instellingen van je computer. Windows: Instellingen → Privacy en beveiliging → Microfoon. Mac: Systeeminstellingen → Privacy en beveiliging → Microfoon. Zet Teams daar aan, en ook de toegang voor apps.",
        ],
      },
      {
        q: "Ik hoor een echo.",
        stappen: [
          "Een echo komt bijna altijd doordat iemand met twee apparaten tegelijk meedoet, of doordat twee mensen dicht bij elkaar zitten.",
          "Laat op één apparaat het geluid dempen.",
        ],
      },
    ],
    video: [
      {
        q: "Anderen zien mij niet.",
        stappen: [
          "Kijk of je camera aanstaat; er mag geen streep door het camera-icoon lopen.",
          "Klik op de drie puntjes en dan op Apparaatinstellingen.",
          "Kies daar de juiste camera.",
        ],
      },
      {
        q: "Teams vindt mijn camera niet.",
        stappen: [
          "Gebruik je een losse webcam? Kies dan tijdelijk de camera van de computer zelf.",
          "Zet in de Teams-instellingen onder Machtigingen de optie Media aan.",
          "Zet de toegang aan in de instellingen van je computer. Windows: Instellingen → Privacy en beveiliging → Camera. Mac: Systeeminstellingen → Privacy en beveiliging → Camera. Zet Teams daar aan, en ook de toegang voor apps.",
        ],
      },
      {
        q: "Mijn beeld hapert of bevriest.",
        stappen: [
          "Zet je virtuele achtergrond uit.",
          "Zet zo nodig ook je video uit; het gesprek loopt op geluid gewoon door.",
          "Sluit andere programma's en ga dichter bij de router zitten of gebruik een kabel.",
          "Helpt niets, herstart Teams; je neemt daarna opnieuw deel via de link.",
        ],
      },
    ],
    overig: [
      {
        q: "Ik heb geen Teams-account. Kan ik toch meedoen?",
        stappen: [
          "Ja. Klik op de link en kies Doorgaan in deze browser.",
          "Vul je naam in en neem deel als gast.",
          "Je wacht mogelijk even in de lobby tot de organisator je toelaat; dat hoort zo.",
        ],
      },
      {
        q: "Moet ik de app installeren?",
        stappen: [
          "Nee. Kies Doorgaan in deze browser; dat werkt in Microsoft Edge en Google Chrome.",
          "Wil je toch de app, dan kun je die downloaden — maar voor even meedoen is de browser sneller.",
        ],
      },
      {
        q: "Hoe werken de breakout rooms?",
        stappen: [
          "Als deelnemer hoef je niets te doen; de organisator opent de kamers.",
          "Je wordt automatisch naar je groepje verplaatst en daarna weer terug.",
          "Kies je zelf een kamer, klik dan op Deelnemen.",
        ],
      },
      {
        q: "Hoe deel ik mijn scherm?",
        stappen: [
          "Klik in de meetingbalk op het scherm-delen-icoon, het pijltje omhoog.",
          "Kies je hele bureaublad of één venster.",
          "Wil je het geluid van een filmpje meesturen, zet dan Met computergeluid aan vóórdat je het scherm kiest.",
        ],
      },
    ],
  },
};

// Vlak de data uit tot één lijst FaqItems.
const CAT_IDS: (keyof ToolBlock)[] = ["link", "audio", "video", "overig"];
export const VRAGEN: Vraag[] = TOOLS.flatMap((tool) =>
  CAT_IDS.flatMap((cat) =>
    (DATA[tool]?.[cat] ?? []).map((qa, i) => ({
      id: `${tool}-${cat}-${i}`.replace(/\s+/g, "-").toLowerCase(),
      categorie: cat,
      tool,
      vraag: qa.q,
      // Zonder dit is antwoord leeg zodra een vraag stappen heeft, en zoekt
      // de hulppagina alleen nog in de vraagtitel.
      antwoord: qa.a ?? (qa.stappen ?? []).join(" "),
      stappen: qa.stappen,
    }))
  )
);

