import type { Metadata } from "next";
import { deelBeeldVanBron, ogBeeld, DEELBEELD_PER_TAAL } from "@/lib/deelbeelden";
import MeetingCalculatorPagina from "@/components/meeting-calculator/MeetingCalculatorPagina";
import { CALCULATOR_EN } from "@/app/nl/meeting-calculator/tekst-en";

const SITE = "https://www.meetingmasters.online";
const DEELBEELD = deelBeeldVanBron(DEELBEELD_PER_TAAL["/meeting-calculator"].en);

export const metadata: Metadata = {
  // De Engelse versie van de calculator staat erop, niet de hero.
  openGraph: { images: ogBeeld(DEELBEELD, "The meeting cost calculator on a projection screen in an empty meeting room") },
  twitter: { card: "summary_large_image", images: [DEELBEELD] },
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
