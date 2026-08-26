import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  alternates: taalAlternates("/offerte"),
  title: "Vrijblijvende offerte of kostenindicatie | MeetingMasters",
  description:
    "Vraag een vrijblijvende prijsindicatie voor een online event, een virtueel kantoor of een game. Vertel wat je wilt organiseren en met hoeveel mensen.",
};

export default function OffertePage() {
  return (
    <FormulierPagina
      label="Kostenindicatie"
      titel="Wat gaat het ongeveer kosten?"
      intro={
        <>
          <p>
            Dat hangt af van de groep, de opzet en hoeveel begeleiding je wilt. Daarom werken we
            met een voorstel op maat in plaats van een prijslijst.
          </p>
          <p className="text-base">
            Vertel kort wat je voor ogen hebt, dan krijg je een realistische indicatie.
          </p>
        </>
      }
      formulier="kostenindicatie"
      formulierKop="Vraag een indicatie aan"
      formulierUitleg="Hoe meer je invult, hoe scherper de indicatie. Je zit nergens aan vast."
    />
  );
}
