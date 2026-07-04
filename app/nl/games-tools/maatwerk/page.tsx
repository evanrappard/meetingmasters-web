import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maatwerkgames | MeetingMasters",
  description:
    "Van een mini-game van 20 minuten tot een volledig gameconcept van anderhalf uur. Wij bouwen interactieve ervaringen op maat voor uw event, uw mensen en uw boodschap.",
};

const formats = [
  {
    icon: "⚡",
    duur: "15 – 30 min",
    title: "Mini-game",
    desc: "Een compact spelelement binnen een groter programma. Zet het in na een lange plenaire sessie, als energizer of als overgang tussen twee onderdelen. Veel effect, weinig tijd.",
    examples: ["Kennisquiz op maat", "Snelle teamopdracht", "Interactief stemspel", "Verrassingselement"],
  },
  {
    icon: "🎮",
    duur: "45 – 90 min",
    title: "Volledige game",
    desc: "Een zelfstandig gameconcept met een eigen verhaal, opbouw en ontknoping. Het middelpunt van uw event of een sessie op zichzelf. Uw merk, uw thema, uw boodschap.",
    examples: ["Branded escape room", "Simulatiespel", "Rollenspel met scenario", "Competitie met live scorebord"],
  },
  {
    icon: "🎓",
    duur: "Op maat",
    title: "Leer- en onboardinggame",
    desc: "Games als drager van echte leerdoelen. Nieuwe medewerkers die de organisatie ontdekken. Medewerkers die beleid gaan begrijpen. Kennis die blijft hangen.",
    examples: ["Onboarding-adventure", "Compliancetraining", "Cultuuroverdracht", "Veiligheidsbewustzijn"],
  },
];

const process = [
  { n: "01", title: "Briefing", body: "U vertelt over uw doel, uw groep en uw context. Wij stellen de vragen die u zelf nog niet gesteld had." },
  { n: "02", title: "Concept", body: "We presenteren een gameconcept op maat: verhaallijn, format, mechaniek en hoe het in uw programma past." },
  { n: "03", title: "Bouw & test", body: "We bouwen het spel, testen het met een kleine groep en schaven bij tot het klopt." },
  { n: "04", title: "Live productie", body: "Op de dag zelf begeleiden we de game volledig. Geen losse eindjes." },
];

export default function MaatwerkPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/games-tools" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Games & Tools
          </Link>
          <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Maatwerkgames</p>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", maxWidth: "18ch" }}
          >
            Uw verhaal. Uw regels. Uw game.
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-[520px]">
            Van een energizer van 20 minuten tot een volledig gameconcept van anderhalf uur. Wij
            bouwen interactieve ervaringen die passen bij uw event, uw mensen en uw boodschap.
          </p>
        </div>
      </section>

      {/* ── FORMATS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12 md:mb-16">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Formats</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Welke schaal past bij u?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((f) => (
              <div key={f.title} className="border border-[#E8E8E8] rounded-lg p-7 hover:border-[#EEBE3D] transition-colors">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <span className="text-[#EEBE3D] text-[10px] font-bold tracking-widest uppercase block mb-2">{f.duur}</span>
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-3">{f.title}</h3>
                <p className="text-sm text-[#777777] leading-relaxed mb-5">{f.desc}</p>
                <ul className="space-y-1.5">
                  {f.examples.map((e) => (
                    <li key={e} className="flex items-center gap-2 text-xs text-[#545454]">
                      <span className="w-1 h-1 rounded-full bg-[#EEBE3D] shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Toepassingen</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Wanneer kiest u voor een maatwerkgame?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Onboarding", desc: "Nieuwe medewerkers leren de organisatie kennen via een game — cultuur, collega's en werkwijzen in één sessie." },
              { title: "Trainingen", desc: "Kennis overdragen via een spel. Meer rendement, meer retentie, minder weerstand." },
              { title: "Leerevenementen", desc: "Congressen of leerdagen met een interactief gameformat dat deelnemers actief houdt." },
              { title: "Verandermanagement", desc: "Een nieuw beleid of een strategische koers verankeren via beleving, niet via presentaties." },
              { title: "Teambuilding", desc: "Samenwerken onder druk, keuzes maken en van elkaar leren — in een veilige spelomgeving." },
              { title: "Kick-off", desc: "Het jaar of project openen met iets dat mensen bijblijft. Energie, richting en verbinding in één." },
            ].map((u) => (
              <div key={u.title} className="bg-white border border-[#E8E8E8] rounded-lg p-6">
                <h3 className="font-bold text-[#2D2D2D] text-sm mb-2">{u.title}</h3>
                <p className="text-xs text-[#777777] leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Hoe het werkt</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Van idee tot live game.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {process.map((s) => (
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

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2
              className="font-bold text-[#2D2D2D] leading-tight text-balance mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Een idee in gedachten?
            </h2>
            <p className="text-[#2D2D2D]/65 text-base max-w-[440px]">
              Vertel ons over uw event en uw doel. Wij komen met een concept.
            </p>
          </div>
          <Link
            href="/nl/contact"
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-8 py-4 rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Plan een gesprek →
          </Link>
        </div>
      </section>
    </>
  );
}
