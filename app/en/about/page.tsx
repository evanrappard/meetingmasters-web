import type { Metadata } from "next";
import OverOnsPagina from "@/components/about/OverOnsPagina";
import { ABOUT_EN } from "@/app/nl/about/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  title: ABOUT_EN.metaTitle,
  description: ABOUT_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/about`,
    languages: {
      "nl-NL": `${SITE}/nl/about`,
      "en-GB": `${SITE}/en/about`,
    },
  },
};

export default function AboutPage() {
  return <OverOnsPagina taal="en" />;
}
