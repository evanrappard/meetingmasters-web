import Link from "next/link";
import type { Taal } from "@/lib/talen";

/**
 * Uitleg bij de drie lengtes in de boekingsagenda: wat past er in 20, 30 of 50
 * minuten?
 *
 * HubSpot toont bij de duurknoppen alleen "20 min" en "30 min", zonder een
 * woord over wat dat inhoudt. Wie zelf moet inschatten hoeveel tijd hij nodig
 * heeft, weet dat niet.
 *
 * Dit blok staat daarom op élke plek waar iemand de agenda tegenkomt:
 *
 * - boven de ingesloten kalender op /nl/demo en /en/demo;
 * - naast de link "Kies een moment in de agenda" op de adviespagina. Die link
 *   opent HubSpots eigen boekingspagina in een nieuw tabblad, en daar hebben
 *   wij niets te zeggen — dus moet de uitleg ervóór staan, niet erna.
 *
 * Wil je die tekst in de agenda zelf hebben staan, dan kan dat alleen in
 * HubSpot, in de omschrijving van de boekingspagina.
 */

const TEKST = {
  nl: {
    kop: "We maken graag tijd voor een goed gesprek. Kies wat jou past:",
    duren: [
      { duur: "20 minuten", wat: "Eén vraag, of een korte rondleiding door de ruimte.", wanneer: "Als de vraag scherp is." },
      { duur: "30 minuten", wat: "Kort kennismaken, of een gesprek met een concreet doel.", wanneer: "Als er iets speelt." },
      { duur: "50 minuten", wat: "Een gesprek dat verder komt dan de eerste vraag.", wanneer: "Als het gesprek net begint." },
    ],
    anders: "Andere tijden nodig, of niets vrij op korte termijn? ",
    andersLink: "Neem gewoon even contact op",
    andersHref: "/nl/contact",
  },
  en: {
    kop: "We are glad to make time for a proper conversation. Pick what suits you:",
    duren: [
      { duur: "20 minutes", wat: "One question, or a short tour of the space.", wanneer: "When the question is sharp." },
      { duur: "30 minutes", wat: "A short introduction, or a conversation with a clear aim.", wanneer: "When something is going on." },
      { duur: "50 minutes", wat: "A conversation that gets past the first question.", wanneer: "When the conversation is only starting." },
    ],
    anders: "Need a different length, or nothing free soon? ",
    andersLink: "Just get in touch",
    andersHref: "/en/contact",
  },
} as const;

export default function AgendaUitleg({
  taal = "nl",
  className = "",
}: {
  taal?: Taal;
  className?: string;
}) {
  const t = TEKST[taal === "en" ? "en" : "nl"];

  return (
    <div className={`rounded-lg border border-[#EBEBEB] bg-[#F7F7F5] p-5 sm:p-6 ${className}`}>
      <p className="font-bold text-[#2D2D2D] mb-4">{t.kop}</p>
      <ul className="space-y-3">
        {t.duren.map((d) => (
          <li key={d.duur} className="text-[15px] leading-snug">
            <span className="font-bold text-[#2D2D2D]">{d.duur}</span>
            <span className="text-[#2D2D2D]"> — {d.wat}</span>
            <span className="block text-[#6E6E6E]">{d.wanneer}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-[#434343] mt-5">
        {t.anders}
        <Link href={t.andersHref} className="text-[#28A8AA] font-semibold hover:underline">
          {t.andersLink}
        </Link>
        .
      </p>
    </div>
  );
}
