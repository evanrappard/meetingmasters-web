import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import VirtueelKantoorOverzicht from "@/components/vo/VirtueelKantoorOverzicht";
import { VO_EN } from "@/app/nl/virtual-office/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/virtual-office")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/virtual-office")!] },
  title: VO_EN.metaTitle,
  description: VO_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/virtual-office`,
    languages: {
      "nl-NL": `${SITE}/nl/virtual-office`,
      "en-GB": `${SITE}/en/virtual-office`,
    },
  },
};

export default function VirtualOfficePage() {
  return <VirtueelKantoorOverzicht taal="en" />;
}
