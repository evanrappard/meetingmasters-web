import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Storytelling Tool | MeetingMasters",
  description:
    "Een laagdrempelige tool die teams helpt verhalen te delen en elkaar écht te leren kennen. Begeleide storytelling voor online meetings en live bijeenkomsten.",
};

const steps = [
  { n: "01", title: "Eén vraag", body: "Een deelnemer klikt op de link en ontvangt één vraag als vertrekpunt voor een persoonlijk verhaal." },
  { n: "02", title: "Vertel — zonder onderbreking", body: "De spreker deelt zijn of haar verhaal. De anderen luisteren. Niet reageren, niet onderbreken — alleen luisteren." },
  { n: "03", title: "Afronding", body: "De spreker sluit af: 'Dit was mijn verhaal.' Dat ritueel markeert het einde en geeft ruimte aan de anderen." },
  { n: "04", title: "Resonantie", body: "Andere deelnemers zeggen kort wat het verhaal bij hen oproept — niet hun eigen verhaal, niet een mening. Wat raakte?" },
];

const useCases = [
  { icon: "🌱", title: "Teamontwikkeling", desc: "Teams die beter willen samenwerken, beginnen met elkaar begrijpen. Storytelling versnelt dat proces." },
  { icon: "🔄", title: "Cultuurverandering", desc: "Abstracte waarden worden concreet als mensen verhalen delen over wanneer die waarden echt speelden." },
  { icon: "🤝", title: "Vertrouwen opbouwen", desc: "Verhalen creëren verbinding. Na een storytelling-ronde zijn deelnemers meer aanwezig — voor zichzelf en voor elkaar." },
  { icon: "🎓", title: "Leerevenementen", desc: "Sluit een training af met storytelling: wat heb je geleerd? Wanneer heb je dit al eens meegemaakt? Kennis die landt." },
];

export default function StorytellingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/games-tools" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Games & Tools
          </Link>
          <div className="flex items-center gap-5 mb-6">
            <span className="text-5xl">📖</span>
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase">Tool</p>
          </div>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "18ch" }}
          >
            Storytelling Tool
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[520px] mb-8">
            Een laagdrempelige tool die teams helpt verhalen te delen en elkaar écht te begrijpen.
            Begeleide storytelling — online via screenshare of fysiek via mobiel. Geen voorbereiding,
            geen grote stap. Gewoon één vraag en de ruimte om te antwoorden.
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

      {/* ── WHAT IT IS ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Wat het is</p>
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Luisteren zonder te onderbreken. Verbinding als resultaat.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                Storytelling helpt teams ervaringen te delen, betekenis te geven en elkaar beter te
                begrijpen. Niet als therapie, niet als teambuilding-cliché — maar als een eenvoudig
                ritueel dat bijna altijd meer doet dan verwacht.
              </p>
              <p className="text-[#545454] leading-relaxed mb-5">
                De tool begeleidt deelnemers stap voor stap door het proces. Wie aan de beurt is,
                klikt op de link en krijgt één vraag. De rest luistert — niet om te reageren, maar
                om te ontvangen. Dat onderscheid verandert de dynamiek in een groep.
              </p>
              <p className="text-[#545454] leading-relaxed">
                Geschikt voor online meetings via screenshare en voor fysieke bijeenkomsten via
                mobiele apparaten.
              </p>
            </div>

            {/* Prompt-voorbeeld */}
            <div className="bg-[#FFFDF5] border border-[#EEE8D0] rounded-lg p-8 mt-4 lg:mt-12">
              <p className="text-[#AAAAAA] text-xs font-bold tracking-widest uppercase mb-5">Voorbeeldvragen</p>
              <div className="space-y-4">
                {[
                  "Vertel over een moment waarop je het gevoel had dat je werk er écht toe deed.",
                  "Wat heb je geleerd van iemand met wie je het moeilijk had?",
                  "Wanneer heeft samenwerken je verrast?",
                ].map((q, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-[#EEBE3D] font-bold shrink-0 mt-0.5">→</span>
                    <p className="text-sm text-[#2D2D2D] leading-snug italic">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Hoe het werkt</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Vier stappen. Eén ritueel.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {steps.map((s) => (
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

      {/* ── USE CASES ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Toepassingen</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Wanneer zet je storytelling in?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {useCases.map((u) => (
              <div key={u.title} className="border border-[#E8E8E8] rounded-lg p-6 flex gap-4 hover:border-[#EEBE3D] transition-colors">
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
              { label: "🎰 Bingo", href: "/nl/games-tools/tools/bingo" },
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
          <p className="font-bold text-[#2D2D2D] text-lg">Storytelling inzetten bij je event?</p>
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
