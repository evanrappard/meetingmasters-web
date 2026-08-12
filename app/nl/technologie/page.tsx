import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Technologie | MeetingMasters",
  description:
    "De tool volgt het doel. Wij ondersteunen je online bijeenkomst op het platform dat past — van Teams en Zoom tot Zoom Events en SpatialChat. Techniek is er om connectie te ondersteunen.",
};

// ── Subheroes: van alledaags naar bijzonder ────────────────────────────
const PLATFORMS = [
  {
    label: "Teams",
    tag: "Intern · office-tool",
    why: "De vertrouwde tool voor dagelijks intern overleg — al aanwezig in je Microsoft-omgeving.",
    href: "/nl/technologie/teams",
    accent: false,
  },
  {
    label: "Zoom",
    tag: "Meeting-tool",
    why: "Kwalitatief hoogwaardig en stabiel. De betrouwbare keuze voor overleg en samenwerking.",
    href: "/nl/technologie/zoom",
    accent: false,
  },
  {
    label: "Zoom Events",
    tag: "Events & congressen",
    why: "Voor grote bijeenkomsten en congressen: registratie, meerdere sessies en schaal.",
    href: "/nl/technologie/zoom-events",
    accent: false,
  },
  {
    label: "SpatialChat",
    tag: "Proximity-platform",
    why: "Van levensecht persoonlijk contact tot webinars — je beweegt vrij en loopt spontaan bij elkaar aan.",
    href: "/nl/technologie/spatialchat",
    accent: true,
  },
];

// ── Drie soorten tools (beeld erboven, net als op de home) ─────────────
const TOOL_TYPES = [
  {
    num: "01",
    label: "Standaard vergadertools",
    headline: "Vertrouwd, vierkant, prima samenwerking",
    body: "De bekende grid-tools voor overleg en samenwerken. Iedereen in een vakje, uitstekend voor de dagelijkse meeting.",
    meta: "Zoom · Teams — tot 300 deelnemers",
    img: "/images/events-bijeenkomst.webp",
    imgAlt: "Online overleg in een standaard vergadertool",
    bg: "bg-[#F0F0EC]",
    links: [
      { label: "Zoom", href: "/nl/technologie/zoom" },
      { label: "Teams", href: "/nl/technologie/teams" },
    ],
  },
  {
    num: "02",
    label: "Event-platforms",
    headline: "Webinar-based, gebouwd voor uitzendingen",
    body: "Voor grote bijeenkomsten en congressen: registratie, meerdere parallelle sessies en een professionele uitstraling.",
    meta: "Zoom Events — vanaf 300 personen",
    img: "/images/events-spatial.webp",
    imgAlt: "Groot online event met veel deelnemers",
    bg: "bg-[#E8EDE4]",
    links: [{ label: "Zoom Events", href: "/nl/technologie/zoom-events" }],
  },
  {
    num: "03",
    label: "Proximity-platforms",
    headline: "Immersief, lifelike, vrij bewegen",
    body: "Van levensecht persoonlijk contact tot webinars. Je beweegt zelf door de ruimte en loopt spontaan bij elkaar aan.",
    meta: "SpatialChat — tot 600 deelnemers",
    img: "/images/spatial-entree.webp",
    imgAlt: "Proximity-platform met vrij bewegende deelnemers",
    bg: "bg-[#FFFDF5]",
    links: [{ label: "SpatialChat", href: "/nl/technologie/spatialchat" }],
  },
];

export default function TechnologiePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[720px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Technologie</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              De tool volgt het doel. Kies een platform dat bij je past.
            </h1>
            <p className="text-white/70 text-base leading-relaxed max-w-[560px] mb-8">
              Je dagelijkse tool is zelden het antwoord voor een niet-alledaagse bijeenkomst. Wij
              kiezen bewust het platform dat past bij wat je wilt bereiken — en zorgen dat de techniek
              op de achtergrond blijft.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nl/expert-advies"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                Vraag tooladvies →
              </Link>
              <a
                href="#support"
                className="text-white text-sm font-semibold px-6 py-3 border border-white/30 rounded hover:border-white/70 transition-colors"
              >
                Zo leveren wij support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBHEROES: platforms ─────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="md:-mt-12 relative z-10 bg-white shadow-lg rounded grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EBEBEB] overflow-hidden">
            {PLATFORMS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className={`p-7 group transition-colors ${p.accent ? "bg-[#FFFBEE] hover:bg-[#FFF7DD]" : "hover:bg-[#FFFBEE]"}`}
              >
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-2">{p.tag}</p>
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 leading-snug group-hover:text-[#D4A835] transition-colors">
                  {p.label}
                </h3>
                <p className="text-sm text-[#898989] leading-relaxed mb-3">{p.why}</p>
                <span className="text-[#EEBE3D] text-xs font-bold transition-all group-hover:text-[#D4A835]">Meer →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIE ────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="rounded-xl border border-[#EBEBEB] bg-white shadow-sm p-8 md:p-12 max-w-[900px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Onze visie</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Techniek is er om connectie te ondersteunen.
            </h2>
            <p className="text-[#545454] text-lg leading-relaxed mb-5">
              Meetings draaien om mensen. Technologie maakt dat mogelijk, maar mag nooit de lead
              krijgen.
            </p>
            <p className="text-[#777777] leading-relaxed">
              Er zijn inmiddels een paar standaarden ontstaan, maar het domein is nog volop in
              ontwikkeling. Wij kijken steeds opnieuw welk platform de menselijke vraag het beste
              ondersteunt — niet welke tool het bekendst of het goedkoopst is.
            </p>
          </div>
        </div>
      </section>

      {/* ── DRIE SOORTEN TOOLS ───────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Videoplatforms</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Er zijn er veel. Dit zijn de drie soorten die tellen.
            </h2>
            <p className="text-[#777777] text-base mt-3 max-w-[560px]">
              Uit tientallen videoplatforms kiezen wij bewust. Grofweg vallen ze in drie soorten
              uiteen — elk met een eigen kracht en een eigen ideale groepsgrootte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOOL_TYPES.map((t) => (
              <div key={t.num} className="rounded shadow-md overflow-hidden flex flex-col bg-white">
                <div className="relative h-44 flex-shrink-0 overflow-hidden">
                  <Image src={t.img} alt={t.imgAlt} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#2D2D2D] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded">
                      {t.num} · {t.label}
                    </span>
                  </div>
                </div>
                <div className={`${t.bg} flex-1 flex flex-col p-7`}>
                  <h3 className="text-[#2D2D2D] font-bold text-lg mb-3 leading-snug">{t.headline}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed mb-4 flex-1">{t.body}</p>
                  <p className="text-[11px] font-bold text-[#28A8AA] uppercase tracking-wide mb-4">{t.meta}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="bg-white text-[#2D2D2D] text-sm font-bold px-4 py-2 rounded border border-[#E8E8E8] hover:border-[#EEBE3D] hover:bg-[#FFFDF5] transition-colors"
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rondjes vs vierkantjes — compacte, compelling visual */}
          <div className="mt-8 rounded-xl bg-white border border-[#E8E8E8] overflow-hidden grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Rondjes in plaats van vierkantjes</p>
              <h3 className="font-bold text-[#2D2D2D] text-xl md:text-2xl leading-snug mb-4">
                De vorm van je ruimte bepaalt hoe mensen zich gedragen.
              </h3>
              <p className="text-[#545454] leading-relaxed mb-6">
                Vakjes zetten iedereen op zenden-en-wachten: één spreekt, de rest kijkt toe. Rondjes
                laten mensen bewegen, zelf kiezen met wie ze praten en elkaar spontaan tegenkomen —
                precies zoals aanlopen op kantoor. Dáárom is proximity voor bijzondere bijeenkomsten
                zo krachtig.
              </p>
              <Link
                href="/nl/technologie/spatialchat"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2D2D2D] border-b-2 border-[#EEBE3D] pb-0.5 hover:border-[#2D2D2D] transition-colors self-start"
              >
                Alles over SpatialChat →
              </Link>
            </div>
            {/* Visuele vergelijking */}
            {/* Onder 360px is er 206px ruimte voor 236px aan inhoud; daar gaan
                de twee beelden onder elkaar in plaats van ernaast. */}
            <div className="bg-[#FAFAF8] border-t lg:border-t-0 lg:border-l border-[#EEEEEA] p-6 sm:p-8 md:p-10 flex max-[359px]:flex-col items-center justify-around gap-4 max-[359px]:gap-3 sm:gap-6">
              <div className="text-center">
                {/* Vaste 92px, net als de rondjes hiernaast. De vakjes zelf
                    vullen hun kolom: op vaste 28px liepen ze op smalle
                    schermen over elkaar heen. */}
                <div className="grid grid-cols-3 gap-1.5 mb-4 w-[92px] mx-auto">
                  {Array(9).fill(null).map((_, i) => (
                    <div key={i} className="w-full aspect-square bg-[#D8D8D8] rounded-sm" />
                  ))}
                </div>
                <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide">Vakjes</p>
                <p className="text-xs text-[#888888]">Zoom · Teams</p>
              </div>
              <div className="text-[#CFCFCF] text-2xl font-light">vs</div>
              <div className="text-center">
                <div className="relative w-[92px] h-[92px] mb-4">
                  {[
                    { s: 34, top: 0, left: 29 },
                    { s: 26, top: 30, left: 0 },
                    { s: 30, top: 34, left: 52 },
                    { s: 22, top: 64, left: 24 },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-[#EEBE3D]"
                      style={{ width: c.s, height: c.s, top: c.top, left: c.left, opacity: 0.55 + i * 0.12 }}
                    />
                  ))}
                </div>
                <p className="text-[10px] font-bold text-[#D4A835] uppercase tracking-wide">Rondjes</p>
                <p className="text-xs text-[#888888]">SpatialChat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS VERGELIJKING ───────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Vergelijking</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Welke tool wanneer?
            </h2>
            <p className="text-[#777777] text-base mt-3 max-w-[500px]">
              Elk platform heeft zijn plek. Wij kiezen bewust welk instrument wanneer past.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b-2 border-[#E8E8E8]">
                  <th className="text-left py-3 px-5 text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide w-[150px]">Tool</th>
                  <th className="text-left py-3 pr-6 text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide w-[110px]">Soort</th>
                  <th className="text-left py-3 pr-6 text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide">Sterk in</th>
                  <th className="text-left py-3 pr-6 text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide w-[130px]">Groepsgrootte</th>
                  <th className="text-left py-3 pr-5 text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide w-[110px]">Wij gebruiken het</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Microsoft Teams", kind: "Standaard", strong: "Intern dagelijks overleg, kleine vaste teams", size: "tot ~300", use: "Zelden", highlight: false },
                  { name: "Zoom", kind: "Standaard", strong: "Overleg en samenwerking, breed bekende tool", size: "tot ~300", use: "Incidenteel", highlight: false },
                  { name: "Zoom Events", kind: "Event", strong: "Grote webinars en congressen, registratie, parallelle sessies", size: "vanaf ~300", use: "Voor events", highlight: false },
                  { name: "SpatialChat", kind: "Proximity", strong: "Verbinding, events, virtual offices, dynamische groepen", size: "tot ~600", use: "Altijd", highlight: true },
                ].map((row) => (
                  <tr key={row.name} className={`border-b border-[#F0F0F0] last:border-0 ${row.highlight ? "bg-[#FFFDF5]" : ""}`}>
                    <td className={`py-4 px-5 font-semibold ${row.highlight ? "text-[#2D2D2D]" : "text-[#545454]"}`}>
                      {row.name}
                      {row.highlight && (
                        <span className="ml-2 text-[9px] bg-[#EEBE3D] text-[#2D2D2D] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Ons platform
                        </span>
                      )}
                    </td>
                    <td className="py-4 pr-6 text-[#888888]">{row.kind}</td>
                    <td className="py-4 pr-6 text-[#545454]">{row.strong}</td>
                    <td className="py-4 pr-6 text-[#888888]">{row.size}</td>
                    <td className={`py-4 pr-5 font-bold ${row.highlight ? "text-[#EEBE3D]" : "text-[#CCCCCC]"}`}>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ONDERSTEUNENDE TOOLS ─────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Ondersteunende technologie</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Tools die interactie versterken.
            </h2>
            <p className="text-[#777777] text-sm mt-3 max-w-[480px]">
              Naast het videoplatform werken wij met een selectie van tools die specifieke
              interactiemomenten versterken. Geen onnodige software — alleen wat bijdraagt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Miro", wordmark: "miro", color: "#FFD02F", text: "#050038", role: "Gezamenlijk whiteboard voor visuele samenwerking, brainstorms en templates." },
              { name: "Mentimeter", wordmark: "Mentimeter", color: "#1A1A2E", text: "#ffffff", role: "Live polling, woordwolken en quizzen voor real-time input van grote groepen." },
              { name: "MeetingMasters", image: "/images/logo.webp", role: "Onze eigen spel- en interactietools: Wheel of Fortune, Bingo, Inspiration Cards en Storytelling." },
              { name: "StreamAlive", wordmark: "StreamAlive", color: "#6C4DF6", text: "#ffffff", role: "Live-interactie rechtstreeks vanuit de chat: kaarten, polls, woordwolken en reacties." },
            ].map((tool) => (
              <div key={tool.name} className="bg-white border border-[#E8E8E8] rounded-lg p-6 flex flex-col">
                <div className="h-12 mb-4 flex items-center">
                  {tool.image ? (
                    <Image src={tool.image} alt={tool.name} width={130} height={34} className="h-8 w-auto object-contain" />
                  ) : (
                    <span
                      className="inline-flex items-center px-3 py-1.5 rounded font-bold text-sm"
                      style={{ background: tool.color, color: tool.text }}
                    >
                      {tool.wordmark}
                    </span>
                  )}
                </div>
                <p className="font-bold text-[#2D2D2D] text-sm mb-2">{tool.name}</p>
                <p className="text-xs text-[#777777] leading-relaxed">{tool.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT ──────────────────────────────────────────────────── */}
      <section id="support" className="bg-white py-16 md:py-20 scroll-mt-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
            <div>
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Support</p>
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Je staat er nooit alleen voor.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-8 max-w-[560px]">
                De beste techniek is de techniek die je niet merkt. Daarom regelen wij support van
                begin tot eind: we bereiden voor, we staan klaar aan de telefoon en we zijn live
                aanwezig in je bijeenkomst.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: "📋", title: "Voorbereiding", body: "Duidelijke handleidingen, een technische doorloop en een testmoment vooraf." },
                  { icon: "📞", title: "Telefonische support", body: "Een half uur voor aanvang en tijdens de bijeenkomst direct bereikbaar." },
                  { icon: "🎧", title: "Live in de meeting", body: "Een host of producer is er live bij, zodat je je op de inhoud richt." },
                ].map((s) => (
                  <div key={s.title} className="rounded-lg border border-[#EBEBEB] bg-white p-5">
                    <span className="text-2xl mb-3 block">{s.icon}</span>
                    <p className="font-bold text-[#2D2D2D] text-sm mb-1">{s.title}</p>
                    <p className="text-xs text-[#777777] leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/nl/technologie/support"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2D2D2D] border-b-2 border-[#EEBE3D] pb-0.5 hover:border-[#2D2D2D] transition-colors"
              >
                Lees hoe wij ondersteunen — van planning tot uitvoer →
              </Link>
            </div>
            <div className="bg-[#2D2D2D] rounded-lg p-7">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wide mb-3">Support tijdens je bijeenkomst</p>
              <a href="tel:+31633034707" className="text-white text-2xl font-bold hover:underline">+31 6 33 03 47 07</a>
              <p className="text-white/60 text-sm leading-relaxed mt-3">
                Een begeleide bijeenkomst van MeetingMasters? Loopt er iets vast, bel dan direct — of
                bekijk de <Link href="/nl/technologie/faq" className="text-[#EEBE3D] font-semibold hover:underline">FAQ techniek</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
