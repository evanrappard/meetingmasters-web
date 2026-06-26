import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Online zaaltje boeken | MeetingMasters Virtual Office",
  description:
    "Boek een ingericht online zaaltje voor maximaal 12 personen — klaar voor gebruik. Voor een leuke, andersoortige meeting met een kleine groep. Laagdrempelig, niet duur, wel verrassend.",
};

const waarvoor = [
  "Een teamretro of evaluatie die wél energie geeft",
  "Een kennismaking of onboarding van een kleine groep",
  "Een creatieve sessie of brainstorm",
  "Gewoon een keer wat anders dan een raster van vierkantjes",
];

const faq = [
  { q: "Wat is een online zaaltje?", a: "Een ingerichte online ruimte in SpatialChat voor een kleine groep (tot 12 personen), klaar voor gebruik. Je stapt binnen, beweegt vrij door de ruimte en praat met wie je tegenkomt — veel natuurlijker dan een raster van videovierkantjes." },
  { q: "Voor hoeveel mensen is een zaaltje?", a: "Een zaaltje is bedoeld voor kleine groepen tot ongeveer 12 personen. Heb je een grotere groep of wil je een vaste, doorlopende plek? Dan past een instapklaar kantoor beter." },
  { q: "Moeten we iets installeren of voorbereiden?", a: "Nee. Je krijgt een link, klikt erop en loopt binnen — in de browser, zonder installatie. De ruimte staat klaar; jij hoeft niets in te richten." },
  { q: "Wat kost een zaaltje?", a: "Laagdrempelig. Je betaalt voor het ingerichte-en-klaar én de ondersteuning op de achtergrond, niet voor de tool. Vraag gerust naar de mogelijkheden." },
  { q: "Wat als het smaakt naar meer?", a: "Dan kun je doorgroeien naar een instapklaar kantoor dat je per maand of jaar huurt, of een kantoor dat we samen vanuit je fundament opbouwen. Het zaaltje is de makkelijkste manier om te ervaren hoe online samenkomen ook kan voelen." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ZaaltjePage() {
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full h-[42vw] min-h-[300px] max-h-[520px]">
          <Image
            src="/images/spatial-entree.webp"
            alt="Een ingericht online zaaltje in SpatialChat voor een kleine groep"
            fill priority
            className="object-cover object-center"
            style={{ filter: "contrast(1.03) saturate(1.06)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-12 sm:pb-16">
              <div className="max-w-[600px]">
                <Link href="/nl/virtual-office" className="text-[#28A8AA]/90 text-xs font-bold tracking-widest uppercase mb-4 inline-block hover:text-[#28A8AA] transition-colors" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>
                  ← Virtueel kantoor
                </Link>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  Boek een online zaaltje.
                </h1>
                <p className="text-white text-lg leading-relaxed mb-8" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  Gewoon eens wat anders. Laagdrempelig, niet duur, wel verrassend.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/nl/expert-advies" className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                    Boek een zaaltje →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT HET IS ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Het zaaltje</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
              Een ingerichte ruimte, klaar voor gebruik.
            </h2>
            <p className="text-[#545454] leading-relaxed mb-4">
              Soms wil je voor een leuke, andersoortige meeting met een kleine groep een online
              plek die beter werkt dan een raster van vierkantjes. Geen heel kantoor, geen project,
              en geen zin om zelf iets in te richten.
            </p>
            <p className="text-[#545454] leading-relaxed">
              Boek een ingericht zaaltje voor maximaal 12 personen. Je stapt binnen, het werkt, en
              wij staan op de achtergrond. De makkelijkste manier om te ervaren hoe online
              samenkomen ook kan voelen.
            </p>
          </div>
        </div>
      </section>

      {/* ── WAARVOOR ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-8 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Voor wie</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Voor kleine teams die het gewoon eens willen proberen.
            </h2>
          </div>
          <ul className="space-y-3 max-w-[640px]">
            {waarvoor.map((w) => (
              <li key={w} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EEBE3D] mt-2 flex-shrink-0" />
                <p className="text-sm text-[#545454] leading-relaxed">{w}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── ROUTE OMHOOG ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-8 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Smaakt naar meer?</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug">
              Van een zaaltje naar een eigen kantoor.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href="/nl/virtual-office/huren" className="group bg-white rounded p-7 shadow-sm border border-[#EBEBEB] hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all">
              <h3 className="font-bold text-[#2D2D2D] text-lg mb-2 group-hover:text-[#EEBE3D] transition-colors">Huur een instapklaar kantoor</h3>
              <p className="text-sm text-[#545454] leading-relaxed mb-4">Een vaste, levende plek waar je elkaar zomaar tegenkomt — per maand of jaar.</p>
              <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide">Meer over huren →</span>
            </Link>
            <Link href="/nl/virtual-office/fundament" className="group bg-white rounded p-7 shadow-sm border border-[#EBEBEB] hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all">
              <h3 className="font-bold text-[#2D2D2D] text-lg mb-2 group-hover:text-[#EEBE3D] transition-colors">Bouw vanuit het fundament</h3>
              <p className="text-sm text-[#545454] leading-relaxed mb-4">Als het echt om de samenwerking gaat: bouw een kantoor vanuit je waarden.</p>
              <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide">Meer over het fundament →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen over een online zaaltje
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faq.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock />
    </div>
  );
}
