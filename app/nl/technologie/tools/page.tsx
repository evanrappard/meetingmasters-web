import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Waar wij mee werken — SpatialChat, Zoom, Teams, Miro | MeetingMasters",
  description:
    "De platforms en tools waarmee MeetingMasters online bijeenkomsten bouwt: SpatialChat, Zoom, Zoom Events en Microsoft Teams, gecombineerd met Miro, Mentimeter, Kahoot, streamAlive en Vote Company.",
};

/**
 * Twee soorten, en dat onderscheid is het punt van deze pagina:
 *
 * - PLATFORMS zijn de omgeving waarin de bijeenkomst plaatsvindt. Je kiest er
 *   één. Vier op een rij, per stuk droog: waar het sterk in is, voor welke
 *   groep, en wanneer wij het inzetten.
 * - TOOLS zetten wij ernáást om interactie en samenwerking te verhogen.
 */

type Platform = {
  naam: string;
  bestand: string;
  sterk: string;
  groep: string;
  wanneer: string;
  body: string;
  accent: string;
  vlak: string;
  /** Optioneel schermbeeld boven de kaart. Nog aan te leveren. */
  beeld?: string;
  link?: { label: string; href: string };
};

const PLATFORMS: Platform[] = [
  {
    naam: "Microsoft Teams",
    bestand: "teams",
    sterk: "Intern dagelijks overleg",
    groep: "tot ~300",
    wanneer: "Als je organisatie erop draait",
    body:
      "Zit al in je Microsoft-omgeving en aan je agenda vast, dus voor intern overleg scheelt het een extra link en een extra account. Je documenten zijn bij de hand en chat en vergadering lopen door elkaar heen. Voor deelnemers van buiten je organisatie is het minder soepel.",
    accent: "border-t-[#5B5AA6]",
    vlak: "bg-white",
  },
  {
    naam: "Zoom",
    bestand: "zoom",
    sterk: "Overleg en grote plenaire sessies",
    groep: "tot ~300",
    wanneer: "Bij strak, inhoudelijk overleg",
    body:
      "Stabiel, breed bekend en door vrijwel iedereen zonder uitleg te gebruiken. Breakout rooms werken betrouwbaar en opnemen is eenvoudig. Wij zetten de instellingen vooraf goed — wachtkamer, rechten, opnames — zodat je daar tijdens de bijeenkomst niet aan hoeft te denken.",
    accent: "border-t-[#2C6FA6]",
    vlak: "bg-white",
  },
  {
    naam: "Zoom Events",
    bestand: "zoom-events",
    sterk: "Congressen met registratie",
    groep: "vanaf ~300",
    wanneer: "Bij meerdaagse of parallelle programma's",
    body:
      "Registratie vooraf, meerdere sessies naast elkaar, een lobby en een programma waar deelnemers zelf doorheen lopen. Je weet vooraf wie er komt en achteraf wie waar is geweest. Gebouwd voor schaal, dus voor een kleine sessie is het meer dan nodig.",
    accent: "border-t-[#2C6FA6]",
    vlak: "bg-white",
  },
  {
    naam: "SpatialChat",
    bestand: "spatialchat",
    sterk: "Ontmoeting, events en virtual offices",
    groep: "tot ~600",
    wanneer: "Als contact het doel is",
    body:
      "Je hoort en ziet mensen naarmate je dichterbij komt, dus je kunt echt naar iemand toe lopen. Daardoor ontstaan gesprekken die in een grid niet ontstaan: aanschuiven bij een tafel, iemand even apart nemen, napraten na afloop. Draait in de browser zonder installatie, en achtergronden, kamers en indeling maken we op maat.",
    accent: "border-t-[#EEBE3D]",
    vlak: "bg-[#FFFDF5]",
    link: { label: "Lees meer over SpatialChat", href: "/nl/technologie/spatialchat" },
  },
];

type Tool = { naam: string; bestand: string; sterk: string; body: string; beeld?: string };

const TOOLS: Tool[] = [
  {
    naam: "Miro",
    bestand: "miro",
    sterk: "Samen denken en oogsten",
    body:
      "Het digitale whiteboard waar we het meeste mee doen. Post-its, tijdlijnen en canvassen; iedereen werkt tegelijk op hetzelfde bord en aan het eind heb je de opbrengst meteen op papier. Wij bouwen het bord vooraf op, zodat deelnemers alleen nog hoeven te schrijven.",
  },
  {
    naam: "Mentimeter",
    bestand: "mentimeter",
    sterk: "Peilen en prioriteren",
    body:
      "Peilingen, woordwolken en stemmingen tijdens een presentatie. Deelnemers antwoorden op hun telefoon en zien de uitslag live verschijnen. Zo laat je een grote groep in tien seconden aan het woord.",
  },
  {
    naam: "Kahoot",
    bestand: "kahoot",
    sterk: "Energie en kennis testen",
    body:
      "De quiz die iedereen kent. Kort, competitief en effectief om de aandacht terug te halen na een uur luisteren. Wij maken de vragen op maat voor jouw organisatie.",
  },
  {
    naam: "streamAlive",
    bestand: "streamalive",
    sterk: "Iedereen aan het woord bij grote groepen",
    body:
      "Haalt reacties uit de chat en zet ze live op het scherm — als kaart, wolk of wedstrijdje. Handig wanneer niet iedereen kan praten, maar wel iedereen iets wil zeggen.",
  },
  {
    naam: "Vote Company",
    bestand: "votecompany",
    sterk: "Stemmen dat juridisch klopt",
    body:
      "Gewogen stemrecht, geheime stemming en een traceerbare uitslag die notarieel bruikbaar is. Zetten we in bij ledenvergaderingen en bestuursvergaderingen, waar de uitkomst formeel moet standhouden.",
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
      className={`${groot ? "h-12" : "h-9"} w-auto max-w-full object-contain object-left`}
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
            <p className="text-[#EEBE3D] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Waar wij mee werken</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)" }}
            >
              Elk platform heeft zijn plek.
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              Wij kiezen bewust welk instrument wanneer past — bij je doel, je groep en wat je
              deelnemers gewend zijn.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ────────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-2">
              Vier platforms, vier doelen
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Hier vindt je bijeenkomst plaats. Eén ervan kies je; de rest is dan niet nodig.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PLATFORMS.map((p) => (
              <article
                key={p.bestand}
                className={`rounded-lg border border-[#EBEBEB] border-t-4 ${p.accent} ${p.vlak} p-6 flex flex-col`}
              >
                {p.beeld && (
                  <div className="-mx-6 -mt-6 mb-5 aspect-[16/10] overflow-hidden rounded-t">
                    <img src={p.beeld} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <Logo bestand={p.bestand} naam={p.naam} groot />

                <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide mt-5 mb-1">Sterk in</p>
                <p className="font-bold text-[#2D2D2D] leading-snug mb-4">{p.sterk}</p>

                <p className="text-[15px] text-[#545454] leading-relaxed flex-1">{p.body}</p>

                <dl className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-[#EFEFED] text-[13px]">
                  <div>
                    <dt className="text-[#AAAAAA] font-semibold uppercase tracking-wide text-[10px] mb-0.5">Groep</dt>
                    <dd className="text-[#2D2D2D] font-semibold">{p.groep}</dd>
                  </div>
                  <div>
                    <dt className="text-[#AAAAAA] font-semibold uppercase tracking-wide text-[10px] mb-0.5">Wanneer</dt>
                    <dd className="text-[#2D2D2D] font-semibold leading-snug">{p.wanneer}</dd>
                  </div>
                </dl>

                {p.link && (
                  <Link href={p.link.href} className="mt-4 text-[#28A8AA] text-sm font-bold hover:underline">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">De tools</h2>
            <p className="text-[#545454] leading-relaxed mb-3">
              Om binnen bijeenkomsten de interactie en samenwerking te verhogen zetten we soms externe
              tools in. Deze combineren we met het platform; je kiest ze niet zelf.
            </p>
            <p className="text-[#545454] leading-relaxed">
              Voor meer speelse interactie hebben we ook een{" "}
              <Link href="/nl/games-tools#tools" className="text-[#28A8AA] font-semibold hover:underline">
                set eigen tools
              </Link>{" "}
              ontworpen. Die kunnen we ook op maat maken voor jouw bijeenkomst.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map((t) => (
              <article key={t.bestand} className="rounded-lg border border-[#EBEBEB] bg-white p-6 overflow-hidden">
                {t.beeld && (
                  <div className="-mx-6 -mt-6 mb-5 aspect-[16/10] overflow-hidden">
                    <img src={t.beeld} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <Logo bestand={t.bestand} naam={t.naam} />
                <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide mt-5 mb-1">Sterk in</p>
                <p className="font-bold text-[#2D2D2D] leading-snug mb-3">{t.sterk}</p>
                <p className="text-sm text-[#545454] leading-relaxed">{t.body}</p>
              </article>
            ))}

            <article className="rounded-lg border border-dashed border-[#D6D6D2] bg-[#FAFAF9] p-6 grid place-items-center text-center">
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

      {/* ── WAT KIES JIJ? ────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-18">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
            <div className="max-w-[620px]">
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Wat kies jij?</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Wij beginnen niet bij de tool, maar bij je doel
              </h2>
              <p className="text-[#545454] leading-relaxed mb-4">
                Wat moet er aan het einde van je bijeenkomst zijn gebeurd? Moet er iets besloten worden,
                of moeten mensen elkaar leren kennen? Komt de groep vaker samen, of is dit eenmalig? En
                wat zijn je deelnemers gewend — zitten ze de hele dag al in vergaderingen, of is online
                voor hen juist ongemakkelijk?
              </p>
              <p className="text-[#545454] leading-relaxed mb-4">
                Uit die antwoorden volgt de vorm, en pas daarna het platform. Soms is dat de tool die je
                al hebt, en is de winst vooral te halen in hoe je de bijeenkomst opbouwt. Soms is er iets
                anders nodig, omdat wat je wilt bereiken in een grid simpelweg niet ontstaat.
              </p>
              <p className="text-[#545454] leading-relaxed">
                Dat gesprek voeren we graag, ook als je nog niet weet wat je zoekt. We denken mee vanuit
                wat het moet opleveren — niet vanuit wat wij toevallig in huis hebben.
              </p>
            </div>

            <div className="bg-[#F7F7F5] rounded-lg p-7 lg:w-[320px] shrink-0">
              <p className="font-bold text-[#2D2D2D] text-lg leading-snug mb-2">Even sparren?</p>
              <p className="text-sm text-[#545454] leading-relaxed mb-5">
                In een kort gesprek weten we meestal al welke richting past bij je bijeenkomst.
              </p>
              <Link
                href="/nl/expert-advies"
                className="block text-center bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
              >
                Vraag advies →
              </Link>
              <Link
                href="/nl/technologie/hulp"
                className="block text-center mt-3 text-[#545454] text-sm font-semibold px-6 py-3 border border-[#D2D2D0] rounded hover:border-[#2D2D2D] transition-colors"
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
