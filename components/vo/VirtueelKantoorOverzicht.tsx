import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { benefits, scenarios, ingangen, faq, faqMore, NL_TEKST } from "@/app/nl/virtual-office/data";
import { VO_EN } from "@/app/nl/virtual-office/tekst-en";
import type { Taal } from "@/lib/talen";

/**
 * Het Virtueel Kantoor-overzicht, in beide talen. Beelden, volgorde en de drie
 * ingangen zijn taalloos en komen uit data.ts.
 */

export default function VirtueelKantoorOverzicht({ taal = "nl" }: { taal?: Taal }) {
  const engels = taal === "en";
  const t = engels ? VO_EN : NL_TEKST;
  const kpis = engels ? VO_EN.opbrengst.items : benefits;
  const vormen = engels
    ? scenarios.map((s, i) => ({ ...s, ...VO_EN.vormen.items[i] }))
    : scenarios;
  const wegen = engels
    ? ingangen.map((p, i) => ({ ...p, ...VO_EN.ingangen.items[i], href: [t.links.zaaltje, t.links.huren, t.links.cultuur][i] }))
    : ingangen;
  const faqs = engels ? VO_EN.faq : faq;
  const faqsMeer = engels ? VO_EN.faqMore : faqMore;
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
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full md:h-[44vw] md:min-h-[320px] md:max-h-[560px]">
          <video
            poster="/images/vo-hero-office.jpg"
            aria-label="Virtueel kantoor in SpatialChat — een lichte, open kantooromgeving met teamleden die via videocirkels aanwezig zijn"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          >
            <source src="/videos/vo-hero-office-v4.webm" type="video/webm" />
            <source src="/videos/vo-hero-office-v4.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(135% 115% at 0% 100%, rgba(0,0,0,0.62), rgba(0,0,0,0.22) 40%, transparent 66%), linear-gradient(to top, rgba(0,0,0,0.5), transparent 46%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-20">
              <div className="max-w-[600px]">
                <p className="inline-block bg-black/35 rounded px-2.5 py-1 text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">{t.hero.kicker}</p>
                <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  {t.hero.titel1}
                  <br />
                  {t.hero.titel2}
                </h1>
                <p className="text-white text-lg font-medium leading-relaxed mb-8" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6)" }}>
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

      {/* ── WAT HET IS + VOOR WIE ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.watIsHet.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.watIsHet.titel}
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                {t.watIsHet.body}
              </p>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.voorWie.kicker}</p>
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

      {/* ── WAT HET OPLEVERT (KPI) ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.opbrengst.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
              {t.opbrengst.titel}
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {kpis.map((b) => (
              <div key={b.kpi} className="bg-white rounded p-7 shadow-sm border border-[#EBEBEB]">
                <div className="w-8 h-1 bg-[#EEBE3D] rounded mb-4" />
                <h3 className="font-bold text-[#2D2D2D] text-xl mb-2 leading-snug">{b.kpi}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOE ZIET HET ERUIT (TOEPASSINGEN) ── */}
      <section className="bg-[#F0F0EB] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.vormen.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.vormen.titel}
             </h2>
            <p className="text-[#545454] leading-relaxed">
              {t.vormen.onder}
             </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vormen.map((s) => (
              <div key={s.title} className="bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB] flex flex-col">
                <div className="relative h-44">
                  <Image src={s.img} alt={s.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-1.5 leading-snug">{s.title}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DRIE INGANGEN ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.ingangen.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              {t.ingangen.titel}
             </h2>
            <p className="text-[#545454] leading-relaxed">
              {t.ingangen.onder}{" "}
              <span className="whitespace-nowrap">{t.ingangen.slot}</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {wegen.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB] flex flex-col hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all"
              >
                <div className="relative h-44">
                  <Image src={p.img} alt={p.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#28A8AA] mb-4">{p.tag}</span>
                  <h3 className="font-bold text-[#2D2D2D] text-lg mb-3 leading-snug group-hover:text-[#EEBE3D] transition-colors">{p.title}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed flex-1 mb-6">{p.desc}</p>
                  <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide self-start">
                    {p.title} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEWIJS ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.praktijk.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {t.praktijk.titel}
               </h2>
              <p className="text-[#545454] leading-relaxed mb-4">
                {t.praktijk.body1}
               </p>
              <p className="text-[#545454] leading-relaxed">
                {t.praktijk.body2}
               </p>
            </div>
            <div className="relative aspect-video rounded overflow-hidden shadow-md">
              <Image
                src="/images/oly-clubhouse.webp"
                alt="Online clubhuis voor de World Olympians Association in SpatialChat — leden ontmoeten elkaar op een virtueel bergterras"
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

          <details className="group max-w-4xl mx-auto mt-10">
            <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
              <span className="group-open:hidden">{t.meerAntwoorden}</span>
              <span className="hidden group-open:inline">{t.minderAntwoorden}</span>
              <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#E0E0E0]">
              {faqsMeer.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock taal={taal} />
    </div>
  );
}
