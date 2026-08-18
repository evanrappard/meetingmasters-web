"use client";

import { useState } from "react";
import type { Taal } from "@/lib/talen";
import Link from "next/link";

/**
 * De vier platforms naast elkaar. Je kunt er één selecteren; SpatialChat staat
 * standaard aan. Geselecteerd en hover krijgen allebei het lichtgele vlak dat
 * de site elders ook voor klikbare kaarten gebruikt.
 *
 * De kaart is een flex-kolom met de body op flex-1. Daardoor staat de streep
 * boven Groep en Wanneer bij alle vier op dezelfde hoogte, ook als de ene
 * omschrijving langer is dan de andere.
 */

export type Platform = {
  naam: string;
  bestand: string;
  sterk: string;
  groep: string;
  wanneer: string;
  body: string;
  accent: string;
  badge?: { label: string; href: string };
};

export default function PlatformKeuze({
  platforms,
  standaard,
  taal = "nl",
}: {
  platforms: Platform[];
  standaard?: string;
  taal?: Taal;
}) {
  const [gekozen, setGekozen] = useState<string | null>(standaard ?? null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 auto-rows-fr gap-5">
      {platforms.map((p) => {
        const actief = gekozen === p.bestand;
        return (
          <button
            key={p.bestand}
            type="button"
            onClick={() => setGekozen(actief ? null : p.bestand)}
            aria-pressed={actief}
            className={`relative text-left rounded-lg border border-t-4 ${p.accent} p-6 flex flex-col transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D2D2D]/25 ${
              actief ? "border-[#EEBE3D] bg-[#FFFBEE]" : "border-[#EBEBEB] bg-white hover:bg-[#FFFBEE]"
            }`}
          >
            {p.badge && (
              <Link
                href={p.badge.href}
                onClick={(e) => e.stopPropagation()}
                className="absolute top-4 right-4 bg-[#EEBE3D] text-[#2D2D2D] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded hover:bg-[#D4A835] transition-colors"
              >
                {p.badge.label}
              </Link>
            )}

            <img
              src={`/images/logos/tools/${p.bestand}.webp`}
              alt={p.naam}
              width={440}
              height={176}
              loading="lazy"
              className="h-12 w-auto max-w-full object-contain object-left"
            />

            <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide mt-5 mb-1">{taal === "en" ? "Strong at" : "Sterk in"}</p>
            <p className="font-bold text-[#2D2D2D] leading-snug mb-4">{p.sterk}</p>

            <p className="text-[15px] text-[#545454] leading-relaxed flex-1">{p.body}</p>

            {/* Vaste hoogte: anders ligt de streep per kaart net anders,
                omdat de ene "Wanneer" langer is dan de andere. */}
            <dl className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-[#E4E4E0] text-[13px] min-h-[84px] content-start">
              <div>
                <dt className="text-[#AAAAAA] font-semibold uppercase tracking-wide text-[10px] mb-0.5">{taal === "en" ? "Group" : "Groep"}</dt>
                <dd className="text-[#2D2D2D] font-semibold">{p.groep}</dd>
              </div>
              <div>
                <dt className="text-[#AAAAAA] font-semibold uppercase tracking-wide text-[10px] mb-0.5">{taal === "en" ? "When" : "Wanneer"}</dt>
                <dd className="text-[#2D2D2D] font-semibold leading-snug">{p.wanneer}</dd>
              </div>
            </dl>
          </button>
        );
      })}
    </div>
  );
}
