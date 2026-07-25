import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// ── Per-tool data ──────────────────────────────────────────────────────
// spatialchat heeft een eigen, uitgebreide pagina (statische route) en zit
// daarom NIET in deze dynamische set.
type Tool = {
  name: string;
  kind: string;
  bg: string;
  tagline: string;
  intro: string;
  bestFor: string;
  howitworks: string;
  reasons: { title: string; body: string }[];
};

const TOOL_DATA: Record<string, Tool> = {
  zoom: {
    name: "Zoom",
    kind: "Standaard vergadertool",
    bg: "radial-gradient(circle at 30% 20%, #EAF1FB 0%, #F5F5F2 60%)",
    tagline: "De vertrouwde standaard",
    intro:
      "Zoom is de tool die vrijwel iedereen kent. Betrouwbaar, laagdrempelig en prima voor overleg en samenwerking tot zo'n 300 deelnemers.",
    bestFor: "Overleg, trainingen en samenwerking tot ~300 deelnemers.",
    howitworks: "U ontvangt vooraf een e-mail met een uitnodigingslink. Klik erop; Zoom opent vanzelf of u kiest 'Deelnemen vanuit uw browser'. Vul uw naam in, klik op 'Deelnemen met computeraudio' en u zit in de bijeenkomst. Log gerust 10 minuten van tevoren in.",
    reasons: [
      { title: "Iedereen kan meedoen", body: "Deelnemers hoeven geen account te maken. Eén klik op de link en u bent binnen — op laptop, tablet of telefoon." },
      { title: "Werkt ook zonder installatie", body: "Geen zin om iets te downloaden? U kunt rechtstreeks vanuit uw browser deelnemen via 'Join from your browser'." },
      { title: "Alles voor een goede bijeenkomst", body: "Beeld en geluid voor iedereen tegelijk, scherm delen, chat en breakout rooms voor gesprekken in kleine groepjes." },
    ],
  },
  teams: {
    name: "Microsoft Teams",
    kind: "Intern · vertrouwd",
    bg: "radial-gradient(circle at 30% 20%, #ECEAFB 0%, #F5F5F2 60%)",
    tagline: "Al aanwezig in uw organisatie",
    intro:
      "Teams zit al in de Microsoft-omgeving van veel organisaties. Handig voor intern overleg binnen vaste teams, zonder losse software.",
    bestFor: "Intern overleg in vaste teams tot ~300 deelnemers.",
    howitworks: "Deelnemers klikken op de meetinglink uit de e-mail of agenda-uitnodiging. U kiest de Teams-app of gewoon 'Doorgaan in deze browser' (Edge of Chrome, zonder installatie). Wie geen account heeft, doet als gast mee met alleen een naam; soms wacht u nog even in de lobby.",
    reasons: [
      { title: "Al aanwezig in uw Microsoft 365", body: "De meeste organisaties werken al met Microsoft 365. Teams zit daar gewoon bij, dus u hoeft niets extra's aan te schaffen of te installeren." },
      { title: "Veilig en zakelijk betrouwbaar", body: "Deelnemers komen via een beveiligde link binnen en niet-geverifieerde gasten belanden eerst in de lobby, waar de organisator ze bewust toelaat." },
      { title: "Naadloze integratie met Office", body: "Werkt direct samen met Outlook, Word en PowerPoint. Plannen, bestanden delen en samen presenteren gaat moeiteloos in een omgeving die u al kent." },
    ],
  },
  "zoom-events": {
    name: "Zoom Events",
    kind: "Webinar · events",
    bg: "radial-gradient(circle at 30% 20%, #E5F0FA 0%, #F5F5F2 60%)",
    tagline: "Gebouwd voor grote uitzendingen",
    intro:
      "Zoom Events is gemaakt voor grote events vanaf zo'n 300 deelnemers, met registratie, meerdere sessies en een professionele broadcast-look.",
    bestFor: "Webinars, conferenties en uitzendingen vanaf ~300 deelnemers.",
    howitworks: "Na registratie ontvangt u een bevestigingsmail met uw persoonlijke ticket en join-link. Klik op die link, meld u aan, en u komt in de lobby (de centrale hub). Vanuit de lobby of de tab 'Sessions' klikt u op 'Join' bij een sessie; via 'Itinerary' vindt u uw eigen agenda terug.",
    reasons: [
      { title: "Gemaakt voor grote aantallen", body: "Dé keuze voor events vanaf ~300 deelnemers; schaalt moeiteloos naar duizenden. Techniek en beeldkwaliteit blijven stabiel, ook bij pieken." },
      { title: "Registratie en tickets ingebouwd", body: "Deelnemers registreren vooraf en krijgen een persoonlijk ticket met join-link. Zo weet u precies wie er komt en houdt u ongewenste gasten buiten." },
      { title: "Meerdere sessies onder één dak", body: "Parallelle sessies, sprekers en pauzeruimtes (Expo) in één omgeving. Deelnemers stellen via de agenda hun eigen programma samen." },
    ],
  },
};

const SLUGS = Object.keys(TOOL_DATA);

export function generateStaticParams() {
  return SLUGS.map((tool) => ({ tool }));
}

export async function generateMetadata({ params }: { params: Promise<{ tool: string }> }): Promise<Metadata> {
  const { tool } = await params;
  const data = TOOL_DATA[tool];
  if (!data) return { title: "Technologie | MeetingMasters" };
  return {
    title: `${data.name} | MeetingMasters Technologie`,
    description: data.intro,
  };
}

export default async function ToolPage({ params }: { params: Promise<{ tool: string }> }) {
  const { tool } = await params;
  const data = TOOL_DATA[tool];
  if (!data) notFound();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ background: data.bg }} className="py-20 md:py-28 border-b border-[#E8E8E4]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/technologie" className="text-[#888888] text-xs font-semibold hover:text-[#2D2D2D] transition-colors">
            ← Technologie
          </Link>
          <div className="max-w-[680px] mt-6">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{data.kind}</p>
            <h1
              className="font-bold text-[#2D2D2D] leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)" }}
            >
              {data.name}: {data.tagline}
            </h1>
            <p className="text-[#545454] text-base leading-relaxed max-w-[560px] mb-8">{data.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nl/contact"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                Is dit de juiste tool voor u? →
              </Link>
              <Link
                href="/nl/technologie/faq"
                className="text-[#2D2D2D] text-sm font-semibold px-5 py-3 border border-[#D8D8D8] rounded hover:border-[#2D2D2D] transition-colors"
              >
                Direct naar de FAQ techniek
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BELANGRIJKSTE REDEN ──────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="mb-10">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Waarom {data.name}</p>
            <h2
              className="font-bold text-[#2D2D2D] text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              De belangrijkste redenen om te kiezen.
            </h2>
            <p className="text-[#777777] text-base mt-3 max-w-[520px]">{data.bestFor}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.reasons.map((r) => (
              <div key={r.title} className="bg-white rounded p-6 border border-[#EBEBEB]">
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          {/* Zo neemt u deel */}
          <div className="mt-10 rounded-lg bg-[#F5F5F2] border border-[#E8E8E4] p-7 max-w-[760px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">Zo neemt u deel</p>
            <p className="text-[#545454] leading-relaxed">{data.howitworks}</p>
          </div>
        </div>
      </section>

      {/* ── VOORBEELDEN (placeholder) ────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-y border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Voorbeelden</p>
          <h2
            className="font-bold text-[#2D2D2D] text-balance mb-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Events die wij op {data.name} draaiden.
          </h2>
          <p className="text-[#777777] text-base max-w-[520px]">
            Deze sectie vullen we met echte voorbeelden uit onze praktijk — inclusief, waar mogelijk,
            events die we op {data.name} hebben verzorgd.
          </p>
        </div>
      </section>

      {/* ── IN-MEETING SUPPORT ───────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
            <div>
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">In-meeting support</p>
              <h2
                className="font-bold text-[#2D2D2D] text-balance mb-5"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Een goede tool is niets zonder goede begeleiding.
              </h2>
              <p className="text-[#545454] leading-relaxed mb-5">
                Elk platform kan haperen: iemand vindt de link niet, de microfoon doet het niet, het
                beeld blijft zwart. Juist op dat moment maakt live begeleiding het verschil tussen een
                soepele bijeenkomst en een stroeve. Wij zitten er tijdens uw meeting bij — als host,
                producer of tech-support — zodat u zich op de inhoud kunt richten.
              </p>
              <Link
                href="/nl/technologie/faq"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2D2D2D] border-b-2 border-[#EEBE3D] pb-0.5 hover:border-[#2D2D2D] transition-colors"
              >
                Bekijk de FAQ techniek & how-to →
              </Link>
            </div>
            <div className="bg-[#2D2D2D] rounded-lg p-7">
              <p className="text-white/50 text-xs font-bold uppercase tracking-wide mb-3">Support tijdens uw meeting</p>
              <p className="text-white text-lg font-bold mb-2">+31 6 33 03 47 07</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Een bijeenkomst met begeleiding van MeetingMasters? Loopt er iets vast, bel dan direct
                ons supportnummer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Q&A (placeholder) ────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-t border-[#E8E8E4] py-16 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Vragen over {data.name}</p>
          <h2
            className="font-bold text-[#2D2D2D] text-balance mb-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Veelgestelde vragen.
          </h2>
          <p className="text-[#777777] text-base max-w-[520px] mb-6">
            De tool-specifieke Q&amp;A's vullen we aan vanuit de bestaande FAQ's en veelgezochte vragen.
          </p>
          <Link
            href="/nl/technologie/faq"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2D2D2D] border-b-2 border-[#EEBE3D] pb-0.5 hover:border-[#2D2D2D] transition-colors"
          >
            Naar de volledige FAQ techniek →
          </Link>
        </div>
      </section>

      {/* ── BACK NAV ─────────────────────────────────────────────────── */}
      <section className="bg-white py-10 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/technologie" className="text-[#888888] text-sm font-semibold hover:text-[#2D2D2D] transition-colors">
            ← Terug naar Technologie
          </Link>
        </div>
      </section>
    </>
  );
}
