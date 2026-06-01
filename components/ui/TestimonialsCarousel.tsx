"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    quote: "MeetingMasters heeft ons zorgeloos door het hele traject begeleid: van het bepalen van doelen en het aanscherpen van de inhoud tot de live uitvoering.",
    company: "Gemeente Roosendaal",
    context: "Online participatiesessie",
    logo: "/images/logos/roosendaal.webp",
  },
  {
    quote: "MeetingMasters zorgt er niet alleen voor dat je technisch ondersteund bent. Ze denken ook mee over hoe je het beste uit een online meeting of event haalt.",
    company: "Bergman Clinics",
    context: "Online strategiedag",
    logo: "/images/logos/bergman-clinics.webp",
  },
  {
    quote: "Medewerkers van 5 kantoren online samenbrengen om twee weken lang te strategiseren vereist sterke facilitatieve vaardigheden. MeetingMasters heeft ons daar gebracht.",
    company: "PharmAccess",
    context: "Online strategietraject — 5 internationale kantoren",
    logo: "/images/logos/pharmaccess.webp",
  },
  {
    quote: "Met een heldere visie, een frisse creatieve blik en bijzonder prettige service blinkt MeetingMasters echt uit in het online samenbrengen van mensen.",
    company: "Prins Bernhard Cultuurfonds",
    context: "Online bijeenkomst",
    logo: "/images/logos/pbcf.webp",
  },
];

export default function TestimonialsCarousel() {
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
            <span className="text-[#EEBE3D] font-serif text-3xl leading-none align-top">"</span>
            {s.quote}
            <span className="text-[#EEBE3D] font-serif text-3xl leading-none align-bottom">"</span>
          </p>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <div className="relative h-12 w-40 flex-shrink-0">
              <Image src={s.logo} alt={s.company} fill className="object-contain" />
            </div>
            <div className="w-px h-7 bg-[#DCDCDC] flex-shrink-0 hidden sm:block" />
            <div className="text-left sm:text-left text-center">
              <p className="font-bold text-[#2D2D2D] text-base leading-tight">{s.company}</p>
              <p className="text-sm text-[#898989] mt-1">{s.context}</p>
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
