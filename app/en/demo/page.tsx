import type { Metadata } from "next";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  title: "Book a tour or demo | MeetingMasters",
  description:
    "Half an hour to see how a platform like SpatialChat does something Zoom and Teams do not. No obligation, in your own diary, with one of our people alongside.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/demo",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/demo",
      "en-GB": "https://www.meetingmasters.online/en/demo",
    },
  },
};

export default function DemoPage() {
  return (
    <FormulierPagina
      taal="en"
      label="Tour"
      titel="Come and experience it yourself."
      intro={
        <>
          <p>
            In half an hour we show you how an online environment works where you simply run
            into each other. You walk around, we walk with you, and you ask whatever comes up.
            No presentation, no sales pitch. Some things are easier to experience than to
            explain.
          </p>
        </>
      }
      formulier="demo"
      agenda
      directContactBijTekst
      directContactKop="Book a tour, or simply get in touch."
      formulierKop="Book your tour"
      formulierUitleg="Pick a moment that suits you. Half an hour, no more than that."
    />
  );
}
