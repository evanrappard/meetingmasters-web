import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Events | MeetingMasters",
  description:
    "Bijzondere online bijeenkomsten voor groepen van 30 tot 600 mensen. Strategiedagen, kick-offs, all-hands en virtuele borrels — ontworpen, begeleid en geproduceerd door MeetingMasters.",
};

const eventTypes = [
  {
    icon: "🧭",
    title: "Strategiedag",
    desc: "Een dag die besluiten oplevert, geen presentaties. Plenaire sessies, echte groepsgesprekken en ruimte voor debat — allemaal online.",
    range: "30 – 300 deelnemers",
    tag: "Meest gevraagd",
  },
  {
    icon: "⚡",
    title: "Kick-off",
    desc: "De juiste energie aan het begin van een jaar, een project of een nieuwe fase. Hoge energie, heldere richting, een team dat verbonden vertrekt.",
    range: "30 – 500 deelnemers",
    tag: null,
  },
  {
    icon: "📣",
    title: "All-hands meeting",
    desc: "Townhalls voor grote groepen — met echte interactie. Geen passieve uitzending, maar een moment waarop uw mensen er echt bij zijn.",
    range: "100 – 600 deelnemers",
    tag: null,
  },
  {
    icon: "🥂",
    title: "Virtuele kerstborrel",
    desc: "Een avond die mensen écht leuk vinden. Online. Games, live muziek, escape rooms en sociale ruimtes — geen Zoom-gesprek met een glaasje wijn.",
    range: "30 – 400 deelnemers",
    tag: "Populairste",
  },
  {
    icon: "🤝",
    title: "Community event",
    desc: "Voor verenigingen, alumni-netwerken of professionele gemeenschappen. Een terugkerend samenzijn waar mensen naar uitkijken.",
    range: "50 – 500 deelnemers",
    tag: null,
  },
  {
    icon: "👋",
    title: "Onboarding event",
    desc: "Eerste indrukken beklijven. Een introductie die nieuwe mensen laat landen in uw cultuur, bij uw collega's en uw manier van werken.",
    range: "30 – 200 deelnemers",
    tag: null,
  },
  {
    icon: "🔭",
    title: "Leiderschapsdag",
    desc: "Ruimte voor reflectie, richting en verbinding. Voor de mensen die sturen in uw organisatie.",
    range: "30 – 150 deelnemers",
    tag: null,
  },
  {
    icon: "📋",
    title: "Jaarvergadering",
    desc: "Goed gestructureerd, compliant en niet zo saai als ze klinken. Wij regelen de techniek, u regelt de agenda.",
    range: "50 – 600 deelnemers",
    tag: null,
  },
  {
    icon: "💬",
    title: "Iets anders",
    desc: "Elke bijeenkomst is anders. Vertel ons wat u nodig heeft — wij denken mee.",
    range: null,
    tag: null,
    isContact: true,
  },
];

const steps = [
  {
    n: "01",
    title: "Intake",
    body: "We leren uw organisatie, uw groep en uw doel kennen. Wat moet er na afloop anders zijn?",
  },
  {
    n: "02",
    title: "Ontwerp",
    body: "We ontwerpen het format: platform, programma, interactiemomenten en eventuele maatwerkelementen.",
  },
  {
    n: "03",
    title: "Repetitie",
    body: "We draaien een technische doorloop met sprekers, hosts en relevante betrokkenen. Geen verrassingen op de dag zelf.",
  },
  {
    n: "04",
    title: "Live productie",
    body: "Op de dag zelf regelt een team van MeetingMasters alle technische productie en deelnemersondersteuning.",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(380px, 44vw, 540px)" }}>
        <Image
          src="/images/events-bijeenkomst.webp"
          alt="Online strategiedag voor grote groep — MeetingMasters Events"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.08) 100%)" }}
        />
        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 pb-12 md:pb-16 w-full">
            <div className="max-w-[620px]">
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Events</p>
              <h1
                className="font-bold text-white leading-[1.05] text-balance mb-5"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
              >
                Bijzondere bijeenkomsten voor grote groepen.
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-[500px]">
                Van kick-off tot strategiedag. Wij ontwerpen, begeleiden en produceren online events
                waarbij iedereen er écht bij is — niet alleen kijkt.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-8 py-3.5 rounded hover:bg-[#F5C93D] transition-colors"
              >
                Plan een gesprek
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SWEET SPOT: groepsgrootte positionering ───────────────────── */}
      <section className="bg-[#2D2D2D]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Ons speelveld</p>
              <p
                className="text-white font-bold leading-snug text-balance"
                style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)" }}
              >
                Groepsbijeenkomsten van 30 tot 600 mensen waarbij deelnemers zelf actief zijn —
                niet kijken.
              </p>
              <p className="text-white/50 text-sm leading-relaxed mt-4 max-w-[540px]">
                Minder dan 30 mensen? Dan werkt een goede facilitator zonder platform.
                Meer dan 600? Dan bent u op zoek naar een webinar-bureau. Daartussenin zijn wij de beste partij.
              </p>
            </div>

            {/* Grootte-indicator */}
            <div className="flex md:flex-col gap-3 md:gap-2 shrink-0">
              {[
                { range: "30 – 100", label: "Small large" },
                { range: "100 – 300", label: "Sweet spot", highlight: true },
                { range: "300 – 600", label: "Large scale" },
              ].map((s) => (
                <div
                  key={s.range}
                  className={`px-4 py-2.5 rounded text-center min-w-[130px] ${
                    s.highlight
                      ? "bg-[#EEBE3D] text-[#2D2D2D]"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  <p className={`font-bold tabular-nums text-sm ${s.highlight ? "text-[#2D2D2D]" : "text-white"}`}>
                    {s.range}
                  </p>
                  <p className={`text-[10px] font-bold tracking-wide uppercase mt-0.5 ${s.highlight ? "text-[#2D2D2D]/60" : "text-white/40"}`}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT TYPES ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12 md:mb-16">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Wat kunt u organiseren</p>
            <h2
              className="font-bold text-[#2D2D2D] leading-snug text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Welk event organiseert u?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventTypes.map((e) => (
              <div
                key={e.title}
                className={`group rounded-lg border p-6 flex flex-col transition-all hover:border-[#EEBE3D] hover:bg-[#FFFDF5] ${
                  e.isContact ? "border-dashed border-[#DDDDDD]" : "border-[#E8E8E8] bg-white"
                }`}
              >
                {/* Header: icon + title + tag */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl leading-none mt-0.5 shrink-0">{e.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 flex-wrap">
                      <h3 className="font-bold text-[#2D2D2D] text-base leading-snug">{e.title}</h3>
                      {e.tag && (
                        <span className="shrink-0 text-[10px] font-bold text-[#28A8AA] bg-[#28A8AA]/10 rounded-full px-2.5 py-0.5 mt-0.5">
                          {e.tag}
                        </span>
                      )}
                    </div>
                    {e.range && (
                      <p className="text-[10px] font-bold text-[#EEBE3D] tracking-wide mt-0.5">{e.range}</p>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#777777] leading-relaxed flex-1">{e.desc}</p>

                {e.isContact ? (
                  <Link href="/contact" className="mt-4 text-xs font-bold text-[#EEBE3D] hover:underline underline-offset-2">
                    Vertel ons meer →
                  </Link>
                ) : (
                  <span className="mt-4 text-xs font-bold text-[#DDDDDD] group-hover:text-[#EEBE3D] transition-colors">
                    Meer info →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12 md:mb-16">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Onze aanpak</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Van eerste gesprek tot live productie.
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

      {/* ── TESTIMONIAL ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mx-auto text-center">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">Wat klanten zeggen</p>
            <blockquote
              className="text-[#2D2D2D] leading-relaxed mb-6 text-balance"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
            >
              "Een bijeenkomst waarbij mensen echt naar elkaar konden luisteren en van elkaar konden leren.
              Een nieuwe ervaring in de evenementenwereld. Digitaal maar heel natuurlijk."
            </blockquote>
            <p className="font-bold text-[#2D2D2D] text-sm">Rode Kruis Nederland</p>
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
              Heeft u binnenkort een event?
            </h2>
            <p className="text-[#2D2D2D]/65 text-base max-w-[440px]">
              Vertel ons wat u plant. Wij vertellen wat er mogelijk is.
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
