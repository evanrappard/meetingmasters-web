/** Taalloze data en Nederlandse teksten van R@venHack. */

/**
 * De Experience staat bewust vooraan en is de standaardkeuze: dat is de versie
 * waarin het spel én het leren allebei tot hun recht komen. De Quick staat
 * daarnaast voor de groep die alleen even samen wil spelen.
 */
export const versies = [
  {
    tag: "Onze aanrader",
    title: "R@venHack Experience",
    duur: "90 minuten",
    lead: "90 minuten waarin je groep elkaar vindt en samen wijzer wordt.",
    body: "Hier zit de verbinding in. Er is tijd ingebouwd om elkaar te leren kennen, om samen vast te lopen en er weer uit te komen, en om na afloop rustig na te praten. Mensen die elkaar nog niet kenden, kennen elkaar daarna wel. Daar bovenop komen extra scenario's en securitythema's, met meer puzzels, meer plotwendingen en een nabespreking waarin de lessen echt landen. Dit is de versie die we standaard adviseren.",
    kenmerken: [
      "90 minuten: tijd voor het spel én voor elkaar",
      "5 tot 75 deelnemers, in meerdere teams tegelijk",
      "Verbinding zit erin, ook als de groep elkaar nog niet kent",
      "Extra scenario's en securitythema's",
      "Uitgebreide nabespreking waarin de lessen landen",
    ],
    highlight: true,
  },
  {
    tag: "Alleen even spelen",
    title: "R@venHack Quick",
    duur: "60 minuten",
    lead: "Kort en puur voor de lol, voor groepen die elkaar al kennen.",
    body: "60 minuten, tot 30 deelnemers, recht op de aanval af. Je stopt samen de hack en dat is het: geen kennismaking vooraf, geen uitgebreide nabespreking. Juist dat verbindende deel slaat de Quick over, en daarom werkt hij alleen als je collega's elkaar al goed kennen. Kennen ze elkaar nog niet, of wil je dat de groep hechter naar buiten loopt dan hij binnenkwam, neem dan de Experience.",
    kenmerken: [
      "60 minuten, 5 tot 30 deelnemers",
      "De kern van het spel, zonder verdieping",
      "Alleen voor groepen die elkaar al goed kennen",
      "Sterke kick-off voor een teamdag of securityweek",
    ],
  },
];

export const stappen = [
  {
    stap: 1,
    tag: "De crisis",
    title: "Je team belandt midden in een aanval",
    body: "Het begint met een melding die niet klopt. Datalekken, phishing en verborgen aanwijzingen: er is iets goed mis en de klok tikt.",
    img: "/images/ravenhack-crisis-v2.webp",
    alt: "Digitale ruis en glitch op het scherm — het begin van de cyberaanval in R@venHack",
  },
  {
    stap: 2,
    tag: "Het onderzoek",
    title: "Samen zoek je naar de sleutels",
    body: "Dan gaat je team op onderzoek. In een reeks puzzels ontdek je stap voor stap hoe de aanval in elkaar zit: overleggen, combineren en doorpakken.",
    img: "/images/ravenhack-hero-v3.webp",
    alt: "Een team in de High Security Zone van R@venHack, midden in het onderzoek naar de aanval",
  },
  {
    stap: 3,
    tag: "De doorbraak",
    title: "Je stopt de aanval",
    body: "En dan valt alles op zijn plek. Je keert de aanval, en ondertussen weet je hoe je dit op een gewone werkdag voorkomt.",
    img: "/images/ravenhack-doorbraak.webp",
    alt: "De codes gekraakt, de hack gestopt — de doorbraak in R@venHack",
  },
];

export const faq = [
  {
    q: "Wat is R@venHack precies?",
    a: "R@venHack is een cybersecurity escape game. Je team belandt in een digitale crisis vol datalekken, phishing en verborgen aanwijzingen en moet samen de aanval stoppen. Het is een bewustwordingservaring: je leert over veilig digitaal gedrag door het te dóen, in plaats van een e-learning te doorlopen.",
  },
  {
    q: "Wat is het verschil tussen de Experience en de Quick?",
    a: "Het verschil zit in de verbinding, niet in de omvang. De Experience duurt 90 minuten en heeft tijd ingebouwd om elkaar te leren kennen: samen vastlopen, er samen uitkomen en na afloop rustig napraten. Daar komen extra scenario's, meer securitythema's en een uitgebreide nabespreking bij. De Quick duurt 60 minuten en gaat recht op het spel af, zonder dat verbindende deel. Daarom is die alleen geschikt voor groepen die elkaar al goed kennen.",
  },
  {
    q: "Hoe lang duurt R@venHack?",
    a: "De Experience duurt 90 minuten, inclusief introductie en een uitgebreide nabespreking. De Quick duurt 60 minuten. Reken bij de Experience op meer verdieping en meer ruimte voor het gesprek na afloop. Samen kijken we welke versie bij je team en je doel past.",
  },
  {
    q: "Met hoeveel mensen kun je gelijktijdig spelen?",
    a: "R@venHack is gelijktijdig te spelen met maximaal 150 mensen. Standaard is deze ingericht voor tot 75 personen. Je speelt in meerdere teams tegelijk. Bij de Quick ligt de grens op 30 deelnemers; de Experience gaat verder. Laat de groepsgrootte niet je eerste afweging zijn: kennen de mensen elkaar nog niet goed, dan is de Experience de juiste keuze, hoe klein de groep ook is.",
  },
  {
    q: "Wat leert mijn team ervan?",
    a: "Deelnemers leren phishing en misleiding herkennen, hoe ze een datalek indammen en wat veilig digitaal gedrag in de praktijk betekent. Omdat ze het samen en onder lichte druk ontdekken, beklijven de lessen beter dan bij een verplichte training. Het is tegelijk teambuilding én een natuurlijk startpunt voor bredere kennisoverdracht over cybersecurity. In de Experience is daar de meeste ruimte voor: die versie heeft extra securitythema's en een uitgebreide nabespreking.",
  },
  {
    q: "Op welk platform draait R@venHack?",
    a: "Beide versies draaien via SpatialChat en worden begeleid door de Meeting Masters. Deelnemers openen een link in de browser en lopen zo binnen — zonder installatie. De begeleiding zorgt dat het spel soepel verloopt en dat iedereen erbij betrokken blijft.",
  },
];


/** De losse teksten van deze pagina in het Nederlands. */
export const NL = {
  hero: {
    kicker: "R@venHack · Cybersecurity",
    titel1: "Stop samen",
    titel2: "de cyberaanval.",
    intro:
      "Een cybersecurity escape game waarin je groep al spelend leert over veilig digitaal gedrag. De Experience van 90 minuten verbindt de groep onderweg; de Quick van 60 minuten is puur het spel.",
    ctaKosten: "Check kosten",
    cta: "Boek nu",
    beeldAlt: "Een silhouet voor een wand vol beeldschermen — in R@venHack zoekt je team naar de sporen van de aanval",
  },
  wat: {
    kicker: "Wat het is",
    titel: "Een cybersecurity escape game.",
    body: "In R@venHack belandt je team midden in een digitale crisis vol datalekken, phishing en verborgen aanwijzingen. Samen ontrafel je de puzzel en stop je de aanval. Onderweg kom je precies die digitale keuzes tegen die ook op een gewone werkdag het verschil maken.",
  },
  voorWie: {
    kicker: "Voor wie",
    titel: "Teambuilding met een leerdoel.",
    body: "Voor organisaties die digitale veiligheid niet alleen willen uitleggen, maar ook willen laten ervaren. R@venHack combineert teambuilding met cybersecurity awareness en biedt een natuurlijk startpunt voor het gesprek over veilig digitaal gedrag.",
  },
  hoe: {
    kicker: "Hoe het werkt",
    titel: "Van crisis naar doorbraak, samen als team.",
    onder: "R@venHack draait via SpatialChat en wordt begeleid door de Meeting Masters. Je opent een link, loopt binnen en de crisis begint. Dat geldt voor de Experience en voor de Quick.",
    stappen: stappen,
  },
  versies: {
    kicker: "Twee versies",
    titel: "De Experience is het uitgangspunt.",
    onder: "Je speelt R@venHack met 5 tot 75 mensen, in meerdere teams tegelijk. Het verschil tussen de twee versies zit niet in dat aantal, maar in de verbinding. In de Experience is tijd ingebouwd om elkaar echt te leren kennen. De Quick slaat dat over en werkt daarom alleen bij groepen die elkaar al goed kennen.",
    cta: "Check kosten",
    kosten: "Boek nu",
    items: versies,
  },
  praktijk: {
    kicker: "Bekijk de video",
    titel: "Maak cyberveilig gedrag bespreekbaar.",
    lead: "Een datalek. Een verdachte mail. En steeds weer dezelfde naam: R@ven.",
    body: "Teams volgen het spoor van een hacker door een virtueel kantoor: wachtwoorden kraken, aanwijzingen ontcijferen, knopen doorhakken terwijl de klok tikt. Cybersecurity blijft zo niet bij erover horen.",
    duur: "De Experience duurt 90 minuten, met tijd om elkaar te leren kennen en om samen te leren. De Quick duurt 60 minuten en is puur het spel, voor groepen tot 30 die elkaar al kennen.",
  },
  faqKop: "Veelgestelde vragen over R@venHack",
  terug: "← Games & Tools",
  links: { boeken: "/nl/boeken", offerte: "/nl/offerte", games: "/nl/games-tools" },
};
