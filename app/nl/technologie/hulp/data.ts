/**
 * De taalloze data van de hulppagina: kleuren, handleidingen en de
 * instellingen voor IT-afdelingen. De Nederlandse teksten staan hier ook,
 * de Engelse in tekst-en.ts.
 */

export const KLEUREN: Record<
  string,
  { rand: string; vlak: string; randHex: string; vlakHex: string; beeld: string }
> = {
  link: { rand: "border-[#EEBE3D]", vlak: "bg-[#FDF6E3]", randHex: "#EEBE3D", vlakHex: "#FDF6E3", beeld: "/images/hulp-link.webp" },
  audio: { rand: "border-[#28A8AA]", vlak: "bg-[#D3EDED]", randHex: "#28A8AA", vlakHex: "#D3EDED", beeld: "/images/hulp-audio.webp" },
  video: { rand: "border-[#8FBFA6]", vlak: "bg-[#DCEEE2]", randHex: "#8FBFA6", vlakHex: "#DCEEE2", beeld: "/images/hulp-video.webp" },
  overig: { rand: "border-[#C74B60]", vlak: "bg-[#FAEBEE]", randHex: "#C74B60", vlakHex: "#FAEBEE", beeld: "/images/hulp-overig.webp" },
};

export const HANDLEIDINGEN = [
  {
    naam: "SpatialChat",
    logo: "spatialchat",
    href: "/downloads/spatialchat-instructies-deelnemer.pdf",
    soort: "Handleiding voor deelnemers (pdf)",
    actie: "Download",
  },
  {
    naam: "Zoom",
    logo: "zoom",
    href: "/downloads/zoom-instructies-deelnemer.pdf",
    soort: "Handleiding voor deelnemers (pdf)",
    actie: "Download",
  },
  {
    naam: "Microsoft Teams",
    logo: "teams",
    href: "https://support.microsoft.com/en-us/teams/platform/troubleshoot-in-microsoft-teams",
    soort: "Hulp van Microsoft zelf",
    actie: "Naar de hulppagina",
  },
];

export const ALGEMENE_FAQ = [
  {
    q: "Het lukt niet en de bijeenkomst begint zo. Wat doe ik als eerste?",
    a: "Sluit de meeting helemaal af en klik opnieuw op de link uit je uitnodiging. Dat lost het merendeel op. Werkt dat niet, open de link dan in Google Chrome; die werkt met alle platforms waarmee wij werken. Helpt ook dat niet, herstart dan je computer — vervelend vlak voor een sessie, maar vaak sneller dan blijven proberen.",
  },
  {
    q: "Moet ik iets installeren om mee te doen?",
    a: "Voor SpatialChat niet: dat draait volledig in je browser. Voor Zoom en Teams kun je meestal ook via de browser meedoen, al werkt de app daar wat prettiger. Vraagt je organisatie om een installatie die niet lukt, dan zit er meestal een blokkade op beheerdersrechten — dan is je eigen IT-afdeling het snelste adres.",
  },
  {
    q: "Welke browser kan ik het beste gebruiken?",
    a: "Google Chrome. Edge en Firefox werken meestal ook. Safari geeft vaker problemen met microfoon en camera. Werk je op een computer van je organisatie, dan staat Chrome er vaak al op.",
  },
  {
    q: "Mijn verbinding hapert. Wat kan ik doen?",
    a: "Zet je camera even uit; beeld kost veruit de meeste bandbreedte en het geluid blijft dan meestal gewoon goed. Sluit programma's die je niet nodig hebt, zeker als er iets op de achtergrond synchroniseert. Zit je op wifi en kan het, ga dan dichter bij het punt zitten of gebruik een kabel.",
  },
  {
    q: "Ik zit op een computer van mijn werk en er wordt van alles geblokkeerd.",
    a: "Dat komt vaker voor dan je denkt: veel organisaties blokkeren onbekende domeinen of het gebruik van camera en microfoon in de browser. Dit kunnen wij niet voor je oplossen. Onderaan deze pagina staat per platform welke instellingen een IT-afdeling nodig heeft — die informatie kun je doorsturen.",
  },
];

export const DEVICE_FAQ = [
  {
    q: "De browser vraagt niet om toestemming voor mijn microfoon of camera.",
    a: "Klik in je browser op het slotje of het icoontje links in de adresbalk. Daar staat per site of camera en microfoon toegestaan zijn. Zet ze op toestaan en ververs daarna de pagina.",
  },
  {
    q: "Ik heb toestemming gegeven, maar het werkt nog steeds niet.",
    a: "Dan blokkeert je besturingssysteem het waarschijnlijk nog. Op een Mac staat dat onder Systeeminstellingen → Privacy en beveiliging → Microfoon en Camera; je browser moet daar aangevinkt staan. Op Windows staat het onder Instellingen → Privacy en beveiliging → Microfoon en Camera.",
  },
  {
    q: "Mijn geluid komt uit de verkeerde speaker of microfoon.",
    a: "Kies in de instellingen van de meeting bewust het juiste apparaat, en doe dat ook in de geluidsinstellingen van je computer zelf. Draag je oortjes of een headset? Haal ze er even uit en stop ze opnieuw in; dan wordt het apparaat opnieuw herkend.",
  },
  {
    q: "Een andere toepassing gebruikt mijn camera al.",
    a: "Camera's kunnen maar door één programma tegelijk gebruikt worden. Sluit andere meetingprogramma's volledig af — ook wanneer ze alleen nog op de achtergrond draaien — en ververs daarna de pagina.",
  },
];

export const SUPPORT_FAQ = [
  {
    q: "Is er tijdens de bijeenkomst iemand bereikbaar?",
    a: "Ja, bij bijeenkomsten die wij hosten. Vanaf een half uur voor aanvang en tijdens de hele sessie staat er iemand klaar. Hoe je die bereikt, staat in je uitnodiging.",
  },
  {
    q: "Wat doet een tech host?",
    a: "De tech host bestuurt de techniek: het platform, schermdelen, breakouts, beeld en geluid. Die zorgt dat alles blijft werken, ook als er onderweg iets misgaat.",
  },
  {
    q: "En wat doet een Meeting Master?",
    a: "De Meeting Master richt zich op de mensen in plaats van op de techniek. Die ontvangt deelnemers, helpt wie vastloopt en houdt de ruimte gastvrij — zodat niemand hoeft te bedenken hoe het ook alweer werkt.",
  },
  {
    q: "Loop ik de bijeenkomst mis als ik hulp nodig heb?",
    a: "Nee. Je wordt apart geholpen terwijl de rest doorgaat, en daarna weer teruggezet in de sessie. De groep merkt er niets van.",
  },
  {
    q: "Kan er iemand meekijken als het bij mij niet lukt?",
    a: "Tijdens een begeleide bijeenkomst wel. We kijken mee met wat jij ziet en lopen samen de stappen door. Dat gaat meestal sneller dan zelf blijven zoeken.",
  },
  {
    q: "Wat gebeurt er als het platform zelf uitvalt?",
    a: "Dan schakelen we. Bij bijeenkomsten die wij begeleiden ligt er een terugvalscenario klaar, en deelnemers krijgen bericht via het kanaal waarop ze zijn uitgenodigd.",
  },
  // Verwachtingen over aansprakelijkheid, op de plek waar mensen landen als er
  // iets misgaat. Dit is géén vervanging van algemene voorwaarden — die horen
  // in de offerte en de opdrachtbevestiging van toepassing te worden verklaard.
  {
    q: "Waar zijn jullie verantwoordelijk voor, en waar niet?",
    a: "Wij staan in voor het ontwerp, de begeleiding en de live productie van je bijeenkomst: we bereiden voor, we testen vooraf en er ligt een terugvalscenario klaar. Wat we niet in de hand hebben, is de techniek van anderen. We werken op platforms van derden — SpatialChat, Zoom, Microsoft Teams. Valt zo'n platform uit, dan doen we wat we kunnen: overschakelen, deelnemers informeren, zorgen dat het doorgaat. Voor de storing zelf zijn wij niet aansprakelijk. Datzelfde geldt voor de kant van de deelnemer: de laptop, de internetverbinding, de koptelefoon of instellingen die een IT-afdeling heeft dichtgezet. Daar helpen we bij waar we kunnen — daar is deze pagina voor — maar we kunnen niet garanderen dat elk apparaat meewerkt.",
  },
];


/**
 * Alles hieronder staat op de documentatie van de leveranciers zelf, en is
 * daar gecontroleerd. Geen losse blogs of forums: een beheerder moet het
 * kunnen verifiëren, en de bron moet meebewegen als er iets verandert.
 */
export const IT_PLATFORMS = [
  {
    naam: "SpatialChat",
    logo: "spatialchat",
    kern: "Draait volledig in de browser; deelnemers installeren niets. Data staat bij AWS in Dublin.",
    punten: [
      "Versleuteld: TLS 1.2 onderweg, AES-256 in opslag.",
      "Op de allowlist: spatial.chat en *.spatial.chat, plus de media-endpoints van LiveKit en Agora (TCP 443, UDP 3478 en 50000–60000).",
      "GDPR-conform, met een verwerkersovereenkomst die getekend kan worden.",
    ],
    links: [
      { label: "Instellingen voor bedrijfsnetwerken", href: "https://how.spatial.chat/help/control-and-management/settings-for-corporate-network/" },
      { label: "Security en privacy", href: "https://how.spatial.chat/help/control-and-management/security-and-privacy/" },
    ],
  },
  {
    naam: "Zoom",
    logo: "zoom",
    kern: "Zoom publiceert de complete firewall- en proxyconfiguratie, inclusief IP-reeksen per dienst.",
    punten: [
      "Firewallregels per dienst, met IP-reeksen in IPv4 en IPv6, als downloadbare lijst.",
      "Protocollen en poorten per onderdeel, plus uitleg bij de melding “Network error, please try again”.",
      "Certificeringen en attestaties staan gebundeld in het Trust Center.",
    ],
    links: [
      { label: "Netwerkfirewall- en proxyinstellingen", href: "https://support.zoom.com/hc/nl/article?id=zm_kb&sysparm_article=KB0060549" },
      { label: "Zoom Trust Center", href: "https://www.zoom.com/en/trust/" },
    ],
  },
  {
    naam: "Microsoft Teams",
    logo: "teams",
    kern: "Draait op je bestaande Microsoft 365-omgeving; is die al ingericht, dan is Teams meestal ook geregeld.",
    punten: [
      "Open de TCP-poorten en IP-adressen uit de Microsoft 365-lijst met URL's en IP-reeksen.",
      "Microsoft adviseert split-tunnel VPN: Teams-verkeer buiten de VPN om, dat scheelt merkbaar in kwaliteit.",
      "WebSocket-verkeer toestaan, anders valt Teams terug op langzamer polling-verkeer.",
    ],
    links: [
      { label: "Netwerk voorbereiden op Teams", href: "https://learn.microsoft.com/en-us/microsoftteams/prepare-network" },
      { label: "Problemen oplossen in Teams", href: "https://support.microsoft.com/en-us/teams/platform/troubleshoot-in-microsoft-teams" },
    ],
  },
];

/** De losse teksten van de pagina in het Nederlands. */
export const NL_TEKST = {
  hero: {
    kicker: "Helpdesk",
    titel: "Directe support voor je online meeting.",
    intro1: "Technische problemen en je moet een online bijeenkomst in?",
    intro2: "Hieronder helpen we je stap voor stap verder.",
    videoAlt:
      "Iemand achter een laptop die hulp krijgt bij een technisch probleem vlak voor een online bijeenkomst",
  },
  handleidingen: {
    kop: "Handleiding stap-voor-stap",
    onder: "Rustig doornemen vóór je bijeenkomst, of doorsturen naar je deelnemers.",
  },
  faq: {
    kop: "Veelgestelde vragen",
    onder:
      "Wat we het vaakst horen, in drie groepen: het algemene gedoe, de instellingen op je eigen apparaat, en de hulp die er tijdens een bijeenkomst is.",
    groepen: {
      algemeen: "Technische problemen in het algemeen",
      device: "Instellingen op je eigen apparaat",
      support: "Hulp tijdens de bijeenkomst",
    },
  },
  it: {
    kop: "Instellingen voor organisaties",
    onder:
      "De benodigde instellingen voor deelname aan een online meeting verschillen per platform, per organisatie en per device.",
    platformsKnop: "Bekijk de meeting platforms",
    platformsIntro: "Wil je weten waarmee we werken en waarom?",
    platformsStaart: " — met per platform waar het sterk in is, en de tools die we ermee combineren.",
  },
};
