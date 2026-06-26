import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  Target, Mic2, Megaphone, Vote,
  UsersRound, GraduationCap, Lightbulb, DoorOpen,
  Sparkles, Snowflake, Handshake,
  MapPin, MessageCircle, ScanSearch, Coffee,
  Radio, MonitorPlay, Pin, Network,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Event Formats | MeetingMasters",
  description:
    "20 online event formats voor elke bijeenkomst — van strategiedagen en webinars tot escape rooms, participatietrajecten en community events. Ontworpen, begeleid en geproduceerd door MeetingMasters.",
};

const results = [
  {
    num: "01",
    title: "Meer expertise",
    body: "Meedenken vanuit ervaring, ontzorgen vanuit gastvrijheid: alles loopt strak, rustig en verzorgd.",
  },
  {
    num: "02",
    title: "Meer betrokkenheid",
    body: "Relevante interactie versterkt vertrouwen, verbinding en reputatie.",
  },
  {
    num: "03",
    title: "Meer impact",
    body: "Strategiedagen, webinars en events die echt iets opleveren. Meer draagvlak, scherpere keuzes en betere opvolging.",
  },
];

export type EventFormat = {
  slug: string;
  title: string;
  desc: string;
  iconSrc?: string;
  bg: string;
  ic: string;
  Icon: LucideIcon;
};

type EventCategory = {
  id: string;
  label: string;
  formats: EventFormat[];
};

export const eventCategories: EventCategory[] = [
  {
    id: "koers",
    label: "Koers & Besluitvorming",
    formats: [
      {
        slug: "strategiedagen",
        title: "Online strategiedag",
        desc: "Een dag die leidt tot besluiten, niet alleen presentaties.",
        iconSrc: "/images/icons/strategiedagen.png",
        bg: "radial-gradient(circle at 38% 38%, #6CCECE, #38BCBC)",
        ic: "text-white",
        Icon: Target,
      },
      {
        slug: "townhall",
        title: "Online townhall",
        desc: "Grote interne bijeenkomsten die de hele organisatie op één lijn brengen.",
        iconSrc: "/images/icons/townhall.png",
        bg: "radial-gradient(circle at 38% 38%, #ADB4A4, #989F8F)",
        ic: "text-white",
        Icon: Mic2,
      },
      {
        slug: "all-hands",
        title: "Online all-hands",
        desc: "Open gesprek tussen directie en medewerkers — transparant en live.",
        bg: "radial-gradient(circle at 38% 38%, #F8D84A, #EEBE3D)",
        ic: "text-[#696758]",
        Icon: Megaphone,
      },
      {
        slug: "alv",
        title: "Online ALV",
        desc: "Statutair correct, goed gestructureerd en toch levendig.",
        bg: "radial-gradient(circle at 38% 38%, #C0D8D0, #A0C8C0)",
        ic: "text-[#4A6860]",
        Icon: Vote,
      },
    ],
  },
  {
    id: "leren",
    label: "Leren & Ontwikkelen",
    formats: [
      {
        slug: "team-ontwikkeling",
        title: "Online teambuilding",
        desc: "Teams die beter samenwerken — ook als ze ver van elkaar werken.",
        bg: "radial-gradient(circle at 38% 38%, #F5BEC8, #EFA1AF)",
        ic: "text-[#696758]",
        Icon: UsersRound,
      },
      {
        slug: "ontwikkeltraject",
        title: "Online training & workshop",
        desc: "Leren en groeien in een online setting die écht werkt.",
        iconSrc: "/images/icons/trainingen-en-workshops.png",
        bg: "radial-gradient(circle at 38% 38%, #3ABABA, #1E9898)",
        ic: "text-white",
        Icon: GraduationCap,
      },
      {
        slug: "brainstormen",
        title: "Online brainstormen",
        desc: "Creatieve sessies die écht ideeën opleveren — ook op afstand.",
        bg: "radial-gradient(circle at 38% 38%, #FFEEC1, #F5D070)",
        ic: "text-[#696758]",
        Icon: Lightbulb,
      },
      {
        slug: "onboardingdag",
        title: "Online onboardingdag",
        desc: "Nieuwe medewerkers welkom heten op een manier die écht iets opbouwt.",
        bg: "radial-gradient(circle at 38% 38%, #7A7868, #696758)",
        ic: "text-white",
        Icon: DoorOpen,
      },
    ],
  },
  {
    id: "verbinding",
    label: "Verbinding & Plezier",
    formats: [
      {
        slug: "bedrijfsfeest",
        title: "Online bedrijfsfeest",
        desc: "Een feest dat mensen écht bijblijft — ook online.",
        iconSrc: "/images/icons/bedrijfsfeest.png",
        bg: "radial-gradient(circle at 38% 38%, #D85E7A, #C64A60)",
        ic: "text-white",
        Icon: Sparkles,
      },
      {
        slug: "kerstfeest",
        title: "Online kerstfeest",
        desc: "Een online eindejaarsfeest dat warm aanvoelt en lang wordt naverteld.",
        bg: "radial-gradient(circle at 38% 38%, #A83058, #882040)",
        ic: "text-white",
        Icon: Snowflake,
      },
      {
        slug: "teamuitje",
        title: "Online teamuitje",
        desc: "Een teamuitje dat verbindt — ontspannen samen, ook op afstand.",
        bg: "radial-gradient(circle at 38% 38%, #7AAFC8, #4A85A8)",
        ic: "text-white",
        Icon: Sparkles,
      },
      {
        slug: "community-building",
        title: "Online Community Building",
        desc: "Een community bouwen die mensen écht verbindt.",
        iconSrc: "/images/icons/communitybuilding.png",
        bg: "radial-gradient(circle at 38% 38%, #FFF8E0, #FFEEC1)",
        ic: "text-[#696758]",
        Icon: Handshake,
      },
    ],
  },
  {
    id: "dialoog",
    label: "Dialoog & Inspraak",
    formats: [
      {
        slug: "bewonersparticipatie",
        title: "Online bewonersparticipatie",
        desc: "Inwoners betrekken bij beleid, plannen en beslissingen — online.",
        iconSrc: "/images/icons/bewonersparticipatie.png",
        bg: "radial-gradient(circle at 38% 38%, #52C4C4, #28A8AA)",
        ic: "text-white",
        Icon: MapPin,
      },
      {
        slug: "klankbordgroep",
        title: "Online klankbordgroep",
        desc: "Luisteren naar de mensen die er het meest toe doen.",
        iconSrc: "/images/icons/netwerkbijeenkomst.png",
        bg: "radial-gradient(circle at 38% 38%, #B0B8A8, #989F8F)",
        ic: "text-white",
        Icon: MessageCircle,
      },
      {
        slug: "focusgroep",
        title: "Online focusgroep",
        desc: "Diepgaand onderzoek naar wat mensen écht denken — goed gefaciliteerd.",
        bg: "radial-gradient(circle at 38% 38%, #D4DDD0, #B8C4B0)",
        ic: "text-[#545454]",
        Icon: ScanSearch,
      },
      {
        slug: "world-cafe",
        title: "Online World Café",
        desc: "Diepgaande gesprekken in kleine groepen, met grote groepen.",
        iconSrc: "/images/icons/worldcafe.png",
        bg: "radial-gradient(circle at 38% 38%, #FFEEC1, #F5D070)",
        ic: "text-[#696758]",
        Icon: Coffee,
      },
    ],
  },
  {
    id: "kennis",
    label: "Kennis & Netwerk",
    formats: [
      {
        slug: "webinar",
        title: "Webinar",
        desc: "Webinars die mensen boeien — niet alleen zenden, maar verbinden.",
        bg: "radial-gradient(circle at 38% 38%, #C64A60, #A83852)",
        ic: "text-white",
        Icon: Radio,
      },
      {
        slug: "conferentie",
        title: "Online conferentie",
        desc: "Professionele conferenties voor grote groepen — interactief en goed geproduceerd.",
        iconSrc: "/images/icons/onlineconferenties.png",
        bg: "radial-gradient(circle at 38% 38%, #555C50, #404840)",
        ic: "text-white",
        Icon: MonitorPlay,
      },
      {
        slug: "open-space",
        title: "Online Open Space",
        desc: "De agenda bepalen met de groep zelf — open, energiek en productief.",
        iconSrc: "/images/icons/openspace.png",
        bg: "radial-gradient(circle at 38% 38%, #F5BEC8, #EFA1AF)",
        ic: "text-[#696758]",
        Icon: Pin,
      },
      {
        slug: "netwerkevent",
        title: "Online netwerkevent",
        desc: "Mensen verbinden die elkaar nog niet kennen — online en laagdrempelig.",
        bg: "radial-gradient(circle at 38% 38%, #4ABABA, #28A0A0)",
        ic: "text-white",
        Icon: Network,
      },
    ],
  },
];

export const eventFormats: EventFormat[] = eventCategories.flatMap((c) => c.formats);

const eventFaq = [
  { q: "Wat is een online event?", a: "Een online event is een bijeenkomst die volledig digitaal plaatsvindt. Dat kan een webinar zijn, maar ook een conferentie, townhall, netwerkevent, training of strategiedag. Het belangrijkste verschil met een gewone online vergadering is dat een online event bewust wordt ontworpen rondom interactie, betrokkenheid en beleving." },
  { q: "Hoe organiseer je een succesvol online event?", a: "Een succesvol online event begint bij een helder doel. Daarna volgen keuzes over doelgroep, programma, werkvormen, techniek en begeleiding. Juist die combinatie bepaalt of deelnemers actief betrokken blijven of na twintig minuten afhaken." },
  { q: "Welke software gebruiken jullie voor online events?", a: "We hebben ervaring met Zoom, Zoom Events, Teams, SpatialChat en verschillende aanvullende tools voor interactie en samenwerking. Welke omgeving het beste past, hangt af van het doel van het evenement en de gewenste ervaring voor deelnemers." },
  { q: "Hoe houd je deelnemers betrokken tijdens een online event?", a: "Door deelnemers niet alleen te laten kijken, maar actief te laten meedoen. Denk aan gesprekken, polls, breakouts, gezamenlijke opdrachten, netwerkmomenten en interactieve werkvormen. Mensen onthouden vooral waar ze zelf onderdeel van zijn geweest." },
  { q: "Hoeveel deelnemers kunnen deelnemen aan een online event?", a: "Dat varieert van tien deelnemers tot enkele duizenden. De techniek is zelden de beperkende factor. Het ontwerp van het programma bepaalt uiteindelijk wat goed werkt." },
  { q: "Wat kost een online event?", a: "De investering hangt af van het type evenement, de groepsgrootte, de techniek en de gewenste begeleiding. Daarom maken wij altijd een voorstel op maat." },
];

const eventFaqMore = [
  { q: "Wat is het verschil tussen een online event en een webinar?", a: "Een webinar draait meestal om kennisoverdracht rondom één onderwerp en is erg zendergericht. Een online event is vaak breder opgezet en bevat bijvoorbeeld meerdere sessies, netwerkmogelijkheden of interactieve onderdelen. Kennis wordt niet alleen door de spreker gedeeld. De inzichten worden ook gedeeld door deelnemers onderling." },
  { q: "Is een online event net zo effectief als een fysieke bijeenkomst?", a: "Dat hangt af van het doel. Voor kennisdeling, samenwerking en internationale bijeenkomsten biedt online vaak zelfs voordelen. Voor sommige vormen van relatieopbouw of informele ontmoeting blijft fysiek waardevol. Daarom kijken wij altijd eerst naar het doel en daarna pas naar de vorm." },
  { q: "Kan een online event hybride plaatsvinden?", a: "Ja. Daarbij zijn een deel van de deelnemers online aanwezig en een deel op locatie. Dat vraagt wel om een andere aanpak dan een volledig online of volledig fysiek evenement. Wij ontwerpen hybride bijeenkomsten zo dat iedereen gelijkwaardig kan deelnemen." },
  { q: "Kunnen jullie de volledige organisatie verzorgen?", a: "Ja. We ondersteunen organisaties bij ontwerp, programmaontwikkeling, technische productie, deelnemerscommunicatie, sprekersbegeleiding en live ondersteuning." },
  { q: "Hoe lang duurt een online event?", a: "Dat varieert van een compacte sessie van één uur tot een meerdaagse conferentie. De ideale lengte hangt af van het doel en de doelgroep." },
  { q: "Kunnen deelnemers netwerken tijdens een online event?", a: "Ja. Juist online zijn er verrassend veel mogelijkheden voor ontmoeting. Denk aan speeddates, thematafels, koffiekamers, breakoutgesprekken of vrije netwerkruimtes." },
  { q: "Kunnen jullie helpen met interactie en werkvormen?", a: "Ja. Dat is zelfs een belangrijk deel van ons werk. Technologie maakt een online event mogelijk, maar de werkvorm bepaalt of mensen daadwerkelijk betrokken raken." },
  { q: "Wat levert een online event op?", a: "Een goed online event brengt mensen samen rond een gezamenlijk doel. Dat kan kennisdeling zijn, besluitvorming, ontmoeting, betrokkenheid of het ontwikkelen van nieuwe ideeën. Het succes zit niet in het aantal deelnemers, maar in wat mensen meenemen na afloop." },
  { q: "Is een online event geschikt voor internationale deelnemers?", a: "Ja. Online events maken het eenvoudig om deelnemers uit verschillende landen en tijdzones samen te brengen. Daardoor zijn ze vaak efficiënter en toegankelijker dan fysieke alternatieven." },
  { q: "Waarom kiezen organisaties voor MeetingMasters?", a: "Omdat wij niet beginnen bij de techniek, maar bij de bijeenkomst en de deelnemers aan die bijeenkomst. Wij ontwerpen online events vanuit de vraag wat mensen moeten ervaren, leren, bespreken of besluiten. Daarna kiezen we pas de juiste werkvormen en technologie." },
];

const eventFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...eventFaq, ...eventFaqMore].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function EventsPage() {
  return (
    <div className="bg-white">

      <JsonLd data={eventFaqSchema} />

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px]">
          <Image
            src="/images/events-hero.webp"
            alt="Deelnemer kijkt naar een online event in een sfeervolle virtuele tuinomgeving met video-deelnemers — MeetingMasters Events op SpatialChat"
            fill priority
            className="object-cover object-center"
            style={{ filter: "saturate(0.92) brightness(1.03) contrast(0.99)" }}
          />
          {/* Lichte gradient links→rechts — egaal contrast achter de tekstkolom, scherm rechts blijft helder */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[500px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>Virtuele Events</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  Online bijeenkomsten waar mensen echt aanwezig zijn.
                </h1>
                <p className="text-white text-lg leading-relaxed mb-8" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  Een belangrijke bijeenkomst voor 5, 50 of 500 mensen:<br />
                  als het erop aankomt, voldoet de standaard niet.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/nl/expert-advies"
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    Expert advies →
                  </Link>
                  <a
                    href="#formats"
                    className="text-white/80 text-sm font-semibold px-5 py-3 border border-white/30 rounded hover:border-white/60 transition-colors"
                  >
                    Bekijk event formats
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTAATGEBIEDEN ── */}
      <section className="bg-white py-12 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Maatwerk op basis van ruime ervaring</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Bijzondere events verdienen bijzondere aandacht.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {results.map((r) => (
              <div key={r.num}>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-[#EEBE3D] text-2xl font-bold leading-none flex-shrink-0">{r.num}</span>
                  <h3 className="font-bold text-[#2D2D2D] text-lg leading-snug">{r.title}</h3>
                </div>
                <p className="text-sm text-[#545454] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATS: CATEGORIEËN ── */}
      <section id="formats" className="scroll-mt-28 bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">

          {/* Intro + categorie-ankers */}
          <div className="mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Elk type event heeft zijn eigen opbouw en logica.</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-6">
              De vorm volgt het doel. Wat wil je bereiken?
            </h2>
            <nav className="flex flex-wrap gap-2">
              {eventCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#D4D4CC] text-[#696758] hover:border-[#28A8AA] hover:text-[#28A8AA] transition-colors"
                >
                  {cat.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Categorie-blokken */}
          {eventCategories.map((cat, idx) => (
            <div
              key={cat.id}
              id={cat.id}
              className={`scroll-mt-[40vh] ${idx > 0 ? "mt-10" : ""}`}
            >
              <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-5">{cat.label}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-[780px] mx-auto">
                {cat.formats.map(({ slug, title, bg, ic, Icon, iconSrc, desc }) => (
                  <Link
                    key={slug}
                    href={`/nl/events/${slug}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <div
                      className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden flex items-center justify-center mb-3 group-hover:scale-[1.06] transition-transform duration-200"
                      style={{ background: bg, boxShadow: "0 6px 20px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.08)" }}
                    >
                      {iconSrc ? (
                        <Image
                          src={iconSrc}
                          alt={title}
                          fill
                          className="object-cover transition-opacity duration-200 group-hover:opacity-0"
                        />
                      ) : (
                        <Icon
                          className={`w-16 h-16 sm:w-[72px] sm:h-[72px] ${ic} transition-opacity duration-200 group-hover:opacity-0`}
                          strokeWidth={1}
                        />
                      )}
                      {desc && (
                        <div
                          className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ backgroundColor: "rgba(0,0,0,0.52)" }}
                        >
                          <p className="text-white text-[11px] leading-snug font-medium text-center">{desc}</p>
                        </div>
                      )}
                    </div>
                    <p className="font-bold text-[#2D2D2D] text-sm leading-snug group-hover:text-[#28A8AA] transition-colors px-1 max-w-[160px]">
                      {title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-10 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── VISIE ── */}
      <section className="bg-[#F0F0EA] py-16 border-b border-[#E5E5DF]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Een deel van een groter verhaal</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
                Bijeenkomsten waar echt iets gebeurt.
              </h2>
              <p className="text-sm text-[#545454] leading-relaxed mb-8">
                Wij zorgen ervoor dat ontmoetingen maximaal benut worden, met:
              </p>
              <ul className="space-y-5 mb-8">
                {[
                  {
                    kop: "Eventstrategie.",
                    desc: "Welk format past bij uw doel, uw groep en uw moment? Onze specialisten denken mee en helpen u net die stap verder.",
                  },
                  {
                    kop: "Planning & ontwerp.",
                    desc: "Een heldere planning, persoonlijke begeleiding en een gedetailleerd draaiboek: wij begeleiden het hele traject van intake tot evaluatie.",
                  },
                  {
                    kop: "In-meeting support.",
                    desc: "Wij zijn live aanwezig bij uw meeting. Als facilitator, producent en technisch aanspreekpunt. Zodat u zich kunt richten op de mensen en de inhoud.",
                  },
                ].map((p) => (
                  <li key={p.kop} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EEBE3D] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#545454] leading-relaxed">
                      <strong className="text-[#2D2D2D] font-bold">{p.kop}</strong>{" "}{p.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href="/nl/expert-advies"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
              >
                Vrijblijvend advies →
              </Link>
            </div>
            <div className="relative aspect-video rounded overflow-hidden shadow-md">
              <Image
                src="/images/events-spatial.webp"
                alt="Interactief online event in SpatialChat — deelnemers verspreid over een verhaallijn met meerdere niveaus"
                fill className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen over online events
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {eventFaq.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <details className="group max-w-4xl mx-auto mt-10">
            <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
              <span className="group-open:hidden">Meer antwoorden?</span>
              <span className="hidden group-open:inline">Minder antwoorden</span>
              <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#E0E0E0]">
              {eventFaqMore.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock />

    </div>
  );
}
