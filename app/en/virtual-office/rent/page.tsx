import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import HurenPagina from "@/components/vo/HurenPagina";
import { HUREN_EN } from "@/app/nl/virtual-office/tekst-en-sub";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/virtual-office/huren")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/virtual-office/huren")!] },
  title: HUREN_EN.metaTitle,
  description: HUREN_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/virtual-office/rent`,
    languages: {
      "nl-NL": `${SITE}/nl/virtual-office/huren`,
      "en-GB": `${SITE}/en/virtual-office/rent`,
    },
  },
};

export default function RentPage() {
  return <HurenPagina taal="en" />;
}
