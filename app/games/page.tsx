import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Games & Tools | MeetingMasters",
  description:
    "Spelelementen vergroten betrokkenheid, participatie en leervermogen in elke bijeenkomst. Games zijn volledige concepten met een verhaal. Tools zijn ingrediënten die elk moment actiever maken.",
};

const tools = [
  {
    icon: "🎡",
    title: "Wheel of Fortune",
    desc: "Een digitaal geluksrad dat willekeurig kiest uit namen, onderwerpen of vragen. Spanning en verrassing in één klik.",
    href: "/games/tools/wheel-of-fortune",
    use: "Plenaire sessies, kick-offs, prijsuitreikingen",
  },
  {
    icon: "🃏",
    title: "Inspiration Cards",
    desc: "Digitale kaarten met vragen, stellingen of provocaties. Als icebreaker, reflectiemoment of startpunt voor een gesprek.",
    href: "/games/tools/inspiration-cards",
    use: "Teamdagen, strategiesessies, onboarding",
  },
  {
    icon: "🎰",
    title: "Bingo",
    desc: "Een interactieve bingokaart die deelnemers invullen terwijl de meeting vordert. Van passief kijken naar actief meedoen.",
    href: "/games/tools/bingo",
    use: "Trainingen, all-hands, congressen",
  },
  {
    icon: "📖",
    title: "Storytelling",
    desc: "Een begeleide tool die teams helpt verhalen te delen. Vier stappen, één ritueel — online of fysiek.",
    href: "/games/tools/storytelling",
    use: "Teamontwikkeling, cultuurverandering, leerevenementen",
  },
];

export default function GamesPage() {
  return (
    <>
      {/* ── HERO: waarom spelelementen werken ───────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[640px]">
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Games & Tools</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Spelen maakt bijeenkomsten beter.
            </h1>
            <p className="text-white/65 text-base leading-relaxed max-w-[520px]">
              Deelnemers die meespelen zijn aanweziger, onthouden meer en werken beter samen.
              Spelelementen zijn geen vermaak — ze zijn een bewezen manier om betrokkenheid,
              participatie en leervermogen te verhogen in elk type bijeenkomst.
            </p>
          </div>
        </div>
      </section>

      {/* ── GAMES VS TOOLS: uitleg direct onder de hero ─────────────── */}
      <section className="bg-white border-b border-[#E8E8E8]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x divide-[#EBEBEB]">

            {/* Games */}
            <div className="pr-0 md:pr-12 pb-10 md:pb-0">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🎮</span>
                <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase">Games</p>
              </div>
              <h2 className="font-bold text-[#2D2D2D] text-lg mb-3 leading-snug">
                Een storyline met een begin en een eind.
              </h2>
              <p className="text-[#545454] text-sm leading-relaxed mb-5">
                Een game is een volledig concept: er is een verhaal, er zijn puzzels, er is spanning
                en er is een ontknoping. Deelnemers worden meegenomen in een ervaring die ze samen
                beleven — met begeleiding van MeetingMasters.
              </p>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                Geschikt als centerpiece van een event, als teambuilding, of als interactief
                leer- of onboarding-format.
              </p>
              <a
                href="#games"
                className="inline-block mt-6 text-sm font-bold text-[#2D2D2D] border-b-2 border-[#EEBE3D] pb-0.5 hover:border-[#2D2D2D] transition-colors"
              >
                Bekijk de games ↓
              </a>
            </div>

            {/* Tools */}
            <div className="pl-0 md:pl-12 pt-10 md:pt-0 border-t md:border-t-0 border-[#EBEBEB]">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">🔧</span>
                <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase">Tools</p>
              </div>
              <h2 className="font-bold text-[#2D2D2D] text-lg mb-3 leading-snug">
                Ingrediënten die interactie versterken.
              </h2>
              <p className="text-[#545454] text-sm leading-relaxed mb-5">
                Een tool heeft geen begin en eind — het is een instrument dat u inzet op het moment
                dat het past. Klein, direct en los van het format. Versterkt elk event zonder het
                te overnemen.
              </p>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                Geschikt als onderdeel van events, virtual offices of trainingen — naast of
                in plaats van een game.
              </p>
              <a
                href="#tools"
                className="inline-block mt-6 text-sm font-bold text-[#2D2D2D] border-b-2 border-[#28A8AA] pb-0.5 hover:border-[#2D2D2D] transition-colors"
              >
                Bekijk de tools ↓
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          GAMES
      ════════════════════════════════════════════════════════════════ */}
      <section id="games" className="bg-[#FFFDF5] border-b border-[#EEE8D0] py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">

          <div className="mb-12 md:mb-14">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase">Games</span>
              <div className="flex-1 h-px bg-[#EEE0A0]" />
            </div>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Kant-en-klaar of volledig op maat.
            </h2>
            <p className="text-[#777777] text-base mt-3 max-w-[520px]">
              Wij bieden één bestaand gameconcept dat direct inzetbaar is, en de mogelijkheid om
              een game volledig op maat te bouwen voor uw situatie.
            </p>
          </div>

          {/* R@venHack + Maatwerk naast elkaar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* R@venHack */}
            <div className="bg-white border border-[#E8E8E8] rounded-lg overflow-hidden flex flex-col hover:border-[#EEBE3D] transition-colors">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/inspiratie-escape.webp"
                  alt="R@venHack cybersecurity escape room — teams stoppen een digitale aanval"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold text-[#2D2D2D] bg-[#EEBE3D] rounded-full px-3 py-1">
                    Bestaand concept
                  </span>
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.18em] uppercase mb-2">Cybersecurity awareness</p>
                <h3 className="font-bold text-[#2D2D2D] text-xl mb-3">R@venHack</h3>
                <p className="text-sm text-[#777777] leading-relaxed flex-1 mb-5">
                  Teams racen om een cyberaanval te stoppen. Eigen verhaal, eigen spanning, eigen
                  ontknoping — maar kant-en-klaar inzetbaar. Deelnemers leren over digitale veiligheid
                  door het te doen, niet door het te lezen.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["10 – 80 deelnemers", "60 – 90 min", "Direct inzetbaar"].map((s) => (
                    <span key={s} className="text-xs text-[#545454] bg-[#F5F5F2] border border-[#EBEBEB] rounded px-3 py-1">
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href="/games/ravenhack"
                  className="self-start text-sm font-bold text-[#2D2D2D] border-b-2 border-[#EEBE3D] pb-0.5 hover:border-[#2D2D2D] transition-colors"
                >
                  Meer over R@venHack →
                </Link>
              </div>
            </div>

            {/* Maatwerk */}
            <div className="bg-[#2D2D2D] rounded-lg p-7 flex flex-col hover:bg-[#252525] transition-colors">
              <div className="mb-5">
                <span className="text-[10px] font-bold text-white/40 bg-white/10 rounded-full px-3 py-1">
                  Volledig op maat
                </span>
              </div>
              <h3 className="font-bold text-white text-xl mb-4">Maatwerkgame</h3>
              <p className="text-white/65 text-sm leading-relaxed flex-1 mb-6">
                Uw verhaal, uw thema, uw boodschap — in een gameconcept dat wij van scratch bouwen.
                Van een energizer van 20 minuten middenin een meeting tot een volledige game van
                anderhalf uur als centerpiece van uw event.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: "⚡", label: "Mini-game (15 – 30 min)", desc: "Als energizer of overgang in een groter programma" },
                  { icon: "🎮", label: "Volledige game (60 – 90 min)", desc: "Eigen verhaal, eigen puzzels, eigen ontknoping" },
                  { icon: "🎓", label: "Onboarding & training", desc: "Kennis, cultuur of gedrag spelenderwijs overbrengen" },
                ].map((u) => (
                  <div key={u.label} className="flex gap-3 items-start">
                    <span className="text-base shrink-0 mt-0.5">{u.icon}</span>
                    <div>
                      <p className="text-white text-sm font-semibold leading-snug">{u.label}</p>
                      <p className="text-white/45 text-xs mt-0.5">{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/games/maatwerk"
                className="self-start bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-6 py-3 rounded hover:bg-[#F5C93D] transition-colors"
              >
                Meer over maatwerkgames →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TOOLS
      ════════════════════════════════════════════════════════════════ */}
      <section id="tools" className="bg-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">

          <div className="mb-12 md:mb-14">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase">Tools</span>
              <div className="flex-1 h-px bg-[#28A8AA]/20" />
            </div>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Kleine instrumenten. Groot effect.
            </h2>
            <p className="text-[#777777] text-base mt-3 max-w-[520px]">
              Los inzetbaar in elk event, elke vergadering of elke omgeving. Geen volledig
              gameconcept nodig — gewoon het juiste instrument op het juiste moment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group border border-[#E8E8E8] rounded-lg p-7 hover:border-[#28A8AA] hover:bg-[#F4FBFB] transition-all block"
              >
                <span className="text-3xl mb-4 block">{t.icon}</span>
                <h3 className="font-bold text-[#2D2D2D] text-base mb-2 group-hover:text-[#28A8AA] transition-colors">
                  {t.title}
                </h3>
                <p className="text-sm text-[#777777] leading-relaxed mb-4">{t.desc}</p>
                <p className="text-[10px] text-[#BBBBBB] font-bold uppercase tracking-wide mb-4">
                  {t.use}
                </p>
                <span className="text-xs font-bold text-[#28A8AA] group-hover:underline underline-offset-2">
                  Bekijk deze tool →
                </span>
              </Link>
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
              Niet zeker wat het beste past?
            </h2>
            <p className="text-[#2D2D2D]/65 text-base max-w-[440px]">
              Vertel ons over uw event en uw doel. Wij adviseren welke mix van games en tools het
              beste werkt voor uw groep en uw moment.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-8 py-4 rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Plan een gesprek →
          </Link>
        </div>
      </section>
    </>
  );
}
