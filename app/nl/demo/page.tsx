import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  alternates: taalAlternates("/demo"),
  title: "Plan een rondleiding of demo | MeetingMasters",
  description:
    "Een half uur om te zien hoe een platform als SpatialChat iets anders doet dan Zoom of Teams. Vrijblijvend, in je eigen agenda, met een van onze mensen erbij.",
};

export default function DemoPage() {
  return (
    <FormulierPagina
      label="Rondleiding"
      titel="Kom het zelf eens ervaren."
      intro={
        <>
          <p>
            In een half uur laten we je zien hoe een online omgeving werkt waarin je elkaar
            gewoon tegenkomt. Jij loopt rond, wij lopen mee en je stelt de vragen die opkomen.
            Geen presentatie, geen verkooppraat. Sommige dingen kun je beter ervaren dan
            uitleggen.
          </p>
          <p>Plan een rondleiding of neem even contact op.</p>
        </>
      }
      formulier="demo"
      agenda
      directContactBijTekst
      formulierKop="Plan je rondleiding"
      formulierUitleg="Kies zelf een moment dat je uitkomt. Een half uur, meer is het niet."
    />
  );
}
