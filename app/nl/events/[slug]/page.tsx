import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import {
  Map, Hospital, Brain, PartyPopper, KeyRound, Milestone,
  Ear, Coffee, Vote, Crosshair, Pin, MonitorPlay,
  Handshake, Video, Users2, Laptop,
  type LucideIcon,
} from "lucide-react";

interface EventData {
  title: string;
  color: string;
  Icon: LucideIcon;
  tagline: string;
  intro: string;
  outcomes: string[];
  forWho: string;
  range: string | null;
  steps: { title: string; body: string }[];
}

const EVENT_DATA: Record<string, EventData> = {
  bewonersparticipatie: {
    title: "Online bewonersparticipatie",
    color: "#1E8080",
    Icon: Map,
    tagline: "Inwoners betrekken bij beleid, plannen en beslissingen — online.",
    intro:
      "Participatietrajecten vragen om een zorgvuldige aanpak. Wij ontwerpen online sessies waarbij bewoners actief meedenken en meepraten. Van buurtoverleg tot stadsbrede consultatie — wij zorgen dat elk geluid gehoord wordt.",
    outcomes: [
      "Bewoners die zich gehoord en serieus genomen voelen",
      "Bruikbare input voor beleid of ontwerp",
      "Een transparant en goed gedocumenteerd proces",
    ],
    forWho: "Gemeenten, provincie, woningcorporaties, projectontwikkelaars",
    range: "30–500 deelnemers",
    steps: [
      { title: "Intake", body: "Wat is het vraagstuk, wie zijn de bewoners en wat moet dit traject opleveren?" },
      { title: "Ontwerp", body: "Format, gespreksstructuur, interactiemomenten en documentatiemethode op maat." },
      { title: "Repetitie", body: "Technische doorloop met hosts en moderatoren." },
      { title: "Live productie", body: "Volledig begeleid — wij zorgen dat iedereen mee kan doen." },
    ],
  },
  bedrijfsbijeenkomst: {
    title: "Online bedrijfsbijeenkomst",
    color: "#38B8C4",
    Icon: Hospital,
    tagline: "Van informeel overleg tot formele bijeenkomst — professioneel en goed georganiseerd.",
    intro:
      "Een online bedrijfsbijeenkomst is meer dan een videovergadering. Wij ontwerpen sessies met een duidelijke structuur, echte interactie en een professionele uitstraling — zodat uw mensen er klaar voor zijn en er iets uitkomt.",
    outcomes: [
      "Een bijeenkomst die loopt zoals gepland",
      "Deelnemers die actief meedoen",
      "Professionele uitstraling voor uw organisatie",
    ],
    forWho: "Bedrijven, organisaties, afdelingen van elke omvang",
    range: "30–500 deelnemers",
    steps: [
      { title: "Intake", body: "Doel, doelgroep en gewenste uitkomst." },
      { title: "Ontwerp", body: "Programma, platform en interactiemomenten." },
      { title: "Repetitie", body: "Technische doorloop met betrokkenen." },
      { title: "Live productie", body: "Volledige begeleiding op de dag zelf." },
    ],
  },
  brainstormen: {
    title: "Online brainstormen",
    color: "#9E7C18",
    Icon: Brain,
    tagline: "Creatieve sessies die écht ideeën opleveren — ook op afstand.",
    intro:
      "Online brainstormen vraagt om een andere aanpak dan in een fysieke ruimte. Wij ontwerpen sessies met de juiste energie, de juiste tools en de juiste begeleiding — zodat ideeën stromen en het beste naar boven komt.",
    outcomes: [
      "Een gevulde ideeënbank met bruikbare input",
      "Energie en creativiteit bij de deelnemers",
      "Concrete volgende stappen uit de brainstorm",
    ],
    forWho: "Innovatieteams, marketingafdelingen, product- en strategie-teams",
    range: "10–100 deelnemers",
    steps: [
      { title: "Intake", body: "Wat is de uitdaging en wat moet de brainstorm opleveren?" },
      { title: "Ontwerp", body: "Creatieve werkvormen, digitale tools en een strakke tijdsstructuur." },
      { title: "Repetitie", body: "Technische doorloop en afstemming met facilitatoren." },
      { title: "Live productie", body: "Wij faciliteren de sessie van begin tot eind." },
    ],
  },
  bedrijfsfeest: {
    title: "Online bedrijfsfeest",
    color: "#C8A020",
    Icon: PartyPopper,
    tagline: "Een feest dat mensen écht bijblijft — ook online.",
    intro:
      "Een online bedrijfsfeest hoeft geen compromis te zijn. Games, live entertainment, escape rooms en sociale ruimtes — wij ontwerpen een avond of middag die net zo memorabel is als een fysiek evenement.",
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
  },
  escaperoom: {
    title: "Online Escaperoom",
    color: "#A83030",
    Icon: KeyRound,
    tagline: "Teambuilding met hoge betrokkenheid — spannend, laagdrempelig en online.",
    intro:
      "Onze online escape rooms zijn ontworpen voor teams die willen samenwerken, lachen en iets beleven. Van EscapeMasters tot het cybersecurity-thema R@venHack — wij bieden formats die passen bij elk doel en elke groep.",
    outcomes: [
      "Teams die samenwerken onder druk",
      "Hoge energie en betrokkenheid",
      "Een ervaring die mensen verbindt",
    ],
    forWho: "Teams, afdelingen, onboarding-groepen, evenementen",
    range: "10–200 deelnemers",
    steps: [
      { title: "Intake", body: "Groepsgrootte, doel en gewenste thema." },
      { title: "Ontwerp", body: "Format-keuze en eventuele maatwerk-elementen." },
      { title: "Briefing", body: "Deelnemers worden voorbereid, techniek staat klaar." },
      { title: "Live productie", body: "Volledig begeleid door onze game-masters." },
    ],
  },
  ontwikkeltraject: {
    title: "Online ontwikkeltraject",
    color: "#1E2844",
    Icon: Milestone,
    tagline: "Leren en ontwikkelen in een online setting die écht werkt.",
    intro:
      "Een online ontwikkeltraject vraagt om meer dan video-colleges. Wij ontwerpen trajecten waarbij deelnemers actief leren: via interactie, oefening, reflectie en samenwerking — ondersteund door de juiste technologie.",
    outcomes: [
      "Deelnemers die daadwerkelijk leren en groeien",
      "Een traject dat past bij de leercultuur van uw organisatie",
      "Borging van geleerde vaardigheden in de praktijk",
    ],
    forWho: "L&D-teams, HR-afdelingen, opleidingsinstituten",
    range: "10–100 deelnemers per cohort",
    steps: [
      { title: "Intake", body: "Leerdoelen, doelgroep en beschikbare tijd." },
      { title: "Ontwerp", body: "Modulaire opbouw, werkvormen en digitale leeromgeving." },
      { title: "Pilot", body: "Testrun met eerste groep en bijsturing." },
      { title: "Uitrol", body: "Volledige begeleiding per sessie of cohort." },
    ],
  },
  klankbordgroep: {
    title: "Online klankbordgroep",
    color: "#788A76",
    Icon: Ear,
    tagline: "Luisteren naar de mensen die er het meest toe doen.",
    intro:
      "Een klankbordgroep is een waardevolle manier om input te verzamelen, draagvlak te toetsen en relaties te onderhouden. Wij ontwerpen online sessies waarbij de klankbordfunctie écht tot zijn recht komt.",
    outcomes: [
      "Waardevolle input van een betrokken groep",
      "Versterkte relatie met stakeholders",
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
  },
  "world-cafe": {
    title: "Online World Café",
    color: "#C09020",
    Icon: Coffee,
    tagline: "Diepgaande gesprekken in kleine groepen, met grote groepen.",
    intro:
      "Het World Café-format is ideaal voor het uitwisselen van kennis en het bouwen van gedeeld inzicht. Wij vertalen dit krachtige format naar een online setting — met tafelgesprekken, rondgang en plenaire oogst.",
    outcomes: [
      "Diepgaande gesprekken in kleine groepen",
      "Gedeeld inzicht over een complex vraagstuk",
      "Verbinding tussen mensen met verschillende achtergronden",
    ],
    forWho: "Organisaties die willen leren van en met elkaar",
    range: "30–200 deelnemers",
    steps: [
      { title: "Intake", body: "Centrale vraag, groepsgrootte en gewenste output." },
      { title: "Ontwerp", body: "Tafelindeling, vraagstelling en rondgangstructuur." },
      { title: "Repetitie", body: "Technische doorloop met tafelgastheren/-vrouwen." },
      { title: "Live productie", body: "Wij faciliteren het volledige World Café." },
    ],
  },
  alv: {
    title: "Online ALV",
    color: "#72C8D4",
    Icon: Vote,
    tagline: "Statutair correct, goed gestructureerd en toch levendig.",
    intro:
      "Een online Algemene Ledenvergadering vraagt om de juiste technische infrastructuur: stemmodules, aanwezigheidsregistratie, quorum-bewaking en een gestructureerde vragenronde. Wij regelen het — zodat uw bestuur zich kan richten op de inhoud.",
    outcomes: [
      "Een statutair correcte vergadering",
      "Leden die actief deelnemen",
      "Soepel verloop zonder technische problemen",
    ],
    forWho: "Verenigingen, stichtingen, coöperaties",
    range: "50–600 deelnemers",
    steps: [
      { title: "Intake", body: "Agenda, stempunten, quorum-eisen en technische wensen." },
      { title: "Ontwerp", body: "Platform-inrichting, stemmingsmodule en vragenronde." },
      { title: "Repetitie", body: "Volledige technische doorloop met bestuur en hosts." },
      { title: "Live productie", body: "Wij draaien de vergadering technisch van begin tot eind." },
    ],
  },
  strategiedagen: {
    title: "Online strategiedagen",
    color: "#389068",
    Icon: Crosshair,
    tagline: "Een dag die leidt tot besluiten, niet alleen presentaties.",
    intro:
      "Wij ontwerpen strategiedagen waarbij deelnemers niet passief naar presentaties kijken, maar actief bijdragen aan de uitkomst. Van vraagstelling tot draagvlak — wij begeleiden het hele traject, technisch en inhoudelijk.",
    outcomes: [
      "Heldere besluiten aan het einde van de dag",
      "Breed draagvlak voor de koers",
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
  },
  "open-space": {
    title: "Online Open Space",
    color: "#5480C0",
    Icon: Pin,
    tagline: "De agenda bepalen met de groep zelf — open, energiek en productief.",
    intro:
      "Open Space Technology is een krachtige methode voor grote groepen: de deelnemers bepalen zelf de agenda. Wij vertalen dit format naar een online setting die de vrijheid van Open Space behoudt.",
    outcomes: [
      "Een agenda die leeft bij de deelnemers",
      "Hoge energie en eigenaarschap",
      "Onverwachte maar waardevolle gesprekken",
    ],
    forWho: "Organisaties die willen vernieuwen, leren of samenwerken",
    range: "30–300 deelnemers",
    steps: [
      { title: "Intake", body: "Centrale uitdaging of thema dat de groep bij elkaar brengt." },
      { title: "Ontwerp", body: "Platform-inrichting voor parallelle sessies en marketplace." },
      { title: "Briefing", body: "Deelnemers worden voorbereid op het Open Space-principe." },
      { title: "Live productie", body: "Wij faciliteren het volledige Open Space-event." },
    ],
  },
  conferentie: {
    title: "Online conferentie",
    color: "#184860",
    Icon: MonitorPlay,
    tagline: "Professionele conferenties voor grote groepen — interactief en goed geproduceerd.",
    intro:
      "Een online conferentie vraagt om een strakke technische productie én een inhoudelijke aanpak die deelnemers betrokken houdt. Wij verzorgen beide: van keynotes tot parallelle sessies en netwerkmomenten.",
    outcomes: [
      "Een professionele conferentie-ervaring",
      "Deelnemers die geïnspireerd en verbonden vertrekken",
      "Parallelle sessies die soepel verlopen",
    ],
    forWho: "Brancheorganisaties, kennisinstellingen, grote bedrijven",
    range: "100–1000 deelnemers",
    steps: [
      { title: "Intake", body: "Programma, sprekers, sessiestructuur en technische eisen." },
      { title: "Ontwerp", body: "Platform, plenaire + parallelle sessies, netwerkmomenten." },
      { title: "Repetitie", body: "Volledige technische doorloop met alle sprekers en hosts." },
      { title: "Live productie", body: "Professionele productie van begin tot eind." },
    ],
  },
  "community-building": {
    title: "Online Community Building",
    color: "#C8A020",
    Icon: Handshake,
    tagline: "Een community bouwen die mensen écht verbindt.",
    intro:
      "Een sterke community ontstaat niet vanzelf — ook niet online. Wij ontwerpen bijeenkomsten en structuren die verbinding stimuleren, bijdragen belonen en de community laten groeien.",
    outcomes: [
      "Leden die actief deelnemen en terugkomen",
      "Verbinding tussen mensen met gedeelde doelen",
      "Een community die zichzelf versterkt",
    ],
    forWho: "Ledenorganisaties, alumni, professionele netwerken, platforms",
    range: "50–500 deelnemers",
    steps: [
      { title: "Intake", body: "Wie zijn uw leden, wat bindt ze en wat wilt u opbouwen?" },
      { title: "Ontwerp", body: "Bijeenkomsten, interactiestructuren en community-ritme." },
      { title: "Lancering", body: "Eerste bijeenkomst als start van een terugkerende structuur." },
      { title: "Begeleiding", body: "Doorlopende ondersteuning bij opbouw en beheer." },
    ],
  },
  webinar: {
    title: "Interactieve Webinar",
    color: "#C85870",
    Icon: Video,
    tagline: "Webinars die mensen boeien — niet alleen zenden, maar verbinden.",
    intro:
      "Een webinar hoeft geen eenrichtingsuitzending te zijn. Wij ontwerpen interactieve webinars met polls, Q&A, breakouts en live demonstraties — zodat deelnemers actief meedoen en uw boodschap beklijft.",
    outcomes: [
      "Betrokken deelnemers die actief meedoen",
      "Een heldere boodschap die beklijft",
      "Concrete opvolging na afloop",
    ],
    forWho: "Marketing-, communicatie- en L&D-teams, kennisorganisaties",
    range: "50–1000 deelnemers",
    steps: [
      { title: "Intake", body: "Doel, doelgroep en gewenste interactieniveau." },
      { title: "Ontwerp", body: "Presentatiestructuur, interactiemomenten en technische set-up." },
      { title: "Repetitie", body: "Technische doorloop met sprekers en hosts." },
      { title: "Live productie", body: "Volledig begeleid, inclusief live Q&A en technische support." },
    ],
  },
  "team-ontwikkeling": {
    title: "Online Team Ontwikkeling",
    color: "#786418",
    Icon: Users2,
    tagline: "Teams die beter samenwerken — ook als ze ver van elkaar werken.",
    intro:
      "Online teamontwikkeling vraagt om meer dan een training. Wij ontwerpen trajecten waarbij teams samen leren, reflecteren en experimenteren — met blijvend effect op samenwerking, communicatie en resultaat.",
    outcomes: [
      "Een team dat beter samenwerkt",
      "Meer wederzijds begrip en vertrouwen",
      "Concrete afspraken over werkwijze en communicatie",
    ],
    forWho: "Teams, afdelingen, (project)managers",
    range: "10–50 deelnemers",
    steps: [
      { title: "Intake", body: "Teamdynamiek, uitdagingen en gewenste verandering." },
      { title: "Ontwerp", body: "Werkvormen, reflectiemomenten en teamoefeningen op maat." },
      { title: "Pilot", body: "Eerste sessie als startpunt van het traject." },
      { title: "Begeleiding", body: "Doorlopende ondersteuning bij het ontwikkeltraject." },
    ],
  },
  "remote-office": {
    title: "Remote Office",
    color: "#A8BEB0",
    Icon: Laptop,
    tagline: "Een virtueel kantoor dat afstanden overbrugt.",
    intro:
      "Een Remote Office of Virtual Office is de digitale thuisbasis voor uw team — voor vergaderingen én de informele momenten daartussen. Wij ontwerpen, bouwen en beheren uw virtual office op SpatialChat.",
    outcomes: [
      "Een team dat verbonden blijft, ook op afstand",
      "Minder geplande calls, meer spontaan contact",
      "Een digitale werkplek die past bij uw cultuur",
    ],
    forWho: "Hybride teams, internationale organisaties, remote-first bedrijven",
    range: "10–500 gebruikers",
    steps: [
      { title: "Intake", body: "Teamsamenstelling, werkwijze en gewenste omgeving." },
      { title: "Ontwerp", body: "Ruimte-indeling, zones en branding op maat." },
      { title: "Lancering", body: "Technische oplevering en onboarding van het team." },
      { title: "Beheer", body: "Doorlopende ondersteuning en aanpassingen." },
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

  const { title, color, Icon, tagline, intro, outcomes, forWho, range, steps } = event;

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="bg-[#F5F5F5] py-14 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <Link
            href="/nl/events"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#28A8AA] hover:underline mb-8"
          >
            ← Terug naar alle formats
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Events & Formats</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-tight mb-5">{title}</h1>
              <p className="text-lg text-[#545454] leading-relaxed mb-8 max-w-lg">{tagline}</p>
              <Link
                href="/nl/contact"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
              >
                Plan een gesprek →
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div
                className="w-48 h-48 rounded-full flex items-center justify-center shadow-md"
                style={{ backgroundColor: color }}
              >
                <Icon className="w-24 h-24 text-white" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INHOUD ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Over dit format</p>
              <p className="text-[#545454] leading-relaxed mb-8">{intro}</p>
              <div className="space-y-4">
                {forWho && (
                  <div>
                    <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">Voor wie</p>
                    <p className="text-sm text-[#545454]">{forWho}</p>
                  </div>
                )}
                {range && (
                  <div>
                    <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">Schaal</p>
                    <p className="text-sm text-[#545454]">{range}</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-6">Wat het oplevert</p>
              <div className="space-y-4">
                {outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: color }}
                    >
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-sm text-[#545454] leading-relaxed pt-1">{o}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AANPAK ── */}
      <section className="bg-[#F0F0EA] py-16 border-b border-[#E5E5DF]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Onze aanpak</p>
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-10">Van eerste gesprek tot live productie.</h2>
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

      {/* ── CTA ── */}
      <CTABlock />

    </div>
  );
}
