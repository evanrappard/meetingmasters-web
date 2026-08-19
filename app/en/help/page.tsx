import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import HulpPagina from "@/components/tech/HulpPagina";
import { HULP_EN } from "@/app/nl/technologie/hulp/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/technologie/hulp")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/technologie/hulp")!] },
  title: HULP_EN.metaTitle,
  description: HULP_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/help`,
    languages: {
      "nl-NL": `${SITE}/nl/technologie/hulp`,
      "en-GB": `${SITE}/en/help`,
    },
  },
};

export default function HelpPage() {
  return <HulpPagina taal="en" />;
}
