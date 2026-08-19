import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import GamesToolsPagina from "@/components/games/GamesToolsPagina";
import { GAMES_EN } from "@/app/nl/games-tools/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/games-tools")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/games-tools")!] },
  title: GAMES_EN.metaTitle,
  description: GAMES_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/games-tools`,
    languages: {
      "nl-NL": `${SITE}/nl/games-tools`,
      "en-GB": `${SITE}/en/games-tools`,
    },
  },
};

export default function GamesToolsPage() {
  return <GamesToolsPagina taal="en" />;
}
