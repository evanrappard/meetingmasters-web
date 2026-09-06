"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    img: "/images/hero-1.webp",
    headline: "Refreshing online meeting concepts. Better results.",
    sub: "How we meet matters. Our surprising virtual meeting formats increase energy and involvement.",
    cta: { text: "This is how we work", href: "/nl/strategy-concept" },
  },
  {
    img: "/images/hero-2.jpg",
    headline: "A good meeting demands much more than technology and logistics.",
    sub: "Successful online events are primarily a human challenge. We develop virtual gatherings geared at maximizing involvement.",
    cta: { text: "Find your type of meeting", href: "/nl/meeting-formats" },
  },
  {
    img: "/images/hero-3.jpg",
    headline: "Seamless and worry-free online meetings?",
    sub: "We assist from ideation through realization and offer personal in-meeting support.",
    cta: { text: "How we create effortless experiences", href: "/nl/planning-support" },
  },
  {
    img: "/images/hero-4.webp",
    headline: "We are online meeting specialists.",
    sub: "We make virtual meetings more interesting, more participative, and more effective.",
    cta: { text: "Request a free quote", href: "/nl/contact" },
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    const timer = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(timer);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full h-[65vh] overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {slides.map((slide, i) => (
          <div key={i} className="relative flex-none w-full h-full">
            <Image
              src={slide.img}
              alt={slide.headline}
              fill
              className="object-cover"
              priority={i === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center text-white max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4">
                  {slide.headline}
                </h1>
                <p className="text-base md:text-lg text-white/85 mb-6 max-w-xl mx-auto">
                  {slide.sub}
                </p>
                <Link
                  href={slide.cta.href}
                  className="inline-block text-white underline underline-offset-4 hover:text-accent transition-colors text-sm font-medium tracking-wide"
                >
                  {slide.cta.text} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === selected ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
