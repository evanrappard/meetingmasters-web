import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bingo | MeetingMasters Tools",
  description:
    "Interactieve bingo voor in uw online meeting of event. Deelnemers vullen hun kaart in terwijl de meeting vordert. Van passief kijken naar actief meedoen.",
};

const useCases = [
  { icon: "🎓", title: "Trainingen", desc: "Deelnemers moeten letten op begrippen, voorbeelden of gedrag. Bingo maakt passief luisteren actief." },
  { icon: "📣", title: "All-hands meetings", desc: "Bij lange plenaire sessies houdt bingo de aandacht scherp. Iedereen blijft erbij." },
  { icon: "🎤", title: "Congressen", desc: "Een congresdag met bingo geeft bezoekers een rode draad door alle sessies heen." },
  { icon: "🤝", title: "Onboarding", desc: "Nieuwe medewerkers zoeken termen, namen en situaties in hun eerste weken. Zo verbindt u onboarding met beleving." },
];

export default function BingoPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/games-tools" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Games & Tools
          </Link>
          <div className="flex items-center gap-5 mb-6">
            <span className="text-5xl">🎰</span>
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase">Tool</p>
          </div>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "18ch" }}
          >
            Bingo
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[500px] mb-8">
            Een interactieve bingokaart die deelnemers invullen terwijl de meeting vordert. Eigen vakjes
            met begrippen, gedragingen of momenten die u verwacht. Van passief kijken naar actief meedoen.
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
                Luisteren omdat u iets wilt vinden.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                U bepaalt de inhoud van de bingokaart: begrippen uit een training, namen van
                collega's, typische uitspraken of gedragingen. Elke deelnemer krijgt een kaart
                en vult die in zodra een vakje voorbijkomt.
              </p>
              <p className="text-[#545454] leading-relaxed mb-8">
                Wie vijf op een rij heeft, roept bingo. In het chatvenster, via de reacties,
                of gewoon hardop. Het effect? Deelnemers letten op — niet ondanks de meeting,
                maar dankzij de meeting.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Trainingen", "Congressen", "All-hands", "Onboarding", "Webinars"].map((t) => (
                  <span key={t} className="text-xs text-[#545454] bg-[#F5F5F2] border border-[#EBEBEB] rounded px-3 py-1.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Visuele bingokaart */}
            <div className="bg-[#FFFDF5] border border-[#EEE8D0] rounded-lg p-8" style={{ minHeight: 280 }}>
              <p className="text-[#AAAAAA] text-xs font-bold tracking-widest uppercase mb-4">Voorbeeldkaart</p>
              <div className="grid grid-cols-5 gap-1.5">
                {[
                  "Strategie", "Draagvlak", "Iteratief", "Synergy", "MVP",
                  "Stakeholder", "Agile", "Roadmap", "🌟 VRIJ", "Borging",
                  "KPI", "Cultuur", "Ownership", "Impact", "Pivot",
                  "Data-driven", "Innovatie", "Alignment", "Sessie", "Output",
                  "Feedback", "Proces", "Visie", "Waarden", "Resultaat",
                ].map((term, i) => (
                  <div
                    key={i}
                    className={`text-[9px] font-bold text-center p-1.5 rounded border leading-tight ${
                      term === "🌟 VRIJ"
                        ? "bg-[#EEBE3D] border-[#EEBE3D] text-[#2D2D2D]"
                        : "bg-white border-[#E8E0BC] text-[#545454]"
                    }`}
                  >
                    {term}
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
              Wanneer werkt bingo het best?
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
              { label: "🃏 Inspiration Cards", href: "/nl/games-tools/tools/inspiration-cards" },
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
          <p className="font-bold text-[#2D2D2D] text-lg">Bingo inzetten bij uw event?</p>
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
