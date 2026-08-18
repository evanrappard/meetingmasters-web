import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import YouTubeFacade from "@/components/ui/YouTubeFacade";
import { JsonLd } from "@/components/ui/JsonLd";
import { versies, stappen, faq, NL } from "@/app/nl/games-tools/ravenhack/data";
import { RAVENHACK_EN } from "@/app/nl/games-tools/ravenhack/tekst-en";
import type { Taal } from "@/lib/talen";

/** R@venHack, in beide talen. Beelden en volgorde zijn taalloos. */

export default function RavenHackPagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? RAVENHACK_EN : NL;
  const fasen = engels ? stappen.map((s, i) => ({ ...s, ...RAVENHACK_EN.hoe.stappen[i] })) : stappen;
  const varianten = engels ? versies.map((v, i) => ({ ...v, ...RAVENHACK_EN.versies.items[i] })) : versies;
  const faqs = engels ? RAVENHACK_EN.faq : faq;
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
        <div className="relative w-full md:h-[44vw] md:min-h-[320px] md:max-h-[560px]">
          <Image
            src="/images/ravenhack-hero.webp"
            alt={t.hero.beeldAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-20">
              <div className="max-w-[600px]">
                <p className="inline-block bg-black/35 rounded px-2.5 py-1 text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
                  {t.hero.kicker}
                 </p>
                <h1
                  className="text-[1.75rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-5"
                  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
                >
                  {t.hero.titel1}
                  <br />
                  {t.hero.titel2}
                </h1>
                <p
                  className="text-white text-lg font-medium leading-relaxed mb-8"
                  style={{
                    textShadow:
                      "0 1px 2px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6)",
                  }}
                >
                  {t.hero.intro}
                 </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={t.links.boeken}
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    {t.hero.cta}
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT HET IS + VOOR WIE ── */}
      <section className="bg-white pt-16 pb-10 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                {t.wat.kicker}
               </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.wat.titel}
               </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                {t.wat.body}
               </p>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                {t.voorWie.kicker}
               </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.voorWie.titel}
               </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                {t.voorWie.body}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOE HET WERKT ── */}
      <section className="bg-[#F4F7F9] pt-10 pb-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              {t.hoe.kicker}
             </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.hoe.titel}
             </h2>
            <p className="text-[#545454] leading-relaxed">
              {t.hoe.onder}
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {fasen.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB] flex flex-col"
              >
                <div className="relative h-40">
                  <Image src={s.img} alt={s.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#28A8AA] mb-4">
                    {s.tag}
                  </span>
                  <h3 className="font-bold text-[#2D2D2D] text-lg mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#545454] leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWEE VERSIES ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              {t.versies.kicker}
             </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.versies.titel}
             </h2>
            <p className="text-[#545454] leading-relaxed">
              {t.versies.onder}
             </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {varianten.map((v) => (
              <div
                key={v.title}
                className={`bg-white rounded p-7 shadow-sm border ${
                  v.highlight ? "border-[#EEBE3D]/60" : "border-[#EBEBEB]"
                } flex flex-col`}
              >
                <div className="w-8 h-1 bg-[#EEBE3D] rounded mb-4" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#28A8AA] mb-3">
                  {v.tag}
                </span>
                <h3 className="font-bold text-[#2D2D2D] text-xl mb-2 leading-snug">
                  {v.title}
                </h3>
                <p className="text-[#2D2D2D] font-semibold text-sm mb-3">
                  {v.lead}
                </p>
                <p className="text-sm text-[#545454] leading-relaxed mb-5">
                  {v.body}
                </p>
                <ul className="space-y-2 mb-6">
                  {v.kenmerken.map((k) => (
                    <li
                      key={k}
                      className="flex items-start gap-2 text-sm text-[#545454] leading-relaxed"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 flex-none rounded-full bg-[#EEBE3D]" />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3">
                  <Link
                    href={t.links.boeken}
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    {t.versies.cta}
                  </Link>
                  <Link
                    href={t.links.offerte}
                    className="border border-[#D4D4D4] text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded hover:border-[#2D2D2D] transition-colors"
                  >
                    {t.versies.kosten}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEELD + PRAKTIJK ── */}
      <section className="bg-[#FAFAFA] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                {t.praktijk.kicker}
               </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.praktijk.titel}
               </h2>
              <p className="text-[#2D2D2D] font-semibold text-lg leading-relaxed mb-4">
                {t.praktijk.lead}
               </p>
              <p className="text-[#545454] leading-relaxed mb-4">
                {t.praktijk.body}
               </p>
              <p className="text-[#545454] leading-relaxed">
                {t.praktijk.duur}
               </p>
            </div>
            <YouTubeFacade
              videoId="5g3Vv51_hR0"
              poster="/images/ravenhack-video-poster.jpg"
              title="R@venHack"
            />
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
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-[#545454] leading-relaxed">
                  {item.a}
                </p>
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
