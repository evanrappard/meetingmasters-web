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
  { id: "overig", label: "Er gaat iets anders mis", icoon: "🛟", intro: "Haperingen, schermdelen, breakout rooms — of niets lijkt te werken." },
];

export const TOOLS = ["Algemeen", "SpatialChat", "Zoom Events", "Zoom", "Microsoft Teams"];

// ── Inhoud per tool en categorie ───────────────────────────────────────
type QA = { q: string; a: string };
type ToolBlock = { link: QA[]; audio: QA[]; video: QA[]; overig: QA[] };

const DATA: Record<string, ToolBlock> = {
  Algemeen: {
    link: [
      { q: "Ik kan de link naar de bijeenkomst niet vinden. Waar begin ik?", a: "Geen paniek. Zoek je uitnodigingsmail op: daarin staat de link waarmee je binnenkomt. Zoek in je mailbox op de naam van de organisatie of op 'uitnodiging'. Kijk ook even in je map ongewenste e-mail of spam — daar belandt zo'n mail soms." },
      { q: "Ik heb de link, maar ik kom de bijeenkomst niet in. Wat nu?", a: "Rustig aan, dit is meestal zo opgelost. Klik nog een keer op de link uit de mail. Werkt dat niet? Kopieer de link en plak hem in een andere browser (Google Chrome werkt vaak het beste). Herstart eventueel je computer of de meeting en probeer opnieuw." },
      { q: "Ik krijg een melding of foutmelding als ik wil binnenkomen.", a: "Lees rustig wat er staat en volg de knop die wordt aangeboden (bijvoorbeeld 'toestaan' of 'openen'). Helpt dat niet? Sluit het venster, klik opnieuw op de link uit de mail, of probeer een andere browser. Kom je er niet uit? Bij een begeleide bijeenkomst staat je contactpersoon voor je klaar — je vindt hem in je uitnodiging." },
      { q: "Het lukt echt niet en het is een begeleide MeetingMasters-bijeenkomst.", a: "Dan helpen we je persoonlijk. Je contactpersoon staat in je uitnodiging; samen is het zo opgelost. Je bent niet de enige die dit overkomt — we zijn het gewend." },
    ],
    audio: [
      { q: "Ik hoor de anderen niet.", a: "Controleer eerst of het geluid van je computer aanstaat en hard genoeg is. Kijk daarna in de instellingen van de meeting of het juiste luidsprekerkanaal is gekozen (bijvoorbeeld je koptelefoon in plaats van de laptopspeaker). Draag je oortjes? Haal ze er even uit en stop ze opnieuw in." },
      { q: "De anderen horen mij niet.", a: "Kijk of je microfoon niet uitstaat: klik op het microfoon-icoon zodat er geen streepje doorheen staat. Controleer in de instellingen of de juiste microfoon is geselecteerd. In een browser vraagt de meeting soms toestemming voor je microfoon — geef die toestemming even." },
      { q: "Mijn microfoon of speaker staat op het verkeerde apparaat.", a: "Ga naar de audio-instellingen in de meeting en kies bewust het juiste apparaat, zowel voor de microfoon als voor het geluid. Stel dit ook goed in bij de geluidsinstellingen van je computer zelf. Test je microfoon: bij het praten zie je vaak een balkje bewegen." },
      { q: "De browser vraagt of laat mijn microfoon niet toe.", a: "Klik in je browser op het slotje links in de adresbalk (of op de drie puntjes en dan 'instellingen'). Zet daar de toestemming voor de microfoon aan. Vernieuw daarna de pagina. Zo weet de meeting dat hij je microfoon mag gebruiken." },
      { q: "Er is een vervelende echo.", a: "Een echo ontstaat meestal als meerdere mensen in dezelfde ruimte tegelijk meedoen. Zorg dan dat maar één apparaat het geluid aan heeft. Een headset of oortjes gebruiken helpt ook goed tegen echo." },
    ],
    video: [
      { q: "Ik zie mezelf niet, mijn camera doet het niet.", a: "Rustig, meestal is dit klein. Controleer of je camera aanstaat (klik op het camera-icoon zodat er geen streepje doorheen staat). Kijk in de instellingen of de juiste camera is gekozen. Zit er misschien nog een schuifje of plakkertje voor je camera? Haal dat weg." },
      { q: "Mijn camera lijkt bezet of wordt door iets anders gebruikt.", a: "Je camera kan maar op één plek tegelijk actief zijn. Sluit andere programma's en tabbladen die de camera gebruiken (denk aan een andere video-app of een tweede meeting). Herstart daarna eventueel de meeting." },
      { q: "De browser laat mijn camera niet toe.", a: "Klik op het slotje links in de adresbalk (of op de drie puntjes en dan 'instellingen') en zet de toestemming voor de camera aan. Vernieuw daarna de pagina — dan verschijnt je beeld meestal alsnog." },
      { q: "Mijn beeld blijft hangen of bevriest.", a: "Dit ligt meestal aan de internetverbinding. Zet je beeld eventueel even uit en weer aan, of ververs de pagina. Vaak loopt het beeld daarna weer soepel." },
    ],
    overig: [
      { q: "Mijn internetverbinding is slecht.", a: "Geen zorgen, dit is vaak snel beter. Ga dichter bij je router zitten, of stap over op een ander wifi-netwerk. Werkt het thuis niet goed? Maak een hotspot met je telefoon (via 4G/5G) en verbind je computer daarmee." },
      { q: "Alles voelt traag. Hoe krijg ik meer snelheid?", a: "Sluit andere tabbladen en programma's die je niet nodig hebt, zeker als daar video of downloads in draaien. Dat geeft de meeting meer ruimte, waardoor beeld en geluid weer soepel worden." },
      { q: "Werkt mijn browser wel goed?", a: "Gebruik bij voorkeur Google Chrome — dat werkt voor deze meetings vaak het beste. Controleer of je browser de laatste update heeft. Sluit de browser daarna helemaal af en open hem opnieuw." },
      { q: "Er hapert van alles. Wat is de simpelste oplossing?", a: "Verlaat de meeting en kom opnieuw binnen via de link uit je uitnodigingsmail. Opnieuw joinen lost verrassend veel op. Helpt dat niet, herstart dan je internet of je computer en probeer nog een keer." },
      { q: "Niets werkt en ik raak in paniek.", a: "Adem even rustig, we lossen dit samen op. Bij een begeleide MeetingMasters-bijeenkomst staat je contactpersoon klaar — kijk even in je uitnodiging. Je hoeft dit niet alleen op te lossen." },
    ],
  },

  SpatialChat: {
    link: [
      { q: "Ik kan mijn uitnodigingslink niet vinden. Wat nu?", a: "Geen paniek. Kijk in de mail of agenda-uitnodiging van de organisator, ook in je spam- of ongewenste-mailmap. Vind je hem echt niet? Neem contact op met je begeleider — die staat in je uitnodiging — dan krijg je de link opnieuw." },
      { q: "Ik heb de link, maar er gebeurt niets als ik erop klik.", a: "Kopieer de hele link en plak hem handmatig in de adresbalk van je browser (bij voorkeur Chrome, Firefox of Edge) en druk op Enter. SpatialChat opent dan vanzelf — downloaden hoeft niet. Lukt het nog niet? Kijk in je uitnodiging wie je contactpersoon is." },
      { q: "Moet ik een account aanmaken of iets installeren?", a: "Nee. Je hoeft niets te installeren en geen account aan te maken. Na het klikken vul je alleen even je naam en organisatie in als 'visitekaartje' en klik je op Continue. Klaar." },
      { q: "Ik ben de SpatialChat-pagina/het tabblad kwijt.", a: "Zoek in je browser het tabblad met een rood stipje erop. Dat is de pagina waar je microfoon en beeld actief zijn, dus daar staat je event nog gewoon open." },
      { q: "Ik kom een kamer niet in.", a: "Waarschijnlijk zit die kamer vol. Achter de kamernaam zie je het aantal deelnemers (bijvoorbeeld 50/50). Probeer een andere kamer of wacht even en probeer het zo opnieuw." },
    ],
    audio: [
      { q: "Mijn microfoon doet het niet. Wat moet ik doen?", a: "Kijk eerst naar de balk onder in beeld: staat er een rode streep door het microfoon-icoontje, klik er dan op zodat het groen wordt. Werkt het nog niet, dan heeft je browser geen toestemming. Klik op het slotje links in de adresbalk, zet de microfoon op Toestaan (Allow) en herlaad de pagina." },
      { q: "De browser vroeg toestemming en ik klikte per ongeluk op Blokkeren.", a: "Dat is zo hersteld. Klik op het slotje of camera-icoontje links in de adresbalk, zet microfoon (en camera) op Toestaan, en klik daarna op Opnieuw proberen of herlaad de pagina. Dit is verreweg de meest voorkomende oorzaak, dus dit lost het meestal meteen op." },
      { q: "Anderen horen mij niet of ik hoor hen niet.", a: "Net als in het echt moet je binnen gehoorsafstand staan. Klik op je eigen beeld, houd vast en sleep jezelf dichter naar de ander toe. Wil je de hele kamer tegelijk toespreken, klik dan op de megafoon in de onderbalk — dan ben je voor iedereen in de kamer hoorbaar, ongeacht de afstand." },
      { q: "Er staat groen, maar het geluid klopt niet.", a: "Klik op het tandwiel-icoontje (instellingen) en controleer of het juiste microfoon- en speaker-apparaat is gekozen. Gebruik je een oortje of headset, zorg dan dat die met je computer verbonden is en niet nog met je telefoon." },
    ],
    video: [
      { q: "Mijn camera werkt niet. Wat kan ik doen?", a: "Kijk in de onderbalk naar het camera-icoontje: staat er een rode streep doorheen, klik erop zodat het groen wordt. Zie je jezelf dan nog niet, klik op het slotje links in de adresbalk, zet de camera op Toestaan (Allow) en herlaad de pagina." },
      { q: "De browser vraagt niet om cameratoestemming, of ik heb geblokkeerd.", a: "Klik op het slotje of camera-icoontje links in de adresbalk en zet de camera op Toestaan. Werkt het dan nog niet, controleer of je browser toegang tot de camera heeft in de systeeminstellingen van je computer (onder Privacy/Beveiliging) en herstart daarna de browser." },
      { q: "Ik zie mezelf wel, maar anderen niet (of zij mij niet).", a: "Dan staat je camera goed, maar ben je waarschijnlijk te ver weg. SpatialChat werkt op nabijheid: sleep je eigen beeld dichter naar de ander toe, dan verschijnt vanzelf de videoverbinding. Let op: de camera van de ander moet natuurlijk ook aanstaan." },
      { q: "In de presentatiekamer staat mijn camera opeens uit.", a: "Dat klopt en is normaal. De presentatiekamer is een luisterruimte: alleen de presentator is zichtbaar en hoorbaar. Ga je daarna terug naar een gewone kamer, zet dan zelf je camera en microfoon in de onderbalk weer aan." },
    ],
    overig: [
      { q: "Welke browser en welk apparaat kan ik het beste gebruiken?", a: "Gebruik bij voorkeur een laptop of computer, dat geeft de fijnste ervaring en alle functies werken. Kies Chrome, Firefox of Edge. Safari werkt niet altijd goed, dus vermijd die. Op een telefoon of tablet werkt niet alles en is het scherm klein." },
      { q: "Hoe beweeg ik door de ruimte en tussen kamers?", a: "Klik op je eigen beeld, houd vast en sleep jezelf naar de gewenste plek; loslaten zet je daar neer. Rechtsonder kun je in- en uitzoomen (of met je muiswiel). Andere kamers vind je rechtsboven: klik op de kamernaam en je wandelt er vanzelf heen." },
      { q: "Hoe deel ik mijn scherm?", a: "Klik in de onderbalk op het scherm-icoontje (naast microfoon en camera). Kies of je een tabblad, een venster of je hele scherm deelt en bevestig. Tip: deel liever één tabblad of venster — dat is rustiger voor je eigen en andermans computer." },
      { q: "Ik zit op een werk- of bedrijfsnetwerk en de verbinding hapert.", a: "Sommige zakelijke netwerken blokkeren video- en audioverkeer (WebRTC). Probeer eventueel een ander netwerk of je mobiele hotspot. Blijft het haperen, kijk dan in je uitnodiging wie je contactpersoon is, dan geven we je (of je IT-afdeling) de precieze technische gegevens die nodig zijn." },
    ],
  },

  "Zoom Events": {
    link: [
      { q: "Ik heb geen registratie- of join-mail ontvangen. Wat nu?", a: "Geen paniek. Kijk eerst even in je spam- of ongewenste-mailmap; de mail zit daar vaak. Verplaats hem naar je inbox en de link werkt gewoon. Vind je niets? Vraag je begeleider uit de uitnodiging om hulp; je krijgt dan meteen een persoonlijke join-link." },
      { q: "Ik heb wel geregistreerd maar krijg geen enkele Zoom-mail.", a: "Dat lossen we snel op. Maak een gratis Zoom-account aan met hetzelfde e-mailadres waarmee je je hebt aangemeld, of vraag je begeleider uit de uitnodiging om hulp. Je krijgt dan direct je persoonlijke join-link toe zodat je alsnog binnenkomt." },
      { q: "Mijn join-link werkt niet of ik kom er niet mee in.", a: "Controleer of je bent aangemeld met hetzelfde e-mailadres als bij registratie; daar wordt je toegang aan gekoppeld. Lukt het nog niet? Vraag je begeleider uit de uitnodiging om hulp. We kunnen je dan handmatig op de lijst zetten of een verse link geven." },
    ],
    audio: [
      { q: "Ik hoor niets, wat kan ik doen?", a: "Klik op het pijltje naast het microfoon-icoon onderin en controleer of het juiste luidsprekerapparaat is gekozen (bijv. je koptelefoon in plaats van de laptopspeaker). Zet het volume open en probeer eventueel de pagina te verversen." },
      { q: "Anderen horen mij niet.", a: "Kijk of je niet gedempt bent (rode streep door de microfoon) en klik zo nodig op 'Unmute'. Controleer via het pijltje naast de microfoon of de juiste microfoon is geselecteerd, en geef je browser toestemming om de microfoon te gebruiken." },
      { q: "Mijn microfoon lijkt door een ander programma bezet.", a: "Sluit andere apps die geluid of camera gebruiken (Teams, FaceTime, een tweede Zoom-venster). Ververs daarna de pagina. In een webinar-sessie is dit normaal: daar staan je audio en video bewust uit en stel je vragen via de Q&A." },
    ],
    video: [
      { q: "Mijn camera doet het niet.", a: "Zie je een rode streep door het camera-icoon, klik dan op 'Start video'. Werkt het nog niet, klik op het pijltje naast het icoon en kies de juiste camera. Geef ook je browser toestemming om de camera te gebruiken." },
      { q: "Ik zie de verkeerde camera of een zwart beeld.", a: "Klik op het pijltje naast het camera-icoon en selecteer bij de camera-instellingen de juiste webcam. Sluit andere programma's die de camera gebruiken; Zoom kan de camera niet aan als een andere app hem vasthoudt." },
      { q: "Ik kan mezelf niet in beeld brengen in deze sessie.", a: "In een webinar-sessie kunnen deelnemers bewust geen video of audio delen; je volgt de sprekers en stelt vragen via de Q&A. In een gewone meeting-sessie kun je wél je camera aanzetten met 'Start video'." },
    ],
    overig: [
      { q: "Ik zie de join-knop niet bij een sessie.", a: "Dan is de sessie nog niet gestart. Wacht rustig even tot de spreker de sessie opent; zodra dat gebeurt verschijnt vanzelf de blauwe 'Join'-knop en kun je erin. Sessies die live zijn herken je aan het rode 'Now'." },
      { q: "Hoe wissel ik tussen sessies of vind ik het volledige programma?", a: "Klik bovenin op de tab 'Sessions' voor het overzicht van alle sessies. Achter elke sessie zit een 'Join'-knop. Via het bladwijzer-icoon voeg je sessies toe aan je eigen agenda onder 'Itinerary', zodat je makkelijk kunt overstappen." },
      { q: "Waar vind ik de koffie- of lunchpauze?", a: "De pauze- en netwerkruimtes vind je onder de tab 'Expo'. Klik daar op 'Enter booth' bij een ruimte die 'in progress' is (rood aangegeven) en klik op 'Join'. Zo loop je even binnen voor een informeel moment." },
      { q: "Ik kom helemaal niet in het event of de meeting.", a: "Vrijwel elke browser werkt; op een Chromebook kun je het beste de Zoom-webapp gebruiken. Ben je spreker? Doe dan mee via de Zoom-app. Kom je er niet uit? Vraag je begeleider uit de uitnodiging om hulp." },
    ],
  },

  Zoom: {
    link: [
      { q: "Ik kan de link niet vinden.", a: "Zoek in je e-mail op 'Zoom' of 'uitnodiging' en check ook je spam- of ongewenste map. In de mail staat een blauwe link of een adres dat begint met zoom.us; klik daarop. Lukt het niet? Vraag je begeleider uit de uitnodiging om de link opnieuw." },
      { q: "Er wordt om een wachtwoord of code gevraagd.", a: "Geen paniek: die 'passcode' staat gewoon onderaan dezelfde uitnodigingsmail. Kopieer of typ hem over. Kom je er niet uit? Bij een begeleide bijeenkomst staat je contactpersoon voor je klaar — je vindt hem in je uitnodiging." },
      { q: "Ik moet Zoom downloaden maar dat lukt niet.", a: "Het hoeft niet per se. Klik in het scherm dat verschijnt op 'Annuleren' en kies onderaan de pagina 'Join from your browser' (deelnemen vanuit je browser). Vul je naam in en je bent binnen, zonder iets te installeren." },
      { q: "Ik zie 'De host laat u zo binnen' / een wachtkamer.", a: "Dat klopt en is normaal. Je staat in de digitale wachtkamer en wordt binnen een minuutje toegelaten. Blijf gewoon even in dit scherm en sluit het niet af." },
    ],
    audio: [
      { q: "Ik hoor niemand.", a: "Klik linksonder bij de microfoon op 'Deelnemen met computeraudio' (Join with Computer Audio) als dat nog niet is gebeurd. Zet daarna het volume van je apparaat wat hoger. Helpt dat niet? Klik op het pijltje naast de microfoon en kies bij 'Selecteer een speaker' bijvoorbeeld je koptelefoon of luidsprekers." },
      { q: "Niemand kan mij horen.", a: "Kijk linksonder: staat er een rode streep door de microfoon, dan sta je op 'stil' (mute). Klik één keer op de microfoon om jezelf hoorbaar te maken. Werkt het nog niet? Klik op het pijltje naast de microfoon en kies de juiste microfoon. Vaak helpt het om oortjes of een headset te gebruiken." },
      { q: "Ik hoor een vervelende echo.", a: "Dat komt bijna altijd doordat iemand met twee apparaten tegelijk is ingelogd, of twee mensen dicht bij elkaar zitten. Laat één apparaat het geluid uitzetten. Zit je zelf op laptop én telefoon? Log op één ervan uit voor de audio." },
    ],
    video: [
      { q: "Anderen kunnen mij niet zien.", a: "Kijk linksonder bij het camera-icoon: staat er een rode streep doorheen, klik dan op 'Start Video'. Zorg dat geen ander programma (zoals Teams of FaceTime) je camera al gebruikt. Met het pijltje naast de camera kies je zo nodig de juiste camera." },
      { q: "Ik krijg helemaal geen beeld / Zoom mag mijn camera niet gebruiken.", a: "Waarschijnlijk staat de toegang uit. Op Windows: Instellingen > Privacy > Camera. Op Mac: Systeeminstellingen > Privacy en beveiliging > Camera. Zet Zoom daar aan. Helpt dat niet, herstart dan je computer; dat lost het meestal op." },
      { q: "Het beeld hapert of bevriest.", a: "Dat ligt bijna altijd aan de internetverbinding. Ga zo dicht mogelijk bij je wifi zitten of gebruik een kabel. Zet eventueel je eigen camera even uit; dan komt er bandbreedte vrij en wordt de verbinding rustiger." },
    ],
    overig: [
      { q: "Hoe verander ik mijn weergavenaam?", a: "Klik onderin op 'Deelnemers' (Participants), ga met je muis over je eigen naam, klik op 'More' (meer) en kies 'Hernoemen' (Rename). Typ je naam en klik op OK." },
      { q: "Hoe deel ik mijn scherm?", a: "Klik onderin op de groene knop 'Scherm delen' (Share Screen), kies het venster dat je wilt tonen en klik op 'Delen'. Lukt het niet, dan heeft de host het delen misschien beperkt; vraag het even of kijk in je uitnodiging wie je contactpersoon is. Op een Mac moet je Zoom eenmalig toestemming geven via Systeeminstellingen > Privacy en beveiliging > Schermopname." },
      { q: "Ik word in een breakout room (klein groepje) gezet, wat nu?", a: "Dat is een apart kamertje voor een gesprek in kleine kring. Klik op 'Join' (deelnemen) als dat gevraagd wordt. Kom je er niet uit? Klik in de breakout op 'Ask for Help' (vraag om hulp), dan komt de begeleider naar je toe." },
      { q: "Zoom valt weg of ik ben eruit gevlogen.", a: "Blijf rustig: klik gewoon opnieuw op de uitnodigingslink om terug te komen. Blijft het misgaan, herstart dan Zoom of je apparaat. Tijdens onze begeleide bijeenkomsten staat er altijd iemand klaar om je weer online te helpen." },
    ],
  },

  "Microsoft Teams": {
    link: [
      { q: "Ik kan de link naar de meeting niet vinden. Wat nu?", a: "Rustig blijven. Kijk eerst in de e-mailuitnodiging en in je agenda-afspraak: de knop 'Deelnemen aan de vergadering' of de link staat daarin. Zoek eventueel op 'Teams' in je mailbox. Kom je er niet uit? Vraag je begeleider uit de uitnodiging om de link." },
      { q: "Ik heb op de link geklikt maar er gebeurt niets / hij vraagt om de app.", a: "Geen zorgen, je hoeft niets te installeren. Kies in het scherm voor 'Doorgaan in deze browser' in plaats van de app. Werkt de link nog steeds niet, kopieer hem dan en plak hem in Microsoft Edge of Google Chrome." },
      { q: "Ik moet inloggen of een code invullen, maar dat lukt niet.", a: "Afhankelijk van de instellingen vraagt Teams soms om in te loggen of om een eenmalige code die naar je e-mail wordt gestuurd. Vul die code in en je bent binnen. Lukt het niet? Vul dan gewoon je naam in als gast, of vraag je begeleider uit de uitnodiging om hulp." },
    ],
    audio: [
      { q: "Ik hoor de anderen niet.", a: "Loop deze stappen af: 1) staat het geluid van je computer aan en hard genoeg? 2) Klik in de meeting op de drie puntjes ('...') en dan op 'Apparaatinstellingen', en controleer of de juiste luidspreker is geselecteerd. Helpt dat niet, probeer dan een koptelefoon of oortjes." },
      { q: "De anderen kunnen mij niet horen.", a: "Kijk of je microfoon niet gedempt (muted) staat: er mag geen streep door het microfoontje lopen. Klik erop om te dempen of te ondempen. Controleer via de drie puntjes en 'Apparaatinstellingen' of de juiste microfoon is gekozen. Een headset met microfoon werkt vaak beter dan de ingebouwde microfoon." },
      { q: "Teams herkent mijn microfoon helemaal niet.", a: "Dit heeft meestal een van deze oorzaken: 1) gebruik je een losse (Bluetooth/USB) microfoon? Kies dan tijdelijk de microfoon van de pc zelf. 2) Teams heeft geen toestemming: zet bij de instellingen onder 'Machtigingen' de optie 'Media' aan. 3) Zet in de instellingen van je computer zelf (Privacy) 'toegang tot microfoon' aan, ook voor apps." },
      { q: "Ik hoor een vervelende echo.", a: "Een echo komt bijna altijd doordat iemand met twee apparaten tegelijk inbelt (bijvoorbeeld telefoon én laptop), of doordat twee deelnemers dicht bij elkaar zitten. Laat op één van de apparaten het geluid dempen, dan is de echo weg." },
    ],
    video: [
      { q: "Mijn camera doet het niet, anderen zien mij niet.", a: "Check: 1) staat je camera aan (geen streep door het camera-icoon)? 2) Klik op de drie puntjes ('...'), dan 'Apparaatinstellingen', en kijk of de juiste camera is geselecteerd. Zo niet, kies hem daar." },
      { q: "Teams vindt mijn camera niet.", a: "Meestal is het een van deze drie: 1) gebruik je een losse webcam? Kies dan even de camera van de pc zelf. 2) Zet bij de instellingen onder 'Machtigingen' de optie 'Media' aan. 3) Zet in de instellingen van je computer (Privacy) 'toegang tot camera' aan, ook voor apps." },
      { q: "Mijn beeld hapert of bevriest.", a: "Dit ligt bijna altijd aan de internetverbinding. Zet je virtuele achtergrond en eventueel je video even uit, sluit andere programma's (Chrome, Outlook, WhatsApp), en ga dichter bij de router zitten of gebruik een netwerkkabel. Helpt het niet? Herstart Teams (je moet dan opnieuw deelnemen via de link)." },
    ],
    overig: [
      { q: "Ik heb geen Teams-account, kan ik toch meedoen?", a: "Ja, zeker. Klik op de link, kies 'Doorgaan in deze browser', vul je naam in en neem deel als gast. Mogelijk wacht je nog heel even in de lobby tot de organisator je toelaat — dat is normaal." },
      { q: "Kan ik in de browser deelnemen of moet ik de app installeren?", a: "Beide kan. Je hoeft niets te installeren: kies 'Doorgaan in deze browser' (werkt in Microsoft Edge en Google Chrome). Wil je toch de app? Dan kun je die downloaden, maar voor even meedoen is de browser het snelst." },
      { q: "Hoe werken de breakout rooms (aparte groepjes)?", a: "Als deelnemer hoef je niets te doen: de organisator opent de kamers en je wordt automatisch verplaatst naar je groepje, en na afloop weer terug naar de hoofdsessie. Kies je zelf je kamer? Klik dan op 'Deelnemen'." },
      { q: "Hoe deel ik mijn scherm?", a: "Klik in de meetingbalk op het scherm-delen-icoon (pijltje omhoog). Kies dan of je een heel bureaublad deelt of één specifiek venster/bestand. Wil je ook geluid van een filmpje meesturen? Zet dan 'Met computergeluid' aan vóórdat je het scherm kiest." },
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
      antwoord: qa.a,
    }))
  )
);

