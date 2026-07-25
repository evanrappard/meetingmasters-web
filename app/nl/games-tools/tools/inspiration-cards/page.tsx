import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inspiration Cards | MeetingMasters Tools",
  description:
    "Digitale kaarten met vragen, stellingen of provocaties voor in je online meeting. Als icebreaker, reflectiemoment of gespreksstart — direct inzetbaar.",
};

const useCases = [
  { icon: "🌅", title: "Icebreaker", desc: "Open je sessie met een onverwachte vraag. Mensen komen uit hun schil voordat de vergadering begint." },
  { icon: "🪞", title: "Reflectiemoment", desc: "Pauzeer halverwege en laat deelnemers nadenken over wat ze zojuist leerden of ervoeren." },
  { icon: "💡", title: "Gespreksstart", desc: "Een stelling of prikkelende vraag als startpunt voor een groepsgesprek. Geen voorbereiding nodig." },
  { icon: "🎯", title: "Strategiesessie", desc: "Gebruik provocerende kaarten om aannames te doorbreken en anders te kijken naar een vraagstuk." },
];

export default function InspirationCardsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/games-tools" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Games & Tools
          </Link>
          <div className="flex items-center gap-5 mb-6">
            <span className="text-5xl">🃏</span>
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase">Tool</p>
          </div>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "18ch" }}
          >
            Inspiration Cards
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[500px] mb-8">
            Digitale kaarten met vragen, stellingen of provocaties. Eén per persoon of één voor de
            groep — als icebreaker, reflectiemoment of startpunt voor een gesprek dat ergens heen gaat.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/nl/contact"
              className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-8 py-3.5 rounded hover:bg-[#F5C93D] transition-colors"
            >
              Gebruik deze tool
            </Link>
            <Link
              href="/nl/contact"
              className="inline-block text-white text-sm font-semibold px-6 py-3.5 border border-white/25 rounded hover:border-white/60 transition-colors"
            >
              Vraag meer informatie
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Hoe het werkt</p>
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Kaarten die gesprekken openen die anders niet ontstaan.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                Inspiration Cards zijn digitale kaarten met een vraag, stelling of provocatie.
                Je kiest een set die past bij je thema — wij leveren de kaarten in de omgeving
                van je meeting.
              </p>
              <p className="text-[#545454] leading-relaxed mb-8">
                Elke deelnemer trekt een kaart, of de facilitator kiest er één voor de groep.
                Wat er dan ontstaat, verrast bijna altijd. Kaarten geven structuur aan vrije
                gesprekken zonder ze te regisseren.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Teamdagen", "Strategiesessies", "Onboarding", "Leiderschapsprogramma's", "All-hands"].map((t) => (
                  <span key={t} className="text-xs text-[#545454] bg-[#F5F5F2] border border-[#EBEBEB] rounded px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Visuele kaarten-illustratie */}
            <div className="bg-[#FFFDF5] border border-[#EEE8D0] rounded-lg p-8" style={{ minHeight: 280 }}>
              <p className="text-[#AAAAAA] text-xs font-bold tracking-widest uppercase mb-6">Voorbeeldkaarten</p>
              <div className="space-y-3">
                {[
                  "Wat zou je anders doen als je geen fouten kon maken?",
                  "Waar ben je het meest trots op van dit jaar?",
                  "Welke aanname houdt ons het meest tegen?",
                ].map((q, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E8E0BC] rounded-lg px-4 py-3 text-sm text-[#2D2D2D] font-medium leading-snug shadow-sm"
                  >
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Toepassingen</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Op welk moment werken ze het best?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {useCases.map((u) => (
              <div key={u.title} className="bg-white border border-[#E8E8E8] rounded-lg p-6 flex gap-4">
                <span className="text-2xl shrink-0">{u.icon}</span>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] text-sm mb-1">{u.title}</h3>
                  <p className="text-xs text-[#777777] leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <p className="text-[#BBBBBB] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Andere tools</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "🎡 Wheel of Fortune", href: "/nl/games-tools/tools/wheel-of-fortune" },
              { label: "🎰 Bingo", href: "/nl/games-tools/tools/bingo" },
              { label: "📖 Storytelling", href: "/nl/games-tools/tools/storytelling" },
            ].map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className="text-sm font-medium text-[#545454] border border-[#E8E8E8] rounded px-4 py-2 hover:border-[#28A8AA] hover:text-[#28A8AA] transition-colors"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEBE3D] py-14">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-bold text-[#2D2D2D] text-lg">Inspiration Cards inzetten bij je event?</p>
          <Link
            href="/nl/contact"
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-8 py-3.5 rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Neem contact op →
          </Link>
        </div>
      </section>
    </>
  );
}
