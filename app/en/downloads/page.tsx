import type { Metadata } from "next";
import DownloadsPagina from "@/components/downloads/DownloadsPagina";
import { DOWNLOADS_EN } from "@/app/nl/downloads/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  title: DOWNLOADS_EN.metaTitle,
  description: DOWNLOADS_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/downloads`,
    languages: {
      "nl-NL": `${SITE}/nl/downloads`,
      "en-GB": `${SITE}/en/downloads`,
    },
  },
};

export default function DownloadsPage() {
  return <DownloadsPagina taal="en" />;
}
