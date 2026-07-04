import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABlock from "@/components/ui/CTABlock";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Games & Tools voor online meetings en events | MeetingMasters",
  description:
    "Online games die groepen samenbrengen — van escape room tot cybersecuritygame — en gratis tools voor levendige meetings. Speelklaar of volledig op maat gemaakt.",
};

const games = [
  {
    title: "Online escape room",
    desc: "Samen puzzels oplossen onder tijdsdruk in SpatialChat. Ontdek hoe uw team samenwerkt en leer elkaar beter kennen.",
    detail: "± 60 min · kleine tot grote groepen",
    img: "/images/format-escape.webp",
    alt: "Deelnemers lossen samen puzzels op in een online escape room in SpatialChat",
  },
  {
    title: "Korte games",
    desc: "Compacte spellen van 20–30 minuten: pubquiz, energizers, raadspellen. Perfect in een meeting, kick-off of borrel.",
    detail: "20–30 min · elk groepsformaat",
    img: "/images/format-party.webp",
    alt: "Een groep speelt een korte online game tijdens een meeting",
  },
  {
    title: "Maatwerk game",
    desc: "Een spel volledig op maat: eigen puzzels, verhaal en visuals, afgestemd op uw thema en groep.",
    detail: "op maat · onboarding, awareness, teambuilding",
    img: "/images/format-1.webp",
    alt: "Een online game op maat met eigen puzzels, verhaal en visuals",
  },
];

const tools = [
  {
    title: "Wheel of Fortune",
    desc: "Een draaiend rad dat willekeurig een naam, vraag of opdracht kiest.",
    href: "/nl/games-tools/tools/wheel-of-fortune",
    img: "/images/spatial-entree.webp",
    alt: "Wheel of Fortune — een draaiend rad om willekeurig een naam of vraag te kiezen",
  },
  {
    title: "Bingo",
    desc: "Een speelse bingokaart die uw meeting of kick-off in een spel verandert.",
    href: "/nl/games-tools/tools/bingo",
    img: "/images/events-spatial.webp",
    alt: "Bingo — een speelse bingokaart voor tijdens uw meeting of kick-off",
  },
  {
    title: "Inspiration Cards",
    desc: "Kaarten met prikkelende vragen en stellingen om het gesprek op gang te brengen.",
    href: "/nl/games-tools/tools/inspiration-cards",
    img: "/images/inspiratie-escape.webp",
    alt: "Inspiration Cards — kaarten met prikkelende vragen en stellingen",
  },
  {
    title: "Storytelling",
    desc: "Een tool om samen een verhaal op te bouwen — verrassend en verbindend.",
    href: "/nl/games-tools/tools/storytelling",
    img: "/images/format-1.webp",
    alt: "Storytelling — een tool om samen een verhaal op te bouwen",
  },
];

const faq = [
  { q: "Wat is het verschil tussen de games en de tools?", a: "De games zijn complete ervaringen die wij begeleiden: een escape room, een cybersecuritygame of maatwerk, met een verhaallijn en een duidelijk begin en einde. De tools zijn kleine hulpmiddelen die u zelf gratis inzet tijdens een meeting — een rad, een bingokaart of een set inspiratiekaarten — om de betrokkenheid te verhogen." },
  { q: "Zijn de tools gratis te gebruiken?", a: "Ja. Alle tools op deze pagina zijn gratis en direct te gebruiken. U opent de tool in uw browser en deelt uw scherm tijdens de meeting — verder is er niets nodig." },
  { q: "Hoe lang duren de games?", a: "Dat verschilt per game. De korte games duren 20 tot 30 minuten en passen binnen een meeting of feestje. De Online Escape Room duurt ongeveer 60 minuten, met daarnaast een uitgebreidere XL-versie. Bij een maatwerk game bepaalt u samen met ons de duur." },
  { q: "Voor welke groepsgrootte zijn de games geschikt?", a: "De games werken voor kleine teams tot grote groepen; deelnemers spelen meestal in subgroepjes die parallel aan de slag gaan. Vertelt u ons uw groepsgrootte, dan adviseren wij de best passende opzet." },
  { q: "Op welk platform draaien de games?", a: "De games draaien online in de browser en zijn te combineren met de videotool die u al gebruikt, zoals Zoom, Teams of SpatialChat. Deelnemers hoeven niets te installeren en openen simpelweg een link." },
  { q: "Kunnen we een game op maat laten maken?", a: "Ja. Met de maatwerk game bouwen we eigen puzzels, een eigen verhaallijn en eigen visuals, helemaal afgestemd op uw thema, uw merk en uw groep — bijvoorbeeld voor onboarding, een jubileum of een awarenesscampagne." },
  { q: "Hebben deelnemers speciale software nodig?", a: "Nee. Zowel de games als de tools draaien in de browser. Voor de tools deelt u uw scherm; voor de games ontvangen deelnemers een link. Geen installatie, geen accounts, geen gedoe." },
  { q: "Zijn de games ook geschikt voor teambuilding op afstand?", a: "Zeker. De games zijn ontworpen om mensen te laten samenwerken, overleggen en samen iets te bereiken — juist waardevol voor hybride en volledig remote teams die elkaar weinig zien." },
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

export default function GamesToolsPage() {
  return (
    <div className="bg-white">
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px] overflow-hidden">
          <video
            poster="/images/games-hero-v5.jpg"
            aria-label="Games &amp; Tools van MeetingMasters — een interactief online spel met deelnemers in beeld"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center center" }}
          >
            <source src="/videos/games-hero-v5.webm" type="video/webm" />
            <source src="/videos/games-hero-v5.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[600px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>Games &amp; Tools</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  Samen spelen. Iets leren.
                </h1>
                <p className="text-white text-lg font-medium leading-relaxed mb-8" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.9), 0 2px 12px rgba(0,0,0,0.6)" }}>
                  Speelklare online formats en interactieve ervaringen op maat. Van escape
                  rooms tot onboardinggames — gemaakt voor groepen, ontworpen voor betrokkenheid.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/nl/contact" className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                    Check beschikbaarheid →
                  </Link>
                  <Link href="#games" className="text-white/85 text-sm font-semibold px-5 py-3 border border-white/30 rounded hover:border-white/60 transition-colors">
                    Meer weten
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GAMES + TOOLS (sub-sectie onder de hero) ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="group">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Games</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Gamification als inzet voor meer verrassing en leuker leren.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed mb-5">
                Samen spelen brengt groepen dichter bij elkaar en laat de stof beter beklijven.
                Van een spannende escape room tot een game volledig op maat — speelklaar of
                helemaal afgestemd op uw thema.
              </p>
              <Link href="#games" className="text-[#28A8AA] text-sm font-bold hover:underline">
                Bekijk de games →
              </Link>
            </div>
            <div className="group lg:border-l lg:border-[#EBEBEB] lg:pl-16">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Tools</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Slimme tools die betrokkenheid en participatie verhogen.
              </h2>
              <span className="block h-[3px] w-10 bg-[#EEBE3D] rounded-full mb-5 transition-all duration-300 ease-out group-hover:w-20" />
              <p className="text-[#545454] leading-relaxed mb-5">
                Kleine hulpmiddelen die uw meeting levendiger maken en iedereen aan het woord
                laten. Gratis en direct te gebruiken: openen in de browser en uw scherm delen —
                verder niets nodig.
              </p>
              <Link href="#tools" className="text-[#28A8AA] text-sm font-bold hover:underline">
                Bekijk de tools →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── GAMES ── */}
      <section id="games" className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Games</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Spellen die groepen samenbrengen.
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Online games waarin uw team samenwerkt, overlegt en samen iets voor elkaar krijgt —
              speelklaar of helemaal afgestemd op uw thema.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {games.map((g) => (
              <div key={g.title} className="bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB] flex flex-col">
                <div className="relative h-44">
                  <Image src={g.img} alt={g.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-1.5 leading-snug">{g.title}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed mb-3">{g.desc}</p>
                  <p className="text-xs font-semibold text-[#2D2D2D] mb-5">{g.detail}</p>
                  <Link href="/nl/contact" className="mt-auto text-[#28A8AA] text-sm font-bold hover:underline self-start">
                    Check beschikbaarheid →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── R@VENHACK UITGELICHT ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded overflow-hidden shadow-md">
              <Image
                src="/images/format-2.webp"
                alt="R@venHack — teams stoppen samen een cyberaanval met datalekken en phishing in een online cybersecuritygame"
                fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">R@venHack · Cybersecurity</p>
              <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Stop samen de cyberaanval.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-4">
                Een digitale crisis breekt uit: datalekken, phishing en systemen die om beurten
                uitvallen. Uw team moet samen het hoofd koel houden en de aanval een halt
                toeroepen. Awareness ontstaat niet door erover te horen, maar door het te dóen.
              </p>
              <p className="text-[#545454] leading-relaxed mb-4">
                Zo combineert R@venHack teambuilding met echte kennisoverdracht over veilig
                digitaal gedrag. Er is een gewone versie en een uitgebreidere XL-versie, zodat het
                past bij uw groep en de tijd die u heeft.
              </p>
              <Link href="/nl/games-tools/ravenhack" className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors">
                Bekijk R@venHack →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section id="tools" className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="mb-10 max-w-[760px]">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">Tools</p>
            <h2 className="text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Gratis tools voor levendige meetings.
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Kleine hulpmiddelen die uw meeting een stuk levendiger maken. Ze zijn gratis en
              direct te gebruiken: u opent de tool in uw browser en deelt uw scherm — verder
              hoeft u niets te installeren.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group bg-white rounded overflow-hidden shadow-sm border border-[#EBEBEB] flex flex-col hover:border-[#EEBE3D]/50 hover:shadow-md transition-all"
              >
                <div className="relative h-44">
                  <Image src={t.img} alt={t.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#2D2D2D] text-base mb-1.5 leading-snug group-hover:text-[#EEBE3D] transition-colors">{t.title}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed mb-5">{t.desc}</p>
                  <span className="mt-auto text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide self-start">
                    Open tool →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen over de games &amp; tools
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faq.slice(0, 4).map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <details className="group max-w-4xl mx-auto mt-10">
            <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
              <span className="group-open:hidden">Meer antwoorden?</span>
              <span className="hidden group-open:inline">Minder antwoorden</span>
              <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#E0E0E0]">
              {faq.slice(4).map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock />
    </div>
  );
}
