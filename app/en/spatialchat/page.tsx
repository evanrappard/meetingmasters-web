import type { Metadata } from "next";
import SpatialChatPagina from "@/components/tech/SpatialChatPagina";
import { SPATIALCHAT_EN } from "@/app/nl/technologie/spatialchat/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
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
