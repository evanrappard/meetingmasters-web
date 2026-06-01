import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABlock from "@/components/ui/CTABlock";
import { eventFormats } from "@/app/nl/events/page";
import {
  Target, Mic2, Megaphone, Vote,
  UsersRound, GraduationCap, Lightbulb, DoorOpen,
  Sparkles, Snowflake, Lock, Handshake,
  MapPin, MessageCircle, ScanSearch, Coffee,
  Radio, MonitorPlay, Pin, Network,
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
  outcomes: string[];
  forWho: string;
  range: string | null;
  steps: { title: string; body: string }[];
  related: string[];
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
      "Wij ontwerpen online strategiedagen waarbij deelnemers niet passief naar presentaties kijken, maar actief bijdragen aan de uitkomst. Van vraagstelling tot draagvlak — wij begeleiden het hele traject, technisch én inhoudelijk. Het resultaat: heldere keuzes die gedragen worden door het team.",
    outcomes: [
      "Heldere besluiten en richting aan het einde van de dag",
      "Breed draagvlak voor de gekozen koers",
      "Een team dat weet wat er speelt en waar het naartoe gaat",
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
  },

  townhall: {
    title: "Online townhall",
    bg: "radial-gradient(circle at 38% 38%, #7A8270, #626A5A)",
    iconSrc: "/images/icons/townhall.png",
    Icon: Mic2, ic: "text-white",
    tagline: "De hele organisatie bijeen — open, transparant en professioneel geproduceerd.",
    intro:
      "Een online townhall is het moment waarop leiderschap en medewerkers direct met elkaar in gesprek gaan. Wij produceren townhalls waarbij het geen eenrichtingsuitzending is maar een echte ontmoeting: met live Q&A, polls en de ruimte voor eerlijke vragen. Professioneel geproduceerd, ook bij grote groepen.",
    outcomes: [
      "Een organisatie die op één lijn zit en weet waar het naartoe gaat",
      "Medewerkers die zich gehoord en serieus genomen voelen",
      "Soepel verloop voor honderden deelnemers tegelijk",
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
    bg: "radial-gradient(circle at 38% 38%, #3ABABA, #1E9898)",
    Icon: Megaphone, ic: "text-white",
    tagline: "Open gesprek tussen directie en medewerkers — transparant, live en met echte betrokkenheid.",
    intro:
      "Bij een all-hands meeting staat openheid centraal: medewerkers kunnen vragen stellen, meedenken en hun mening geven. Wij ontwerpen sessies waarbij dit echt gebeurt — niet als façade maar als oprechte dialoog. Met slimme Q&A-tools, polls en een goed moderatieproces dat ook moeilijke vragen ruimte geeft.",
    outcomes: [
      "Medewerkers die zich betrokken en gehoord voelen",
      "Openheid en vertrouwen in leiderschap",
      "Een organisatiebrede update die beklijft en tot actie aanzet",
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
      "Een online Algemene Ledenvergadering vraagt om de juiste technische infrastructuur: stemmodules, aanwezigheidsregistratie, quorum-bewaking en een gestructureerde vragenronde. Wij regelen het allemaal — zodat uw bestuur zich volledig kan richten op de inhoud en de leden zich gehoord voelen.",
    outcomes: [
      "Een statutair correcte vergadering die voldoet aan alle vereisten",
      "Leden die actief deelnemen en hun stem laten gelden",
      "Soepel verloop zonder technische of organisatorische problemen",
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

  /* ── LEREN & ONTWIKKELEN ── */

  "team-ontwikkeling": {
    title: "Online teambuilding",
    bg: "radial-gradient(circle at 38% 38%, #F8D84A, #EEBE3D)",
    Icon: UsersRound, ic: "text-[#696758]",
    tagline: "Teams die beter samenwerken — ook als ze ver van elkaar werken.",
    intro:
      "Online teambuilding vraagt om meer dan een leuke activiteit. Wij ontwerpen trajecten waarbij teams samen leren, reflecteren en experimenteren — met blijvend effect op samenwerking, communicatie en resultaat. Afgestemd op de dynamiek van uw team en de uitdagingen waar het mee te maken heeft.",
    outcomes: [
      "Een team dat beter samenwerkt en effectiever communiceert",
      "Meer wederzijds begrip en een sterkere onderlinge vertrouwensband",
      "Concrete afspraken over werkwijze die worden nageleefd",
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
      "Een online training of workshop vraagt om meer dan video-colleges. Wij ontwerpen trajecten waarbij deelnemers actief leren: via interactie, oefening, reflectie en samenwerking. Ondersteund door de juiste technologie, afgestemd op de leercultuur van uw organisatie.",
    outcomes: [
      "Deelnemers die daadwerkelijk leren en groeien — meetbaar resultaat",
      "Een traject dat past bij de leercultuur van uw organisatie",
      "Borging van geleerde vaardigheden in de dagelijkse praktijk",
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
      "Online brainstormen vraagt om een andere aanpak dan in een fysieke ruimte. Wij ontwerpen sessies met de juiste energie, de juiste werkvormen en strakke begeleiding — zodat ideeën stromen en het beste naar boven komt. Van divergeren tot convergeren: wij begeleiden het hele proces.",
    outcomes: [
      "Een gevulde ideeënbank met concrete en bruikbare input",
      "Energie en creativiteit bij alle deelnemers",
      "Duidelijke volgende stappen die uit de brainstorm voortkomen",
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
    bg: "radial-gradient(circle at 38% 38%, #D8EEE8, #C3DED6)",
    Icon: DoorOpen, ic: "text-[#5A7870]",
    tagline: "Een vliegende start voor nieuwe medewerkers — ook als ze overal vandaan inloggen.",
    intro:
      "De eerste indruk telt. Wij ontwerpen online onboardingdagen waarbij nieuwe medewerkers echt welkom worden geheten: ze leren de cultuur kennen, maken contact met collega's en begrijpen hoe de organisatie werkt. Niet via een PDF, maar via een dag die ze bijblijft en hen versneld thuis laat voelen.",
    outcomes: [
      "Nieuwe medewerkers die zich welkom en verbonden voelen",
      "Helder begrip van cultuur, werkwijze en verwachtingen",
      "Versnelde integratie en minder uitval in de eerste maanden",
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

  /* ── VERBINDING & PLEZIER ── */

  bedrijfsfeest: {
    title: "Online bedrijfsfeest",
    bg: "radial-gradient(circle at 38% 38%, #D85E7A, #C64A60)",
    iconSrc: "/images/icons/bedrijfsfeest.png",
    Icon: Sparkles, ic: "text-white",
    tagline: "Een feest dat mensen écht bijblijft — ook als iedereen vanuit huis inlogt.",
    intro:
      "Een online bedrijfsfeest hoeft geen compromis te zijn. Games, live entertainment, escape rooms en sociale ruimtes — wij ontwerpen een avond of middag die net zo memorabel is als een fysiek evenement. Geen PowerPoint-parade, maar echte verbinding en plezier.",
    outcomes: [
      "Medewerkers die écht genieten en contact hebben",
      "Een feest dat past bij uw organisatiecultuur",
      "Een afsluiter die het moment waardig is",
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
      "Een online kerstborrel hoeft geen compromis te zijn. Wij ontwerpen een avond vol energie, lachen en echte verbinding: met escape rooms, live entertainment, quiz-games en sociale ruimtes waar mensen vrij ronddwalen. Het resultaat: een waardige afsluiter van het jaar waar mensen naar uitkijken.",
    outcomes: [
      "Medewerkers die echt genieten en contact hebben — ook op afstand",
      "Een feest dat past bij de sfeer en cultuur van uw organisatie",
      "Een memorabel einde van het jaar dat lang wordt naverteld",
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
    bg: "radial-gradient(circle at 38% 38%, #6A7A60, #4A5840)",
    Icon: Lock, ic: "text-white",
    tagline: "Teambuilding met hoge betrokkenheid — spannend, laagdrempelig en volledig online.",
    intro:
      "Onze online escape rooms zijn ontworpen voor teams die willen samenwerken, lachen en iets beleven. Van EscapeMasters tot het cybersecurity-thema R@venHack — formats die passen bij elk doel en elke groep. Hoge energie, echte samenwerking en een ervaring die verbindt.",
    outcomes: [
      "Teams die samenwerken onder druk en van elkaar leren",
      "Hoge energie en betrokkenheid bij alle deelnemers",
      "Een gezamenlijke ervaring die verbindt en lang wordt naverteld",
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
    bg: "radial-gradient(circle at 38% 38%, #F8D848, #E8AE30)",
    iconSrc: "/images/icons/communitybuilding.png",
    Icon: Handshake, ic: "text-[#696758]",
    tagline: "Een community bouwen die mensen écht verbindt — niet alleen bij elkaar in een groep zet.",
    intro:
      "Een sterke community ontstaat niet vanzelf — ook niet online. Wij ontwerpen bijeenkomsten en structuren die verbinding stimuleren, bijdragen belonen en de community laten groeien. Of u nu een ledenorganisatie heeft, een alumninetwerk of een professioneel platform — wij maken de community actief en aantrekkelijk.",
    outcomes: [
      "Leden die actief deelnemen, bijdragen en terugkomen",
      "Verbinding tussen mensen met gedeelde doelen en belangen",
      "Een community die zichzelf versterkt en groeit",
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

  /* ── DIALOOG & INSPRAAK ── */

  bewonersparticipatie: {
    title: "Online bewonersparticipatie",
    bg: "radial-gradient(circle at 38% 38%, #52C4C4, #28A8AA)",
    iconSrc: "/images/icons/bewonersparticipatie.png",
    Icon: MapPin, ic: "text-white",
    tagline: "Inwoners betrekken bij beleid, plannen en beslissingen — op een manier die echt werkt.",
    intro:
      "Participatietrajecten zijn pas waardevol als bewoners het gevoel hebben dat hun stem er toe doet. Wij ontwerpen online sessies waarbij mensen actief meedenken en meepraten — van buurtoverleg tot stadsbrede consultatie. Onze aanpak zorgt dat elk geluid gehoord wordt, en dat de uitkomsten bruikbaar zijn voor uw beleid of ontwerp.",
    outcomes: [
      "Bewoners die zich gehoord en serieus genomen voelen",
      "Bruikbare en goed gedocumenteerde input voor beleid of ontwerp",
      "Een transparant proces dat vertrouwen opbouwt",
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
      "Een klankbordgroep is een waardevolle manier om input te verzamelen, draagvlak te toetsen en relaties te onderhouden. Wij ontwerpen online sessies waarbij de klankbordfunctie écht tot zijn recht komt — met de juiste gespreksstructuur, ruimte voor alle stemmen en een heldere verslaglegging.",
    outcomes: [
      "Waardevolle input van een betrokken en diverse groep",
      "Versterkte relatie met stakeholders die zich gehoord voelen",
      "Inzicht in wat er leeft buiten de eigen organisatie",
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
      "Een focusgroep geeft u inzicht in de belevingswereld van uw doelgroep — hun motieven, twijfels en wensen. Wij ontwerpen en faciliteren online focusgroepen waarbij deelnemers zich veilig genoeg voelen om eerlijk te zijn. Het resultaat: rijke, kwalitatieve data die echt bruikbaar is voor uw beslissingen.",
    outcomes: [
      "Diepgaand inzicht in wat uw doelgroep drijft en weerhoudt",
      "Kwalitatieve data die uw kwantitatief onderzoek aanvult",
      "Heldere conclusies die direct bruikbaar zijn voor beleid of product",
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
      "Het World Café-format is ideaal voor het uitwisselen van kennis en het bouwen van gedeeld inzicht. Wij vertalen dit krachtige format naar een online setting — met tafelgesprekken, een rondgang door meerdere tafels en een plenaire oogst. Het resultaat: rijke gesprekken die in een grote groep anders nooit zouden plaatsvinden.",
    outcomes: [
      "Diepgaande gesprekken in kleine groepen over complexe vraagstukken",
      "Gedeeld inzicht dat breed gedragen wordt",
      "Verbinding tussen mensen met verschillende achtergronden en perspectieven",
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

  /* ── KENNIS & NETWERK ── */

  webinar: {
    title: "Webinar",
    bg: "radial-gradient(circle at 38% 38%, #C64A60, #A83852)",
    Icon: Radio, ic: "text-white",
    tagline: "Webinars die mensen boeien — niet alleen zenden, maar echt verbinden.",
    intro:
      "Een webinar hoeft geen eenrichtingsuitzending te zijn. Wij ontwerpen interactieve webinars met polls, Q&A, breakouts en live demonstraties — zodat deelnemers actief meedoen en uw boodschap beklijft. Het resultaat: een sessie die mensen bijblijft en die leidt tot actie.",
    outcomes: [
      "Betrokken deelnemers die actief meedoen en vragen stellen",
      "Een heldere boodschap die echt beklijft",
      "Concrete opvolging en hogere conversie na afloop",
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
      "Een online conferentie vraagt om een strakke technische productie én een inhoudelijke aanpak die deelnemers betrokken houdt. Wij verzorgen beide: van keynotes tot parallelle sessies, netwerkmomenten en live Q&A. Met onze ervaring met grote groepen loopt het soepel — ook als er 500 mensen live meekijken.",
    outcomes: [
      "Een professionele conferentie-ervaring voor al uw deelnemers",
      "Geïnspireerde en verbonden deelnemers die waarde meenemen",
      "Parallelle sessies en netwerkmomenten die soepel verlopen",
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
      "Open Space Technology is een krachtige methode voor grote groepen: de deelnemers bepalen zelf de agenda. Wie iets wil bespreken, opent een sessie. Wie geïnteresseerd is, sluit aan. Wij vertalen dit format naar een online setting die de vrijheid en energie van Open Space volledig behoudt.",
    outcomes: [
      "Een agenda die leeft en gedragen wordt door de deelnemers zelf",
      "Hoge energie en eigenaarschap in de groep",
      "Onverwachte maar waardevolle gesprekken die anders nooit zouden plaatsvinden",
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
      "Online netwerken heeft een slechte naam — en dat klopt, als het slecht is opgezet. Wij ontwerpen netwerkevenementen waarbij ontmoeting écht plaatsvindt: via slimme matchmaking, gestructureerde gesprekken en een omgeving die toevallige ontmoetingen stimuleert. Het resultaat: nieuwe contacten die beklijven.",
    outcomes: [
      "Deelnemers die nieuwe, waardevolle contacten opdoen",
      "Een netwerkevenement dat lekker loopt en goed aanvoelt",
      "Verbinding die verder gaat dan het event zelf",
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

  const relatedFormats = related
    .map((s) => eventFormats.find((f) => f.slug === s))
    .filter((f): f is (typeof eventFormats)[number] => Boolean(f));

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full h-[44vw] min-h-[300px] max-h-[500px]">
          <Image
            src="/images/events-bijeenkomst.webp"
            alt={`${title} — MeetingMasters Online Events`}
            fill priority
            className="object-cover object-center"
            style={{ filter: "contrast(1.05) saturate(1.1) brightness(0.80)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/90 via-[#2D2D2D]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-12 sm:pb-18">
              <div className="max-w-[600px]">
                <Link
                  href="/nl/events#formats"
                  className="text-[#28A8AA]/80 text-xs font-bold tracking-widest uppercase mb-4 inline-block hover:text-[#28A8AA] transition-colors"
                >
                  ← Events &amp; Formats
                </Link>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-4">
                  {title}
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-7">
                  {tagline}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/nl/contact"
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    Check je opzet →
                  </Link>
                  <Link
                    href="/nl/events#formats"
                    className="text-white/70 text-sm font-semibold px-5 py-3 border border-white/25 rounded hover:border-white/55 transition-colors"
                  >
                    Bekijk alle formats
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
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

      {/* ── WAT HET OPLEVERT ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Wat het oplevert</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Wat u kunt verwachten.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {outcomes.map((o, i) => (
              <div key={i}>
                <p className="text-[#EEBE3D] text-4xl font-bold leading-none mb-5">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-bold text-[#2D2D2D] text-base leading-snug">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ONZE AANPAK ── */}
      <section className="bg-[#F0F0EA] py-16 border-b border-[#E5E5DF]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Onze aanpak</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Van eerste gesprek tot live productie.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i}>
                <p className="text-[#EEBE3D] text-4xl font-bold leading-none mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{s.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GERELATEERDE FORMATS ── */}
      {relatedFormats.length > 0 && (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Gerelateerde formats</p>
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
              Bekijk alle formats →
            </Link>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CTABlock />

    </div>
  );
}
