"use client";

import Link from "next/link";
import type { Taal } from "@/lib/talen";

/** De drie kaarten, per taal. De Engelse events-pagina bestaat nog niet. */
const T = {
  nl: {
    stap: "Volgende stap",
    kop: "Online, maar dan anders.",
    kaarten: [
      {
        level: "Oriëntatie",
        title: "Ontdek onze events",
        desc: "Van strategiedag tot online teambuilding — bekijk welke eventformats bij je doel passen.",
        ctaLabel: "Bekijk alle events →",
        href: "/nl/events",
        variant: "low" as const,
      },
      {
        level: "Interesse",
        title: "Ervaar het verschil",
        desc: "20 minuten om te zien hoe een platform als SpatialChat iets anders doet dan Zoom of Teams.",
        ctaLabel: "Plan een rondleiding →",
        href: "/nl/demo",
        variant: "mid" as const,
      },
      {
        level: "Concreet traject",
        title: "Plan een gesprek — wij denken mee",
        desc: "Vrijblijvend. Wij denken direct mee over je situatie, je groep en wat er nodig is.",
        ctaLabel: "Plan een gesprek →",
        href: "/nl/expert-advies",
        variant: "high" as const,
      },
    ],
  },
  en: {
    stap: "Next step",
    kop: "Online, but not as you know it.",
    kaarten: [
      {
        level: "Orientation",
        title: "See what we do",
        desc: "From strategy day to online team building — see which event formats fit what you're after.",
        ctaLabel: "View all events →",
        href: "/en/events",
        variant: "low" as const,
      },
      {
        level: "Interested",
        title: "Feel the difference",
        desc: "20 minutes to see how a platform like SpatialChat does something Zoom and Teams don't.",
        ctaLabel: "Book a tour →",
        href: "/en/demo",
        variant: "mid" as const,
      },
      {
        level: "Ready to go",
        title: "Book a conversation — we'll think it through with you",
        desc: "No obligation. We look straight away at your situation, your group and what it needs.",
        ctaLabel: "Book a conversation →",
        href: "/en/expert-advice",
        variant: "high" as const,
      },
    ],
  },
} as const;

interface CTACardProps {
  level: string;
  title: string;
  desc: string;
  ctaLabel: string;
  href: string;
  variant: "low" | "mid" | "high";
}

function CTACard({ level, title, desc, ctaLabel, href, variant }: CTACardProps) {
  const cardStyle = `bg-white rounded p-6 flex flex-col shadow-md`;

  const levelColor =
    variant === "high" ? "text-[#B8962A]" :
    variant === "mid"  ? "text-[#28A8AA]" :
                         "text-[#6E6E6E]";
  const btnStyle = "bg-[#EEBE3D] text-[#2D2D2D] hover:bg-[#D4A835]";

  return (
    <div className={cardStyle}>
      <p className={`${levelColor} text-xs font-bold tracking-widest uppercase mb-3`}>
        {level}
      </p>
      <h3 className="text-[#2D2D2D] text-lg font-bold mb-3 leading-snug">{title}</h3>
      <p className="text-[#434343] text-sm leading-relaxed flex-1 mb-6">{desc}</p>
      <Link
        href={href}
        className={`${btnStyle} text-sm font-bold px-5 py-2.5 rounded text-center transition-colors inline-block`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}

export default function CTABlock({ taal = "nl" }: { taal?: Taal }) {
  const t = T[taal];
  return (
    <>
      <section className="bg-[#E3ECEC] py-14 border-t border-[#D2DEDE]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">{t.stap}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-8">{t.kop}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {t.kaarten.map((k) => (
              <CTACard key={k.href + k.level} {...k} />
            ))}
          </div>

        </div>
      </section>

    </>
  );
}
