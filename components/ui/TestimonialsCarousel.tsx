"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { Taal } from "@/lib/talen";
import { GETUIGENISSEN as SLIDES } from "@/lib/getuigenissen";

/**
 * De quotes zijn in het Nederlands gegeven; voor de Engelse site zijn ze
 * vertaald. Het logo, de klantnaam en de volgorde zijn taalloos en staan
 * daarom maar één keer.
 */

export default function TestimonialsCarousel({ taal = "nl" }: { taal?: Taal }) {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goto = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(index);
      setFading(false);
    }, 180);
  }, []);

  const next = useCallback(() => goto((active + 1) % SLIDES.length), [active, goto]);
  const prev = useCallback(() => goto((active - 1 + SLIDES.length) % SLIDES.length), [active, goto]);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const s = SLIDES[active];

  return (
    <div className="flex items-center gap-4 sm:gap-8">

      <button
        onClick={prev}
        className="flex-shrink-0 text-[#CCCCCC] hover:text-[#2D2D2D] transition-colors text-2xl leading-none select-none"
        aria-label="Vorige"
      >
        {"<"}
      </button>

      <div className={`flex-1 transition-opacity duration-200 ${fading ? "opacity-0" : "opacity-100"}`}>
        <div className="text-center">
          <p className="text-[#2D2D2D] text-lg sm:text-xl leading-relaxed mb-8">
            <span className="text-[#EEBE3D] font-serif text-3xl leading-none align-top">&ldquo;</span>
            {taal === "en" ? s.quoteEn : s.quote}
            <span className="text-[#EEBE3D] font-serif text-3xl leading-none align-bottom">&rdquo;</span>
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <div className="relative h-12 w-40 flex-shrink-0">
              <Image src={s.logo} alt={s.company} fill className="object-contain" />
            </div>
            <div className="w-px h-7 bg-[#DCDCDC] flex-shrink-0 hidden sm:block" />
            <div className="text-left sm:text-left text-center">
              <p className="font-bold text-[#2D2D2D] text-base leading-tight">{s.company}</p>
              <p className="text-sm text-[#6E6E6E] leading-tight">{taal === "en" ? s.contextEn : s.context}</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={next}
        className="flex-shrink-0 text-[#CCCCCC] hover:text-[#2D2D2D] transition-colors text-2xl leading-none select-none"
        aria-label="Volgende"
      >
        {">"}
      </button>

    </div>
  );
}
