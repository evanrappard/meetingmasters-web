/**
 * LAYOUT E — Aansluitend op homepage
 * Hero → Resultaatgebieden → Visie → Formats → CTABlock
 * Zelfde sectieritmiek en achtergrondkleuren als de homepage.
 * Preview: localhost:3001/preview/product-e
 */

import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { eventFormats } from "@/app/nl/events/page";

/* ─── DATA ─── */

const results = [
  {
    num: "01",
    title: "Medewerkers die verbonden zijn",
    body: "Mensen die na afloop écht iets gemeen hebben — niet alleen een gedeelde kalenderafspraak.",
  },
  {
    num: "02",
    title: "Besluiten die beklijven",
    body: "Een dag die uitkomsten oplevert: concrete acties, heldere keuzes, breed draagvlak.",
  },
  {
    num: "03",
    title: "Een dag die mensen bijblijft",
    body: "Van de opening tot het einde: een ervaring die mensen meenemen en waar ze op terugkijken.",
  },
];

/* ─── PAGE ─── */

export default function ProductLayoutE() {
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
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Events</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5">
                  Online bijeenkomsten waar mensen echt aanwezig zijn.
                </h1>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Van strategiedag tot kerstborrel — voor groepen van 50 tot 500 mensen.
                  Wij regelen concept, facilitatie en live productie.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/nl/contact"
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    Ervaar het zelf →
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
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Wat het oplevert</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Waarom organisaties ons inschakelen.
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

      {/* ── VISIE ── */}
      <section className="bg-[#F0F0EA] py-16 border-b border-[#E5E5DF]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">Waarom het werkt</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-6">
                Een online bijeenkomst is geen Zoom-call.
              </h2>
              <ul className="space-y-5 mb-8">
                {[
                  { kop: "Wij ontwerpen, faciliteren en produceren.", desc: "U hoeft niet zelf te puzzelen met platforms, agenda's en techniek. Wij leveren het complete pakket." },
                  { kop: "Deelnemers zijn er echt bij.", desc: "Geen passieve kijkers. Wij bouwen in echte interactie: keuzemomenten, breakouts en beweging door de ruimte." },
                  { kop: "Ervaring met 250+ events.", desc: "We weten wat werkt voor 80 mensen en wat anders moet bij 400. Dat onderscheid zit in elk ontwerp." },
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
                Stel ons uw vraag →
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-md">
              <Image
                src="/images/inspiratie-olyhouse.webp"
                alt="Online strategiedag begeleid door MeetingMasters"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── FORMATS: CIRKELGRID ── */}
      <section id="formats" className="bg-white py-16">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Waarvoor kunt u ons inzetten?</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Kies uw format.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-[860px] mx-auto">
            {eventFormats.map(({ slug, title, bg, ic, Icon, iconSrc, desc }) => (
              <Link
                key={slug}
                href={`/nl/events/${slug}`}
                className="group flex flex-col items-center text-center"
              >
                <div
                  className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden flex items-center justify-center mb-3 group-hover:scale-[1.06] transition-transform duration-200"
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
                    <Icon className={`w-[76px] h-[76px] sm:w-[84px] sm:h-[84px] ${ic} transition-opacity duration-200 group-hover:opacity-0`} strokeWidth={1} />
                  )}
                  {desc && (
                    <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: "rgba(0,0,0,0.52)" }}>
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
      </section>

      {/* ── CTA ── */}
      <CTABlock />

    </div>
  );
}
