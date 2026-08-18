import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { JsonLd } from "@/components/ui/JsonLd";
import { eventCategories } from "@/app/nl/events/page";
import { eventFaq, eventFaqMore } from "@/app/nl/events/faq";
import { OVERZICHT_EN } from "@/app/nl/events/tekst-en";
import { engelseEventSlug } from "@/app/nl/events/[slug]/tekst-en";
import type { Taal } from "@/lib/talen";

/**
 * Het eventoverzicht, in beide talen. De categorieën, iconen, kleuren en
 * volgorde komen uit page.tsx en zijn taalloos; de Engelse teksten uit
 * tekst-en.ts.
 *
 * Op de Engelse pagina tonen we alleen formats die ook in het Engels bestaan.
 * Een Engelse kaart die naar een Nederlandse pagina wijst is verwarrender dan
 * een kaart minder.
 */

const NL = {
  hero: {
    kicker: "Virtuele Events",
    titel: "Online bijeenkomsten waar mensen echt aanwezig zijn.",
    intro1: "Een belangrijke bijeenkomst voor 5, 50 of 500 mensen:",
    intro2: "als het erop aankomt, voldoet de standaard niet.",
    cta: "Expert advies →",
    formats: "Bekijk event formats",
    videoAlt:
      "Deelnemers bij een online event in een sfeervolle virtuele tuinomgeving met video-deelnemers, MeetingMasters Events op SpatialChat",
  },
  resultaten: {
    kicker: "Maatwerk op basis van ruime ervaring",
    titel: "Bijzondere events verdienen bijzondere aandacht.",
    items: [
      { title: "Meer expertise", body: "Meedenken vanuit ervaring, ontzorgen vanuit gastvrijheid: alles loopt strak, rustig en verzorgd." },
      { title: "Meer betrokkenheid", body: "Relevante interactie versterkt vertrouwen, verbinding en reputatie." },
      { title: "Meer impact", body: "Strategiedagen, webinars en events die echt iets opleveren. Meer draagvlak, scherpere keuzes en betere opvolging." },
    ],
  },
  formats: {
    kicker: "Elk type event heeft zijn eigen opbouw en logica.",
    titel: "De vorm volgt het doel. Wat wil je bereiken?",
  },
  visie: {
    kicker: "Een deel van een groter verhaal",
    titel: "Bijeenkomsten waar echt iets gebeurt.",
    intro: "Wij zorgen ervoor dat ontmoetingen maximaal benut worden, met:",
    punten: [
      { kop: "Eventstrategie.", desc: "Welk format past bij jouw doel, je groep en je moment? Onze specialisten denken mee en helpen je net die stap verder." },
      { kop: "Planning & ontwerp.", desc: "Een heldere planning, persoonlijke begeleiding en een gedetailleerd draaiboek: wij begeleiden het hele traject van intake tot evaluatie." },
      { kop: "In-meeting support.", desc: "Wij zijn live aanwezig bij jouw meeting. Als facilitator, producent en technisch aanspreekpunt. Zodat je je kunt richten op de mensen en de inhoud." },
    ],
    cta: "Vrijblijvend advies →",
    beeldAlt: "Interactief online event in SpatialChat, met deelnemers verspreid over een verhaallijn met meerdere niveaus",
  },
  faqKop: "Veelgestelde vragen over online events",
  meerAntwoorden: "Meer antwoorden?",
  minderAntwoorden: "Minder antwoorden",
  adviesHref: "/nl/expert-advies",
  categorieen: {} as Record<string, string>,
};

const EN = { ...OVERZICHT_EN, adviesHref: "/en/expert-advice" };

export default function EventsOverzicht({ taal = "nl" }: { taal?: Taal }) {
  const t = taal === "en" ? EN : NL;
  /** Het categorielabel in de juiste taal, met terugval op het Nederlands. */
  const label = (cat: { id: string; label: string }) =>
    (taal === "en" ? OVERZICHT_EN.categorieen[cat.id] : undefined) ?? cat.label;
  const faqs = taal === "en" ? OVERZICHT_EN.faq : eventFaq;
  const faqsMeer = taal === "en" ? OVERZICHT_EN.faqMore : eventFaqMore;
  const schema = {
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

      <JsonLd data={schema} />

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full md:h-[44vw] md:min-h-[320px] md:max-h-[560px]">
          <video
            src="/videos/events-hero.mp4"
            poster="/images/events-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={t.hero.videoAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "saturate(0.92) brightness(1.03) contrast(0.99)" }}
          />
          {/* Lichte gradient links→rechts — egaal contrast achter de tekstkolom, scherm rechts blijft helder */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-20">
              <div className="max-w-[500px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>{t.hero.kicker}</p>
                <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  {t.hero.titel}
                </h1>
                <p className="text-white text-base sm:text-lg leading-relaxed mb-7 sm:mb-8" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  {t.hero.intro1}<br />
                  {t.hero.intro2}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={t.adviesHref}
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    {t.hero.cta}
                  </Link>
                  <a
                    href="#formats"
                    className="text-white/80 text-sm font-semibold px-5 py-3 border border-white/30 rounded hover:border-white/60 transition-colors"
                  >
                    {t.hero.formats}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTAATGEBIEDEN ── */}
      <section className="bg-white py-12 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.resultaten.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
              {t.resultaten.titel}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {t.resultaten.items.map((r, i) => (
              <div key={r.title}>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-[#EEBE3D] text-2xl font-bold leading-none flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-bold text-[#2D2D2D] text-lg leading-snug">{r.title}</h3>
                </div>
                <p className="text-sm text-[#545454] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATS: CATEGORIEËN ── */}
      <section id="formats" className="scroll-mt-28 bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">

          {/* Intro + categorie-ankers */}
          <div className="mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.formats.kicker}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-6">
              {t.formats.titel}
            </h2>
            <nav className="flex flex-wrap gap-2">
              {eventCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#D4D4CC] text-[#696758] hover:bg-[#FFFBEE] hover:border-[#EEBE3D] hover:text-[#2D2D2D] transition-colors"
                >
                  {label(cat)}
                </a>
              ))}
            </nav>
          </div>

          {/* Categorie-blokken */}
          {eventCategories.map((cat, idx) => (
            <div
              key={cat.id}
              id={cat.id}
              className={`scroll-mt-[40vh] ${idx > 0 ? "mt-10" : ""}`}
            >
              <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-5">{label(cat)}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-[780px] mx-auto">
                {cat.formats
                  .filter((f) => taal === "nl" || Boolean(engelseEventSlug(f.slug)))
                  .map(({ slug, title: nlTitle, bg, ic, Icon, iconSrc, desc: nlDesc }) => {
                  const en = taal === "en" ? OVERZICHT_EN.formatTeksten[slug] : undefined;
                  const title = en?.title ?? nlTitle;
                  const desc = en?.desc ?? nlDesc;
                  const href = taal === "en" ? `/en/events/${engelseEventSlug(slug)}` : `/nl/events/${slug}`;
                  return (
                  <Link
                    key={slug}
                    href={href}
                    className="group flex flex-col items-center text-center rounded-2xl p-2 sm:p-3 hover:bg-[#FFFBEE] transition-colors"
                  >
                    <div
                      className="relative w-full aspect-square max-w-[176px] mx-auto rounded-full overflow-hidden flex items-center justify-center mb-3 group-hover:scale-[1.06] transition-transform duration-200"
                      style={{ background: bg, boxShadow: "0 6px 20px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.08)" }}
                    >
                      {iconSrc ? (
                        <Image
                          src={iconSrc}
                          alt={title}
                          fill
                          sizes="(min-width: 640px) 176px, 45vw"
                          className="object-cover transition-opacity duration-200 group-hover:opacity-0"
                        />
                      ) : (
                        <Icon
                          className={`w-16 h-16 sm:w-[72px] sm:h-[72px] ${ic} transition-opacity duration-200 group-hover:opacity-0`}
                          strokeWidth={1}
                        />
                      )}
                      {desc && (
                        <div
                          className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ backgroundColor: "rgba(0,0,0,0.52)" }}
                        >
                          <p className="text-white text-[11px] leading-snug font-medium text-center">{desc}</p>
                        </div>
                      )}
                    </div>
                    <p className="font-bold text-[#2D2D2D] text-sm leading-snug group-hover:text-[#EEBE3D] transition-colors px-1 max-w-[160px]">
                      {title}
                    </p>
                  </Link>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-10 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <TestimonialsCarousel taal={taal} />
        </div>
      </section>

      {/* ── VISIE ── */}
      <section className="bg-[#F0F0EA] py-16 border-b border-[#E5E5DF]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">{t.visie.kicker}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
                {t.visie.titel}
              </h2>
              <p className="text-sm text-[#545454] leading-relaxed mb-8">
                {t.visie.intro}
              </p>
              <ul className="space-y-5 mb-8">
                {t.visie.punten.map((p) => (
                  <li key={p.kop} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EEBE3D] mt-2 flex-shrink-0" />
                    <p className="text-sm text-[#545454] leading-relaxed">
                      <strong className="text-[#2D2D2D] font-bold">{p.kop}</strong>{" "}{p.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href={t.adviesHref}
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
              >
                {t.visie.cta}
              </Link>
            </div>
            <div className="relative aspect-video rounded overflow-hidden shadow-md">
              <Image
                src="/images/events-spatial.webp"
                alt={t.visie.beeldAlt}
                fill className="object-cover"
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
