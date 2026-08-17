import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SpatialChat | MeetingMasters Technologie",
  description:
    "SpatialChat is het videoplatform waarin je vrij beweegt en zelf je gesprekken kiest. MeetingMasters is officieel Channel Partner voor Nederland.",
};

const stats = [
  { value: "47%", label: "meer engagement dan videobellen" },
  { value: "66%", label: "hogere opkomst bij events" },
  { value: "94%", label: "tevredenheidscore deelnemers" },
  { value: "6M+", label: "gebruikers wereldwijd" },
];

const features = [
  {
    icon: "◎",
    title: "Ruimtelijk geluid",
    body: "Je hoort mensen die dichtbij zijn helder, en mensen die ver weg staan zachter — precies zoals in een echte zaal. Gesprekken overlappen niet.",
  },
  {
    icon: "⬡",
    title: "Vrije beweging",
    body: "Deelnemers lopen zelf naar elkaar toe. Geen breakout-rooms die door een host worden ingesteld — iedereen kiest zijn eigen gesprekspartner.",
  },
  {
    icon: "◻",
    title: "Custom ruimtes",
    body: "Elke ruimte heeft eigen afmetingen, achtergrond en functie. Van receptiehal tot breakout-lounge — ingericht op maat van het event.",
  },
  {
    icon: "⬜",
    title: "Huisstijl",
    body: "Achtergronden, logo's en kleuren volledig aanpasbaar. Deelnemers landen meteen in de visuele wereld van jouw organisatie.",
  },
  {
    icon: "◈",
    title: "Scherm delen & whiteboard",
    body: "Meerdere deelnemers kunnen tegelijk hun scherm delen. Geïntegreerde whiteboard voor live samenwerking.",
  },
  {
    icon: "⬛",
    title: "iFrame-integraties",
    body: "Miro, Google Docs, Kahoot, YouTube — live ingebouwd in de ruimte. Geen tabbladen wisselen, alles staat klaar.",
  },
];

const roomTypes = [
  {
    name: "Breakout-lounge",
    capacity: "≤ 50 personen",
    use: "Kleine groepsgesprekken, borrelsfeer, spontaan netwerken",
    color: "bg-[#EEBE3D]/10 border-[#EEBE3D]/30",
  },
  {
    name: "Webinar / filmzaal",
    capacity: "≤ 10.000 personen",
    use: "Grote plenaire sessies, keynotes, all-hands meetings",
    color: "bg-[#28A8AA]/10 border-[#28A8AA]/30",
  },
  {
    name: "Stage met iFrame",
    capacity: "≤ 50 personen",
    use: "Interactieve presentaties met live content (Miro, slides, video)",
    color: "bg-[#2D2D2D]/5 border-[#E0E0E0]",
  },
  {
    name: "Workspace",
    capacity: "≤ 12 personen",
    use: "Focusmodus, grid-view — voor overleggen zonder afleiding",
    color: "bg-[#2D2D2D]/5 border-[#E0E0E0]",
  },
];

const trustedBy = ["Stanford University", "Google", "McDonald's", "Accenture", "1.500+ organisaties"];

export default function SpatialChatPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#2D2D2D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/spatialchat-hero-v3.webp"
            alt="Deelnemer aan een SpatialChat-bijeenkomst logt in op een groot scherm en ziet de virtuele ruimte al voor zich"
            fill priority
            className="object-cover object-right"
          />
          {/* De tekst staat links, het scherm rechts. De verloop naar rechts
              houdt de kop leesbaar zonder het beeld dicht te smeren. */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/75 lg:via-[#2D2D2D]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/85 to-transparent lg:hidden" />
        </div>

        <div className="relative max-w-content mx-auto px-8 md:px-16 lg:px-20 py-16 md:py-24 lg:py-28">
          <div className="max-w-[560px]">
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              Technologie → SpatialChat
            </p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-6"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)" }}
            >
              Videobellen dat voelt als echt ontmoeten.
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-[520px] mb-8">
              SpatialChat is ons platform van keuze — omdat het als enige platform de
              dynamiek nabootst van een echte bijeenkomst. Je beweegt vrij, zoekt
              het gesprek zelf op en ervaart ruimte.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nl/expert-advies"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-6 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                Plan een gesprek
              </Link>
              <Link
                href="/nl/technologie/hulp"
                className="border border-white/20 text-white/70 text-sm font-medium px-6 py-3 rounded hover:border-white/40 hover:text-white transition-colors"
              >
                Hulp bij SpatialChat →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="bg-[#FFFDF5] border-b border-[#EBEBEB] py-12">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((s) => (
              <div key={s.value} className="text-center md:text-left">
                <p
                  className="font-bold text-[#2D2D2D] tabular-nums leading-none mb-1"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
                >
                  {s.value}
                </p>
                <p className="text-[#898989] text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAAROM SPATIALCHAT ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                Waarom SpatialChat
              </p>
              <h2
                className="font-bold text-[#2D2D2D] leading-tight text-balance mb-6"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
              >
                Niet een betere vergadering. Een andere ervaring.
              </h2>
              <div className="space-y-4 text-[#545454] text-[15px] leading-relaxed">
                <p>
                  Bij Zoom, Teams en Google Meet zit iedereen in een grid. Je krijgt
                  één gesprek tegelijk, één scherm, één moderator. De vergadering bepaalt
                  wie spreekt.
                </p>
                <p>
                  Bij SpatialChat bewegen deelnemers vrij door een digitale ruimte.
                  Je loopt naar iemand toe — letterlijk. De afstand tussen avatars bepaalt
                  wie je hoort. Gesprekken ontstaan vanzelf, net als bij een borrel of
                  in een kantoor.
                </p>
                <p>
                  Dat verschil is niet cosmetisch. Het verandert de sociale dynamiek: minder
                  formeel, meer spontaan, hogere betrokkenheid. Deelnemers nemen zelf
                  initiatief in plaats van te wachten tot ze het woord krijgen.
                </p>
              </div>
            </div>

            {/* Visual comparison */}
            <div className="space-y-4">
              <div className="bg-[#F8F8F8] rounded-lg p-6 border border-[#EBEBEB]">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#BBBBBB] mb-4">
                  Traditionele videoconferentie
                </p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Array(9).fill(null).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm bg-[#DDDDDD] flex items-center justify-center"
                      style={{ aspectRatio: "16/9" }}
                    >
                      <div className="w-4 h-4 rounded-full bg-[#BBBBBB]" />
                    </div>
                  ))}
                </div>
                <ul className="text-[13px] text-[#898989] space-y-1">
                  <li>— Vaste posities, geen beweging</li>
                  <li>— Één spreker tegelijk</li>
                  <li>— Host bepaalt de structuur</li>
                </ul>
              </div>

              <div className="bg-[#FFFBEE] rounded-lg p-6 border border-[#EEBE3D]/30">
                <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#C9A030] mb-4">
                  SpatialChat
                </p>
                <div className="relative h-24 mb-4">
                  {[
                    { top: "10%", left: "15%", size: 28 },
                    { top: "30%", left: "35%", size: 32 },
                    { top: "55%", left: "22%", size: 26 },
                    { top: "15%", left: "62%", size: 30 },
                    { top: "50%", left: "55%", size: 28 },
                    { top: "65%", left: "78%", size: 24 },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-[#EEBE3D]"
                      style={{
                        top: c.top,
                        left: c.left,
                        width: c.size,
                        height: c.size,
                        opacity: 0.55 + i * 0.07,
                      }}
                    />
                  ))}
                  {/* Connection line suggestion */}
                  <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                    <line x1="21%" y1="26%" x2="37%" y2="46%" stroke="#EEBE3D" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3,3" />
                    <line x1="37%" y1="46%" x2="24%" y2="68%" stroke="#EEBE3D" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3,3" />
                  </svg>
                </div>
                <ul className="text-[13px] text-[#7A6B20] space-y-1">
                  <li>+ Vrije beweging, zelf keuzes maken</li>
                  <li>+ Meerdere gesprekken tegelijk</li>
                  <li>+ Deelnemers bepalen hun eigen flow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FAFAFA] border-y border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[520px] mb-12">
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              Functionaliteiten
            </p>
            <h2
              className="font-bold text-[#2D2D2D] leading-tight text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
            >
              Alles wat een live bijeenkomst nodig heeft.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-lg p-6 border border-[#EBEBEB]">
                <span className="text-2xl text-[#EEBE3D] mb-4 block">{f.icon}</span>
                <h3 className="font-bold text-[#2D2D2D] text-[15px] mb-2">{f.title}</h3>
                <p className="text-[#898989] text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RUIMTETYPEN ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[520px] mb-12">
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              Ruimtetypen
            </p>
            <h2
              className="font-bold text-[#2D2D2D] leading-tight text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
            >
              Eén platform, meerdere formats.
            </h2>
            <p className="text-[#545454] text-[15px] leading-relaxed mt-4">
              SpatialChat heeft vier ruimtetypen — elk met een eigen logica en capaciteit.
              Binnen één event schakel je naadloos tussen plenair en breakout.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {roomTypes.map((r) => (
              <div key={r.name} className={`rounded-lg p-6 border ${r.color}`}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-[#2D2D2D] text-[16px]">{r.name}</h3>
                  <span className="text-[12px] font-medium text-[#898989] whitespace-nowrap pt-0.5">
                    {r.capacity}
                  </span>
                </div>
                <p className="text-[#545454] text-sm leading-relaxed">{r.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNEL PARTNER ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#2D2D2D]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
                Officieel Channel Partner
              </p>
              <h2
                className="font-bold text-white leading-tight text-balance mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
              >
                Wij zijn de Nederlandse partner van SpatialChat.
              </h2>
              <p className="text-white/60 text-[15px] leading-relaxed max-w-[520px] mb-6">
                Sinds 2021 zijn wij officieel Channel Partner van SpatialChat voor Nederland.
                Dat betekent directe toegang tot de ontwikkelaars, vroeg inzicht in nieuwe
                functionaliteiten, en een team dat het platform door en door kent — niet
                vanuit een handleiding, maar vanuit honderden events.
              </p>
              <div className="flex flex-wrap gap-2">
                {trustedBy.map((org) => (
                  <span
                    key={org}
                    className="bg-white/10 text-white/60 text-[12px] px-3 py-1 rounded-full"
                  >
                    {org}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:text-right">
              <div className="inline-block bg-[#EEBE3D]/10 border border-[#EEBE3D]/30 rounded-lg px-6 py-5 text-center">
                <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Certificering</p>
                <p className="text-white font-bold text-[15px]">SOC 2 Type II</p>
                <p className="text-white/50 text-[12px] mt-1">Databescherming & privacy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#FFFDF5] border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <h2
                className="font-bold text-[#2D2D2D] leading-tight text-balance mb-3"
                style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)" }}
              >
                Zelf ervaren wat SpatialChat doet met een groep?
              </h2>
              <p className="text-[#545454] text-[15px] leading-relaxed max-w-[480px]">
                Een pilotbijeenkomst laat in één uur zien waarom dit platform andere uitkomsten geeft.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
              <Link
                href="/nl/expert-advies"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3.5 rounded hover:bg-[#D4A835] transition-colors text-center"
              >
                Plan een gesprek
              </Link>
              <Link
                href="/nl/technologie/hulp"
                className="border border-[#EBEBEB] text-[#545454] text-sm font-medium px-7 py-3.5 rounded hover:border-[#CCCCCC] transition-colors text-center"
              >
                Hulp bij SpatialChat →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACK NAV ─────────────────────────────────────────────────── */}
      <div className="bg-white border-t border-[#EBEBEB] py-4">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link
            href="/nl/technologie/tools"
            className="text-[13px] text-[#898989] hover:text-[#545454] transition-colors"
          >
            ← Terug naar Technologie
          </Link>
        </div>
      </div>
    </>
  );
}
