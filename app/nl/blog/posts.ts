export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  iso: string;
  img: string;
  imgAlt: string;
  excerpt: string;
  dek: string;
  metaDescription: string;
  readingMinutes: number;
  blocks: BlogBlock[];
};

export const POSTS: BlogPost[] = [
  {
    "slug": "terug-naar-kantoor",
    "title": "Terug naar kantoor: het antwoord op de verkeerde vraag",
    "date": "14 augustus 2026",
    "iso": "2026-08-14",
    "img": "/images/blog/heen-en-weer.webp",
    "imgAlt": "Illustratie bij blog over de discussie tussen thuiswerken en terug naar kantoor",
    "excerpt": "Steeds meer werkgevers leggen kantoordagen vast. Maar de discussie gaat niet over waar mensen werken — hij gaat over samenhang. En daar praat niemand meer over.",
    "dek": "Bij ABN AMRO ligt een cao-voorstel om kantoordagen vast te leggen. Beide partijen willen hetzelfde, en toch loopt het gesprek vast. Omdat het over het verkeerde onderwerp gaat.",
    "metaDescription": "Kantoordagen vastleggen in de cao: het middel is het doel geworden. Waarom de vraag niet is wáár mensen werken, maar hóé ze samenwerken — en wat een virtueel kantoor daaraan verandert.",
    "readingMinutes": 6,
    "blocks": [
      {
        "type": "p",
        "text": "Bij ABN AMRO ligt een cao-voorstel om kantoordagen vast te leggen. De onderhandeling gaat over waar mensen werken. Maar daar gaat de discussie niet echt over. En ook niet over productiviteit, zoals wordt gesteld. En slechts indirect over creativiteit of innovatiekracht. De onderliggende pijn die wordt beschreven, gaat over het teruglopen van de samenhang nu niet iedereen meer op dezelfde plek zit. Zolang dat echter slechts een afgeleide vraag is, en niet het hoofdpunt van gesprek, praat iedereen langs elkaar heen."
      },
      {
        "type": "h2",
        "text": "Steeds meer werkgevers leggen kantoordagen vast"
      },
      {
        "type": "p",
        "text": "Eerst de feiten. ABN AMRO wil in de nieuwe cao vastleggen dat medewerkers minimaal de helft van hun werkweek op kantoor doorbrengen. De bank motiveert dat met betere samenwerking, meer creativiteit en een duidelijkere scheiding tussen werk en privé. Ten dele verdedigbaar. Opvallend is echter vooral de route. Om zo'n verplichting in een cao op te nemen, is ongebruikelijk en lijkt af te sluiten waar het juist om gaat: meer contact. De huidige cao van de bank legt de keuze juist bij het overleg tussen medewerker en leidinggevende. Wat eerst een gesprek was, moet nu dus een afdwingbare afspraak worden."
      },
      {
        "type": "p",
        "text": "Daarmee loopt ABN AMRO voorop in een bredere beweging. Uit onderzoek van werkgeversorganisatie AWVN blijkt dat bijna acht op de tien werkgevers al een minimumaantal kantoordagen hanteert, meestal twee per week. En de druk neemt toe. In de CEO Outlook van KPMG uit 2024 verwachtte ruim acht op de tien bestuurders dat medewerkers binnen drie jaar weer volledig op kantoor zouden werken. Een jaar eerder was dat nog ruim zes op de tien. Wat toen een verwachting was, staat nu op de onderhandelingstafel."
      },
      {
        "type": "h2",
        "text": "Het leiderschap heeft een punt"
      },
      {
        "type": "p",
        "text": "Ook al wordt deze niet primair zo benoemd: de zorg voor uitholling van de organisatie is reëel. Een langlopende Amerikaanse studie in Science laat zien dat meer dan de helft van de thuiswerkers zich minder verbonden voelt met collega's. Alleenwonenden zijn het kwetsbaarst. Jonge medewerkers kennen niemand aan wie ze even een vraag kunnen stellen. Inwerken hapert, kennis stroomt trager, het wij-gevoel slijt. Wie eindverantwoordelijk is voor een organisatie, kan daar niet naar blijven kijken."
      },
      {
        "type": "h2",
        "text": "De medewerkers hebben ook een punt"
      },
      {
        "type": "p",
        "text": "Thuiswerken levert iets op waar niemand meer omheen kan. Geen twee uur reizen voor een overleg van één uur. Werk dat past rond school, mantelzorg of een ziekenhuisafspraak. Ruimte om geconcentreerd door te werken. Minder kilometers, lagere kosten. Ruim acht op de tien werknemers ziet thuiswerken inmiddels als een belangrijke arbeidsvoorwaarde. Mensen hebben hun leven erop ingericht, en wie dat terugdraait, neemt iets af."
      },
      {
        "type": "p",
        "text": "Opvallend genoeg delen ook zij de diagnose. Dat samenhang moeilijker wordt als iedereen ergens anders zit, ontkent bijna niemand. En dat daarvoor actie nodig is, ook niet."
      },
      {
        "type": "h2",
        "text": "Toch verhardt de discussie"
      },
      {
        "type": "p",
        "text": "Hoe loopt een gesprek vast waarin beide partijen hetzelfde willen? Doordat het over het verkeerde onderwerp gaat. Aanwezigheid is het enige middel dat te tellen, te controleren en vast te leggen is. Dus grijpt de leiding daarnaar, en stuurt op kantoordagen terwijl ze verbondenheid bedoelt. Medewerkers horen geen zorg, maar wantrouwen, en gaan over hun vrijheid praten. Vakbonden onderhandelen erover, en zodra iets onderhandelbaar wordt, is het een ruilmiddel. Twee dagen tegen een andere regeling."
      },
      {
        "type": "p",
        "text": "Bij ABN AMRO is dat al zichtbaar. Vakbond De Unie noemt het voorstel een zwaktebod van het management en stelt dat het maar om een kleine groep gaat die vrijwel nooit naar kantoor komt. De posities staan vast voordat het gesprek is begonnen."
      },
      {
        "type": "quote",
        "text": "Het middel is het doel geworden. Over de samenhang waar het mee begon, praat niemand meer."
      },
      {
        "type": "h2",
        "text": "De vraag is niet waar, maar hoe"
      },
      {
        "type": "p",
        "text": "Samenhang ontstaat niet door aanwezigheid zelf. Op de kantoren van vroeger ontstond zij door alles wat er omheen gebeurde: de vraag over het bureau heen, het praatje bij het apparaat, het samen nalopen van een lastig gesprek."
      },
      {
        "type": "p",
        "text": "Sinds 2020 is er veel geregeld over wáár mensen mogen werken. Over hóé ze samenwerken is bijna niets afgesproken. Dat groeide vanzelf, in het tempo waarin Teams en Zoom werden uitgerold. Steeds tactischer, steeds transactioneler. Agenda, aftikken, volgende. Organisaties accepteerden een manier van werken waarvan ze de spelregels nooit hebben opgeschreven. En nu dat structureel schuurt, grijpen ze naar het enige wat wel is vastgelegd. De plaats."
      },
      {
        "type": "h2",
        "text": "Voer het gesprek"
      },
      {
        "type": "p",
        "text": "De vragen die nodig zijn om anno 2026 weer aan samenhang te bouwen, zijn het gevolg van verwaarloosde relaties in een snel veranderende tijd. Ze gaan over de basis van samenwerken: over ik versus wij. Over vrijheid en bereikbaarheid. Over kennis en communicatie."
      },
      {
        "type": "ul",
        "items": [
          "Waar spreken we elkaar op aan?",
          "Hoe bereiken we elkaar: bellen, appen of mailen?",
          "Wanneer ben je beschikbaar en wanneer juist niet?",
          "Mogen die voorkeuren per persoon verschillen, of geldt voor iedereen hetzelfde?",
          "Wat doen we samen en wat doet ieder alleen?",
          "Welke momenten zijn zo belangrijk dat we ervoor bij elkaar komen, online of op locatie?"
        ]
      },
      {
        "type": "p",
        "text": "Zo'n gesprek levert inzicht, toegenomen begrip en nieuwe richting: het startpunt voor een veranderende en meer verbindende cultuur. Bovendien kunnen daarmee afspraken worden gemaakt met veel meer houdbaarheid, waarmee een wij-gevoel niet alleen besproken wordt, maar ook beklijft."
      },
      {
        "type": "h2",
        "text": "Geef het een plek: de derde weg tussen thuis en kantoor"
      },
      {
        "type": "p",
        "text": "Cultuur ontstaat als mensen zich dagelijks op vergelijkbare manier gedragen, en gedrag dat het wij-gevoel bevordert heeft een plek nodig waar het zichtbaar is. Wie op kantoor zit, heeft die plek twee of drie dagen per week. De rest van de week is er niets."
      },
      {
        "type": "p",
        "text": "Echte samenhang ontstaat als er een speelveld ontstaat waar locatie niet uitmaakt. Waar nabijheid kan bestaan zonder dat die fysiek is. Waar verbinding kan ontstaan ongeacht de plaats of tijdzones. Wij pleiten voor 'de derde weg', namelijk het virtueel kantoor. Niet in plaats van thuiswerken. Niet in plaats van kantoor. Maar ertussen. Dat virtueel kantoor is een vaste online omgeving waar collega's aanwezig zijn zonder dat daar een agendapunt voor nodig is. Waar je zit en samen aan het werken bent, net als in het 'echte' kantoor. En waar, online, het informele gesprek ontstaat in en tussen meetings, net als op de fysieke werkvloer."
      },
      {
        "type": "h2",
        "text": "Verhuis naar een nieuwe plek — en ruim meteen de zolder op"
      },
      {
        "type": "p",
        "text": "Het mooie van een overgang naar een virtueel kantoor, is dat de plek en het gesprek elkaar versterken. Wie een nieuwe werkplek inricht, moet de vragen van hierboven wel beantwoorden. Waar zit je normaal gesproken? Wanneer sta je open voor een praatje en wanneer niet? Mag de camera uit? Moet je het melden als je even een boodschap gaat doen? Zoals je de zolder vaak pas opruimt als je gaat verhuizen, zo gaat het ook met het inrichten van je virtuele kantoor: het is de natuurlijke aanleiding voor het gesprek dat allang gevoerd had moeten worden. En daarna draait het om: de plek houdt de afspraken levend, omdat het gedrag er elke dag zichtbaar is. Het kantoor is de aanleiding, niet het doel."
      }
    ]
  },
  {
    "slug": "heen-en-weer",
    "title": "Heen en weer. Thuiswerken — of terug naar kantoor?",
    "date": "30 juni 2026",
    "iso": "2026-06-30",
    "img": "/images/blog/heen-en-weer.webp",
    "imgAlt": "Illustratie bij blog over thuiswerken versus terug naar kantoor",
    "excerpt": "Thuiswerken of kantoorplicht? De discussie slingert heen en weer. Maar de plek is bijzaak — het gaat erom hoe je mensen écht verbindt, waar ze ook werken.",
    "dek": "De discussie over thuiswerken versus kantoor beweegt heen en weer als eb en vloed. Tijd voor een derde weg, waar niet de locatie centraal staat maar de mate van samenwerking.",
    "metaDescription": "Thuis of op kantoor? De discussie draait rond. Ontdek de derde weg: niet de locatie van werk telt, maar de mate van samenwerking en samen aanwezig zijn.",
    "readingMinutes": 3,
    "blocks": [
      {
        "type": "p",
        "text": "Centralisatie. Decentralisatie. Centralisatie. Decentralisatie… Het is een geruststellende golfbeweging die als eb en vloed door het organisatielandschap trekt. Op zoek naar uniformiteit, controle en schaalvoordelen? Centralisatie. Toch meer behoefte aan autonomie en hogere reactiesnelheid? Decentralisatie. Heen en weer. Heen en weer."
      },
      {
        "type": "p",
        "text": "De discussie over thuis of op kantoor werken volgt zo'n zelfde patroon. Ook die golfbeweging wordt door controle versus autonomie gedreven. Maar waar de discussie rond centrale of decentrale macht een vrij stabiel plaatje oplevert, gaat de golfbeweging rond thuiswerken steeds sneller. Voor we allemaal doordraaien, pleit ik voor een derde weg, een ultieme balans, waar de discussie niet langer draait om de locatie van werk, maar om de mate van samenwerking."
      },
      {
        "type": "p",
        "text": "De golfversnelling rond wel of niet thuiswerken is grotendeels technologie-gedreven. IBM experimenteerde er begin jaren '80 al mee, met de opkomst van de thuiscomputer. Toch bleef thuiswerken lang een taakgebonden uitzondering, gereserveerd voor Grote Klussen, als de uitwerking van het jaarlijkse businessplan. Tot de Coronacrisis. In een paar weken deed een hele wereld wat men decennialang had uitgesteld. Alles thuis. Alles online. En dat kon ook, met laptops, goede wifi en software die samenwerking ondersteunt."
      },
      {
        "type": "p",
        "text": "Sindsdien willen de meesten niet meer terug. Organisaties bewegen mee. Er komt thuiswerkbeleid, een toeslag voor de inrichting van een thuiswerkplek en zelfs recht op thuiswerken. Thuiswerken scheelt kantoorkosten, vergroot de vijver in een krappe arbeidsmarkt en past bij hoe mensen willen werken. Goede redenen. Maar dan: de bekende beweging. Behoefte aan controle. Aan meer centrale aansturing. Het gevoel dat de gezamenlijkheid verloren gaat. En dus: iedereen terug naar kantoor. Tot de volgende ronde. Als blijkt dat mensen op kantoor ook niet per se productief zijn. Als de roep om flexibiliteit luid klinkt. Als talent de files beu is en voor een organisatie met remote mogelijkheden kiest."
      },
      {
        "type": "p",
        "text": "Heen en weer. Totdat we beseffen dat het niet gaat om thuiswerken tegenover kantoor, maar locatie als bijzaak. Het gaat er niet om wáár iemand is, maar óf diegene er is. Of die bereikbaar en aanspreekbaar is. Het gaat om contact. De ander zien. Ruimte maken voor het toevallige gesprek, ook op afstand."
      },
      {
        "type": "p",
        "text": "Wat we nodig hebben is een gedeelde ruimte waar mensen aanwezig zijn, ook als er geen bijeenkomst is. Een digitale werkomgeving waar collega's elkaar tegenkomen, ook als daar geen directe reden toe is. Waar je even kunt binnenwandelen op een afdeling, of waar je rustig kunt samenwerken zonder dat er een agenda aan te pas komt."
      },
      {
        "type": "p",
        "text": "Wij werken met SpatialChat als remote office: een virtuele omgeving waar je kunt werken, een praatje kunt maken of even naar de virtuele koffiehoek kunt gaan. Waar je op basis van nabijheid een gesprek begint. Waar je een vraag kunt stellen die niet meteen een meeting wordt. Gewoon online. Gewoon werken. Gewoon samen aanwezig."
      },
      {
        "type": "p",
        "text": "Als locatie niet meer bepalend is maar samenzijn wel, kom je op een ander niveau. Dan is de vraag niet meer hoeveel dagen iemand op kantoor zit. Dan is de vraag hoe een cultuur gebouwd wordt waarin mensen elkaar sneller vinden. Waar medewerkers zich gezien voelen, ongeacht waar ze werken. Waar je collega's je reden zijn om 's ochtends in te loggen."
      },
      {
        "type": "p",
        "text": "Laten we het daar eens over hebben."
      }
    ]
  },
  {
    "slug": "online-beheersen",
    "title": "Online beheersen we nu allemaal wel.",
    "date": "10 juni 2026",
    "iso": "2026-06-10",
    "img": "/images/blog/online-beheersen.webp",
    "imgAlt": "Illustratie bij blog over online contact maken als vak",
    "excerpt": "Online contact maken is een vak apart. En dat is goed nieuws, want er is zoveel meer mogelijk dan de meeste mensen denken.",
    "dek": "Met een goed ontworpen online bijeenkomst krijg je dingen voor elkaar die fysiek niet zouden lukken. Het grid van vierkante hoofdjes is maar één manier van online samenkomen, en de wereld erbuiten is groter dan veel mensen weten.",
    "metaDescription": "Online contact maken is een vak: met het juiste ontwerp, werkvormen en omgeving breng je verspreide mensen echt samen, verder dan een grid vol hoofdjes.",
    "readingMinutes": 3,
    "blocks": [
      {
        "type": "p",
        "text": "Met een goed ontworpen online bijeenkomst krijg je dingen voor elkaar die fysiek niet zouden lukken. Tweehonderd mensen die in vijf minuten allemaal hun stem laten horen. Een internationale groep die elkaar maandelijks spreekt zonder ook maar één vliegticket. Een onboarding waarin nieuwe collega's op dag één al weten wie ze in welke hoek van het bedrijf moeten zoeken."
      },
      {
        "type": "p",
        "text": "Dat klinkt misschien ambitieus voor wie online vooral kent als een grid van vierkante hoofdjes met af en toe een screenshare. Daar wordt gezonden, maar niet echt gedeeld, en hoe groter, langer of spannender de bijeenkomst, hoe meer dat opbreekt. Toch is dat grid maar één manier van online samenkomen. Er zijn er meer, en de wereld erbuiten is groter dan veel mensen weten."
      },
      {
        "type": "h2",
        "text": "Online luistert nauwer dan live"
      },
      {
        "type": "p",
        "text": "Online doelgericht contact mogelijk maken vraagt drie dingen. Een ontwerp dat past bij wat je wilt bereiken. Werkvormen waarmee iedereen die erbij is ook werkelijk meedoet. En een omgeving die het soort gesprek faciliteert dat je nodig hebt."
      },
      {
        "type": "p",
        "text": "Die drie samen maken het verschil tussen een bijeenkomst waar mensen na afloop zeggen \"ik was erbij\" en een bijeenkomst waar ze zeggen \"ik heb er iets aan gehad\". En een scherm vraagt meer van dat ontwerp dan een zaal, niet minder. De afleiding is groter, wegkijken kost niemand moeite, en wie zich terugtrekt valt minder snel op. Precies daarom is het ontwerp belangrijker."
      },
      {
        "type": "p",
        "text": "Als je bijvoorbeeld laat stemmen door te bewegen naar een groen of rood vlak, in plaats van kort klikken, blijf je meer alert. En als je ruimte laat voor gesprekjes, verspreid over de kamer, dan haal je vaak meer op dan in een plenaire ronde."
      },
      {
        "type": "h2",
        "text": "Voor wat ertoe doet, volstaat de standaard niet"
      },
      {
        "type": "p",
        "text": "Een community van vijfhonderd mensen die elkaar normaal alleen via nieuwsbrieven tegenkomt, kan in een goed opgezette online ruimte echt netwerken. Een strategiedag met honderd man kan na de lunch nog steeds energie hebben. Een verandertraject kan landen bij teams die over drie tijdzones verspreid werken."
      },
      {
        "type": "p",
        "text": "In een offline setting bel je voor zo'n bijeenkomst een zaal, een dagvoorzitter, misschien een eventbureau. Online zou diezelfde reflex de standaard mogen zijn, en steeds vaker is dat ook zo. Niet omdat je het zelf niet zou kunnen, maar omdat de bijeenkomst die ertoe doet een ander niveau van aandacht verdient dan het wekelijkse overleg."
      },
      {
        "type": "p",
        "text": "Mensen die zich gezien voelen blijven betrokken. Beslissingen die met draagvlak zijn genomen houden stand. Een team dat elkaar online echt kent werkt soepeler dan een team dat elkaar alleen op transactieniveau ontmoet. Een organisatie die haar bijeenkomsten serieus neemt, online net zo goed als fysiek, bouwt cultuur in plaats van die te slijten."
      },
      {
        "type": "h2",
        "text": "Online samenkomen is sinds 2020 niet stil blijven staan"
      },
      {
        "type": "p",
        "text": "Er bestaan ruimtelijke platforms waarin deelnemers zichzelf bewegen en gesprekken voeren op basis van nabijheid. Er bestaan werkvormen die in een fysieke zaal niet eens mogelijk zijn. Er bestaan formats waarin grote groepen klein en persoonlijk voelen."
      },
      {
        "type": "p",
        "text": "Wie online onder de knie heeft, beheerst meer dan een tool. Die heeft een manier gevonden om verspreide mensen werkelijk samen te brengen. En dat is voor steeds meer organisaties precies wat ze nodig hebben."
      },
      {
        "type": "p",
        "text": "PS. De voorbeelden voor meer interactie komen uit toepassingen in SpatialChat, een platform waarin deelnemers zichzelf door een ruimte bewegen en gesprekken voeren op basis van nabijheid. Heel anders dan Zoom, Teams of Google Meet. Eigenlijk nog het meest vergelijkbaar met hoe bijeenkomen in het echt gaat. En dat maakt een wereld van verschil."
      }
    ]
  },
  {
    "slug": "wat-gamers-weten",
    "title": "Wat gamers weten over online samenzijn dat organisaties nog moeten leren",
    "date": "27 mei 2026",
    "iso": "2026-05-27",
    "img": "/images/blog/wat-gamers-weten.webp",
    "imgAlt": "Persoon achter een bureau met computer en een hond — bij blog over gamers en online samenzijn",
    "excerpt": "Gamers weten al jaren hoe online samenzijn werkt — met eigen omgangsvormen en verrassend veel verbinding. Organisaties kunnen daar nog een hoop van leren.",
    "dek": "Gamers onderhouden vriendschappen volledig online. Ze hangen op een virtueel hoekje, ze gamen, ze kletsen, ze zijn er gewoon. Geen agenda, geen actiepunten, geen 'zijn er nog vragen?' Gewoon samenzijn, rond een gedeeld doel of een gedeelde interesse. Een werkvorm waar we in organisaties nog weinig mee doen. Althans, niet online.",
    "metaDescription": "Gamers onderhouden vriendschappen puur online: samenzijn zonder agenda. Wat organisaties daarvan kunnen leren voor cultuur en het virtuele tussendoor.",
    "readingMinutes": 3,
    "blocks": [
      {
        "type": "h2",
        "text": "Hangen op een hoekje"
      },
      {
        "type": "p",
        "text": "Vraag gamers hoe ze hun vriendschappen onderhouden en je krijgt een antwoord dat veel managers niet herkennen. Ze loggen in, ze hangen ergens rond, ze praten wat. Soms spelen ze iets, soms niet. Het punt is niet de activiteit. Het punt is de aanwezigheid."
      },
      {
        "type": "p",
        "text": "Tijdens corona werd dat voor veel mensen ineens zichtbaar. Tieners die urenlang online zaten zonder dat er iets 'productiefs' gebeurde. Ouders die dachten: wat een tijdverspilling. Tot ze begrepen dat dit precies is hoe deze generatie vriendschappen onderhoudt. Niet door af te spreken, maar door er te zijn. Niet door een vast omlijnd plan te volgen, maar door een ruimte te delen."
      },
      {
        "type": "h2",
        "text": "Het tussendoor"
      },
      {
        "type": "p",
        "text": "In organisaties kenden we dat gevoel ook. De koffieautomaat. De gang. De printer waar je altijd iemand tegenkwam. Het waren de momenten tussen de meetings door, waar je hoorde dat een collega ergens mee zat, waar een idee ontstond dat in geen enkele agenda stond, waar je voelde dat je bij een team hoorde."
      },
      {
        "type": "p",
        "text": "Die momenten zijn schaars. Niet omdat we niet meer willen, maar omdat we bijna nooit meer allemaal op dezelfde plek zitten. Omdat ze online geen plek meer hebben waar dit soort ontmoetingen spontaan ontstaan. De meetings hebben we behouden, de calls, de geplande sessies. Maar het tussendoor is weg. En dat tussendoor is precies waar cultuur ontstaat."
      },
      {
        "type": "h2",
        "text": "Samenzijn zonder agenda"
      },
      {
        "type": "p",
        "text": "Online kennen we elkaar ontmoeten vooral als meeting. Er moet een uitnodiging zijn, een tijdstip, een begin en een eind. Als je een collega wilt spreken, plan je een call. Als je even wilt bijkletsen, zet je het in de agenda. En op het moment dat iets in de agenda staat, voelt het als werk. Terwijl bij dat koffieapparaat niemand dacht: dit duurt te lang."
      },
      {
        "type": "p",
        "text": "Gamers lossen dat op zonder erover na te denken. Ze hebben een plek waar ze naartoe gaan. Niet voor een specifiek doel, maar omdat het hun plek is. Ze lopen er rond, ze treffen mensen, soms praten ze uitgebreid, soms zwaaien ze en lopen door. De ruimte is er altijd. De drempel om binnen te lopen is laag."
      },
      {
        "type": "h2",
        "text": "Van meeting naar plek"
      },
      {
        "type": "p",
        "text": "Dat principe werkt ook voor organisaties. Niet als vervanging van meetings, maar als aanvulling. Een omgeving waar je binnenloopt zonder uitnodiging. Waar je ziet wie er is. Waar je even kunt aanhaken bij een gesprek of juist rustig in een hoek kunt werken. Een virtueel kantoor, niet als gadget, maar als plek waar mensen elkaar tegenkomen zonder dat ze dat hadden gepland."
      },
      {
        "type": "p",
        "text": "De verschuiving is subtiel, maar groot. Een meeting is iets wat je bijwoont. Een plek is iets waar je naartoe gaat. Bij een meeting bepaalt de organisator wanneer je er bent en wat je doet. Bij een plek bepaal je dat zelf. Die autonomie maakt het verschil. Het is het verschil tussen 'ik moet om 10 uur in die call' en 'ik loop even langs, kijken wie er is.'"
      },
      {
        "type": "p",
        "text": "We zien bij organisaties die een virtueel kantoor inrichten dat er iets verandert in hoe mensen met elkaar omgaan. Langzaam ontstaan er weer die momenten die je mist sinds iedereen thuis werkt. Het praatje in de gang. Het idee bij de koffie. Het gevoel dat je ergens bij hoort, ook op een dag dat je niet fysiek op kantoor bent."
      },
      {
        "type": "h2",
        "text": "Zonder plek geen cultuur"
      },
      {
        "type": "p",
        "text": "Cultuur ontstaat niet in geplande sessies. Die ontstaat vooral in de ruimte ertussen. In de momenten dat je er bent zonder dat het moet. Gamers weten dat al jaren. Ze hoeven niet af te spreken om samen te zijn. Ze zorgen alleen dat er een plek is."
      },
      {
        "type": "p",
        "text": "Je hoeft mensen niet vaker bij elkaar te brengen. Je moet ze een plek geven waar ze zelf naartoe gaan. Zonder plek geen cultuur. Alleen meetings."
      }
    ]
  },
  {
    "slug": "rondjes-versus-vierkantjes",
    "title": "Rondjes versus vierkantjes",
    "date": "13 mei 2026",
    "iso": "2026-05-13",
    "img": "/images/blog/rondjes-versus-vierkantjes.webp",
    "imgAlt": "Illustratie bij blog over de vorm van online omgevingen: rondjes versus vierkantjes",
    "excerpt": "De vorm van je online omgeving bepaalt het gedrag van je deelnemers. Vakjes zetten aan tot zenden en wachten; rondjes tot bewegen, kiezen en elkaar tegenkomen.",
    "dek": "Zoom, Teams of Meet: een strakke grid met vierkante vakjes, keurig naast elkaar. Iedereen even groot, iedereen even ver weg, iedereen even stil. En toch verwachten we dat zo'n setting energie oplevert.",
    "metaDescription": "Waarom een grid van vierkante vakjes je online bijeenkomst stil maakt en een open ruimte met rondjes juist gesprek en energie oplevert. Zit of loop?",
    "readingMinutes": 4,
    "blocks": [
      {
        "type": "p",
        "text": "Zoom, Teams of Meet: een strakke grid met vierkante vakjes, keurig naast elkaar. Iedereen even groot, iedereen even ver weg, iedereen even stil. Je wordt gedwongen lijdzaam te volgen. Weglopen of even een 1 op 1-tje is niet mogelijk. Je zit vast. Net als alle anderen. En toch verwachten we dat zo'n setting energie oplevert."
      },
      {
        "type": "h2",
        "text": "Je omgeving stuurt je gedrag"
      },
      {
        "type": "p",
        "text": "In een fysieke ruimte voelen we het meteen. Een vergaderzaal met een lange tafel en een beamer aan de muur zegt: hier wordt gepresenteerd. Een kring van losse stoelen zegt: hier gaan we praten. Een foyer met statafels zegt: loop rond, maak contact. De inrichting bepaalt wat mensen doen, nog voordat iemand iets heeft gezegd."
      },
      {
        "type": "p",
        "text": "In Teams of Zoom werkt dat precies zo. Je opent de link. Iedereen verschijnt strak in het raster. De vorm zegt: luister, wacht op je beurt, zit stil."
      },
      {
        "type": "h2",
        "text": "Wat een grid met je doet"
      },
      {
        "type": "p",
        "text": "In een grid is iedereen gelijk. Dat klinkt democratisch, maar het effect is het tegenovergestelde. Je ziet van iedereen evenveel, maar je bent met niemand echt in contact. Er is geen dichtbij, geen veraf. Je kunt niet even met twee mensen apart gaan staan. Je kunt niet met je lichaam laten zien dat je ergens bij wilt zijn. De enige manier om te laten merken dat je er bent, is je microfoon openzetten. En dat doet bijna niemand."
      },
      {
        "type": "p",
        "text": "En dan is er nog de ruis. In een grid brengt elke deelnemer een eigen visuele wereld mee. Je keuken, je boekenkast, de kat, het licht dat niet meewerkt. Geen gedeelde context, geen gezamenlijke omgeving die richting geeft aan het gesprek."
      },
      {
        "type": "h2",
        "text": "Wat er verandert als je kunt bewegen"
      },
      {
        "type": "p",
        "text": "Er bestaan online omgevingen waarin je niet vastzit in een vakje. Waarin je als rondje door een gedeelde ruimte beweegt, zelf bepaalt waar je naartoe gaat, dichter bij iemand kunt gaan staan of juist even afstand kunt nemen. Waarin je stem zachter wordt als je verder weg loopt, net als in het echt."
      },
      {
        "type": "p",
        "text": "Dat verandert het gedrag van iedereen. In een grid wacht je. In een open ruimte beweeg je. En dat verschil bepaalt of je een gesprek krijgt of een uitzending. In een grid stelt één iemand een vraag. In een ruimte ontstaan vijf gesprekken tegelijk. Mensen haken ergens aan, luisteren even mee, lopen door naar een ander groepje. Ze maken micro-keuzes, net als op een fysiek event. En die keuzes maken het verschil tussen een meeting en een plek."
      },
      {
        "type": "h2",
        "text": "Gedeelde ruimte in plaats van individuele ruis"
      },
      {
        "type": "p",
        "text": "In een ruimte waar iedereen rondloopt als rondje, deel je meer dan je inbrengt aan ruis. Je gezicht is klein, je achtergrond ook. Wat groot is, is de gedeelde ruimte. En die kun je volledig toespitsen op wat je aan het doen bent. Een strategiesessie krijgt een andere achtergrond dan een borrel. Een onboarding ziet er anders uit dan een heisessie. De omgeving brengt sfeer mee én functionele structuur. Je ziet waar de break-outs zijn, waar de plenaire ruimte is, waar de koffiehoek zit."
      },
      {
        "type": "p",
        "text": "In een grid is de omgeving neutraal. In een ontworpen ruimte is de omgeving onderdeel van het ontwerp."
      },
      {
        "type": "h2",
        "text": "Wanneer een grid werkt en wanneer niet"
      },
      {
        "type": "p",
        "text": "Een grid werkt prima als je wilt zenden. Een presentatie, een update, een aankondiging. 1:1 werkt ook prima. Tot een persoon of acht kom je er vaak nog mee weg, omdat de groep klein genoeg is om sociale druk te voelen. Maar zodra je verwacht dat mensen met elkaar in gesprek gaan, zodra de groep groter wordt, werkt de vorm tegen je."
      },
      {
        "type": "h2",
        "text": "Zit of loop"
      },
      {
        "type": "p",
        "text": "Laat het startpunt dus niet zijn welke tool je gebruikt, als je een online bijeenkomst organiseert voor een wat grotere groep. De eerste vraag is: wil ik dat mensen zitten en luisteren, of wil ik dat ze bewegen en elkaar spreken? Dat antwoord bepaalt de vorm. En de vorm bepaalt wat er gebeurt."
      },
      {
        "type": "p",
        "text": "PS. Wij werken met SpatialChat, een online omgeving die werd gebouwd in coronatijd door iemand die online cocktails wilde drinken met vrienden. Niet vergaderen, niet presenteren. Gewoon samenzijn, en weglopen bij een gesprek als je er geen energie meer voelt. Die oorsprong voel je terug in hoe het werkt. Benieuwd? Boek een kennismaking en we laten het je zien."
      }
    ]
  },
  {
    "slug": "systeemwoede",
    "title": "Systeemwoede in online meetings: maakt meer kapot dan je lief is",
    "date": "15 april 2026",
    "iso": "2026-04-15",
    "img": "/images/blog/systeemwoede.webp",
    "imgAlt": "Illustratie bij blog over technologische frustratie in online meetings",
    "excerpt": "Technologische frustratie is een onderschatte factor bij online bijeenkomsten. Wie nog bijkomt van een technisch gevecht, verbindt zich niet met de inhoud — betrokkenheid begint bij het inloggen, niet bij het eerste agendapunt.",
    "dek": "Woede over technologie die niet meewerkt is een van de meest onderschatte factoren in online bijeenkomsten. De oplossing zit niet in betere spulletjes, maar in meer menselijkheid.",
    "metaDescription": "Systeemwoede in online meetings blokkeert betrokkenheid. Ontdek waarom de oplossing niet in betere tech zit, maar in meer menselijkheid en in-meeting service.",
    "readingMinutes": 4,
    "blocks": [
      {
        "type": "p",
        "text": "In 1993 maakte Compaq een commercial over praten met je computer. Hilarisch, vond ik destijds. De belofte: je spreekt, en je woorden verschijnen op het scherm. De realiteit is anders. Het grootste deel van de tijd dat we tegen onze computer praten is niet omdat we slim gebruik maken van spraakinvoer. We foeteren over technologie. Net als in 1993."
      },
      {
        "type": "p",
        "text": "In deze blog zoomen we in op wat onmacht doet met betrokkenheid en waarom de oplossing niet zit in nog betere spulletjes of nog geavanceerdere features, maar in meer menselijkheid."
      },
      {
        "type": "h2",
        "text": "Dertig jaar vooruitgang, één emotie"
      },
      {
        "type": "p",
        "text": "Je zit in een online meeting, je wilt iets zeggen, en je microfoon doet het niet. Of je camera blokkeert. Of je deelt je scherm en iedereen ziet je mail in plaats van je presentatie. Het kost twee minuten om het op te lossen, soms vijf. Ondertussen wacht de hele groep en kijkt iedereen wat er in je inbox staat."
      },
      {
        "type": "p",
        "text": "Dat is geen klein ongemak. Woede over technologie die niet meewerkt is een van de meest onderschatte factoren in online bijeenkomsten. Het klinkt onbenullig, maar het effect is groot. Iemand die net vijf minuten heeft gevochten met zijn audio zit niet ontspannen in het gesprek. Die zit nog na te koken. Die haakt mentaal af voordat de inhoud begonnen is."
      },
      {
        "type": "h2",
        "text": "Woede blokkeert betrokkenheid"
      },
      {
        "type": "p",
        "text": "Het werkt als een muur. Zolang iemand bezig is met technologie die niet doet wat het moet, draagt die persoon niet bij aan wat er inhoudelijk gebeurt. En het gaat niet alleen om de persoon die het probleem heeft. De hele groep voelt het. Er ontstaat ongemak, ongeduld, afleiding. De energie lekt weg voordat er ook maar iets inhoudelijks is gezegd."
      },
      {
        "type": "p",
        "text": "Na jaren online vergaderen zou je verwachten dat dit opgelost is. Maar dat is het niet. De tools zijn beter geworden, dat klopt. Maar de combinatie van verschillende apparaten, netwerken, instellingen en updates zorgt ervoor dat er altijd wel iemand is bij wie iets niet werkt. En hoe groter de groep, hoe groter de kans dat het misgaat. Die frustratie stapelt zich op. En die neem je mee naar je volgende meeting."
      },
      {
        "type": "h2",
        "text": "Twee dingen die helpen"
      },
      {
        "type": "p",
        "text": "Het voor de hand liggende antwoord is: zorg dat de technologie beter werkt. Maar dat is het halve verhaal. De oplossing zit in twee dingen."
      },
      {
        "type": "p",
        "text": "Het eerste is accepteren dat niet alles vlekkeloos werkt. En dat verdragen. Een van de plezierigste ontdekkingen ten tijde van corona was dat iedereen mens bleek te zijn. Kinderen liepen door het beeld, katten sprongen op toetsenborden, verbindingen vielen weg. En het gevolg was niet chaos, maar begrip. Er kwam meer ruimte voor de persoon achter de functionaris. Die ruimte zijn we weer kwijtgeraakt. We verwachten dat alles en iedereen weer perfect is. Maar dat is niet zo, en die teleurstelling maakt de woede alleen maar groter."
      },
      {
        "type": "p",
        "text": "Het tweede is: de keren dat alles wél vlekkeloos moet lopen, organiseer dat dan. Bij een strategiedag, een all-hands of een bijeenkomst waar het er echt toe doet, kun je het niet aan het toeval overlaten. Maak iemand verantwoordelijk voor een soepel verloop. Niet alleen voor de techniek, maar ook voor de menselijke kant. Of huur hulp in. Bij fysieke bijeenkomsten regelt iemand de zaal, het geluid, de beamer en personeel voor de koffie. Online laat je iedereen het zelf uitzoeken en hoop je dat het goed gaat."
      },
      {
        "type": "h2",
        "text": "Meer dan tech support"
      },
      {
        "type": "p",
        "text": "Bij MeetingMasters noemen we dat in-meeting service: de menselijke mix van online hospitality en tech support. Niet verstopt achter een telefoonnummer of een AI bot, maar gewoon live aanwezig in de meeting om te ondersteunen waar hulp nodig is."
      },
      {
        "type": "p",
        "text": "Dat betekent: als iemand struggelt met techniek, neem je die persoon even apart. Je lost het op buiten de groep om, zodat niet de hele zaal hoeft mee te kijken. Komt iemand te laat binnen, dan praat je die persoon bij over wat er tot nu toe is gebeurd en daarna herenig je die pas met de groep."
      },
      {
        "type": "p",
        "text": "Het zit in kleine dingen. Deelnemers standaard op mute binnenlaten, zodat je nooit schreeuwend naar je computer, je kat of je kamergenoot de meeting inrolt. De instart van een prettig muziekje. Een soepele share. Een extra rondje langs de kamers om te checken of iedereen de opdracht goed heeft meegekregen."
      },
      {
        "type": "p",
        "text": "Maar het gaat verder dan knoppen en instellingen. De meeste Meeting Masters snappen de techniek als geen ander. We trainen in de MeetingMaster Academy ook op een persoonlijke benadering en op het omgaan met mensen die hoog in hun emotie zitten. Wat is de oorzaak van iemands boosheid? Wat helpt? Wat juist niet? Dat is geen tech support. Dat is service in de breedste zin. En ja, online."
      },
      {
        "type": "h2",
        "text": "Betrokkenheid begint voor de eerste slide"
      },
      {
        "type": "p",
        "text": "Betrokkenheid organiseer je niet pas als de agenda begint. Het begint bij het moment dat iemand inlogt. Voelt die persoon zich welkom? Werkt alles? Is er iemand die helpt als het niet lukt? Of zit je in je eentje te klooien met je instellingen terwijl de rest al bezig is?"
      },
      {
        "type": "p",
        "text": "Het verschil is groot. Het zit niet in de technologie, maar in de energie waarmee mensen een bijeenkomst ingaan. En die energie bepaalt of er een goed gesprek ontstaat of een uur stilte met af en toe een vraag."
      },
      {
        "type": "p",
        "text": "Zolang je techniek aan deelnemers overlaat, ontwerp je geen bijeenkomst. Je organiseert een risico."
      }
    ]
  },
  {
    "slug": "ai-paradox",
    "title": "De AI-paradox: waarom meetings nu meer waard zijn",
    "date": "1 april 2026",
    "iso": "2026-04-01",
    "img": "/images/blog/ai-paradox.webp",
    "imgAlt": "Emilie van Rappard van MeetingMasters — bij blog over de AI-paradox",
    "excerpt": "AI neemt het routinewerk over. Maar het moment waarop iemand zegt 'wacht, ik zie dit anders' en een gesprek de hele richting verandert? Daar schieten machines tekort. Dat gebeurt alleen wanneer mensen elkaar écht ontmoeten.",
    "dek": "Een tijdlijn vol met AI: slimmere prompts, betere tools, snellere output. Ondertussen verdwijnen de eerste banen. De komst van de machine verandert de waarde van werk. Toch ben ik optimistisch, want de waarde van samenwerken is groter dan ooit. Tijd om extra te investeren in het menselijk perspectief.",
    "metaDescription": "AI neemt routinewerk over, maar juist daardoor groeit de waarde van samenwerken. Waarom meetings met echt menselijk contact belangrijker zijn dan ooit.",
    "readingMinutes": 2,
    "blocks": [
      {
        "type": "h2",
        "text": "Meetings zijn menselijke versnellers"
      },
      {
        "type": "p",
        "text": "Een machine maakt de beleidspresentatie, verstuurt updates en checkt actielijsten. Maar het moment waarop iemand zegt \"wacht, ik zie het anders dan jij\" en er een gesprek ontstaat dat de hele richting verandert? Daar schiet een machine tekort. Dat gebeurt alleen als mensen samenzitten en er genoeg structuur is om dat gesprek te voeren."
      },
      {
        "type": "p",
        "text": "Meetings zijn de momenten waarop je samen nadenkt, samen beslist, samen richting bepaalt. Het zijn ook de momenten waarop je voelt hoe een organisatie werkt. Of niet werkt. Waar je merkt of er vertrouwen is. Of iemand durft te zeggen dat het plan niet klopt. Waar je samen tot een inzicht komt dat niemand in zijn eentje had gehad."
      },
      {
        "type": "h2",
        "text": "Zenden in plaats van samenwerken"
      },
      {
        "type": "p",
        "text": "De meeste bijeenkomsten laten die kans liggen. De vorm staat het niet toe. Een uur lang kijken naar slides en opschrikken bij de slotvraag \"is alles duidelijk?\" is geen samenwerking. Het is zenden. Dan werkt een opgenomen video net zo goed, of beter zelfs, want dan bepaal je zelf wanneer je kijkt."
      },
      {
        "type": "h2",
        "text": "Bang voor robots, maar zelf op de automatische piloot"
      },
      {
        "type": "p",
        "text": "En daar zit de paradox. We maken ons zorgen dat AI de mens vervangt. Tegelijk besteden we het grootste deel van onze gezamenlijke tijd aan activiteiten die een machine net zo goed doet: informatie delen, updates doorlopen, actiepunten vastleggen. Maar wij hebben als mens toch zoveel meer te bieden? Het stuk dat ons menselijk maakt en samen succesvol, brengen we onvoldoende in."
      },
      {
        "type": "p",
        "text": "Misschien verklaart dat ook waarom de AI-angst zo diep zit. We voelen dat we in de momenten die ertoe doen, zelf al weinig menselijk aan het werk zijn."
      },
      {
        "type": "h2",
        "text": "Juist nu groeit de waarde van samenzijn"
      },
      {
        "type": "p",
        "text": "Draai het om. Juist nu AI steeds meer taken overneemt, groeit de waarde van de momenten waarop je samen bent. Het routinewerk verdwijnt. Wat overblijft is het werk dat alleen mensen samen doen: richting bepalen, vertrouwen opbouwen, tot een gedeeld inzicht komen. Dat maakt bijeenkomsten belangrijker dan ooit."
      },
      {
        "type": "p",
        "text": "Organisaties die dat snappen, verleggen de lat. Ze zetten in op meetings met echt contact en betrokkenheid boven aanwezigheid. En ze voeren dat in alles door. In fysieke meetings en al helemaal in online meetings. Neem geen genoegen met zielloos staren naar een scherm met vierkante 'talking heads'. Wees nieuwsgierig, wees kritisch, wees creatief. Zet dat eens op de agenda. Een filosofisch gesprek. Benen op tafel. AI maakt het transcript wel."
      }
    ]
  },
  {
    "slug": "niet-hetzelfde-wel-goed",
    "title": "Niet hetzelfde. Wel goed.",
    "date": "31 maart 2026",
    "iso": "2026-03-31",
    "img": "/images/blog/niet-hetzelfde-wel-goed.webp",
    "imgAlt": "Illustratie bij blog 'Niet hetzelfde. Wel goed.' over online versus offline bijeenkomsten",
    "excerpt": "De meeste bijeenkomsten waren al ineffectief voordat ze online gingen. Online maakte dat alleen zichtbaarder. Succes hangt af van de methodiek, niet van het medium — de vraag is nooit 'online of offline?' maar 'wat moet hier gebeuren?'",
    "dek": "De meeste bijeenkomsten waren al niet goed voordat ze online gingen. Online maakte het alleen zichtbaarder: het probleem is zelden het medium, maar de vorm en het ontwerp.",
    "metaDescription": "Online vergaderingen zijn geen surrogaat van offline. Het probleem is zelden het medium, maar de vorm en het ontwerp. Ontdek hoe je bijeenkomsten bewust ontwerpt.",
    "readingMinutes": 4,
    "blocks": [
      {
        "type": "p",
        "text": "De meeste bijeenkomsten waren al niet goed voordat ze online gingen. Online maakte het alleen zichtbaarder. Het ongemak, het afhaken, het gebrek aan energie of focus: het zat er vaak al in. Het probleem is zelden het medium. Het probleem is de vorm. En het ontwerp."
      },
      {
        "type": "p",
        "text": "Toch blijven we online en offline met elkaar vergelijken alsof het twee varianten van hetzelfde zijn. Alsof een online bijeenkomst per definitie een surrogaat is van een 'echte' bijeenkomst. Dat frame zit diep. En het staat goed ontwerp in de weg."
      },
      {
        "type": "h2",
        "text": "Het verkeerde vertrekpunt"
      },
      {
        "type": "p",
        "text": "Wie online en offline vergelijkt, doet eigenlijk iets raars. We vergelijken een fysieke bijeenkomst die vaak jaren vanzelfsprekend heeft mogen bestaan met een online variant die ineens moet bewijzen dat hij 'net zo goed' is. Daarbij vergeten we hoe matig veel fysieke bijeenkomsten zijn ingericht. Lange plenaire sessies. Eénrichtingsverkeer. Nauwelijks interactie. Onduidelijke doelen. Niemand die zich afvraagt wat deze bijeenkomst nú eigenlijk moet opleveren."
      },
      {
        "type": "p",
        "text": "Offline heeft een voorsprong omdat we het gewend zijn. Niet omdat het beter is."
      },
      {
        "type": "p",
        "text": "Online haalt die vanzelfsprekendheid weg. Alles wat niet klopt, wordt zichtbaar. Wie te lang praat, ziet lege camera's. Wie geen ruimte maakt voor interactie, verliest mensen. Wie geen ritme ontwerpt, voelt de energie wegzakken. Dat is confronterend. Maar ook waardevol."
      },
      {
        "type": "h2",
        "text": "Begin bij het doel, niet bij het medium"
      },
      {
        "type": "p",
        "text": "Bij MeetingMasters beginnen we altijd bij dezelfde vraag: wat moet hier gebeuren? Niet: is dit online of offline? Maar: wat is het doel, wie zijn erbij, wat moeten zij kunnen doen, ervaren of beslissen?"
      },
      {
        "type": "p",
        "text": "Pas daarna komt het medium. Soms is dat offline. Soms hybride. En heel vaak online."
      },
      {
        "type": "p",
        "text": "Voor bepaalde doelen is online geen compromis, maar een betere keuze. Denk aan internationale groepen. Aan gelijkwaardigheid in gesprek. Aan het verlagen van drempels om je uit te spreken. Aan snelheid en frequentie. Aan duurzaamheid. Aan focus."
      },
      {
        "type": "p",
        "text": "Online maakt het mogelijk om vorm veel explicieter te ontwerpen. Dat vraagt meer denkwerk vooraf, maar het levert ook meer op."
      },
      {
        "type": "h2",
        "text": "Methodologie doet het zware werk"
      },
      {
        "type": "p",
        "text": "Wat wij keer op keer zien: het meeste los je methodologisch op. Door keuzes te maken in werkvormen. Door ritme aan te brengen. Door afwisseling tussen luisteren, denken en doen. Door mensen actief te betrekken, in plaats van passief te laten consumeren."
      },
      {
        "type": "p",
        "text": "Goede online bijeenkomsten zijn zelden spontaan. Ze zijn ontworpen. Net als goede offline bijeenkomsten trouwens — alleen zijn we daar minder streng in geworden."
      },
      {
        "type": "p",
        "text": "Methodologie helpt om gedrag te sturen. Om gesprekken te verdiepen. Om ruimte te maken voor verschillende stemmen. Om energie te behouden. Dat geldt online én offline."
      },
      {
        "type": "p",
        "text": "Het verschil is dat online geen ontsnappingsroutes biedt. Je kunt je niet verschuilen achter een zaal, een podium of een lange lunchpauze. Als het ontwerp niet klopt, voel je dat meteen."
      },
      {
        "type": "h2",
        "text": "Vorm als extra laag"
      },
      {
        "type": "p",
        "text": "Daarbovenop komt het platform. Niet als trucje, maar als context. De vorm waarin je mensen plaatst, beïnvloedt hoe zij zich gedragen. Dat is offline zo, en online net zo goed."
      },
      {
        "type": "p",
        "text": "Platformen zoals SpatialChat voegen een extra laag toe die je in veel traditionele videoplatformen mist. Geen strak raster van hoofden, maar ruimte. Afstand. Nabijheid. Beweging. Keuzevrijheid."
      },
      {
        "type": "p",
        "text": "Mensen bepalen zelf waar ze staan, met wie ze praten, wanneer ze aansluiten of weggaan. Dat lijkt simpel, maar het effect is groot. Gesprekken ontstaan natuurlijker. Netwerken voelt minder geforceerd. Stilte is toegestaan. Observatie ook."
      },
      {
        "type": "p",
        "text": "Die ruimtelijkheid maakt het mogelijk om online iets te doen wat offline vaak vanzelfsprekend lijkt, maar in de praktijk zelden goed is ingericht: informele ontmoeting."
      },
      {
        "type": "h2",
        "text": "Context stuurt gedrag"
      },
      {
        "type": "p",
        "text": "In een fysieke ruimte accepteert iedereen dat context gedrag beïnvloedt. Een theaterzaal nodigt uit tot luisteren. Een café tot praten. Een vergaderzaal tot formeel overleg. Online vergeten we dat vaak, en stoppen we alles in hetzelfde Zoom- of Teams-format."
      },
      {
        "type": "p",
        "text": "SpatialChat laat zien dat online context óók ontworpen kan worden. Met zones. Met afstand. Met visuele cues. Niet om het 'leuk' te maken, maar om gedrag te ondersteunen dat past bij het doel van dat moment."
      },
      {
        "type": "p",
        "text": "Dat vraagt van organisatoren een andere manier van denken. Minder vanuit techniek. Meer vanuit ervaring. Wat moet hier gebeuren? En welke vorm helpt daarbij?"
      },
      {
        "type": "h2",
        "text": "Online is niet minder menselijk"
      },
      {
        "type": "p",
        "text": "Een hardnekkig misverstand is dat online minder menselijk zou zijn. Wat we vaak bedoelen, is: slecht ontworpen online bijeenkomsten voelen afstandelijk. Maar dat geldt net zo goed voor slecht ontworpen fysieke bijeenkomsten."
      },
      {
        "type": "p",
        "text": "Menselijkheid zit niet in het medium. Het zit in aandacht. In ruimte om te reageren. In gezien en gehoord worden. In tempo. In het serieus nemen van deelnemers."
      },
      {
        "type": "p",
        "text": "Goed ontworpen online bijeenkomsten kunnen juist inclusiever zijn. Mensen die minder snel het woord nemen in een volle zaal, doen dat wel in kleinere online settings. Mensen die reizen belastend vinden, kunnen toch meedoen. Mensen die normaal achteraan zitten, krijgen evenveel ruimte als anderen."
      },
      {
        "type": "h2",
        "text": "Stop met verdedigen, begin met ontwerpen"
      },
      {
        "type": "p",
        "text": "Zolang we online blijven verdedigen ten opzichte van offline, blijven we in een kramp. Dan proberen we na te bootsen wat we kennen, in plaats van te benutten wat mogelijk is. De vraag is niet: hoe maken we online zo offline mogelijk? De vraag is: hoe ontwerpen we bijeenkomsten die doen wat ze moeten doen? Soms is dat offline. Soms online. Soms een slimme combinatie. Maar altijd bewust gekozen."
      },
      {
        "type": "quote",
        "text": "Online maakte zichtbaar wat al niet werkte. Dat is geen probleem. Dat is een kans."
      }
    ]
  },
  {
    "slug": "acht-grens",
    "title": "De acht-grens: wanneer een groep zichzelf niet meer regelt",
    "date": "25 maart 2026",
    "iso": "2026-03-25",
    "img": "/images/blog/acht-grens.webp",
    "imgAlt": "Groep vrienden in een koffiebar — bij blog over groepsdynamiek en de acht-grens",
    "excerpt": "Groepen tot acht personen reguleren zichzelf op natuurlijke wijze. Voorbij die omvang verandert de dynamiek ingrijpend. Elke meeting met meer dan een handvol mensen is een ontwerpvraagstuk — niet alleen een logistiek vraagstuk.",
    "dek": "Iedereen kent het: een vergadering met dertig mensen waar drie praten en de rest zwijgt. Het probleem zit niet in de mensen, maar in de mismatch tussen doel, groep en aanpak.",
    "metaDescription": "Waarom valt een grote vergadering stil? De acht-grens verklaart wanneer groepsdynamiek kantelt en welke werkvormen wel werken, online en offline.",
    "readingMinutes": 4,
    "blocks": [
      {
        "type": "p",
        "text": "Iedereen kent het. Een vergadering met dertig mensen waar drie mensen praten en de rest stil is. Of een online strategiesessie met vijftig deelnemers waar na veertig minuten iemand vraagt: \"Zijn er nog vragen?\" En het stil blijft."
      },
      {
        "type": "p",
        "text": "Het probleem zit 'm niet in de mensen. Ook niet in de intentie, die is oprecht. Het probleem zit in de mismatch tussen wat je wilt bereiken, wie er in de zaal zit en hoe je het aanpakt. In deze blog laten we zien waar de grens ligt en wat je eraan kunt doen."
      },
      {
        "type": "h2",
        "text": "Drie, acht, en daarboven"
      },
      {
        "type": "p",
        "text": "Zet drie mensen bij elkaar met een vraag en ze komen er wel uit. Binnen tien minuten hebben ze een antwoord. Of in ieder geval een richting."
      },
      {
        "type": "p",
        "text": "Tot een man of acht of zelfs tien, werkt het nog steeds, mits er een duidelijke opdracht is. Iemand neemt het woord, een ander reageert, de rest haakt aan. De groep regelt zichzelf."
      },
      {
        "type": "p",
        "text": "Daarboven kantelt het. Twee of drie mensen praten. De rest luistert. Of doet alsof. Iemand checkt ondertussen zijn mail, iemand anders wacht vooral op een charmant moment om in te breken en zijn eigen verhaal te vertellen."
      },
      {
        "type": "p",
        "text": "Zet meer dan 15 mensen bij elkaar en je hebt een presentatie. Of chaos. Één van de twee. Dit is geen mening. Dit is groepsdynamiek."
      },
      {
        "type": "h2",
        "text": "Waarom het misgaat"
      },
      {
        "type": "p",
        "text": "Het echte probleem is niet de groepsgrootte op zich. Je kunt een fantastische, betrokken bijeenkomst hebben met 300 mensen. Het probleem is dat we niet nadenken over de optelsom van drie dingen: wat willen we bereiken? Wie zit er in de zaal? En welke betrokkenheid zoeken we? Op basis daarvan kies je een passende werkvorm."
      },
      {
        "type": "p",
        "text": "De benadering van \"ik heb een verhaal, ik heb een publiek, nu ga ik vertellen\" werkt voor een presentatie. Maar zodra je iets wilt van de groep, betrokkenheid, input, een besluit, dan vraagt dat een andere aanpak."
      },
      {
        "type": "h2",
        "text": "Wat er vaak misgaat"
      },
      {
        "type": "p",
        "text": "Je zet dertig mensen in een vergaderzaal en verwacht een goed gesprek. Je opent een Zoom-call met vijftig deelnemers en vraagt: \"Zijn er nog vragen?\" Achteraf zeg je: de betrokkenheid was laag. Of: online werkt niet voor dit soort dingen. Maar het lag niet aan de mensen. En niet aan het medium. Het lag eraan dat de werkvorm niet paste bij wat je van de groep vroeg."
      },
      {
        "type": "h2",
        "text": "Wat wel werkt"
      },
      {
        "type": "p",
        "text": "Het basisprincipe is eenvoudig. Grote groepen werken niet als grote groepen. Ze werken als verzamelingen van kleine groepen, mits je dat organiseert."
      },
      {
        "type": "p",
        "text": "Tot acht mensen volstaat een duidelijke opdracht. Niet \"bespreek dit onderwerp,\" maar \"beantwoord deze vraag en schrijf drie punten op.\" Structuur ondersteunt de sociale dynamiek die in een klein groepje vanzelf ontstaat."
      },
      {
        "type": "p",
        "text": "Daarboven heb je een facilitator nodig. Iemand die ruimte verdeelt, stiltes laat zien zorgt dat niet alleen de snelle denkers en harde praters aan bod komen. En je werkt met subgroepen. Je splitst op, laat kleine groepen werken en brengt de resultaten samen."
      },
      {
        "type": "p",
        "text": "Dat klinkt als iets wat iedereen al doet, maar het wordt verbazend vaak overgeslagen. Of het wordt gedaan met break-out-rooms waarin niemand weet wat de bedoeling is."
      },
      {
        "type": "h2",
        "text": "Hoe dit er online uitziet"
      },
      {
        "type": "p",
        "text": "Online wordt de grens nog scherper. In een videocall met meer dan tien mensen kun je niet meer inzoomen op gezichten. Je mist de lichaamstaal die in een fysieke ruimte vertelt wie wil reageren, wie afhaakt, wie het ergens niet mee eens is. Je kunt niet door elkaar praten. En je kunt je camera uitzetten en ondertussen mailen. De groep merkt het niet, of doet alsof. Dat maakt werkvormen online niet optioneel maar noodzakelijk."
      },
      {
        "type": "p",
        "text": "En hier wordt het interessant. Voor eenvoudige opdrachten volstaat het om subgroepen samen te stellen en een opdracht mee te geven. Maar voor complexere vraagstukken, onderwerpen die je van meerdere kanten wilt belichten, wil je het liefst anders aanpakken. Dan wil je dat deelnemers zelf bepalen waar hun bijdrage het best tot z'n recht komt. Omdat de output beter wordt als mensen echte betrokkenheid voelen bij het onderwerp waar ze aan werken."
      },
      {
        "type": "h2",
        "text": "De ontwerpvraag"
      },
      {
        "type": "p",
        "text": "Elke bijeenkomst met meer dan een handvol mensen is een ontwerpvraag. Geen logistieke vraag. Geen technische vraag. Een ontwerpvraag."
      },
      {
        "type": "p",
        "text": "Hoeveel mensen zitten er in de groep? Wat willen we van ze? Welke werkvorm past daarbij? Het antwoord is bijna nooit: we zetten iedereen bij elkaar en dan praten we erover."
      },
      {
        "type": "p",
        "text": "Het begint altijd met: hoe maken we van deze grote groep een verzameling kleine groepen die aan het werk gaan? Dat is faciliteren. Niet een dagvoorzitter die het programma aankondigt. Maar iemand die de omstandigheden schept waarin een groep kan doen waarvoor ze bij elkaar zit."
      },
      {
        "type": "p",
        "text": "En dat begint met drie vragen: hoeveel mensen zitten er aan tafel, wat willen we van ze, en hoe gaan we dat aanpakken?"
      },
      {
        "type": "p",
        "text": "PS. Wil je zien hoe het eruitziet als deelnemers zelf kiezen waar ze naartoe gaan? In een SpatialChat-omgeving bewegen mensen zich door een ruimte, zien ze wie waar staat en schuiven ze aan bij het gesprek dat hen het meest raakt. Dat verandert de dynamica. Benieuwd? Neem contact op voor een demo."
      }
    ]
  },
  {
    "slug": "stok-om-mee-te-slaan",
    "title": "De stok om mee te slaan",
    "date": "4 maart 2026",
    "iso": "2026-03-04",
    "img": "/images/blog/stok-om-mee-te-slaan.webp",
    "imgAlt": "Illustratie bij blog 'De stok om mee te slaan' over meetingontwerp",
    "excerpt": "Online beperkingen creëren juist kansen. Ze dwingen tot bewust meetingontwerp. Wie zich richt op echte interactie in plaats van te leunen op sociale elementen, verbetert de effectiviteit in alle formats.",
    "dek": "Je moet een strategiedag organiseren voor tweehonderd mensen, en dan hoor je: het moet online. Maar is online echt het probleem, of geven we het medium de schuld voor bijeenkomsten die nooit goed ontworpen waren?",
    "metaDescription": "Online krijgt de schuld als een strategiedag of all-hands mislukt. Maar ligt het aan het medium, of aan bijeenkomsten die nooit goed ontworpen waren?",
    "readingMinutes": 2,
    "blocks": [
      {
        "type": "p",
        "text": "Je moet een strategiedag organiseren. Tweehonderd mensen, verspreid over het land. En dan hoor je: \"Het moet online.\" Aiii. Online lukt vast voor een webinar. Voor een presentatie met een Q&A, ook. Maar een echte strategiedag? Een all-hands waar mensen energie van krijgen? Een cultuurmoment waar verbinding ontstaat? Daar krijg je de handen niet makkelijk voor op elkaar."
      },
      {
        "type": "h2",
        "text": "Is het het medium? Of… ?"
      },
      {
        "type": "p",
        "text": "Sinds de lockdowns is online de stok om mee te slaan. \"We hebben het geprobeerd en het was verschrikkelijk.\" Dus zodra het om iets belangrijks gaat, moet iedereen weer bij elkaar komen. Twee uur reizen voor een dag vol powerpoints. Hotels boeken. Catering regelen. Want alleen zo werkt het echt. Maar wees eens eerlijk. Hoe was die laatste fysieke strategiedag? Waren mensen echt betrokken? Of zaten ze na de lunch op hun telefoon? Was er ruimte voor echte gesprekken? Of was het vooral zenden?"
      },
      {
        "type": "p",
        "text": "De meeste grote bijeenkomsten waren al matig voordat we online gingen. Online maakte het alleen onmogelijk om te negeren."
      },
      {
        "type": "h2",
        "text": "Het echte probleem"
      },
      {
        "type": "p",
        "text": "Het probleem is niet het medium. Het probleem is dat we bijzondere bijeenkomsten behandelen als grote versies van gewone vergaderingen. Meer mensen, meer slides, langere dag. Maar dezelfde aanpak. Dat werkt offline al niet. En online wordt het pijnlijk zichtbaar. Een strategiedag van acht uur powerpoints is online onhoudbaar. Maar was hij offline eigenlijk wel goed? Of hielden mensen het alleen vol omdat ze geen alternatief hadden?"
      },
      {
        "type": "h2",
        "text": "De kans"
      },
      {
        "type": "p",
        "text": "Online dwingt je om na te denken over wat je eigenlijk wilt bereiken. Je kunt niet leunen op de lunch, de borrel, de toevallige gesprekken in de wandelgangen. Je moet betrokkenheid ontwerpen. En dat blijkt juist een kans. Want als je een bijeenkomst met intentie ontwerpt, als je nadenkt over het begin, het midden en het eind, als je ruimte maakt voor echte interactie, dan werkt het. Online, offline, hybride. Het medium is niet de bepalende factor."
      },
      {
        "type": "quote",
        "text": "De vraag is niet: kunnen we dit online doen? De vraag is: durven we deze bijeenkomst echt goed te ontwerpen?"
      },
      {
        "type": "h2",
        "text": "De keuze"
      },
      {
        "type": "p",
        "text": "Je kunt blijven zeggen dat online niet werkt voor belangrijke bijeenkomsten. Iedereen naar één locatie halen. Hopen dat fysieke aanwezigheid de magie vanzelf laat ontstaan. Of je kunt de confrontatie aangaan. Erkennen dat een goede bijeenkomst vraagt om aandacht, ongeacht waar mensen zitten. Dat de omgeving ertoe doet, ook de online omgeving. Dat tweehonderd mensen samenbrengen altijd een ontwerpvraagstuk is."
      },
      {
        "type": "p",
        "text": "Die keuze is aan jou. Maar blijf niet online de schuld geven voor bijeenkomsten die nooit goed ontworpen waren."
      }
    ]
  },
  {
    "slug": "olympiers",
    "title": "Een online thuis voor oud-olympiërs wereldwijd",
    "date": "7 februari 2026",
    "iso": "2026-02-07",
    "img": "/images/blog/olympiers.webp",
    "imgAlt": "e-OLY House in SpatialChat — het virtuele clubhuis voor de World Olympians Association",
    "excerpt": "Een videocall is een hulpmiddel. Een online ontmoetingsplek is iets heel anders. De World Olympians Association bouwde met MeetingMasters e-OLY House — een digitale ontmoetingsruimte die echte verbinding mogelijk maakt zonder verplicht programma.",
    "dek": "Afgelopen vrijdag gingen de Olympische Winterspelen Milaan Cortina 2026 van start. Terwijl in Noord-Italië de openingsceremonies plaatsvonden, opende ergens op het internet een bijzondere plek zijn deuren: e-OLY House, de exclusieve ontmoetingsplek voor olympiërs tijdens de Spelen.",
    "metaDescription": "Tijdens Milaan Cortina 2026 opende e-OLY House: de digitale ontmoetingsplek voor olympiërs. Ontdek waarom online samenkomen meer is dan een vierkant op je scherm.",
    "readingMinutes": 3,
    "blocks": [
      {
        "type": "p",
        "text": "Afgelopen vrijdag gingen de Olympische Winterspelen Milaan Cortina 2026 van start. Terwijl op verschillende locaties in Noord-Italië de openingsceremonies plaatsvonden, opende ergens op het internet een bijzondere plek zijn deuren. Geen fysiek gebouw, maar de digitale variant van OLY House: de exclusieve ontmoetingsplek voor olympiërs tijdens de Spelen. Dit is e-OLY House. In dit artikel vertellen we waarom online samenkomen zoveel meer kan zijn dan een vierkant op je scherm."
      },
      {
        "type": "h2",
        "text": "Eén keer olympiër, altijd olympiër"
      },
      {
        "type": "p",
        "text": "Wie ooit heeft meegedaan aan de Olympische Spelen, blijft zijn leven lang olympiër. Die gedeelde ervaring verbindt, over landen en generaties heen. Maar hoe onderhoud je die verbinding als je verspreid bent over de hele wereld?"
      },
      {
        "type": "p",
        "text": "De World Olympians Association (WOA), de alumnivereniging voor olympiërs wereldwijd, zocht naar een manier om haar atleten te verbinden, ook als ze niet naar de Spelen kunnen afreizen. Werk, afstand, geld: er zijn genoeg redenen om thuis te blijven. Maar thuisblijven hoeft niet te betekenen dat je er niet bij bent."
      },
      {
        "type": "p",
        "text": "Daarom bouwde MeetingMasters Online samen met de WOA e-OLY House. Geen webinar waar je naar een scherm staart. Geen videocall met 200 vierkantjes. Een plek waar je rondloopt, mensen tegenkomt en spontaan in gesprek raakt."
      },
      {
        "type": "h2",
        "text": "Waarom de WOA niet koos voor een videocall"
      },
      {
        "type": "p",
        "text": "Een videocall is handig voor een vergadering. Maar voor een ontmoetingsplek tijdens de Spelen? Dan schiet het tekort."
      },
      {
        "type": "p",
        "text": "Bij een fysieke OLY House loop je naar binnen, kijk je rond en zie je bekende gezichten. Je schuift aan bij een groepje, vangt een gesprek op, raakt aan de praat met iemand die je nog niet kende. Die spontane ontmoetingen maken het waardevol."
      },
      {
        "type": "p",
        "text": "In een standaard videocall bestaan die momenten niet. Je bent aan het woord of je bent stil. Er is geen ruimte om even rond te kijken, geen mogelijkheid om naar iemand toe te lopen. De WOA wilde iets dat dichter bij de echte ervaring kwam."
      },
      {
        "type": "h2",
        "text": "Drie pijlers onder e-OLY House"
      },
      {
        "type": "p",
        "text": "e-OLY House werkt anders dan een videocall. Het is gebouwd op drie pijlers."
      },
      {
        "type": "h2",
        "text": "1. Een centrale plek om samen te komen"
      },
      {
        "type": "p",
        "text": "Als je e-OLY House binnenkomt, sta je bovenop een berg. Voor je zie je een skihut, met op de achtergrond de Italiaanse vlag en besneeuwde bergtoppen. Je ziet mensen bewegen, groepjes vormen, gesprekken ontstaan. Van hieruit kun je naar andere ruimtes navigeren, maar je kunt ook gewoon even blijven hangen en kijken wie er is. In een normale videocall word je in een hokje gezet. Hier kies je zelf je plek."
      },
      {
        "type": "h2",
        "text": "2. Bijeenkomsten die verder gaan dan zenden"
      },
      {
        "type": "p",
        "text": "Tijdens de Spelen organiseert e-OLY House dagelijks \"OLY@8\": een show van olympiërs, voor olympiërs. Elke ochtend om 8 uur en elke avond om 8 uur. In de ochtendshow bespreken een host en een gast-olympiër waar ze die dag naar uitkijken. In de avondshow blikken ze terug op de dag."
      },
      {
        "type": "p",
        "text": "Maar het echte gesprek begint pas daarna. Na de show schuift iedereen door naar de lounge. Daar praat je na in kleine groepjes, zonder moderator, zonder agenda. Precies zoals je na een evenement nog even blijft hangen."
      },
      {
        "type": "h2",
        "text": "3. Ruimte voor spontane ontmoetingen"
      },
      {
        "type": "p",
        "text": "Het mooiste aan e-OLY House zie je als er niets gepland staat. Tijdens de Olympische Zomerspelen van Parijs in 2024 gingen olympiërs uit zichzelf samen zitten in e-OLY House om wedstrijden te kijken. Zo verzamelde een groepje sporters zich rond het zwemmen en een olympisch zwemster gaf live commentaar voor de anderen. Niet omdat het op de agenda stond, maar omdat het kon."
      },
      {
        "type": "p",
        "text": "Dat is wat een ontmoetingsplek doet. Het biedt ruimte waar mensen kunnen zijn, zonder dat er per se iets moet gebeuren. Echte verbinding ontstaat waar ruimte is voor toeval en spontaniteit."
      },
      {
        "type": "p",
        "text": "Het e-OLY House is gedurende de hele Spelen open. Daarna blijft het clubhuis bestaan voor reguliere bijeenkomsten en community-evenementen. De feesttent wordt kantine, de social space wordt werkplek en de OLY@8-stage wordt podium voor webinars."
      },
      {
        "type": "h2",
        "text": "Wat betekent dit voor jouw organisatie?"
      },
      {
        "type": "p",
        "text": "e-OLY House is gebouwd voor olympiërs. Maar de principes erachter gelden voor elke organisatie die mensen wil verbinden op afstand."
      },
      {
        "type": "p",
        "text": "Niet iedereen zit elke dag op dezelfde plek. Of je nu teams hebt op verschillende locaties, collega's die regelmatig thuiswerken, of vrijwilligers die je zelden fysiek ziet: de vraag is niet óf je online samenkomt, maar hoe."
      },
      {
        "type": "p",
        "text": "Een videocall is een middel. Een online ontmoetingsplek is iets anders. Het verschil zit natuurlijk voor een deel in de technologie, maar vooral in hoe je doel, vorm en beleving samen laat komen."
      },
      {
        "type": "h2",
        "text": "Nieuwsgierig?"
      },
      {
        "type": "p",
        "text": "Wil je zien hoe zo'n online omgeving eruitziet en voelt voor een evenement, een samenwerkplek of een belangrijke bijeenkomst? Neem contact op voor een demo. We laten je graag zien wat er mogelijk is. Want online samenkomen kan zoveel meer zijn dan een vierkantje op je scherm."
      }
    ]
  }
];

export const getPost = (slug: string): BlogPost | undefined =>
  POSTS.find((p) => p.slug === slug);
