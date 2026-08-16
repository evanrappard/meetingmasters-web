import type { Metadata } from "next";
import Link from "next/link";
import TechHulp from "@/components/ui/TechHulp";
import { JsonLd } from "@/components/ui/JsonLd";
import { CATEGORIEEN, TOOLS, VRAGEN } from "./vragen";

export const metadata: Metadata = {
  title: "Directe hulp bij online meetings | MeetingMasters",
  description:
    "Kom je niet binnen, hoor je niemand of doet je camera het niet? Vind hier snel het antwoord voor SpatialChat, Zoom, Zoom Events en Microsoft Teams — in gewone taal, stap voor stap.",
};

const TOOL_LOGOS = [
  { naam: "SpatialChat", bestand: "spatialchat" },
  { naam: "Zoom", bestand: "zoom" },
  { naam: "Microsoft Teams", bestand: "teams" },
  { naam: "Zoom Events", bestand: "zoom-events" },
  { naam: "Miro", bestand: "miro" },
  { naam: "Mentimeter", bestand: "mentimeter" },
  { naam: "Kahoot", bestand: "kahoot" },
  { naam: "streamAlive", bestand: "streamalive" },
  { naam: "Vote Company", bestand: "votecompany" },
];

// Alleen de vragen die als los antwoord bruikbaar zijn, gaan mee naar Google.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: VRAGEN.filter((v) => v.tool === "Algemeen").map((v) => ({
    "@type": "Question",
    name: v.vraag,
    acceptedAnswer: { "@type": "Answer", text: v.antwoord },
  })),
};

export default function HulpPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-14 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Tech hulp</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)" }}
            >
              Directe hulp bij online meetings
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-7">
              Kies hieronder wat er misgaat, dan sta je er zo weer in. De meeste dingen zijn in drie
              stappen opgelost — en je bent echt niet de enige die dit overkomt.
            </p>
            <Link
              href="/nl/technologie/tools"
              className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
            >
              Meer weten per tool →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HULP ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[820px]">
            <TechHulp categorieen={CATEGORIEEN} tools={TOOLS} vragen={VRAGEN} />
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────────────────── */}
      <section className="bg-white pb-12 md:pb-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[820px] border-l-[3px] border-[#C9CFCE] bg-[#FAFAF9] rounded-r-lg px-6 py-5">
            <h2 className="font-bold text-[#2D2D2D] text-base mb-2">Even eerlijk over deze pagina</h2>
            <p className="text-sm text-[#6E7877] leading-relaxed">
              Alles hierboven is opgeschreven op basis van wat wij in de praktijk tegenkomen — honderden
              bijeenkomsten, en steeds dezelfde vragen. Werkt jouw tool net even anders? Dat kan: de makers
              passen hun software regelmatig aan, en hun eigen helppagina&apos;s zijn altijd het meest
              actueel. Kom je er hier niet uit, kijk daar dan ook even.
            </p>
          </div>
        </div>
      </section>

      {/* ── MEER WETEN PER TOOL ──────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[720px] mb-8">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Meer weten per tool</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Waar wij mee werken, en waar het ophoudt
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Vier platforms waarin een bijeenkomst plaatsvindt, en de tools die we daarmee combineren.
              Per stuk wat het goed doet — en waar het niet voor bedoeld is.
            </p>
          </div>

          <Link
            href="/nl/technologie/tools"
            className="group block rounded-xl border border-[#EBEBEB] bg-white p-6 sm:p-8 hover:border-[#28A8AA] hover:bg-[#FFFBEE] transition-colors"
          >
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5 items-center">
              {TOOL_LOGOS.map((t) => (
                <li key={t.bestand}>
                  {/* Vaste hoogte, contain: de logo's zijn al op elkaar afgestemd. */}
                  <img
                    src={`/images/logos/tools/${t.bestand}.webp`}
                    alt={t.naam}
                    width={440}
                    height={176}
                    loading="lazy"
                    className="h-10 w-auto max-w-full object-contain object-left"
                  />
                </li>
              ))}
            </ul>
            <span className="inline-block mt-7 text-[#28A8AA] text-sm font-bold group-hover:underline">
              Bekijk alle tools →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
