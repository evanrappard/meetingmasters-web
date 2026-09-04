import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import MeetingCalculatorPagina from "@/components/meeting-calculator/MeetingCalculatorPagina";
import { CALCULATOR_EN } from "@/app/nl/meeting-calculator/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/meeting-calculator")!, "Someone holding up a frame with participants and playing cards — Games & Tools by MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/meeting-calculator")!] },
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
