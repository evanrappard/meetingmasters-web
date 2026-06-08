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
  cases?: { label: string; title: string; body: string; img?: string }[];
  faq?: { q: string; a: string }[];
  outcomeSummary?: string;
}

const EVENT_DATA: Record<string, EventData> = {

  /* ── KOERS & BESLUITVORMING ── */

  strategiedagen: {
    title: "Online strategiedag",
    bg: "radial-gradient(circle at 38% 38%, #6CCECE, #38BCBC)",
    iconSrc: "/images/icons/strategiedagen.png",
    Icon: Target, ic: "text-white",
    tagline: "Een dag die leidt tot besluiten en richting — niet alleen tot presentaties.",
    intro:
      "Wij ontwerpen online strategiedagen waarbij deelnemers niet passief naar presentaties kijken, maar actief bijdragen aan de uitkomst. Van vraagstelling tot draagvlak — wij begeleiden het hele traject, technisch én inhoudelijk.",
    outcomes: [
      { title: "Heldere richting", body: "Aan het einde van de dag weet iedereen wat er besloten is en waarom." },
      { title: "Breed draagvlak", body: "De koers wordt gedragen — niet alleen door de top, maar door het hele team." },
      { title: "Betrokken team", body: "Medewerkers begrijpen waar de organisatie naartoe gaat en voelen zich onderdeel van het verhaal." },
    ],
    forWho: "Directieteams, managementlagen, strategische programma's",
    range: "50–300 deelnemers",
    steps: [
      { title: "Intake", body: "We leren uw organisatie, uw groep en het vraagstuk kennen." },
      { title: "Ontwerp", body: "Agenda, plenaire sessies, breakouts en besluitvormingsmomenten op maat." },
      { title: "Repetitie", body: "Technische doorloop met sprekers, hosts en stakeholders." },
      { title: "Live productie", body: "Volledig begeleid: techniek én inhoudelijke facilitatie." },
    ],
    related: ["townhall", "all-hands", "brainstormen", "conferentie"],
    validation: {
      headline: "Een online strategiedag werkt — als het goed is opgezet.",
      items: [
        {
          title: "Duurzaam en bereikbaar",
          body: "Geen reistijd, geen locatiekosten — deelnemers vanuit meerdere kantoren of landen loggen gewoon in. Online strategiedagen schalen zonder logistieke hoofdpijn.",
        },
        {
          title: "Participatief en betrokken",
          body: "Tools als Mentimeter en Wooclap maken anoniem stemmen en prioriteren laagdrempeliger dan in een zaal. Meer stemmen, eerlijkere input, betere besluiten.",
        },
        {
          title: "Inspirerend en doelgericht",
          body: "Met de juiste meeting design ontstaan scherpe, gefocuste sessies zonder uitloop. Online werkt — mits doordacht opgezet, en dat is precies ons vak.",
        },
      ],
    },
    conditions: [
      {
        title: "Helder strategisch doel",
        body: "Wat moet er aan het einde van de dag besloten of bepaald zijn? Zonder helder doel wordt een strategiedag een gesprek — niet een richting.",
      },
      {
        title: "Meeting design dat besluiten mogelijk maakt",
        body: "Niet alleen presentaties, maar werkvormen die echt bijdragen: prioriteringsronden, breakouts per thema, plenaire synthese. De opbouw van de dag bepaalt de uitkomst.",
      },
      {
        title: "Begeleiding op techniek én inhoud",
        body: "Een goede moderator houdt het tempo erin, geeft ruimte aan alle stemmen en stuurt bij als de groep verzandt. Dat maakt het verschil tussen een goed gesprek en een helder besluit.",
      },
    ],
    cases: [
      {
        label: "Zorginstelling",
        title: "80 leidinggevenden bepalen de koers voor 2025",
        body: "Een grote zorginstelling wilde haar jaarlijkse strategiedag online houden zonder in te leveren op diepgang. Wij ontwierpen een dag met plenaire sessies en twaalf parallelle breakouts — drie strategische prioriteiten vastgesteld, breed gedragen.",
        img: "/images/events-bijeenkomst.webp",
      },
      {
        label: "Multinational",
        title: "Vijf kantoren, één roadmap",
        body: "Een multinational met teams in vijf landen wilde één gedeeld strategisch kader opbouwen. Wij verzorgden een Engelstalige dag met simultane facilitatie over meerdere tijdzones — één roadmap voor de komende twee jaar.",
        img: "/images/events-bijeenkomst.webp",
      },
      {
        label: "Non-profit",
        title: "Jaarplan in één dag, volledig online",
        body: "Een non-profit directieteam van twintig mensen wilde het jaarplan in één dag vaststellen zonder fysiek samen te komen. Met een compact en creatief programma lukte dat — volledig gedragen door het hele team.",
        img: "/images/events-bijeenkomst.webp",
      },
    ],
    faq: [
      {
        q: "Hoe lang duurt een online strategiedag?",
        a: "Meestal een volle dag van zes tot acht uur, of een intensieve halve dag van vier uur. De duur hangt af van het aantal vraagstukken en de gewenste diepgang.",
      },
      {
        q: "Hoeveel deelnemers kan ik uitnodigen?",
        a: "Wij begeleiden strategiedagen van twintig tot driehonderd deelnemers. Boven de vijftig werken wij altijd met parallelle breakout-sessies om de diepgang te bewaken.",
      },
      {
        q: "Wat hebben deelnemers nodig?",
        a: "Een laptop of tablet, een stabiele internetverbinding en een rustige werkplek. Wij sturen deelnemers een heldere instructie vooraf en zijn beschikbaar voor technische vragen.",
      },
      {
        q: "Wat doet MeetingMasters precies tijdens de dag?",
        a: "Wij verzorgen de volledige technische productie én de inhoudelijke facilitatie: platform beheren, sprekers begeleiden, breakouts runnen en het besluitvormingsproces bewaken.",
      },
      {
        q: "Hoe ver van tevoren moeten we boeken?",
        a: "Voor een enkelvoudige strategiedag adviseren wij minimaal drie tot vier weken. Voor complexere trajecten met meerdere sessies liefst zes weken of meer.",
      },
      {
        q: "Wat kost een online strategiedag?",
        a: "De investering hangt af van de schaal, het programma en de gewenste ondersteuning. Wij stellen altijd een maatwerkaanbod op — vraag vrijblijvend een offerte aan en wij komen snel bij u terug.",
      },
    ],
    outcomeSummary: "Voor een heldere richting, breed draagvlak en een betrokken team.",
  },

  townhall: {
    title: "Online townhall",
    bg: "radial-gradient(circle at 38% 38%, #ADB4A4, #989F8F)",
    iconSrc: "/images/icons/townhall.png",
    Icon: Mic2, ic: "text-white",
    tagline: "De hele organisatie bijeen — open, transparant en professioneel geproduceerd.",
    intro:
      "Een online townhall is het moment waarop leiderschap en medewerkers direct met elkaar in gesprek gaan. Wij produceren townhalls waarbij het geen eenrichtingsuitzending is maar een echte ontmoeting: met live Q&A, polls en de ruimte voor eerlijke vragen.",
    outcomes: [
      { title: "Één lijn in de organisatie", body: "Iedereen weet waar het naartoe gaat en begrijpt de beslissingen die zijn genomen." },
      { title: "Medewerkers voelen zich gehoord", body: "Geen eenrichtingsverkeer, maar een echte dialoog — met ruimte voor eerlijke vragen." },
      { title: "Soepel verloop", body: "Professioneel geproduceerd, ook met honderden deelnemers tegelijk." },
    ],
    forWho: "Directies, communicatieteams, grote organisaties",
    range: "100–1000 deelnemers",
    steps: [
      { title: "Intake", body: "Agenda, sprekers, boodschappen en technische schaalvereisten." },
      { title: "Ontwerp", body: "Plenaire structuur, interactiemomenten en Q&A-opzet." },
      { title: "Repetitie", body: "Volledige technische doorloop met alle sprekers en hosts." },
      { title: "Live productie", body: "Professioneel geproduceerd van begin tot eind." },
    ],
    related: ["all-hands", "strategiedagen", "alv", "webinar"],
  },

  "all-hands": {
    title: "Online all-hands",
    bg: "radial-gradient(circle at 38% 38%, #F8D84A, #EEBE3D)",
    Icon: Megaphone, ic: "text-[#696758]",
    tagline: "Open gesprek tussen directie en medewerkers — transparant, live en met echte betrokkenheid.",
    intro:
      "Bij een all-hands meeting staat openheid centraal: medewerkers kunnen vragen stellen, meedenken en hun mening geven. Wij ontwerpen sessies waarbij dit echt gebeurt — niet als façade maar als oprechte dialoog.",
    outcomes: [
      { title: "Betrokken medewerkers", body: "Mensen voelen zich gehoord en serieus genomen — geen theater, maar oprecht contact." },
      { title: "Vertrouwen in leiderschap", body: "Openheid en transparantie versterken het vertrouwen in de richting die de organisatie inslaat." },
      { title: "Een update die beklijft", body: "Medewerkers weten wat er van hen gevraagd wordt en voelen de verbinding met het grotere verhaal." },
    ],
    forWho: "Directies, HR- en communicatieteams",
    range: "100–1000 deelnemers",
    steps: [
      { title: "Intake", body: "Boodschappen, vraagstukken en gewenste toon van het gesprek." },
      { title: "Ontwerp", body: "Programma met opening, updates, Q&A en interactiemomenten." },
      { title: "Repetitie", body: "Volledige technische doorloop met sprekers en hosts." },
      { title: "Live productie", body: "Professioneel geproduceerd — inclusief real-time moderatie." },
    ],
    related: ["townhall", "strategiedagen", "alv", "webinar"],
  },

  alv: {
    title: "Online ALV",
    bg: "radial-gradient(circle at 38% 38%, #C0D8D0, #A0C8C0)",
    Icon: Vote, ic: "text-[#4A6860]",
    tagline: "Uw Algemene Ledenvergadering — statutair correct, goed gestructureerd en toch levendig.",
    intro:
      "Een online Algemene Ledenvergadering vraagt om de juiste technische infrastructuur: stemmodules, aanwezigheidsregistratie, quorum-bewaking en een gestructureerde vragenronde. Wij regelen het allemaal — zodat uw bestuur zich volledig kan richten op de inhoud.",
    outcomes: [
      { title: "Statutair correct", body: "De vergadering voldoet aan alle wettelijke vereisten, inclusief quorum, stemprocedures en verslaglegging." },
      { title: "Actieve ledenbetrokkenheid", body: "Leden doen mee, stemmen en voelen dat hun stem er echt toe doet." },
      { title: "Probleemloze uitvoering", body: "Geen technische of organisatorische problemen — het bestuur kan zich volledig op de inhoud richten." },
    ],
    forWho: "Verenigingen, stichtingen, coöperaties",
    range: "50–600 deelnemers",
    steps: [
      { title: "Intake", body: "Agenda, stempunten, quorum-eisen en technische wensen." },
      { title: "Ontwerp", body: "Platform-inrichting, stemmingsmodule en vragenronde." },
      { title: "Repetitie", body: "Volledige technische doorloop met bestuur en hosts." },
      { title: "Live productie", body: "Wij draaien de vergadering technisch van begin tot eind." },
    ],
    related: ["townhall", "all-hands", "conferentie", "bewonersparticipatie"],
  },

  "team-ontwikkeling": {
    title: "Online teambuilding",
    bg: "radial-gradient(circle at 38% 38%, #F5BEC8, #EFA1AF)",
    Icon: UsersRound, ic: "text-[#696758]",
    tagline: "Teams die beter samenwerken — ook als ze ver van elkaar werken.",
    intro:
      "Online teambuilding vraagt om meer dan een leuke activiteit. Wij ontwerpen trajecten waarbij teams samen leren, reflecteren en experimenteren — met blijvend effect op samenwerking, communicatie en resultaat.",
    outcomes: [
      { title: "Betere samenwerking", body: "Het team communiceert effectiever en werkt soepeler samen — ook op afstand en onder druk." },
      { title: "Meer onderling begrip", body: "Teamleden leren elkaars werkstijl kennen en bouwen een sterkere vertrouwensband op." },
      { title: "Concrete afspraken", body: "De dag sluit af met afspraken over werkwijze die daadwerkelijk worden nageleefd." },
    ],
    forWho: "Teams, afdelingen, (project)managers",
    range: "10–50 deelnemers",
    steps: [
      { title: "Intake", body: "Teamdynamiek, uitdagingen en gewenste verandering." },
      { title: "Ontwerp", body: "Werkvormen, reflectiemomenten en teamoefeningen op maat." },
      { title: "Pilot", body: "Eerste sessie als startpunt van het traject." },
      { title: "Begeleiding", body: "Doorlopende ondersteuning bij het ontwikkeltraject." },
    ],
    related: ["ontwikkeltraject", "onboardingdag", "brainstormen", "escaperoom"],
  },

  ontwikkeltraject: {
    title: "Online training & workshop",
    bg: "radial-gradient(circle at 38% 38%, #3ABABA, #1E9898)",
    iconSrc: "/images/icons/trainingen-en-workshops.png",
    Icon: GraduationCap, ic: "text-white",
    tagline: "Leren en groeien in een online setting die écht werkt — niet alleen kijken, maar doen.",
    intro:
      "Een online training of workshop vraagt om meer dan video-colleges. Wij ontwerpen trajecten waarbij deelnemers actief leren: via interactie, oefening, reflectie en samenwerking.",
    outcomes: [
      { title: "Meetbaar leerresultaat", body: "Deelnemers leren en groeien aantoonbaar — niet alleen theorie maar ook toepassing in de praktijk." },
      { title: "Passend bij uw cultuur", body: "Het traject sluit aan bij de leerstijl en het tempo van uw organisatie." },
      { title: "Borging in de praktijk", body: "Geleerde vaardigheden worden meegenomen naar de werkplek en verankerd in het dagelijkse werk." },
    ],
    forWho: "L&D-teams, HR-afdelingen, opleidingsinstituten",
    range: "10–100 deelnemers per cohort",
    steps: [
      { title: "Intake", body: "Leerdoelen, doelgroep en beschikbare tijd." },
      { title: "Ontwerp", body: "Modulaire opbouw, werkvormen en digitale leeromgeving." },
      { title: "Pilot", body: "Testrun met eerste groep en bijsturing op basis van feedback." },
      { title: "Uitrol", body: "Volledige begeleiding per sessie of cohort." },
    ],
    related: ["team-ontwikkeling", "onboardingdag", "brainstormen", "webinar"],
  },

  brainstormen: {
    title: "Online brainstormen",
    bg: "radial-gradient(circle at 38% 38%, #FFEEC1, #F5D070)",
    Icon: Lightbulb, ic: "text-[#696758]",
    tagline: "Creatieve sessies die écht ideeën opleveren — ook als iedereen op afstand zit.",
    intro:
      "Online brainstormen vraagt om een andere aanpak dan in een fysieke ruimte. Wij ontwerpen sessies met de juiste energie, de juiste werkvormen en strakke begeleiding — zodat ideeën stromen en het beste naar boven komt.",
    outcomes: [
      { title: "Bruikbare ideeën", body: "Geen warrige post-it-wand, maar een gevulde ideeënbank met concrete en goed gedocumenteerde input." },
      { title: "Energie en creativiteit", body: "De juiste werkvormen brengen iedereen in de creatieve modus — ook wie zichzelf niet creatief noemt." },
      { title: "Duidelijke volgende stappen", body: "De brainstorm eindigt niet bij ideeën, maar met een concreet plan voor de vervolgstappen." },
    ],
    forWho: "Innovatieteams, marketingafdelingen, product- en strategie-teams",
    range: "10–100 deelnemers",
    steps: [
      { title: "Intake", body: "Wat is de uitdaging en wat moet de brainstorm opleveren?" },
      { title: "Ontwerp", body: "Creatieve werkvormen, digitale tools en een strakke tijdsstructuur." },
      { title: "Repetitie", body: "Technische doorloop en afstemming met facilitatoren." },
      { title: "Live productie", body: "Wij faciliteren de sessie van begin tot eind." },
    ],
    related: ["open-space", "world-cafe", "strategiedagen", "team-ontwikkeling"],
  },

  onboardingdag: {
    title: "Online onboardingdag",
    bg: "radial-gradient(circle at 38% 38%, #7A7868, #696758)",
    Icon: DoorOpen, ic: "text-white",
    tagline: "Een vliegende start voor nieuwe medewerkers — ook als ze overal vandaan inloggen.",
    intro:
      "De eerste indruk telt. Wij ontwerpen online onboardingdagen waarbij nieuwe medewerkers echt welkom worden geheten: ze leren de cultuur kennen, maken contact met collega's en begrijpen hoe de organisatie werkt.",
    outcomes: [
      { title: "Welkom en verbonden", body: "Nieuwe medewerkers voelen zich van dag één thuis — ook als ze nooit naar kantoor komen." },
      { title: "Helder beeld van de organisatie", body: "Cultuur, werkwijze en verwachtingen zijn duidelijk — geen verrassingen in de eerste weken." },
      { title: "Versnelde integratie", body: "Minder uitval in de eerste maanden doordat mensen snel de weg weten te vinden." },
    ],
    forWho: "HR-teams, L&D-afdelingen, groeiende organisaties",
    range: "10–100 nieuwe medewerkers per cohort",
    steps: [
      { title: "Intake", body: "Organisatiecultuur, doelgroep en inhoudelijke prioriteiten." },
      { title: "Ontwerp", body: "Programma met kennismaking, cultuuroverdracht en interactie." },
      { title: "Repetitie", body: "Technische doorloop met HR en gastpresentatoren." },
      { title: "Live productie", body: "Volledig begeleid — een dag die nieuwe medewerkers bijblijft." },
    ],
    related: ["team-ontwikkeling", "ontwikkeltraject", "brainstormen", "netwerkevent"],
  },

  bedrijfsfeest: {
    title: "Online bedrijfsfeest",
    bg: "radial-gradient(circle at 38% 38%, #D85E7A, #C64A60)",
    iconSrc: "/images/icons/bedrijfsfeest.png",
    Icon: Sparkles, ic: "text-white",
    tagline: "Een feest dat mensen écht bijblijft — ook als iedereen vanuit huis inlogt.",
    intro:
      "Een online bedrijfsfeest hoeft geen compromis te zijn. Games, live entertainment, escape rooms en sociale ruimtes — wij ontwerpen een avond die net zo memorabel is als een fysiek evenement.",
    outcomes: [
      { title: "Echte verbinding", body: "Geen awkward Zoom-borrel maar een avond die mensen écht bijblijft en waar ze naar uitkijken." },
      { title: "Passend bij uw cultuur", body: "Het feest voelt als uw organisatie — de juiste sfeer, het juiste niveau, het juiste gezelschap." },
      { title: "Een waardige afsluiter", body: "Of het nu een mijlpaal of een jaarlijkse traditie is — het moment krijgt de aandacht die het verdient." },
    ],
    forWho: "Teams, afdelingen, hele organisaties",
    range: "30–400 deelnemers",
    steps: [
      { title: "Intake", body: "Sfeer, schaal en wensen — wat past bij uw organisatie?" },
      { title: "Ontwerp", body: "Programma, games, entertainment en sociale ruimtes." },
      { title: "Repetitie", body: "Alles staat klaar, hosts zijn ingespeeld." },
      { title: "Live productie", body: "Wij runnen het feest volledig zodat u zelf ook kunt genieten." },
    ],
    related: ["kerstfeest", "escaperoom", "community-building", "netwerkevent"],
  },

  kerstfeest: {
    title: "Online kerstfeest",
    bg: "radial-gradient(circle at 38% 38%, #A83058, #882040)",
    Icon: Snowflake, ic: "text-white",
    tagline: "Een feest dat mensen echt leuk vinden — ook als de telefoon aan de keukentafel hangt.",
    intro:
      "Een online kerstborrel hoeft geen compromis te zijn. Wij ontwerpen een avond vol energie, lachen en echte verbinding: met escape rooms, live entertainment, quiz-games en sociale ruimtes waar mensen vrij ronddwalen.",
    outcomes: [
      { title: "Echte gezelligheid", body: "Geen verplicht nummertje maar een avond die mensen écht leuk vinden en lang navertellen." },
      { title: "Passend bij uw organisatie", body: "De sfeer, het niveau en het programma passen bij wie u bent als bedrijf." },
      { title: "Een memorabel einde van het jaar", body: "Een waardige afsluiter die mensen laat voelen dat ze gewaardeerd worden." },
    ],
    forWho: "Teams, afdelingen, hele organisaties",
    range: "30–500 deelnemers",
    steps: [
      { title: "Intake", body: "Sfeer, schaal en wensen — wat past bij uw organisatie en cultuur?" },
      { title: "Ontwerp", body: "Programma met games, entertainment, sociale ruimtes en surprises." },
      { title: "Repetitie", body: "Alles staat klaar, hosts zijn ingespeeld op de avond." },
      { title: "Live productie", body: "Wij runnen het feest volledig zodat u ook zelf kunt genieten." },
    ],
    related: ["bedrijfsfeest", "escaperoom", "community-building", "team-ontwikkeling"],
  },

  escaperoom: {
    title: "Online escape room",
    bg: "radial-gradient(circle at 38% 38%, #7AAFC8, #4A85A8)",
    Icon: Lock, ic: "text-white",
    tagline: "Teambuilding met hoge betrokkenheid — spannend, laagdrempelig en volledig online.",
    intro:
      "Onze online escape rooms zijn ontworpen voor teams die willen samenwerken, lachen en iets beleven. Van EscapeMasters tot het cybersecurity-thema R@venHack — formats die passen bij elk doel en elke groep.",
    outcomes: [
      { title: "Samenwerken onder druk", body: "Teams ontdekken elkaars kwaliteiten in een spannende, laagdrempelige omgeving." },
      { title: "Hoge betrokkenheid", body: "Iedereen doet mee — ook de mensen die normaal op de achtergrond blijven." },
      { title: "Een gedeelde ervaring", body: "Een avontuur dat lang wordt naverteld en de onderlinge band versterkt." },
    ],
    forWho: "Teams, afdelingen, onboarding-groepen, evenementen",
    range: "10–200 deelnemers",
    steps: [
      { title: "Intake", body: "Groepsgrootte, doel en gewenst thema." },
      { title: "Ontwerp", body: "Format-keuze en eventuele maatwerk-elementen." },
      { title: "Briefing", body: "Deelnemers worden voorbereid, techniek staat klaar." },
      { title: "Live productie", body: "Volledig begeleid door onze game-masters." },
    ],
    related: ["bedrijfsfeest", "kerstfeest", "team-ontwikkeling", "brainstormen"],
  },

  "community-building": {
    title: "Online Community Building",
    bg: "radial-gradient(circle at 38% 38%, #FFF8E0, #FFEEC1)",
    iconSrc: "/images/icons/communitybuilding.png",
    Icon: Handshake, ic: "text-[#696758]",
    tagline: "Een community bouwen die mensen écht verbindt — niet alleen bij elkaar in een groep zet.",
    intro:
      "Een sterke community ontstaat niet vanzelf — ook niet online. Wij ontwerpen bijeenkomsten en structuren die verbinding stimuleren, bijdragen belonen en de community laten groeien.",
    outcomes: [
      { title: "Actieve leden", body: "Mensen nemen deel, dragen bij en komen terug — de community leeft." },
      { title: "Echte verbinding", body: "Leden bouwen relaties op met anderen die dezelfde doelen en interesses delen." },
      { title: "Een community die groeit", body: "Structuur en ritme zorgen dat de community zichzelf versterkt en nieuwe leden aantrekt." },
    ],
    forWho: "Ledenorganisaties, alumni, professionele netwerken, platforms",
    range: "50–500 deelnemers",
    steps: [
      { title: "Intake", body: "Wie zijn uw leden, wat bindt ze en wat wilt u opbouwen?" },
      { title: "Ontwerp", body: "Bijeenkomsten, interactiestructuren en community-ritme." },
      { title: "Lancering", body: "Eerste bijeenkomst als start van een terugkerende structuur." },
      { title: "Begeleiding", body: "Doorlopende ondersteuning bij opbouw en beheer." },
    ],
    related: ["bedrijfsfeest", "kerstfeest", "netwerkevent", "klankbordgroep"],
  },

  bewonersparticipatie: {
    title: "Online bewonersparticipatie",
    bg: "radial-gradient(circle at 38% 38%, #52C4C4, #28A8AA)",
    iconSrc: "/images/icons/bewonersparticipatie.png",
    Icon: MapPin, ic: "text-white",
    tagline: "Inwoners betrekken bij beleid, plannen en beslissingen — op een manier die echt werkt.",
    intro:
      "Participatietrajecten zijn pas waardevol als bewoners het gevoel hebben dat hun stem er toe doet. Wij ontwerpen online sessies waarbij mensen actief meedenken en meepraten — van buurtoverleg tot stadsbrede consultatie.",
    outcomes: [
      { title: "Bewoners voelen zich gehoord", body: "Niet alleen uitgenodigd, maar echt betrokken — hun inbreng telt en wordt zichtbaar teruggekoppeld." },
      { title: "Bruikbare beleidsinput", body: "Goed gedocumenteerde inzichten die direct bruikbaar zijn voor uw plannen of beslissingen." },
      { title: "Vertrouwen in het proces", body: "Een transparante aanpak die het vertrouwen in de overheid of organisatie versterkt." },
    ],
    forWho: "Gemeenten, provincies, woningcorporaties, projectontwikkelaars",
    range: "30–500 deelnemers",
    steps: [
      { title: "Intake", body: "Wat is het vraagstuk, wie zijn de bewoners en wat moet dit traject opleveren?" },
      { title: "Ontwerp", body: "Format, gespreksstructuur, interactiemomenten en documentatiemethode op maat." },
      { title: "Repetitie", body: "Technische doorloop met hosts en moderatoren." },
      { title: "Live productie", body: "Volledig begeleid — wij zorgen dat iedereen mee kan doen." },
    ],
    related: ["klankbordgroep", "focusgroep", "world-cafe", "alv"],
  },

  klankbordgroep: {
    title: "Online klankbordgroep",
    bg: "radial-gradient(circle at 38% 38%, #B0B8A8, #989F8F)",
    iconSrc: "/images/icons/netwerkbijeenkomst.png",
    Icon: MessageCircle, ic: "text-white",
    tagline: "Luisteren naar de mensen die er het meest toe doen — gestructureerd en effectief.",
    intro:
      "Een klankbordgroep is een waardevolle manier om input te verzamelen, draagvlak te toetsen en relaties te onderhouden. Wij ontwerpen online sessies waarbij de klankbordfunctie écht tot zijn recht komt.",
    outcomes: [
      { title: "Waardevolle input", body: "Eerlijke feedback van een betrokken en diverse groep die weet wat er in de praktijk speelt." },
      { title: "Sterkere stakeholderrelaties", body: "Klankbordleden voelen zich serieus genomen en blijven actief betrokken." },
      { title: "Inzicht van buiten", body: "U hoort wat er leeft buiten de muren van uw organisatie — en dat is goud waard." },
    ],
    forWho: "Beleidsmakers, bestuurders, projectleiders met externe stakeholders",
    range: "10–50 deelnemers",
    steps: [
      { title: "Intake", body: "Doel, samenstelling van de groep en gewenste output." },
      { title: "Ontwerp", body: "Gespreksstructuur, vraagstukken en interactiemomenten." },
      { title: "Repetitie", body: "Technische doorloop met hosts." },
      { title: "Live productie", body: "Volledig begeleid en gedocumenteerd." },
    ],
    related: ["bewonersparticipatie", "focusgroep", "world-cafe", "open-space"],
  },

  focusgroep: {
    title: "Online focusgroep",
    bg: "radial-gradient(circle at 38% 38%, #D4DDD0, #B8C4B0)",
    Icon: ScanSearch, ic: "text-[#545454]",
    tagline: "Diepgaand onderzoek naar wat mensen écht denken — online, efficiënt en goed gefaciliteerd.",
    intro:
      "Een focusgroep geeft u inzicht in de belevingswereld van uw doelgroep — hun motieven, twijfels en wensen. Wij ontwerpen en faciliteren online focusgroepen waarbij deelnemers zich veilig genoeg voelen om eerlijk te zijn.",
    outcomes: [
      { title: "Diepgaand inzicht", body: "U leert wat uw doelgroep écht drijft, twijfelt en wil — niet wat ze zeggen te willen." },
      { title: "Rijke kwalitatieve data", body: "Inzichten die uw kwantitatief onderzoek aanvullen en verdiepen." },
      { title: "Directe toepasbaarheid", body: "Heldere conclusies die u direct kunt gebruiken voor beleid, product of communicatie." },
    ],
    forWho: "Onderzoekers, marketeers, beleidsmakers, productontwikkelaars",
    range: "6–20 deelnemers per groep",
    steps: [
      { title: "Intake", body: "Onderzoeksvraag, doelgroep en gewenste diepte van inzicht." },
      { title: "Ontwerp", body: "Gespreksguide, gespreksstructuur en digitale omgeving." },
      { title: "Werving", body: "Selectie en uitnodiging van de juiste deelnemers." },
      { title: "Facilitatie", body: "Volledig begeleid — inclusief verslag en analyse." },
    ],
    related: ["klankbordgroep", "bewonersparticipatie", "brainstormen", "world-cafe"],
  },

  "world-cafe": {
    title: "Online World Café",
    bg: "radial-gradient(circle at 38% 38%, #FFEEC1, #F5D070)",
    iconSrc: "/images/icons/worldcafe.png",
    Icon: Coffee, ic: "text-[#696758]",
    tagline: "Diepgaande gesprekken in kleine groepen — met grote groepen. Online.",
    intro:
      "Het World Café-format is ideaal voor het uitwisselen van kennis en het bouwen van gedeeld inzicht. Wij vertalen dit krachtige format naar een online setting — met tafelgesprekken, een rondgang en een plenaire oogst.",
    outcomes: [
      { title: "Diepgaande gesprekken", body: "Kleine groepen gaan echt de diepte in — ook over complexe of gevoelige vraagstukken." },
      { title: "Gedeeld inzicht", body: "Doordat iedereen bijdraagt, wordt de uitkomst breed gedragen." },
      { title: "Verbinding over grenzen heen", body: "Mensen praten met collega's of bewoners die ze anders nooit spreken." },
    ],
    forWho: "Organisaties die willen leren van en met elkaar",
    range: "30–200 deelnemers",
    steps: [
      { title: "Intake", body: "Centrale vraag, groepsgrootte en gewenste output." },
      { title: "Ontwerp", body: "Tafelindeling, vraagstelling per tafel en rondgangstructuur." },
      { title: "Repetitie", body: "Technische doorloop met tafelgastheren en -vrouwen." },
      { title: "Live productie", body: "Wij faciliteren het volledige World Café." },
    ],
    related: ["open-space", "brainstormen", "klankbordgroep", "bewonersparticipatie"],
  },

  webinar: {
    title: "Webinar",
    bg: "radial-gradient(circle at 38% 38%, #C64A60, #A83852)",
    Icon: Radio, ic: "text-white",
    tagline: "Webinars die mensen boeien — niet alleen zenden, maar echt verbinden.",
    intro:
      "Een webinar hoeft geen eenrichtingsuitzending te zijn. Wij ontwerpen interactieve webinars met polls, Q&A, breakouts en live demonstraties — zodat deelnemers actief meedoen en uw boodschap beklijft.",
    outcomes: [
      { title: "Betrokken deelnemers", body: "Geen passief publiek maar actieve deelnemers die vragen stellen, stemmen en reageren." },
      { title: "Een boodschap die beklijft", body: "Inhoud die echt landt — ondersteund door de juiste structuur en interactie." },
      { title: "Concrete opvolging", body: "Hogere conversie en betrokkenheid na afloop, doordat deelnemers echt meegedaan hebben." },
    ],
    forWho: "Marketing-, communicatie- en L&D-teams, kennisorganisaties",
    range: "50–1000 deelnemers",
    steps: [
      { title: "Intake", body: "Doel, doelgroep en gewenst interactieniveau." },
      { title: "Ontwerp", body: "Presentatiestructuur, interactiemomenten en technische set-up." },
      { title: "Repetitie", body: "Technische doorloop met sprekers en hosts." },
      { title: "Live productie", body: "Volledig begeleid, inclusief live Q&A en technische support." },
    ],
    related: ["conferentie", "townhall", "strategiedagen", "ontwikkeltraject"],
  },

  conferentie: {
    title: "Online conferentie",
    bg: "radial-gradient(circle at 38% 38%, #555C50, #404840)",
    iconSrc: "/images/icons/onlineconferenties.png",
    Icon: MonitorPlay, ic: "text-white",
    tagline: "Professionele conferenties voor grote groepen — interactief, scherp geproduceerd en breed bereikbaar.",
    intro:
      "Een online conferentie vraagt om een strakke technische productie én een inhoudelijke aanpak die deelnemers betrokken houdt. Wij verzorgen beide: van keynotes tot parallelle sessies, netwerkmomenten en live Q&A.",
    outcomes: [
      { title: "Professionele ervaring", body: "Deelnemers ervaren een kwalitatief hoogwaardige conferentie — ook vanuit huis." },
      { title: "Geïnspireerd en verbonden", body: "Keynotes, sessies en netwerkmomenten geven deelnemers iets mee dat beklijft." },
      { title: "Soepel op alle niveaus", body: "Van plenaire opening tot parallelle breakouts — alles loopt technisch en organisatorisch vlekkeloos." },
    ],
    forWho: "Brancheorganisaties, kennisinstellingen, grote bedrijven",
    range: "100–1000 deelnemers",
    steps: [
      { title: "Intake", body: "Programma, sprekers, sessiestructuur en technische eisen." },
      { title: "Ontwerp", body: "Platform, plenaire + parallelle sessies, netwerkmomenten." },
      { title: "Repetitie", body: "Volledige technische doorloop met alle sprekers en hosts." },
      { title: "Live productie", body: "Professionele productie van begin tot eind." },
    ],
    related: ["webinar", "townhall", "alv", "open-space"],
  },

  "open-space": {
    title: "Online Open Space",
    bg: "radial-gradient(circle at 38% 38%, #F5BEC8, #EFA1AF)",
    iconSrc: "/images/icons/openspace.png",
    Icon: Pin, ic: "text-[#696758]",
    tagline: "De agenda bepalen met de groep zelf — open, energiek en verrassend productief.",
    intro:
      "Open Space Technology is een krachtige methode voor grote groepen: de deelnemers bepalen zelf de agenda. Wie iets wil bespreken, opent een sessie. Wie geïnteresseerd is, sluit aan.",
    outcomes: [
      { title: "Een agenda die leeft", body: "Deelnemers bepalen zelf wat er besproken wordt — en dat geeft energie en eigenaarschap." },
      { title: "Onverwachte inzichten", body: "De gesprekken die plaatsvinden zijn vaak precies de gesprekken die al lang gevoerd hadden moeten worden." },
      { title: "Hoog eigenaarschap", body: "Wie bijdraagt aan de agenda, voelt verantwoordelijkheid voor de uitkomst." },
    ],
    forWho: "Organisaties die willen vernieuwen, leren of samenwerken",
    range: "30–300 deelnemers",
    steps: [
      { title: "Intake", body: "Centrale uitdaging of thema dat de groep bij elkaar brengt." },
      { title: "Ontwerp", body: "Platform-inrichting voor parallelle sessies en marketplace." },
      { title: "Briefing", body: "Deelnemers worden voorbereid op het Open Space-principe." },
      { title: "Live productie", body: "Wij faciliteren het volledige Open Space-event." },
    ],
    related: ["world-cafe", "brainstormen", "strategiedagen", "conferentie"],
  },

  netwerkevent: {
    title: "Online netwerkevent",
    bg: "radial-gradient(circle at 38% 38%, #4ABABA, #28A0A0)",
    Icon: Network, ic: "text-white",
    tagline: "Mensen verbinden die elkaar nog niet kennen — online, laagdrempelig en met echte gesprekken.",
    intro:
      "Online netwerken heeft een slechte naam — en dat klopt, als het slecht is opgezet. Wij ontwerpen netwerkevenementen waarbij ontmoeting écht plaatsvindt: via slimme matchmaking, gestructureerde gesprekken en een omgeving die toevallige ontmoetingen stimuleert.",
    outcomes: [
      { title: "Nieuwe waardevolle contacten", body: "Deelnemers verlaten het event met contacten die er écht toe doen — geen uitwisseling van visitekaartjes." },
      { title: "Een netwerkevent dat lekker voelt", body: "Laagdrempelig, goed gestructureerd en met de juiste sfeer — ook online." },
      { title: "Verbinding die verder gaat", body: "De relaties die tijdens het event worden gelegd, worden ook ná het event voortgezet." },
    ],
    forWho: "Brancheorganisaties, alumni, platforms, HR-teams",
    range: "30–300 deelnemers",
    steps: [
      { title: "Intake", body: "Doelgroep, doel van het netwerken en gewenste sfeer." },
      { title: "Ontwerp", body: "Matchmaking-structuur, gespreksformats en platform-keuze." },
      { title: "Repetitie", body: "Technische doorloop met hosts en moderatoren." },
      { title: "Live productie", body: "Volledig begeleid — ook de informele momenten." },
    ],
    related: ["community-building", "conferentie", "webinar", "klankbordgroep"],
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

  const shortTitle = title.replace(/^Online /i, "");
  const iconColor = ic === "text-white" ? "#FFFFFF" : "#696758";
  const accentColor = bg.match(/#[A-Fa-f0-9]{6}/g)?.[1] ?? "#28A8AA";

  const relatedFormats = related
    .map((s) => eventFormats.find((f) => f.slug === s))
    .filter((f): f is (typeof eventFormats)[number] => Boolean(f));

  const faqSchema = event.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: event.faq.map((item) => ({
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
        <div className="relative w-full h-[44vw] min-h-[300px] max-h-[520px]">
          <Image
            src="/images/events-bijeenkomst.webp"
            alt={`${title} — MeetingMasters Online Events`}
            fill priority
            className="object-cover object-center"
            style={{ filter: "contrast(1.05) saturate(1.1) brightness(0.78)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/90 via-[#2D2D2D]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-12 sm:pb-16">
              <div className="max-w-[600px]">
                <Link
                  href="/nl/events#formats"
                  className="text-[#28A8AA]/80 text-xs font-bold tracking-widest uppercase mb-4 inline-block hover:text-[#28A8AA] transition-colors"
                >
                  ← Event Formats
                </Link>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-3">
                  {title}
                </h1>
                {event.outcomeSummary && (
                  <p className="text-[#EEBE3D] text-sm font-semibold tracking-wide mb-7">
                    {event.outcomeSummary}
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
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Een actieve format</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-4 max-w-[680px]">
                {event.validation.headline}
              </h2>
              <p className="text-[#545454] leading-relaxed">{intro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {event.validation.items.map((item, i) => (
                <div key={i}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                    style={{ background: bg, boxShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
                  >
                    <Check className="w-5 h-5" style={{ color: iconColor }} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{item.title}</h3>
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
                  href="/nl/contact"
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
                    <Image src={iconSrc} alt={title} fill className="object-cover" />
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

      {/* ── VOORBEREIDING IS ALLES ── */}
      {event.conditions && (
        <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Voorbereiding is alles</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-6">
                Randvoorwaarden voor een geslaagde online {shortTitle.toLowerCase()}.
              </h2>
              <div className="flex flex-col sm:flex-row gap-5">
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {event.conditions.map((c, i) => (
                <div key={i} className="bg-white rounded p-6 shadow-sm">
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

      {/* ── IN DE PRAKTIJK ── */}
      {event.cases && (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">In de praktijk</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
                Drie voorbeelden. Veel ervaring.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {event.cases.map((c, i) => (
                <div key={i} className="bg-white rounded overflow-hidden shadow-sm">
                  <div className="relative h-44">
                    <Image
                      src={c.img ?? "/images/events-bijeenkomst.webp"}
                      alt={c.title}
                      fill
                      className="object-cover"
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
            <div className="mt-10 pt-8 border-t border-[#EBEBEB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[#545454] text-base">Wilt u weten of dit event format bij uw situatie past?</p>
              <Link
                href="/nl/contact"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors flex-shrink-0"
              >
                Meer weten →
              </Link>
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
                Misschien past dit ook bij u.
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
                          alt={f.title}
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
