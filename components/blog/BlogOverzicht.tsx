"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import type { Taal } from "@/lib/talen";
import { BLOG_RUBRIEKEN, POSTS, type BlogRubriek } from "@/app/nl/blog/posts";
import { BLOG_RUBRIEKEN_EN, POSTS_EN } from "@/app/en/blog/posts";

const T = {
  nl: {
    kicker: "Blog",
    titel: "Inzichten over online meetings, events en menselijke verbinding.",
    onder:
      "Reflecties en praktische ideeën over betekenisvol samenkomen op afstand — door Emilie van Rappard, Founder MeetingMasters Online",
    beeldAlt:
      "Close-up van iemand die aan een bureau werkt met de MeetingMasters-blog op het scherm",
    filterLabel: "Filter op rubriek",
    alles: "Alles",
    lees: "Lees verder",
    leeg: "Geen artikelen in deze rubriek.",
    basis: "/nl/blog",
  },
  en: {
    kicker: "Blog",
    titel: "Insights on online meetings, events and human connection.",
    onder:
      "Reflections and practical ideas about meaningful gatherings at a distance — by Emilie van Rappard, Founder of MeetingMasters Online",
    beeldAlt:
      "Close-up of someone working at a desk with the MeetingMasters blog on screen",
    filterLabel: "Filter by topic",
    alles: "All",
    lees: "Read on",
    leeg: "No articles in this topic.",
    basis: "/en/blog",
  },
} as const;

export default function BlogOverzicht({ taal = "nl" }: { taal?: Taal }) {
  const t = T[taal];
  const posts = taal === "en" ? POSTS_EN : POSTS;
  const labels: Record<BlogRubriek, string> =
    taal === "en" ? BLOG_RUBRIEKEN_EN : BLOG_RUBRIEKEN;

  const [gekozen, setGekozen] = useState<BlogRubriek | null>(null);

  /**
   * Alleen rubrieken tonen waar ook echt iets in zit, met hun aantal erbij. Een
   * lege knop is een belofte die niet wordt ingelost.
   */
  const rubrieken = useMemo(() => {
    const telling = new Map<BlogRubriek, number>();
    for (const post of posts) {
      telling.set(post.rubriek, (telling.get(post.rubriek) ?? 0) + 1);
    }
    return (Object.keys(BLOG_RUBRIEKEN) as BlogRubriek[])
      .filter((r) => telling.has(r))
      .map((r) => ({ sleutel: r, label: labels[r], aantal: telling.get(r)! }));
  }, [posts, labels]);

  const zichtbaar = gekozen ? posts.filter((p) => p.rubriek === gekozen) : posts;

  const knop = (actief: boolean) =>
    `px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
      actief
        ? "bg-[#2D2D2D] text-white border-[#2D2D2D]"
        : "bg-white text-[#434343] border-[#DEDEDA] hover:border-[#28A8AA] hover:text-[#28A8AA]"
    }`;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section>
        <div className="relative w-full md:h-[44vw] md:min-h-[320px] md:max-h-[560px] overflow-hidden">
          {/* Op dit beeld staat het Nederlandse menu. Emilie heeft besloten dat
              tijdelijk zo te laten; een Engelse variant volgt nog, want het is
              een schermafbeelding van de site zelf. */}
          <Image
            src="/images/blog/blog-hero.webp"
            alt={t.beeldAlt}
            fill
            priority
            className="object-cover object-[center_78%]"
            sizes="100vw"
          />
          {/* Lichte gradient links→rechts — contrast achter de tekstkolom, scherm rechts blijft helder */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-20">
              <div className="max-w-[520px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>
                  {t.kicker}
                </p>
                <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  {t.titel}
                </h1>
                <p className="text-white text-lg leading-relaxed" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  {t.onder}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POSTS ────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] py-14 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-8 md:mb-10">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
              {t.filterLabel}
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label={t.filterLabel}>
              <button
                type="button"
                onClick={() => setGekozen(null)}
                aria-pressed={gekozen === null}
                className={knop(gekozen === null)}
              >
                {t.alles}{" "}
                <span className="font-normal text-[#8A8A85]">{posts.length}</span>
              </button>
              {rubrieken.map((r) => (
                <button
                  key={r.sleutel}
                  type="button"
                  onClick={() => setGekozen(gekozen === r.sleutel ? null : r.sleutel)}
                  aria-pressed={gekozen === r.sleutel}
                  className={knop(gekozen === r.sleutel)}
                >
                  {r.label}{" "}
                  <span className={gekozen === r.sleutel ? "font-normal text-white/60" : "font-normal text-[#8A8A85]"}>
                    {r.aantal}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* aria-live: wie met een schermlezer filtert, hoort dat er iets veranderde. */}
          <div aria-live="polite">
            {zichtbaar.length === 0 ? (
              <p className="text-[#525252]">{t.leeg}</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {zichtbaar.map((post) => (
                  <Link
                    key={post.slug}
                    href={`${t.basis}/${post.slug}`}
                    className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#28A8AA]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#EDEDEA]">
                      <Image
                        src={post.img}
                        alt={post.imgAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-2">
                        {labels[post.rubriek]}
                        <span className="text-[#A8A8A2]"> · {post.date}</span>
                      </p>
                      <h2 className="font-bold text-[#2D2D2D] text-lg leading-snug mb-3 group-hover:text-[#28A8AA] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[#525252] leading-relaxed mb-5 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="text-xs font-semibold text-[#2D2D2D] pt-4 border-t border-[#F0F0F0] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        {t.lees}
                        <span aria-hidden className="text-[#28A8AA]">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock taal={taal} />
    </>
  );
}
