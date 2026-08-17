import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PlatformKeuze, { type Platform } from "@/components/ui/PlatformKeuze";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = {
  title: "Waar wij mee werken: platforms en tools | MeetingMasters",
  description:
    "De platforms waarmee wij online bijeenkomsten bouwen: SpatialChat, Zoom, Zoom Events en Teams, met Miro, Mentimeter, Kahoot en streamAlive erbij.",
};

/**
 * Twee soorten, en dat onderscheid is het punt van deze pagina:
 *
 * - PLATFORMS zijn de omgeving waarin de bijeenkomst plaatsvindt. Je kiest er
 *   één. Vier op een rij, per stuk droog: waar het sterk in is, voor welke
 *   groep, en wanneer wij het inzetten.
 * - TOOLS zetten wij ernáást om interactie en samenwerking te verhogen.
 */

const PLATFORMS: Platform[] = [
  {
    naam: "Microsoft Teams",
    bestand: "teams",
    sterk: "Intern dagelijks overleg",
    groep: "0 – 49",
    wanneer: "Als je organisatie erop draait",
    body:
      "Zit al in je Microsoft-omgeving en aan je agenda vast, dus voor intern overleg scheelt het een extra link en een extra account. Je documenten zijn bij de hand en chat en vergadering lopen door elkaar heen. Voor deelnemers van buiten je organisatie is het minder soepel. Dit is een werkplatform, geen events platform.",
    accent: "border-t-[#5B5AA6]",
  },
  {
    naam: "Zoom",
    bestand: "zoom",
    sterk: "Overleg en events in grotere groepen",
    groep: "tot ~300",
    wanneer: "Zakelijk overleg met strakke regie",
    body:
      "Stabiel, breed bekend en door vrijwel iedereen zonder uitleg te gebruiken. Breakout rooms werken betrouwbaar en opnemen is eenvoudig. Wij zetten de instellingen vooraf goed — wachtkamer, rechten, opnames — zodat je daar tijdens de bijeenkomst niet aan hoeft te denken.",
    accent: "border-t-[#2C6FA6]",
  },
  {
    naam: "Zoom Events",
    bestand: "zoom-events",
    sterk: "Grote events en congressen",
    groep: "vanaf ~300",
    wanneer: "Bij meerdaagse of parallelle programma's",
    body:
      "Registratie vooraf, meerdere sessies naast elkaar, een lobby en een programma waar deelnemers zelf doorheen lopen. Je weet vooraf wie er komt en achteraf wie waar is geweest. Heldere layouts en mooi design met gepersonaliseerde agenda's. Gebouwd voor schaal, dus voor een kleine sessie is het meer dan nodig.",
    accent: "border-t-[#2C6FA6]",
  },
  {
    naam: "SpatialChat",
    bestand: "spatialchat",
    sterk: "Webinars en events met persoonlijke interactie",
    groep: "tot ~600",
    wanneer: "Als contact het doel is",
    body:
      "Je hoort en ziet mensen naarmate je dichterbij komt, dus je kunt echt naar iemand toe lopen. Je kunt aanschuiven bij een tafel, iemand even apart nemen, napraten na afloop. Draait in de browser zonder installatie, en achtergronden, kamers en indeling maken we op maat.",
    accent: "border-t-[#EEBE3D]",
    badge: { label: "Nieuw", href: "/nl/technologie/spatialchat" },
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


/**
 * Veelgestelde vragen, in dezelfde vorm als op de event-pagina's: zes in
 * beeld, de rest achter "Meer antwoorden?".
 *
 * De onderwerpen zijn gekozen op wat mensen online daadwerkelijk zoeken rond
 * online vergaderen — het verschil tussen Zoom en Teams, deelnemersaantallen,
 * webinar versus meeting, installeren en accounts, opnames, en privacy. Waar
 * aantallen per licentie verschillen, staat dat er ook bij; een hard getal
 * dat later niet klopt kost meer dan het oplevert.
 */
const PLATFORM_FAQ = [
  {
    q: "Wat is het verschil tussen Zoom en Microsoft Teams?",
    a: "Teams is een werkplatform: het zit vast aan je Microsoft 365-omgeving, je agenda en je documenten, en is gemaakt voor intern overleg. Zoom is meer een losse vergaderapplicatie die door vrijwel iedereen zonder uitleg te gebruiken is, ook door mensen buiten je organisatie. Voor een bijeenkomst met externe deelnemers is Zoom daardoor meestal soepeler; voor dagelijks intern werk is Teams praktischer.",
  },
  {
    q: "Hoeveel deelnemers kunnen er meedoen aan een online bijeenkomst?",
    a: "Dat hangt af van het platform én van de licentie. Bij Zoom en Teams loopt een gewone vergadering doorgaans tot een paar honderd deelnemers; met een uitbreiding of een webinarlicentie gaat dat verder omhoog. In SpatialChat werken wij met groepen tot ongeveer 600. Wij regelen de juiste licentie, dus je hoeft dit zelf niet uit te zoeken.",
  },
  {
    q: "Wat is het verschil tussen een webinar en een online meeting?",
    a: "In een meeting kan iedereen praten en in beeld komen. In een webinar zenden een paar sprekers uit en kijkt de rest mee; deelnemers stellen vragen via de chat of de Q&A. Een webinar schaalt daardoor veel verder, maar er ontstaat geen gesprek. Wil je allebei, dan combineren we ze: plenair uitzenden en daarna in kleinere ruimtes doorpraten.",
  },
  {
    q: "Moeten deelnemers iets installeren of een account aanmaken?",
    a: "Bij SpatialChat niet: dat draait volledig in de browser en je vult alleen je naam in. Bij Zoom en Teams kun je meestal ook via de browser meedoen — kies dan “deelnemen in deze browser” — al werkt de app wat prettiger. Voor deelnemers van buiten een organisatie kiezen wij bewust de route zonder installatie.",
  },
  {
    q: "Welk platform past bij een groot online event?",
    a: "Gaat het om uitzenden naar een groot publiek met registratie vooraf en meerdere sessies naast elkaar, dan is Zoom Events daarvoor gebouwd. Wil je dat mensen elkaar ook echt ontmoeten — aanschuiven, napraten, rondlopen — dan werkt SpatialChat beter. De keuze volgt uit wat er moet gebeuren, niet uit het aantal deelnemers alleen.",
  },
  {
    q: "Kan een online bijeenkomst worden opgenomen?",
    a: "Ja, op alle platforms waarmee wij werken. De organisator zet dat aan en moet het vooraf melden; deelnemers zien tijdens de opname een melding in beeld. Wij spreken vooraf af wat er opgenomen wordt en wat niet — breakouts en informele ruimtes laten we standaard buiten de opname.",
  },
];

const PLATFORM_FAQ_MEER = [
  {
    q: "Hoe zit het met privacy en de AVG?",
    a: "Elk platform publiceert zelf waar data staat, hoe het versleuteld is en welke certificeringen er zijn; wij verwijzen daar rechtstreeks naar, zodat je IT-afdeling het kan controleren. SpatialChat draait bijvoorbeeld op servers in Ierland, met versleuteling onderweg en in opslag, en er is een verwerkersovereenkomst beschikbaar.",
  },
  {
    q: "Wat zijn breakout rooms en wanneer gebruik je ze?",
    a: "Breakout rooms zijn kleine kamers waarin een deel van de groep apart doorpraat. Ze werken goed zodra een groep te groot wordt om iedereen aan het woord te laten: in een groepje van vier praat vrijwel iedereen mee, in een groep van veertig niemand. Wij ontwerpen vooraf wie waar terechtkomt en wat de opdracht is.",
  },
  {
    q: "Kunnen we meerdere tools tegelijk gebruiken?",
    a: "Ja, en dat doen we vaak. Het platform is de ruimte; tools als Miro, Mentimeter of Kahoot zetten we erbij voor samenwerken, peilen of energie. Deelnemers merken daar weinig van: ze klikken op één link en wij zorgen dat de rest klaarstaat.",
  },
  {
    q: "Werkt het ook op een telefoon of tablet?",
    a: "Meedoen kan meestal wel, maar het is zelden prettig: het scherm is klein en niet alle functies werken. Voor een bijeenkomst waarin ook samengewerkt wordt, adviseren we een laptop of computer. Als noodoplossing wanneer je laptop dwarsligt, is de telefoon prima.",
  },
  {
    q: "Wat kost een online meetingplatform?",
    a: "Voor korte, kleine vergaderingen heeft vrijwel elk platform een gratis variant, meestal met een tijdslimiet. Zodra het om grotere groepen, registratie of een eigen ingerichte ruimte gaat, is er een betaalde licentie nodig. Bij een begeleide bijeenkomst zit de licentie bij ons in het voorstel; je hoeft zelf niets aan te schaffen.",
  },
  {
    q: "Kunnen jullie ook werken met het platform dat wij al hebben?",
    a: "Ja. Draait je organisatie op Teams of Zoom, dan werken we daar gewoon in mee. Soms is dat het verstandigste: de winst zit dan in hoe de bijeenkomst is opgebouwd, niet in een andere tool. We zeggen het eerlijk als een ander platform wél verschil maakt.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...PLATFORM_FAQ, ...PLATFORM_FAQ_MEER].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function ToolsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-[#2D2D2D] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/platforms-hero-v2.webp"
            alt="Deelnemer in een online bijeenkomst met de deelnemers en de cijfers naast elkaar op het scherm"
            fill priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/90 via-[#2D2D2D]/45 lg:via-[#2D2D2D]/20 to-transparent" />
        </div>

        <div className="relative max-w-content mx-auto px-8 md:px-16 lg:px-20 py-16 md:py-24 lg:py-28">
          <div className="max-w-[620px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Technologie</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)" }}
            >
              Elk platform heeft zijn plek.
            </h1>
            <p className="text-white/80 text-base leading-relaxed">
              Wij kiezen bewust welk instrument wanneer past:
              <br />
              bij je doel, je groep en wat je deelnemers gewend zijn.
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

          <PlatformKeuze platforms={PLATFORMS} standaard="spatialchat" />
        </div>
      </section>

      {/* ── TOOLS ────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[720px] mb-9">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Tools</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Meer samenwerking en interactie
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Om binnen bijeenkomsten de interactie en samenwerking te verhogen zetten we soms externe
              tools in. Deze combineren we met het platform; je kiest ze niet zelf.
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

          <p className="text-[#545454] leading-relaxed mt-8 max-w-[720px]">
            Voor meer speelse interactie hebben we ook een{" "}
            <Link href="/nl/games-tools#tools" className="text-[#28A8AA] font-semibold hover:underline">
              set eigen tools
            </Link>{" "}
            ontworpen. Die kunnen we ook op maat maken voor jouw bijeenkomst.
          </p>
        </div>
      </section>


      {/* ── VEELGESTELDE VRAGEN ── */}
      <section className="bg-[#F5F5F5] py-12 border-t border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-8 text-center">
            Veelgestelde vragen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PLATFORM_FAQ.map((item) => (
              <div key={item.q}>
                <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          <details className="group max-w-4xl mx-auto mt-10">
            <summary className="flex items-center justify-center gap-2 cursor-pointer list-none text-[#28A8AA] text-sm font-bold hover:text-[#1E8E90] transition-colors">
              <span className="group-open:hidden">Meer antwoorden?</span>
              <span className="hidden group-open:inline">Minder antwoorden</span>
              <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pt-8 border-t border-[#E0E0E0]">
              {PLATFORM_FAQ_MEER.map((item) => (
                <div key={item.q}>
                  <h3 className="text-sm font-bold text-[#2D2D2D] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#545454] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* ── WAT KIES JIJ? ────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-18">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
            <div className="max-w-[620px]">
              <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Wat kies jij?</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Het start met het doel
              </h2>
              <p className="text-[#545454] leading-relaxed mb-4">
                Wat moet er aan het einde van je bijeenkomst zijn gebeurd? Moet er iets besloten worden,
                of moeten mensen elkaar leren kennen? Komt de groep vaker samen, of is dit eenmalig? En
                wat zijn je deelnemers gewend — zitten ze de hele dag al in vergaderingen, of is online
                voor hen juist ongemakkelijk?
              </p>
              <p className="text-[#545454] leading-relaxed">
                Uit die antwoorden volgt de vorm, en pas daarna het platform. Soms is dat de tool die je
                al hebt, en is de winst vooral te halen in hoe je de bijeenkomst opbouwt. Soms is er iets
                anders nodig, omdat wat je wilt bereiken in een grid simpelweg niet ontstaat.
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
