import type { Metadata } from "next";
import HulpPagina from "@/components/tech/HulpPagina";
import { HULP_EN } from "@/app/nl/technologie/hulp/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
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
