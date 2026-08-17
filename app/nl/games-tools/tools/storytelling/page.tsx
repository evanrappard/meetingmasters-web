import type { Metadata } from "next";
import ToolKader from "@/components/tools/ToolKader";
import ToolPagina, { type FaqItem } from "@/components/tools/ToolPagina";
import { tool } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Storytelling — gratis online tool voor teams | MeetingMasters",
  description:
    "Trek om de beurt een kaart met een vraag en vertel je verhaal binnen de tijd. Gratis tool voor teams, in Zoom, Teams of SpatialChat.",
};

const faq: FaqItem[] = [
  {
    q: "Hoe werkt de storytelling-tool?",
    a: "Deelnemers trekken om de beurt een kaart met een vraag en vertellen hun verhaal binnen een tijd die je zelf instelt. De anderen luisteren, zonder te onderbreken. Daarna is de volgende aan de beurt.",
  },
  {
    q: "Wat zijn de spelregels?",
    a: "Trek een kaart en laat de vraag even op je inwerken. Start de tijd of vraag een nieuwe kaart. Vertel zolang de tijd loopt en sluit af met 'Dit was mijn verhaal'. De anderen reageren kort, zonder er een eigen verhaal van te maken. Dan volgt de volgende persoon.",
  },
  {
    q: "Waarom die afsluitende zin?",
    a: "Omdat het een duidelijk einde markeert. Zonder dat ritueel weet een groep niet wanneer luisteren overgaat in reageren, en praat iemand er al doorheen voordat het verhaal af is.",
  },
  {
    q: "Hoe lang duurt een ronde?",
    a: "Dat bepaal je zelf met de tijdinstelling. In de praktijk werkt kort beter dan lang: een paar minuten per persoon dwingt tot de kern en houdt de aandacht van de groep vast.",
  },
  {
    q: "Kan ik eigen vragen gebruiken?",
    a: "Ja. Naast de standaardsets kun je een eigen vragenset laten maken die past bij het thema van je bijeenkomst, bijvoorbeeld rond samenwerking, verandering of een jubileum.",
  },
  {
    q: "Waar kan ik de tool gebruiken?",
    a: "In elke omgeving waarin je je scherm kunt delen: Zoom, Teams, SpatialChat of gewoon in een zaal met een beamer. Deelnemers hoeven zelf niets te openen.",
  },
  {
    q: "Is de tool gratis?",
    a: "Ja. De storytelling-tool is gratis te gebruiken, zonder account en zonder installatie.",
  },
  {
    q: "Kan ik de tool in mijn eigen meetingomgeving gebruiken?",
    a: 'Ja. Onder de tool staat een knop \'Insluitcode\' waarmee je de code kopieert die je op een scherm in SpatialChat of op je eigen pagina plakt. Het kenmerk allow="fullscreen" zit al in die code.',
  },
];

export default function StorytellingPage() {
  return (
    <ToolPagina
      huidig="storytelling"
      titel="Storytelling"
      oneliner="Trek een kaart, vertel je verhaal, de rest luistert. Gratis, zonder account."
      tool={<ToolKader bron={tool("storytelling").embedUrl} naam="Storytelling" />}
      over={
        <>
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            Over de verhalen
          </p>
          <p className="text-[#545454] leading-relaxed mb-6">
            Teams die jaren samenwerken weten vaak verrassend weinig van elkaar. Eén vraag en wat
            stilte doen daar meer aan dan een teamdag:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
            Wie vertelt het eerste verhaal?
          </h2>
          <p className="text-[#545454] text-lg leading-[1.9]">
            Trek een kaart en lees de vraag.
            <br />
            Vertel zolang de tijd loopt.
            <br />
            De anderen luisteren, meer niet.
          </p>
        </>
      }
      faq={faq}
      faqOnderwerp="storytelling"
      ctaTekst="Verhalen maken een team hechter dan welke presentatie ook. Wij maken meer van meetings, met tools, technieken en met jarenlange ervaring."
      appNaam="MeetingMasters Storytelling"
      appOmschrijving="Gratis online storytelling-tool waarmee deelnemers om de beurt een vraag trekken en hun verhaal vertellen binnen een instelbare tijd."
    />
  );
}
