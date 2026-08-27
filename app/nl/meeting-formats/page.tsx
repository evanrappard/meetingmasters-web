import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: taalAlternates("/meeting-formats"),
  // Nog niet af of vervangen: wel bereikbaar via een directe link, maar niet
  // in de zoekresultaten. Staat ook in NIET_INDEXEREN in app/sitemap.ts.
  robots: { index: false, follow: true },
  title: "Vergaderformats | MeetingMasters",
  description:
    "16+ online vergaderformats voor elke soort bijeenkomst — brainstorms, strategiedagen, escape rooms, webinars en meer.",
};

const featured = [
  {
    img: "/images/format-party.png",
    alt: "Online bedrijfsfeest",
    title: "Fantastische feesten",
    desc: "Eenvoudig of op maat — online feesten die verbinden en vieren. Van een virtuele borrel tot een compleet kerstevenement.",
    cta: "Neem contact op",
  },
  {
    img: "/images/format-escape.png",
    alt: "Online escape room",
    title: "Spannende Escape Rooms",
    desc: "Meeslepende, teambuildende escape-ervaringen. Online. Onze EscapeMasters- en R@venHack-formats garanderen energie en interactie.",
    cta: "Meer weten",
  },
  {
    img: "/images/strategy-banner.jpg",
    alt: "Online strategiedagen",
    title: "Doordachte strategiedagen",
    desc: "Goed ontworpen online strategiesessies die zorgen voor afstemming en actie. Wij ontwerpen het format, jij richt je op de inhoud.",
    cta: "Neem contact op",
  },
];

const allFormats = [
  "Online brainstormsessies",
  "Online bedrijfsfeest",
  "Online Escape Room",
  "Persoonlijke ontwikkeling online",
  "Online strategiesessies",
  "Interactieve webinars",
  "Online teamontwikkeling",
  "Virtueel kantoor",
  "Online burgerberaden",
  "Online townhall / all-hands",
  "Online World Café",
  "Jaarvergadering online",
  "Online Open Space",
  "Online congressen",
  "Online Community Building",
  "Online klankbordgroep",
];

export default function MeetingFormatsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[45vh] overflow-hidden">
        <Image
          src="/images/format-1.jpg"
          alt="Online bijeenkomst van MeetingMasters — verschillende vergaderformats voor groepen van 50 tot 500 mensen"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Het perfecte format voor je online bijeenkomst
            </h1>
            <p className="text-base text-white/85">
              Geen enkele bijeenkomst is hetzelfde. Wat ze allemaal verbindt:
              echt contact en verbinding.
            </p>
          </div>
        </div>
      </div>

      {/* Featured 3 cards */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((f) => (
              <div key={f.title} className="flex flex-col">
                <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded">
                  <Image src={f.img} alt={f.alt} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-[#333333] text-lg mb-3">{f.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed flex-1 mb-4">
                  {f.desc}
                </p>
                <Link
                  href="/nl/contact"
                  className="text-sm text-accent hover:text-accent-dark transition-colors"
                >
                  {f.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-3">
            Alle vergaderformats
          </h2>
          <p className="text-[#525252] text-center mb-10">
            Persoonlijke begeleiding hoeft niet duur te zijn.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {allFormats.map((f) => (
              <div
                key={f}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center text-sm font-medium text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">
          Weet je niet welk format past?
        </h2>
        <p className="text-[#525252] mb-6">
          Wij adviseren je graag — geheel vrijblijvend.
        </p>
        <Link
          href="/nl/contact"
          className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
        >
          Neem contact op
        </Link>
      </section>
    </>
  );
}
