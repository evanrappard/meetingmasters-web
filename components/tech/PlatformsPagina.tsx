import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/ui/JsonLd";
import PlatformKeuze from "@/components/ui/PlatformKeuze";
import { PLATFORMS, TOOLS, PLATFORM_FAQ, PLATFORM_FAQ_MEER, NL_TEKST } from "@/app/nl/technologie/tools/data";
import { PLATFORMS_EN } from "@/app/nl/technologie/tools/tekst-en";
import type { Taal } from "@/lib/talen";

/**
 * De pagina Meeting Platforms, in beide talen. Merknamen, logo's, volgorde en
 * accentkleuren zijn taalloos en komen uit data.ts.
 */

export default function PlatformsPagina({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? PLATFORMS_EN : NL_TEKST;
  const faqs = engels ? PLATFORMS_EN.faq : PLATFORM_FAQ;
  const faqsMeer = engels ? PLATFORMS_EN.faqMore : PLATFORM_FAQ_MEER;

  // Beeld, logo en accentkleur blijven; alleen de tekst wisselt.
  const platforms = PLATFORMS.map((p) => {
    const en = engels ? PLATFORMS_EN.platforms.items[p.naam] : undefined;
    return {
      ...p,
      sterk: en?.sterk ?? p.sterk,
      groep: en?.groep ?? p.groep,
      wanneer: en?.wanneer ?? p.wanneer,
      body: en?.body ?? p.body,
      badge: p.badge
        ? { label: engels ? PLATFORMS_EN.platforms.badge : p.badge.label, href: engels ? t.links.spatialchat : p.badge.href }
        : undefined,
    };
  });

  const tools = TOOLS.map((x) => {
    const en = engels ? PLATFORMS_EN.tools.items[x.naam] : undefined;
    return { ...x, sterk: en?.sterk ?? x.sterk, body: en?.body ?? x.body };
  });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...faqs, ...faqsMeer].map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#2D2D2D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/platforms-hero-v2.webp"
            alt={t.hero.videoAlt}
            fill priority quality={90}
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/90 via-[#2D2D2D]/45 lg:via-[#2D2D2D]/20 to-transparent" />
        </div>

        <div className="relative max-w-content mx-auto px-8 md:px-16 lg:px-20 py-16 md:py-24 lg:py-28">
          <div className="max-w-[620px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">{t.hero.kicker}</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)" }}
            >
              {t.hero.titel}
            </h1>
            <p className="text-white/80 text-base leading-relaxed">
              {t.hero.intro}
              <br />
              {t.hero.intro2}
            </p>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ────────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-2">
              {t.platforms.kop}
            </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.platforms.onder}
            </p>
          </div>

          <PlatformKeuze platforms={platforms} standaard="spatialchat" taal={taal} />
        </div>
      </section>

      {/* ── TOOLS ────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[720px] mb-9">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Tools</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.tools.kop}
            </h2>
            <p className="text-[#434343] leading-relaxed">
              {t.tools.onder}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <article key={tool.bestand} className="rounded-lg border border-[#EBEBEB] bg-white p-6 overflow-hidden">
                {tool.beeld && (
                  <div className="-mx-6 -mt-6 mb-5 aspect-[16/10] overflow-hidden">
                    <img src={tool.beeld} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <Logo bestand={tool.bestand} naam={tool.naam} />
                <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide mt-5 mb-1">{t.platforms.sterkIn}</p>
                <p className="font-bold text-[#2D2D2D] leading-snug mb-3">{tool.sterk}</p>
                <p className="text-sm text-[#434343] leading-relaxed">{tool.body}</p>
              </article>
            ))}

            <article className="rounded-lg border border-dashed border-[#D6D6D2] bg-[#FAFAF9] p-6 grid place-items-center text-center">
              <div>
                <p className="font-bold text-[#2D2D2D] mb-1">{t.tools.binnenkort}</p>
                <p className="text-sm text-[#8A9493] leading-relaxed">
                  {t.tools.binnenkortBody}
                </p>
              </div>
            </article>
          </div>

          <p className="text-[#434343] leading-relaxed mt-8 max-w-[720px]">
            {t.tools.eigenVoor}{" "}
            <Link href={t.links.eigenTools} className="text-[#28A8AA] font-semibold hover:underline">
              {t.tools.eigenLink}
            </Link>{" "}
            {t.tools.eigenNa}
          </p>
        </div>
      </section>


      {/* ── VEELGESTELDE VRAGEN ── */}
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

          <details className="group max-w-4xl mx-auto mt-10">
            <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
              <span className="group-open:hidden">Meer antwoorden?</span>
              <span className="hidden group-open:inline">Minder antwoorden</span>
              <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#E0E0E0]">
              {faqsMeer.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#434343] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ── WAT KIES JIJ? ────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-18">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
            <div className="max-w-[620px]">
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{t.keuze.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.keuze.kop}
              </h2>
              <p className="text-[#434343] leading-relaxed mb-4">{t.keuze.alinea1}</p>
              <p className="text-[#434343] leading-relaxed">{t.keuze.alinea2}</p>
            </div>

            <div className="bg-[#F7F7F5] rounded-lg p-7 lg:w-[320px] shrink-0">
              <p className="font-bold text-[#2D2D2D] text-lg leading-snug mb-2">{t.cta.kop}</p>
              <p className="text-sm text-[#434343] leading-relaxed mb-5">
                {t.cta.onder}
              </p>
              <Link
                href={t.links.advies}
                className="block text-center bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                {t.cta.advies}
              </Link>
              <Link
                href={t.links.hulp}
                className="block text-center mt-3 text-[#434343] text-sm font-semibold px-6 py-3 border border-[#D2D2D0] rounded hover:border-[#2D2D2D] transition-colors"
              >
                {t.cta.hulp}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Logo({ bestand, naam, groot = false }: { bestand: string; naam: string; groot?: boolean }) {
  return (
    <img
      src={`/images/logos/tools/${bestand}.webp`}
      alt={naam}
      width={440}
      height={176}
      loading="lazy"
      className={`${groot ? "h-12" : "h-9"} w-auto max-w-full object-contain object-left`}
    />
  );
}


