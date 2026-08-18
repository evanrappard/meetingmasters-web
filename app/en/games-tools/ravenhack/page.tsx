import type { Metadata } from "next";
import RavenHackPagina from "@/components/games/RavenHackPagina";
import { RAVENHACK_EN } from "@/app/nl/games-tools/ravenhack/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
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
