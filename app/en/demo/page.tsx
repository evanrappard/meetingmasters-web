import type { Metadata } from "next";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  title: "Book a tour or demo | MeetingMasters",
  description:
    "Twenty minutes to see how a platform like SpatialChat does something Zoom and Teams do not. No strings attached, in your own diary, with one of our people alongside.",
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
      titel="Come and have a look around."
      intro={
        <>
          <p>
            In twenty minutes we show you how an online environment works where you simply run
            into each other. You walk around, we walk with you, and you ask whatever comes up.
          </p>
          <p className="text-base">
            No presentation, no sales pitch. It is a great deal easier to show than to explain.
          </p>
        </>
      }
      formulier="demo"
      agenda
      formulierKop="Book your tour"
      formulierUitleg="Pick a moment that suits you. Twenty minutes, no more than that."
    />
  );
}
