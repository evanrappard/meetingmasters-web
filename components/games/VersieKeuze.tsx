"use client";

import { useState } from "react";
import PaginaLink from "@/components/ui/PaginaLink";

/**
 * De twee R@venHack-versies naast elkaar, om uit te kiezen. Werkt net als
 * `PlatformKeuze` op de platformspagina: één kaart staat standaard aan (de
 * Experience), en zowel de gekozen kaart als de kaart waar je overheen zweeft
 * krijgt het lichtgele vlak dat de site overal voor klikbare kaarten gebruikt.
 *
 * De kaart is bewust een `div` en geen `button`: er staan twee links in, en een
 * link in een knop mag niet van HTML. In plaats daarvan luistert de div zelf op
 * klik en toetsenbord, en negeert hij kliks die op een link terechtkomen.
 */

export type Versie = {
  tag: string;
  title: string;
  lead: string;
  body: string;
  duur?: string;
  kenmerken: string[];
  highlight?: boolean;
};

export default function VersieKeuze({
  versies,
  ctaLabel,
  kostenLabel,
  ctaHref,
  kostenHref,
}: {
  versies: Versie[];
  ctaLabel: string;
  kostenLabel: string;
  ctaHref: string;
  kostenHref: string;
}) {
  // Standaard staat de aanbevolen versie aan; is er geen, dan de eerste.
  const standaard = (versies.find((v) => v.highlight) ?? versies[0])?.title ?? null;
  const [gekozen, setGekozen] = useState<string | null>(standaard);

  return (
    <div className="grid md:grid-cols-2 gap-5 auto-rows-fr">
      {versies.map((v) => {
        const actief = gekozen === v.title;
        return (
          <div
            key={v.title}
            role="button"
            tabIndex={0}
            aria-pressed={actief}
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) return;
              setGekozen(actief ? null : v.title);
            }}
            onKeyDown={(e) => {
              if (e.key !== "Enter" && e.key !== " ") return;
              if ((e.target as HTMLElement).closest("a")) return;
              e.preventDefault();
              setGekozen(actief ? null : v.title);
            }}
            className={`rounded p-7 shadow-sm border flex flex-col cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D2D2D]/25 ${
              actief
                ? "border-[#EEBE3D] bg-[#FFFBEE]"
                : "border-[#EBEBEB] bg-white hover:bg-[#FFFBEE]"
            }`}
          >
            <div className="w-8 h-1 bg-[#EEBE3D] rounded mb-4" />
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#28A8AA]">
                {v.tag}
              </span>
              {v.duur && (
                <span className="text-[11px] font-bold text-[#2D2D2D] bg-[#EEBE3D]/20 rounded px-2 py-0.5 whitespace-nowrap">
                  {v.duur}
                </span>
              )}
            </div>
            <h3 className="font-bold text-[#2D2D2D] text-xl mb-2 leading-snug">
              {v.title}
            </h3>
            <p className="text-[#2D2D2D] font-semibold text-sm mb-3">{v.lead}</p>
            <p className="text-sm text-[#434343] leading-relaxed mb-5">{v.body}</p>
            <ul className="space-y-2 mb-6">
              {v.kenmerken.map((k) => (
                <li
                  key={k}
                  className="flex items-start gap-2 text-sm text-[#434343] leading-relaxed"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 flex-none rounded-full bg-[#EEBE3D]" />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-3">
              <PaginaLink
                href={ctaHref}
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded hover:bg-[#D4A835] transition-colors"
              >
                {ctaLabel}
              </PaginaLink>
              <PaginaLink
                href={kostenHref}
                className="border border-[#D4D4D4] text-[#2D2D2D] text-sm font-bold px-5 py-2.5 rounded hover:border-[#2D2D2D] transition-colors"
              >
                {kostenLabel}
              </PaginaLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
