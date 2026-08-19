import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import EventsOverzicht from "@/components/events/EventsOverzicht";
import {
  Target, Mic2, Megaphone, Vote,
  UsersRound, GraduationCap, Lightbulb, DoorOpen,
  Sparkles, Snowflake, Handshake,
  MapPin, MessageCircle, ScanSearch, Coffee,
  Radio, MonitorPlay, Pin, Network,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/events")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/events")!] },
  alternates: taalAlternates("/events"),
  title: "Online Event Formats | MeetingMasters",
  description:
    "20 online event formats: van strategiedag en webinar tot escape game, participatietraject en community event. Ontworpen en begeleid door MeetingMasters.",
};

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
        slug: "teambuilding",
        title: "Online teambuilding",
        desc: "Teams die beter samenwerken — ook als ze ver van elkaar werken.",
        bg: "radial-gradient(circle at 38% 38%, #F5BEC8, #EFA1AF)",
        ic: "text-[#696758]",
        Icon: UsersRound,
      },
      {
        slug: "training-workshop",
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
        desc: "Creatieve sessies die écht ideeën opleveren, ook op afstand.",
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
        desc: "Een feest dat mensen écht bijblijft, ook online.",
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
        desc: "Een teamuitje dat verbindt. Ontspannen samen, ook op afstand.",
        bg: "radial-gradient(circle at 38% 38%, #7AAFC8, #4A85A8)",
        ic: "text-white",
        Icon: Sparkles,
      },
      {
        slug: "community-building",
        title: "Online community building",
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
        desc: "Inwoners online betrekken bij beleid, plannen en beslissingen.",
        iconSrc: "/images/icons/bewonersparticipatie.png",
        bg: "radial-gradient(circle at 38% 38%, #52C4C4, #28A8AA)",
        ic: "text-white",
        Icon: MapPin,
      },
      {
        slug: "klankbordgroep",
        title: "Online klankbordgroep",
        desc: "Luisteren naar de mensen die er het meest toe doen.",
        bg: "radial-gradient(circle at 38% 38%, #B0B8A8, #989F8F)",
        ic: "text-white",
        Icon: MessageCircle,
      },
      {
        slug: "focusgroep",
        title: "Online focusgroep",
        desc: "Diepgaand onderzoek naar wat mensen écht denken, goed gefaciliteerd.",
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
        desc: "Webinars die mensen boeien. Niet alleen zenden, maar verbinden.",
        bg: "radial-gradient(circle at 38% 38%, #C64A60, #A83852)",
        ic: "text-white",
        Icon: Radio,
      },
      {
        slug: "conferentie",
        title: "Online conferentie",
        desc: "Professionele conferenties voor grote groepen: interactief en goed geproduceerd.",
        iconSrc: "/images/icons/onlineconferenties.png",
        bg: "radial-gradient(circle at 38% 38%, #555C50, #404840)",
        ic: "text-white",
        Icon: MonitorPlay,
      },
      {
        slug: "open-space",
        title: "Online Open Space",
        desc: "De agenda bepalen met de groep zelf: open, energiek en productief.",
        iconSrc: "/images/icons/openspace.png",
        bg: "radial-gradient(circle at 38% 38%, #F5BEC8, #EFA1AF)",
        ic: "text-[#696758]",
        Icon: Pin,
      },
      {
        slug: "netwerkevent",
        title: "Online netwerkevent",
        desc: "Mensen verbinden die elkaar nog niet kennen, online en laagdrempelig.",
        bg: "radial-gradient(circle at 38% 38%, #4ABABA, #28A0A0)",
        ic: "text-white",
        Icon: Network,
      },
    ],
  },
];

export const eventFormats: EventFormat[] = eventCategories.flatMap((c) => c.formats);

export default function EventsPage() {
  return <EventsOverzicht />;
}
