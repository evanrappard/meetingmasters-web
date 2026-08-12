import type { Metadata } from "next";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  title: "Nieuwsbrief | MeetingMasters",
  description:
    "Af en toe iets bruikbaars over online bijeenkomsten: wat werkt, wat niet, en waarom. Geen verkooppraat, en je schrijft je met één klik weer uit.",
};

export default function NieuwsbriefPagina() {
  return (
    <FormulierPagina
      label="Nieuwsbrief"
      titel="Af en toe iets bruikbaars."
      intro={
        <>
          <p>
            Een paar keer per jaar sturen we wat we tegenkomen bij het maken van online
            bijeenkomsten: een format dat verrassend goed uitpakte, een fout die we niet
            nog eens maken, een tool die de moeite waard is.
          </p>
          <p className="text-base">
            Geen verkooppraat en geen wekelijkse herinnering aan ons bestaan. Bevalt het
            niet, dan schrijf je je met één klik onderaan elke mail weer uit.
          </p>
        </>
      }
      formulier="nieuwsbrief"
      formulierKop="Schrijf je in"
      formulierUitleg="Je e-mailadres is genoeg. We gebruiken het alleen voor de nieuwsbrief."
    />
  );
}
