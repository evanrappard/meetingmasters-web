import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | MeetingMasters Technologie",
  description:
    "Van planning tot uitvoer: hoe MeetingMasters je online bijeenkomst ondersteunt. Duidelijke handleidingen, telefonische support en een host of producer die live in je meeting aanwezig is.",
};

const PHASES = [
  {
    num: "01",
    title: "Voorbereiding",
    body: "We leren je bijeenkomst kennen, maken een technisch draaiboek en leveren duidelijke handleidingen voor deelnemers en sprekers. Waar nodig plannen we een testmoment, zodat iedereen weet wat hem te wachten staat.",
    items: ["Technische intake & draaiboek", "Handleidingen op maat", "Test- en repetitiemoment"],
  },
  {
    num: "02",
    title: "Vlak voor aanvang",
    body: "We zetten de omgeving klaar, testen beeld en geluid en staan een half uur voor aanvang telefonisch klaar. Deelnemers die er niet in komen, helpen we direct persoonlijk verder.",
    items: ["Omgeving klaargezet", "Beeld & geluid getest", "Telefonisch bereikbaar vooraf"],
  },
  {
    num: "03",
    title: "Tijdens de bijeenkomst",
    body: "Een host, producer of tech-support is live aanwezig. Wij bewaken de techniek, begeleiden sprekers, lossen problemen direct op en houden de telefoon bemand — zodat je je volledig op de inhoud kunt richten.",
    items: ["Live host / producer", "Directe tech-support", "Supportlijn bemand"],
  },
  {
    num: "04",
    title: "Na afloop",
    body: "We ronden netjes af: eventuele opnames en materialen leveren we op, en we kijken samen terug op wat werkte en wat een volgende keer nog beter kan.",
    items: ["Oplevering opname & materiaal", "Korte evaluatie", "Advies voor de volgende keer"],
  },
];

const PILLARS = [
  {
    icon: "📋",
    title: "Duidelijke handleidingen",
    body: "Heldere instructies voor deelnemers en sprekers — precies genoeg om zonder zorgen in te loggen en mee te doen, zonder technisch jargon.",
  },
  {
    icon: "📞",
    title: "Telefonische support",
    body: "Vanaf een half uur voor aanvang en tijdens de hele bijeenkomst zijn we direct bereikbaar op ons supportnummer. Eén telefoontje en we lossen het samen op.",
  },
  {
    icon: "🎧",
    title: "Live in de meeting",
    body: "Wij zijn er echt bij: als host, online producer of tech-support. We vangen problemen op nog voordat je ze merkt, zodat de aandacht bij de mensen blijft.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-16 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/technologie" className="text-white/40 text-xs font-semibold hover:text-white transition-colors">
            ← Technologie
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mt-6">
            <div className="max-w-[660px]">
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Support</p>
              <h1
                className="font-bold text-white leading-[1.05] text-balance mb-5"
                style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
              >
                Van planning tot uitvoer staan wij naast je.
              </h1>
              <p className="text-white/60 text-base leading-relaxed">
                De beste techniek is de techniek die je niet merkt. Daarom regelen wij de
                ondersteuning van begin tot eind — met heldere handleidingen, telefonische support en
                een host die live in je bijeenkomst aanwezig is.
              </p>
            </div>
            <div className="bg-[#EEBE3D] rounded-lg p-6 lg:min-w-[280px]">
              <p className="text-[#2D2D2D]/70 text-xs font-bold uppercase tracking-wide mb-1">Support tijdens je bijeenkomst</p>
              <p className="text-[#2D2D2D] text-sm mb-2">Direct bereikbaar:</p>
              <a href="tel:+31633034707" className="text-[#2D2D2D] text-2xl font-bold hover:underline">+31 6 33 03 47 07</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRIE PIJLERS ─────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Zo helpen wij</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Drie manieren waarop je op ons kunt bouwen.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-lg border border-[#EBEBEB] bg-white p-7">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VAN PLANNING TOT UITVOER ─────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Van planning tot uitvoer</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Support in elke fase van je bijeenkomst.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PHASES.map((ph) => (
              <div key={ph.num} className="bg-white rounded-lg border border-[#E8E8E8] p-7">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[#EEBE3D] font-bold text-2xl">{ph.num}</span>
                  <h3 className="font-bold text-[#2D2D2D] text-lg">{ph.title}</h3>
                </div>
                <p className="text-sm text-[#545454] leading-relaxed mb-4">{ph.body}</p>
                <ul className="space-y-1.5">
                  {ph.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-[#545454]">
                      <span className="text-[#EEBE3D] font-bold mt-0.5 shrink-0">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="max-w-[560px]">
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Zorgeloos je volgende bijeenkomst draaien?
              </h2>
              <p className="text-[#545454] text-base leading-relaxed">
                Vertel ons wat je wilt bereiken. Wij zorgen voor de techniek, de voorbereiding en de
                begeleiding — zodat je je alleen met de inhoud en de mensen hoeft bezig te houden.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nl/expert-advies"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                Plan een gesprek →
              </Link>
              <Link
                href="/nl/technologie/faq"
                className="text-[#2D2D2D] text-sm font-semibold px-5 py-3 border border-[#D8D8D8] rounded hover:border-[#2D2D2D] transition-colors"
              >
                Naar de FAQ techniek
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACK NAV ─────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-t border-[#E8E8E4] py-10">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/technologie" className="text-[#888888] text-sm font-semibold hover:text-[#2D2D2D] transition-colors">
            ← Terug naar Technologie
          </Link>
        </div>
      </section>
    </>
  );
}
