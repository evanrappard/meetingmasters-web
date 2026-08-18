import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  alternates: taalAlternates("/boeken"),
  title: "Boeken en beschikbaarheid | MeetingMasters",
  description:
    "Boek een online zaaltje, R@venHack of EscapeMasters. Laat je gewenste datum en groepsgrootte weten, dan laten we snel weten wat er mogelijk is.",
};

export default function BoekenPage() {
  return (
    <FormulierPagina
      label="Boeken"
      titel="Wat wil je boeken?"
      intro={
        <>
          <p>
            Een online zaaltje voor een kleine groep, een cybersecuritygame of een escape room:
            laat weten wat je zoekt en wanneer, dan laten we snel weten wat er mogelijk is.
          </p>
          <p className="text-base">
            Weet je het nog niet precies? Zet er dan bij wat je van plan bent, dan denken we mee
            over wat past.
          </p>
        </>
      }
      formulier="boeking"
      formulierKop="Check de beschikbaarheid"
      formulierUitleg="Vertel wat je wilt boeken, met welke groep en wanneer. Je zit nergens aan vast."
    />
  );
}
