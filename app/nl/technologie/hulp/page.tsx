import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import HulpPagina from "@/components/tech/HulpPagina";

export const metadata: Metadata = {
  alternates: taalAlternates("/technologie/hulp"),
  title: "Directe support voor je online meeting | MeetingMasters",
  description:
    "Technisch probleem vlak voor je online bijeenkomst? Los het hier stap voor stap op, voor SpatialChat, Zoom, Zoom Events en Microsoft Teams.",
};

export default function HulpPage() {
  return <HulpPagina />;
}
