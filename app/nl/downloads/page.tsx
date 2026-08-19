import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import DownloadsPagina from "@/components/downloads/DownloadsPagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/downloads")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/downloads")!] },
  alternates: taalAlternates("/downloads"),
  title: "Downloads — publicaties en handleidingen | MeetingMasters",
  description:
    "Onze publicaties over online samenkomen, plus praktische handleidingen voor deelnemers aan een online bijeenkomst. Gratis te downloaden.",
};

export default function DownloadsPage() {
  return <DownloadsPagina />;
}
