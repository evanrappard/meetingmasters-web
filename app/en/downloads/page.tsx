import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import DownloadsPagina from "@/components/downloads/DownloadsPagina";
import { DOWNLOADS_EN } from "@/app/nl/downloads/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/downloads")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/downloads")!] },
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
