import type { Metadata } from "next";
import ToolKader from "@/components/tools/ToolKader";
import ToolPagina, { type FaqItem } from "@/components/tools/ToolPagina";
import { tool } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Bingo — gratis online bingo voor meetings | MeetingMasters",
  description:
    "Interactieve bingo voor je online meeting, training of congres. Deelnemers strepen woorden weg terwijl de sessie vordert. Gratis, in de browser, met een eigen woordenlijst.",
};

const faq: FaqItem[] = [
  {
    q: "Wat is bingo in een meeting?",
    a: "Deelnemers krijgen een kaart met woorden die tijdens de bijeenkomst waarschijnlijk vallen. Elke keer dat er een woord voorbijkomt, strepen ze het weg. Luisteren wordt daarmee actief in plaats van passief.",
  },
  {
    q: "Hoe start ik een spel?",
    a: "Open het hostpaneel, stel je woordenlijst in en deel de spelerslink met je deelnemers. Zij openen die op hun eigen telefoon of laptop en krijgen ieder een unieke kaart.",
  },
  {
    q: "Krijgt iedereen dezelfde kaart?",
    a: "Nee. Er zijn 250 unieke kaarten, dus deelnemers hebben verschillende combinaties. Daardoor wint niet iedereen tegelijk.",
  },
  {
    q: "Kan ik mijn eigen woorden gebruiken?",
    a: "Ja. In het hostpaneel vul je je eigen lijst in, passend bij het onderwerp van de bijeenkomst. Je kunt ook een lijst bewaren als preset, zodat je die later opnieuw gebruikt.",
  },
  {
    q: "Is er een Engelse versie?",
    a: "Ja. De tool bestaat in het Nederlands en het Engels, allebei met een eigen spelerspagina en hostpaneel.",
  },
  {
    q: "Hoe controleer ik of iemand echt bingo heeft?",
    a: "De speler laat de kaart zien en de tool controleert de combinatie. Je hoeft niet zelf mee te turven.",
  },
  {
    q: "Is de tool gratis?",
    a: "Ja. Bingo is gratis te gebruiken, zonder account en zonder installatie. Deelnemers openen een link in hun browser.",
  },
  {
    q: "Kan ik bingo in mijn eigen meetingomgeving gebruiken?",
    a: 'Ja. Onder het spel staat een knop \'Insluitcode\' waarmee je de code kopieert die je op een scherm in SpatialChat of op je eigen pagina plakt. Het kenmerk allow="fullscreen" zit al in die code.',
  },
];

export default function BingoPage() {
  return (
    <ToolPagina
      huidig="bingo"
      titel="Bingo"
      oneliner="Deelnemers strepen woorden weg terwijl de sessie loopt. Gratis, zonder account."
      tool={<ToolKader bron={tool("bingo").embedUrl} naam="Bingo" />}
      over={
        <>
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            Over de bingo
          </p>
          <p className="text-[#545454] leading-relaxed mb-6">
            In een lange plenaire sessie zakt de aandacht vanzelf weg. Geef mensen iets om op te
            letten, en ze luisteren scherper dan je vraagt:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
            Welke woorden gaan vandaag vallen?
          </h2>
          <p className="text-[#545454] text-lg leading-[1.9]">
            Zet je eigen woorden op de kaart.
            <br />
            Deel de link met je deelnemers.
            <br />
            Wie het eerst een rij vol heeft, roept bingo.
          </p>
        </>
      }
      faq={faq}
      faqOnderwerp="de bingo"
      ctaTekst="Bingo houdt de aandacht vast in een lange sessie. Wij maken meer van meetings, met tools, technieken en met jarenlange ervaring."
      appNaam="MeetingMasters Bingo"
      appOmschrijving="Gratis online bingo voor meetings, trainingen en congressen, met eigen woordenlijsten en unieke kaarten per deelnemer."
    />
  );
}
