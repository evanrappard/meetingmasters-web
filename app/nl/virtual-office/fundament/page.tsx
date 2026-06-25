import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Virtueel kantoor op maat — vanuit het fundament | MeetingMasters",
  description:
    "Bouw je virtuele kantoor vanuit het fundament: begin bij waar je voor staat, welke waarden verbinden en hoe je wilt samenwerken. Samen met cultuur- en samenwerkingsspecialisten. Het kantoor is de uitkomst.",
};

const stappen = [
  { n: "01", title: "Aanhaken op het strategisch fundament", body: "We beginnen bij waar je voor staat en voor gaat. De koers van de organisatie is het vertrekpunt — niet de inrichting van de ruimte." },
  { n: "02", title: "Centrale waarden bespreekbaar maken", body: "Welke waarden verbinden, en hoe komen die tot uiting — vóór de teams en bínnen teams? We maken het concreet en bespreekbaar, ook wat voor jou als persoon telt." },
  { n: "03", title: "Vertalen naar samenwerken", body: "Wat betekent dat voor de manier en de structuur van samenwerken? We richten zowel de structuur in als de zachte kant: hoe blijf je samen aan het werk en hoe blijf je in gesprek." },
  { n: "04", title: "Het kantoor als uitkomst", body: "De ruimte wordt op maat ingericht, afgestemd op hoe jullie teams werken — als uitvloeisel van het traject. Een plek die richting en energie geeft aan hoe je wilt samenwerken." },
];

const faq = [
  { q: "Wat betekent 'vanuit het fundament bouwen'?", a: "Je begint niet bij de inrichting van de ruimte, maar bij de vraag waar je voor staat, welke waarden verbinden en hoe je wilt samenwerken nu je niet meer op dezelfde plek zit. Samen met cultuur- en samenwerkingsspecialisten vertaal je dat naar je manier van werken. Het kantoor is de uitkomst." },
  { q: "Voor wie is dit traject bedoeld?", a: "Voor directie, strategen en inhoudelijk verantwoordelijken — bijvoorbeeld als de samenwerking op afstand stroef loopt, of na een fusie of binnen een groter programma waar opnieuw benoemd moet worden hoe je wilt werken." },
  { q: "Waarom een kant-en-klaar kantoor hier niet volstaat?", a: "Omdat de vraag dieper zit. Een instapklaar kantoor geeft je meteen een plek; een fundament-traject geeft je eerst helderheid over hoe je wilt samenwerken — en dán de plek die daarbij past. Als het ertoe doet, volstaat de standaard niet." },
  { q: "Maken jullie samenwerking ook weer bespreekbaar?", a: "Ja. Het overstapmoment naar een virtueel kantoor is hét moment om afspraken opnieuw te bespreken: hoe werken we samen, wat is online onduidelijk geworden, mag de camera aan of uit? Niet betuttelend, maar om de samenwerking beter te maken." },
  { q: "Wie begeleiden dit?", a: "Cultuur-, merk- en samenwerkingsspecialisten, met twintig jaar ervaring in strategie en participatie. Geen consultancy-traject van bovenaf, maar een begeleid gesprek dat richting geeft — met het kantoor als concrete uitkomst." },
  { q: "Kunnen jullie het kantoor daarna ook levend houden?", a: "Optioneel, ja. Met Facility Services brengen we energie en beweging in de omgeving: verrassende interacties en op feestdagen iets extra's. De intensiteit bepaal je zelf." },
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

export default function FundamentPage() {
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section>
        <div className="relative w-full h-[42vw] min-h-[300px] max-h-[520px]">
          <Image
            src="/images/hero-lobby.webp"
            alt="Een virtueel kantoor op maat, gebouwd vanuit het fundament van de organisatie"
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
                  Bouw je kantoor vanuit het fundament.
                </h1>
                <p className="text-white text-lg leading-relaxed mb-8" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  Het gaat niet om het kantoor. Het gaat om hoe je wilt samenwerken.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/nl/expert-advies" className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                    Plan een kennismaking →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAAR HET ECHT OM GAAT ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Waar het echt om gaat</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
              Het kantoor is de aanleiding, niet het doel.
            </h2>
            <p className="text-[#545454] leading-relaxed mb-4">
              Over de tijd is onduidelijk geworden hoe je eigenlijk wilt samenwerken nu je niet meer
              op dezelfde plek zit. Of er is een fusie geweest, of een groter programma, waarin je
              opnieuw moet benoemen hoe je wilt werken. Waar sta je voor, welke waarden verbinden,
              hoe blijf je met elkaar in gesprek?
            </p>
            <p className="text-[#545454] leading-relaxed">
              Een kant-en-klaar kantoor lost dat niet op, want de vraag zit dieper. Het kantoor is
              soms gewoon de aanleiding om een gesprek te voeren dat je lang hebt uitgesteld — zoals
              een verhuizing soms de reden is dat je eindelijk je zolder eens opruimt.
            </p>
          </div>
        </div>
      </section>

      {/* ── HET TRAJECT ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Het traject</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Van fundament naar kantoor.
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Samen met cultuur-, merk- en samenwerkingsspecialisten bouw je van binnen naar buiten.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stappen.map((s) => (
              <div key={s.n} className="bg-white rounded p-6 shadow-sm border border-[#EBEBEB]">
                <p className="text-[#EEBE3D] text-3xl font-bold leading-none mb-4">{s.n}</p>
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOOR WIE + GELOOFWAARDIGHEID ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Voor wie</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Voor wie het ertoe laat doen.
              </h2>
              <p className="text-[#545454] leading-relaxed">
                Directie, strategen en inhoudelijk verantwoordelijken die niet alleen een plek
                willen, maar helderheid over hoe ze samenwerken — en een omgeving die dat draagt.
              </p>
            </div>
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Waarom met ons</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Ervaring en rust, geen consultancy-toneel.
              </h2>
              <p className="text-[#545454] leading-relaxed">
                Twintig jaar ervaring in strategie en participatie, ingebracht door cultuur- en
                samenwerkingsspecialisten. We voeren het gesprek dat richting geeft — en leveren een
                kantoor dat die richting zichtbaar maakt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen over bouwen vanuit het fundament
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
