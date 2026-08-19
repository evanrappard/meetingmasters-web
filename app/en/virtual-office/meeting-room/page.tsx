import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import ZaaltjePagina from "@/components/vo/ZaaltjePagina";
import { ZAALTJE_EN } from "@/app/nl/virtual-office/tekst-en-sub";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/virtual-office/zaaltje")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/virtual-office/zaaltje")!] },
  title: ZAALTJE_EN.metaTitle,
  description: ZAALTJE_EN.metaDescription,
  alternates: {
    canonical: `${SITE}/en/virtual-office/meeting-room`,
    languages: {
      "nl-NL": `${SITE}/nl/virtual-office/zaaltje`,
      "en-GB": `${SITE}/en/virtual-office/meeting-room`,
    },
  },
};

export default function MeetingRoomPage() {
  return <ZaaltjePagina taal="en" />;
}
