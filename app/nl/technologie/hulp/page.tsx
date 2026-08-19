import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import HulpPagina from "@/components/tech/HulpPagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/technologie/hulp")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/technologie/hulp")!] },
  alternates: taalAlternates("/technologie/hulp"),
  title: "Directe support voor je online meeting | MeetingMasters",
  description:
    "Technisch probleem vlak voor je online bijeenkomst? Los het hier stap voor stap op, voor SpatialChat, Zoom, Zoom Events en Microsoft Teams.",
};

export default function HulpPage() {
  return <HulpPagina />;
}
