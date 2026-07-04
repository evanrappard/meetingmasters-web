import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Online escape room voor teams (EscapeMasters) | MeetingMasters",
  description:
    "EscapeMasters is een online escape room via SpatialChat: uw team lost samen puzzels op onder tijdsdruk. Twee varianten — 60 minuten of XL. Geschikt voor 10 tot 200 deelnemers, begeleid door de Meeting Masters.",
};

const varianten = [
  {
    tag: "Compact & energiek",
    title: "60 minuten",
    lead: "Samen de puzzels kraken.",
    desc:
      "In één uur ligt de focus volledig op het samen oplossen van de puzzels. Energiek, laagdrempelig en makkelijk in te plannen — precies de juiste dosis spanning voor een kick-off, teamdag of borrel. U hoeft niets voor te bereiden; wij nemen uw groep bij de hand.",
    points: [
      "Focus op het spel en het samen oplossen",
      "Laagdrempelige, energieke teambuilding",
      "Ideaal als kort onderdeel van een groter programma",
    ],
  },
  {
    tag: "Uitgebreid & verdiepend",
    title: "XL-versie",
    lead: "Langer spelen, dieper gaan.",
    desc:
      "De XL-versie is langer en uitgebreider. Juist geschikt voor groepen die elkaar nog niet goed kennen, of voor teams die het spel gebruiken als aanleiding om dieper in te gaan op een inhoudelijk thema of op de onderlinge samenwerking. Het spel wordt zo een startpunt voor een goed gesprek.",
    points: [
      "Ook voor groepen die elkaar nog niet goed kennen",
      "Ruimte om in te gaan op inhoudelijke thema's",
      "Gebruik het spel om de samenwerking te verdiepen",
    ],
  },
];

const zo = [
  {
    title: "Vrij bewegen",
    body: "In SpatialChat beweegt uw team vrij door de ruimte. U loopt naar elkaar toe, vormt groepjes en verplaatst zich net als op een echte locatie.",
  },
  {
    title: "Fluisterend overleggen",
    body: "Wie dicht bij elkaar staat, hoort elkaar. Zo overlegt u fluisterend met uw team, terwijl andere groepen hun eigen gesprek voeren.",
  },
  {
    title: "Samen puzzels oplossen",
    body: "Onder tijdsdruk kraakt u samen de puzzels. U ontdekt hoe uw team samenwerkt onder druk — en leert elkaar meteen een stuk beter kennen.",
  },
];

const faq = [
  {
    q: "Wat is een online escape room?",
    a: "Een online escape room is een digitale variant van de klassieke escape room. Bij EscapeMasters speelt u via SpatialChat: uw team beweegt vrij door de ruimte, overlegt fluisterend en lost samen puzzels op onder tijdsdruk. Er is geen fysieke locatie nodig — iedereen doet mee vanachter zijn eigen scherm, waar ook ter wereld.",
  },
  {
    q: "Hoe lang duurt EscapeMasters?",
    a: "Er zijn twee varianten. De 60-minutenversie duurt een uur en richt zich op het samen oplossen van de puzzels. De XL-versie is langer en uitgebreider, met ruimte om na afloop dieper in te gaan op een thema of op de samenwerking. Samen kijken we welke variant het beste bij uw groep en doel past.",
  },
  {
    q: "Wat is het verschil tussen de 60-minutenversie en de XL-versie?",
    a: "De 60-minutenversie is compact en energiek en draait om het spel zelf: samen puzzels oplossen. De XL-versie is langer en uitgebreider en is óók geschikt voor groepen die elkaar nog niet goed kennen, of voor teams die het spel gebruiken om dieper in te gaan op inhoudelijke thema's of op de onderlinge samenwerking.",
  },
  {
    q: "Voor hoeveel deelnemers is EscapeMasters geschikt?",
    a: "EscapeMasters is geschikt voor groepen van ongeveer 10 tot 200 deelnemers. Grote groepen verdelen we in teams die samen aan de slag gaan. De Meeting Masters begeleiden de hele sessie live, zodat alles soepel verloopt.",
  },
  {
    q: "Op welk platform speelt EscapeMasters?",
    a: "EscapeMasters speelt in SpatialChat. Dat platform maakt het mogelijk om vrij te bewegen en fluisterend te overleggen, zoals op een echte locatie. Het draait gewoon in de browser: deelnemers openen een link en spelen mee, zonder installatie of account-gedoe.",
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

export default function EscapeMastersPage() {
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HERO ── */}
      <section>
        <h1 className="sr-only">EscapeMasters — online escape room voor teams</h1>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px]">
          <Image
            src="/images/format-escape.png"
            alt="EscapeMasters online escape room — een team lost samen puzzels op onder tijdsdruk"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[600px]">
                <p className="inline-block bg-black/35 rounded px-2.5 py-1 text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
                  Online escape room
                </p>
                <h2
                  className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5"
                  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
                >
                  Samen ontsnappen,
                  <br />
                  onder tijdsdruk.
                </h2>
                <p
                  className="text-white text-lg font-medium leading-relaxed mb-8"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6)" }}
                >
                  EscapeMasters is de online escape room waarin uw team samen puzzels
                  kraakt — en elkaar meteen beter leert kennen.
                </p>
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
      </section>

      {/* ── WAT HET IS ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Wat het is</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Een online escape room via SpatialChat.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed mb-4">
                EscapeMasters is een volledig online escape room — geen fysieke ruimte
                nodig. In SpatialChat beweegt uw team vrij door de ruimte, overlegt
                fluisterend en lost samen puzzels op onder tijdsdruk. Een Meeting Master
                begeleidt de hele sessie live.
              </p>
              <p className="text-[#545454] leading-relaxed">
                Terwijl u speelt, ontdekt u hoe uw team samenwerkt onder druk. Wie neemt
                het voortouw, hoe verdeelt u de taken, hoe blijft u scherp als de klok
                tikt? U leert elkaar beter kennen — bijna ongemerkt, omdat het vooral heel
                leuk is.
              </p>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Voor wie</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Voor groepen die iets samen willen beleven.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed mb-4">
                EscapeMasters is geschikt voor groepen van ongeveer 10 tot 200
                deelnemers. Denk aan een kick-off, een teamdag, een bedrijfsfeest of een
                onboarding van nieuwe collega's. Grote groepen verdelen we in teams die
                samen aan de slag gaan.
              </p>
              <p className="text-[#545454] leading-relaxed">
                De Meeting Masters presenteren en begeleiden alles live, zodat u zich met
                uw team volledig op het spel kunt richten. Iedereen doet mee vanachter het
                eigen scherm, waar ook ter wereld.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZO WERKT HET ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Zo werkt het</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Bewegen, overleggen, samen oplossen.
            </h2>
            <p className="text-[#545454] leading-relaxed">
              In SpatialChat voelt online samenwerken weer als een echte plek. U beweegt
              vrij, overlegt met wie dichtbij staat en werkt samen naar de ontsnapping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {zo.map((s) => (
              <div key={s.title} className="bg-white rounded p-7 shadow-sm border border-[#EBEBEB]">
                <div className="w-8 h-1 bg-[#EEBE3D] rounded mb-4" />
                <h3 className="font-bold text-[#2D2D2D] text-xl mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWEE VARIANTEN ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Twee varianten</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Kies wat bij uw groep en doel past.
            </h2>
            <p className="text-[#545454] leading-relaxed">
              EscapeMasters bestaat in twee varianten: een compacte versie van 60 minuten
              en een uitgebreide XL-versie. Twijfelt u welke het beste past? Wij denken
              graag met u mee.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {varianten.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded p-8 shadow-sm border border-[#EBEBEB] flex flex-col"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#28A8AA] mb-3">{v.tag}</span>
                <h3 className="font-bold text-[#2D2D2D] text-2xl mb-1 leading-snug">{v.title}</h3>
                <p className="text-[#2D2D2D] font-semibold mb-4">{v.lead}</p>
                <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5" />
                <p className="text-[#545454] leading-relaxed mb-6">{v.desc}</p>
                <ul className="space-y-2.5">
                  {v.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-[#545454] leading-relaxed">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#EEBE3D]" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen over de online escape room
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
