import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wheel of Fortune | MeetingMasters Tools",
  description:
    "Een digitaal geluksrad voor in je online meeting. Voer namen, onderwerpen of vragen in en laat het rad willekeurig kiezen. Spanning en verrassing in elke sessie.",
};

const useCases = [
  { icon: "🎤", title: "Wie spreekt als volgende?", desc: "Geen ongemakkelijke stiltes of altijd dezelfde mensen. Het rad kiest wie het woord neemt." },
  { icon: "📋", title: "Welk onderwerp eerst?", desc: "Een agenda met meerdere punten? Het rad bepaalt de volgorde — verrassend en eerlijk." },
  { icon: "🏆", title: "Prijsuitreiking", desc: "Verloot een prijs onder alle deelnemers met één draai. Zichtbaar voor iedereen in het scherm." },
  { icon: "💬", title: "Gespreksstart", desc: "Laat het rad een vraag of stelling kiezen waarmee een gesprek opent. Geen voorbereiding nodig." },
];

export default function WheelOfFortunePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/games-tools" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Games & Tools
          </Link>
          <div className="flex items-center gap-5 mb-6">
            <span className="text-5xl">🎡</span>
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase">Tool</p>
          </div>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "18ch" }}
          >
            Wheel of Fortune
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[500px] mb-8">
            Een digitaal geluksrad dat willekeurig kiest. Voer namen, onderwerpen of vragen in —
            en laat het rad de beslissing nemen. Spanning, verrassing en gelijke kansen in één klik.
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
                Eén klik. Één winnaar. Iedereen kijkt mee.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                De Wheel of Fortune is een tool die je inzet op het moment dat je een willekeurige
                keuze wil maken — en die keuze zichtbaar en eerlijk wil laten zijn.
              </p>
              <p className="text-[#545454] leading-relaxed mb-8">
                Je vult de namen, onderwerpen of opties in. Het rad draait — zichtbaar voor alle
                deelnemers op hun scherm. Het moment zelf creëert spanning, aandacht en plezier.
                Zelfs in de meest zakelijke sessie.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Grote plenaire sessies", "Kick-offs", "Prijsuitreikingen", "Brainstorms", "All-hands"].map((t) => (
                  <span key={t} className="text-xs text-[#545454] bg-[#F5F5F2] border border-[#EBEBEB] rounded px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Visuele placeholder voor het rad */}
            <div className="bg-[#FFFDF5] border border-[#EEE8D0] rounded-lg flex items-center justify-center" style={{ minHeight: 280 }}>
              <div className="text-center">
                <span className="text-8xl block mb-4">🎡</span>
                <p className="text-[#AAAAAA] text-sm">Live demonstratie tijdens je event</p>
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
              Wanneer zet je het rad in?
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

      {/* ── OTHER TOOLS ──────────────────────────────────────────────── */}
      <section className="bg-white py-12 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <p className="text-[#BBBBBB] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Andere tools</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "🃏 Inspiration Cards", href: "/nl/games-tools/tools/inspiration-cards" },
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

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-14">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-bold text-[#2D2D2D] text-lg">Wheel of Fortune inzetten bij je event?</p>
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
