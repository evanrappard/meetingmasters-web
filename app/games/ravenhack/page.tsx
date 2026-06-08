import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "R@venHack: Cybersecurity Awareness | MeetingMasters",
  description:
    "Teams racen om een cyberaanval te stoppen. R@venHack is een teamgerichte security awareness ervaring voor 10 tot 80 deelnemers — boeiend, effectief en niet saai.",
};

const forWho = [
  { title: "Security awareness traject", desc: "Vervang de verplichte e-learning door iets dat mensen écht raakt en onthouden." },
  { title: "IT-teams en beheerders", desc: "Bestaande kennis in een nieuwe context plaatsen. Verdieping zonder droogheid." },
  { title: "Compliance en beleid", desc: "Maak abstracte regelgeving concreet door het te spelen, niet te lezen." },
  { title: "Maatwerk dreigingsscenario", desc: "We passen het scenario aan op de specifieke risico's van uw organisatie." },
];

const howItWorks = [
  { n: "01", title: "Briefing", body: "Teams krijgen te horen dat er een cyberaanval gaande is. De klok tikt. Elk team pakt een ander deel van het probleem op." },
  { n: "02", title: "Onderzoek en actie", body: "Deelnemers analyseren digitale aanwijzingen, nemen beslissingen en communiceren — precies zoals in een echte situatie." },
  { n: "03", title: "Crisis beheersen", body: "Teams moeten samenwerken om de aanval te stoppen voordat het te laat is. Spanning stijgt, keuzes tellen mee." },
  { n: "04", title: "Debrief en lessen", body: "Na het spel volgt een begeleide nabespreking. Wat ging goed? Wat zou u nu anders doen? Leren beklijft." },
];

export default function RavenHackPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] relative overflow-hidden" style={{ minHeight: "clamp(380px, 44vw, 520px)" }}>
        <Image
          src="/images/inspiratie-escape.webp"
          alt="R@venHack cybersecurity escape room — deelnemers stoppen een digitale aanval"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 pb-12 md:pb-16 w-full">
            <div className="max-w-[620px]">
              <Link href="/games" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-6 inline-block">
                ← Games & Tools
              </Link>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Cybersecurity awareness</p>
              <h1
                className="font-bold text-white leading-[1.05] text-balance mb-5"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                R@venHack — cybersecurity die bijblijft.
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-[500px]">
                Teams racen om een cyberaanval te stoppen. Deelnemers leren over digitale veiligheid
                op de meest effectieve manier die er is: door het te doen. Geen saaie training,
                maar een ervaring die beklijft.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-8 py-3.5 rounded hover:bg-[#F5C93D] transition-colors"
                >
                  Plan een demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-block text-white text-sm font-semibold px-6 py-3.5 border border-white/25 rounded hover:border-white/60 transition-colors"
                >
                  Vraag een offerte aan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECS ────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-8">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {[
              { label: "Deelnemers", value: "10 tot 80" },
              { label: "Duur", value: "60 tot 90 minuten" },
              { label: "Teamgrootte", value: "3 tot 6 personen" },
              { label: "Taal", value: "Nederlands" },
              { label: "Maatwerk", value: "Op aanvraag" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[#2D2D2D]/50 text-[10px] font-bold tracking-widest uppercase">{s.label}</p>
                <p className="font-bold text-[#2D2D2D] text-sm mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY RAVENHACK ────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Waarom R@venHack</p>
              <h2
                className="font-bold text-[#2D2D2D] leading-[1.1] text-balance mb-6"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Voorbij de phishing-test.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                De meeste security awareness programma's bestaan uit e-learnings die mensen doorklikken
                en verplichte tests die niemand serieus neemt. R@venHack werkt anders.
              </p>
              <p className="text-[#545454] leading-relaxed mb-5">
                Door deelnemers zelf in de rol van verdediger te plaatsen, ervaren ze de druk, de
                keuzes en de gevolgen van een cyberaanval. Dat begrip blijft hangen — lang nadat
                het spel voorbij is.
              </p>
              <p className="text-[#545454] leading-relaxed mb-8">
                Het scenario is aanpasbaar aan de specifieke dreigingen en situaties van uw organisatie.
                Van phishing tot ransomware, van intern misbruik tot datalek.
              </p>
            </div>

            <div className="relative rounded-lg overflow-hidden" style={{ minHeight: "clamp(260px, 28vw, 380px)" }}>
              <Image
                src="/images/inspiratie-escape.webp"
                alt="R@venHack in actie — team werkt samen om een cyberdreiging te neutraliseren"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12 md:mb-16">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Hoe het werkt</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Van rustige middag tot cybercrisis — in vijf minuten.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {howItWorks.map((s) => (
              <div key={s.n}>
                <p className="text-[#EEBE3D] font-bold tabular-nums mb-4" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                  {s.n}
                </p>
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{s.title}</h3>
                <p className="text-sm text-[#777777] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR WHO ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Geschikt voor</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Wanneer kiest u voor R@venHack?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {forWho.map((f) => (
              <div key={f.title} className="border border-[#E8E8E8] rounded-lg p-7 hover:border-[#EEBE3D] transition-colors">
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{f.title}</h3>
                <p className="text-sm text-[#777777] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2
              className="font-bold text-[#2D2D2D] leading-tight text-balance mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              R@venHack live ervaren?
            </h2>
            <p className="text-[#2D2D2D]/65 text-base max-w-[440px]">
              We demonstreren het scenario live, of bespreken een maatwerk-versie voor uw organisatie.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-8 py-4 rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Plan een demo →
          </Link>
        </div>
      </section>
    </>
  );
}
