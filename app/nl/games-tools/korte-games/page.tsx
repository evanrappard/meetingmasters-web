import type { Metadata } from "next";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Korte online games (20–30 min) voor meeting of borrel | MeetingMasters",
  description:
    "Korte online games van 20 tot 30 minuten die u speelt als onderdeel van een meeting of feestje. Van pubquiz tot energizers — laagdrempelig en interactief, live begeleid door de Meeting Masters via SpatialChat.",
};

const games = [
  {
    title: "Online pubquiz",
    body: "Een snelle quizronde vol vragen op maat — over uw team, uw organisatie of gewoon algemene kennis. Teams strijden om de eerste plek en de spanning zit er meteen in.",
  },
  {
    title: "Energizers & ijsbrekers",
    body: "Korte, actieve rondes die de energie omhoog brengen en iedereen even van hun stoel krijgen. Ideaal om een lange vergadering op te breken of een dag fris te starten.",
  },
  {
    title: "Teken- en uitbeeldspel",
    body: "Eén iemand tekent of beeldt uit, de rest raadt zo snel mogelijk. Gegarandeerd gelach en verrassend fanatiek — ook bij collega's die niet kunnen tekenen.",
  },
  {
    title: "2 waarheden en 1 leugen",
    body: "Elke deelnemer deelt drie beweringen over zichzelf; de groep raadt welke gelogen is. Een laagdrempelige manier om elkaar beter te leren kennen.",
  },
  {
    title: "Emoji- & raadspel",
    body: "Films, liedjes of bekende uitspraken, verpakt in een rij emoji's. De teams die het snelst de code kraken, pakken de punten.",
  },
  {
    title: "Muziek- & herkenningsronde",
    body: "Herken het nummer, de intro of de artiest voordat de rest u voor is. Een muzikale ronde die iedereen meteen meekrijgt in de sfeer.",
  },
];

const faq = [
  {
    q: "Hoe lang duurt een korte game?",
    a: "Een korte game duurt 20 tot 30 minuten. Zo past een spel makkelijk binnen een meeting, borrel of programma zonder dat het de rest van de agenda overneemt. Wilt u meerdere rondes achter elkaar, dan combineren we ze tot een langer blok.",
  },
  {
    q: "Voor welke groepsgrootte zijn de games geschikt?",
    a: "De games werken voor kleine teams van een handvol mensen tot grotere groepen van tientallen deelnemers. Bij grotere groepen splitsen we op in teams die het tegen elkaar opnemen, zodat iedereen actief meedoet.",
  },
  {
    q: "Kunnen we een game los boeken of moet het in een programma?",
    a: "Beide kan. U boekt een korte game als losse activiteit, bijvoorbeeld tijdens een online borrel, of u laat ons er een aantal combineren tot een compleet programma voor een kick-off of teamdag.",
  },
  {
    q: "Wie begeleidt de games en waar spelen we ze?",
    a: "Een Meeting Master presenteert en begeleidt elke game live via SpatialChat. Het draait volledig in de browser — deelnemers openen een link en doen meteen mee, zonder installatie of gedoe.",
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

export default function KorteGamesPage() {
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* ── HEADER ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              Korte games
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-snug mb-5">
              Korte online games van 20 tot 30 minuten.
            </h1>
            <p className="text-[#545454] text-lg leading-relaxed mb-4">
              Soms hoeft het niet groots. Een korte, leuke game van 20 tot 30 minuten breekt
              een vergadering open, brengt de energie terug en zorgt voor spontane momenten
              waar mensen elkaar echt even zien. Precies genoeg om iets te laten gebeuren,
              zonder dat het uw hele programma overneemt.
            </p>
            <p className="text-[#545454] leading-relaxed">
              Elke game is laagdrempelig en interactief, en wordt live begeleid door een
              Meeting Master via SpatialChat. Deelnemers openen een link in de browser en doen
              meteen mee — ideaal als onderdeel van een online borrel, kick-off of teamdag.
            </p>
          </div>
        </div>
      </section>

      {/* ── VOORBEELD-GAMES ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
              Voorbeelden
            </p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Zes korte games om uit te kiezen.
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Van een fanatieke pubquiz tot een muzikale herkenningsronde. Stuk voor stuk kort,
              laagdrempelig en interactief — en makkelijk te combineren tot een groter blok.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {games.map((g) => (
              <div key={g.title} className="bg-white rounded p-7 shadow-sm border border-[#EBEBEB]">
                <div className="h-1 w-10 bg-[#EEBE3D] rounded-full mb-4" />
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-2 leading-snug">{g.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAAROM KORTE GAMES ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                Kort & laagdrempelig
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Precies genoeg om iets te laten gebeuren.
              </h2>
              <p className="text-[#545454] leading-relaxed">
                Een game van 20 tot 30 minuten past overal tussen. Geen lange voorbereiding, geen
                ingewikkelde spelregels: iedereen doet meteen mee. Zo houdt u de vaart erin en
                blijft er tijd over voor de rest van uw agenda.
              </p>
            </div>
            <div className="lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                Interactief & begeleid
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Los of als onderdeel van een programma.
              </h2>
              <p className="text-[#545454] leading-relaxed">
                Boek een game als losse activiteit tijdens een borrel, of laat ons er een paar
                combineren tot een compleet programma voor een kick-off of teamdag. Een Meeting
                Master begeleidt alles live via SpatialChat, zodat u zelf gewoon kunt meedoen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen over korte online games
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
