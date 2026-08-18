import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";
import { kruimelSchema, HOME_KRUIMEL } from "@/lib/kruimels";
import { eventFormats } from "@/app/nl/events/page";
import { EVENT_DATA, HERO_DIM_LICHT } from "@/app/nl/events/[slug]/data";
import { EVENT_TEKST_EN, engelseEventSlug, nederlandseEventSlug } from "@/app/nl/events/[slug]/tekst-en";
import type { Taal } from "@/lib/talen";

/** De vaste teksten van het sjabloon, per taal. */
const T = {
  nl: {
    terug: "← Event Formats",
    terugHref: "/nl/events#formats",
    offerte: "Vrijblijvende offerte",
    offerteHref: "/nl/offerte",
    alleFormats: "Bekijk alle event formats",
    alleFormatsHref: "/nl/events#formats",
    actiefFormat: "Een actief format",
    overFormat: "Over dit format",
    voorWie: "Voor wie",
    groepsgrootte: "Groepsgrootte",
    gesprek: "Vrijblijvend gesprek →",
    gesprekHref: "/nl/expert-advies",
    praktijk: "In de praktijk",
    praktijkOnder: "Drie voorbeelden. Jarenlange ervaring.",
    voorbereiding: "Voorbereiding is alles",
    download: "Download de checklist →",
    vragen: "Veelgestelde vragen",
    meerAntwoorden: "Meer antwoorden?",
    minderAntwoorden: "Minder antwoorden",
    gerelateerd: "Gerelateerde event formats",
    gerelateerdOnder: "Misschien past dit ook - of zelfs beter.",
    randvoorwaarden: (wat: string) => `Randvoorwaarden voor een geslaagde online ${wat}.`,
    alleFormatsPijl: "Bekijk alle event formats →",
  },
  en: {
    terug: "← Event formats",
    terugHref: "/nl/events#formats",
    offerte: "Ask for a quote",
    offerteHref: "/en/quote",
    alleFormats: "View all event formats",
    alleFormatsHref: "/nl/events#formats",
    actiefFormat: "An active format",
    overFormat: "About this format",
    voorWie: "Who it's for",
    groepsgrootte: "Group size",
    gesprek: "Book a conversation →",
    gesprekHref: "/en/expert-advice",
    praktijk: "In practice",
    praktijkOnder: "Three examples. Years of experience.",
    voorbereiding: "Preparation is everything",
    download: "Download the checklist →",
    vragen: "Frequently asked questions",
    meerAntwoorden: "More answers?",
    minderAntwoorden: "Fewer answers",
    gerelateerd: "Related event formats",
    gerelateerdOnder: "This might fit too — or even better.",
    randvoorwaarden: (wat: string) => `What a successful ${wat} needs.`,
    alleFormatsPijl: "View all event formats →",
  },
} as const;

/**
 * Het event met de teksten in de gevraagde taal. Beeld, icoon, kleur en
 * structuur komen altijd uit het Nederlandse databestand — die zijn taalloos.
 * Ontbreekt een Engelse tekst, dan blijft de Nederlandse staan; dat is
 * zichtbaar en dus makkelijk te vinden.
 */
export function eventInTaal(slug: string, taal: Taal) {
  const basis = EVENT_DATA[slug];
  if (!basis || taal === "nl") return basis;
  const en = EVENT_TEKST_EN[slug];
  return en ? { ...basis, ...en } : basis;
}

export { engelseEventSlug, nederlandseEventSlug };

export default function EventPagina({ slug, taal = "nl" }: { slug: string; taal?: Taal }) {
  const t = T[taal];
  const event = eventInTaal(slug, taal);
  if (!event) notFound();

  const { title, bg, iconSrc, Icon, ic, intro, forWho, range, related } = event;

  const shortTitle = title
    .replace(/^Online /i, "")
    .replace(/\s+(organiseren|geven|opbouwen|houden)$/i, "");
  // Zichtbare kop = titel zonder het SEO-werkwoord op het eind (de volledige
  // titel blijft staan voor de <title>/metadata).
  const displayTitle = title.replace(/\s+(organiseren|geven|opbouwen|houden)$/i, "");
  const iconColor = ic === "text-white" ? "#FFFFFF" : "#696758";
  const accentColor = bg.match(/#[A-Fa-f0-9]{6}/g)?.[1] ?? "#28A8AA";

  // Gerelateerde formats. Op een Engelse pagina laten we alleen zien wat er
  // ook in het Engels bestaat: een Engelse kaart die naar een Nederlandse
  // pagina wijst is verwarrender dan een kaart minder.
  const relatedFormats = related
    .map((s) => eventFormats.find((f) => f.slug === s))
    .filter((f): f is (typeof eventFormats)[number] => Boolean(f))
    .filter((f) => taal === "nl" || Boolean(engelseEventSlug(f.slug)))
    .map((f) => {
      if (taal === "nl") return { ...f, href: `/nl/events/${f.slug}` };
      const en = EVENT_TEKST_EN[f.slug];
      return {
        ...f,
        href: `/en/events/${engelseEventSlug(f.slug)}`,
        title: en?.title ?? f.title,
        desc: en?.tagline ?? f.desc,
      };
    });

  const allFaqs = [...(event.faq ?? []), ...(event.faqMore ?? [])];
  const faqSchema = allFaqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  } : null;

  // Kruimelpad voor de zoekresultaten: Home › Events › dit format.
  const kruimels = kruimelSchema([
    HOME_KRUIMEL[taal],
    { naam: taal === "en" ? "Events" : "Events", pad: taal === "en" ? "/en/events" : "/nl/events" },
    { naam: displayTitle, pad: taal === "en" ? `/en/events/${engelseEventSlug(slug)}` : `/nl/events/${slug}` },
  ]);

  return (
    <div className="bg-white">

      <JsonLd data={kruimels} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full md:h-[44vw] md:min-h-[300px] md:max-h-[520px] overflow-hidden">
          <Image
            src={event.heroSrc ?? "/images/events-bijeenkomst.webp"}
            alt={event.heroAlt ?? `${title} — MeetingMasters Online Events`}
            fill priority
            className="object-cover object-center"
            style={{ filter: "contrast(1.03) saturate(1.06)", ...event.heroImgStyle }}
          />
          <div className={`absolute inset-0 ${event.heroOverlay ?? HERO_DIM_LICHT}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-16">
              <div className="max-w-[600px]">
                <Link
                  href={t.terugHref}
                  className="text-[#28A8AA]/80 text-xs font-bold tracking-widest uppercase mb-4 inline-block hover:text-[#28A8AA] transition-colors"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,0.75)" }}
                >
                  {t.terug}
                </Link>
                <h1 className="text-[1.9rem] sm:text-6xl lg:text-[3.7rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-4" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  {displayTitle}
                </h1>
                {event.outcomeSummary && (
                  <p className="text-white text-base sm:text-xl font-medium tracking-wide mb-6 sm:mb-7" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                    {event.outcomeSummary.split("\n").map((line, i, arr) => (
                      <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                    ))}
                  </p>
                )}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded cursor-default">
                    {t.offerte}
                  </span>
                  <Link
                    href={t.alleFormatsHref}
                    className="text-white/70 text-sm font-semibold px-5 py-3 border border-white/25 rounded hover:border-white/55 transition-colors"
                  >
                    {t.alleFormats}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EEN ACTIEVE FORMAT / INTRO ── */}
      {event.validation ? (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.actiefFormat}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                {event.validation.headline}
              </h2>
              <p className="text-[#545454] leading-relaxed">{intro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {event.validation.items.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: bg, boxShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
                    >
                      <Check className="w-4 h-4" style={{ color: iconColor }} strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-base leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#545454] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">{t.overFormat}</p>
                <p className="text-[#545454] leading-relaxed mb-8 text-base">{intro}</p>
                <div className="flex flex-col sm:flex-row gap-5 mb-8">
                  {forWho && (
                    <div className="border-l-2 border-[#EEBE3D] pl-4">
                      <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">{t.voorWie}</p>
                      <p className="text-sm text-[#545454] leading-snug">{forWho}</p>
                    </div>
                  )}
                  {range && (
                    <div className="border-l-2 border-[#EEBE3D] pl-4">
                      <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">{t.groepsgrootte}</p>
                      <p className="text-sm text-[#545454]">{range}</p>
                    </div>
                  )}
                </div>
                <Link
                  href={t.gesprekHref}
                  className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
                >
                  {t.gesprek}
                </Link>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-6">
                <div
                  className="relative w-52 h-52 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
                  style={{ background: bg, boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)" }}
                >
                  {iconSrc ? (
                    <Image src={iconSrc} alt="" fill className="object-cover" />
                  ) : (
                    <Icon className={`w-24 h-24 ${ic}`} strokeWidth={1} />
                  )}
                </div>
                <div className="bg-[#F7F7F5] rounded p-5 w-full max-w-[260px]">
                  <div className="flex gap-4 divide-x divide-[#E0E0E0]">
                    <div className="pr-4">
                      <p className="text-[#EEBE3D] text-2xl font-bold leading-none mb-1">250+</p>
                      <p className="text-xs text-[#898989] leading-snug">events begeleid</p>
                    </div>
                    <div className="pl-4">
                      <p className="text-[#EEBE3D] text-2xl font-bold leading-none mb-1">94%</p>
                      <p className="text-xs text-[#898989] leading-snug">tevredenheid na afloop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── IN DE PRAKTIJK ── */}
      {event.cases && (
        <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.praktijk}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
                {t.praktijkOnder}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {event.cases.map((c, i) => (
                <div key={i} className="bg-white rounded overflow-hidden shadow-sm">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={c.img ?? "/images/events-bijeenkomst.webp"}
                      alt={c.imgAlt ?? `${c.title} — ${displayTitle}`}
                      fill
                      className="object-cover"
                      style={c.imgStyle}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className="absolute bottom-3 left-4 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: accentColor, color: iconColor }}
                    >
                      {c.label}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#2D2D2D] text-base mb-2 leading-snug">{c.title}</h3>
                    <p className="text-sm text-[#545454] leading-relaxed">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── VOORBEREIDING IS ALLES ── */}
      {event.conditions && (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-5">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">{t.voorbereiding}</p>
              <div className="flex flex-col sm:flex-row gap-5 mb-6">
                {forWho && (
                  <div className="border-l-2 border-[#EEBE3D] pl-4">
                    <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">{t.voorWie}</p>
                    <p className="text-sm text-[#545454] leading-snug">{forWho}</p>
                  </div>
                )}
                {range && (
                  <div className="border-l-2 border-[#EEBE3D] pl-4">
                    <p className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest mb-1">{t.groepsgrootte}</p>
                    <p className="text-sm text-[#545454]">{range}</p>
                  </div>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug">
                {t.randvoorwaarden(shortTitle.toLowerCase())}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {event.conditions.map((c, i) => (
                <div key={i} className="bg-white rounded p-6 shadow-sm border border-[#EBEBEB]">
                  <p className="text-[#EEBE3D] text-3xl font-bold leading-none mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{c.title}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── DOWNLOAD ──
          Staat vlak vóór de FAQ: wie tot hier leest is serieus bezig en heeft
          meer aan een checklist dan aan nog een alinea. */}
      {event.download && (
        <section className="bg-white py-14 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <a
              href={event.download.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-7 items-center rounded-lg border border-[#EBEBEB] bg-white p-6 sm:p-7 hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all max-w-[820px]"
            >
              <span className="relative block aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded border border-[#EBEBEB] bg-[#EDEDEA]">
                <Image
                  src={event.download.beeld}
                  alt={taal === "en" ? `Cover of the ${event.download.titel}` : `Voorblad van de ${event.download.titel}`}
                  fill
                  className="object-cover object-top"
                  sizes="200px"
                />
              </span>
              <span>
                <span className="block text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide mb-2">
                  {event.download.meta}
                </span>
                <span className="block font-bold text-[#2D2D2D] text-xl mb-2 leading-snug group-hover:text-[#EEBE3D] transition-colors">
                  {event.download.titel}
                </span>
                <span className="block text-[15px] text-[#545454] leading-relaxed mb-4">
                  {event.download.body}
                </span>
                <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide">
                  {t.download}
                </span>
              </span>
            </a>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {event.faq && (
        <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
              {t.vragen}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {event.faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {event.faqMore && event.faqMore.length > 0 && (
              <details className="group max-w-4xl mx-auto mt-10">
                <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
                  <span className="group-open:hidden">{t.meerAntwoorden}</span>
                  <span className="hidden group-open:inline">{t.minderAntwoorden}</span>
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#E0E0E0]">
                  {event.faqMore.map((item) => (
                    <div key={item.q}>
                      <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                      <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        </section>
      )}

      {/* ── GERELATEERDE FORMATS ── */}
      {relatedFormats.length > 0 && (
        <section className="bg-white py-16 border-b border-[#EBEBEB]">
          <div className="max-w-content mx-auto px-6 lg:px-10">
            <div className="mb-10">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.gerelateerd}</p>
              <h2 className="text-2xl font-bold text-[#2D2D2D] leading-snug">
                {t.gerelateerdOnder}
              </h2>
            </div>
            <div className="flex flex-wrap gap-6 mb-8">
              {relatedFormats.map((f) => {
                const RelIcon = f.Icon;
                return (
                  <Link
                    key={f.slug}
                    href={f.href}
                    className="group flex flex-col items-center text-center"
                  >
                    <div
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center mb-2 group-hover:scale-[1.06] transition-transform duration-200"
                      style={{ background: f.bg, boxShadow: "0 4px 14px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.07)" }}
                    >
                      {f.iconSrc ? (
                        <Image
                          src={f.iconSrc}
                          alt=""
                          fill
                          className="object-cover transition-opacity duration-200 group-hover:opacity-0"
                        />
                      ) : (
                        <RelIcon
                          className={`w-12 h-12 sm:w-14 sm:h-14 ${f.ic} transition-opacity duration-200 group-hover:opacity-0`}
                          strokeWidth={1}
                        />
                      )}
                      {f.desc && (
                        <div
                          className="absolute inset-0 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ backgroundColor: "rgba(0,0,0,0.52)" }}
                        >
                          <p className="text-white text-[9px] leading-snug font-medium text-center">{f.desc}</p>
                        </div>
                      )}
                    </div>
                    <p className="font-bold text-[#2D2D2D] text-xs leading-snug group-hover:text-[#28A8AA] transition-colors max-w-[110px]">
                      {f.title}
                    </p>
                  </Link>
                );
              })}
            </div>
            <Link
              href={t.alleFormatsHref}
              className="text-[#28A8AA] text-sm font-bold hover:underline"
            >
              {t.alleFormatsPijl}
            </Link>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CTABlock taal={taal} />

    </div>
  );
}
