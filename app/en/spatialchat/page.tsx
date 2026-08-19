import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import SpatialChatPagina from "@/components/tech/SpatialChatPagina";
import { SPATIALCHAT_EN } from "@/app/nl/technologie/spatialchat/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/technologie/spatialchat")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/technologie/spatialchat")!] },
  title: SPATIALCHAT_EN.metaTitle,
  description: SPATIALCHAT_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/spatialchat`,
    languages: {
      "nl-NL": `${SITE}/nl/technologie/spatialchat`,
      "en-GB": `${SITE}/en/spatialchat`,
    },
  },
};

export default function SpatialChatPage() {
  return <SpatialChatPagina taal="en" />;
}
