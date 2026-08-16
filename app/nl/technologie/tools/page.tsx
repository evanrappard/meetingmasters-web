import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Waar wij mee werken — SpatialChat, Zoom, Teams, Miro | MeetingMasters",
  description:
    "De platforms en tools waarmee MeetingMasters online bijeenkomsten bouwt: SpatialChat, Zoom, Zoom Events en Microsoft Teams, gecombineerd met Miro, Mentimeter, Kahoot, streamAlive en Vote Company.",
};

/**
 * Twee soorten, en dat onderscheid is het hele punt van de pagina:
 *
 * - PLATFORMS zijn de omgeving waarin de bijeenkomst plaatsvindt. Je kiest er
 *   één. Die krijgen daarom een ruime beschrijving, inclusief waar ze ophouden.
 * - TOOLS zetten wij ernaast om het programma te laten werken. Die kies je niet
 *   zelf, dus een paar regels volstaat.
 */

type Platform = {
  naam: string;
  bestand: string;
  claim: string;
  body: string;
  grens: string;
  voorstel?: boolean;
  link?: { label: string; href: string };
};

const PLATFORMS: Platform[] = [
  {
    naam: "SpatialChat",
    bestand: "spatialchat",
    claim: "Ontmoeten in plaats van vergaderen",
    body:
      "Je hoort mensen harder naarmate je dichterbij staat, dus je kunt echt naar iemand toe lopen. Daardoor ontstaan gesprekken die in een grid nooit ontstaan: even bijpraten na afloop, aanschuiven bij een tafel, iemand apart nemen. Het draait volledig in de browser — deelnemers klikken op een link en zijn er, zonder installatie of account. Achtergronden, kamers en indeling maken we op maat, zodat het voelt als jouw ruimte en niet als een standaardomgeving.",
    grens: "Voor kort, strak eenrichtingsoverleg is het meer dan nodig.",
    voorstel: true,
    link: { label: "Lees het hele verhaal over SpatialChat", href: "/nl/technologie/spatialchat" },
  },
  {
    naam: "Zoom",
    bestand: "zoom",
    claim: "Stabiel en door iedereen herkend",
    body:
      "Voorspelbaar, betrouwbaar en bij vrijwel iedereen bekend. Als het gesprek strak en to the point moet zijn, is Zoom een prima keus. Breakout rooms werken goed, opnemen is eenvoudig, en bijna niemand hoeft uit te zoeken hoe het werkt. Wij regelen de instellingen vooraf — wachtkamer, rechten, opnames — zodat je daar tijdens de bijeenkomst niet mee bezig bent.",
    grens: "Iedereen blijft in zijn eigen vakje; spontane ontmoeting komt er niet vanzelf.",
    link: { label: "Meer over Zoom", href: "/nl/technologie/zoom" },
  },
  {
    naam: "Microsoft Teams",
    bestand: "teams",
    claim: "Al aanwezig in je organisatie",
    body:
      "Staat al op de laptop van je collega's en zit vast aan je agenda. Voor intern overleg scheelt dat een hoop gedoe: geen extra link, geen extra account, en je documenten zijn bij de hand. Draait jouw organisatie op Microsoft, dan werken we daar graag in mee.",
    grens: "Externe deelnemers lopen vaker tegen drempels aan, en voor events is het niet gebouwd.",
    link: { label: "Meer over Teams", href: "/nl/technologie/teams" },
  },
  {
    naam: "Zoom Events",
    bestand: "zoom-events",
    claim: "Voor congressen met een programma",
    body:
      "Registratie vooraf, meerdere sessies naast elkaar, een lobby en een programma waar deelnemers zelf doorheen lopen. Schaalt naar honderden mensen zonder dat het rommelig wordt, en je weet vooraf wie er komt. Handig als je achteraf wilt weten wie waar is geweest.",
    grens: "Zwaar geschut voor een sessie van twintig man.",
    link: { label: "Meer over Zoom Events", href: "/nl/technologie/zoom-events" },
  },
];

const TOOLS = [
  {
    naam: "Miro",
    bestand: "miro",
    body:
      "Het digitale whiteboard waar we het meeste mee doen. Post-its, tijdlijnen, canvassen — iedereen werkt tegelijk op hetzelfde bord, en aan het eind heb je de oogst meteen op papier. Wij bouwen het bord vooraf op, zodat deelnemers alleen nog hoeven te schrijven.",
  },
  {
    naam: "Mentimeter",
    bestand: "mentimeter",
    body:
      "Voor peilingen, woordwolken en stemmingen tijdens een presentatie. Deelnemers antwoorden op hun telefoon en zien de uitslag live verschijnen. Goed om een grote groep in tien seconden aan het woord te laten.",
  },
  {
    naam: "Kahoot",
    bestand: "kahoot",
    body:
      "De quiz die iedereen kent. Kort, competitief en verrassend effectief om de energie terug te halen na een uur luisteren. Wij maken de vragen op maat voor jouw organisatie.",
  },
  {
    naam: "streamAlive",
    bestand: "streamalive",
    body:
      "Haalt reacties uit de chat en zet ze live op het scherm — als kaart, wolk of wedstrijdje. Werkt goed bij grote groepen waar niet iedereen kan praten, maar wel iedereen iets wil zeggen.",
  },
  {
    naam: "Vote Company",
    bestand: "votecompany",
    body:
      "Voor stemmingen die juridisch moeten kloppen: gewogen stemrecht, geheime stemming en een traceerbare uitslag die notarieel bruikbaar is. Zetten we in bij ledenvergaderingen en bestuursvergaderingen.",
  },
];

function Logo({ bestand, naam, groot = false }: { bestand: string; naam: string; groot?: boolean }) {
  return (
    <img
      src={`/images/logos/tools/${bestand}.webp`}
      alt={naam}
      width={440}
      height={176}
      loading="lazy"
      className={`${groot ? "h-14" : "h-10"} w-auto max-w-full object-contain object-left`}
    />
  );
}

export default function ToolsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-14 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <Link href="/nl/technologie/hulp" className="text-white/40 text-xs font-semibold hover:text-white transition-colors">
            ← Tech hulp
          </Link>
          <div className="max-w-[680px] mt-6">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Waar wij mee werken</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)" }}
            >
              Wij zijn niet aan één tool getrouwd.
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              We kiezen wat past bij je doel, je groep en wat je deelnemers aankunnen — en we beheersen ze
              goed genoeg om te weten waar ze ophouden.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ────────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[720px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-2">
              De platforms — hier vindt je bijeenkomst plaats
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Vier omgevingen waarin een groep samenkomt. Eén ervan kies je; de rest is dan niet nodig.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PLATFORMS.map((p) => (
              <article
                key={p.bestand}
                className={`rounded-xl border p-6 sm:p-7 ${
                  p.voorstel ? "border-[#28A8AA] bg-[#F3FBFB]" : "border-[#EBEBEB] bg-white"
                }`}
              >
                <Logo bestand={p.bestand} naam={p.naam} groot />
                {p.voorstel && (
                  <span className="inline-block mt-4 bg-[#28A8AA] text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full">
                    Ons voorstel
                  </span>
                )}
                <h3 className="text-lg font-bold text-[#2D2D2D] mt-4 mb-2">{p.claim}</h3>
                <p className="text-[15px] text-[#545454] leading-relaxed">{p.body}</p>
                <p className="text-sm text-[#8A9493] italic mt-3">Waar het ophoudt: {p.grens}</p>
                {p.link && (
                  <Link href={p.link.href} className="inline-block mt-4 text-[#28A8AA] text-sm font-bold hover:underline">
                    {p.link.label} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[720px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-2">
              De tools — hiermee maken we het levendig
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Deze combineren we mét een platform. Je kiest er niet één; we zetten in wat het programma
              nodig heeft.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map((t) => (
              <article key={t.bestand} className="rounded-xl border border-[#EBEBEB] bg-white p-6">
                <Logo bestand={t.bestand} naam={t.naam} />
                <p className="text-sm text-[#545454] leading-relaxed mt-4">{t.body}</p>
              </article>
            ))}

            <article className="rounded-xl border border-dashed border-[#D6D6D2] bg-[#FAFAF9] p-6 grid place-items-center text-center">
              <div>
                <p className="font-bold text-[#2D2D2D] mb-1">Binnenkort meer</p>
                <p className="text-sm text-[#8A9493] leading-relaxed">
                  Er komen tools bij voor opnames en transcripten.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── AFSLUITING ───────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              En wat moet jij nu kiezen?
            </h2>
            <p className="text-[#545454] leading-relaxed mb-6">
              Waarschijnlijk niets. Vertel ons wat je met je bijeenkomst wilt bereiken, dan stellen wij de
              combinatie voor. In negen van de tien gevallen komen we uit bij SpatialChat met Miro erbij —
              maar niet omdat het onze standaard is. Omdat het meestal het beste werkt.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nl/expert-advies"
                className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                Vraag tooladvies →
              </Link>
              <Link
                href="/nl/technologie/hulp"
                className="text-[#545454] text-sm font-semibold px-6 py-3 border border-[#D2D2D0] rounded hover:border-[#2D2D2D] transition-colors"
              >
                Ik heb nú hulp nodig
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
