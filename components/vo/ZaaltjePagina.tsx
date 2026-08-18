import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { locaties, faq, NL } from "@/app/nl/virtual-office/zaaltje/data";
import { ZAALTJE_EN } from "@/app/nl/virtual-office/tekst-en-sub";
import type { Taal } from "@/lib/talen";

/** Een online zaaltje boeken, in beide talen. Beelden komen uit data.ts. */

export default function ZaaltjePagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? ZAALTJE_EN : NL;
  const plekken = engels ? locaties.map((l, i) => ({ ...l, ...ZAALTJE_EN.locaties.items[i] })) : locaties;
  const faqs = engels ? ZAALTJE_EN.faq : faq;
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
            src="/images/vo-zaaltje-v2.webp"
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
                  <Link href="/nl/expert-advies" className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                    {t.hero.cta}
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

      {/* ── KIES JE LOCATIE ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.locaties.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.locaties.titel}
             </h2>
            <p className="text-[#545454] leading-relaxed">
              {t.locaties.onder}
             </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {plekken.map((l) => (
              <div key={l.title} className="bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB]">
                <div className="relative h-40">
                  <Image src={l.img} alt={l.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#2D2D2D] text-base leading-snug">{l.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <Link href={t.links.boeken} className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors self-start">
              {t.locaties.cta}
             </Link>
            <p className="leading-tight">
              <span className="text-2xl sm:text-3xl font-bold text-[#2D2D2D]">{t.locaties.vanaf}</span>
              <span className="block text-sm text-[#545454] mt-1">inclusief korte onboarding-sessie</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── ROUTE OMHOOG ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-8 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.meer.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
              {t.meer.titel}
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href={t.links.huren} className="group bg-white rounded p-7 shadow-sm border border-[#EBEBEB] hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all">
              <h3 className="font-bold text-[#2D2D2D] text-lg mb-2 group-hover:text-[#EEBE3D] transition-colors">{t.meer.huren.title}</h3>
              <p className="text-sm text-[#545454] leading-relaxed mb-4">{t.meer.huren.body}</p>
              <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide">{t.meer.huren.cta}</span>
            </Link>
            <Link href={t.links.cultuur} className="group bg-white rounded p-7 shadow-sm border border-[#EBEBEB] hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all">
              <h3 className="font-bold text-[#2D2D2D] text-lg mb-2 group-hover:text-[#EEBE3D] transition-colors">{t.meer.cultuur.title}</h3>
              <p className="text-sm text-[#545454] leading-relaxed mb-4">{t.meer.cultuur.body}</p>
              <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide">{t.meer.cultuur.cta}</span>
            </Link>
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
