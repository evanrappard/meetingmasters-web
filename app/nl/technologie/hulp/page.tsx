import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

// Elke categorie een eigen kleur, zodat de knoppen herkenbaar zijn en de
// pagina niet grijs wordt. De volgorde loopt gelijk met CATEGORIEEN.
const KLEUREN: Record<string, { vlak: string; rand: string; stip: string; hover: string }> = {
  link: { vlak: "bg-[#FFF8E6]", rand: "border-[#EEBE3D]", stip: "bg-[#EEBE3D]", hover: "hover:bg-[#FFFBEE]" },
  audio: { vlak: "bg-[#F0FAFA]", rand: "border-[#28A8AA]", stip: "bg-[#28A8AA]", hover: "hover:bg-[#F5FCFC]" },
  video: { vlak: "bg-[#F2F5EC]", rand: "border-[#8FAF6E]", stip: "bg-[#8FAF6E]", hover: "hover:bg-[#F7F9F3]" },
  overig: { vlak: "bg-[#FBF2F0]", rand: "border-[#D08A78]", stip: "bg-[#D08A78]", hover: "hover:bg-[#FDF7F6]" },
};

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

      {/* ── HERO ──────────────────────────────────────────────────────
          Op groot scherm staan de vier vragen ín het laptopscherm van de
          foto. Het beeld is 2000×1125; het zwarte vlak zit op ongeveer
          47%–92% breed en 12%–64% hoog. Daaronder valt de overlay weg en
          nemen de kaarten in de sectie hieronder het over. */}
      <section className="relative bg-[#2D2D2D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tech-hulp-hero.webp"
            alt="Deelnemer achter een laptop tijdens een online bijeenkomst"
            fill priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/80 lg:via-[#2D2D2D]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/80 to-transparent lg:hidden" />
        </div>

        <div className="relative max-w-content mx-auto px-8 md:px-16 lg:px-20 py-14 md:py-20 lg:py-0 lg:aspect-[16/9] lg:max-h-[620px] lg:flex lg:items-center">
          <div className="max-w-[520px] lg:max-w-[440px]">
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Tech hulp</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.4vw, 3rem)" }}
            >
              Directe hulp bij online meetings
            </h1>
            <p className="text-white/75 text-base leading-relaxed mb-7">
              Kies wat er misgaat, dan sta je er zo weer in. De meeste dingen zijn in drie stappen
              opgelost — en je bent echt niet de enige die dit overkomt.
            </p>
            <Link
              href="/nl/technologie/tools"
              className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
            >
              Meer weten per tool →
            </Link>
          </div>

          {/* De vier vragen, in het zwarte scherm van de laptop. */}
          <div className="hidden lg:block absolute left-[48%] top-[15%] w-[42%] h-[46%]">
            <div className="h-full flex flex-col justify-center gap-2.5 pr-[3%]">
              <p className="text-white/45 text-[10px] font-bold tracking-[0.18em] uppercase mb-1">
                Wat lukt er niet?
              </p>
              {CATEGORIEEN.map((c) => (
                <a
                  key={c.id}
                  href={`#hulp`}
                  className="group flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-2.5 hover:bg-white/15 hover:border-white/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EEBE3D]"
                >
                  <span className={`w-2 h-2 rounded-full ${KLEUREN[c.id]?.stip ?? "bg-white/50"}`} aria-hidden />
                  <span className="text-white text-[15px] font-semibold leading-tight">{c.label}</span>
                  <span className="ml-auto text-white/35 group-hover:text-[#EEBE3D] transition-colors" aria-hidden>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HULP ─────────────────────────────────────────────────────── */}
      <section id="hulp" className="bg-white py-12 md:py-16 scroll-mt-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[860px]">
            <TechHulp categorieen={CATEGORIEEN} tools={TOOLS} vragen={VRAGEN} kleuren={KLEUREN} />
          </div>
        </div>
      </section>

      {/* ── MEER WETEN PER TOOL ──────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[720px] mb-8">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Meer weten per tool</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Waar wij mee werken
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Vier platforms waarin een bijeenkomst plaatsvindt, en de tools die we daarmee combineren.
              Per stuk waar het sterk in is en wanneer we het inzetten.
            </p>
          </div>

          <Link
            href="/nl/technologie/tools"
            className="group block rounded-xl border border-[#EBEBEB] bg-white p-6 sm:p-8 hover:border-[#28A8AA] hover:bg-[#FFFBEE] transition-colors"
          >
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5 items-center">
              {TOOL_LOGOS.map((t) => (
                <li key={t.bestand}>
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

          {/* ── Kleine disclaimer ─────────────────────────────────────── */}
          <div className="mt-10 max-w-[760px] text-[13px] leading-relaxed text-[#8A9493] border-t border-[#E4E4E0] pt-5">
            <p>
              Dit zijn onze eigen inzichten, opgedaan in de praktijk. Of iets werkt, hangt daarnaast af
              van je apparaat en van de instellingen binnen je organisatie — dat kunnen wij niet
              overzien, en niet alles kunnen wij dus oplossen. Vragen over een platform zelf beantwoordt
              de leverancier het best; ligt het aan je telefoon, laptop of computer, dan helpt je eigen
              IT-servicedesk je verder.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
