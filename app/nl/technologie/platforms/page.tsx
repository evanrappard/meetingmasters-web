import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platformvergelijking | MeetingMasters Techniek",
  description:
    "Zoom, Teams, Google Meet of SpatialChat? Een eerlijke vergelijking van de populaire videoplatforms — en waarom MeetingMasters kiest voor SpatialChat.",
};

const platforms = [
  {
    name: "Microsoft Teams",
    icon: "📘",
    best: "Interne communicatie & dagelijks overleg",
    strengths: ["Geïntegreerd in Microsoft 365", "Geschikt voor kleine vaste teams", "Goed om chat + vergaderen te combineren"],
    limits: ["Starre grid-indeling", "Weinig dynamiek in grotere groepen", "Informeel contact is vrijwel onmogelijk", "Zware software voor deelnemers van buiten"],
    verdict: "Prima standaardtool voor intern gebruik. Niet geschikt voor bijzondere bijeenkomsten of echte verbinding.",
    color: "border-[#E8E8E8]",
  },
  {
    name: "Zoom",
    icon: "🔵",
    best: "Webinars & grote plenaire sessies",
    strengths: ["Stabiel en breed bekend", "Sterk voor grote webinars (tot duizenden deelnemers)", "Goede break-outfunctionaliteit"],
    limits: ["Break-outs zijn willekeurig en geforceerd", "Netwerken voelt kunstmatig", "Geen ruimtelijkheid of bewegingsvrijheid", "Na afloop: scherm dicht, verbinding weg"],
    verdict: "Solide keuze voor webinars. Minder sterk als je échte interactie en verbinding wilt.",
    color: "border-[#E8E8E8]",
  },
  {
    name: "Google Meet",
    icon: "🟢",
    best: "Kleine teams & snel overleg",
    strengths: ["Geen installatie nodig", "Eenvoudig en snel", "Goed geïntegreerd met Google Workspace"],
    limits: ["Beperkte interactiemogelijkheden", "Geen ruimtelijk element", "Weinig geschikt voor grotere groepen"],
    verdict: "Handig voor kleine, informele calls. Niet geschikt voor events of virtuele werkomgevingen.",
    color: "border-[#E8E8E8]",
  },
  {
    name: "SpatialChat",
    icon: "🟡",
    best: "Bijzondere events, virtual offices & echte verbinding",
    strengths: [
      "Proximity-based video: je hoort en ziet wie naast je staat",
      "Vrije beweging door aanpasbare ruimtes",
      "Van formeel naar informeel in één stap",
      "Geen download — werkt in de browser",
      "Achtergronden, kamers en sfeer op maat",
      "SOC 2 Type II-gecertificeerd",
    ],
    limits: ["Minder bekend dan Zoom of Teams", "Vraagt iets meer gewenning van deelnemers", "IT-afdeling moet nieuwe tool goedkeuren"],
    verdict: "Ons platform van keuze — voor alles waarbij verbinding, dynamiek en beleving tellen.",
    color: "border-[#EEBE3D] bg-[#FFFDF5]",
    highlight: true,
  },
];

const stats = [
  { n: "47%", label: "meer betrokkenheid vs. regulier videobellen" },
  { n: "66%", label: "hogere opkomst en aanwezigheid" },
  { n: "94%", label: "tevredenheid na afloop" },
  { n: "6M+", label: "gebruikers in meer dan 90 landen" },
];

export default function PlatformsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-20 md:py-24">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/technologie" className="text-white/40 text-xs hover:text-white/70 transition-colors mb-8 inline-block">
            ← Techniek
          </Link>
          <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Platformvergelijking</p>
          <h1
            className="font-bold text-white leading-[1.05] text-balance mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", maxWidth: "22ch" }}
          >
            Niet elk platform doet hetzelfde.
          </h1>
          <p className="text-white/65 text-base leading-relaxed max-w-[520px]">
            Zoom, Teams en Google Meet zijn prima tools voor waar ze voor bedoeld zijn. Maar voor
            bijeenkomsten waar verbinding, dynamiek en beleving centraal staan, kiezen wij
            bewust voor SpatialChat. Hier is waarom.
          </p>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.n}>
                <p className="font-bold text-[#2D2D2D] tabular-nums" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.1 }}>{s.n}</p>
                <p className="text-[#2D2D2D]/70 text-xs mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[#2D2D2D]/40 text-[10px] mt-5">Bron: SpatialChat, 2024–2025</p>
        </div>
      </section>

      {/* ── VERGELIJKING ─────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-12">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Vergelijking</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Vier platforms, vier doelen.
            </h2>
            <p className="text-[#777777] text-sm mt-3 max-w-[480px]">
              Elk platform heeft zijn plek. Wij werken met het platform dat het beste past bij
              wat wij doen: bijzondere bijeenkomsten en virtual offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {platforms.map((p) => (
              <div key={p.name} className={`rounded-lg border-2 p-7 flex flex-col ${p.color}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{p.icon}</span>
                  <h3 className="font-bold text-[#2D2D2D] text-lg">{p.name}</h3>
                  {p.highlight && (
                    <span className="ml-auto text-[9px] font-bold tracking-[0.15em] uppercase bg-[#EEBE3D] text-[#2D2D2D] rounded-full px-2.5 py-1">
                      Ons platform
                    </span>
                  )}
                </div>
                <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide mb-5">
                  Sterk in: {p.best}
                </p>

                <div className="mb-4">
                  <p className="text-[10px] font-bold text-[#28A8AA] uppercase tracking-wide mb-2">Voordelen</p>
                  <ul className="space-y-1.5">
                    {p.strengths.map((s) => (
                      <li key={s} className="flex gap-2 items-start text-sm text-[#545454]">
                        <span className="text-[#28A8AA] shrink-0 mt-0.5">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide mb-2">Beperkingen</p>
                  <ul className="space-y-1.5">
                    {p.limits.map((l) => (
                      <li key={l} className="flex gap-2 items-start text-sm text-[#AAAAAA]">
                        <span className="shrink-0 mt-0.5">–</span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className={`text-xs leading-relaxed mt-auto pt-4 border-t ${p.highlight ? "border-[#EEE8D0] text-[#545454] font-medium" : "border-[#EBEBEB] text-[#AAAAAA]"}`}>
                  {p.verdict}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAAROM SPATIALCHAT ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Onze keuze</p>
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-6"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Waarom MeetingMasters voor SpatialChat kiest.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                We zijn al in 2021 met SpatialChat begonnen — lang voordat het platform breed
                bekend was. Niet omdat het de makkelijkste keuze was, maar omdat het als enige
                deed wat wij willen: echte ruimtelijkheid creëren in een online omgeving.
              </p>
              <p className="text-[#545454] leading-relaxed mb-5">
                In SpatialChat beweeg je als avatar door een gedeelde ruimte. Je ziet wie er is,
                loopt naar iemand toe en het gesprek begint vanzelf. Geen link versturen, geen
                break-out toewijzen, geen scherm afsluiten als het klaar is. Het voelt zoals
                aanwezig zijn voelt.
              </p>
              <p className="text-[#545454] leading-relaxed">
                Wij zijn officieel Dutch Channel Partner van SpatialChat. Dat betekent een directe
                lijn met het platform, early access tot nieuwe functies en de zekerheid dat wij
                dit platform door en door kennen.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Proximity-based video", body: "Je hoort en ziet mensen naarmate je dichter bij ze staat. Precies zoals in het echte leven. Dit verandert fundamenteel hoe deelnemers zich gedragen in een online ruimte." },
                { title: "Geen download vereist", body: "SpatialChat werkt volledig in de browser — Chrome, Edge of Firefox. Deelnemers klikken op een link en zijn er. Geen IT-installatie, geen versieconflicten." },
                { title: "Volledig aanpasbaar", body: "Achtergronden, kamers, sfeer en indeling zijn volledig op maat te maken. Je kantoor, je event, je identiteit." },
                { title: "Enterprise-grade beveiliging", body: "SOC 2 Type II-gecertificeerd. End-to-end-encryptie. Dagelijkse security scans. Je data blijft van jou." },
              ].map((item) => (
                <div key={item.title} className="border border-[#E8E8E8] rounded-lg p-6 hover:border-[#EEBE3D] transition-colors">
                  <h3 className="font-bold text-[#2D2D2D] text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-[#777777] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#EEBE3D] py-14">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-[#2D2D2D] text-lg mb-1">Ervaar zelf het verschil.</p>
            <p className="text-[#2D2D2D]/65 text-sm">Plan een demo in ons eigen virtual office — je ervaart het platform in tien minuten.</p>
          </div>
          <Link
            href="/nl/contact"
            className="shrink-0 bg-[#2D2D2D] text-white text-sm font-bold px-8 py-3.5 rounded hover:bg-[#1A1A1A] transition-colors"
          >
            Plan een demo →
          </Link>
        </div>
      </section>
    </>
  );
}
