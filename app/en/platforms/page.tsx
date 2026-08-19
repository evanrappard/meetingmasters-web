import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import PlatformsPagina from "@/components/tech/PlatformsPagina";
import { PLATFORMS_EN } from "@/app/nl/technologie/tools/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/technologie/tools")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/technologie/tools")!] },
  title: PLATFORMS_EN.metaTitle,
  description: PLATFORMS_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/platforms`,
    languages: {
      "nl-NL": `${SITE}/nl/technologie/tools`,
      "en-GB": `${SITE}/en/platforms`,
    },
  },
};

export default function PlatformsPage() {
  return <PlatformsPagina taal="en" />;
}
