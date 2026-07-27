import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategie & Concept | MeetingMasters",
  description:
    "Wij ontwerpen strategieën en formats voor online meetings die werken — inhoudelijk, technologisch en voor de mensen.",
};

const cards = [
  {
    img: "/images/strategy-1.png",
    alt: "Doel en richting bepalen voor een online strategiedag — MeetingMasters denkt mee over de opzet",
    title: "Doel & richting",
    body: "Wij formuleren meetingstrategieën die betrokkenheid stimuleren en bijdragen aan het bereiken van je doelen. Wat is de context van je meetings? Wat is het beoogde resultaat, zowel inhoudelijk als relationeel?",
  },
  {
    img: "/images/format-1.jpg",
    alt: "Het juiste format en de juiste technologie kiezen voor een online bijeenkomst",
    title: "Formats & technologie",
    body: "Wat past bij de doelstellingen? Hoe verrassend mag de online setting zijn? Wij adviseren over platform, formats en concepten die interactie stimuleren en ideeën ruimte en richting geven.",
  },
  {
    img: "/images/planning-1.png",
    alt: "Structuur en ontwerp van een online meeting — een doordachte opzet die werkt",
    title: "Structuur & ontwerp",
    body: "Wij vertalen plannen naar gedetailleerde playbooks: een leidraad voor organisatoren, sprekers en facilitators — en een belangrijk houvast voor de ondersteunende Masters.",
  },
];

export default function StrategyConceptPage() {
  return (
    <>
      {/* Hero banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <Image
          src="/images/strategy-banner.jpg"
          alt="Strategie en concept"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase mb-3 text-white/70">
              ► Van strategie naar online meetingconcept
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Strategie & Concept
            </h1>
            <p className="text-base md:text-lg text-white/85">
              Wij streven naar een efficiënte aanpak van online interactie, met
              maximale betrokkenheid voor echte resultaten.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#666666] text-lg leading-relaxed">
            Of je nu een kleine, intense online meeting organiseert of een grote,
            meerdaagse online summit — bijeenkomsten staan zelden op zichzelf.
            Wij ontwerpen formats die echt werken: voor je inhoud, je relaties en
            je doelen.
          </p>
        </div>
      </section>

      {/* 3 service cards */}
      <section className="bg-white py-8 pb-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((c) => (
              <div key={c.title}>
                <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded">
                  <Image src={c.img} alt={c.alt} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-[#333333] text-lg mb-3">{c.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-14 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">
          Klaar om je volgende meeting te ontwerpen?
        </h2>
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
