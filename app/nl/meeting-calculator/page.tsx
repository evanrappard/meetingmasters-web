import type { Metadata } from "next";
import { deelBeeldVanBron, ogBeeld, DEELBEELD_PER_TAAL } from "@/lib/deelbeelden";
import MeetingCalculatorPagina from "@/components/meeting-calculator/MeetingCalculatorPagina";
import { NL } from "./data";

const SITE = "https://www.meetingmasters.online";
const DEELBEELD = deelBeeldVanBron(DEELBEELD_PER_TAAL["/meeting-calculator"].nl);

export const metadata: Metadata = {
  // Niet de hero van de pagina, maar de calculator zelf: wie de link deelt,
  // laat daarmee meteen zien wát het is.
  openGraph: { images: ogBeeld(DEELBEELD, "De vergaderkosten-calculator op een projectiescherm in een lege vergaderzaal") },
  twitter: { card: "summary_large_image", images: [DEELBEELD] },
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
