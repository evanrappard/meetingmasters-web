import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { eventFormats } from "@/app/nl/events/page";
import {
  Target, Mic2, Megaphone, Vote,
  UsersRound, GraduationCap, Lightbulb, DoorOpen,
  Sparkles, Snowflake, Lock, Handshake,
  MapPin, MessageCircle, ScanSearch, Coffee,
  Radio, MonitorPlay, Pin, Network,
  Check,
  type LucideIcon,
} from "lucide-react";

interface EventData {
  title: string;
  bg: string;
  /** Eigen hero-afbeelding voor dit format (anders de generieke events-hero). */
  heroSrc?: string;
  /** Optionele extra styling op de hero-afbeelding (bv. inzoomen voor leesbaarheid). */
  heroImgStyle?: React.CSSProperties;
  /** Zwaardere donkerlaag links, voor hero's waar de witte kop anders wegvalt. */
  heroOverlay?: string;
  /** Alt-tekst van de hero: beschrijft het beeld in de context van dit event. */
  heroAlt?: string;
  iconSrc?: string;
  Icon: LucideIcon;
  ic: string;
  tagline: string;
  intro: string;
  outcomes: { title: string; body: string }[];
  forWho: string;
  range: string | null;
  steps: { title: string; body: string }[];
  related: string[];
  validation?: {
    headline: string;
    items: { title: string; body: string }[];
  };
  conditions?: { title: string; body: string }[];
  cases?: { label: string; title: string; body: string; img?: string; imgAlt?: string; imgStyle?: React.CSSProperties }[];
  faq?: { q: string; a: string }[];
  faqMore?: { q: string; a: string }[];
  outcomeSummary?: string;
}

/**
 * Donkerlaag over de hero, links waar de witte kop staat. Standaard zo licht
 * mogelijk; alleen zwaarder waar het beeld daar te licht is (gemeten op de
 * tekstzone van de desktop-uitsnede).
 */
const HERO_DIM_LICHT = "bg-gradient-to-r from-black/55 via-black/15 to-transparent";
const HERO_DIM_MEDIUM = "bg-gradient-to-r from-black/70 via-black/30 to-transparent";
const HERO_DIM_STERK = "bg-gradient-to-r from-black/80 via-black/45 to-black/10";

const EVENT_DATA: Record<string, EventData> = {
  "strategiedagen": {
    title: "Online strategiedag organiseren",
    bg: "radial-gradient(circle at 38% 38%, #6CCECE, #38BCBC)",
    heroSrc: "/images/events-strategiedag-hero.webp",
    heroAlt: "Deelnemer aan een online strategiedag met een digitaal whiteboard vol post-its over huidige situatie, strategische thema's en prioriteiten",
    iconSrc: "/images/icons/strategiedagen.png",
    Icon: Target, ic: "text-white",
    tagline: "Een dag die leidt tot besluiten en richting — niet alleen tot presentaties.",
    intro:
      "Laat deelnemers niet passief naar presentaties kijken, maar actief bijdragen aan de uitkomst. Van vraagstelling tot programma-opzet en interactie-ontwerp: met een achtergrond als strategie-consultants helpen we bij inhoud, vorm en techniek.",
    outcomes: [{ title: "Heldere richting", body: "Aan het einde van de dag weet iedereen wat er besloten is en waarom." }, { title: "Breed draagvlak", body: "De koers wordt gedragen — niet alleen door de top, maar door het hele team." }, { title: "Betrokken team", body: "Medewerkers begrijpen waar de organisatie naartoe gaat en voelen zich onderdeel van het verhaal." }],
    forWho: "Directieteams, managementlagen, programmamanagers",
    range: "10-100 deelnemers",
    steps: [{ title: "Intake", body: "We leren je organisatie, je groep en het vraagstuk kennen." }, { title: "Ontwerp", body: "Agenda, plenaire sessies, breakouts en besluitvormingsmomenten op maat." }, { title: "Repetitie", body: "Technische doorloop met sprekers, hosts en stakeholders." }, { title: "Live productie", body: "Volledig begeleid: techniek én inhoudelijke facilitatie." }],
    related: ["townhall", "all-hands", "brainstormen", "conferentie"],
    validation: {
      headline: "Online strategiesessies werken - mits ze goed zijn opgezet.",
      items: [{ title: "Duurzaam en bereikbaar", body: "Geen reistijd, geen locatiekosten: deelnemers vanuit meerdere kantoren of landen loggen gewoon in. Online strategiedagen schalen zonder logistieke hoofdpijn." }, { title: "Participatief en betrokken", body: "Samen in gesprek over doelen, bestaande plannen en nieuwe richtingen. Met goede vragen, slimme formats en samenwerktools als Miro." }, { title: "Inspirerend en doelgericht", body: "Met de juiste opzet ontstaan scherpe, gefocuste sessies met sterke output. Online kan juist goed werken, mits het goed is opgezet. Dat is ons vak." }],
    },
    conditions: [{ title: "Helder strategisch doel", body: "Wat moet er aan het einde van het traject besloten of bepaald zijn? Zonder helder doel wordt een strategiesessie een gesprek - niet een richting." }, { title: "Meeting design dat besluiten mogelijk maakt", body: "Niet alleen presentaties, maar werkvormen die echt bijdragen: prioriteringsronden, breakouts per thema, plenaire synthese. De opbouw van de dag bepaalt de uitkomst." }, { title: "Begeleiding op techniek én inhoud", body: "Een goede moderator houdt het tempo erin, geeft ruimte aan alle stemmen en stuurt bij als de groep verzandt. Dat maakt het verschil tussen een goed gesprek en een helder besluit." }],
    cases: [{ label: "Branchevereniging", title: "80 leden bepalen samen de koers", body: "Een grote belangenbehartiger wil een deel van het strategietraject online houden zonder in te leveren op diepgang. Wij ontwerpen plenaire sessies met brainstorms en prioriteitsstelling. Zo stellen we een breed gedragen, zeer inhoudelijk meerjarenplan vast.", img: "/images/events-praktijk-branchevereniging.webp", imgAlt: "Laptop met een digitale gesprekskaart waarop leden van een branchevereniging samen de koers bepalen" }, { label: "Multinational", title: "Vijf kantoren, één roadmap", body: "Een multinational met teams in vijf landen wil werken naar een helder strategisch fundament. Wij verzorgen vijf online sessies met inhoudelijke facilitatie en begeleiding op vorm en techniek. Het resultaat: één centrale basis voor ontwikkeling, met duidelijke ruimte voor lokale verschillen.", img: "/images/events-praktijk-whiteboard.webp", imgAlt: "Hybride werksessie met een whiteboard vol post-its rond Why, How en What, en collega's online in beeld" }, { label: "Non-profit", title: "Jaarplan in één dag, volledig online", body: "Een non-profit team van 50 mensen wil het businessplan in één dag vaststellen zonder fysiek samen te komen. Met een compact en creatief programma lukt dat. Het resultaat: een dag waarover lang wordt nagepraat en een plan dat door het hele team wordt gedragen.", img: "/images/events-praktijk-forum.webp", imgAlt: "Virtueel forum waarin een non-profit team plenair en in kleine groepen het jaarplan vaststelt" }],
    faq: [{ q: "Hoe lang duurt een online strategiedag?", a: "Een online strategiedag duurt meestal een halve dag (3 tot 4 uur) of een volledige dag (6 tot 8 uur). Welke opzet het beste werkt, hangt af van het aantal onderwerpen, de gewenste diepgang en de grootte van de groep." }, { q: "Hoeveel deelnemers kunnen meedoen?", a: "Wij begeleiden online strategiedagen van 10 tot 100 deelnemers. In alle soorten groepen werken we met breakout-sessies en interactieve werkvormen zodat iedereen actief kan bijdragen." }, { q: "Welke werkvormen gebruiken jullie?", a: "Dat hangt af van het doel van de dag. We werken bijvoorbeeld met breakoutgesprekken, interactieve canvassen, World Café, Open Space, prioriteringssessies, stemrondes en besluitvormende werkvormen. De werkvorm volgt altijd het vraagstuk, niet andersom." }, { q: "Wat doet MeetingMasters tijdens een online strategiedag?", a: "Wij helpen bij het ontwerpen en faciliteren van het programma, we verzorgen de technische productie en begeleiden sprekers, workshopleiders en deelnemers. Zo kan iedereen in de groep maximaal bijdragen en zich volledig richten op de inhoud en de besluiten die genomen moeten worden." }, { q: "Hoe ver van tevoren moeten we boeken?", a: "Voor een online strategiedag adviseren wij om minimaal drie tot vier weken voorbereidingstijd aan te houden. Voor grotere trajecten of complexe programma's is zes tot acht weken vaak wenselijk." }, { q: "Wat kost een online strategiedag?", a: "De investering hangt af van de groepsgrootte, de voorbereiding, het programma en de gewenste begeleiding. Daarom maken wij altijd een voorstel op maat. Neem gewoon even contact met ons op!" }],
    faqMore: [{ q: "Kan een online strategiedag ook hybride plaatsvinden?", a: "Ja. Het is mogelijk om een online strategiedag hybride te laten plaatsvinden. Dat vraagt echter zorgvuldig design. Gewoon een camera en een scherm bijplaatsen werkt hier niet. Wij ontwerpen programma's zo dat beide groepen, de mensen online en de mensen op locatie, gelijkwaardig kunnen deelnemen." }, { q: "Welke software gebruiken jullie?", a: "Wij kiezen altijd voor interactieve platforms, omdat betrokkenheid essentieel is voor een succesvolle strategiedag. We hebben ervaring met Zoom, Zoom Events en Teams. Maar voor een strategiedag laten we je ook graag SpatialChat zien — vaak net dat beetje extra interactie dat de besluitvorming vlot trekt. Wat het beste past, hangt af van je doel en je groep." }, { q: "Hoe bereiden deelnemers zich voor?", a: "Deelnemers ontvangen vooraf duidelijke instructies. Soms vragen we deelnemers ook om vooraf input aan te leveren, zodat de beschikbare tijd optimaal benut wordt. Uiteindelijk is iedere sessie een kruispunt in een groter traject. Daar spelen wij op in." }, { q: "Werkt een online strategiedag ook voor directieteams?", a: "Juist voor directieteams kan een online strategiedag goed werken. De online omgeving maakt het eenvoudig om gericht samen te werken, experts aan te laten sluiten en resultaten direct vast te leggen. En ook directieteams zijn wel eens toe aan iets anders dan de traditionele Teams vergadering. Daar spelen wij actief op in." }, { q: "Kunnen jullie helpen bij besluitvorming?", a: "Ja. Veel strategiedagen draaien niet alleen om ideeën verzamelen, maar ook om keuzes maken. Met goed opgeleide facilitators gebruiken we werkvormen die helpen om prioriteiten te bepalen en gezamenlijk besluiten te nemen." }, { q: "Wat gebeurt er na afloop van de strategiedag?", a: "De opbrengsten worden vastgelegd en overzichtelijk gedeeld. Indien gewenst ondersteunen wij ook bij vervolgsessies of de verdere uitwerking van de gemaakte keuzes." }],
    outcomeSummary: "Voor een heldere richting, breed draagvlak en een betrokken team.",
  },
  "townhall": {
    title: "Online townhall organiseren",
    bg: "radial-gradient(circle at 38% 38%, #ADB4A4, #989F8F)",
    heroSrc: "/images/events-townhall-hero.webp",
    heroAlt: "Medewerker volgt een online townhall waarin honderden collega's in beeld zijn, naast een laptop met de presentatie",
    heroOverlay: HERO_DIM_MEDIUM,
    iconSrc: "/images/icons/townhall.png",
    Icon: Mic2, ic: "text-white",
    tagline: "De hele organisatie bijeen: open, transparant en professioneel geproduceerd.",
    intro:
      "Een online townhall is het moment waarop leiders en medewerkers direct met elkaar in gesprek gaan. Wij helpen organisaties een online townhall te organiseren die geen eenrichtingsverkeer is, maar een ontmoeting: met live Q&A, polls, reflectie en waar nodig breakouts voor verdiepende vragen.",
    outcomes: [{ title: "Één lijn in de organisatie", body: "Iedereen weet waar het naartoe gaat en begrijpt de beslissingen die zijn genomen." }, { title: "Medewerkers voelen zich gehoord", body: "Geen eenrichtingsverkeer, maar een echte dialoog, met ruimte voor eerlijke vragen." }, { title: "Soepel verloop", body: "Professioneel geproduceerd, ook met honderden deelnemers tegelijk." }],
    forWho: "Directies, communicatieteams, grote organisaties",
    range: "30-600 deelnemers",
    steps: [{ title: "Intake", body: "Agenda, sprekers, boodschappen en technische schaalvereisten." }, { title: "Ontwerp", body: "Plenaire structuur, interactiemomenten en Q&A-opzet." }, { title: "Repetitie", body: "Volledige technische doorloop met alle sprekers en hosts." }, { title: "Live productie", body: "Professioneel geproduceerd van begin tot eind." }],
    related: ["all-hands", "strategiedagen", "alv", "webinar"],
    validation: {
      headline: "Samen echt delen waar het om gaat, vraagt meer dan een webinar.",
      items: [{ title: "Duidelijke boodschap, echt gesprek", body: "Een goede online townhall brengt strategie, besluiten en vragen samen. Niet als losse presentatie, maar als interactieve online bijeenkomst waarin medewerkers begrijpen wat er speelt en waarom dat ertoe doet." }, { title: "Betrokkenheid op schaal", body: "Ook met honderden deelnemers kan interactie goed werken. Met polls, chat, Q&A, korte verwerkingsopdrachten en kleinere gesprekken blijven medewerkers actief betrokken." }, { title: "Strakke online productie", body: "Sprekers, moderator, techniek, timing, opname, chat en deelnemerssupport moeten soepel samenwerken. Wij houden de regie, zodat de organisatie zich kan richten op de inhoud." }],
    },
    conditions: [{ title: "Een heldere kernboodschap", body: "Wat moeten medewerkers na afloop begrijpen? Wat moeten ze toepassen of vertalen naar hun werk? Een townhall zonder duidelijke kern wordt al snel een verzameling updates." }, { title: "Interactie die past bij de groep", body: "Niet iedere vraag hoeft plenair. Soms werkt een poll, een chatronde of breakout beter. Het ontwerp bepaalt de richtlijn en mate van participatie." }, { title: "Moderatie én technische regie", body: "Een sterke moderator bewaakt het gesprek. Een technische host bewaakt de meeting. Die scheiding maakt een online townhall professioneler en rustiger." }],
    cases: [{ label: "Grote organisatie", title: "Directie in gesprek met 450 medewerkers", body: "Een organisatie wil een kwartaalupdate organiseren die niet voelt als een uitzending. Wij ontwerpen een compacte townhall met live vragen, polls en thematische breakouts. De opbrengst: meer begrip voor de koers en duidelijke signalen uit de organisatie.", img: "/images/events-townhall-praktijk-directie.webp", imgAlt: "Hybride opstelling met deelnemers in de zaal en online tijdens een townhall van de directie" }, { label: "Verandertraject", title: "Vragen ophalen in een gevoelige fase", body: "Tijdens een reorganisatie is er behoefte aan transparantie en rust. Wij verzorgen de technische productie en ontwerpen een vragenproces waarin medewerkers vooraf en live kunnen reageren. Zo ontstaat een zorgvuldig gesprek met ruimte voor nuance.", img: "/images/events-townhall-praktijk-verandertraject.webp", imgAlt: "Digitaal bord waarop medewerkers hun vragen ordenen rond proces, organisatie en individu" }, { label: "Internationaal team", title: "Eén verhaal voor meerdere landen", body: "Voor een organisatie met medewerkers in verschillende tijdzones maken we een online townhall met korte presentaties, energieke interacties en tijd om na te praten in de bar. Met ruimte voor ontmoeting tussen landen is iedereen weer bijgepraat.", img: "/images/events-townhall-praktijk-internationaal.webp", imgAlt: "Wereldkaart met een virtueel auditorium, waar collega's uit meerdere landen samenkomen" }],
    faq: [{ q: "Hoe lang duurt een online townhall?", a: "Een online townhall duurt meestal tussen de 60 en 120 minuten. Dat biedt voldoende ruimte voor updates, interactie en vragen zonder dat de aandacht verslapt." }, { q: "Hoeveel medewerkers kunnen deelnemen?", a: "Wij begeleiden online townhalls van 30 tot ruim 600 deelnemers. Ook bij grote groepen blijft interactie mogelijk." }, { q: "Hoe voorkomen jullie dat een townhall eenrichtingsverkeer wordt?", a: "Door interactie bewust onderdeel van het programma te maken. En door niet bang te zijn om grote groepen in kleinere eenheden op te delen. Mensen slaan informatie beter op als ze er zelf mee aan de slag mogen. Dus naast live vragen, polls en stemmingen, werken we ook aan formats voor het verwerken en verrijken van de gepresenteerde inzichten." }, { q: "Kunnen medewerkers anoniem vragen stellen?", a: "Dialoog en contact staan centraal in alles wat wij doen. Wij werken slechts bij uitzondering met anonieme vragen, die in dat geval van tevoren zijn opgehaald." }, { q: "Welke software gebruiken jullie?", a: "We werken met Zoom, Zoom Events en Teams. Voor een townhall laten we je daarnaast graag SpatialChat zien: het maakt echte interactie met een grote groep verrassend makkelijk. De keuze hangt uiteindelijk af van wat je met de bijeenkomst wilt bereiken." }, { q: "Wat kost een online townhall?", a: "De investering hangt af van het aantal deelnemers, de gewenste productie en de mate van ondersteuning. Daarom maken wij graag een voorstel op maat." }],
    faqMore: [{ q: "Wat is het verschil tussen een townhall en een webinar?", a: "Een webinar richt zich meestal op kennisoverdracht. Een townhall draait vaker om interne communicatie, betrokkenheid en dialoog tussen medewerkers en management." }, { q: "Kan een townhall hybride plaatsvinden?", a: "Ja. Veel organisaties combineren een publiek op locatie met online deelnemers. Vaak gaat dit ten koste van de betrokkenheid en de interactie. Wij geven daarom de voorkeur aan eenduidige keuzes: iedereen online. Of iedereen offline." }, { q: "Kunnen medewerkers vooraf vragen insturen?", a: "Ja. Dat levert vaak betere en meer doordachte vragen op en helpt bij de voorbereiding van sprekers." }, { q: "Kunnen we de sessie opnemen?", a: "Ja. De opname kan achteraf worden gedeeld met medewerkers die niet aanwezig konden zijn." }, { q: "Is een moderator noodzakelijk?", a: "Wij raden dit sterk aan. Een moderator bewaakt het tempo, zorgt voor interactie en helpt de juiste vragen op het juiste moment aan bod te laten komen. Vaak levert de klant zelf een (interne) moderator aan en verzorgen wij de technische host. Wij kunnen echter ook een facilitator leveren." }, { q: "Hoe vaak organiseren organisaties een townhall?", a: "Veel organisaties organiseren een townhall per kwartaal of maandelijks als vast communicatiemoment. Steeds meer partijen doen dit online, om reistijd, tijd en kosten te besparen. Dat kan ook, nu er formats zijn die meer doen dan alleen maar zenden." }],
    outcomeSummary: "Voor betere kennisdeling en begrip. Een goed gesprek, ook met grote groepen.",
  },
  "all-hands": {
    title: "Online all-hands organiseren",
    bg: "radial-gradient(circle at 38% 38%, #F8D84A, #EEBE3D)",
    heroSrc: "/images/events-allhands-hero.webp",
    heroAlt: "Deelnemer aan een online all-hands met het voltallige personeel in beeld op een groot scherm",
    Icon: Megaphone, ic: "text-[#696758]",
    tagline: "Open gesprek tussen directie en medewerkers — transparant, live en met echte betrokkenheid.",
    intro:
      "Bij een all-hands meeting staat openheid centraal: medewerkers kunnen vragen stellen, meedenken en hun mening geven. Wij ontwerpen interactieve all-hands bijeenkomsten waarbij dit echt gebeurt - niet als façade, maar als oprechte dialoog tussen leiderschap, teams en de rest van de organisatie.",
    outcomes: [{ title: "Betrokken medewerkers", body: "Mensen voelen zich gehoord en serieus genomen — geen theater, maar oprecht contact." }, { title: "Vertrouwen in leiderschap", body: "Openheid en transparantie versterken het vertrouwen in de richting die de organisatie inslaat." }, { title: "Een update die beklijft", body: "Medewerkers weten wat er van hen gevraagd wordt en voelen de verbinding met het grotere verhaal." }],
    forWho: "Directies, HR- en communicatieteams",
    range: "50-500 deelnemers",
    steps: [{ title: "Intake", body: "Boodschappen, vraagstukken en gewenste toon van het gesprek." }, { title: "Ontwerp", body: "Programma met opening, updates, Q&A en interactiemomenten." }, { title: "Repetitie", body: "Volledige technische doorloop met sprekers en hosts." }, { title: "Live productie", body: "Professioneel geproduceerd — inclusief real-time moderatie." }],
    related: ["townhall", "strategiedagen", "alv", "webinar"],
    validation: {
      headline: "Een online all-hands moet voelen als een bijeenkomst van en met iedereen.",
      items: [{ title: "Iedereen aan boord", body: "Een online all-hands brengt de hele organisatie samen. Ook medewerkers op andere locaties, thuis of in het buitenland kunnen eenvoudig deelnemen en actief meedoen." }, { title: "Updates die blijven hangen", body: "Strategie, resultaten, successen en zorgen krijgen meer betekenis wanneer medewerkers ermee aan de slag gaan en zich uitgenodigd voelen om echt iets bij te dragen." }, { title: "Openheid met structuur", body: "Een all-hands vraagt ruimte én regie. Wij zorgen voor een strak programma, duidelijke rollen, goede sprekersvoorbereiding en technische ondersteuning van alle aanwezigen." }],
    },
    conditions: [{ title: "Een herkenbaar ritme", body: "All-hands bijeenkomsten werken het best met een heldere format. Deelnemers weten dan wat ze kunnen verwachten en wanneer zij kunnen bijdragen." }, { title: "Ruimte voor echte vragen", body: "Openheid vraagt voorbereiding. Denk aan vooraf ingestuurde vragen, live chat, duidelijke spelregels en een moderator die durft door te vragen." }, { title: "Sprekers die online goed overkomen", body: "Online aandacht is kwetsbaar. Wij sturen op korte bijdragen, duidelijke publieksvragen en goede ondersteunende documentatie." }],
    cases: [{ label: "Internationaal MKB", title: "Nieuwe koers voor alle medewerkers", body: "Deze organisatie wil de jaarlijkse all-hands ditmaal online houden. Deelnemers komen uit alle landen. Wij maken een online all-hands met managementupdates, teamverhalen en een brede vragenronde. Een sessie voor richting en herkenning.", img: "/images/events-allhands-koers.webp", imgAlt: "Spelparcours in bedrijfskleuren waarin medewerkers stap voor stap de nieuwe koers doorlopen" }, { label: "HR en communicatie", title: "Diversity Day", body: "Voor de jaarlijkse Diversity Day ontwerpen we een bijeenkomst met experts en interne medewerkers. Naast presentaties is er een virtuele marktplaats waar deelnemers doorpraten over onderwerpen die voor hen relevant zijn.", img: "/images/events-allhands-diversity.webp", imgAlt: "Kleurrijke welkomstruimte voor Diversity Day met de vraag: wat is jouw plus?" }, { label: "Middelgroot Nederlands bedrijf", title: "Maandelijkse all-hands met vaste opbouw", body: "Wij helpen een terugkerend format neerzetten voor organisatiebrede updates voor medewerkers die over het hele land zitten. Met een herkenbare structuur en goed planbare voorbereiding wordt het een vast ankerpunt.", img: "/images/events-allhands-terugkerend.webp", imgAlt: "Virtueel organogram waarin CEO, Finance, Sales, HR, Operations en Communications aan bod komen" }],
    faq: [{ q: "Wat is het verschil tussen een all-hands en een townhall?", a: "De begrippen worden vaak door elkaar gebruikt. Een all-hands richt zich meestal op de hele organisatie en combineert updates, successen, strategie en vragen vanuit medewerkers." }, { q: "Hoeveel mensen kunnen deelnemen?", a: "Wij begeleiden all-hands bijeenkomsten van ongeveer 50 tot ruim 500 deelnemers." }, { q: "Hoe houden jullie een grote groep betrokken?", a: "Met interactieve werkvormen, live vragen, polls, breakouts, spellen en een helder programma waarin medewerkers actief worden betrokken." }, { q: "Hoe vaak organiseren organisaties een all-hands?", a: "Veel organisaties kiezen voor een maandelijkse of kwartaalbijeenkomst om medewerkers betrokken te houden bij ontwikkelingen binnen de organisatie." }, { q: "Kunnen medewerkers vragen stellen?", a: "Ja. Medewerkers kunnen vragen stellen tijdens de bijeenkomst en vaak ook vooraf." }, { q: "Wat kost een online all-hands?", a: "De investering hangt af van de omvang van de bijeenkomst en de gewenste ondersteuning. Wij maken hiervoor een voorstel op maat." }],
    faqMore: [{ q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Zoom Events en Teams. Voor een all-hands is SpatialChat het overwegen waard — mensen bewegen vrij rond en het gesprek komt vanzelf op gang. Samen kiezen we het platform dat bij je doel past." }, { q: "Kunnen jullie de volledige productie verzorgen?", a: "Ja. Wij begeleiden het traject van ontwerp en voorbereiding tot uitvoering en nazorg." }, { q: "Kan een all-hands hybride plaatsvinden?", a: "Ja. Zowel medewerkers op locatie als online deelnemers kunnen actief deelnemen." }, { q: "Hoe lang duurt een all-hands?", a: "De meeste all-hands bijeenkomsten duren tussen de 60 en 180 minuten." }, { q: "Kunnen we opnames delen?", a: "Ja. Opnames kunnen achteraf beschikbaar worden gesteld voor medewerkers die niet aanwezig waren." }, { q: "Hoe bereiden sprekers zich voor?", a: "Wij begeleiden sprekers vooraf met een briefing, technische check en indien gewenst een repetitie." }],
    outcomeSummary: "Voor organisatiebrede betrokkenheid, open vragen en gedeelde actie voorwaarts.",
  },
  "alv": {
    title: "Online ALV organiseren",
    bg: "radial-gradient(circle at 38% 38%, #C0D8D0, #A0C8C0)",
    heroSrc: "/images/events-alv-hero.webp",
    heroAlt: "Online ALV met een stemming op het laptopscherm: de knop Vote now naast het jaarverslag en de cijfers op tafel",
    // Beeld omlaag, zodat de "Vote now"-knop bovenin het laptopscherm in beeld blijft.
    heroImgStyle: { objectPosition: "center 8%" },
    heroOverlay: HERO_DIM_STERK,
    Icon: Vote, ic: "text-[#4A6860]",
    tagline: "Je Algemene Ledenvergadering: statutair correct, goed gestructureerd en toch levendig.",
    intro:
      "Een online Algemene Ledenvergadering vraagt om de juiste infrastructuur: stemmodules, aanwezigheidsregistratie en een gestructureerde vragenronde. Wij helpen verenigingen, stichtingen en coöperaties om een rechtsgeldige online ALV te organiseren die professioneel verloopt.",
    outcomes: [{ title: "Statutair correct", body: "De vergadering voldoet aan alle wettelijke vereisten, inclusief quorum, stemprocedures en verslaglegging." }, { title: "Actieve ledenbetrokkenheid", body: "Leden doen mee, stemmen en voelen dat hun stem er echt toe doet." }, { title: "Probleemloze uitvoering", body: "Geen technische of organisatorische problemen. Het bestuur kan zich volledig op de inhoud richten." }],
    forWho: "Verenigingen, stichtingen, coöperaties",
    range: "30-600 deelnemers",
    steps: [{ title: "Intake", body: "Agenda, stempunten, quorum-eisen en technische wensen." }, { title: "Ontwerp", body: "Platform-inrichting, stemmingsmodule en vragenronde." }, { title: "Repetitie", body: "Volledige technische doorloop met bestuur en hosts." }, { title: "Live productie", body: "Wij draaien de vergadering technisch van begin tot eind." }],
    related: ["townhall", "all-hands", "conferentie", "bewonersparticipatie"],
    validation: {
      headline: "Een Algemene Ledenvergadering werkt online alleen als proces en techniek kloppen.",
      items: [{ title: "Besluitvorming die klopt", body: "Een online ALV moet betrouwbaar zijn. Met specialistische partners denken wij mee over stemprocedures, machtigingen, rollen en formele vaststelling." }, { title: "Hoge opkomst", body: "Deelnemers krijgen heldere instructies en live ondersteuning. Dat verlaagt de drempel, ook voor leden die minder vaak deelnemen aan online vergaderingen." }, { title: "Rust voor bestuur en voorzitter", body: "Wij zorgen voor techniek, online stemmen, deelnemerssupport en draaiboek. Zo kunnen bestuur en voorzitter zich richten op de inhoud en de vergadering." }],
    },
    conditions: [{ title: "Statuten als vertrekpunt", body: "Wat staat er over online vergaderen, stemmen en quorum? De inrichting van de ALV volgt altijd uit wat de statuten toestaan." }, { title: "Een betrouwbaar stemproces", body: "Stemmen moeten kloppen en achteraf te verantwoorden zijn. Wij werken met de beproefde stemtool van partner VoteCompany, die hierin gespecialiseerd is." }, { title: "Een strak draaiboek", body: "Een ALV kent een vaste structuur en formele momenten. Een helder draaiboek voorkomt onduidelijkheid op het moment dat het telt." }],
    cases: [{ label: "Europese branchevereniging", title: "Bestuur- en algemene ledenvergadering op één dag", body: "De vereniging met leden uit heel Europa houdt de statutaire jaarvergadering met het bestuur en met de leden, waarna het bestuur die uitkomsten ook moet formaliseren. Wij verzorgen het technische proces, de stemomgeving, de switches tussen bijeenkomsten en de deelnemersbegeleiding.", img: "/images/events-alv-praktijk-branchevereniging.webp", imgAlt: "Deelnemers aan een online ledenvergadering in beeld tijdens de statutaire jaarvergadering" }, { label: "Investeringsmaatschappij", title: "Gewogen stemmen zorgvuldig verwerkt", body: "Voor een investeringsmaatschappij moet het stemproces aansluiten op verschillende stemrechten. We richten samen met VoteCompany de stemprocedure in, testen vooraf en zorgen tijdens de vergadering voor heldere rapportage.", img: "/images/events-alv-praktijk-gewogen-stemmen.webp", imgAlt: "Stemomgeving van VoteCompany met het overzicht van een verkiezing en gewogen stemrechten" }, { label: "Stichting", title: "Bestuurswissel en jaarstukken online behandeld", body: "Een stichting wil formele agendapunten online behandelen zonder onrust in de techniek. Met een strak draaiboek, testmoment en technische host verloopt de vergadering overzichtelijk.", img: "/images/events-alv-praktijk-jaarstukken.webp", imgAlt: "Online stemming over het jaarplan en de begroting tijdens een digitale bestuursvergadering" }],
    faq: [{ q: "Is online stemmen toegestaan tijdens een ALV?", a: "Dat hangt af van je statuten en de manier waarop de ALV is ingericht. Wij helpen organisaties bij het organiseren van een zorgvuldig en transparant stemproces." }, { q: "Hoe bewaken jullie het quorum?", a: "Wij werken met VoteCompany, waarbij iedereen een unieke stemcode krijgt en het stemgedrag wordt geregistreerd. Dit helpt om gedurende de vergadering inzichtelijk te hebben of aan de voorwaarden voor besluitvorming wordt voldaan." }, { q: "Kunnen leden vooraf stemmen?", a: "Dat is mogelijk wanneer de statuten dit toestaan en als je dat zo wenst. Wij kunnen verschillende stemvormen ondersteunen." }, { q: "Hoeveel leden kunnen deelnemen?", a: "Wij begeleiden online ALV's van 30 tot ruim 600 deelnemers." }, { q: "Wat kost een online ALV?", a: "De investering hangt af van het aantal deelnemers, de stemprocedures en de gewenste ondersteuning. Daarom stellen wij per vereniging een voorstel op." }],
    faqMore: [{ q: "Welke stemmogelijkheden zijn er?", a: "Afhankelijk van de situatie kunnen we werken met open stemmingen, gesloten stemmingen en anonieme stemrondes. Daarbij kan gekozen worden voor gewogen stemmingen." }, { q: "Welke software gebruiken jullie?", a: "Wij werken met Online Stemtool van VoteCompany. Voor informele stemmingen werken we ook met polling tools." }, { q: "Kan een ALV hybride plaatsvinden?", a: "Ja. Een deel van de leden kan op locatie aanwezig zijn terwijl anderen online deelnemen." }, { q: "Kunnen leden anoniem stemmen?", a: "Ja. Voor bepaalde stemmingen kan anoniem stemmen wenselijk of noodzakelijk zijn." }, { q: "Hoe registreren jullie aanwezigheid?", a: "Aanwezigheid kan automatisch of handmatig worden geregistreerd, afhankelijk van de gekozen oplossing." }, { q: "Krijgen we een stemrapportage achteraf?", a: "Ja. Indien gewenst leveren wij een overzicht van de stemresultaten en deelname." }],
    outcomeSummary: "Voor zorgvuldige besluitvorming, transparant stemmen en leden die allemaal volwaardig deel kunnen nemen.",
  },
  "teambuilding": {
    title: "Online teambuilding organiseren",
    bg: "radial-gradient(circle at 38% 38%, #F5BEC8, #EFA1AF)",
    heroSrc: "/images/events-teambuilding-hero-v2.webp",
    heroAlt: "Online teambuilding in een virtuele boomhut, waar deelnemers elkaar buiten de werkcontext ontmoeten",
    Icon: UsersRound, ic: "text-[#696758]",
    tagline: "Teams die beter samenwerken — ook als ze ver van elkaar werken.",
    intro:
      "Online teambuilding vraagt om meer dan een leuke activiteit. Wij ontwerpen online teamontwikkeling waarbij teams samen leren, reflecteren en experimenteren - met blijvend effect op samenwerking, communicatie en resultaat.",
    outcomes: [{ title: "Betere samenwerking", body: "Het team communiceert effectiever en werkt soepeler samen — ook op afstand en onder druk." }, { title: "Meer onderling begrip", body: "Teamleden leren elkaars werkstijl kennen en bouwen een sterkere vertrouwensband op." }, { title: "Concrete afspraken", body: "De dag sluit af met afspraken over werkwijze die daadwerkelijk worden nageleefd." }],
    forWho: "Teams, afdelingen, (project)managers",
    range: "6-50 deelnemers",
    steps: [{ title: "Intake", body: "Teamdynamiek, uitdagingen en gewenste verandering." }, { title: "Ontwerp", body: "Werkvormen, reflectiemomenten en teamoefeningen op maat." }, { title: "Pilot", body: "Eerste sessie als startpunt van het traject." }, { title: "Begeleiding", body: "Doorlopende ondersteuning bij het ontwikkeltraject." }],
    related: ["training-workshop", "onboardingdag", "brainstormen", "teamuitje"],
    validation: {
      headline: "Online teambuilding wordt waardevol als het meer is dan vermaak.",
      items: [{ title: "Verbinding met effect", body: "Geen vrijblijvend spelletje, maar werkvormen die samenwerking, vertrouwen en communicatie versterken. Met blijvend resultaat." }, { title: "Werkt juist voor hybride teams", body: "Teams die verspreid werken, verliezen sneller hun onderlinge band. Online teambuilding maakt die band weer voelbaar." }, { title: "Op maat ontworpen", body: "Elk team is anders. Wij ontwerpen het traject rond de situatie, de vragen en de doelen van het team zelf." }],
    },
    conditions: [{ title: "Een duidelijke teamvraag", body: "Gaat het om kennismaking, vertrouwen, samenwerking of energie? De vraag bepaalt of de sessie vooral speels, reflectief of ontwikkelingsgericht wordt." }, { title: "Een veilige omgeving", body: "Teams delen meer als de opzet veilig en helder is. Daarom werken we met duidelijke kaders en werkvormen die deelname makkelijk maken zonder mensen voor het blok te zetten." }, { title: "Aandacht voor de vervolgstap", body: "Een sessie is een begin, geen eindpunt. Teamontwikkeling beklijft als er afspraken liggen voor daarna." }],
    cases: [{ label: "Nieuw projectteam", title: "Elkaar leren kennen voor de start", body: "Een projectteam met mensen uit meerdere organisaties wil snel een basis leggen. Wij ontwerpen een online sessie met kennismaking, werkafspraken en een korte samenwerkingsopdracht.", img: "/images/events-teambuilding-praktijk-kennismaken.webp", imgAlt: "Online kennismaking in een boskring, waar een nieuw projectteam elkaar leert kennen" }, { label: "Hybride afdeling", title: "Beter samenwerken op afstand", body: "Een afdeling werkt deels thuis en deels op kantoor. In een reeks online teamontwikkelsessies onderzoeken zij wat wel en niet werkt in hun overleg, besluitvorming en communicatie.", img: "/images/events-teambuilding-praktijk-hybride.webp", imgAlt: "Digitaal strategiebord waarop een hybride afdeling de samenwerking op afstand bespreekt" }, { label: "Internationaal team", title: "Verbinden rond een gedeelde opdracht", body: "Voor een internationaal team maken we een online teambuilding met creatieve opdrachten, een game en reflectie. De sessie geeft energie én concrete afspraken voor samenwerking.", img: "/images/events-teambuilding-praktijk-internationaal.webp", imgAlt: "Virtuele vergaderzaal met een timer op drie minuten tijdens een korte teamopdracht" }],
    faq: [{ q: "Werkt teamontwikkeling online echt?", a: "Ja. Teams werken tegenwoordig vaak online samen. Dan is het logisch om ook online te oefenen, reflecteren en ontwikkelen." }, { q: "Hoe groot mag een team zijn?", a: "Wij werken meestal met groepen van 6 tot ongeveer 50 deelnemers." }, { q: "Is het een losse sessie of een traject?", a: "Beide zijn mogelijk. Veel organisaties kiezen voor een traject met meerdere bijeenkomsten." }, { q: "Welke werkvormen gebruiken jullie?", a: "Dat varieert van reflectiegesprekken en simulaties tot interactieve oefeningen, spellen en teamdialogen." }, { q: "Welke software gebruiken jullie?", a: "We kiezen altijd de omgeving die het beste aansluit bij het doel van het traject – maar geven de voorkeur aan SpatialChat, omdat hier veel in mogelijk is en omdat de context van een oefening of gesprek door de platformachtergronden echt verrijkt kan worden." }, { q: "Wat kost online teamontwikkeling?", a: "Dat hangt af van de groepsgrootte, het aantal sessies en de gewenste begeleiding. Maar bel of mail gewoon even, we denken graag mee en geven dan ook een kostenplaatje af." }],
    faqMore: [{ q: "Wat is het verschil tussen teambuilding en teamontwikkeling?", a: "Teambuilding richt zich vaak op verbinding. Teamontwikkeling gaat een stap verder en kijkt ook naar samenwerking, rollen en resultaten." }, { q: "Werkt dit ook voor hybride teams?", a: "Ja. Juist hybride teams hebben vaak baat bij expliciete aandacht voor samenwerking." }, { q: "Kunnen jullie maatwerk ontwikkelen?", a: "Ja. Vrijwel ieder traject wordt specifiek ontworpen voor het team." }, { q: "Kunnen jullie werken met teamanalyses?", a: "Ja. Bestaande teamanalyses of onderzoeken kunnen worden meegenomen." }, { q: "Hoe meten jullie resultaat?", a: "Dat verschilt per traject. Vaak werken we met vooraf bepaalde doelen en evaluatiemomenten." }, { q: "Kunnen meerdere teams tegelijk deelnemen?", a: "Ja. We begeleiden regelmatig trajecten met meerdere teams binnen één organisatie." }],
    outcomeSummary: "Voor teams die beter willen samenwerken, ook als ze elkaar vooral online zien.",
  },
  "training-workshop": {
    title: "Online training & workshop geven",
    bg: "radial-gradient(circle at 38% 38%, #3ABABA, #1E9898)",
    heroSrc: "/images/events-training-workshop-hero.webp",
    heroAlt: "Online training met deelnemers die op een gekleurde schaal aangeven hoe bekend ze zijn met het onderwerp",
    heroOverlay: HERO_DIM_MEDIUM,
    iconSrc: "/images/icons/trainingen-en-workshops.png",
    Icon: GraduationCap, ic: "text-white",
    tagline: "Leren en groeien in een online setting die werkt: niet alleen kijken, maar doen.",
    intro:
      "Een online training of workshop vraagt om meer dan webinars. Wij helpen trainers, opleiders en L&D-teams bij het organiseren van aantrekkelijke interactieve trainingen online: met oefening, reflectie, samenwerking en technische begeleiding die de leerervaring ondersteunt.",
    outcomes: [{ title: "Meetbaar leerresultaat", body: "Deelnemers leren en groeien aantoonbaar, niet alleen theorie maar ook toepassing in de praktijk." }, { title: "Passend bij je cultuur", body: "Het traject sluit aan bij de leerstijl en het tempo van je organisatie." }, { title: "Borging in de praktijk", body: "Geleerde vaardigheden worden meegenomen naar de werkplek en verankerd in het dagelijkse werk." }],
    forWho: "L&D-teams, HR-afdelingen, opleidingsinstituten",
    range: "6-100 deelnemers per cohort",
    steps: [{ title: "Intake", body: "Leerdoelen, doelgroep en beschikbare tijd." }, { title: "Ontwerp", body: "Modulaire opbouw, werkvormen en digitale leeromgeving." }, { title: "Pilot", body: "Testrun met eerste groep en bijsturing op basis van feedback." }, { title: "Uitrol", body: "Volledige begeleiding per sessie of cohort." }],
    related: ["teambuilding", "onboardingdag", "brainstormen", "webinar"],
    validation: {
      headline: "Online trainen vraagt een leerervaring, geen computerprogramma of digitaal college.",
      items: [{ title: "Actief leren in plaats van kijken", body: "Deelnemers leren meer als zij zelf oefenen, vragen beantwoorden, voorbeelden delen en samenwerken. Daarom ontwerpen we online workshops met korte blokken en veel interactie." }, { title: "Bestaande training, nieuw ontwerp", body: "Een fysieke training kopiëren naar Teams werkt zelden goed. Wij vertalen inhoud naar een online leerformat dat past bij de groep, het leerdoel en de beschikbare tijd." }, { title: "Rust voor trainer en deelnemers", body: "Wij verzorgen meeting design, draaiboek, technische hosting en interactietools. Dat maakt trainers en deelnemers beter." }],
    },
    conditions: [{ title: "Scherpe leerdoelen", body: "Wat moeten deelnemers na afloop weten, kunnen of durven? Een goed online leerontwerp begint bij concreet gedrag, niet bij slides." }, { title: "Een ritme dat online werkt", body: "Online leren vraagt afwisseling: korte uitleg, oefenen, delen, reflecteren en toepassen. Dat ritme voorkomt vermoeidheid en vergroot het leereffect." }, { title: "Techniek die het leren ondersteunt", body: "Breakouts, polls, Miro, chat en opdrachten moeten logisch voelen. Wij kiezen een platform en tools die het leerdoel versterken, niet de techniek die toevallig beschikbaar is." }],
    cases: [{ label: "L&D-team", title: "Klassikale training omzetten naar online", body: "Een organisatie wil een bestaande training online aanbieden zonder dat het een webinar wordt. Wij herontwerpen de werkvormen, maken een technisch draaiboek en begeleiden de eerste live edities.", img: "/images/events-training-praktijk-bekendheid.webp", imgAlt: "Interactieve schaal van beginner tot expert waarmee deelnemers hun voorkennis aangeven" }, { label: "Opleidingsinstituut", title: "Cohorten begeleiden in een online leertraject", body: "Voor een leerprogramma met meerdere groepen ontwerpen we een creatieve, afwisselende serie interactieve colleges, met plenaire momenten, breakouts, opdrachten en vragenuurtjes.", img: "/images/events-training-praktijk-cohorten.webp", imgAlt: "Illustratie van een klim naar de top, als beeld voor een online leertraject in cohorten" }, { label: "Interne experts", title: "Trainers zelfverzekerd online laten werken", body: "Een team van inhoudelijke experts wil online workshops geven. Wij begeleiden hen met formats, repetities en live support binnen SpatialChat, zodat de inhoud beter overkomt.", img: "/images/events-training-praktijk-trainers.webp", imgAlt: "Virtuele zaal in SpatialChat waarin interne trainers hun online workshop geven" }],
    faq: [{ q: "Hoe verschilt een online training van een webinar?", a: "Een webinar draait meestal om kennisoverdracht. Een online training vraagt actieve deelname. Deelnemers oefenen, reflecteren, werken samen en passen het geleerde direct toe. Juist daardoor blijft kennis beter hangen. Wie een interactieve online training wil geven, heeft daarom meer nodig dan alleen een presentatie en een camera." }, { q: "Kan iedere training online worden gegeven?", a: "Bijna iedere training kan online worden gegeven. Wel vraagt een digitale training vaak om een andere opzet. Wat in een fysieke zaal werkt, werkt online niet automatisch. Daarom helpen wij trainers en opleiders om bestaande trainingen te vertalen naar een effectieve online leerervaring." }, { q: "Hoe houden jullie deelnemers actief betrokken?", a: "Door deelnemers niet alleen te laten luisteren, maar vooral te laten doen. Denk aan oefeningen, breakoutgesprekken, interactieve opdrachten, reflectievragen en gezamenlijke werkvormen. Mensen leren nu eenmaal meer van deelname dan van observatie. Dat geldt voor een korte online workshop én voor een uitgebreid online leertraject." }, { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Teams, Zoom Events, SpatialChat, Miro en verschillende leer- en interactietools. Welke omgeving het beste werkt, hangt af van het leerdoel, de groepsgrootte en de gewenste leerervaring. De techniek ondersteunt de training, niet andersom." }, { q: "Voor hoeveel deelnemers is een online training geschikt?", a: "Dat varieert van kleine groepen van zes deelnemers tot grotere leerprogramma's met honderd deelnemers of meer. De ideale groepsgrootte hangt af van de mate van interactie en begeleiding." }, { q: "Wat kost een online training of workshop?", a: "Dat hangt af van de groepsgrootte, de duur van het programma, de voorbereiding en de gewenste ondersteuning. Daarom stemmen wij het voorstel af op je leerdoel." }],
    faqMore: [{ q: "Kunnen jullie een bestaande training omzetten naar online?", a: "Ja. Dat is één van de meest voorkomende vragen die wij krijgen. Vaak behouden we de inhoud, maar ontwerpen we de werkvormen opnieuw zodat ze beter aansluiten bij online leren. Zo ontstaat geen online versie van een klassikale training, maar een training die optimaal gebruikmaakt van de mogelijkheden van digitaal leren." }, { q: "Hoe voorkom je Zoom-moeheid tijdens een training?", a: "Door afwisseling aan te brengen. Korte blokken, actieve werkvormen, beweging, reflectie en samenwerking zorgen ervoor dat deelnemers betrokken blijven en energie houden." }, { q: "Werkt online leren net zo goed als klassikaal leren?", a: "Dat hangt af van het leerdoel. Voor veel vormen van kennisdeling, samenwerking en vaardigheidstraining werkt online leren verrassend goed. Soms zelfs beter, omdat deelnemers direct oefenen in hun eigen werkomgeving en het geleerde sneller toepassen in de praktijk." }, { q: "Kunnen deelnemers tussen sessies opdrachten maken?", a: "Ja. Sterker nog: veel succesvolle leertrajecten combineren live sessies met opdrachten tussen de bijeenkomsten. Daardoor wordt leren onderdeel van het dagelijkse werk." }, { q: "Kunnen jullie trainers begeleiden?", a: "Ja. Sommige opdrachtgevers verzorgen zelf de inhoud en schakelen ons in voor het ontwerp, de interactie en de technische begeleiding. Zo kunnen trainers zich volledig richten op hun expertise." }, { q: "Wat maakt een online training succesvol?", a: "Een succesvolle online training begint niet bij de techniek, maar bij het leerdoel. De beste trainingen combineren duidelijke leerdoelen, actieve werkvormen, interactie en voldoende ruimte voor toepassing in de praktijk." }, { q: "Kunnen jullie ook langere leertrajecten begeleiden?", a: "Ja. We ondersteunen regelmatig online leertrajecten die bestaan uit meerdere trainingsdagen, workshops, intervisiesessies of leergemeenschappen. Daarbij helpen we niet alleen met de techniek, maar ook met het ontwerp van de leerervaring." }, { q: "Wat is het verschil tussen een online workshop en een online training?", a: "Een workshop is meestal korter en meer gericht op samen verkennen, creëren of oefenen. Een training heeft vaak een duidelijk leerdoel en een meer gestructureerde opbouw. In de praktijk lopen beide vormen regelmatig in elkaar over." }, { q: "Waarom kiezen trainers voor MeetingMasters?", a: "Omdat wij begrijpen dat online trainen iets anders vraagt dan een fysieke training kopiëren naar Zoom. Wij helpen trainers, opleiders en L&D-teams om hun expertise te vertalen naar interactieve online trainingen en workshops waarin deelnemers actief betrokken blijven en daadwerkelijk leren." }],
    outcomeSummary: "Voor interactieve online trainingen en workshops waarin deelnemers actief leren, oefenen en toepassen.",
  },
  "brainstormen": {
    title: "Online brainstormsessie organiseren",
    bg: "radial-gradient(circle at 38% 38%, #FFEEC1, #F5D070)",
    heroSrc: "/images/events-brainstormen-hero.webp",
    heroAlt: "Online brainstorm waarin deelnemers ideeën verzamelen rond de zes denkhoeden van De Bono",
    heroOverlay: HERO_DIM_MEDIUM,
    Icon: Lightbulb, ic: "text-[#696758]",
    tagline: "Creatieve sessies die écht ideeën opleveren, ook als iedereen op afstand zit.",
    intro:
      "Online brainstormen vraagt om een andere aanpak dan in een fysieke ruimte. Wij ontwerpen online brainstormsessies met de juiste energie, de juiste werkvormen en strakke begeleiding - zodat ideeën stromen, perspectieven zichtbaar worden en de beste ideeën verder komen.",
    outcomes: [{ title: "Bruikbare ideeën", body: "Geen warrige post-it-wand, maar een gevulde ideeënbank met concrete en goed gedocumenteerde input." }, { title: "Energie en creativiteit", body: "De juiste werkvormen brengen iedereen in de creatieve modus, ook wie zichzelf niet creatief noemt." }, { title: "Duidelijke volgende stappen", body: "De brainstorm eindigt niet bij ideeën, maar met een concreet plan voor de vervolgstappen." }],
    forWho: "Innovatieteams, marketingafdelingen, product- en strategie-teams",
    range: "10-100 deelnemers",
    steps: [{ title: "Intake", body: "Wat is de uitdaging en wat moet de brainstorm opleveren?" }, { title: "Ontwerp", body: "Creatieve werkvormen, digitale tools en een strakke tijdsstructuur." }, { title: "Repetitie", body: "Technische doorloop en afstemming met facilitatoren." }, { title: "Live productie", body: "Wij faciliteren de sessie van begin tot eind." }],
    related: ["open-space", "world-cafe", "strategiedagen", "teambuilding"],
    validation: {
      headline: "Online brainstormen levert vaak meer op dan een volle vergaderzaal.",
      items: [{ title: "Meer input in minder tijd", body: "In een digitale brainstorm kan iedereen tegelijk ideeën toevoegen. Daardoor komen ook de stillere deelnemers beter aan bod en wordt de opbrengst direct zichtbaar." }, { title: "Van losse ideeën naar keuzes", body: "Een goede online brainstorm stopt niet bij post-its. Wij bouwen fases in voor clusteren, verdiepen, prioriteren en vertalen naar vervolgstappen." }, { title: "Creatief en gestructureerd", body: "Met formats als Miro, SpatialChat, Liberating Structures, World Café of eigen werkvormen ontstaat ruimte voor creativiteit zonder dat de sessie alle kanten op gaat." }],
    },
    conditions: [{ title: "Een goede vraag", body: "De kwaliteit van de vraag bepaalt de kwaliteit van de ideeën. Te breed wordt vaag, te smal remt creativiteit." }, { title: "Divergeren én convergeren", body: "Eerst ruimte maken voor veel ideeën, daarna zorgvuldig kiezen. Zonder tweede fase blijft een brainstorm vaak een mooi bord zonder besluit." }, { title: "Een digitale werkruimte die klopt", body: "Miro, SpatialChat of een ander canvas moet vooraf logisch zijn ingericht. Deelnemers moeten ideeën kunnen toevoegen zonder technische drempels." }],
    cases: [{ label: "Marketingteam", title: "Nieuwe campagne-ideeën ontwikkelen", body: "Een marketingteam wil snel veel invalshoeken ophalen voor een nieuwe campagne. Wij ontwerpen een online brainstorm met individuele input, groepsverrijking en een scherpe prioritering.", img: "/images/events-brainstormen-praktijk-campagne.webp", imgAlt: "Kaarten met thema's als liefde, intuïtie en bescherming als aanjager van een online brainstorm" }, { label: "Innovatieteam", title: "Concepten toetsen en aanscherpen", body: "Voor een innovatietraject brengen we verschillende disciplines samen in een digitale werksessie. De opbrengst leggen we direct vast en zetten we om naar concrete conceptkeuzes.", img: "/images/events-brainstormen-praktijk-concepten.webp", imgAlt: "Deelnemers reageren met emoji op elkaars concepten in een virtuele werkruimte" }, { label: "Strategieteam", title: "Kansen verkennen met een grote groep", body: "Een organisatie wil brede input ophalen zonder een fysieke dag te organiseren. Met breakouts, interactieve canvassen en een plenaire oogst ontstaat snel overzicht.", img: "/images/events-brainstormen-praktijk-kansen.webp", imgAlt: "Virtueel heuvellandschap waarin een grote groep in kleine gezelschappen kansen verkent" }],
    faq: [{ q: "Werkt online brainstormen echt?", a: "Ja. Online brainstormen levert vaak meer ideeën op dan fysieke sessies. Digitale tools maken het mogelijk dat iedereen tegelijk bijdraagt." }, { q: "Hoeveel mensen kunnen meedoen?", a: "Wij begeleiden brainstorms van ongeveer 10 tot 100 deelnemers." }, { q: "Wat houden we over aan de sessie?", a: "Een overzicht van ideeën, inzichten en prioriteiten. Alles wordt direct digitaal vastgelegd." }, { q: "Hoe lang duurt een online brainstorm?", a: "Meestal tussen de 2 en 4 uur." }, { q: "Welke tools gebruiken jullie?", a: "Liefst werken we in SpatialChat: een creatieve en zeer verrassende omgeving die het vrije gesprek beter maakt. Maar we hebben ook ruime ervaring met Zoom samen met interactieve canvassen zoals Miro." }, { q: "Wat kost een online brainstorm?", a: "Dat hangt af van de groepsgrootte, voorbereiding en begeleiding. Vraag vooral even een offerte aan. Meestal valt het mee." }],
    faqMore: [{ q: "Kunnen jullie ideeën helpen prioriteren?", a: "Ja. Daarom bouwen we meestal een fase in waarin ideeën worden gewogen en geprioriteerd. Online prioriteren werkt makkelijker en sneller dan offline." }, { q: "Kunnen deelnemers anoniem bijdragen?", a: "Nee, dat kan bij ons niet. Wij hechten aan open gesprekken en onze formats zijn erop gericht dat iedereen gezien en gehoord kan worden. Dat helpt beter om meer perspectieven boven tafel te krijgen dan anonimiteit." }, { q: "Werkt online brainstormen ook voor grote groepen?", a: "Juist dan. Online kunnen veel mensen tegelijkertijd bijdragen." }, { q: "Welke brainstormmethodes gebruiken jullie?", a: "Dat varieert van Liberating Structures tot World Café, Open Space vormen en eigen formats." }, { q: "Kan een brainstorm hybride plaatsvinden?", a: "Ja. Maar dat vraagt zeer bewust ontwerp en betekent vaak bijna een verdubbeling van de voorbereidingstijd en de kosten." }, { q: "Wat gebeurt er na afloop?", a: "Indien gewenst helpen wij bij het vertalen van ideeën naar concrete vervolgstappen." }],
    outcomeSummary: "Voor nieuwe ideeën, slimme keuzes en een sessie waarin iedereen bijdraagt.",
  },
  "onboardingdag": {
    title: "Online onboarding organiseren",
    bg: "radial-gradient(circle at 38% 38%, #7A7868, #696758)",
    heroSrc: "/images/events-onboardingdag-hero.webp",
    heroAlt: "Online onboarding in een virtuele loft, waar nieuwe collega's elkaar en de organisatie leren kennen",
    heroOverlay: HERO_DIM_MEDIUM,
    Icon: DoorOpen, ic: "text-white",
    tagline: "Een vliegende start voor nieuwe medewerkers, ook als ze overal vandaan inloggen.",
    intro:
      "De eerste indruk telt. Wij ontwerpen online onboardingdagen waarbij nieuwe medewerkers echt welkom worden geheten: ze leren de organisatie én de cultuur kennen, maken contact met collega's en begrijpen hoe het bij jullie werkt. Zo wordt online onboarding meer dan een serie presentaties.",
    outcomes: [{ title: "Welkom en verbonden", body: "Nieuwe medewerkers voelen zich van dag één thuis, ook als ze nooit naar kantoor komen." }, { title: "Helder beeld van de organisatie", body: "Cultuur, werkwijze en verwachtingen zijn duidelijk. Geen verrassingen in de eerste weken." }, { title: "Versnelde integratie", body: "Minder uitval in de eerste maanden doordat mensen snel de weg weten te vinden." }],
    forWho: "HR-teams, L&D-afdelingen, groeiende organisaties",
    range: "10-100 nieuwe medewerkers per cohort",
    steps: [{ title: "Intake", body: "Organisatiecultuur, doelgroep en inhoudelijke prioriteiten." }, { title: "Ontwerp", body: "Programma met kennismaking, cultuuroverdracht en interactie." }, { title: "Repetitie", body: "Technische doorloop met HR en gastpresentatoren." }, { title: "Live productie", body: "Volledig begeleid, een dag die nieuwe medewerkers bijblijft." }],
    related: ["teambuilding", "training-workshop", "brainstormen", "netwerkevent"],
    validation: {
      headline: "Goede onboarding sessies zijn een welkom op verschillende niveaus.",
      items: [{ title: "Cultuur voelbaar maken", body: "Nieuwe medewerkers willen weten hoe de organisatie echt werkt. Met verhalen, ontmoetingen en interactieve opdrachten laten we de cultuur ervaren." }, { title: "Contact vanaf dag één", body: "Online kennismaken kan goed, als het bewust wordt ontworpen. Denk aan speeddates, thematafels, buddygesprekken en informele ruimtes." }, { title: "Schaalbaar en herkenbaar", body: "Veel onboardingsprogramma’s zijn langer dan een dag. Wij helpen een vast format neer te zetten met meerdere modules, dat ook makkelijk opnieuw te gebruiken is." }],
    },
    conditions: [{ title: "Verbinding als doel", body: "Een onboardingdag is geen informatie-dump. Stel kennismaking en contact centraal, de rest volgt later wel." }, { title: "Betrokkenheid van collega’s", body: "Nieuwe mensen voelen zich welkom als bestaande collega’s aanschuiven. Plan de aanwezigheid van het team en de leiding bewust in." }, { title: "Laagdrempelige techniek", body: "Deelnemers zijn nieuw. Ze moeten niet verdwalen, maar ook niet afdwalen. Toegankelijke techniek, heldere instructies en verrassende vormgeving maken het verschil." }],
    cases: [{ label: "Groeiende organisatie", title: "Maandelijkse onboarding voor nieuwe collega's", body: "Een organisatie met veel nieuwe medewerkers wil een vast online introductieformat. Wij ontwerpen een ochtend met welkom, praktische informatie, een kleine cultuurproeverij en ontmoeting met collega’s.", img: "/images/events-onboarding-praktijk-maandelijks.webp", imgAlt: "Virtuele lounge met banken waar nieuwe collega's elkaar maandelijks ontmoeten" }, { label: "Internationale groep", title: "Nieuwe medewerkers in meerdere landen verbinden", body: "Voor een internationale organisatie maken we een 7-delig online programma waarin presentaties, gesprekken en spelelementen elkaar afwisselen. Zo wordt de samenhang ook over de grenzen sterker.", img: "/images/events-onboarding-praktijk-internationaal.webp", imgAlt: "Deelnemers geven in verschillende talen aan waar ter wereld zij vandaan komen" }, { label: "HR en L&D", title: "Van informatiepakket naar ervaring", body: "Een HR-team heeft veel inhoud, maar weinig interactie. Wij vertalen de onboarding naar een actief programma met opdrachten, Q&A en informele ontmoetingen.", img: "/images/events-onboarding-praktijk-ervaring.webp", imgAlt: "Virtuele bibliotheek met leestafels, waar de onboarding een ervaring wordt in plaats van een pakket" }],
    faq: [{ q: "Hoe maak je nieuwe medewerkers online welkom?", a: "Door ontmoeting centraal te zetten. Mensen onthouden collega's beter dan presentaties." }, { q: "Hoeveel medewerkers kunnen deelnemen?", a: "Van ongeveer 10 tot ruim 100 nieuwe collega's per editie." }, { q: "Kunnen jullie dit periodiek organiseren?", a: "Ja. Veel organisaties organiseren een onboardingdag per maand of kwartaal." }, { q: "Wat hebben deelnemers nodig?", a: "Een laptop, internetverbinding en een rustige plek om deel te nemen." }, { q: "Welke software gebruiken jullie?", a: "Dat hangt af van het programma en de wensen van de organisatie." }, { q: "Wat kost een online onboardingdag?", a: "Dat hangt af van de omvang en opzet van het programma." }],
    faqMore: [{ q: "Kunnen managers deelnemen?", a: "Ja. Dat wordt vaak zelfs gewaardeerd." }, { q: "Is onboarding ook hybride mogelijk?", a: "Ja. Mits bewust ontworpen." }, { q: "Hoe stimuleren jullie kennismaking?", a: "Met werkvormen die mensen actief met elkaar in contact brengen." }, { q: "Kunnen jullie internationale onboarding verzorgen?", a: "Ja. Wij begeleiden regelmatig internationale groepen." }, { q: "Kunnen onderdelen worden opgenomen?", a: "Ja. Dat is vooral handig voor kennisoverdracht." }, { q: "Is maatwerk mogelijk?", a: "Ja. Vrijwel iedere onboardingdag wordt op maat ontworpen." }],
    outcomeSummary: "Voor een warm welkom, snelle verbinding en collega’s die zich thuis voelen.",
  },
  "bedrijfsfeest": {
    title: "Online bedrijfsfeest organiseren",
    bg: "radial-gradient(circle at 38% 38%, #D85E7A, #C64A60)",
    heroSrc: "/images/events-bedrijfsfeest-hero.webp",
    heroAlt: "Online bedrijfsfeest met confetti, ballonnen en collega's die samen het jaar afsluiten",
    iconSrc: "/images/icons/bedrijfsfeest.png",
    Icon: Sparkles, ic: "text-white",
    tagline: "Een feest dat mensen écht bijblijft, ook als iedereen vanuit huis inlogt.",
    intro:
      "Een online feestje hoeft geen compromis te zijn. Games, live entertainment, online escape rooms en sociale ruimtes kunnen samen een avond vormen die geweldig werkt - mits het programma goed is ontworpen en het technisch soepel loopt.",
    outcomes: [{ title: "Echte verbinding", body: "Geen awkward Zoom-borrel maar een avond die mensen écht bijblijft en waar ze naar uitkijken." }, { title: "Passend bij je cultuur", body: "Het feest voelt als je organisatie: de juiste sfeer, het juiste niveau, het juiste gezelschap." }, { title: "Een waardige afsluiter", body: "Of het nu een mijlpaal of een jaarlijkse traditie is, het moment krijgt de aandacht die het verdient." }],
    forWho: "Teams, afdelingen, hele organisaties",
    range: "20-400 deelnemers",
    steps: [{ title: "Intake", body: "Sfeer, schaal en wensen: wat past bij je organisatie?" }, { title: "Ontwerp", body: "Programma, games, entertainment en sociale ruimtes." }, { title: "Repetitie", body: "Alles staat klaar, hosts zijn ingespeeld." }, { title: "Live productie", body: "Wij runnen het feest volledig zodat je zelf ook kunt genieten." }],
    related: ["kerstfeest", "teamuitje", "community-building", "netwerkevent"],
    validation: {
      headline: "Een online bedrijfsfeest wordt leuk als mensen iets met elkaar beleven.",
      items: [{ title: "Vooral anders dan vergaderen", body: "Een scherm vol gezichten is geen feest. Wij ontwerpen een programma met spel, entertainment en ruimte om gewoon bij te kletsen." }, { title: "Vrij rondlopen en mensen tegenkomen", body: "In de juiste omgeving lopen mensen vrij rond en raken ze spontaan in gesprek. Net als op een echt feest." }, { title: "Iedereen erbij, waar ook ter wereld", body: "Collega’s thuis, op kantoor of in het buitenland vieren samen. Zonder reizen, zonder gedoe, op hetzelfde moment." }],
    },
    conditions: [{ title: "Een programma met energie", body: "Een online bedrijfsfeest vraagt tempo, afwisseling en korte onderdelen. Lange plenaire blokken halen de energie eruit." }, { title: "Een platform dat ontmoeting ondersteunt", body: "Voor informele online events werkt een sociale omgeving vaak beter dan een standaard videomeeting. Platformkeuze is cruciaal." }, { title: "Goede hosting", body: "Een feestelijke online bijeenkomst heeft duidelijke begeleiding nodig. Hosts zorgen voor sfeer, uitleg, techniek en overgang tussen onderdelen." }],
    cases: [{ label: "Internationaal team", title: "Online feest voor collega's in meerdere landen", body: "Een organisatie wil het jaar afsluiten met medewerkers die elkaar zelden fysiek zien. Wij maken een online avond met plenaire start, interactieve game en vrije ontmoetingsruimte.", img: "/images/events-bijeenkomst.webp", imgAlt: "Virtueel dakterras met zeezicht waar collega's uit meerdere landen samen het jaar afsluiten" }, { label: "Afdelingsevent", title: "Van online borrel naar echt programma", body: "Een team wil iets leukers dan een standaard digitale borrel. We ontwerpen een compact bedrijfsfeest met een formeel woordje van de CEO, een maatwerk quiz en passende themakamers voor spontane gesprekken.", img: "/images/events-bedrijfsfeest-praktijk-quiz.webp", imgAlt: "Online bedrijfsfeest met een quiz in een feestelijk aangeklede virtuele bar" }, { label: "MKB", title: "Meerdere activiteiten in één online omgeving", body: "Voor een grote groep combineren we entertainment, spellen en sociale ruimtes. Deelnemers kiezen waar zij aan deelnemen, net als op een fysiek event.", img: "/images/events-bedrijfsfeest-praktijk-activiteiten.webp", imgAlt: "Spelparcours met genummerde banen waarin deelnemers zelf kiezen waar zij meedoen" }],
    faq: [{ q: "Kan een online bedrijfsfeest echt leuk zijn?", a: "Ja. Mits het meer is dan een online borrel. De leukste online bedrijfsfeesten combineren ontmoeting, interactie en een gedeelde ervaring." }, { q: "Hoeveel mensen kunnen deelnemen?", a: "Wij begeleiden online bedrijfsfeesten van ongeveer 20 tot ruim 400 deelnemers." }, { q: "Welke activiteiten zijn mogelijk?", a: "Denk aan online escape rooms, quizzen, interactieve spellen, speeddates, entertainment, workshops of informele ontmoetingen." }, { q: "Moeten deelnemers iets installeren?", a: "Voor een feestelijke sessie kiezen we het liefst een platform waarop gesprekken vanzelf ontstaan. SpatialChat is uitgesproken feestelijk en draait gewoon in je browser. Boek een demo en ervaar het zelf." }, { q: "Wat kost een online bedrijfsfeest?", a: "Dat hangt af van het programma, de groepsgrootte en de gewenste begeleiding." }],
    faqMore: [{ q: "Kunnen internationale teams deelnemen?", a: "Ja. Online bedrijfsfeesten zijn juist zeer geschikt voor internationale organisaties." }, { q: "Kunnen we eigen branding toevoegen?", a: "Ja. Regelmatig verwerken wij huisstijl, thema's en organisatie-specifieke elementen in het programma." }, { q: "Zijn er competitieve spellen mogelijk?", a: "Ja. Veel groepen vinden een gezonde dosis competitie leuk, zolang plezier centraal blijft staan." }, { q: "Kunnen jullie entertainment verzorgen?", a: "Ja. Wij werken regelmatig samen met artiesten, quizmasters en andere professionals." }, { q: "Kunnen deelnemers elkaar vrij ontmoeten?", a: "Ja. Wij vinden informele ontmoeting vaak minstens zo belangrijk als het programma zelf." }],
    outcomeSummary: "Voor een online feest dat voelt als samen zijn, ook als iedereen op een andere plek zit.",
  },
  "kerstfeest": {
    title: "Online kerstfeest organiseren",
    bg: "radial-gradient(circle at 38% 38%, #A83058, #882040)",
    heroSrc: "/images/events-kerst-hero.webp",
    heroAlt: "Online kerstfeest in een feestelijk aangeklede virtuele ruimte met gouden ballonnen en collega's in beeld",
    Icon: Snowflake, ic: "text-white",
    tagline: "Een feest dat mensen echt leuk vinden — ook als de telefoon aan de keukentafel hangt.",
    intro:
      "Een online kerstborrel hoeft geen compromis te zijn. Wij ontwerpen online kerstfeesten vol energie, humor en echte verbinding: met escape rooms, live entertainment, quiz-games en sociale ruimtes waar mensen elkaar vrij kunnen ontmoeten.",
    outcomes: [{ title: "Echte gezelligheid", body: "Geen verplicht nummertje maar een avond die mensen écht leuk vinden en lang navertellen." }, { title: "Passend bij je organisatie", body: "De sfeer, het niveau en het programma passen bij wie je bent als bedrijf." }, { title: "Een memorabel einde van het jaar", body: "Een waardige afsluiter die mensen laat voelen dat ze gewaardeerd worden." }],
    forWho: "Teams, afdelingen, hele organisaties",
    range: "10-500 deelnemers",
    steps: [{ title: "Intake", body: "Sfeer, schaal en wensen — wat past bij je organisatie en cultuur?" }, { title: "Ontwerp", body: "Programma met games, entertainment, sociale ruimtes en surprises." }, { title: "Repetitie", body: "Alles staat klaar, hosts zijn ingespeeld op de avond." }, { title: "Live productie", body: "Wij runnen het feest volledig zodat je ook zelf kunt genieten." }],
    related: ["bedrijfsfeest", "teamuitje", "community-building", "teambuilding"],
    validation: {
      headline: "Een online kerstfeest werkt als er ruimte is voor ontmoeting, ontspanning en verhalen.",
      items: [{ title: "Samen het jaar afsluiten", body: "Een goed online kerstfeest geeft aandacht aan wat er is gebeurd, wat gevierd mag worden en wie daaraan heeft bijgedragen." }, { title: "Beleven, niet zenden", body: "Geen toespraak met publiek, maar een avond waarin mensen samen iets doen. Spel, entertainment en ruimte voor het goede gesprek." }, { title: "Maatwerk in sfeer en vorm", body: "Van compacte online kerstborrel tot volledig online eindejaarsfeest: we ontwerpen het programma zodat het past bij de cultuur van de organisatie." }],
    },
    conditions: [{ title: "Tijdig starten", body: "In november en december lopen agenda's snel vol. Een goed online kerstfeest vraagt daarom om tijdig boeken en vroege aandacht voor vorm, programma en techniek." }, { title: "Een balans tussen plenair en vrij", body: "Een goed kerstfeest combineert een gezamenlijk programma met ruimte voor spontane gesprekken." }, { title: "Heldere deelnemerscommunicatie", body: "Feestelijke online events werken beter als deelnemers vooraf weten wat zij kunnen verwachten, wat zij nodig hebben en hoe zij binnenkomen." }],
    cases: [{ label: "Teamfeest", title: "Kerstquiz en informele tafels", body: "Een team wil online samen afsluiten zonder lange toespraken. Wij maken een vrolijk programma met korte plenaire momenten, quizrondes en vrije ontmoetingen.", img: "/images/events-kerst-kerstquiz.webp", imgAlt: "Virtueel kerstcafé met een kerstquiz op het scherm en collega's aan informele tafels" }, { label: "Grote organisatie", title: "Online eindejaarsfeest met leveranciers", body: "Voor een grote diverse groep ontwerpen we eindejaarsgesprekken met een geweldige borrel na afloop. Deelnemers kiezen zelf tussen praten in een kroeg of quizzen.", img: "/images/events-kerst-leveranciers.webp", imgAlt: "Winters landschap met sneeuwpoppen waar medewerkers en leveranciers het jaar afsluiten" }, { label: "Coöperatie", title: "Een stemmige kerstviering", body: "Een groep bedrijven wil met kerst stilstaan bij het intense jaar dat achter ze ligt. Met ruimte voor reflectie, storytelling en rustigere themakamers is er ruimte voor het echte gesprek.", img: "/images/events-kerst-stemmig.webp", imgAlt: "Stemmige kerstruimte met de tekst make a wish, waar deelnemers stilstaan bij het afgelopen jaar" }],
    faq: [{ q: "Hoe organiseer je een online kerstfeest?", a: "Een goed online kerstfeest combineert ontmoeting, ontspanning en een gezamenlijk moment. Het draait niet om zenden, maar om samen beleven." }, { q: "Welke activiteiten zijn mogelijk?", a: "Van online escape rooms en kerstquizzen tot workshops, entertainment en informele ontmoetingen." }, { q: "Hoeveel mensen kunnen deelnemen?", a: "Van kleine teams tot organisaties met honderden medewerkers." }, { q: "Wanneer moeten we boeken?", a: "Vooral in november en december loopt de agenda snel vol. Daarom adviseren wij om tijdig contact op te nemen." }, { q: "Wat kost een online kerstfeest?", a: "Dat hangt af van de groepsgrootte, het programma en de gewenste begeleiding." }],
    faqMore: [{ q: "Welke software gebruiken jullie?", a: "Voor dit soort bijeenkomsten werken we het liefst met een platform waarop contact en samenwerking makkelijker gaan. SpatialChat leent zich daar bijzonder goed voor — boek gerust een demo om het te ervaren." }, { q: "Kunnen internationale teams deelnemen?", a: "Ja. Dat gebeurt regelmatig." }, { q: "Kunnen we het feest volledig personaliseren?", a: "Ja. We verwerken graag thema's, verhalen en elementen uit de organisatie." }, { q: "Zijn er activiteiten rondom teambuilding mogelijk?", a: "Ja. Veel organisaties combineren ontspanning met samenwerking en ontmoeting." }, { q: "Kunnen deelnemers vrij rondlopen en mensen ontmoeten?", a: "Ja. In interactieve omgevingen kunnen deelnemers zelf bepalen met wie zij in gesprek gaan." }, { q: "Wat maakt een online kerstfeest succesvol?", a: "Een goede balans tussen programma, ontmoeting en ruimte voor spontane gesprekken." }],
    outcomeSummary: "Voor een warme afsluiting van het jaar, online en toch persoonlijk.",
  },
  "teamuitje": {
    title: "Online teamuitje organiseren",
    bg: "radial-gradient(circle at 38% 38%, #7AAFC8, #4A85A8)",
    heroSrc: "/images/events-teamuitje-hero.webp",
    heroAlt: "Online teamuitje waarin collega's samen een spelparcours doorlopen in plaats van te vergaderen",
    Icon: Sparkles, ic: "text-white",
    tagline: "Teambuilding met hoge betrokkenheid: spannend, laagdrempelig en volledig online.",
    intro:
      "Een online teamuitje is geen digitale versie van de vrijdagmiddagborrel. Wij ontwerpen online teamuitjes en online bedrijfsuitjes waarin mensen spelen, praten en samenwerken in een omgeving die uitnodigt tot contact. Van quiz tot escape challenge, van creatieve opdracht tot informele netwerkruimte: het programma past bij je team, je doel en de gewenste energie.",
    outcomes: [{ title: "Samenwerken onder druk", body: "Teams ontdekken elkaars kwaliteiten in een spannende, laagdrempelige omgeving." }, { title: "Hoge betrokkenheid", body: "Iedereen doet mee, ook de mensen die normaal op de achtergrond blijven." }, { title: "Een gedeelde ervaring", body: "Een avontuur dat lang wordt naverteld en de onderlinge band versterkt." }],
    forWho: "Teams, afdelingen, projectgroepen, internationale organisaties",
    range: "10-300 deelnemers",
    steps: [{ title: "Intake", body: "Groepsgrootte, doel en gewenst thema." }, { title: "Ontwerp", body: "Format-keuze en eventuele maatwerk-elementen." }, { title: "Briefing", body: "Deelnemers worden voorbereid, techniek staat klaar." }, { title: "Live productie", body: "Volledig begeleid door onze game-masters." }],
    related: ["bedrijfsfeest", "kerstfeest", "teambuilding", "brainstormen"],
    validation: {
      headline: "Een online teamuitje werkt het beste als mensen iets samen doen.",
      items: [{ title: "Meer dan een online borrel", body: "Een goed online teamuitje heeft een duidelijke vorm. Geen los gesprek met ongemakkelijke stiltes, maar een gedeelde activiteit waar iedereen makkelijk in kan stappen." }, { title: "Ontmoeting met lichte structuur", body: "We combineren vrije ruimte met slimme werkvormen, zodat collega's elkaar ook online echt spreken. Dat maakt het uitje ontspannen, maar niet vrijblijvend." }, { title: "Schaalbaar en makkelijk georganiseerd", body: "Van één klein team tot meerdere afdelingen tegelijk. Wij verzorgen ontwerp, techniek, hosting en begeleiding, zodat deelnemers alleen hoeven in te loggen." }],
    },
    conditions: [{ title: "Een helder doel", body: "Gaat het om ontspanning, kennismaking, waardering, samenwerking of een afsluiting? Het doel bepaalt het programma en de toon." }, { title: "Een programma met ritme", body: "Online aandacht vraagt afwisseling. Korte rondes, duidelijke overgangen, actieve onderdelen en ruimte voor informele ontmoeting houden de energie goed." }, { title: "Techniek die niet in de weg zit", body: "Deelnemers moeten makkelijk kunnen binnenkomen, bewegen en meedoen. Wij kiezen het platform dat past bij de groep en begeleiden de hele productie." }],
    cases: [{ label: "Internationaal team", title: "Even ontspannen samenzijn", body: "Een organisatie met collega's in meerdere landen wil even los van zakelijke inhoud iets samen doen. Wij ontwerpen een online teamuitje met korte plenaire momenten, spellen en informele ruimtes. Het resultaat: veel contact en gezellig weinig gedoe.", img: "/images/events-teamuitje-praktijk-terras.webp", imgAlt: "Virtueel terras aan zee met parasol, waar collega's uit meerdere landen informeel samenzijn" }, { label: "Projectteam", title: "Energie terug in de samenwerking", body: "Na een intensief traject wil een projectteam samen ontspannen en het werk goed afronden. Met een korte escape room en ruimte voor informele praatjes wordt het geen verplichte borrel, maar een gedeeld moment.", img: "/images/events-teamuitje-praktijk-energie.webp", imgAlt: "Virtuele sportruimte als ontspannen decor voor een teamuitje na een intensief traject" }, { label: "Afdeling", title: "Online bedrijfsuitje voor grote groep", body: "Voor een afdeling met meer dan honderd medewerkers maken we een programma met parallelle activiteiten, duidelijke begeleiding en een gezamenlijke afsluiting. Iedereen kan kiezen, meedoen en collega's ontmoeten buiten de dagelijkse werkcontext.", img: "/images/events-teamuitje-praktijk-escape.webp", imgAlt: "Eindscherm van een online escape room met de felicitatie voor het team" }],
    faq: [{ q: "Wat is een online teamuitje?", a: "Een online teamuitje is een online activiteit voor collega's waarin ontmoeting, ontspanning en samen iets beleven centraal staan. Denk aan een quiz, spel, creatieve opdracht, challenge of informele ontmoetingsruimte." }, { q: "Kan een online teamuitje echt leuk zijn?", a: "Ja. Mits het meer is dan een open Teams-call. Een goed online teamuitje heeft een duidelijke vorm, goede begeleiding en genoeg ruimte voor contact." }, { q: "Hoeveel mensen kunnen meedoen?", a: "Wij begeleiden online teamuitjes vanaf ongeveer 10 deelnemers tot grotere groepen van enkele honderden collega's." }, { q: "Welke activiteiten zijn mogelijk?", a: "Denk aan quizzen, interactieve spellen, challenges, speeddates, themakamers, creatieve opdrachten of een informeel programma in SpatialChat." }, { q: "Hoe lang duurt een online teamuitje?", a: "Meestal één tot twee uur. Voor grotere programma's of combinaties met een inhoudelijk moment kan het langer zijn." }, { q: "Wat kost een online teamuitje?", a: "Dat hangt af van de groepsgrootte, de activiteiten en de gewenste begeleiding. We maken graag een voorstel dat past bij het doel en de omvang." }],
    faqMore: [{ q: "Is een online teamuitje geschikt voor internationale teams?", a: "Ja. Juist voor internationale teams is een online teamuitje praktisch: geen reistijd, wel een gezamenlijk moment." }, { q: "Kunnen teams tegen elkaar spelen?", a: "Ja. Een lichte competitie kan veel energie geven. We zorgen wel dat plezier en ontmoeting centraal blijven staan." }, { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Teams en SpatialChat. Voor informele online teamuitjes geven we vaak de voorkeur aan SpatialChat, omdat deelnemers daar vrijer kunnen bewegen en makkelijker in gesprek gaan." }, { q: "Moeten deelnemers iets installeren?", a: "Meestal niet. We kiezen bij voorkeur voor tools die in de browser werken en geven vooraf heldere instructies." }, { q: "Kunnen jullie het teamuitje personaliseren?", a: "Ja. We kunnen thema's, huisstijl, interne verhalen of organisatie-specifieke vragen verwerken in het programma." }, { q: "Kunnen jullie dit combineren met een inhoudelijk programma?", a: "Ja. Een online teamuitje kan goed aansluiten op een teamdag, onboarding, training, all-hands of eindejaarsbijeenkomst." }],
    outcomeSummary: "Voor remote en hybride teams die samen wat leuks willen doen.",
  },
  "community-building": {
    title: "Online community opbouwen",
    bg: "radial-gradient(circle at 38% 38%, #FFF8E0, #FFEEC1)",
    heroSrc: "/images/events-community-hero-v2.webp",
    heroAlt: "Online community van Olympiërs die samen terugkijken op de Spelen waaraan zij deelnamen",
    iconSrc: "/images/icons/communitybuilding.png",
    Icon: Handshake, ic: "text-[#696758]",
    tagline: "Een community bouwen die mensen écht verbindt — niet alleen bij elkaar in een groep zet.",
    intro:
      "Een sterke community ontstaat niet vanzelf - ook niet online. Wij ontwerpen bijeenkomsten en structuren die verbinding stimuleren, bijdragen makkelijk maken en de online community stap voor stap laten groeien.",
    outcomes: [{ title: "Actieve leden", body: "Mensen nemen deel, dragen bij en komen terug — de community leeft." }, { title: "Echte verbinding", body: "Leden bouwen relaties op met anderen die dezelfde doelen en interesses delen." }, { title: "Een community die groeit", body: "Structuur en ritme zorgen dat de community zichzelf versterkt en nieuwe leden aantrekt." }],
    forWho: "Ledenorganisaties, alumni, professionele netwerken, platforms",
    range: "tientallen tot duizenden deelnemers",
    steps: [{ title: "Intake", body: "Wie zijn je leden, wat bindt ze en wat wil je opbouwen?" }, { title: "Ontwerp", body: "Bijeenkomsten, interactiestructuren en community-ritme." }, { title: "Lancering", body: "Eerste bijeenkomst als start van een terugkerende structuur." }, { title: "Begeleiding", body: "Doorlopende ondersteuning bij opbouw en beheer." }],
    related: ["bedrijfsfeest", "kerstfeest", "netwerkevent", "klankbordgroep"],
    validation: {
      headline: "Een online community groeit door ritme, herkenning en echte gesprekken.",
      items: [{ title: "Meer dan één event", body: "Online community building vraagt een reeks van ontmoetingen, formats en momenten waarop leden elkaar terugvinden. Wij ontwerpen het ritme en de ruimtes hiervoor." }, { title: "Een herkenbare online plek", body: "Een community heeft baat bij een omgeving die niet voelt als een losse meetinglink. SpatialChat kan bijvoorbeeld werken als online clubhuis, ontmoetingsruimte of community hub." }, { title: "Bijdragen wordt makkelijk", body: "Een community leeft als mensen iets kunnen brengen, vragen of delen. We ontwerpen werkvormen die deelname laagdrempelig en waardevol maken." }],
    },
    conditions: [{ title: "Een gedeeld doel", body: "Mensen komen terug als duidelijk is waarom de community bestaat en wat deelname oplevert. Dat doel moet voelbaar zijn in ieder format." }, { title: "Ritme en herkenning", body: "Communities hebben herhaling nodig. Een vaste structuur helpt deelnemers om sneller in te stappen en actief bij te dragen." }, { title: "Community management en hosting", body: "Een online community heeft begeleiding nodig. Niet alles hoeft geprogrammeerd, maar zonder aandacht valt contact snel stil." }],
    cases: [{ label: "Internationaal netwerk", title: "Online clubhuis voor Olympiërs", body: "Voor de World Olympians Association bouwen we een online clubhuis rond de Spelen. Deelnemers volgen keynotes, bezoeken workshops, organiseren watch parties en ontmoeten elkaar informeel.", img: "/images/events-community-olympiers.webp", imgAlt: "Virtueel clubhuis met uitzicht op de bergen, waar Olympiërs elkaar rond de Spelen ontmoeten" }, { label: "Alumninetwerk", title: "Terugkerende ontmoetingen rond thema's", body: "Een alumninetwerk wil elkaar vaker dan één keer per jaar ontmoeten. Online bijeenkomsten met thematafels, korte bijdragen en ruimte voor eigen vragen zijn de ideale aanvulling op hun offline event.", img: "/images/events-community-terugkerend.webp", imgAlt: "Statige zaal met zuilen waar een alumninetwerk elkaar terugkerend online ontmoet" }, { label: "Professionele community", title: "Kennis delen tussen bijeenkomsten door", body: "Voor een inhoudelijk netwerk maken we een herkenbaar online format waarin leden zelf samenkomsten organiseren om ervaringen te delen en nieuwe contacten te leggen.", img: "/images/events-community-professioneel-v2.webp", imgAlt: "Presentatie over een cultuur van samenhang, met een zwerm vogels als beeld voor de community", imgStyle: { transform: "scale(1.35)", transformOrigin: "0% 45%" } }],
    faq: [{ q: "Kun je online een community opbouwen?", a: "Ja. Maar een community ontstaat niet vanzelf. Daar is ritme, interactie en aandacht voor nodig." }, { q: "Is dit een event of een traject?", a: "Meestal een traject. Een community bouw je niet in één bijeenkomst." }, { q: "Hoe houden jullie leden betrokken?", a: "Door regelmatige ontmoetingen, herkenbare formats en ruimte voor onderlinge uitwisseling." }, { q: "Hoe groot kan een community zijn?", a: "Dat varieert van enkele tientallen tot honderden of zelfs duizenden deelnemers." }, { q: "Welke software gebruiken jullie?", a: "Wij werken met communities in SpatialChat, omdat dit als enige de werelden van websites en online meetings combineert en daarmee de community in alle vormen van contact kan ondersteunen." }],
    faqMore: [{ q: "Hoe vaak organiseren communities bijeenkomsten?", a: "Dat verschilt sterk. Veel communities kiezen voor een maandelijkse of kwartaalcyclus." }, { q: "Kunnen jullie community managers begeleiden?", a: "Ja. We ondersteunen regelmatig community managers en programmateams." }, { q: "Werkt dit internationaal?", a: "Ja. Online communities lenen zich uitstekend voor internationale samenwerking." }, { q: "Hoe start je een nieuwe community?", a: "Vaak begint dat met een gedeeld vraagstuk of gezamenlijk doel." }, { q: "Hoe vergroot je activiteit?", a: "Door het makkelijk te maken om bij te dragen en elkaar te ontmoeten." }, { q: "Kunnen jullie de community faciliteren?", a: "Ja. Zowel inhoudelijk als technisch." }],
    outcomeSummary: "Voor leden, alumni en netwerken die elkaar\nonline vaker en beter willen ontmoeten.",
  },
  "bewonersparticipatie": {
    title: "Online bewonersparticipatie organiseren",
    bg: "radial-gradient(circle at 38% 38%, #52C4C4, #28A8AA)",
    heroSrc: "/images/events-bewonersparticipatie-hero-v3.webp",
    heroAlt: "Online bewonersparticipatie: bewoners reageren op een luchtfoto van hun wijk met de voorgenomen ingreep",
    iconSrc: "/images/icons/bewonersparticipatie.png",
    Icon: MapPin, ic: "text-white",
    tagline: "Inwoners betrekken bij beleid, plannen en beslissingen. Op een manier die echt werkt.",
    intro:
      "Participatietrajecten zijn pas waardevol als bewoners het gevoel hebben dat hun stem ertoe doet. Wij ontwerpen online bewonersparticipatie waarbij mensen actief meedenken en meepraten - van buurtoverleg tot stadsbrede consultatie.",
    outcomes: [{ title: "Bewoners voelen zich gehoord", body: "Niet alleen uitgenodigd, maar echt betrokken. Hun inbreng telt en wordt zichtbaar teruggekoppeld." }, { title: "Bruikbare beleidsinput", body: "Goed gedocumenteerde inzichten die direct bruikbaar zijn voor je plannen of beslissingen." }, { title: "Vertrouwen in het proces", body: "Een transparante aanpak die het vertrouwen in de overheid of organisatie versterkt." }],
    forWho: "Gemeenten, provincies, woningcorporaties, projectontwikkelaars",
    range: "10-500 deelnemers",
    steps: [{ title: "Intake", body: "Wat is het vraagstuk, wie zijn de bewoners en wat moet dit traject opleveren?" }, { title: "Ontwerp", body: "Format, gespreksstructuur, interactiemomenten en documentatiemethode op maat." }, { title: "Repetitie", body: "Technische doorloop met hosts en moderatoren." }, { title: "Live productie", body: "Volledig begeleid. Wij zorgen dat iedereen mee kan doen." }],
    related: ["klankbordgroep", "focusgroep", "world-cafe", "alv"],
    validation: {
      headline: "De kwaliteit van bewonersparticipatie stijgt als de diversiteit van deelnemers stijgt. Wij zorgen dat iedereen makkelijk deel kan nemen.",
      items: [{ title: "Meer mensen bereiken", body: "Online participatie maakt deelname makkelijker voor bewoners die niet naar een zaaltje komen. Dat kan zorgen voor meer perspectieven en een bredere opbrengst." }, { title: "Gesprekken met duidelijke kaders", body: "Bewoners willen weten waar zij invloed op hebben. Wij helpen de vraag, het programma en de terugkoppeling scherp te maken." }, { title: "Input zichtbaar vastleggen", body: "Digitale participatie maakt het mogelijk om reacties, ideeën en zorgen direct te verzamelen, te clusteren en herkenbaar te delen." }],
    },
    conditions: [{ title: "Begin met een vraag", body: "Bij inspraak moet ruimte zijn om mee te denken. Wat is de vraag die voorligt?" }, { title: "Toegankelijkheid voorop", body: "Deelnemers moeten makkelijk binnenkomen en begrijpen wat er van hen wordt gevraagd. Heldere instructies en live support maken veel verschil." }, { title: "Transparantie over invloed", body: "Participatie werkt alleen als er echt iets te kiezen valt. Wees vooraf helder over wat wel en niet beïnvloedbaar is." }],
    cases: [{ label: "Gemeente", title: "Buurtgesprekken over kunst in de wijk", body: "Een gemeente wil bewoners online betrekken bij een ruimtelijk vraagstuk. Wij ontwerpen een virtuele tour, kleine gespreksrondes, een plenaire terugkoppeling en een duidelijke digitale oogst.", img: "/images/events-bewoners-praktijk-buurtgesprek.webp", imgAlt: "Twee sneeuwbollen met parkjes als gespreksbeeld over kunst en inrichting in de wijk" }, { label: "Woningcorporatie", title: "Huurders laten meedenken over dienstverlening", body: "Voor een corporatie maken we een online participatiesessie waarin bewoners hun ervaringen delen en prioriteiten aangeven. De uitkomsten kunnen direct worden meegenomen.", img: "/images/events-bewoners-praktijk-huurders.webp", imgAlt: "Virtuele zaal waarin huurders online meedenken over de dienstverlening" }, { label: "Stadsbrede consultatie", title: "Veel perspectieven overzichtelijk verzamelen", body: "Bij een groter traject helpen we de groep op te delen in thematische gesprekken. Zo blijft het persoonlijk, terwijl de opbrengst breed is.", img: "/images/events-bewoners-praktijk-consultatie.webp", imgAlt: "Bewoners kiezen in een virtueel park tussen picknickplek, skatebaan en speeltuin" }],
    faq: [{ q: "Doen bewoners online wel echt mee?", a: "Ja. Online participatie bereikt vaak mensen die niet naar een fysieke bijeenkomst komen. Dat maakt online bewonersparticipatie vaak beter qua representatie." }, { q: "Hoeveel inwoners kunnen deelnemen?", a: "Van 10 tot ruim 500 deelnemers." }, { q: "Hoe koppelen jullie resultaten terug?", a: "Wij zorgen dat input zichtbaar wordt verzameld, samengevat en gedeeld." }, { q: "Is het toegankelijk voor minder digitaal vaardige inwoners?", a: "Daar ontwerpen we bewust op. Bovendien begeleiden we deelnemers ook nog in de meeting zelf. Dat maakt veel verschil voor wie vooral onzeker is." }, { q: "Welke participatietools gebruiken jullie?", a: "We combineren vaak gesprekken, 'vote with your feet', polls, stemmingen en digitale canvassen." }, { q: "Wat kost een online participatietraject?", a: "Dat hangt af van de omvang van het traject en de gewenste begeleiding. Neem vooral contact op voor een vrijblijvende offerte!" }],
    faqMore: [{ q: "Hoe vergroot je de opkomst?", a: "Door participatie makkelijk te maken." }, { q: "Werkt dit naast fysieke bijeenkomsten?", a: "Ja. Vaak combineren organisaties online en fysieke participatie." }, { q: "Hoe verwerken jullie alle input?", a: "Digitale participatie maakt het mogelijk om input direct vast te leggen." }, { q: "Kunnen jullie de moderatie verzorgen?", a: "Ja. Onze facilitators begeleiden gesprekken, maar je kunt ook zelf een moderator aanleveren. Wij zorgen dan dat deze technisch helemaal voorbereid is." }, { q: "Kunnen jullie hybride participatie begeleiden?", a: "Ja. Daarbij besteden we extra aandacht aan gelijkwaardige deelname." }],
    outcomeSummary: "Voor een breed bereik, een eerlijk gesprek en bewoners die zich gezien en gehoord voelen.",
  },
  "klankbordgroep": {
    title: "Online klankbordgroep organiseren",
    bg: "radial-gradient(circle at 38% 38%, #B0B8A8, #989F8F)",
    heroSrc: "/images/events-klankbordgroep-hero.webp",
    heroAlt: "Online klankbordgroep in een virtuele vergaderzaal, waar stakeholders reageren op de plannen",
    heroOverlay: HERO_DIM_MEDIUM,
    iconSrc: "/images/icons/netwerkbijeenkomst.png",
    Icon: MessageCircle, ic: "text-white",
    tagline: "Luisteren naar de mensen die er het meest toe doen, gestructureerd en effectief.",
    intro:
      "Een klankbordsessie is een waardevolle manier om input te verzamelen, draagvlak te toetsen en relaties te onderhouden. Wij ontwerpen en begeleiden online klankbordgroepen met ruimte voor het goede gesprek, zodat de klankbordfunctie echt tot zijn recht komt.",
    outcomes: [{ title: "Waardevolle input", body: "Eerlijke feedback van een betrokken en diverse groep die weet wat er in de praktijk speelt." }, { title: "Sterkere stakeholderrelaties", body: "Klankbordleden voelen zich serieus genomen en blijven actief betrokken." }, { title: "Inzicht van buiten", body: "Je hoort wat er leeft buiten de muren van je organisatie, en dat is goud waard." }],
    forWho: "Beleidsmakers, bestuurders, projectleiders met externe stakeholders",
    range: "8-250 deelnemers",
    steps: [{ title: "Intake", body: "Doel, samenstelling van de groep en gewenste output." }, { title: "Ontwerp", body: "Gespreksstructuur, vraagstukken en interactiemomenten." }, { title: "Repetitie", body: "Technische doorloop met hosts." }, { title: "Live productie", body: "Volledig begeleid en gedocumenteerd." }],
    related: ["bewonersparticipatie", "focusgroep", "world-cafe", "open-space"],
    validation: {
      headline: "Online klankborden levert meer op als het gesprek goed wordt ontworpen.",
      items: [{ title: "Toetsen voor draagvlak", body: "Een online klankbordgroep maakt het makkelijk om even feedback op te halen bij leden, bewoners, klanten of stakeholders." }, { title: "Iedereen gezien en gehoord", body: "Met kleine gesprekken, duidelijke rollen en actieve moderatie komt niet alleen de snelste of luidste stem naar voren." }, { title: "Inzichten direct bruikbaar", body: "Signalen, vragen en adviezen worden digitaal vastgelegd. Daardoor is de opbrengst snel beschikbaar voor beleid, communicatie of vervolgstappen." }],
    },
    conditions: [{ title: "Een duidelijke klankbordvraag", body: "Waarop wordt precies feedback gevraagd? Hoe scherper de vraag, hoe bruikbaarder de opbrengst." }, { title: "Een goede samenstelling", body: "De waarde van een klankbordgroep zit in de perspectieven aan tafel. We denken mee over groepsgrootte, spreiding en gespreksindeling." }, { title: "Vaste structuur en terugkoppeling", body: "Deelnemers blijven betrokken als zij merken dat hun input wordt verwerkt. Daarom is terugkoppeling onderdeel van het ontwerp." }],
    cases: [{ label: "Beleidsprogramma", title: "Stakeholders vroeg betrekken", body: "Een programma wil toetsen hoe een nieuwe richting wordt ontvangen. Wij ontwerpen een online klankbord opzet met thematische breakouts waar verschillende stakeholders input kunnen geven.", img: "/images/events-klankbord-praktijk-stakeholders.webp", imgAlt: "Vogels rond een wereldbol met het thema migratie, als decor voor een online klankbordgroep" }, { label: "Ledenorganisatie", title: "Dialoog met een heartbeat", body: "Voor een vereniging maken we een terugkerend online format waarin leden signalen, zorgen en ideeën delen. Ondersteund door goede communicatie stijgen de opkomst en betrokkenheid over de tijd.", img: "/images/events-klankbord-praktijk-heartbeat.webp", imgAlt: "Online sessie met deelnemers in beeld naast cijfers over thuiswerken en CO2-besparing" }, { label: "Projectteam", title: "Draagvlak toetsen bij externe partners", body: "Een projectleider wil input op plannen zonder iedereen fysiek bijeen te brengen. Met een online sessie reageren partners gericht en denken ze mee in verschillende fases van het project.", img: "/images/events-teambuilding-praktijk-internationaal.webp", imgAlt: "Virtuele vergaderzaal met een timer, waar externe partners kort op de plannen reageren" }],
    faq: [{ q: "Wat levert een online klankbordgroep op?", a: "Een online klankbordgroep geeft toegang tot praktijkervaringen, inzichten en signalen uit de doelgroep. Dat helpt om beleid, dienstverlening of communicatie beter aan te laten sluiten op de werkelijkheid." }, { q: "Hoe groot is een online klankbordgroep?", a: "Meestal bestaat een online klankbordgroep uit 8 tot 250 deelnemers, waarbij grotere groepen steeds in kleinere clubjes uiteengaan. Zo is de sessie groot genoeg voor verschillende perspectieven, klein genoeg voor een goed gesprek." }, { q: "Hoe vaak komt een klankbordgroep samen?", a: "Dat varieert van een eenmalige bijeenkomst tot een terugkerend overleg per maand of kwartaal." }, { q: "Hoe zorgen jullie dat iedereen aan het woord komt?", a: "Met een heldere gespreksstructuur, actieve moderatie en werkvormen waarbij iedereen kan bijdragen. Wij zetten ons in dat iedereen gezien en gehoord kan worden, niet alleen de mensen die vanzelfsprekend het woord nemen. Juist in dit soort sessies is dat essentieel." }, { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Teams, Zoom Events, maar geven de voorkeur aan SpatialChat. De finale keuze hangt af van de groepsgrootte, de gewenste interactie en het doel van de bijeenkomst." }, { q: "Wat kost een online klankbordgroep?", a: "Dat hangt af van de groepsgrootte, de frequentie en de gewenste begeleiding. Daarom krijg je van ons een voorstel op maat." }],
    faqMore: [{ q: "Wanneer kies je voor een online klankbordgroep?", a: "Wanneer je regelmatig wilt toetsen hoe beleid, producten of dienstverlening worden ervaren door de doelgroep. Of als je feedback zoekt op een nieuwe richting." }, { q: "Hoe worden resultaten vastgelegd?", a: "Alle inzichten worden digitaal vastgelegd zodat ideeën, signalen en aanbevelingen niet verloren gaan." }, { q: "Werkt dit ook internationaal?", a: "Ja. Online klankbordgroepen maken het eenvoudig om deelnemers uit verschillende regio's of landen te betrekken." }, { q: "Hoe lang duurt een bijeenkomst?", a: "De meeste online klankbordgroepen duren tussen de 60 en 120 minuten." }],
    outcomeSummary: "Voor scherpe input, getoetst draagvlak en een gesprek dat verder helpt.",
  },
  "focusgroep": {
    title: "Online focusgroep organiseren",
    bg: "radial-gradient(circle at 38% 38%, #D4DDD0, #B8C4B0)",
    heroSrc: "/images/events-focusgroep-hero.webp",
    heroAlt: "Online focusgroep waarin deelnemers met korte reacties als Need en Impressive op een concept reageren",
    Icon: ScanSearch, ic: "text-[#545454]",
    tagline: "Diepgaand onderzoek naar wat mensen écht denken: online, efficiënt en goed gefaciliteerd.",
    intro:
      "Een focusgroep geeft inzicht in de belevingswereld van je doelgroep - hun motieven, twijfels en wensen. Wij ontwerpen en faciliteren innovatieve online focusgroepen waarbij deelnemers zich vrijer voelen om eerlijk te zijn en onderzoekers bruikbare inzichten krijgen.",
    outcomes: [{ title: "Diepgaand inzicht", body: "Je leert wat je doelgroep écht drijft, twijfelt en wil. Niet wat ze zeggen te willen." }, { title: "Rijke kwalitatieve data", body: "Inzichten die je kwantitatief onderzoek aanvullen en verdiepen." }, { title: "Directe toepasbaarheid", body: "Heldere conclusies die je direct kunt gebruiken voor beleid, product of communicatie." }],
    forWho: "Onderzoekers, marketeers, beleidsmakers, productontwikkelaars",
    range: "6-20 deelnemers per groep – meerdere groepen gelijktijdig mogelijk",
    steps: [{ title: "Intake", body: "Onderzoeksvraag, doelgroep en gewenste diepte van inzicht." }, { title: "Ontwerp", body: "Gespreksguide, gespreksstructuur en digitale omgeving." }, { title: "Werving", body: "Selectie en uitnodiging van de juiste deelnemers." }, { title: "Facilitatie", body: "Volledig begeleid, inclusief verslag en analyse." }],
    related: ["klankbordgroep", "bewonersparticipatie", "brainstormen", "world-cafe"],
    validation: {
      headline: "Een online focusgroep vraagt goede kaders, een open structuur en ruimte om door te vragen.",
      items: [{ title: "Diepte in het gesprek", body: "Een online focusgroep is geschikt voor vragen achter het gedrag: waarom mensen iets vinden, waar twijfel zit en welke taal zij gebruiken. Dat vraagt meer dan ‘camera aan’." }, { title: "Comfortabel deelnemen", body: "Deelnemers kunnen vanuit hun eigen omgeving aansluiten. Dit verlaagt de drempel om eerlijk en concreet te reageren." }, { title: "Onderzoek goed vastleggen", body: "Met toestemming kunnen sessies worden opgenomen, samengevat of geanalyseerd. De digitale setting maakt verwerking overzichtelijk." }],
    },
    conditions: [{ title: "Zorgvuldige selectie", body: "De samenstelling bepaalt de waarde van de focusgroep. Deelnemers moeten passen bij de onderzoeksvraag en zich vrij genoeg voelen om te spreken." }, { title: "Een sterke gespreksleidraad", body: "Goede vragen helpen om dieper te komen zonder het gesprek dicht te timmeren. De moderator bewaakt structuur en nuance." }, { title: "Afspraken over privacy en opname", body: "Bij onderzoek is duidelijkheid over toestemming, opname en verwerking belangrijk. Dat regelen we vooraf en communiceren we helder." }],
    cases: [{ label: "Marktonderzoek", title: "Reacties op een nieuw concept", body: "Een organisatie wil weten hoe verschillende doelgroepen reageren op een nieuw aanbod. Wij faciliteren meerdere online focusgroepen met een vaste gespreksleidraad.", img: "/images/events-focusgroep-praktijk-concept.webp", imgAlt: "Virtueel auditorium waarin deelnemers reageren op een nieuw product op het scherm" }, { label: "Beleidsonderzoek", title: "Ervaringen van gebruikers ophalen", body: "Voor een publieke organisatie maken we ruimte voor persoonlijke ervaringen rond dienstverlening. De online setting helpt deelnemers om vanuit hun eigen context te spreken.", img: "/images/events-bedrijfsfeest-praktijk-activiteiten.webp", imgAlt: "Spelparcours met genummerde banen waarin gebruikers hun ervaringen ordenen" }, { label: "Productontwikkeling", title: "Behoeften en bezwaren begrijpen", body: "Een productteam wil verder kijken dan enquêtecijfers. In kleine online focusgroepen met uitgelichte product features komen taal, twijfels en verwachtingen scherper naar voren.", img: "/images/events-open-space-hero.webp", imgAlt: "Deelnemers in een virtuele ruimte met breakouts waarin behoeften en bezwaren worden verkend" }],
    faq: [{ q: "Hoe groot is een online focusgroep?", a: "Meestal tussen de 6 en 20 deelnemers." }, { q: "Praten deelnemers online wel vrijuit?", a: "Vaak wel. Sommige deelnemers voelen zich online zelfs comfortabeler dan in een fysieke setting." }, { q: "Krijgen we een analyse achteraf?", a: "Ja. Indien gewenst leveren wij een samenvatting of analyse van de belangrijkste inzichten." }, { q: "Werven jullie deelnemers?", a: "Dat kan. We kunnen ondersteunen bij selectie en uitnodiging." }, { q: "Welke software gebruiken jullie?", a: "Dat hangt af van de doelgroep en onderzoeksvraag." }, { q: "Wat kost een online focusgroep?", a: "Dat hangt af van de omvang en gewenste ondersteuning." }],
    faqMore: [{ q: "Wat is het verschil tussen een focusgroep en een klankbordgroep?", a: "Een focusgroep is meestal eenmalig. Een klankbordgroep komt vaker samen." }, { q: "Wanneer kies je voor een focusgroep?", a: "Wanneer je diepgaand inzicht wilt krijgen in ervaringen, behoeften of meningen." }, { q: "Hoe lang duurt een focusgroep?", a: "Meestal tussen de 60 en 120 minuten." }, { q: "Kunnen jullie meerdere groepen draaien?", a: "Ja. Dat gebeurt regelmatig om verschillende doelgroepen te vergelijken." }, { q: "Hoe worden inzichten vastgelegd?", a: "Digitaal, zodat niets verloren gaat." }, { q: "Kunnen sessies worden opgenomen?", a: "Ja. Mits deelnemers daarvoor toestemming geven." }],
    outcomeSummary: "Voor wat een enquête mist: dieper inzicht in wat de doelgroep denkt, voelt en nodig heeft.",
  },
  "world-cafe": {
    title: "Online World Café organiseren",
    bg: "radial-gradient(circle at 38% 38%, #FFEEC1, #F5D070)",
    heroSrc: "/images/events-world-cafe-hero.webp",
    heroAlt: "Online World Café met deelnemers aan verschillende tafels en de oogst van het gesprek op een digitaal bord",
    heroOverlay: HERO_DIM_MEDIUM,
    iconSrc: "/images/icons/worldcafe.png",
    Icon: Coffee, ic: "text-[#696758]",
    tagline: "Diepgaande gesprekken in kleine groepen, ook met een grote groep. Online.",
    intro:
      "Het World Café-format is ideaal voor het uitwisselen van kennis en het bouwen van gedeeld inzicht. Wij vertalen dit krachtige format naar een online setting - met tafelgesprekken, rondes, hosts en een plenaire oogst die de opbrengst zichtbaar maakt.",
    outcomes: [{ title: "Diepgaande gesprekken", body: "Kleine groepen gaan echt de diepte in, ook over complexe of gevoelige vraagstukken." }, { title: "Gedeeld inzicht", body: "Doordat iedereen bijdraagt, wordt de uitkomst breed gedragen." }, { title: "Verbinding over grenzen heen", body: "Mensen praten met collega's of bewoners die ze anders nooit spreken." }],
    forWho: "Organisaties die willen leren van en met elkaar",
    range: "20-400 deelnemers",
    steps: [{ title: "Intake", body: "Centrale vraag, groepsgrootte en gewenste output." }, { title: "Ontwerp", body: "Tafelindeling, vraagstelling per tafel en rondgangstructuur." }, { title: "Repetitie", body: "Technische doorloop met tafelgastheren en -vrouwen." }, { title: "Live productie", body: "Wij faciliteren het volledige World Café." }],
    related: ["open-space", "brainstormen", "klankbordgroep", "bewonersparticipatie"],
    validation: {
      headline: "Een online World Café maakt grote gesprekken persoonlijk en overzichtelijk.",
      items: [{ title: "Kleine gesprekken, grote opbrengst", body: "Deelnemers bewegen in kleine groepen langs centrale vragen. Door rondes te wisselen, reizen inzichten door de hele groep." }, { title: "Gedeeld beeld bouwen", body: "Een online World Café helpt deelnemers om elkaars perspectieven te begrijpen en patronen te zien. Goede vormgeving helpt proces en inhoud." }, { title: "Digitaal direct vastgelegd", body: "Opbrengsten worden tijdens de sessie verzameld in canvassen, notities of thematische oogsten. Daardoor ontstaat snel overzicht." }],
    },
    conditions: [{ title: "Sterke centrale vragen", body: "Een World Café staat of valt met de vragen. Ze moeten open genoeg zijn voor gesprek en scherp genoeg voor opbrengst." }, { title: "Voldoende rondes", body: "Met drie tot vijf rondes gaan inzichten echt rond. De wisseling van tafel maakt de methode krachtig." }, { title: "Een heldere oogst", body: "Verzamel de inzichten onderweg, niet pas achteraf. Zo gaat niets verloren en ontstaat er een bruikbaar overzicht." }],
    cases: [{ label: "Kennisnetwerk", title: "Ervaringen delen rond een actueel thema", body: "Een professioneel netwerk wil leden van elkaar laten leren. Wij ontwerpen een online World Café met meerdere rondes en een gezamenlijke terugkoppeling.", img: "/images/events-worldcafe-praktijk-ervaringen.webp", imgAlt: "Virtuele bar met barkrukken en een agenda met zestien breakouts voor een online World Café" }, { label: "Interne organisatie", title: "Samen leren van projecten", body: "Een organisatie wil lessen uit verschillende teams ophalen. Door tafelgesprekken te combineren met digitale oogst ontstaat een breed maar concreet beeld.", img: "/images/events-worldcafe-praktijk-leren.webp", imgAlt: "Digitaal bord met de oogst van tafelgesprekken over de MMs, de organisatie en de markt" }, { label: "Samenwerkingsverband", title: "Gedeeld inzicht over organisaties heen", body: "Een groep organisaties zoekt gemeenschappelijke grond. Online tafelgesprekken brengen ervaringen en ideeën samen en leveren een gedeelde taal als vertrekpunt voor samenwerking.", img: "/images/events-worldcafe-praktijk-inzicht.webp", imgAlt: "Gedeeld Miro-bord in SpatialChat waarop organisaties hun inzichten samenbrengen" }],
    faq: [{ q: "Hoe werkt een online World Café?", a: "Bij een online World Café gaan deelnemers in kleine groepen met elkaar in gesprek rondom een aantal centrale vragen. Na iedere ronde wisselen deelnemers van tafel en nemen zij inzichten mee naar het volgende gesprek." }, { q: "Hoeveel mensen kunnen deelnemen?", a: "Wij begeleiden online World Café's van ongeveer 20 tot ruim 400 deelnemers." }, { q: "Waarvoor is een online World Café geschikt?", a: "Het format is geschikt voor vraagstukken waarbij kennisdeling, gezamenlijke beeldvorming en het ophalen van perspectieven centraal staan." }, { q: "Hoe worden inzichten vastgelegd?", a: "De opbrengsten worden direct digitaal verzameld. Daardoor ontstaat een overzicht van thema's, inzichten en aanbevelingen." }, { q: "Welke software gebruiken jullie?", a: "Bij een World Café geven we de voorkeur aan een platform waarop gesprekken natuurlijk verlopen en mensen makkelijk van tafel wisselen. SpatialChat werkt daar uitstekend voor. Plan een demo en zie het in actie." }, { q: "Wat kost een online World Café?", a: "Dat hangt af van de groepsgrootte, het ontwerp en de begeleiding." }],
    faqMore: [{ q: "Kan een World Café hybride plaatsvinden?", a: "Ja. Maar net als bij andere hybride bijeenkomsten vraagt dat om zorgvuldig ontwerp en een sterke alignment in de te gebruiken tooling." }, { q: "Hoe lang duurt een online World Café?", a: "Meestal tussen de 90 minuten en 3 uur." }, { q: "Hoeveel rondes zijn gebruikelijk?", a: "Vaak werken we met drie tot vijf rondes, afhankelijk van het onderwerp." }, { q: "Welke onderwerpen lenen zich voor een World Café?", a: "Vooral vraagstukken waarbij verschillende perspectieven en ervaringen belangrijk zijn." }, { q: "Kunnen deelnemers van tafel wisselen?", a: "Ja. Dat is juist een essentieel onderdeel van de methode." }, { q: "Wat gebeurt er met de opbrengst?", a: "De verzamelde inzichten worden gebundeld en kunnen dienen als input voor vervolgstappen, beleid of besluitvorming." }],
    outcomeSummary: "Voor gedeelde kennis, nieuwe inzichten en een gesprek dat blijft bewegen.",
  },
  "webinar": {
    title: "Webinar organiseren",
    bg: "radial-gradient(circle at 38% 38%, #C64A60, #A83852)",
    heroSrc: "/images/events-webinar-hero.webp",
    heroAlt: "Online webinar waarin deelnemers na afloop napraten in een virtuele lounge",
    Icon: Radio, ic: "text-white",
    tagline: "Webinars die mensen boeien. Niet alleen zenden, maar echt verbinden.",
    intro:
      "Een webinar hoeft geen eenrichtingsuitzending te zijn. Wij helpen organisaties een interactief webinar te organiseren met ruimte om te verdiepen en 1 op 1 na te praten.",
    outcomes: [{ title: "Betrokken deelnemers", body: "Geen passief publiek maar actieve deelnemers die vragen stellen, stemmen en reageren." }, { title: "Een boodschap die beklijft", body: "Inhoud die echt landt, ondersteund door de juiste structuur en interactie." }, { title: "Concrete opvolging", body: "Hogere conversie en betrokkenheid na afloop, doordat deelnemers echt meegedaan hebben." }],
    forWho: "Marketing-, communicatie- en L&D-teams, kennisorganisaties",
    range: "50-1000 deelnemers",
    steps: [{ title: "Intake", body: "Doel, doelgroep en gewenst interactieniveau." }, { title: "Ontwerp", body: "Presentatiestructuur, interactiemomenten en technische set-up." }, { title: "Repetitie", body: "Technische doorloop met sprekers en hosts." }, { title: "Live productie", body: "Volledig begeleid, inclusief live Q&A en technische support." }],
    related: ["conferentie", "townhall", "strategiedagen", "training-workshop"],
    validation: {
      headline: "Een goed webinar is geen uitzending, maar een online bijeenkomst met aandacht en koffie toe.",
      items: [{ title: "Een helder verhaal", body: "Een goed webinar heeft een duidelijke lijn: waarom is dit onderwerp relevant, wat leert de deelnemer en wat is de gewenste vervolgstap?" }, { title: "Interactie die de inhoud versterkt", body: "Polls, vragen, chat en kleine gesprekken zijn geen versiering. Ze helpen deelnemers om informatie te verwerken en betrokken te blijven." }, { title: "Napraten in plaats van afsluiten", body: "Het grootste verschil zit na afloop: ruimte om in kleine groepjes door te praten. Daar ontstaat de echte waarde." }],
    },
    conditions: [{ title: "Doel en doelgroep scherp", body: "Een webinar voor leads vraagt iets anders dan een intern kenniswebinar. Doelgroep, taal en gewenste actie sturen het inhoudelijk verloop." }, { title: "Interactie als ontwerpkeuze", body: "Betrokkenheid ontstaat niet vanzelf. Bouw polls, vragen en momenten van uitwisseling vooraf in." }, { title: "Goede sprekersbegeleiding", body: "Een sterke spreker maakt het verschil. Een briefing, technische check en repetitie zorgen voor rust op de dag en voor meer geëngageerde gesprekken." }],
    cases: [{ label: "Kennisorganisatie", title: "Een uitzending die een gesprek werd", body: "Een kennisorganisatie wil meer dan een sprekende kop op het scherm. Met polls en een levendige breakout om tot goede vragen te komen, wordt het webinar een gesprek. Deelnemers blijven tot het eind betrokken.", img: "/images/events-webinar-praktijk-gesprek.webp", imgAlt: "Virtuele lounge bij de haard, waar deelnemers na het webinar met elkaar doorpraten" }, { label: "Marketingteam", title: "Leads die echt iets opstaken", body: "Een marketingteam organiseert een webinar voor klanten en prospects. Door interactie en napraten in koffiekamers blijft de boodschap hangen. Meer waardevolle gesprekken, ook na afloop.", img: "/images/events-webinar-praktijk-leads.webp", imgAlt: "Virtuele strandlounge waar deelnemers na afloop van het webinar napraten" }, { label: "L&D-team", title: "Leren doe je samen", body: "Een leerprogramma gebruikt webinars voor kennisinput, maar wil meer deelname. Wij voegen opdrachten, puzzels, gesprekken en reflectiemomenten toe.", img: "/images/events-webinar-praktijk-leren.webp", imgAlt: "Deelnemers kijken samen naar beeld in een virtuele ruimte tijdens een leerprogramma" }],
    faq: [{ q: "Hoe maken jullie een webinar interactief?", a: "Met polls, live vragen, reacties uit het publiek en andere interactieve werkvormen. Zo blijven deelnemers betrokken bij de inhoud. Het belangrijkste echter: we bieden gelegenheid tot napraten in koffiekamers. Dat maakt groot verschil." }, { q: "Hoeveel deelnemers kunnen deelnemen?", a: "Wij begeleiden webinars van ongeveer 50 tot ruim 1.000 deelnemers." }, { q: "Kunnen deelnemers vragen stellen?", a: "Ja. Deelnemers kunnen vragen stellen via chat." }, { q: "Verzorgen jullie techniek en sprekersbegeleiding?", a: "Ja. Wij verzorgen de technische productie, begeleiden sprekers en ondersteunen tijdens de uitzending." }, { q: "Krijgen we een opname?", a: "Ja. Webinars kunnen worden opgenomen en achteraf worden gedeeld of hergebruikt." }, { q: "Wat kost een webinar?", a: "De investering hangt af van de omvang van het webinar en de gewenste ondersteuning. Daarom stellen wij per webinar een voorstel op." }],
    faqMore: [{ q: "Wat is het verschil tussen een webinar en een online evenement?", a: "Een webinar richt zich meestal op één programmaonderdeel of onderwerp. Een online evenement bevat vaak meerdere onderdelen, sessies of netwerkmogelijkheden." }, { q: "Welke software gebruiken jullie?", a: "Voor webinars werken we met Zoom, Zoom Events en Teams. Maar we laten je ook graag SpatialChat zien: deelnemers kunnen bijvoorbeeld in kleine groepjes napraten, wat de betrokkenheid flink verhoogt. Wat het beste werkt, hangt af van je doel en je publiek." }, { q: "Kunnen webinars hybride plaatsvinden?", a: "Ja. Een webinar kan worden gecombineerd met publiek op locatie." }, { q: "Hoe lang duurt een webinar?", a: "De meeste webinars duren tussen de 45 en 90 minuten." }, { q: "Kunnen deelnemers anoniem vragen stellen?", a: "Ja. Dat verlaagt vaak de drempel om vragen te stellen." }, { q: "Kunnen jullie registratie en opvolging verzorgen?", a: "Wij kunnen ondersteunen bij registratie, herinneringen en opvolging na afloop. Meestal echter, gebeurt dit vanuit de klant." }],
    outcomeSummary: "Voor kennisdeling die verder gaat dan alleen zenden.",
  },
  "conferentie": {
    title: "Online conferentie organiseren",
    bg: "radial-gradient(circle at 38% 38%, #555C50, #404840)",
    heroSrc: "/images/events-conferentie-hero.webp",
    heroAlt: "Online conferentie met deelnemers in beeld naast een scherm met de cijfers en resultaten van het programma",
    heroOverlay: HERO_DIM_STERK,
    iconSrc: "/images/icons/onlineconferenties.png",
    Icon: MonitorPlay, ic: "text-white",
    tagline: "Professionele conferenties voor grote groepen: interactief, scherp geproduceerd en breed bereikbaar.",
    intro:
      "Online conferenties vragen om een strakke technische productie én een inhoudelijke aanpak die deelnemers betrokken houdt. Wij verzorgen beide: van keynotes tot parallelle sessies, netwerkmomenten, live Q&A en deelnemersbegeleiding.",
    outcomes: [{ title: "Professionele ervaring", body: "Deelnemers ervaren een kwalitatief hoogwaardige conferentie, ook vanuit huis." }, { title: "Geïnspireerd en verbonden", body: "Keynotes, sessies en netwerkmomenten geven deelnemers iets mee dat beklijft." }, { title: "Soepel op alle niveaus", body: "Van plenaire opening tot parallelle breakouts, alles loopt technisch en organisatorisch vlekkeloos." }],
    forWho: "Brancheorganisaties, kennisinstellingen, grote bedrijven",
    range: "60-1000 deelnemers",
    steps: [{ title: "Intake", body: "Programma, sprekers, sessiestructuur en technische eisen." }, { title: "Ontwerp", body: "Platform, plenaire + parallelle sessies, netwerkmomenten." }, { title: "Repetitie", body: "Volledige doorloop met sprekers, hosts en sessieleiders." }, { title: "Live productie", body: "Professionele productie van begin tot eind." }],
    related: ["webinar", "townhall", "alv", "open-space"],
    validation: {
      headline: "Een online conferentie is meer dan een optelsom van livestreams en losse deelsessies.",
      items: [{ title: "Een programma dat online werkt", body: "Een fysieke conferentie één-op-één online zetten werkt meestal niet. Wij ontwerpen ritme, sessielengte, interactie en pauzes opnieuw voor online deelname." }, { title: "Betrokken, ook bij grote aantallen", body: "Van zestig tot ruim duizend deelnemers. Met afwisseling en interactie blijft ook een grote groep aangehaakt." }, { title: "Ontmoeting hoort erbij", body: "Een conferentie is meer dan zenden. Wij ontwerpen ruimtes waar deelnemers elkaar treffen en gesprekken voortzetten." }],
    },
    conditions: [{ title: "Heldere programma-architectuur", body: "Deelnemers moeten begrijpen waar zij wanneer moeten zijn. Navigatie, sessies en overgangsmomenten vragen daarom veel aandacht." }, { title: "Platformkeuze op basis van doel", body: "Zoom Events, Zoom, Teams of SpatialChat kunnen allemaal passen. De keuze hangt af van aantal sessies, interactie, registratie en ontmoeting." }, { title: "Ruimte voor ontmoeting", body: "Online deelnemers mogen meer zijn dan meekijkers. Reserveer tijd en ruimte voor netwerken en gesprek." }],
    cases: [{ label: "Internationale conferentie", title: "Plenair, parallel en hybride op hoog niveau", body: "Voor de EU Community of Practice on Peace Mediation ondersteunen we een grote conferentie met honderden deelnemers, parallelle sessies, online deelname en meertalige onderdelen.", img: "/images/events-conferentie-praktijk-hybride.webp", imgAlt: "Regiekamer van een internationale conferentie met monitors en het openingsscherm van CoP24" }, { label: "Kennisinstelling", title: "Meerdaags programma, één geheel", body: "Een kennisinstelling organiseert een meerdaagse conferentie voor een internationaal publiek. Wij verzorgen ontwerp, techniek en begeleiding. Een soepel programma over meerdere dagen.", img: "/images/events-conferentie-praktijk-meerdaags.webp", imgAlt: "Virtuele tuin met lampionnen waar deelnemers tussen de programmaonderdelen door samenkomen" }, { label: "Brancheorganisatie", title: "Leden online samenbrengen rond actuele ontwikkelingen", body: "Voor een brancheorganisatie ontwerpen we een online conferentie met plenaire updates, deelsessies en informele ontmoetingsmomenten.", img: "/images/events-conferentie-praktijk-brancheorganisatie.webp", imgAlt: "Virtuele bergkamer met het programma van de jaarlijkse conferentie en deelnemers in beeld" }],
    faq: [{ q: "Hoe houden jullie een online conferentie boeiend?", a: "Door afwisseling aan te brengen tussen plenaire sessies, parallelle programma's, interactie en ontmoeting. Een online conferentie vraagt om een ander ritme dan een fysieke conferentie. Daar ontwerpen wij bewust op." }, { q: "Hoeveel deelnemers kunnen meedoen?", a: "Wij begeleiden online conferenties van ongeveer 60 tot ruim 1000 deelnemers. Dankzij interactieve platformen en slimme programma-opbouw blijft ook een grote groep betrokken." }, { q: "Kunnen deelnemers netwerken?", a: "Ja. Sterker nog: wij vinden dat ontmoeting een essentieel onderdeel is van vrijwel iedere conferentie. Daarom ontwerpen we vaak ruimtes waar deelnemers elkaar kunnen ontmoeten en gesprekken kunnen voortzetten." }, { q: "Kunnen jullie meerdere sessies tegelijk faciliteren?", a: "Ja. We begeleiden regelmatig conferenties met meerdere parallelle programma's, breakouts en deelsessies." }, { q: "Kunnen jullie meerdaagse conferenties verzorgen?", a: "Ja. Van een compacte middag tot een meerdaags programma. We helpen bij ontwerp, techniek, deelnemersbegeleiding en productie." }, { q: "Wat kost een online conferentie?", a: "De investering hangt af van de omvang van het programma, het aantal sessies en de gewenste ondersteuning. Daarom werken wij altijd met een voorstel op maat." }],
    faqMore: [{ q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Zoom Events en SpatialChat. Welke omgeving het beste past, hangt af van de doelen van de conferentie." }, { q: "Verzorgen jullie de hele productie?", a: "Ja. We begeleiden het volledige traject: van ontwerp en draaiboek tot technische productie, deelnemersbegeleiding en evaluatie." }, { q: "Is een online conferentie ook hybride mogelijk?", a: "Ja. Maar hybride conferenties vragen extra aandacht. Online deelnemers moeten meer zijn dan meekijkers." }, { q: "Hoe begeleiden jullie sprekers?", a: "Sprekers ontvangen een briefing, technische instructies en waar nodig een repetitie." }, { q: "Kunnen deelnemers sessies terugkijken?", a: "Ja. Sessies kunnen worden opgenomen en achteraf beschikbaar worden gesteld." }, { q: "Hoe registreren deelnemers zich?", a: "Dat kan via bestaande systemen van de opdrachtgever of via registratie- en eventplatforms die wij ondersteunen." }],
    outcomeSummary: "Voor een mooi programma, betrokken deelnemers en ruimte voor ontmoeting.",
  },
  "open-space": {
    title: "Online Open Space organiseren",
    bg: "radial-gradient(circle at 38% 38%, #F5BEC8, #EFA1AF)",
    heroSrc: "/images/events-open-space-hero.webp",
    heroAlt: "Online Open Space waarin deelnemers zelf sessies aandragen en kiezen waar zij aanschuiven",
    iconSrc: "/images/icons/openspace.png",
    Icon: Pin, ic: "text-[#696758]",
    tagline: "De agenda bepalen met de groep zelf: open, energiek en verrassend productief.",
    intro:
      "Open Space Technology is een krachtige methode voor grote groepen: de deelnemers bepalen zelf de agenda. Wie iets wil bespreken, opent een sessie. Wie geïnteresseerd is, sluit aan. Online werkt dit verrassend goed.",
    outcomes: [{ title: "Een agenda die leeft", body: "Deelnemers bepalen zelf wat er besproken wordt, en dat geeft energie en eigenaarschap." }, { title: "Onverwachte inzichten", body: "De gesprekken die plaatsvinden zijn vaak precies de gesprekken die al lang gevoerd hadden moeten worden." }, { title: "Hoog eigenaarschap", body: "Wie bijdraagt aan de agenda, voelt verantwoordelijkheid voor de uitkomst." }],
    forWho: "Organisaties die willen vernieuwen, leren of samenwerken",
    range: "30-600 deelnemers",
    steps: [{ title: "Intake", body: "Centrale uitdaging of thema dat de groep bij elkaar brengt." }, { title: "Ontwerp", body: "Platform-inrichting voor parallelle sessies en marketplace." }, { title: "Briefing", body: "Deelnemers worden voorbereid op het Open Space-principe." }, { title: "Live productie", body: "Wij faciliteren het volledige Open Space-event." }],
    related: ["world-cafe", "brainstormen", "strategiedagen", "conferentie"],
    validation: {
      headline: "Online Open Space geeft deelnemers ruimte, zonder het proces los te laten.",
      items: [{ title: "De agenda komt uit de groep", body: "Online Open Space is geschikt voor vraagstukken waar energie, kennis en eigenaarschap al in de groep aanwezig zijn. Deelnemers bepalen zelf wat aandacht nodig heeft." }, { title: "Vrij bewegen tussen sessies", body: "In een goede online omgeving kunnen deelnemers kiezen, overstappen en aansluiten bij gesprekken die voor hen relevant zijn." }, { title: "Veel output in korte tijd", body: "Iedere sessie levert inzichten, vragen of vervolgstappen op. Met digitale vastlegging blijft de opbrengst overzichtelijk." }],
    },
    conditions: [{ title: "Een urgent centraal thema", body: "Open Space werkt goed rond een vraagstuk dat breed leeft. Zonder urgentie blijft het te vrijblijvend." }, { title: "Duidelijke spelregels", body: "Vrijheid werkt alleen met heldere kaders. Deelnemers moeten weten hoe zij een sessie openen, deelnemen en opbrengst vastleggen." }, { title: "Techniek die bewegen mogelijk maakt", body: "Deelnemers moeten makkelijk van ruimte kunnen wisselen. De online omgeving bepaalt voor een groot deel de kwaliteit van de ervaring." }],
    cases: [{ label: "Innovatietraject", title: "Medewerkers bepalen zelf de sessies", body: "Een organisatie wil ideeën en zorgen rond innovatie ophalen. Wij faciliteren een online Open Space waarin medewerkers zelf onderwerpen aandragen en kleine sessies starten.", img: "/images/events-openspace-praktijk-innovatie.webp", imgAlt: "Stoelenkring met deelnemers in beeld en het thema verbonden blijven op het scherm" }, { label: "Community of Practice", title: "Kennis delen zonder vast programma", body: "Een vakgemeenschap wil leden zelf het programma laten bepalen. Online Open Space geeft ruimte aan tientallen zelfgekozen sessies. Kennisdeling die uit de groep zelf komt.", img: "/images/events-openspace-praktijk-community.webp", imgAlt: "Virtuele bar met een agenda van zestien zelfgekozen breakoutsessies" }, { label: "Strategische verkenning", title: "Complex vraagstuk met veel perspectieven", body: "Een grote groep stakeholders heeft behoefte aan open verkenning. Online Open Space geeft structuur, maar laat de inhoud bij de deelnemers.", img: "/images/events-openspace-praktijk-verkenning.webp", imgAlt: "Stoelenkring in het gras waarin deelnemers zelf kiezen bij welk gesprek zij aanschuiven" }],
    faq: [{ q: "Wat is Open Space?", a: "Open Space is een werkvorm waarbij deelnemers zelf onderwerpen aandragen en de agenda samen vormgeven. Daardoor ontstaat eigenaarschap en betrokkenheid." }, { q: "Werkt Open Space online?", a: "Ja. Online Open Space werkt verrassend goed omdat deelnemers eenvoudig tussen sessies kunnen bewegen en zelf keuzes kunnen maken." }, { q: "Voor hoeveel deelnemers is Open Space geschikt?", a: "Van ongeveer 30 tot ruim 600 deelnemers." }, { q: "Hoe voorkomen jullie chaos?", a: "Open Space lijkt spontaan, maar werkt juist dankzij een helder proces en duidelijke spelregels. Wij begeleiden dat proces zorgvuldig." }, { q: "Welke software gebruiken jullie?", a: "Voor een Open Space kiezen we een platform waarop deelnemers vrij bewegen en zelf hun sessies opzoeken. SpatialChat is daar bij uitstek geschikt voor. Boek een demo om het te ervaren." }, { q: "Wat kost een online Open Space?", a: "Dat hangt af van de groepsgrootte en de gewenste begeleiding." }],
    faqMore: [{ q: "Hoe ontstaat de agenda?", a: "De deelnemers brengen zelf onderwerpen in die zij belangrijk vinden." }, { q: "Welke onderwerpen zijn geschikt?", a: "Vooral complexe vraagstukken waarbij kennis, ervaring en eigenaarschap uit de groep zelf moeten komen." }, { q: "Hoe worden resultaten vastgelegd?", a: "Iedere sessie levert opbrengsten op die digitaal worden verzameld en gedeeld." }, { q: "Kan Open Space hybride plaatsvinden?", a: "Ja. Maar ook hier geldt dat hybride alleen werkt als beide groepen gelijkwaardig kunnen deelnemen." }, { q: "Hoe lang duurt een Open Space?", a: "Dat varieert van een paar uur tot een volledige dag." }, { q: "Welke rol speelt de facilitator?", a: "De facilitator bewaakt het proces, niet de inhoud." }],
    outcomeSummary: "Voor grote groepen die zelf agenda, eigenaarschap en beweging creëren.",
  },
  "netwerkevent": {
    title: "Online netwerkevent organiseren",
    bg: "radial-gradient(circle at 38% 38%, #4ABABA, #28A0A0)",
    heroSrc: "/images/events-netwerkevent-hero-v2.webp",
    heroAlt: "Online netwerkevent in een virtuele bar, waar deelnemers elkaar informeel ontmoeten",
    Icon: Network, ic: "text-white",
    tagline: "Mensen verbinden die elkaar nog niet kennen: online, laagdrempelig en met echte gesprekken.",
    intro:
      "Wij ontwerpen online netwerkevenementen waarbij ontmoeting echt plaatsvindt: via slimme matchmaking, gestructureerde gesprekken en een omgeving die toevallige ontmoetingen stimuleert.",
    outcomes: [{ title: "Nieuwe waardevolle contacten", body: "Deelnemers verlaten het event met contacten die er écht toe doen. Geen uitwisseling van visitekaartjes." }, { title: "Een netwerkevent dat lekker voelt", body: "Laagdrempelig, goed gestructureerd en met de juiste sfeer. Ook online." }, { title: "Verbinding die verder gaat", body: "De relaties die tijdens het event worden gelegd, worden ook ná het event voortgezet." }],
    forWho: "Brancheorganisaties, alumni, platforms, HR-teams",
    range: "30-300 deelnemers",
    steps: [{ title: "Intake", body: "Doelgroep, doel van het netwerken en gewenste sfeer." }, { title: "Ontwerp", body: "Matchmaking-structuur, gespreksformats en platform-keuze." }, { title: "Repetitie", body: "Technische doorloop met hosts en gespreksleiders." }, { title: "Live productie", body: "Volledig begeleid, ook de informele momenten." }],
    related: ["community-building", "conferentie", "webinar", "klankbordgroep"],
    validation: {
      headline: "Online netwerken werkt als het meer is dan mensen willekeurig in breakouts zetten.",
      items: [{ title: "Gesprekken met aanleiding", body: "De beste netwerkgesprekken ontstaan niet uit het niets. We geven deelnemers een vraag, thema of match waardoor contact vanzelfsprekender wordt." }, { title: "Structuur én vrijheid", body: "Sommige deelnemers willen speeddates, anderen willen rondlopen. Een goed online netwerkevent combineert vaste rondes met ruimte voor spontane ontmoeting." }, { title: "Geschikt voor internationale groepen", body: "Online netwerken is sterk wanneer mensen verspreid zijn over landen, sectoren of organisaties. De drempel om mee te doen is laag." }],
    },
    conditions: [{ title: "Duidelijke deelnemersprofielen", body: "Matchmaking werkt beter als bekend is wie er meedoet en waarom. Rollen, interesses of vragen kunnen helpen." }, { title: "Een goede gespreksvorm", body: "Niet ieder netwerkdoel vraagt dezelfde vorm. Speeddates, thematafels, open ruimtes en buddygesprekken hebben elk hun eigen effect." }, { title: "Een omgeving die ontmoeting stimuleert", body: "Vrij bewegen en spontaan aanschuiven kan niet in elke tool. De juiste omgeving maakt toevallige ontmoetingen mogelijk." }],
    cases: [{ label: "Internationaal netwerk", title: "Online clubhuis voor ontmoeting", body: "Voor de World Olympians Association maken we een online omgeving waar deelnemers elkaar rond programmaonderdelen vinden. Het netwerkevent wordt onderdeel van een bredere community.", img: "/images/events-netwerk-praktijk-clubhuis.webp", imgAlt: "OLY Bar Milano: virtuele bar waar deelnemers van het netwerkevent elkaar ontmoeten" }, { label: "Alumni", title: "Nieuwe en oude leden aan elkaar koppelen", body: "Een alumninetwerk wil meer waardevolle ontmoetingen. Wij ontwerpen een online netwerkevent met thematafels, gerichte vragen en vrije gespreksruimte.", img: "/images/events-netwerk-praktijk-alumni.webp", imgAlt: "Statige zaal met portrettengalerij als ontmoetingsplek voor het alumninetwerk" }, { label: "Conferentie", title: "Netwerken rondom inhoudelijke sessies", body: "Voor een online conferentie maken we koffiekamers en gespreksrondes waarin deelnemers napraten over keynotes en workshops.", img: "/images/events-netwerk-praktijk-conferentie.webp", imgAlt: "Deelnemers kiezen een thema om over door te praten na de inhoudelijke sessies" }],
    faq: [{ q: "Werkt online netwerken wel?", a: "Ja. Mits je het goed organiseert. De meeste mensen zitten niet te wachten op een digitale visitekaartjesuitwisseling. Wel op een goed gesprek. Daarom ontwerpen wij netwerkevents waarin ontmoeting centraal staat." }, { q: "Hoeveel deelnemers kunnen meedoen?", a: "Wij begeleiden online netwerkevents van ongeveer 30 tot ruim 300 deelnemers." }, { q: "Hoe brengen jullie de juiste mensen bij elkaar?", a: "Afhankelijk van het doel werken we met matchmaking, thematafels, speeddates of zelfsturende ontmoetingen. Het ontwerp bepaalt welke vorm het beste werkt." }, { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Zoom Events, Teams en SpatialChat. Vooral SpatialChat blijkt vaak verrassend effectief voor informele ontmoetingen." }, { q: "Hoe zorgen jullie voor waardevolle gesprekken?", a: "Door deelnemers een duidelijke aanleiding te geven om met elkaar in gesprek te gaan. De beste gesprekken ontstaan zelden vanzelf." }, { q: "Wat kost een online netwerkevent?", a: "Dat hangt af van het aantal deelnemers, het ontwerp en de gewenste begeleiding." }],
    faqMore: [{ q: "Hoe werkt matchmaking?", a: "Matchmaking kan plaatsvinden op basis van interesses, expertise, sector, rol of een specifieke vraag." }, { q: "Werkt online netwerken ook internationaal?", a: "Juist dan. Online netwerken maakt het eenvoudig om deelnemers uit verschillende landen samen te brengen." }, { q: "Hoe lang duurt een online netwerkevent?", a: "Meestal tussen de 60 minuten en 3 uur." }, { q: "Kunnen jullie een community koppelen aan het event?", a: "Ja. Regelmatig gebruiken organisaties een netwerkevent als startpunt voor een langere samenwerking. Zo maakten we voor de World Olympians Association een online clubhuis dat altijd open is." }, { q: "Kunnen deelnemers contactgegevens uitwisselen?", a: "Ja. Uiteraard bepalen deelnemers zelf welke informatie zij willen delen." }],
    outcomeSummary: "Voor waardevolle gesprekken, slimme matches en online ontmoeting die natuurlijk voelt.",
  },
};

export function generateStaticParams() {
  return Object.keys(EVENT_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENT_DATA[slug];
  if (!event) return {};
  return {
    title: `${event.title} | MeetingMasters`,
    description: event.tagline,
  };
}

export default async function EventTypePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const event = EVENT_DATA[slug];
  if (!event) notFound();

  const { title, bg, iconSrc, Icon, ic, tagline, intro, outcomes, forWho, range, steps, related } = event;

  const shortTitle = title
    .replace(/^Online /i, "")
    .replace(/\s+(organiseren|geven|opbouwen|houden)$/i, "");
  // Zichtbare kop = titel zonder het SEO-werkwoord op het eind (de volledige
  // titel blijft staan voor de <title>/metadata).
  const displayTitle = title.replace(/\s+(organiseren|geven|opbouwen|houden)$/i, "");
  const iconColor = ic === "text-white" ? "#FFFFFF" : "#696758";
  const accentColor = bg.match(/#[A-Fa-f0-9]{6}/g)?.[1] ?? "#28A8AA";

  const relatedFormats = related
    .map((s) => eventFormats.find((f) => f.slug === s))
    .filter((f): f is (typeof eventFormats)[number] => Boolean(f));

  const allFaqs = [...(event.faq ?? []), ...(event.faqMore ?? [])];
  const faqSchema = allFaqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  } : null;

  return (
    <div className="bg-white">

      {faqSchema && <JsonLd data={faqSchema} />}

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full md:h-[44vw] md:min-h-[300px] md:max-h-[520px] overflow-hidden">
          <Image
            src={event.heroSrc ?? "/images/events-bijeenkomst.webp"}
            alt={event.heroAlt ?? `${title} — MeetingMasters Online Events`}
            fill priority
            className="object-cover object-center"
            style={{ filter: "contrast(1.03) saturate(1.06)", ...event.heroImgStyle }}
          />
          <div className={`absolute inset-0 ${event.heroOverlay ?? HERO_DIM_LICHT}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-16">
              <div className="max-w-[600px]">
                <Link
                  href="/nl/events#formats"
                  className="text-[#28A8AA]/80 text-xs font-bold tracking-widest uppercase mb-4 inline-block hover:text-[#28A8AA] transition-colors"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,0.75)" }}
                >
                  ← Event Formats
                </Link>
                <h1 className="text-[1.9rem] sm:text-6xl lg:text-[3.7rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-4" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  {displayTitle}
                </h1>
                {event.outcomeSummary && (
                  <p className="text-white text-base sm:text-xl font-medium tracking-wide mb-6 sm:mb-7" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                    {event.outcomeSummary.split("\n").map((line, i, arr) => (
                      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                  </p>
                )}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded cursor-default">
                    Vrijblijvende offerte
                  </span>
                  <Link
                    href="/nl/events#formats"
                    className="text-white/70 text-sm font-semibold px-5 py-3 border border-white/25 rounded hover:border-white/55 transition-colors"
                  >
                    Bekijk alle event formats
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EEN ACTIEVE FORMAT / INTRO ── */}
      {event.validation ? (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Een actief format</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {event.validation.headline}
              </h2>
              <p className="text-[#545454] leading-relaxed">{intro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {event.validation.items.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: bg, boxShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
                    >
                      <Check className="w-4 h-4" style={{ color: iconColor }} strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-base leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#545454] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Over dit format</p>
                <p className="text-[#545454] leading-relaxed mb-8 text-base">{intro}</p>
                <div className="flex flex-col sm:flex-row gap-5 mb-8">
                  {forWho && (
                    <div className="border-l-2 border-[#EEBE3D] pl-4">
                      <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">Voor wie</p>
                      <p className="text-sm text-[#545454] leading-snug">{forWho}</p>
                    </div>
                  )}
                  {range && (
                    <div className="border-l-2 border-[#EEBE3D] pl-4">
                      <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">Groepsgrootte</p>
                      <p className="text-sm text-[#545454]">{range}</p>
                    </div>
                  )}
                </div>
                <Link
                  href="/nl/expert-advies"
                  className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
                >
                  Vrijblijvend gesprek →
                </Link>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-6">
                <div
                  className="relative w-52 h-52 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
                  style={{ background: bg, boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)" }}
                >
                  {iconSrc ? (
                    <Image src={iconSrc} alt="" fill className="object-cover" />
                  ) : (
                    <Icon className={`w-24 h-24 ${ic}`} strokeWidth={1} />
                  )}
                </div>
                <div className="bg-[#F7F7F5] rounded p-5 w-full max-w-[260px]">
                  <div className="flex gap-4 divide-x divide-[#E0E0E0]">
                    <div className="pr-4">
                      <p className="text-[#EEBE3D] text-2xl font-bold leading-none mb-1">250+</p>
                      <p className="text-xs text-[#898989] leading-snug">events begeleid</p>
                    </div>
                    <div className="pl-4">
                      <p className="text-[#EEBE3D] text-2xl font-bold leading-none mb-1">94%</p>
                      <p className="text-xs text-[#898989] leading-snug">tevredenheid na afloop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── IN DE PRAKTIJK ── */}
      {event.cases && (
        <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">In de praktijk</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
                Drie voorbeelden. Jarenlange ervaring.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {event.cases.map((c, i) => (
                <div key={i} className="bg-white rounded overflow-hidden shadow-sm">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={c.img ?? "/images/events-bijeenkomst.webp"}
                      alt={c.imgAlt ?? `${c.title} — ${displayTitle}`}
                      fill
                      className="object-cover"
                      style={c.imgStyle}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className="absolute bottom-3 left-4 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: accentColor, color: iconColor }}
                    >
                      {c.label}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#2D2D2D] text-base mb-2 leading-snug">{c.title}</h3>
                    <p className="text-sm text-[#545454] leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── VOORBEREIDING IS ALLES ── */}
      {event.conditions && (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-5">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Voorbereiding is alles</p>
              <div className="flex flex-col sm:flex-row gap-5 mb-6">
                {forWho && (
                  <div className="border-l-2 border-[#EEBE3D] pl-4">
                    <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">Voor wie</p>
                    <p className="text-sm text-[#545454] leading-snug">{forWho}</p>
                  </div>
                )}
                {range && (
                  <div className="border-l-2 border-[#EEBE3D] pl-4">
                    <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">Groepsgrootte</p>
                    <p className="text-sm text-[#545454]">{range}</p>
                  </div>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
                Randvoorwaarden voor een geslaagde online {shortTitle.toLowerCase()}.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {event.conditions.map((c, i) => (
                <div key={i} className="bg-white rounded p-6 shadow-sm border border-[#EBEBEB]">
                  <p className="text-[#EEBE3D] text-3xl font-bold leading-none mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{c.title}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {event.faq && (
        <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
              Veelgestelde vragen
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {event.faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {event.faqMore && event.faqMore.length > 0 && (
              <details className="group max-w-4xl mx-auto mt-10">
                <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
                  <span className="group-open:hidden">Meer antwoorden?</span>
                  <span className="hidden group-open:inline">Minder antwoorden</span>
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#E0E0E0]">
                  {event.faqMore.map((item) => (
                    <div key={item.q}>
                      <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                      <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        </section>
      )}

      {/* ── GERELATEERDE FORMATS ── */}
      {relatedFormats.length > 0 && (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Gerelateerde event formats</p>
              <h2 className="text-2xl font-bold text-[#2D2D2D] leading-snug">
                Misschien past dit ook - of zelfs beter.
              </h2>
            </div>
            <div className="flex flex-wrap gap-6 mb-8">
              {relatedFormats.map((f) => {
                const RelIcon = f.Icon;
                return (
                  <Link
                    key={f.slug}
                    href={`/nl/events/${f.slug}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <div
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center mb-2 group-hover:scale-[1.06] transition-transform duration-200"
                      style={{ background: f.bg, boxShadow: "0 4px 14px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.07)" }}
                    >
                      {f.iconSrc ? (
                        <Image
                          src={f.iconSrc}
                          alt=""
                          fill
                          className="object-cover transition-opacity duration-200 group-hover:opacity-0"
                        />
                      ) : (
                        <RelIcon
                          className={`w-12 h-12 sm:w-14 sm:h-14 ${f.ic} transition-opacity duration-200 group-hover:opacity-0`}
                          strokeWidth={1}
                        />
                      )}
                      {f.desc && (
                        <div
                          className="absolute inset-0 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ backgroundColor: "rgba(0,0,0,0.52)" }}
                        >
                          <p className="text-white text-[9px] leading-snug font-medium text-center">{f.desc}</p>
                        </div>
                      )}
                    </div>
                    <p className="font-bold text-[#2D2D2D] text-xs leading-snug group-hover:text-[#28A8AA] transition-colors max-w-[110px]">
                      {f.title}
                    </p>
                  </Link>
                );
              })}
            </div>
            <Link
              href="/nl/events#formats"
              className="text-[#28A8AA] text-sm font-bold hover:underline"
            >
              Bekijk alle event formats →
            </Link>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CTABlock />

    </div>
  );
}
