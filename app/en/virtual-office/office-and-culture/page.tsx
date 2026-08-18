import type { Metadata } from "next";
import KantoorCultuurPagina from "@/components/vo/KantoorCultuurPagina";
import { CULTUUR_EN } from "@/app/nl/virtual-office/tekst-en-sub";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  title: CULTUUR_EN.metaTitle,
  description: CULTUUR_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/virtual-office/office-and-culture`,
    languages: {
      "nl-NL": `${SITE}/nl/virtual-office/kantoor-cultuur`,
      "en-GB": `${SITE}/en/virtual-office/office-and-culture`,
    },
  },
};

export default function OfficeAndCulturePage() {
  return <KantoorCultuurPagina taal="en" />;
}
