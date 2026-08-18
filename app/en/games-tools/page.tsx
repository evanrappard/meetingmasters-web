import type { Metadata } from "next";
import GamesToolsPagina from "@/components/games/GamesToolsPagina";
import { GAMES_EN } from "@/app/nl/games-tools/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
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
