import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology | MeetingMasters",
  description:
    "MeetingMasters is een mensen-gedreven organisatie die technologie inzet als middel voor contact. Onze platformkeuzes zijn bewust — met SpatialChat als fundament.",
};

export default function TechnologyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-28">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[640px]">
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Technology</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Technologie als middel. Mensen als doel.
            </h1>
            <p className="text-white/60 text-base leading-relaxed max-w-[520px]">
              Wij zijn geen technologiebedrijf. Wij zijn een organisatie die gelooft dat
              menselijk contact de basis is van alle samenwerking en ontwikkeling. Technologie
              is het gereedschap dat contact mogelijk maakt — niet andersom.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILOSOFIE ────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Onze aanpak</p>
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Primair online. Daarom bewuste keuzes.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                Veel organisaties werken soms online. Wij werken uitsluitend online. Dat maakt
                een verschil. Wij weten wat er misgaat als de techniek niet klopt, wat deelnemers
                afhaakt en wat hen aanweziger maakt. Die kennis vertaalt zich in de platforms
                en tools die wij kiezen.
              </p>
              <p className="text-[#545454] leading-relaxed mb-5">
                Wij werken niet met het platform dat het goedkoopst is, of het platform dat
                iedereen al kent. Wij werken met het platform dat het beste doet wat wij willen:
                echte verbinding mogelijk maken. Soms is dat Zoom. Vaker is dat SpatialChat.
              </p>
              <p className="text-[#545454] leading-relaxed">
                Onze platformkeuzes zijn geen toevalstreffers — ze zijn het resultaat van jaren
                experimenteren, faciliteren en terugkijken op wat werkte en wat niet.
              </p>
            </div>

            <div className="border border-[#E8E8E8] rounded-lg overflow-hidden">
              {[
                { principle: "Technologie volgt het doel", detail: "Eerst: wat wil je bereiken? Dan: welke tool past daarbij." },
                { principle: "Geen onnodige drempels", detail: "Elke klik die een deelnemer niet hoeft te maken, is een klik die de aandacht bij de inhoud houdt." },
                { principle: "Betrouwbaar boven verrassend", detail: "Een tool die altijd werkt wint het van een tool die soms indrukwekkend is." },
                { principle: "Menselijk by design", detail: "Wij kiezen platforms die spontaan gedrag uitlokken — niet platforms die gedrag strak sturen." },
              ].map((item, i) => (
                <div key={i} className="px-6 py-5 border-b border-[#F0F0F0] last:border-0">
                  <p className="font-bold text-[#2D2D2D] text-sm mb-1">{item.principle}</p>
                  <p className="text-xs text-[#888888] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RONDJES VS VIERKANTJES ───────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Hoe vorm gedrag bepaalt</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Rondjes of vierkantjes — het maakt uit.
            </h2>
            <p className="text-[#777777] text-base mt-3 max-w-[520px]">
              De vorm van uw online omgeving bepaalt hoe mensen zich gedragen. Niet een beetje.
              Fundamenteel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {/* Vierkantjes */}
            <div className="bg-white border border-[#E8E8E8] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="grid grid-cols-3 gap-1">
                  {Array(9).fill(null).map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-[#DDDDDD] rounded-sm" />
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide">Zoom · Teams · Google Meet</p>
                  <p className="text-sm font-bold text-[#2D2D2D]">Iedereen in een grid</p>
                </div>
              </div>
              <p className="text-sm text-[#545454] leading-relaxed mb-5">
                Open Zoom of Teams en u ziet een strakke matrix van gelijke, vierkante vakjes.
                Iedereen even groot, even ver weg, even stil. U kunt niet dichter bij iemand
                gaan staan. U kunt niet even naar de zijkant schuiven voor een kort gesprek.
                De interface zegt: <em>luister, wacht op uw beurt, zit stil.</em>
              </p>
              <div className="space-y-2">
                {[
                  "Één persoon spreekt, de rest wacht",
                  "Netwerken is geforceerd en onnatuurlijk",
                  "Breakout-rooms worden willekeurig toegewezen",
                  "Energie verdwijnt, schermen sluiten",
                  "Contact is gepland of het bestaat niet",
                ].map((item) => (
                  <div key={item} className="flex gap-2 items-start text-sm text-[#AAAAAA]">
                    <span className="shrink-0 mt-0.5">–</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Rondjes */}
            <div className="bg-[#FFFDF5] border-2 border-[#EEBE3D] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex gap-1.5 items-end">
                  {[24, 18, 22, 16, 20].map((size, i) => (
                    <div key={i} className="rounded-full bg-[#EEBE3D]" style={{ width: size, height: size, opacity: 0.5 + i * 0.1 }} />
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#EEBE3D] uppercase tracking-wide">SpatialChat</p>
                  <p className="text-sm font-bold text-[#2D2D2D]">U bent een rondje</p>
                </div>
              </div>
              <p className="text-sm text-[#545454] leading-relaxed mb-5">
                In SpatialChat beweegt u vrij door een gedeelde ruimte. U bent geen vakje in
                een raster — u bent een rondje dat zelf kiest waar het naartoe gaat. Hoe dichter
                u bij iemand komt, hoe meer u elkaar hoort en ziet. Beweegt u weg, dan vervaagt
                het contact. <em>Precies zoals aanlopen werkt op een kantoor.</em>
              </p>
              <div className="space-y-2">
                {[
                  "Spontaan contact zonder geplande link",
                  "Vijf gesprekken tegelijk in dezelfde ruimte",
                  "Zelf kiezen met wie u spreekt",
                  "Van formeel naar informeel in één stap",
                  "Achtergronden en ruimtes volledig op maat",
                ].map((item) => (
                  <div key={item} className="flex gap-2 items-start text-sm text-[#545454]">
                    <span className="text-[#EEBE3D] shrink-0 font-bold mt-0.5">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/technology/spatialchat"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2D2D2D] border-b-2 border-[#EEBE3D] pb-0.5 hover:border-[#2D2D2D] transition-colors"
          >
            Alles over SpatialChat →
          </Link>
        </div>
      </section>

      {/* ── PLATFORMS VERGELIJKING ───────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Videotechnologie</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Vier platforms. Vier doelen.
            </h2>
            <p className="text-[#777777] text-base mt-3 max-w-[500px]">
              Elk platform heeft zijn plek. Wij kiezen bewust welk instrument wanneer past.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#E8E8E8]">
                  <th className="text-left py-3 pr-6 text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide w-[160px]">Platform</th>
                  <th className="text-left py-3 pr-6 text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide">Sterk in</th>
                  <th className="text-left py-3 pr-6 text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide">Minder geschikt voor</th>
                  <th className="text-left py-3 text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide w-[120px]">Wij gebruiken het</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Microsoft Teams", strong: "Intern dagelijks overleg, kleine vaste teams", weak: "Bijzondere events, informele verbinding", use: "Zelden", highlight: false },
                  { name: "Zoom", strong: "Grote webinars, breed bekende tool", weak: "Netwerken, dynamische interactie", use: "Incidenteel", highlight: false },
                  { name: "Google Meet", strong: "Snel en laagdrempelig, kleine teams", weak: "Interactie, grotere groepen", use: "Zelden", highlight: false },
                  { name: "SpatialChat", strong: "Verbinding, events, virtual offices, dynamische groepen", weak: "Massale webinars zonder interactie (>10k deelnemers)", use: "Altijd", highlight: true },
                ].map((row) => (
                  <tr key={row.name} className={`border-b border-[#F0F0F0] ${row.highlight ? "bg-[#FFFDF5]" : ""}`}>
                    <td className={`py-4 pr-6 font-semibold ${row.highlight ? "text-[#2D2D2D]" : "text-[#545454]"}`}>
                      {row.name}
                      {row.highlight && (
                        <span className="ml-2 text-[9px] bg-[#EEBE3D] text-[#2D2D2D] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Ons platform
                        </span>
                      )}
                    </td>
                    <td className="py-4 pr-6 text-[#545454]">{row.strong}</td>
                    <td className="py-4 pr-6 text-[#AAAAAA]">{row.weak}</td>
                    <td className={`py-4 font-bold ${row.highlight ? "text-[#EEBE3D]" : "text-[#CCCCCC]"}`}>{row.use}</td>
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
              { icon: "🟧", name: "Miro", role: "Gezamenlijk whiteboard voor visuele samenwerking, brainstorms en templates." },
              { icon: "📊", name: "Mentimeter", role: "Live polling, woordwolken en quizzen voor real-time input van grote groepen." },
              { icon: "🎲", name: "Spelelementen", role: "Wheel of Fortune, Bingo, Inspiration Cards en Storytelling — eigen ontwikkelde tools." },
              { icon: "🔗", name: "iFrame-integraties", role: "Google Slides, Miro en andere tools direct in SpatialChat — zonder losse tabbladen." },
            ].map((tool) => (
              <div key={tool.name} className="bg-white border border-[#E8E8E8] rounded-lg p-6">
                <span className="text-2xl mb-3 block">{tool.icon}</span>
                <p className="font-bold text-[#2D2D2D] text-sm mb-2">{tool.name}</p>
                <p className="text-xs text-[#777777] leading-relaxed">{tool.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBPAGINA'S ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Meer weten</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Alles over de techniek achter uw event.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/technology/spatialchat", label: "SpatialChat", desc: "Wat het platform is, hoe het werkt en waarom wij het kiezen.", accent: true },
              { href: "/technology/hoe-het-werkt", label: "Hoe het werkt", desc: "Instructies voor deelnemers en organisatoren.", accent: false },
              { href: "/technology/faq", label: "FAQ", desc: "Veelgestelde vragen over platforms, events en virtual offices.", accent: false },
              { href: "/technology/helpdesk", label: "Helpdesk", desc: "Iets werkt niet? Direct zelf oplossen tijdens uw meeting.", accent: false },
            ].map((item) => (
              <Link key={item.href} href={item.href}
                className={`group rounded-lg border-2 p-6 hover:border-[#EEBE3D] hover:bg-[#FFFDF5] transition-all block ${item.accent ? "border-[#EEBE3D] bg-[#FFFDF5]" : "border-[#E8E8E8]"}`}>
                <p className="font-bold text-[#2D2D2D] text-base mb-2">{item.label}</p>
                <p className="text-xs text-[#777777] leading-relaxed mb-4">{item.desc}</p>
                <span className="text-xs font-bold text-[#EEBE3D]">Bekijk →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
