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
  faqMore?: { q: string; a: string }[];
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
    range: "10–300 deelnemers",
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
      { q: "Hoe lang duurt een online strategiedag?", a: "Een online strategiedag duurt meestal een halve dag (3 tot 4 uur) of een volledige dag (6 tot 8 uur). Welke opzet het beste werkt, hangt af van het aantal onderwerpen, de gewenste diepgang en de grootte van de groep." },
      { q: "Hoeveel deelnemers kunnen meedoen?", a: "Wij begeleiden online strategiedagen van 10 tot ruim 300 deelnemers. In alle soorten groepen werken we met breakout-sessies en interactieve werkvormen zodat iedereen actief kan bijdragen." },
      { q: "Welke werkvormen gebruiken jullie?", a: "Dat hangt af van het doel van de dag. We werken bijvoorbeeld met breakoutgesprekken, interactieve canvassen, World Café, Open Space, prioriteringssessies, stemrondes en besluitvormende werkvormen. De werkvorm volgt altijd het vraagstuk, niet andersom." },
      { q: "Wat doet MeetingMasters tijdens een online strategiedag?", a: "Wij helpen bij het ontwerpen en faciliteren van het programma, we verzorgen de technische productie en begeleiden sprekers, workshopleiders en deelnemers. Zo kan iedereen in de groep maximaal bijdragen en zich volledig richten op de inhoud en de besluiten die genomen moeten worden." },
      { q: "Hoe ver van tevoren moeten we boeken?", a: "Voor een online strategiedag adviseren wij om minimaal drie tot vier weken voorbereidingstijd aan te houden. Voor grotere trajecten of complexe programma's is zes tot acht weken vaak wenselijk." },
      { q: "Wat kost een online strategiedag?", a: "De investering hangt af van de groepsgrootte, de voorbereiding, het programma en de gewenste begeleiding. Daarom maken wij altijd een voorstel op maat. Neem gewoon even contact met ons op!" },
    ],
    faqMore: [
      { q: "Kan een online strategiedag ook hybride plaatsvinden?", a: "Ja. Het is mogelijk om een online strategiedag hybride te laten plaatsvinden. Dat vraagt echter zorgvuldig design. Gewoon een camera en een scherm bijplaatsen werkt hier niet. Wij ontwerpen programma's zo dat beide groepen, de mensen online en de mensen op locatie, gelijkwaardig kunnen deelnemen." },
      { q: "Welke software gebruiken jullie?", a: "Wij kiezen altijd voor interactieve platforms, omdat betrokkenheid essentieel is voor een succesvolle strategiedag. We hebben ervaring met Zoom, Zoom Events en Teams. Maar we laten u ook heel graag SpatialChat zien: een verrassend alternatief voor meer interactie. De uiteindelijke keuze hangt af van het doel van de bijeenkomst en de wensen van de organisatie." },
      { q: "Hoe bereiden deelnemers zich voor?", a: "Deelnemers ontvangen vooraf duidelijke instructies. Soms vragen we deelnemers ook om vooraf input aan te leveren, zodat de beschikbare tijd optimaal benut wordt. Uiteindelijk is iedere sessie een kruispunt in een groter traject. Daar spelen wij op in." },
      { q: "Werkt een online strategiedag ook voor directieteams?", a: "Juist voor directieteams kan een online strategiedag goed werken. De online omgeving maakt het eenvoudig om gericht samen te werken, experts aan te laten sluiten en resultaten direct vast te leggen. En ook directieteams zijn wel eens toe aan iets anders dan de traditionele Teams vergadering. Daar spelen wij actief op in." },
      { q: "Kunnen jullie helpen bij besluitvorming?", a: "Ja. Veel strategiedagen draaien niet alleen om ideeën verzamelen, maar ook om keuzes maken. Met goed opgeleide facilitators gebruiken we werkvormen die helpen om prioriteiten te bepalen en gezamenlijk besluiten te nemen." },
      { q: "Wat gebeurt er na afloop van de strategiedag?", a: "De opbrengsten worden vastgelegd en overzichtelijk gedeeld. Indien gewenst ondersteunen wij ook bij vervolgsessies of de verdere uitwerking van de gemaakte keuzes." },
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
    range: "30–600 deelnemers",
    steps: [
      { title: "Intake", body: "Agenda, sprekers, boodschappen en technische schaalvereisten." },
      { title: "Ontwerp", body: "Plenaire structuur, interactiemomenten en Q&A-opzet." },
      { title: "Repetitie", body: "Volledige technische doorloop met alle sprekers en hosts." },
      { title: "Live productie", body: "Professioneel geproduceerd van begin tot eind." },
    ],
    related: ["all-hands", "strategiedagen", "alv", "webinar"],
    faq: [
      { q: "Hoe lang duurt een online townhall?", a: "Een online townhall duurt meestal tussen de 60 en 120 minuten. Dat biedt voldoende ruimte voor updates, interactie en vragen zonder dat de aandacht verslapt." },
      { q: "Hoeveel medewerkers kunnen deelnemen?", a: "Wij begeleiden online townhalls van 30 tot ruim 600 deelnemers. Ook bij grote groepen blijft interactie mogelijk." },
      { q: "Hoe voorkomen jullie dat een townhall eenrichtingsverkeer wordt?", a: "Door interactie bewust onderdeel van het programma te maken. En door niet bang te zijn om grote groepen in kleinere eenheden op te delen. Mensen slaan informatie beter op als ze er zelf mee aan de slag mogen. Dus naast live vragen, polls en stemmingen, werken we ook aan formats voor het verwerken en verrijken van de gepresenteerde inzichten." },
      { q: "Kunnen medewerkers anoniem vragen stellen?", a: "Dialoog en contact staan centraal in alles wat wij doen. Wij werken slechts bij uitzondering met anonieme vragen, die in dat geval van te voren zijn opgehaald." },
      { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Zoom Events en Teams. Maar we laten u ook heel graag SpatialChat zien: een verrassend alternatief voor meer interactie. De uiteindelijke keuze hangt af van het doel van de bijeenkomst en de wensen van de organisatie." },
      { q: "Wat kost een online townhall?", a: "De investering hangt af van het aantal deelnemers, de gewenste productie en de mate van ondersteuning. Daarom maken wij graag een voorstel op maat." },
    ],
    faqMore: [
      { q: "Wat is het verschil tussen een townhall en een webinar?", a: "Een webinar richt zich meestal op kennisoverdracht. Een townhall draait vaker om interne communicatie, betrokkenheid en dialoog tussen medewerkers en management." },
      { q: "Kan een townhall hybride plaatsvinden?", a: "Ja. Veel organisaties combineren een publiek op locatie met online deelnemers. Vaak gaat dit ten koste van de betrokkenheid en de interactie. Wij geven daarom de voorkeur aan eenduidige keuzes: iedereen online. Of iedereen offline." },
      { q: "Kunnen medewerkers vooraf vragen insturen?", a: "Ja. Dat levert vaak betere en meer doordachte vragen op en helpt bij de voorbereiding van sprekers." },
      { q: "Kunnen we de sessie opnemen?", a: "Ja. De opname kan achteraf worden gedeeld met medewerkers die niet aanwezig konden zijn." },
      { q: "Is een moderator noodzakelijk?", a: "Wij raden dit sterk aan. Een moderator bewaakt het tempo, zorgt voor interactie en helpt de juiste vragen op het juiste moment aan bod te laten komen. Vaak levert de klant zelf een (interne) moderator aan en verzorgen wij de technische host. Wij kunnen echter ook een facilitator leveren." },
      { q: "Hoe vaak organiseren organisaties een townhall?", a: "Veel organisaties organiseren een townhall per kwartaal of maandelijks als vast communicatiemoment. Steeds meer partijen doen dit online, om reistijd, tijd en kosten te besparen. Dat kan ook, nu er formats zijn die meer doen dan alleen maar zenden." },
    ],
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
    range: "50–500 deelnemers",
    steps: [
      { title: "Intake", body: "Boodschappen, vraagstukken en gewenste toon van het gesprek." },
      { title: "Ontwerp", body: "Programma met opening, updates, Q&A en interactiemomenten." },
      { title: "Repetitie", body: "Volledige technische doorloop met sprekers en hosts." },
      { title: "Live productie", body: "Professioneel geproduceerd — inclusief real-time moderatie." },
    ],
    related: ["townhall", "strategiedagen", "alv", "webinar"],
    faq: [
      { q: "Wat is het verschil tussen een all-hands en een townhall?", a: "De begrippen worden vaak door elkaar gebruikt. Een all-hands richt zich meestal op de hele organisatie en combineert updates, successen, strategie en vragen vanuit medewerkers." },
      { q: "Hoeveel mensen kunnen deelnemen?", a: "Wij begeleiden all-hands bijeenkomsten van ongeveer 50 tot ruim 500 deelnemers." },
      { q: "Hoe houden jullie een grote groep betrokken?", a: "Met interactieve werkvormen, live vragen, polls, breakouts, spellen en een helder programma waarin medewerkers actief worden betrokken." },
      { q: "Hoe vaak organiseren organisaties een all-hands?", a: "Veel organisaties kiezen voor een maandelijkse of kwartaalbijeenkomst om medewerkers betrokken te houden bij ontwikkelingen binnen de organisatie." },
      { q: "Kunnen medewerkers vragen stellen?", a: "Ja. Medewerkers kunnen vragen stellen tijdens de bijeenkomst en vaak ook vooraf." },
      { q: "Wat kost een online all-hands?", a: "De investering hangt af van de omvang van de bijeenkomst en de gewenste ondersteuning. Wij maken hiervoor een voorstel op maat." },
    ],
    faqMore: [
      { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Zoom Events en Teams. Maar we laten u ook heel graag SpatialChat zien: een verrassend alternatief voor meer interactie. De uiteindelijke keuze hangt af van het doel van de bijeenkomst en de wensen van de organisatie." },
      { q: "Kunnen jullie de volledige productie verzorgen?", a: "Ja. Wij begeleiden het traject van ontwerp en voorbereiding tot uitvoering en nazorg." },
      { q: "Kan een all-hands hybride plaatsvinden?", a: "Ja. Zowel medewerkers op locatie als online deelnemers kunnen actief deelnemen." },
      { q: "Hoe lang duurt een all-hands?", a: "De meeste all-hands bijeenkomsten duren tussen de 60 en 180 minuten." },
      { q: "Kunnen we opnames delen?", a: "Ja. Opnames kunnen achteraf beschikbaar worden gesteld voor medewerkers die niet aanwezig waren." },
      { q: "Hoe bereiden sprekers zich voor?", a: "Wij begeleiden sprekers vooraf met een briefing, technische check en indien gewenst een repetitie." },
    ],
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
    range: "30–600 deelnemers",
    steps: [
      { title: "Intake", body: "Agenda, stempunten, quorum-eisen en technische wensen." },
      { title: "Ontwerp", body: "Platform-inrichting, stemmingsmodule en vragenronde." },
      { title: "Repetitie", body: "Volledige technische doorloop met bestuur en hosts." },
      { title: "Live productie", body: "Wij draaien de vergadering technisch van begin tot eind." },
    ],
    related: ["townhall", "all-hands", "conferentie", "bewonersparticipatie"],
    faq: [
      { q: "Is online stemmen toegestaan tijdens een ALV?", a: "Dat hangt af van uw statuten en de manier waarop de ALV is ingericht. Wij helpen organisaties bij het organiseren van een zorgvuldig en transparant stemproces." },
      { q: "Hoe bewaken jullie het quorum?", a: "Wij werken met VoteCompany, waarmee iedereen een unieke stemcode krijgt en die stemgedrag registreert. Dit helpt om gedurende de vergadering inzichtelijk te hebben of aan de voorwaarden voor besluitvorming wordt voldaan." },
      { q: "Kunnen leden vooraf stemmen?", a: "Dat is mogelijk wanneer de statuten dit toestaan en als u dat zo wenst. Wij kunnen verschillende stemvormen ondersteunen." },
      { q: "Hoeveel leden kunnen deelnemen?", a: "Wij begeleiden online ALV's van 30 tot ruim 600 deelnemers." },
      { q: "Wat kost een online ALV?", a: "De investering hangt af van het aantal deelnemers, de stemprocedures en de gewenste ondersteuning. Daarom maken wij altijd een voorstel op maat." },
    ],
    faqMore: [
      { q: "Welke stemmogelijkheden zijn er?", a: "Afhankelijk van de situatie kunnen we werken met open stemmingen, gesloten stemmingen en anonieme stemrondes. Daarbij kan gekozen worden voor gewogen stemmingen." },
      { q: "Welke software gebruiken jullie?", a: "Wij werken met Online Stemtool van VoteCompany. Voor informele stemmingen werken we ook met polling tools." },
      { q: "Kan een ALV hybride plaatsvinden?", a: "Ja. Een deel van de leden kan op locatie aanwezig zijn terwijl anderen online deelnemen." },
      { q: "Kunnen leden anoniem stemmen?", a: "Ja. Voor bepaalde stemmingen kan anoniem stemmen wenselijk of noodzakelijk zijn." },
      { q: "Hoe registreren jullie aanwezigheid?", a: "Aanwezigheid kan automatisch of handmatig worden geregistreerd, afhankelijk van de gekozen oplossing." },
      { q: "Krijgen we een stemrapportage achteraf?", a: "Ja. Indien gewenst leveren wij een overzicht van de stemresultaten en deelname." },
    ],
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
    range: "6–50 deelnemers",
    steps: [
      { title: "Intake", body: "Teamdynamiek, uitdagingen en gewenste verandering." },
      { title: "Ontwerp", body: "Werkvormen, reflectiemomenten en teamoefeningen op maat." },
      { title: "Pilot", body: "Eerste sessie als startpunt van het traject." },
      { title: "Begeleiding", body: "Doorlopende ondersteuning bij het ontwikkeltraject." },
    ],
    related: ["ontwikkeltraject", "onboardingdag", "brainstormen", "escaperoom"],
    faq: [
      { q: "Werkt teamontwikkeling online echt?", a: "Ja. Teams werken tegenwoordig vaak online samen. Dan is het logisch om ook online te oefenen, reflecteren en ontwikkelen." },
      { q: "Hoe groot mag een team zijn?", a: "Wij werken meestal met groepen van 6 tot ongeveer 50 deelnemers." },
      { q: "Is het een losse sessie of een traject?", a: "Beide zijn mogelijk. Veel organisaties kiezen voor een traject met meerdere bijeenkomsten." },
      { q: "Welke werkvormen gebruiken jullie?", a: "Dat varieert van reflectiegesprekken en simulaties tot interactieve oefeningen, spellen en teamdialogen." },
      { q: "Welke software gebruiken jullie?", a: "We kiezen altijd de omgeving die het beste aansluit bij het doel van het traject – maar geven de voorkeur aan SpatialChat, omdat hier veel in mogelijk is en omdat de context van een oefening of gesprek door de platformachtergronden echt verrijkt kunnen worden." },
      { q: "Wat kost online teamontwikkeling?", a: "Dat hangt af van de groepsgrootte, het aantal sessies en de gewenste begeleiding. Maar bel of mail gewoon even, we denken graag mee en geven dan ook een kostenplaatje af." },
    ],
    faqMore: [
      { q: "Wat is het verschil tussen teambuilding en teamontwikkeling?", a: "Teambuilding richt zich vaak op verbinding. Teamontwikkeling gaat een stap verder en kijkt ook naar samenwerking, rollen en resultaten." },
      { q: "Werkt dit ook voor hybride teams?", a: "Ja. Juist hybride teams hebben vaak baat bij expliciete aandacht voor samenwerking." },
      { q: "Kunnen jullie maatwerk ontwikkelen?", a: "Ja. Vrijwel ieder traject wordt specifiek ontworpen voor het team." },
      { q: "Kunnen jullie werken met teamanalyses?", a: "Ja. Bestaande teamanalyses of onderzoeken kunnen worden meegenomen." },
      { q: "Hoe meten jullie resultaat?", a: "Dat verschilt per traject. Vaak werken we met vooraf bepaalde doelen en evaluatiemomenten." },
      { q: "Kunnen meerdere teams tegelijk deelnemen?", a: "Ja. We begeleiden regelmatig trajecten met meerdere teams binnen één organisatie." },
    ],
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
    faq: [
      { q: "Hoe verschilt een online training van video-colleges?", a: "Bij ons leren deelnemers actief: via interactie, oefening, reflectie en samenwerking. Geen passief kijken, maar doen — dat is wat leerresultaat oplevert." },
      { q: "Hoe groot is een groep of cohort?", a: "Wij werken met tien tot honderd deelnemers per cohort, afhankelijk van het onderwerp en de gewenste interactie." },
      { q: "Kunnen jullie een bestaande training naar online vertalen?", a: "Ja. Wij herontwerpen uw inhoud naar een modulaire, interactieve online vorm — niet door de presentatie te delen, maar door de didactiek opnieuw op te bouwen." },
      { q: "Hoe borgen jullie dat het geleerde blijft hangen?", a: "Met een modulaire opbouw, oefening tussen de sessies door en reflectiemomenten die de stap naar de praktijk maken." },
      { q: "Wat kost een online training of workshop?", a: "De investering hangt af van de schaal, het programma en de gewenste ondersteuning. Wij stellen altijd een maatwerkaanbod op — vraag vrijblijvend een offerte aan en wij komen snel bij u terug." },
    ],
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
    faq: [
      { q: "Werkt online brainstormen echt?", a: "Ja. Online brainstormen levert vaak meer ideeën op dan fysieke sessies. Digitale tools maken het mogelijk dat iedereen tegelijk bijdraagt." },
      { q: "Hoeveel mensen kunnen meedoen?", a: "Wij begeleiden brainstorms van ongeveer 10 tot 100 deelnemers." },
      { q: "Wat houden we over aan de sessie?", a: "Een overzicht van ideeën, inzichten en prioriteiten. Alles wordt direct digitaal vastgelegd." },
      { q: "Hoe lang duurt een online brainstorm?", a: "Meestal tussen de 2 en 4 uur." },
      { q: "Welke tools gebruiken jullie?", a: "Liefst werken we in SpatialChat: een creatieve en zeer verrassende omgeving die het vrije gesprek beter maakt. Maar we hebben ook ruime ervaring met Zoom samen met interactieve canvassen zoals Miro." },
      { q: "Wat kost een online brainstorm?", a: "Dat hangt af van de groepsgrootte, voorbereiding en begeleiding. Vraag vooral even een offerte aan. Meestal valt het mee." },
    ],
    faqMore: [
      { q: "Kunnen jullie ideeën helpen prioriteren?", a: "Ja. Daarom bouwen we meestal een fase in waarin ideeën worden gewogen en geprioriteerd. Online prioriteren werkt makkelijker en sneller dan offline." },
      { q: "Kunnen deelnemers anoniem bijdragen?", a: "Nee, dat kan bij ons niet. Wij hechten aan open gesprekken en onze formats zijn erop gericht dat iedereen gezien en gehoord kan worden. Dat helpt beter om meer perspectieven boven tafel te krijgen dan anonimiteit." },
      { q: "Werkt online brainstormen ook voor grote groepen?", a: "Juist dan. Online kunnen veel mensen tegelijkertijd bijdragen." },
      { q: "Welke brainstormmethodes gebruiken jullie?", a: "Dat varieert van Liberating Structures tot World Café, Open Space vormen en eigen formats." },
      { q: "Kan een brainstorm hybride plaatsvinden?", a: "Ja. Maar dat vraagt zeer bewust ontwerp en betekent vaak bijna een verdubbeling van de voorbereidingstijd en de kosten." },
      { q: "Wat gebeurt er na afloop?", a: "Indien gewenst helpen wij bij het vertalen van ideeën naar concrete vervolgstappen." },
    ],
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
    faq: [
      { q: "Hoe maak je nieuwe medewerkers online welkom?", a: "Door ontmoeting centraal te zetten. Mensen onthouden collega's beter dan presentaties." },
      { q: "Hoeveel medewerkers kunnen deelnemen?", a: "Van ongeveer 10 tot ruim 100 nieuwe collega's per editie." },
      { q: "Kunnen jullie dit periodiek organiseren?", a: "Ja. Veel organisaties organiseren een onboardingdag per maand of kwartaal." },
      { q: "Wat hebben deelnemers nodig?", a: "Een laptop, internetverbinding en een rustige plek om deel te nemen." },
      { q: "Welke software gebruiken jullie?", a: "Dat hangt af van het programma en de wensen van de organisatie." },
      { q: "Wat kost een online onboardingdag?", a: "Dat hangt af van de omvang en opzet van het programma." },
    ],
    faqMore: [
      { q: "Kunnen managers deelnemen?", a: "Ja. Dat wordt vaak zelfs gewaardeerd." },
      { q: "Is onboarding ook hybride mogelijk?", a: "Ja. Mits bewust ontworpen." },
      { q: "Hoe stimuleren jullie kennismaking?", a: "Met werkvormen die mensen actief met elkaar in contact brengen." },
      { q: "Kunnen jullie internationale onboarding verzorgen?", a: "Ja. Wij begeleiden regelmatig internationale groepen." },
      { q: "Kunnen onderdelen worden opgenomen?", a: "Ja. Dat is vooral handig voor kennisoverdracht." },
      { q: "Is maatwerk mogelijk?", a: "Ja. Vrijwel iedere onboardingdag wordt op maat ontworpen." },
    ],
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
    range: "20–400 deelnemers",
    steps: [
      { title: "Intake", body: "Sfeer, schaal en wensen — wat past bij uw organisatie?" },
      { title: "Ontwerp", body: "Programma, games, entertainment en sociale ruimtes." },
      { title: "Repetitie", body: "Alles staat klaar, hosts zijn ingespeeld." },
      { title: "Live productie", body: "Wij runnen het feest volledig zodat u zelf ook kunt genieten." },
    ],
    related: ["kerstfeest", "escaperoom", "community-building", "netwerkevent"],
    faq: [
      { q: "Kan een online bedrijfsfeest echt leuk zijn?", a: "Ja. Mits het meer is dan een online borrel. De leukste online bedrijfsfeesten combineren ontmoeting, interactie en een gedeelde ervaring." },
      { q: "Hoeveel mensen kunnen deelnemen?", a: "Wij begeleiden online bedrijfsfeesten van ongeveer 20 tot ruim 400 deelnemers." },
      { q: "Welke activiteiten zijn mogelijk?", a: "Denk aan online escape rooms, quizzen, interactieve spellen, speeddates, entertainment, workshops of informele ontmoetingen." },
      { q: "Moeten deelnemers iets installeren?", a: "Bij dit soort sessies geven wij de voorkeur aan een vernieuwend platform waar gesprekken heel natuurlijk en makkelijker gaat. SpatialChat is superfeestelijk en werkt gewoon in de browser. U kunt gewoon een demo boeken om dat een keer te ervaren." },
      { q: "Wat kost een online bedrijfsfeest?", a: "Dat hangt af van het programma, de groepsgrootte en de gewenste begeleiding." },
    ],
    faqMore: [
      { q: "Kunnen internationale teams deelnemen?", a: "Ja. Online bedrijfsfeesten zijn juist zeer geschikt voor internationale organisaties." },
      { q: "Kunnen we eigen branding toevoegen?", a: "Ja. Regelmatig verwerken wij huisstijl, thema's en organisatie-specifieke elementen in het programma." },
      { q: "Zijn er competitieve spellen mogelijk?", a: "Ja. Veel groepen vinden een gezonde dosis competitie leuk, zolang plezier centraal blijft staan." },
      { q: "Kunnen jullie entertainment verzorgen?", a: "Ja. Wij werken regelmatig samen met artiesten, quizmasters en andere professionals." },
      { q: "Kunnen deelnemers elkaar vrij ontmoeten?", a: "Ja. Wij vinden informele ontmoeting vaak minstens zo belangrijk als het programma zelf." },
    ],
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
    range: "10–500 deelnemers",
    steps: [
      { title: "Intake", body: "Sfeer, schaal en wensen — wat past bij uw organisatie en cultuur?" },
      { title: "Ontwerp", body: "Programma met games, entertainment, sociale ruimtes en surprises." },
      { title: "Repetitie", body: "Alles staat klaar, hosts zijn ingespeeld op de avond." },
      { title: "Live productie", body: "Wij runnen het feest volledig zodat u ook zelf kunt genieten." },
    ],
    related: ["bedrijfsfeest", "escaperoom", "community-building", "team-ontwikkeling"],
    faq: [
      { q: "Hoe organiseer je een online kerstfeest?", a: "Een goed online kerstfeest combineert ontmoeting, ontspanning en een gezamenlijk moment. Het draait niet om zenden, maar om samen beleven." },
      { q: "Welke activiteiten zijn mogelijk?", a: "Van online escape rooms en kerstquizzen tot workshops, entertainment en informele ontmoetingen." },
      { q: "Hoeveel mensen kunnen deelnemen?", a: "Van kleine teams tot organisaties met honderden medewerkers." },
      { q: "Wanneer moeten we boeken?", a: "Vooral in november en december loopt de agenda snel vol. Daarom adviseren wij om tijdig contact op te nemen." },
      { q: "Wat kost een online kerstfeest?", a: "Dat hangt af van de groepsgrootte, het programma en de gewenste begeleiding." },
    ],
    faqMore: [
      { q: "Welke software gebruiken jullie?", a: "Bij dit soort sessies geven wij de voorkeur aan een vernieuwend platform waar gesprekken en samenwerking makkelijker gaat. SpatialChat werkt bijzonder goed. U kunt gewoon een demo boeken om dat een keer te ervaren." },
      { q: "Kunnen internationale teams deelnemen?", a: "Ja. Dat gebeurt regelmatig." },
      { q: "Kunnen we het feest volledig personaliseren?", a: "Ja. We verwerken graag thema's, verhalen en elementen uit de organisatie." },
      { q: "Zijn er activiteiten rondom teambuilding mogelijk?", a: "Ja. Veel organisaties combineren ontspanning met samenwerking en ontmoeting." },
      { q: "Kunnen deelnemers vrij rondlopen en mensen ontmoeten?", a: "Ja. In interactieve omgevingen kunnen deelnemers zelf bepalen met wie zij in gesprek gaan." },
      { q: "Wat maakt een online kerstfeest succesvol?", a: "Een goede balans tussen programma, ontmoeting en ruimte voor spontane gesprekken." },
    ],
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
    range: "6–200 deelnemers",
    steps: [
      { title: "Intake", body: "Groepsgrootte, doel en gewenst thema." },
      { title: "Ontwerp", body: "Format-keuze en eventuele maatwerk-elementen." },
      { title: "Briefing", body: "Deelnemers worden voorbereid, techniek staat klaar." },
      { title: "Live productie", body: "Volledig begeleid door onze game-masters." },
    ],
    related: ["bedrijfsfeest", "kerstfeest", "team-ontwikkeling", "brainstormen"],
    faq: [
      { q: "Hoe werkt een online escape room?", a: "Deelnemers lossen samen puzzels en opdrachten op in een digitale omgeving. Daarbij draait het niet alleen om snelheid, maar vooral om samenwerken." },
      { q: "Hoeveel mensen kunnen meedoen?", a: "Van minimaal 6 tot ruim 200 deelnemers." },
      { q: "Welke escape rooms bieden jullie aan?", a: "Onder andere onze eigen EscapeMasters en de cybersecurity escape room R@venHack. Maar we maken ook Escape Rooms op maat." },
      { q: "Is het geschikt voor nieuwe teams?", a: "Ja. Een escape room laat mensen op een speelse manier kennismaken met elkaars kwaliteiten." },
      { q: "Hoe lang duurt een online escape room?", a: "Meestal tussen de 60 en 90 minuten." },
      { q: "Wat kost een online escape room?", a: "Dat hangt af van de groepsgrootte en het gekozen programma." },
    ],
    faqMore: [
      { q: "Kunnen teams tegen elkaar spelen?", a: "Ja. Dat zorgt vaak voor extra energie en betrokkenheid." },
      { q: "Is maatwerk mogelijk?", a: "Ja. We kunnen onderdelen aanpassen of volledig nieuwe verhaallijnen ontwikkelen." },
      { q: "Welke software gebruiken jullie?", a: "De meeste escape rooms draaien volledig in de browser." },
      { q: "Werkt het ook internationaal?", a: "Ja. We begeleiden regelmatig internationale groepen." },
      { q: "Is begeleiding inbegrepen?", a: "Ja. Onze hosts begeleiden het programma van begin tot eind." },
      { q: "Kunnen jullie een escape room koppelen aan een leerdoel?", a: "Ja. Bijvoorbeeld rondom cybersecurity, onboarding of samenwerking." },
    ],
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
    range: "50–2000 deelnemers",
    steps: [
      { title: "Intake", body: "Wie zijn uw leden, wat bindt ze en wat wilt u opbouwen?" },
      { title: "Ontwerp", body: "Bijeenkomsten, interactiestructuren en community-ritme." },
      { title: "Lancering", body: "Eerste bijeenkomst als start van een terugkerende structuur." },
      { title: "Begeleiding", body: "Doorlopende ondersteuning bij opbouw en beheer." },
    ],
    related: ["bedrijfsfeest", "kerstfeest", "netwerkevent", "klankbordgroep"],
    faq: [
      { q: "Kun je online een community opbouwen?", a: "Ja. Maar een community ontstaat niet vanzelf. Daar is ritme, interactie en aandacht voor nodig." },
      { q: "Is dit een event of een traject?", a: "Meestal een traject. Een community bouw je niet in één bijeenkomst." },
      { q: "Hoe houden jullie leden betrokken?", a: "Door regelmatige ontmoetingen, herkenbare formats en ruimte voor onderlinge uitwisseling." },
      { q: "Hoe groot kan een community zijn?", a: "Dat varieert van enkele tientallen tot honderden of zelfs duizenden deelnemers." },
      { q: "Welke software gebruiken jullie?", a: "Wij werken met communities in SpatialChat, omdat dit als enige de werelden van websites en online meetings combineert en daarmee de community in alle vormen van contact kan ondersteunen." },
    ],
    faqMore: [
      { q: "Hoe vaak organiseren communities bijeenkomsten?", a: "Dat verschilt sterk. Veel communities kiezen voor een maandelijkse of kwartaalcyclus." },
      { q: "Kunnen jullie community managers begeleiden?", a: "Ja. We ondersteunen regelmatig community managers en programmateams." },
      { q: "Werkt dit internationaal?", a: "Ja. Online communities lenen zich uitstekend voor internationale samenwerking." },
      { q: "Hoe start je een nieuwe community?", a: "Vaak begint dat met een gedeeld vraagstuk of gezamenlijk doel." },
      { q: "Hoe vergroot je activiteit?", a: "Door het makkelijk te maken om bij te dragen en elkaar te ontmoeten." },
      { q: "Kunnen jullie de community faciliteren?", a: "Ja. Zowel inhoudelijk als technisch." },
    ],
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
    range: "10–500 deelnemers",
    steps: [
      { title: "Intake", body: "Wat is het vraagstuk, wie zijn de bewoners en wat moet dit traject opleveren?" },
      { title: "Ontwerp", body: "Format, gespreksstructuur, interactiemomenten en documentatiemethode op maat." },
      { title: "Repetitie", body: "Technische doorloop met hosts en moderatoren." },
      { title: "Live productie", body: "Volledig begeleid — wij zorgen dat iedereen mee kan doen." },
    ],
    related: ["klankbordgroep", "focusgroep", "world-cafe", "alv"],
    faq: [
      { q: "Doen bewoners online wel echt mee?", a: "Ja. Online participatie bereikt vaak mensen die niet naar een fysieke bijeenkomst komen. Dat maakt online bewonersparticipatie vaak beter qua representatie." },
      { q: "Hoeveel inwoners kunnen deelnemen?", a: "Van 10 tot ruim 500 deelnemers." },
      { q: "Hoe koppelen jullie resultaten terug?", a: "Wij zorgen dat input zichtbaar wordt verzameld, samengevat en gedeeld." },
      { q: "Is het toegankelijk voor minder digitaal vaardige inwoners?", a: "Daar ontwerpen we bewust op. Bovendien begeleiden we deelnemers ook nog in de meeting zelf. Dat maakt veel verschil voor wie vooral onzeker is." },
      { q: "Welke participatietools gebruiken jullie?", a: "We combineren vaak gesprekken, 'vote with your feet', polls, stemmingen en digitale canvassen." },
      { q: "Wat kost een online participatietraject?", a: "Dat hangt af van de omvang van het traject en de gewenste begeleiding. Neem vooral contact op voor een vrijblijvende offerte!" },
    ],
    faqMore: [
      { q: "Hoe vergroot je de opkomst?", a: "Door participatie makkelijk te maken." },
      { q: "Werkt dit naast fysieke bijeenkomsten?", a: "Ja. Vaak combineren organisaties online en fysieke participatie." },
      { q: "Hoe verwerken jullie alle input?", a: "Digitale participatie maakt het mogelijk om input direct vast te leggen." },
      { q: "Kunnen jullie de moderatie verzorgen?", a: "Ja. Onze facilitators begeleiden gesprekken, maar u kunt ook zelf een moderator aanleveren. Wij zorgen dan dat deze technisch helemaal voorbereid is." },
      { q: "Kunnen jullie hybride participatie begeleiden?", a: "Ja. Daarbij besteden we extra aandacht aan gelijkwaardige deelname." },
    ],
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
    range: "8–250 deelnemers",
    steps: [
      { title: "Intake", body: "Doel, samenstelling van de groep en gewenste output." },
      { title: "Ontwerp", body: "Gespreksstructuur, vraagstukken en interactiemomenten." },
      { title: "Repetitie", body: "Technische doorloop met hosts." },
      { title: "Live productie", body: "Volledig begeleid en gedocumenteerd." },
    ],
    related: ["bewonersparticipatie", "focusgroep", "world-cafe", "open-space"],
    faq: [
      { q: "Wat levert een online klankbordgroep op?", a: "Een online klankbordgroep geeft toegang tot praktijkervaringen, inzichten en signalen uit de doelgroep. Dat helpt om beleid, dienstverlening of communicatie beter aan te laten sluiten op de werkelijkheid." },
      { q: "Hoe groot is een online klankbordgroep?", a: "Meestal bestaat een online klankbordgroep uit 8 tot 250 deelnemers, waarbij grotere groepen steeds in kleinere clubjes uiteengaan. Zo is de sessie groot genoeg voor verschillende perspectieven, klein genoeg voor een goed gesprek." },
      { q: "Hoe vaak komt een klankbordgroep samen?", a: "Dat varieert van een eenmalige bijeenkomst tot een terugkerend overleg per maand of kwartaal." },
      { q: "Hoe zorgen jullie dat iedereen aan het woord komt?", a: "Met een heldere gespreksstructuur, actieve moderatie en werkvormen waarbij iedereen kan bijdragen. Wij zetten ons in dat iedereen gezien en gehoord kan worden, niet alleen de mensen die vanzelfsprekend het woord nemen. Juist in dit soort sessies is dat essentieel." },
      { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Teams, Zoom Events, maar geven de voorkeur aan SpatialChat. De finale keuze hangt af van de groepsgrootte, de gewenste interactie en het doel van de bijeenkomst." },
      { q: "Wat kost een online klankbordgroep?", a: "Dat hangt af van de groepsgrootte, de frequentie en de gewenste begeleiding. Daarom maken wij altijd een voorstel op maat." },
    ],
    faqMore: [
      { q: "Wanneer kies je voor een online klankbordgroep?", a: "Wanneer je regelmatig wilt toetsen hoe beleid, producten of dienstverlening worden ervaren door de doelgroep. Of als je feedback zoekt op een nieuwe richting." },
      { q: "Hoe worden resultaten vastgelegd?", a: "Alle inzichten worden digitaal vastgelegd zodat ideeën, signalen en aanbevelingen niet verloren gaan." },
      { q: "Werkt dit ook internationaal?", a: "Ja. Online klankbordgroepen maken het eenvoudig om deelnemers uit verschillende regio's of landen te betrekken." },
      { q: "Hoe lang duurt een bijeenkomst?", a: "De meeste online klankbordgroepen duren tussen de 60 en 120 minuten." },
    ],
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
    faq: [
      { q: "Hoe groot is een online focusgroep?", a: "Meestal tussen de 6 en 20 deelnemers." },
      { q: "Praten deelnemers online wel vrijuit?", a: "Vaak wel. Sommige deelnemers voelen zich online zelfs comfortabeler dan in een fysieke setting." },
      { q: "Krijgen we een analyse achteraf?", a: "Ja. Indien gewenst leveren wij een samenvatting of analyse van de belangrijkste inzichten." },
      { q: "Werven jullie deelnemers?", a: "Dat kan. We kunnen ondersteunen bij selectie en uitnodiging." },
      { q: "Welke software gebruiken jullie?", a: "Dat hangt af van de doelgroep en onderzoeksvraag." },
      { q: "Wat kost een online focusgroep?", a: "Dat hangt af van de omvang en gewenste ondersteuning." },
    ],
    faqMore: [
      { q: "Wat is het verschil tussen een focusgroep en een klankbordgroep?", a: "Een focusgroep is meestal eenmalig. Een klankbordgroep komt vaker samen." },
      { q: "Wanneer kies je voor een focusgroep?", a: "Wanneer je diepgaand inzicht wilt krijgen in ervaringen, behoeften of meningen." },
      { q: "Hoe lang duurt een focusgroep?", a: "Meestal tussen de 60 en 120 minuten." },
      { q: "Kunnen jullie meerdere groepen draaien?", a: "Ja. Dat gebeurt regelmatig om verschillende doelgroepen te vergelijken." },
      { q: "Hoe worden inzichten vastgelegd?", a: "Digitaal, zodat niets verloren gaat." },
      { q: "Kunnen sessies worden opgenomen?", a: "Ja. Mits deelnemers daarvoor toestemming geven." },
    ],
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
    range: "20–400 deelnemers",
    steps: [
      { title: "Intake", body: "Centrale vraag, groepsgrootte en gewenste output." },
      { title: "Ontwerp", body: "Tafelindeling, vraagstelling per tafel en rondgangstructuur." },
      { title: "Repetitie", body: "Technische doorloop met tafelgastheren en -vrouwen." },
      { title: "Live productie", body: "Wij faciliteren het volledige World Café." },
    ],
    related: ["open-space", "brainstormen", "klankbordgroep", "bewonersparticipatie"],
    faq: [
      { q: "Hoe werkt een online World Café?", a: "Bij een online World Café gaan deelnemers in kleine groepen met elkaar in gesprek rondom een aantal centrale vragen. Na iedere ronde wisselen deelnemers van tafel en nemen zij inzichten mee naar het volgende gesprek." },
      { q: "Hoeveel mensen kunnen deelnemen?", a: "Wij begeleiden online World Café's van ongeveer 20 tot ruim 400 deelnemers." },
      { q: "Waarvoor is een online World Café geschikt?", a: "Het format is geschikt voor vraagstukken waarbij kennisdeling, gezamenlijke beeldvorming en het ophalen van perspectieven centraal staan." },
      { q: "Hoe worden inzichten vastgelegd?", a: "De opbrengsten worden direct digitaal verzameld. Daardoor ontstaat een overzicht van thema's, inzichten en aanbevelingen." },
      { q: "Welke software gebruiken jullie?", a: "Bij dit soort sessies geven wij de voorkeur aan een vernieuwend platform waar gesprekken en samenwerking makkelijker gaat. SpatialChat werkt bijzonder goed. U kunt gewoon een demo boeken om dat een keer te ervaren." },
      { q: "Wat kost een online World Café?", a: "Dat hangt af van de groepsgrootte, het ontwerp en de begeleiding." },
    ],
    faqMore: [
      { q: "Kan een World Café hybride plaatsvinden?", a: "Ja. Maar net als bij andere hybride bijeenkomsten vraagt dat om zorgvuldig ontwerp en een sterke alignment in de te gebruiken tooling." },
      { q: "Hoe lang duurt een online World Café?", a: "Meestal tussen de 90 minuten en 3 uur." },
      { q: "Hoeveel rondes zijn gebruikelijk?", a: "Vaak werken we met drie tot vijf rondes, afhankelijk van het onderwerp." },
      { q: "Welke onderwerpen lenen zich voor een World Café?", a: "Vooral vraagstukken waarbij verschillende perspectieven en ervaringen belangrijk zijn." },
      { q: "Kunnen deelnemers van tafel wisselen?", a: "Ja. Dat is juist een essentieel onderdeel van de methode." },
      { q: "Wat gebeurt er met de opbrengst?", a: "De verzamelde inzichten worden gebundeld en kunnen dienen als input voor vervolgstappen, beleid of besluitvorming." },
    ],
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
    faq: [
      { q: "Hoe maken jullie een webinar interactief?", a: "Met polls, live vragen, reacties uit het publiek en andere interactieve werkvormen. Zo blijven deelnemers betrokken bij de inhoud. Het belangrijkste echter: we bieden gelegenheid tot napraten in koffiekamers. Dat maakt groot verschil." },
      { q: "Hoeveel deelnemers kunnen deelnemen?", a: "Wij begeleiden webinars van ongeveer 50 tot ruim 1.000 deelnemers." },
      { q: "Kunnen deelnemers vragen stellen?", a: "Ja. Deelnemers kunnen vragen stellen via chat." },
      { q: "Verzorgen jullie techniek en sprekersbegeleiding?", a: "Ja. Wij verzorgen de technische productie, begeleiden sprekers en ondersteunen tijdens de uitzending." },
      { q: "Krijgen we een opname?", a: "Ja. Webinars kunnen worden opgenomen en achteraf worden gedeeld of hergebruikt." },
      { q: "Wat kost een webinar?", a: "De investering hangt af van de omvang van het webinar en de gewenste ondersteuning. Daarom maken wij altijd een voorstel op maat." },
    ],
    faqMore: [
      { q: "Wat is het verschil tussen een webinar en een online evenement?", a: "Een webinar richt zich meestal op één programmaonderdeel of onderwerp. Een online evenement bevat vaak meerdere onderdelen, sessies of netwerkmogelijkheden." },
      { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Zoom Events en Teams. Maar we laten u ook heel graag SpatialChat zien: een verrassend alternatief voor meer interactie, zoals die mogelijkheid om in kleine groepjes na te praten. De uiteindelijke keuze hangt af van het doel van de bijeenkomst en de wensen van de organisatie." },
      { q: "Kunnen webinars hybride plaatsvinden?", a: "Ja. Een webinar kan worden gecombineerd met publiek op locatie." },
      { q: "Hoe lang duurt een webinar?", a: "De meeste webinars duren tussen de 45 en 90 minuten." },
      { q: "Kunnen deelnemers anoniem vragen stellen?", a: "Ja. Dat verlaagt vaak de drempel om vragen te stellen." },
      { q: "Kunnen jullie registratie en opvolging verzorgen?", a: "Wij kunnen ondersteunen bij registratie, herinneringen en opvolging na afloop. Meestal echter, gebeurt dit vanuit de klant." },
    ],
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
    range: "60–1000 deelnemers",
    steps: [
      { title: "Intake", body: "Programma, sprekers, sessiestructuur en technische eisen." },
      { title: "Ontwerp", body: "Platform, plenaire + parallelle sessies, netwerkmomenten." },
      { title: "Repetitie", body: "Volledige technische doorloop met alle sprekers en hosts." },
      { title: "Live productie", body: "Professionele productie van begin tot eind." },
    ],
    related: ["webinar", "townhall", "alv", "open-space"],
    faq: [
      { q: "Hoe houden jullie een online conferentie boeiend?", a: "Door afwisseling aan te brengen tussen plenaire sessies, parallelle programma's, interactie en ontmoeting. Een online conferentie vraagt om een ander ritme dan een fysieke conferentie. Daar ontwerpen wij bewust op." },
      { q: "Hoeveel deelnemers kunnen meedoen?", a: "Wij begeleiden online conferenties van ongeveer 60 tot ruim 1000 deelnemers. Dankzij interactieve platformen en slimme programma-opbouw blijft ook een grote groep betrokken." },
      { q: "Kunnen deelnemers netwerken?", a: "Ja. Sterker nog: wij vinden dat ontmoeting een essentieel onderdeel is van vrijwel iedere conferentie. Daarom ontwerpen we vaak ruimtes waar deelnemers elkaar kunnen ontmoeten en gesprekken kunnen voortzetten." },
      { q: "Kunnen jullie meerdere sessies tegelijk faciliteren?", a: "Ja. We begeleiden regelmatig conferenties met meerdere parallelle programma's, breakouts en deelsessies." },
      { q: "Kunnen jullie meerdaagse conferenties verzorgen?", a: "Ja. Van een compacte middag tot een meerdaags programma. We helpen bij ontwerp, techniek, deelnemersbegeleiding en productie." },
      { q: "Wat kost een online conferentie?", a: "De investering hangt af van de omvang van het programma, het aantal sessies en de gewenste ondersteuning. Daarom maken wij altijd een voorstel op maat." },
    ],
    faqMore: [
      { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Zoom Events en SpatialChat. Welke omgeving het beste past, hangt af van de doelen van de conferentie." },
      { q: "Kunnen jullie de volledige productie verzorgen?", a: "Ja. We begeleiden het volledige traject: van ontwerp en draaiboek tot technische productie, deelnemersbegeleiding en evaluatie." },
      { q: "Is een online conferentie ook hybride mogelijk?", a: "Ja. Maar hybride conferenties vragen extra aandacht. Online deelnemers moeten meer zijn dan meekijkers." },
      { q: "Hoe begeleiden jullie sprekers?", a: "Sprekers ontvangen een briefing, technische instructies en waar nodig een repetitie." },
      { q: "Kunnen deelnemers sessies terugkijken?", a: "Ja. Sessies kunnen worden opgenomen en achteraf beschikbaar worden gesteld." },
      { q: "Hoe registreren deelnemers zich?", a: "Dat kan via bestaande systemen van de opdrachtgever of via registratie- en eventplatforms die wij ondersteunen." },
    ],
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
    range: "30–600 deelnemers",
    steps: [
      { title: "Intake", body: "Centrale uitdaging of thema dat de groep bij elkaar brengt." },
      { title: "Ontwerp", body: "Platform-inrichting voor parallelle sessies en marketplace." },
      { title: "Briefing", body: "Deelnemers worden voorbereid op het Open Space-principe." },
      { title: "Live productie", body: "Wij faciliteren het volledige Open Space-event." },
    ],
    related: ["world-cafe", "brainstormen", "strategiedagen", "conferentie"],
    faq: [
      { q: "Wat is Open Space?", a: "Open Space is een werkvorm waarbij deelnemers zelf onderwerpen aandragen en de agenda samen vormgeven. Daardoor ontstaat eigenaarschap en betrokkenheid." },
      { q: "Werkt Open Space online?", a: "Ja. Online Open Space werkt verrassend goed omdat deelnemers eenvoudig tussen sessies kunnen bewegen en zelf keuzes kunnen maken." },
      { q: "Voor hoeveel deelnemers is Open Space geschikt?", a: "Van ongeveer 30 tot ruim 600 deelnemers." },
      { q: "Hoe voorkomen jullie chaos?", a: "Open Space lijkt spontaan, maar werkt juist dankzij een helder proces en duidelijke spelregels. Wij begeleiden dat proces zorgvuldig." },
      { q: "Welke software gebruiken jullie?", a: "Bij dit soort sessies geven wij de voorkeur aan een vernieuwend platform waar gesprekken en samenwerking makkelijker gaat. SpatialChat werkt bijzonder goed. U kunt gewoon een demo boeken om dat een keer te ervaren." },
      { q: "Wat kost een online Open Space?", a: "Dat hangt af van de groepsgrootte en de gewenste begeleiding." },
    ],
    faqMore: [
      { q: "Hoe ontstaat de agenda?", a: "De deelnemers brengen zelf onderwerpen in die zij belangrijk vinden." },
      { q: "Welke onderwerpen zijn geschikt?", a: "Vooral complexe vraagstukken waarbij kennis, ervaring en eigenaarschap uit de groep zelf moeten komen." },
      { q: "Hoe worden resultaten vastgelegd?", a: "Iedere sessie levert opbrengsten op die digitaal worden verzameld en gedeeld." },
      { q: "Kan Open Space hybride plaatsvinden?", a: "Ja. Maar ook hier geldt dat hybride alleen werkt als beide groepen gelijkwaardig kunnen deelnemen." },
      { q: "Hoe lang duurt een Open Space?", a: "Dat varieert van een paar uur tot een volledige dag." },
      { q: "Welke rol speelt de facilitator?", a: "De facilitator bewaakt het proces, niet de inhoud." },
    ],
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
    faq: [
      { q: "Werkt online netwerken wel?", a: "Ja. Mits je het goed organiseert. De meeste mensen zitten niet te wachten op een digitale visitekaartjesuitwisseling. Wel op een goed gesprek. Daarom ontwerpen wij netwerkevents waarin ontmoeting centraal staat." },
      { q: "Hoeveel deelnemers kunnen meedoen?", a: "Wij begeleiden online netwerkevents van ongeveer 30 tot ruim 300 deelnemers." },
      { q: "Hoe brengen jullie de juiste mensen bij elkaar?", a: "Afhankelijk van het doel werken we met matchmaking, thematafels, speeddates of zelfsturende ontmoetingen. Het ontwerp bepaalt welke vorm het beste werkt." },
      { q: "Welke software gebruiken jullie?", a: "We hebben ervaring met Zoom, Zoom Events, Teams en SpatialChat. Vooral SpatialChat blijkt vaak verrassend effectief voor informele ontmoetingen." },
      { q: "Hoe zorgen jullie voor waardevolle gesprekken?", a: "Door deelnemers een duidelijke aanleiding te geven om met elkaar in gesprek te gaan. De beste gesprekken ontstaan zelden vanzelf." },
      { q: "Wat kost een online netwerkevent?", a: "Dat hangt af van het aantal deelnemers, het ontwerp en de gewenste begeleiding." },
    ],
    faqMore: [
      { q: "Hoe werkt matchmaking?", a: "Matchmaking kan plaatsvinden op basis van interesses, expertise, sector, rol of een specifieke vraag." },
      { q: "Werkt online netwerken ook internationaal?", a: "Juist dan. Online netwerken maakt het eenvoudig om deelnemers uit verschillende landen samen te brengen." },
      { q: "Hoe lang duurt een online netwerkevent?", a: "Meestal tussen de 60 minuten en 3 uur." },
      { q: "Kunnen jullie een community koppelen aan het event?", a: "Ja. Regelmatig gebruiken organisaties een netwerkevent als startpunt voor een langere samenwerking. Zo maakten we voor de World Olympians Association een online clubhuis dat altijd open is." },
      { q: "Kunnen deelnemers contactgegevens uitwisselen?", a: "Ja. Uiteraard bepalen deelnemers zelf welke informatie zij willen delen." },
    ],
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

            {event.faqMore && event.faqMore.length > 0 && (
              <details className="group max-w-4xl mx-auto mt-10">
                <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
                  <span className="group-open:hidden">Meer vragen?</span>
                  <span className="hidden group-open:inline">Minder vragen</span>
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
