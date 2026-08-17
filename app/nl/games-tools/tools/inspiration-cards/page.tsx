import type { Metadata } from "next";
import InspiratieKaarten from "@/components/tools/InspiratieKaarten";
import ToolPagina, { type FaqItem } from "@/components/tools/ToolPagina";

export const metadata: Metadata = {
  title: "Inspiratiekaarten — gratis online tool | MeetingMasters",
  description:
    "Trek een digitale inspiratiekaart met een thema en een beeld. Deel je scherm, trek een kaart en het gesprek begint. Gratis, zonder account, ook mobiel.",
};

const GENUINE_CONTACT = "https://genuinecontact.net";

const faq: FaqItem[] = [
  {
    q: "Wat zijn de inspiratiekaarten?",
    a: "Digitale kaarten met een thema en een beeld. Geen opdracht en geen goed antwoord — je trekt een kaart en kijkt wat het thema oproept bij de groep. Er zijn 49 kaarten en je trekt ze in willekeurige volgorde, zonder herhaling.",
  },
  {
    q: "Hoe gebruik ik ze in een online meeting?",
    a: "Open de tool in je browser en deel je scherm. Klik op 'Volledig scherm' zodat alleen de kaart in beeld staat, en trek een kaart met de knop of met de spatiebalk. Deelnemers hoeven zelf niets te openen of te installeren.",
  },
  {
    q: "Wanneer zet je een kaart in?",
    a: "Als opening, voordat de agenda begint: één woord haalt mensen uit hun rol. Halverwege een lange sessie, om even lucht te geven. Bij een vastgelopen gesprek, omdat een kaart een ander perspectief op tafel legt zonder dat iemand van gedachten hoeft te veranderen. Of als afsluiter, waarbij iedereen in één zin zegt wat die meeneemt.",
  },
  {
    q: "Is de tool gratis?",
    a: "Ja. De inspiratiekaarten zijn gratis te gebruiken, zonder account en zonder installatie. Ze zijn bedoeld om je meeting beter te maken, ook als je verder niets van ons afneemt.",
  },
  {
    q: "Werkt het ook op mijn telefoon of tablet?",
    a: "Ja. De kaart schaalt mee met je scherm en past altijd volledig in beeld. Je kunt de pagina in Safari of Chrome ook op je beginscherm zetten, dan opent hij als een app.",
  },
  {
    q: "Kan ik een kaart bewaren of delen?",
    a: "Ja. Met de downloadknop bewaar je de getoonde kaart als afbeelding, bijvoorbeeld om in een verslag of een chatbericht te zetten.",
  },
  {
    q: "Kan ik de kaarten in mijn eigen meetingomgeving gebruiken?",
    a: 'Ja. Onder de kaart staat een knop \'Insluitcode\' waarmee je de code kopieert die je op een scherm in SpatialChat of op je eigen pagina plakt. Je krijgt dan een kale versie zonder menu of footer. Het kenmerk allow="fullscreen" zit al in die code; zonder dat mag de browser de volledig-schermknop niet uitvoeren.',
  },
  {
    q: "Voor welke bijeenkomsten zijn ze geschikt?",
    a: "Voor vrijwel elke meeting waarin mensen elkaar spreken. Van een teamoverleg tot een strategiesessie, van onboarding tot een all-hands. Overal waar je een gesprek wilt openen dat verder gaat dan de agenda.",
  },
  {
    q: "Kan ik deze inspiratiekaarten bestellen?",
    a: "Nee, de kaarten zijn niet te koop. Gebruiken mag wel, gratis en zo vaak je wilt.",
  },
  {
    q: "Wie maakte deze kaarten?",
    a: "De kaarten zijn een cadeau van een oud-medewerker, die kunst als inspiratiebron inbracht.",
  },
  {
    q: "Wat is de basis voor de inspiratiekaarten?",
    a: "De inspiratie voor deze kaarten komt van Dalar Consultancy, de founders van Genuine Contact.",
    link: { label: "Genuine Contact", href: GENUINE_CONTACT },
  },
];

export default function InspiratiekaartenPage() {
  return (
    <ToolPagina
      huidig="inspiration-cards"
      titel="Inspiratiekaarten"
      oneliner="Deel je scherm, trek een kaart en het gesprek begint. Gratis, zonder account."
      tool={<InspiratieKaarten />}
      over={
        <>
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            Over de kaarten
          </p>
          <p className="text-[#545454] leading-relaxed mb-6">
            Het succes van brainstorms ligt in het maken van verbindingen en associaties. Dit
            tooltje is een fijne opwarmer:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
            Welke kaart hoort bij jouw vraag?
          </h2>
          <p className="text-[#545454] text-lg leading-[1.9]">
            Druk op Trek een kaart.
            <br />
            Laat het woord en het beeld op je inwerken.
            <br />
            Wat is de relatie met je vraag?
          </p>
        </>
      }
      faq={faq}
      faqOnderwerp="de inspiratiekaarten"
      ctaTekst="Inspiratiekaarten verrijken gesprekken. Wij maken meer van meetings, met tools, technieken en met jarenlange ervaring."
      appNaam="MeetingMasters Inspiratiekaarten"
      appOmschrijving="Gratis online tool die willekeurige inspiratiekaarten toont voor gebruik in meetings, workshops en teamsessies."
    />
  );
}
