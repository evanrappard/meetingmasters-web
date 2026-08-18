import type { Metadata } from "next";
import HomePagina from "@/components/home/HomePagina";
import { HOME_EN } from "@/app/nl/home/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  title: HOME_EN.metaTitle,
  description: HOME_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/home`,
    languages: {
      "nl-NL": `${SITE}/nl/home`,
      "en-GB": `${SITE}/en/home`,
    },
  },
};

export default function HomePage() {
  return <HomePagina taal="en" />;
}
