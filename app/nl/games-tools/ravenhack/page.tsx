import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import YouTubeFacade from "@/components/ui/YouTubeFacade";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "R@venHack — cybersecurity escape game voor teams | MeetingMasters",
  description:
    "R@venHack is een cybersecurity escape game waarin je team samen een digitale aanval stopt. Beschikbaar als gewone versie (± 60 min) en als uitgebreide XL-versie. Leer al doende over phishing, datalekken en veilig digitaal gedrag — teambuilding én startpunt voor kennisoverdracht. Draait via SpatialChat.",
};

const versies = [
  {
    tag: "De klassieker",
    title: "R@venHack — gewone versie",
    lead: "De standaard R@venHack: compact, energiek en meteen raak.",
    body: "In ongeveer 60 minuten belandt je team midden in een cyberaanval en werkt het onder tijdsdruk samen om de aanval te stoppen. De focus ligt op de belangrijkste awareness-lessen — phishing herkennen, een datalek indammen en veilig digitaal gedrag — verpakt in een strakke, meeslepende escape. Ideaal als energieke teambuilding of als pakkende opening van een teamdag of securityweek.",
    kenmerken: [
      "± 60 minuten, strak en energiek",
      "Focus op de kern-awarenesslessen",
      "Perfect voor één team of een compacte groep",
      "Sterke opener voor een teamdag of securityweek",
    ],
  },
  {
    tag: "Meer diepgang",
    title: "R@venHack XL — uitgebreide versie",
    lead: "Langer, rijker en met ruimte voor grotere groepen.",
    body: "De XL-versie neemt meer tijd en gaat een stap verder. Naast de kern komen er extra scenario's en securitythema's bij, met meer puzzels, meer plotwendingen en een uitgebreidere nabespreking. Doordat het spel in meerdere teams tegelijk gespeeld kan worden, is deze variant uitstekend geschikt voor grotere groepen en voor organisaties die cybersecurity-awareness echt willen laten landen én de onderlinge samenwerking op de proef willen stellen.",
    kenmerken: [
      "Langere, verdiepende sessie",
      "Extra scenario's en securitythema's",
      "Geschikt voor grotere groepen, meerdere teams tegelijk",
      "Uitgebreidere nabespreking en kennisoverdracht",
    ],
    highlight: true,
  },
];

const stappen = [
  {
    tag: "De crisis",
    title: "Je team belandt midden in een aanval",
    body: "Datalekken, phishing en verborgen aanwijzingen: er is iets goed mis en de klok tikt. Samen moet je de digitale crisis ontrafelen.",
  },
  {
    tag: "Het onderzoek",
    title: "Samen zoek je naar de sleutels",
    body: "In een reeks puzzels en aanwijzingen ontdek je hoe de aanval in elkaar zit. Overleggen, combineren en doorpakken — als team.",
  },
  {
    tag: "De doorbraak",
    title: "Je stopt de aanval",
    body: "Op het juiste moment valt alles op zijn plek en keer je de aanval. En ondertussen heb je geleerd hoe je dit in het echt voorkomt.",
  },
];

const faq = [
  {
    q: "Wat is R@venHack precies?",
    a: "R@venHack is een cybersecurity escape game. Je team belandt in een digitale crisis vol datalekken, phishing en verborgen aanwijzingen en moet samen de aanval stoppen. Het is een bewustwordingservaring: je leert over veilig digitaal gedrag door het te dóen, in plaats van een e-learning te doorlopen.",
  },
  {
    q: "Wat is het verschil tussen de gewone versie en de XL-versie?",
    a: "De gewone versie is de compacte, energieke R@venHack van ongeveer 60 minuten, met de focus op samen de aanval stoppen en de belangrijkste awareness-lessen. De XL-versie duurt langer en gaat dieper: met extra scenario's, meer securitythema's en een uitgebreidere nabespreking. De XL-versie is ook geschikt voor grotere groepen die in meerdere teams tegelijk spelen en die de onderlinge samenwerking verder op de proef willen stellen.",
  },
  {
    q: "Hoe lang duurt R@venHack?",
    a: "De gewone versie duurt ongeveer 60 minuten, inclusief een korte introductie en nabespreking. De XL-versie neemt meer tijd — reken op een langere sessie met extra verdieping en een uitgebreidere nabespreking. Samen kijken we welke variant en welke tijdsduur het beste bij je team en je doel passen.",
  },
  {
    q: "Voor welke groepsgrootte is het geschikt?",
    a: "De gewone versie is ideaal voor één team of een compacte groep. De XL-versie is juist geschikt voor grotere groepen, doordat er in meerdere teams tegelijk gespeeld wordt en iedereen actief meedoet. Voor het aantal deelnemers dat bij je groep past, kijken we graag even mee.",
  },
  {
    q: "Wat leert mijn team ervan?",
    a: "Deelnemers leren phishing en misleiding herkennen, hoe ze een datalek indammen en wat veilig digitaal gedrag in de praktijk betekent. Omdat ze het samen en onder lichte druk ontdekken, beklijven de lessen beter dan bij een verplichte training. Het is tegelijk teambuilding én een natuurlijk startpunt voor bredere kennisoverdracht over cybersecurity. In de XL-versie is er extra ruimte voor verdieping op securitythema's.",
  },
  {
    q: "Op welk platform draait R@venHack?",
    a: "Beide versies draaien via SpatialChat en worden begeleid door de Meeting Masters. Deelnemers openen een link in de browser en lopen zo binnen — zonder installatie. De begeleiding zorgt dat het spel soepel verloopt en dat iedereen erbij betrokken blijft.",
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

export default function RavenHackPage() {
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section>
        <h1 className="sr-only">
          R@venHack — cybersecurity escape game voor teams, in een gewone en een XL-versie
        </h1>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px]">
          <Image
            src="/images/format-escape.webp"
            alt="R@venHack cybersecurity escape game — een team stopt samen een digitale aanval"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[600px] ml-auto">
                <p className="inline-block bg-black/35 rounded px-2.5 py-1 text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
                  R@venHack · Cybersecurity
                </p>
                <h2
                  className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5"
                  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
                >
                  Stop samen
                  <br />
                  de cyberaanval.
                </h2>
                <p
                  className="text-white text-lg font-medium leading-relaxed mb-8"
                  style={{
                    textShadow:
                      "0 1px 2px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6)",
                  }}
                >
                  Een cybersecurity escape game waarin je team al spelend leert
                  over veilig digitaal gedrag — in een gewone en een XL-versie.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/nl/contact"
                    className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    Check beschikbaarheid →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WAT HET IS + VOOR WIE ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                Wat het is
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Een cybersecurity escape game.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                In R@venHack belandt je team midden in een digitale crisis vol
                datalekken, phishing en verborgen aanwijzingen. Samen ontrafel
                je de aanwijzingen en stop je de aanval. Het is geen les die je
                ondergaat, maar een ervaring die je doorleeft — en juist daardoor
                blijft hangen wat veilig digitaal gedrag betekent.
              </p>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                Voor wie
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Teambuilding met een leerdoel.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed">
                Voor organisaties die het bewustzijn rond digitale veiligheid
                verder willen brengen dan een verplichte e-learning. R@venHack
                werkt als teambuilding én als natuurlijk startpunt voor bredere
                kennisoverdracht over cybersecurity — je leert samen, en het
                gesprek erna gaat vanzelf verder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWEE VERSIES ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              Twee versies
            </p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Kies de R@venHack die bij je team past.
            </h2>
            <p className="text-[#545454] leading-relaxed">
              R@venHack is er in twee smaken: een compacte, energieke gewone
              versie en een uitgebreidere XL-versie met meer diepgang. Beide
              stoppen samen de aanval — het verschil zit in de tijd, de omvang
              en hoe ver je de securitythema's uitdiept.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {versies.map((v) => (
              <div
                key={v.title}
                className={`bg-white rounded p-7 shadow-sm border ${
                  v.highlight ? "border-[#EEBE3D]/60" : "border-[#EBEBEB]"
                } flex flex-col`}
              >
                <div className="w-8 h-1 bg-[#EEBE3D] rounded mb-4" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#28A8AA] mb-3">
                  {v.tag}
                </span>
                <h3 className="font-bold text-[#2D2D2D] text-xl mb-2 leading-snug">
                  {v.title}
                </h3>
                <p className="text-[#2D2D2D] font-semibold text-sm mb-3">
                  {v.lead}
                </p>
                <p className="text-sm text-[#545454] leading-relaxed mb-5">
                  {v.body}
                </p>
                <ul className="space-y-2 mt-auto">
                  {v.kenmerken.map((k) => (
                    <li
                      key={k}
                      className="flex items-start gap-2 text-sm text-[#545454] leading-relaxed"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 flex-none rounded-full bg-[#EEBE3D]" />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOE HET WERKT ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              Hoe het werkt
            </p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Van crisis naar doorbraak, samen als team.
            </h2>
            <p className="text-[#545454] leading-relaxed">
              R@venHack draait via SpatialChat en wordt begeleid door de Meeting
              Masters. Je opent een link, loopt binnen en de crisis begint —
              zowel in de gewone als in de XL-versie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stappen.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded p-7 shadow-sm border border-[#EBEBEB] flex flex-col"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#28A8AA] mb-4">
                  {s.tag}
                </span>
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-[#545454] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEELD + PRAKTIJK ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                In de praktijk
              </p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Verder dan de phishingtest.
              </h2>
              <p className="text-[#2D2D2D] font-semibold text-lg leading-relaxed mb-4">
                Een datalek. Een verdachte mail. En steeds weer dezelfde naam: R@ven.
              </p>
              <p className="text-[#545454] leading-relaxed mb-4">
                Teams volgen het spoor van een hacker door een virtueel kantoor:
                wachtwoorden kraken, aanwijzingen ontcijferen, knopen doorhakken
                terwijl de klok tikt. Cybersecurity blijft zo niet bij erover horen.
              </p>
              <p className="text-[#545454] leading-relaxed">
                R@venHack duurt 60 minuten, of in de XL-versie 90 minuten, met meer
                ruimte voor teambuilding en leren.
              </p>
            </div>
            <YouTubeFacade
              videoId="5g3Vv51_hR0"
              poster="/images/ravenhack-video-poster.jpg"
              title="R@venHack"
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen over R@venHack
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faq.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-[#545454] leading-relaxed">
                  {item.a}
                </p>
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
