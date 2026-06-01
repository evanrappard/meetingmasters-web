import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import {
  Target, Mic2, Megaphone, Vote,
  UsersRound, GraduationCap, Lightbulb, DoorOpen,
  Sparkles, Snowflake, Lock, Handshake,
  MapPin, MessageCircle, ScanSearch, Coffee,
  Radio, MonitorPlay, Pin, Network,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Online Events & Meeting Formats | MeetingMasters",
  description:
    "20 online meeting formats voor elke bijeenkomst — van strategiedagen en webinars tot escape rooms, participatietrajecten en community events. Ontworpen, begeleid en geproduceerd door MeetingMasters.",
};

const results = [
  {
    num: "01",
    title: "Meer impact",
    body: "Strategiedagen, webinars en events die echt iets opleveren. Meer draagvlak, scherpere keuzes en betere opvolging.",
  },
  {
    num: "02",
    title: "Meer support",
    body: "Alles loopt strak, rustig en verzorgd. Minder druk op teams en interne organisatie.",
  },
  {
    num: "03",
    title: "Meer betrokkenheid",
    body: "Mensen voelen zich betrokken en serieus genomen. Dat versterkt vertrouwen, verbinding en reputatie.",
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
        slug: "escaperoom",
        title: "Online escape room",
        desc: "Teambuilding met hoge betrokkenheid — spannend, laagdrempelig en online.",
        bg: "radial-gradient(circle at 38% 38%, #7AAFC8, #4A85A8)",
        ic: "text-white",
        Icon: Lock,
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

export default function EventsPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px]">
          <Image
            src="/images/events-bijeenkomst.webp"
            alt="Online bijeenkomst voor grote groepen — MeetingMasters Events"
            fill priority
            className="object-cover object-center"
            style={{ filter: "contrast(1.05) saturate(1.1) brightness(0.85)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E]/90 via-[#2D2D2D]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[600px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Events & Formats</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5">
                  Online bijeenkomsten waar mensen echt aanwezig zijn.
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Een belangrijke bijeenkomst voor 5, 50 of 500 mensen:<br />
                  als het erop aankomt, voldoet de standaard niet.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/nl/contact"
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    Expert advies →
                  </Link>
                  <a
                    href="#formats"
                    className="text-white/70 text-sm font-semibold px-5 py-3 border border-white/25 rounded hover:border-white/55 transition-colors"
                  >
                    Bekijk formats
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTAATGEBIEDEN ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Maatwerk op basis van ruime ervaring</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Bijzondere events verdienen bijzondere aandacht.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {results.map((r) => (
              <div key={r.num}>
                <p className="text-[#EEBE3D] text-4xl font-bold leading-none mb-5">{r.num}</p>
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-3 leading-snug">{r.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATS: CATEGORIEËN ── */}
      <section id="formats" className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
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
              className={idx > 0 ? "mt-10" : ""}
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
                Een event staat nooit op zichzelf. Wij zorgen ervoor dat ontmoetingen maximaal benut worden, met:
              </p>
              <ul className="space-y-5 mb-8">
                {[
                  {
                    kop: "Event strategie.",
                    desc: "Welk format past bij uw doel, uw groep en uw moment? Wij denken mee vóórdat u begint met plannen — zodat de keuzes die u maakt op een stevige basis staan.",
                  },
                  {
                    kop: "Planning & ontwerp.",
                    desc: "Van intake tot technische doorloop: wij begeleiden het hele traject. U hoeft niet zelf te puzzelen — wij zorgen dat alles klopt op de dag zelf.",
                  },
                  {
                    kop: "In-meeting support.",
                    desc: "Wij zijn aanwezig als facilitator, producent en technisch aanspreekpunt. Zodat ú zich volledig kunt richten op de mensen en de inhoud.",
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
                href="/nl/contact"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
              >
                Vrijblijvend advies →
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-md">
              <Image
                src="/images/inspiratie-olyhouse.webp"
                alt="Online strategiedag begeleid door MeetingMasters"
                fill className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock />

    </div>
  );
}
