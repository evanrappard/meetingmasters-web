import type { Metadata } from "next";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  title: "Plan een rondleiding of demo | MeetingMasters",
  description:
    "Twintig minuten om te zien hoe een platform als SpatialChat iets anders doet dan Zoom of Teams. Vrijblijvend, in je eigen agenda, met een van onze mensen erbij.",
};

export default function DemoPage() {
  return (
    <FormulierPagina
      label="Rondleiding"
      titel="Kom eens binnenlopen."
      intro={
        <>
          <p>
            In twintig minuten laten we je zien hoe een online omgeving werkt waarin je elkaar
            gewoon tegenkomt. Je loopt rond, wij lopen mee en je stelt de vragen die opkomen.
          </p>
          <p className="text-base">
            Geen presentatie, geen verkooppraat. Het is vooral makkelijker om te laten zien dan
            om uit te leggen.
          </p>
        </>
      }
      formulier="demo"
      agenda
      formulierKop="Plan je rondleiding"
      formulierUitleg="Kies zelf een moment dat je uitkomt. Twintig minuten, meer is het niet."
    />
  );
}
