import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { inbegrepen, faq, NL } from "@/app/nl/virtual-office/huren/data";
import { HUREN_EN } from "@/app/nl/virtual-office/tekst-en-sub";
import type { Taal } from "@/lib/talen";

/** Een virtueel kantoor huren, in beide talen. */

export default function HurenPagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? HUREN_EN : NL;
  const punten = engels ? HUREN_EN.inbegrepen.items : inbegrepen;
  const faqs = engels ? HUREN_EN.faq : faq;
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
          <Image
            src="/images/vo-huren-v2.webp"
            alt={t.hero.beeldAlt}
            fill priority
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
                  <Link href={t.links.offerte} className="text-white/80 text-sm font-semibold px-5 py-3 border border-white/30 rounded hover:border-white/60 transition-colors">
                    {t.hero.offerte}
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT HET IS ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.wat.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
              {t.wat.titel}
             </h2>
            <p className="text-[#545454] leading-relaxed mb-4">
              {t.wat.body1}
             </p>
            <p className="text-[#545454] leading-relaxed">
              {t.wat.body2}
             </p>
          </div>
        </div>
      </section>

      {/* ── INBEGREPEN ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.inbegrepen.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
              {t.inbegrepen.titel}
             </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {punten.map((item) => (
              <div key={item.title} className="bg-white rounded p-6 shadow-sm border border-[#EBEBEB]">
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Community Services — bijkoop */}
          <div className="mt-6 bg-white rounded p-6 shadow-sm border border-[#EBEBEB] border-l-4 border-l-[#EEBE3D]">
            <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-2">{t.inbegrepen.optioneel}</p>
            <p className="text-sm text-[#545454] leading-relaxed">
              {t.inbegrepen.optioneelBody}
             </p>
          </div>
        </div>
      </section>

      {/* ── BEWIJS ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.praktijk.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.praktijk.titel}
               </h2>
              <p className="text-[#545454] leading-relaxed mb-4">
                {t.praktijk.body}
               </p>
              <p className="text-[#545454] leading-relaxed">
                {t.praktijk.veiligheid}
               </p>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-md">
              <Image
                src="/images/oly-bar-milano.webp"
                alt={t.praktijk.beeldAlt}
                fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
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
