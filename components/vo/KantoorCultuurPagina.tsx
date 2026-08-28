import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { stappen, faq, NL } from "@/app/nl/virtual-office/kantoor-cultuur/data";
import { CULTUUR_EN } from "@/app/nl/virtual-office/tekst-en-sub";
import type { Taal } from "@/lib/talen";
import HeroBeeld from "@/components/ui/HeroBeeld";

/** Kantoor + Cultuur, in beide talen. */

export default function KantoorCultuurPagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? CULTUUR_EN : NL;
  // De nummers 01 t/m 04 zijn taalloos en blijven uit de Nederlandse lijst komen.
  const fasen = engels
    ? stappen.map((s, i) => ({ ...s, ...CULTUUR_EN.traject.stappen[i] }))
    : stappen;
  const faqs = engels ? CULTUUR_EN.faq : faq;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full md:h-[42vw] md:min-h-[300px] md:max-h-[520px]">
          <HeroBeeld
            src="/images/vo-fundament-v2.webp"
            alt={t.hero.beeldAlt}
            fill priority quality={90}
            className="object-cover object-center"
            style={{ filter: "contrast(1.03) saturate(1.06)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-16">
              <div className="max-w-[600px]">
                <Link href={t.links.terug} className="text-[#28A8AA]/90 text-xs font-bold tracking-widest uppercase mb-4 inline-block hover:text-[#28A8AA] transition-colors" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>
                  {t.terug}
                 </Link>
                <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  {t.hero.titel}
                 </h1>
                <p className="text-white text-base sm:text-lg leading-relaxed mb-7 sm:mb-8" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  {t.hero.intro}
                 </p>
                <div className="flex flex-wrap gap-3">
                  <Link href={t.links.demo} className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                    {t.hero.cta}
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAAR HET ECHT OM GAAT ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.waarom.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
              {t.waarom.titel}
             </h2>
            <p className="text-[#434343] leading-relaxed mb-4">
              {t.waarom.body1}
             </p>
            <p className="text-[#434343] leading-relaxed">
              {t.waarom.body2}
             </p>
          </div>
        </div>
      </section>

      {/* ── HET TRAJECT ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.traject.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.traject.titel}
             </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.traject.onder}
             </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fasen.map((s) => (
              <div key={s.n} className="bg-white rounded p-6 shadow-sm border border-[#EBEBEB]">
                <p className="text-[#EEBE3D] text-3xl font-bold leading-none mb-4">{s.n}</p>
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-[#434343] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOOR WIE + GELOOFWAARDIGHEID ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.voorWie.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.voorWie.titel}
               </h2>
              <p className="text-[#434343] leading-relaxed">
                {t.voorWie.body}
               </p>
            </div>
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.waarom2.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.waarom2.titel}
               </h2>
              <p className="text-[#434343] leading-relaxed">
                {t.waarom2.body}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            {t.faqKop}
           </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#434343] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock taal={taal} />
    </div>
  );
}
