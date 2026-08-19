import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import RavenHackPagina from "@/components/games/RavenHackPagina";
import { RAVENHACK_EN } from "@/app/nl/games-tools/ravenhack/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/games-tools/ravenhack")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/games-tools/ravenhack")!] },
  title: RAVENHACK_EN.metaTitle,
  description: RAVENHACK_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/games-tools/ravenhack`,
    languages: {
      "nl-NL": `${SITE}/nl/games-tools/ravenhack`,
      "en-GB": `${SITE}/en/games-tools/ravenhack`,
    },
  },
};

export default function RavenHackPage() {
  return <RavenHackPagina taal="en" />;
}
