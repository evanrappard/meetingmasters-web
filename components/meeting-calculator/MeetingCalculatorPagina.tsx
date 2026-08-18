import Link from "next/link";
import ToolKader from "@/components/tools/ToolKader";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Taal } from "@/lib/talen";
import { NL } from "@/app/nl/meeting-calculator/data";
import { CALCULATOR_EN } from "@/app/nl/meeting-calculator/tekst-en";

/**
 * Eén template voor beide talen. De teksten komen uit data.ts (NL) of
 * tekst-en.ts (EN); de opbouw is in beide talen dezelfde.
 */
export default function MeetingCalculatorPagina({ taal = "nl" }: { taal?: Taal }) {
  const t = taal === "en" ? CALCULATOR_EN : NL;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-14 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link
            href={t.links.games}
            className="text-white/40 text-xs font-semibold hover:text-white transition-colors"
          >
            {t.terug}
          </Link>
          <div className="max-w-[640px] mt-6">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              {t.hero.kicker}
            </p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)" }}
            >
              {t.hero.titel}
            </h1>
            <p className="text-white/75 text-base leading-relaxed">{t.hero.intro}</p>
          </div>
        </div>
      </section>

      {/* ── DE TOOL ──────────────────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <ToolKader
            bron={t.links.bron}
            naam={t.tool.naam}
            hoogte="min(84dvh, 940px)"
            taal={taal}
          />
        </div>
      </section>

      {/* ── WAAROM ───────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              {t.waarom.kicker}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
              {t.waarom.titel}
            </h2>
            <p className="text-[#545454] leading-relaxed mb-4">{t.waarom.body1}</p>
            <p className="text-[#545454] leading-relaxed">{t.waarom.body2}</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            {t.faqKop}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.faq.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[640px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
              {t.cta.titel}
            </h2>
            <p className="text-[#545454] leading-relaxed mb-6">{t.cta.body}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={t.links.advies}
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                {t.cta.advies}
              </Link>
              <Link
                href={t.links.tools}
                className="text-[#545454] text-sm font-semibold px-6 py-3 border border-[#D2D2D0] rounded hover:border-[#2D2D2D] transition-colors"
              >
                {t.cta.tools}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
