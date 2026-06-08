import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Office | MeetingMasters",
  description:
    "Een virtuele kantooromgeving waar uw team aanwezig is, ook tussen vergaderingen door. MeetingMasters bouwt, begeleidt en verrijkt — op basis van SpatialChat.",
};

const propositions = [
  {
    tag: "Volledig ontzorgd",
    title: "Huur een kantoor",
    desc: "Wij bouwen, richten in en beheren uw virtual office. Van technische setup tot sfeervolle elementen die verbinding stimuleren. U opent de deur — wij regelen de rest.",
    href: "/virtual-office/huur",
    cta: "Meer over Rent an Office →",
    bg: "bg-[#2D2D2D]",
    tagColor: "text-white/40 bg-white/10",
    textColor: "text-white",
    subColor: "text-white/60",
    ctaColor: "text-[#EEBE3D]",
  },
  {
    tag: "Zelf bouwen",
    title: "Bouw je eigen kantoor",
    desc: "U bouwt uw virtual office zelf — met coaching van MeetingMasters. Wij begeleiden het proces, denken mee over inrichting en geven uw team de kennis om er zelfstandig mee te werken.",
    href: "/virtual-office/bouw",
    cta: "Meer over Build your Own →",
    bg: "bg-white border border-[#E8E8E8]",
    tagColor: "text-[#545454] bg-[#F5F5F2] border border-[#E8E8E8]",
    textColor: "text-[#2D2D2D]",
    subColor: "text-[#777777]",
    ctaColor: "text-[#2D2D2D]",
  },
  {
    tag: "Cultuur & verbinding",
    title: "Kantoor als cultuurmoment",
    desc: "De inrichting van uw virtual office als startpunt voor een breder gesprek. Over hoe u nu samenwerkt, wat u wilt versterken, en wat u achter wilt laten. MeetingMasters begeleidt het traject — van cultuurdiagnose tot kantoorontwerp.",
    href: "/virtual-office/cultuur",
    cta: "Meer over dit traject →",
    bg: "bg-[#FFFDF5] border border-[#EEE8D0]",
    tagColor: "text-[#EEBE3D] bg-[#EEBE3D]/10 border border-[#EEE0A0]",
    textColor: "text-[#2D2D2D]",
    subColor: "text-[#777777]",
    ctaColor: "text-[#2D2D2D]",
  },
];

export default function VirtualOfficePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(340px, 40vw, 500px)" }}>
        <Image
          src="/images/remote-office-virtual.webp"
          alt="Virtueel kantoor in SpatialChat — meerdere ruimtes voor hybride teams"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.08) 100%)" }}
        />
        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 pb-12 md:pb-16 w-full">
            <div className="max-w-[580px]">
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Virtual Office</p>
              <h1
                className="font-bold text-white leading-[1.05] text-balance mb-5"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                De ruimte tussen vergaderingen.
              </h1>
              <p className="text-white/70 text-base leading-relaxed max-w-[480px]">
                Een plek om aanwezig te zijn zonder te vergaderen. Waar collega's u zien,
                binnenlopen en aanhaken — vanzelf, zonder geplande link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT IS EEN VIRTUAL OFFICE ────────────────────────────────── */}
      <section className="bg-[#2D2D2D]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-20 items-start">
            <div>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Wat het is</p>
              <p
                className="text-white font-bold leading-snug text-balance mb-5"
                style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)" }}
              >
                Toen thuiswerken de norm werd, verdween het toevallige contact. Vergaderingen werden het enige contactmoment.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Een virtual office is een online omgeving — gebouwd in SpatialChat — waar uw team
                aanwezig is, ook als er geen meeting gepland staat. Met teamkamers, een koffiehoek,
                een centrale stage en ruimte om gewoon te werken. Deelnemers bewegen als rondje
                door de ruimte; zodra u naar iemand toe beweegt, start er een videogesprek. Spontaan.
                Zonder link.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Het gevoel van deel uitmaken van een groep komt niet vanzelf. Het vraagt een plek.
              </p>
            </div>
            <div className="lg:pt-4">
              <blockquote className="border-l-2 border-[#EEBE3D] pl-5">
                <p className="text-white/80 text-sm leading-relaxed italic mb-3">
                  "Work has left the building. But with the building — we have not left our desire
                  to belong to a group."
                </p>
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
                  Emilie van Rappard, MeetingMasters
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRIE PROPOSITIES ─────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Drie manieren</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Hoe wij samenwerken hangt af van wat u nodig hebt.
            </h2>
            <p className="text-[#777777] text-base mt-3 max-w-[500px]">
              Van volledig ontzorgd tot een strategisch cultuurtraject. Elk startpunt is anders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {propositions.map((p) => (
              <div key={p.title} className={`${p.bg} rounded-lg p-8 flex flex-col`}>
                <span className={`text-[10px] font-bold tracking-[0.15em] uppercase rounded-full px-3 py-1 self-start mb-6 ${p.tagColor}`}>
                  {p.tag}
                </span>
                <h3 className={`font-bold text-xl mb-4 ${p.textColor}`}>{p.title}</h3>
                <p className={`text-sm leading-relaxed flex-1 mb-8 ${p.subColor}`}>{p.desc}</p>
                <Link
                  href={p.href}
                  className={`text-sm font-bold border-b-2 border-[#EEBE3D] pb-0.5 self-start hover:border-current transition-colors ${p.ctaColor}`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE: OLY HOUSE ──────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Uit de praktijk</p>
              <h2
                className="font-bold text-[#2D2D2D] leading-[1.1] text-balance mb-5"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                e-OLYHouse — virtueel clubhuis voor Olympiërs wereldwijd.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-4">
                De World Olympians Association had een permanente online thuisbasis nodig voor
                leden in tientallen landen, verschillende tijdzones, zonder centraal kantoor.
              </p>
              <p className="text-[#545454] leading-relaxed mb-8">
                Wij bouwden e-OLYHouse in SpatialChat: sociale plekken, evenementenkamers en
                altijd-aan aanwezigheid. Leden lopen binnen wanneer ze willen. Actief tijdens
                de Spelen van Parijs en Milaan.
              </p>
              <blockquote className="border-l-2 border-[#EEBE3D] pl-5 text-[#545454] italic text-sm leading-relaxed mb-3">
                "Our Olympians always expect excellence, and with MeetingMasters that's simply the
                standard. The key might lay in the fact that it's just such a joy to work with them."
              </blockquote>
              <p className="text-xs font-bold text-[#2D2D2D] pl-5">World Olympians Association</p>
            </div>

            <div className="relative rounded-lg overflow-hidden" style={{ minHeight: "clamp(240px, 26vw, 360px)" }}>
              <Image
                src="/images/inspiratie-olyhouse.webp"
                alt="e-OLYHouse in SpatialChat — virtueel clubhuis voor de World Olympians Association"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2
              className="font-bold text-[#2D2D2D] leading-tight text-balance mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Wilt u zien hoe het werkt?
            </h2>
            <p className="text-[#2D2D2D]/65 text-base max-w-[420px]">
              Doe een demo in ons eigen virtuele kantoor. U ervaart het platform zelf — en we
              praten over wat het voor uw team kan betekenen.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-8 py-4 rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Plan een demo →
          </Link>
        </div>
      </section>
    </>
  );
}
