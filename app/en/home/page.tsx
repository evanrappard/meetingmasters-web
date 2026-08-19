import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import HomePagina from "@/components/home/HomePagina";
import { HOME_EN } from "@/app/nl/home/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/home")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/home")!] },
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
