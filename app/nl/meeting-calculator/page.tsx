import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import MeetingCalculatorPagina from "@/components/meeting-calculator/MeetingCalculatorPagina";
import { NL } from "./data";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/meeting-calculator")!, "Iemand houdt een lijst omhoog met deelnemers en speelkaarten — Games & Tools van MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/meeting-calculator")!] },
  title: NL.metaTitle,
  description: NL.metaDescription,
  alternates: {
    canonical: `${SITE}/nl/meeting-calculator`,
    languages: {
      "nl-NL": `${SITE}/nl/meeting-calculator`,
      "en-GB": `${SITE}/en/meeting-calculator`,
    },
  },
};

export default function MeetingCalculatorPage() {
  return <MeetingCalculatorPagina />;
}
