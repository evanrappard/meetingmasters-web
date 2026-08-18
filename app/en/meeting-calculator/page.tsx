import type { Metadata } from "next";
import MeetingCalculatorPagina from "@/components/meeting-calculator/MeetingCalculatorPagina";
import { CALCULATOR_EN } from "@/app/nl/meeting-calculator/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  title: CALCULATOR_EN.metaTitle,
  description: CALCULATOR_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/meeting-calculator`,
    languages: {
      "nl-NL": `${SITE}/nl/meeting-calculator`,
      "en-GB": `${SITE}/en/meeting-calculator`,
    },
  },
};

export default function MeetingCalculatorPage() {
  return <MeetingCalculatorPagina taal="en" />;
}
