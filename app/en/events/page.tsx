import type { Metadata } from "next";
import EventsOverzicht from "@/components/events/EventsOverzicht";
import { OVERZICHT_EN } from "@/app/nl/events/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  title: OVERZICHT_EN.metaTitle,
  description: OVERZICHT_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/events`,
    languages: {
      "nl-NL": `${SITE}/nl/events`,
      "en-GB": `${SITE}/en/events`,
    },
  },
};

export default function EventsPage() {
  return <EventsOverzicht taal="en" />;
}
