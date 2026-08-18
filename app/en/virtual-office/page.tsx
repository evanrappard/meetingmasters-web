import type { Metadata } from "next";
import VirtueelKantoorOverzicht from "@/components/vo/VirtueelKantoorOverzicht";
import { VO_EN } from "@/app/nl/virtual-office/tekst-en";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
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
