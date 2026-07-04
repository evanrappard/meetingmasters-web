import type { Metadata } from "next";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Maatwerk game — interactief spel op maat | MeetingMasters",
  description:
    "Wij ontwerpen een interactief spel volledig op maat: eigen puzzels, verhaal en visuals, afgestemd op uw thema en groepsdynamiek. In te zetten voor onboarding, compliance, security awareness of verandermanagement — begeleid door de Meeting Masters via SpatialChat.",
  alternates: { canonical: "/nl/games-tools/maatwerk" },
  openGraph: {
    title: "Maatwerk game — interactief spel op maat | MeetingMasters",
    description:
      "Een interactief spel volledig op maat: eigen puzzels, verhaal en visuals, afgestemd op uw thema en groepsdynamiek. Begeleid door de Meeting Masters via SpatialChat.",
    type: "website",
  },
};

const inzet = [
  {
    title: "Onboarding",
    body: "Laat nieuwe medewerkers uw organisatie, mensen en werkwijzen ontdekken via een spel. Cultuur en kennis blijven hangen omdat mensen het zelf beleven.",
  },
  {
    title: "Compliance",
    body: "Regels, beleid en procedures die vaak als droog worden ervaren, verpakt in een verhaal met keuzes en gevolgen. Zo landt de boodschap écht.",
  },
  {
    title: "Security awareness",
    body: "Phishing, datalekken en veilig gedrag ervaarbaar maken. Deelnemers oefenen met realistische scenario's in een veilige spelomgeving.",
  },
  {
    title: "Verandermanagement",
    body: "Een nieuwe koers of werkwijze verankeren via beleving in plaats van presentaties. De game maakt het abstracte concreet en bespreekbaar.",
  },
  {
    title: "Alternatief voor training",
    body: "Waar een klassieke training weerstand oproept, activeert een spel. Meer betrokkenheid, meer retentie, meer plezier — met dezelfde leerdoelen.",
  },
  {
    title: "Onderdeel van een programma",
    body: "De maatwerkgame kan ook worden geïntegreerd in een groter event of traject, als scharnierpunt tussen sessies of als rode draad door de dag.",
  },
];

const traject = [
  {
    n: "01",
    title: "Intake & doel",
    body: "We beginnen bij uw doel, uw groep en uw context. Wat wilt u bereiken, wie doet er mee en waar zit de groepsdynamiek? Wij stellen de vragen die u zelf nog niet had gesteld.",
  },
  {
    n: "02",
    title: "Ontwerp",
    body: "We ontwerpen het spel volledig op maat: verhaallijn, puzzels, spelmechaniek en visuals, afgestemd op uw thema. U ziet het concept vóór we bouwen.",
  },
  {
    n: "03",
    title: "Bouw & test",
    body: "We bouwen de game in SpatialChat, testen met een kleine groep en schaven bij tot alles klopt — van tempo tot toon.",
  },
  {
    n: "04",
    title: "Live begeleiding",
    body: "Op de dag zelf begeleiden de Meeting Masters de game volledig. U hoeft zich nergens zorgen over te maken; wij zorgen dat het loopt.",
  },
];

const faq = [
  {
    q: "Wat is een maatwerk game?",
    a: "Een maatwerk game is een interactief spel dat wij volledig op maat ontwerpen: eigen puzzels, een eigen verhaal en eigen visuals, afgestemd op uw thema en de dynamiek van uw groep. Het is dus geen bestaand spel met een ander logo, maar een ervaring die vanaf de basis rond uw doel wordt opgebouwd.",
  },
  {
    q: "Waarvoor kunt u een maatwerk game inzetten?",
    a: "Voor onboarding, compliance, security awareness, verandermanagement of als aantrekkelijk alternatief voor een traditionele training. De game kan op zichzelf staan of worden geïntegreerd in een groter programma of event.",
  },
  {
    q: "Op welk platform wordt de game gespeeld?",
    a: "De game draait in SpatialChat en wordt live begeleid door de Meeting Masters. SpatialChat werkt gewoon in de browser, zodat deelnemers zonder installatie of account-gedoe kunnen meedoen.",
  },
  {
    q: "Hoe verloopt het traject?",
    a: "We starten met een intake om uw doel en groep scherp te krijgen. Daarna ontwerpen we het spel op maat, bouwen en testen we het, en op de dag zelf verzorgen wij de volledige live begeleiding.",
  },
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

export default function MaatwerkPage() {
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HEADER ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <Link
            href="/nl/games-tools"
            className="text-[#898989] text-xs hover:text-[#545454] transition-colors mb-6 inline-block"
          >
            ← Games &amp; Tools
          </Link>
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            Maatwerk game
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#2D2D2D] leading-snug mb-5 max-w-[20ch]">
            Een interactief spel, volledig op maat.
          </h1>
          <p className="text-[#545454] leading-relaxed text-lg max-w-[640px] mb-8">
            Wij ontwerpen een interactief spel volledig op maat: eigen puzzels, een eigen verhaal
            en eigen visuals, afgestemd op uw thema en de dynamiek van uw groep. Van intake tot
            live begeleiding nemen de Meeting Masters het hele traject uit handen.
          </p>
          <Link
            href="/nl/contact"
            className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors inline-block"
          >
            Plan een gesprek →
          </Link>
        </div>
      </section>

      {/* ── WAT HET IS ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                Wat het is
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Uw verhaal, uw puzzels, uw visuals.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                Geen bestaand spel met een ander logo, maar een ervaring die wij vanaf de basis
                voor u ontwerpen. De puzzels, het verhaal en de visuals sluiten aan op uw thema, uw
                boodschap en de manier waarop uw groep samenwerkt. Zo wordt de game van u — en
                blijft de boodschap hangen.
              </p>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                Hoe het werkt
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Begeleid door de Meeting Masters.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                De game draait in SpatialChat en wordt live begeleid door de Meeting Masters.
                Deelnemers spelen gewoon in hun browser — zonder installatie of gedoe. U hoeft zich
                nergens zorgen over te maken: wij zorgen dat het loopt, van de eerste tot de laatste
                minuut.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WANNEER INZETTEN ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              Toepassingen
            </p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Wanneer kiest u voor een maatwerk game?
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Overal waar een boodschap moet blijven hangen en waar beleving meer doet dan een
              presentatie. Een maatwerk game staat op zichzelf, of is onderdeel van een groter
              programma.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {inzet.map((u) => (
              <div
                key={u.title}
                className="bg-white rounded p-7 shadow-sm border border-[#EBEBEB]"
              >
                <div className="w-8 h-1 bg-[#EEBE3D] rounded mb-4" />
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-2 leading-snug">{u.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAJECT ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              Het traject
            </p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Van doel tot live game.
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Wij nemen het hele traject uit handen — van het scherp krijgen van uw doel tot de
              begeleiding op de dag zelf.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {traject.map((s) => (
              <div key={s.n}>
                <p
                  className="text-[#EEBE3D] font-bold tabular-nums mb-4"
                  style={{ fontSize: "2.5rem", lineHeight: 1 }}
                >
                  {s.n}
                </p>
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{s.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen over de maatwerk game
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
