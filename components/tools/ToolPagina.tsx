import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/ui/JsonLd";
import { andereTools } from "@/lib/tools";
import type { Taal } from "@/lib/talen";

/** De vaste teksten van het toolsjabloon, per taal. */
const T = {
  nl: {
    terug: "← Games & tools",
    terugHref: "/nl/games-tools",
    faqKop: (onderwerp: string) => `Veelgestelde vragen over ${onderwerp}`,
    andere: "Andere tools",
    advies: "Vrijblijvend advies →",
    adviesHref: "/nl/expert-advies",
  },
  en: {
    terug: "← Games & tools",
    terugHref: "/en/games-tools",
    faqKop: (onderwerp: string) => `Frequently asked questions about ${onderwerp}`,
    andere: "Other tools",
    advies: "Advice, no strings attached →",
    adviesHref: "/en/expert-advice",
  },
} as const;

export type FaqItem = {
  q: string;
  a: string;
  link?: { label: string; href: string };
};

type Props = {
  /** Sleutel uit lib/tools.ts — bepaalt welke andere tools onderaan staan. */
  huidig: string;
  titel: string;
  /** Eén regel naast de titel, bovenaan. */
  oneliner: string;
  /** De tool zelf. */
  tool: ReactNode;
  /** Het blok onder de tool: label, kop en tekst. */
  over: ReactNode;
  faq: FaqItem[];
  /** Onderwerp in de FAQ-kop, bv. "de inspiratiekaarten". */
  faqOnderwerp: string;
  /** Tekst in de gele balk onderaan. */
  ctaTekst: string;
  /** Beschrijving voor de zoekmachine-structuurdata. */
  appOmschrijving: string;
  appNaam: string;
  taal?: Taal;
};

/**
 * Vaste opbouw voor elke toolpagina: smalle kop, de tool, uitleg, FAQ, andere
 * tools, CTA. Zo blijft de serie één geheel, ook als er tools bij komen.
 */
export default function ToolPagina({
  huidig,
  titel,
  oneliner,
  tool,
  over,
  faq,
  faqOnderwerp,
  ctaTekst,
  appOmschrijving,
  appNaam,
  taal = "nl",
}: Props) {
  const vast = T[taal];
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: appNaam,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: appOmschrijving,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    publisher: { "@type": "Organization", name: "MeetingMasters" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.link ? `${item.a} Zie ${item.link.href}` : item.a,
      },
    })),
  };

  return (
    <div className="bg-white">
      <JsonLd data={appSchema} />
      <JsonLd data={faqSchema} />

      {/* ── KOP: bewust smal, de tool is de hoofdpersoon ── */}
      <section className="bg-white pt-8 pb-5 border-b border-[#EFEDE7]">
        <div className="max-w-content mx-auto px-6 lg:px-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <div>
            <Link
              href={vast.terugHref}
              className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase hover:text-[#D4A835] transition-colors"
            >
              {vast.terug}
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mt-2">
              {titel}
            </h1>
          </div>
          <p className="text-[#545454] text-sm leading-relaxed max-w-[420px]">{oneliner}</p>
        </div>
      </section>

      {/* ── DE TOOL ── */}
      {tool}

      {/* ── OVER DE TOOL ── */}
      <section className="bg-white py-14 border-y border-[#EFEDE7]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-[720px]">{over}</div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            {vast.faqKop(faqOnderwerp)}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faq.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">
                  {item.a}
                  {item.link && (
                    <>
                      {" "}
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener"
                        className="text-[#28A8AA] font-semibold hover:text-[#D4A835] transition-colors"
                      >
                        {item.link.label} →
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANDERE TOOLS — vult zichzelf uit lib/tools.ts ── */}
      <section className="bg-white py-10">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#9A9384] text-xs font-bold tracking-widest uppercase mb-5">
            {vast.andere}
          </p>
          <div className="flex flex-wrap gap-3">
            {andereTools(huidig).map((t) => (
              <Link
                key={t.href}
                href={taal === "en" ? t.hrefEn : t.href}
                className="text-sm font-semibold text-[#545454] border border-[#E4E1D8] rounded px-5 py-2.5 hover:border-[#EEBE3D] hover:bg-[#FFFBEE] hover:text-[#2D2D2D] transition-colors"
              >
                {taal === "en" ? t.labelEn : t.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#EEBE3D] py-12">
        <div className="max-w-content mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <p className="font-bold text-[#2D2D2D] text-lg leading-snug max-w-[560px]">{ctaTekst}</p>
          <Link
            href={vast.adviesHref}
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-7 py-3.5 rounded hover:bg-[#1A1A1A] transition-colors self-start"
          >
            {vast.advies}
          </Link>
        </div>
      </section>
    </div>
  );
}
