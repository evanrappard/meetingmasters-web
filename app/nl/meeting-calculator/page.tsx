import type { Metadata } from "next";
import Link from "next/link";
import ToolKader from "@/components/tools/ToolKader";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Vergaderkosten berekenen: de calculator | MeetingMasters",
  description:
    "Reken in een paar stappen uit wat een bijeenkomst echt kost — in tijd, euro's en CO₂ — en zie meteen wat online zou schelen. Gratis, zonder account.",
};

/**
 * De calculator staat bewust náást de tool-serie uit `lib/tools.ts`, niet erin.
 * Die tools gebruik je tíjdens een bijeenkomst; deze gebruik je ervóór, door
 * iemand die een argument aan het bouwen is. Ander moment, andere gebruiker.
 */

const FAQ = [
  {
    q: "Wat rekent de calculator uit?",
    a: "Het tijdsbeslag van een bijeenkomst, de kosten in euro's en de CO₂-uitstoot — en wat daarvan zou veranderen als je hem online houdt. Je vult het aantal deelnemers, de duur en de reisafstand in; de rest volgt daaruit.",
  },
  {
    q: "Is dit een offerte of een prijsopgave?",
    a: "Nee. De calculator zegt niets over wat wij kosten. Hij laat zien wat een bijeenkomst jouw organisatie kost aan tijd, geld en reisbewegingen — vaak een bedrag waar mensen van schrikken.",
  },
  {
    q: "Waar komen de bedragen vandaan?",
    a: "Je vult zelf een uurtarief en reisafstand in, of houdt de standaardwaarden aan. Die standaarden zijn richtbedragen; ken je de cijfers van je eigen organisatie, vul die dan in — dan wordt de uitkomst een stuk overtuigender.",
  },
  {
    q: "Waarom staat CO₂ erbij?",
    a: "Reizen is voor de meeste bijeenkomsten veruit de grootste post, in tijd én in uitstoot. Zodra je dat naast elkaar ziet, wordt de vraag of iedereen fysiek moet komen vanzelf een andere.",
  },
  {
    q: "Betekent dit dat alles online moet?",
    a: "Nee. Sommige bijeenkomsten zijn de reis dubbel en dwars waard. De calculator helpt je die keuze bewust te maken in plaats van uit gewoonte — en laat zien welke bijeenkomsten je beter online kunt houden.",
  },
  {
    q: "Is de calculator gratis?",
    a: "Ja. Zonder account en zonder installatie; hij draait gewoon in je browser. Wil je de uitkomst per mail ontvangen, dan kun je daarvoor je adres achterlaten.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MeetingCalculatorPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-14 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link
            href="/nl/games-tools#voor-je-begint"
            className="text-white/40 text-xs font-semibold hover:text-white transition-colors"
          >
            ← Games &amp; Tools
          </Link>
          <div className="max-w-[640px] mt-6">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              Voor je begint
            </p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)" }}
            >
              Wat kost jouw bijeenkomst echt?
            </h1>
            <p className="text-white/75 text-base leading-relaxed">
              Reken in een paar stappen uit wat een bijeenkomst kost aan tijd, geld en CO₂ — en zie
              meteen wat online zou schelen. Gratis, zonder account.
            </p>
          </div>
        </div>
      </section>

      {/* ── DE TOOL ──────────────────────────────────────────────────── */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <ToolKader
            bron="/tools/vergaderkosten-calculator/index.html"
            naam="Vergaderkosten-calculator"
            hoogte="min(84dvh, 940px)"
          />
        </div>
      </section>

      {/* ── WAAROM ───────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              Waarom dit rekensommetje
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
              Een uur vergaderen met twintig mensen is geen uur
            </h2>
            <p className="text-[#545454] leading-relaxed mb-4">
              Het is twintig uur. Plus de reistijd, plus de voorbereiding, plus het half uur dat
              iedereen nodig heeft om er daarna weer in te komen. In een agenda staat een blokje van
              zestig minuten; in werkelijkheid staat er een flink bedrag op het spel.
            </p>
            <p className="text-[#545454] leading-relaxed">
              Dat maakt een bijeenkomst niet verkeerd. Het maakt hem duur genoeg om over na te
              denken: moet dit een bijeenkomst zijn, moet iedereen erbij, en moet het op locatie?
              Zodra dat bedrag op tafel ligt, gaat het gesprek vanzelf over de vorm.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[640px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
              Geschrokken van de uitkomst?
            </h2>
            <p className="text-[#545454] leading-relaxed mb-6">
              Dan is de volgende vraag niet of het goedkoper kan, maar of het beter kan. Wij ontwerpen
              bijeenkomsten waarin de tijd van al die mensen daadwerkelijk iets oplevert.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nl/expert-advies"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                Vraag advies →
              </Link>
              <Link
                href="/nl/games-tools#tools"
                className="text-[#545454] text-sm font-semibold px-6 py-3 border border-[#D2D2D0] rounded hover:border-[#2D2D2D] transition-colors"
              >
                Bekijk onze gratis tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
