import type { Metadata } from "next";
import Link from "next/link";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { HUBSPOT_PORTAL_ID, HUBSPOT_FORMS } from "@/lib/hubspot-forms";

export const metadata: Metadata = {
  title: "Downloads — publicaties en handleidingen | MeetingMasters",
  description:
    "Onze publicaties over online samenkomen, plus praktische handleidingen voor deelnemers aan een online bijeenkomst. Gratis te downloaden.",
};

/**
 * Twee soorten, en dat onderscheid bepaalt de volgorde:
 *
 * - PUBLICATIES zijn waar we over nadenken. Die haalt iemand op omdat het
 *   onderwerp hem bezighoudt.
 * - HANDLEIDINGEN zijn praktisch. Die haalt iemand op omdat hij ze nu nodig
 *   heeft, meestal om door te sturen naar deelnemers.
 *
 * `extern: true` betekent dat de download via een HubSpot-landingspagina loopt
 * (met formulier). Alles zonder die vlag is een pdf die hier staat.
 */

type Item = {
  titel: string;
  soort: string;
  body: string;
  href: string;
  actie: string;
  extern?: boolean;
};

const PUBLICATIES: Item[] = [
  {
    titel: "Het MeetingMasters-manifest",
    soort: "Manifest · pdf",
    body:
      "Waar wij voor staan, in het kort. Over waarom hoe we elkaar ontmoeten ertoe doet, en wat er misgaat als een bijeenkomst een agendapunt wordt in plaats van een moment.",
    href: "/downloads/meetingmasters-manifest.pdf",
    actie: "Download het manifest",
  },
];

const HANDLEIDINGEN: Item[] = [
  {
    titel: "Deelnemen via SpatialChat",
    soort: "Handleiding · pdf",
    body:
      "Stap voor stap voor deelnemers: binnenkomen, je weg vinden in de ruimte, en beeld en geluid goed zetten. Handig om vooraf mee te sturen.",
    href: "/downloads/spatialchat-instructies-deelnemer.pdf",
    actie: "Download de handleiding",
  },
  {
    titel: "Deelnemen via Zoom",
    soort: "Handleiding · pdf",
    body:
      "Wat een deelnemer moet weten om zonder gedoe binnen te komen en mee te doen. Ook bruikbaar als bijlage bij je uitnodiging.",
    href: "/downloads/zoom-instructies-deelnemer.pdf",
    actie: "Download de handleiding",
  },
];

function Kaart({ item }: { item: Item }) {
  const inhoud = (
    <>
      <p className="text-[10px] font-bold text-[#AAAAAA] uppercase tracking-wide mb-2">{item.soort}</p>
      <h3 className="font-bold text-[#2D2D2D] text-lg mb-2 leading-snug group-hover:text-[#EEBE3D] transition-colors">
        {item.titel}
      </h3>
      <p className="text-sm text-[#545454] leading-relaxed mb-5 flex-1">{item.body}</p>
      <span className="text-[#28A8AA] text-sm font-bold transition-all group-hover:text-[#D4A835] group-hover:tracking-wide">
        {item.actie} {item.extern ? "↗" : "→"}
      </span>
    </>
  );
  const stijl =
    "group flex flex-col rounded border border-[#EBEBEB] bg-white p-6 hover:bg-[#FFFBEE] hover:border-[#EEBE3D]/50 hover:shadow-md transition-all";

  return item.extern ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={stijl}>
      {inhoud}
    </a>
  ) : (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={stijl}>
      {inhoud}
    </a>
  );
}

export default function DownloadsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-14 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[640px]">
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">Downloads</p>
            <h1
              className="font-bold text-white leading-[1.05] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.1rem)" }}
            >
              Meenemen, doorsturen, nalezen.
            </h1>
            <p className="text-white/75 text-base leading-relaxed">
              Onze publicaties over online samenkomen, en de handleidingen die je deelnemers vooraf
              kunt sturen.
            </p>
          </div>
        </div>
      </section>


      {/* ── VERGADERMACHT ──
          Het formulier van de HubSpot-landingspagina staat hier ingesloten, in
          plaats van dat we mensen naar hs-sites sturen. Zelfde formulier en
          dezelfde leads, maar in de stijl van de site en zonder de sprong naar
          een ander domein. */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
            <div className="max-w-[620px]">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
                Onze publicatie
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
                Vergadermacht
              </h2>
              <p className="text-[#545454] leading-relaxed mb-4">
                Over hoe bijeenkomsten werkelijk werken: wie er spreekt, wie er zwijgt, en wat dat
                doet met wat er wordt besloten. Vergaderen is geen neutrale bezigheid — er wordt
                macht in verdeeld, of je het nu bedoelt of niet.
              </p>
              <p className="text-[#545454] leading-relaxed">
                Vul je gegevens in en je ontvangt de publicatie meteen.
              </p>
            </div>

            <div className="w-full rounded-lg border border-[#EBEBEB] bg-[#F7F7F5] p-6 sm:p-7">
              <p className="font-bold text-[#2D2D2D] mb-4">Ontvang Vergadermacht</p>
              <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORMS.vergadermacht} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PUBLICATIES ──────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Direct te downloaden
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Zonder formulier. Gratis, en bedoeld om door te geven.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PUBLICATIES.map((item) => (
              <Kaart key={item.href} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HANDLEIDINGEN ────────────────────────────────────────────── */}
      <section className="bg-white border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[680px] mb-9">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-3">
              Handleidingen voor deelnemers
            </h2>
            <p className="text-[#545454] leading-relaxed">
              Praktisch, in gewone taal. Stuur ze mee met je uitnodiging, dan hoeft niemand op de dag
              zelf nog iets uit te zoeken.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HANDLEIDINGEN.map((item) => (
              <Kaart key={item.href} item={item} />
            ))}
          </div>

          <p className="text-[#545454] leading-relaxed mt-8 max-w-[680px]">
            Loop je ergens op vast tijdens een bijeenkomst? Op{" "}
            <Link href="/nl/technologie/hulp" className="text-[#28A8AA] font-semibold hover:underline">
              Tech hulp
            </Link>{" "}
            staat per probleem wat je kunt doen.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F5] border-t border-[#EBEBEB] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="max-w-[640px]">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-4">
              Liever even sparren dan lezen?
            </h2>
            <p className="text-[#545454] leading-relaxed mb-6">
              In een kort gesprek weten we meestal al welke richting past bij je bijeenkomst.
            </p>
            <Link
              href="/nl/expert-advies"
              className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
            >
              Vraag advies →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
