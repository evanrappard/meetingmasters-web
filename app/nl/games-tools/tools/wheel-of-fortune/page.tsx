import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import ToolKader from "@/components/tools/ToolKader";
import ToolPagina, { type FaqItem } from "@/components/tools/ToolPagina";
import { tool } from "@/lib/tools";

export const metadata: Metadata = {
  alternates: taalAlternates("/games-tools/tools/wheel-of-fortune"),
  title: "Wheel of Fortune — gratis online rad | MeetingMasters",
  description:
    "Draai een rad dat willekeurig een naam, vraag of opdracht kiest. Deel je scherm en laat het toeval kiezen. Gratis, zelf in te stellen, tot drie wielen.",
};

const faq: FaqItem[] = [
  {
    q: "Wat doet het rad?",
    a: "Je vult het rad met namen, vragen of opdrachten en draait eraan. Het toeval kiest. Handig als je niemand wilt aanwijzen, als de beurtvolgorde er niet toe doet, of juist als je er een spelmoment van wilt maken.",
  },
  {
    q: "Hoe gebruik ik het in een online meeting?",
    a: "Open de tool, zet je opties klaar en deel je scherm. Klik op 'Volledig scherm' zodat alleen het rad in beeld staat. Deelnemers hoeven zelf niets te openen of te installeren.",
  },
  {
    q: "Kan ik het rad zelf vullen?",
    a: "Ja. Via het tandwiel stel je per wiel de segmenten in, tussen 2 en 20 stuks, plus de kleuren, de draaitijd, het geluid en de tekst op de knop.",
  },
  {
    q: "Kan ik meerdere wielen tegelijk gebruiken?",
    a: "Ja, tot drie wielen naast elkaar. Bijvoorbeeld één met namen en één met vragen, zodat je in één draai bepaalt wie welke vraag krijgt.",
  },
  {
    q: "Kan een gekozen optie verdwijnen na het draaien?",
    a: "Ja, met de eliminatiemodus. De winnaar verdwijnt dan van het rad, wat handig is bij een loterij of bij het verdelen van beurten. Met de resetknop staat alles er weer op.",
  },
  {
    q: "Kan ik mijn instellingen bewaren voor een volgende keer?",
    a: "Ja. Je slaat een instelling op onder een eigen naam en krijgt daar een link bij. Open je die link, dan staat je rad meteen goed. Zo zet je per klant of per training een eigen versie klaar.",
  },
  {
    q: "Is de tool gratis?",
    a: "Ja. Het rad is gratis te gebruiken, zonder account en zonder installatie.",
  },
  {
    q: "Kan ik het rad in mijn eigen meetingomgeving gebruiken?",
    a: 'Ja. Onder het rad staat een knop \'Insluitcode\' waarmee je de code kopieert die je op een scherm in SpatialChat of op je eigen pagina plakt. Het kenmerk allow="fullscreen" zit al in die code.',
  },
];

export default function WheelOfFortunePage() {
  return (
    <ToolPagina
      huidig="wheel-of-fortune"
      titel="Wheel of Fortune"
      oneliner="Deel je scherm, draai het rad en laat het toeval kiezen. Gratis, zonder account."
      tool={
        // Met drie wielen naast elkaar heeft deze app meer hoogte nodig; bij
        // een smaller kader zakken de wielen onder elkaar.
        <ToolKader
          bron={tool("wheel-of-fortune").embedUrl}
          naam="Wheel of Fortune"
          hoogte="min(74dvh, 680px)"
        />
      }
      over={
        <>
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            Over het rad
          </p>
          <p className="text-[#545454] leading-relaxed mb-6">
            Een groep wijst zichzelf niet graag aan. Laat het toeval kiezen, dan is er niets
            persoonlijks aan en gaat het gesprek gewoon door:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
            Wie is er aan de beurt?
          </h2>
          <p className="text-[#545454] text-lg leading-[1.9]">
            Vul het rad met namen, vragen of opdrachten.
            <br />
            Draai eraan en wacht het af.
            <br />
            Wat eruit komt, is niemands keuze.
          </p>
        </>
      }
      faq={faq}
      faqOnderwerp="het rad"
      ctaTekst="Een rad houdt een sessie in beweging. Wij maken meer van meetings, met tools, technieken en met jarenlange ervaring."
      appNaam="MeetingMasters Wheel of Fortune"
      appOmschrijving="Gratis online rad dat willekeurig een naam, vraag of opdracht kiest, voor gebruik in meetings, workshops en trainingen."
    />
  );
}
