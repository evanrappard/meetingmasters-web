import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import ZaaltjePagina from "@/components/vo/ZaaltjePagina";

export const metadata: Metadata = {
  alternates: taalAlternates("/virtual-office/zaaltje"),
  title: "Online zaaltje boeken | MeetingMasters Virtual Office",
  description:
    "Boek een ingericht online zaaltje voor maximaal 12 personen, klaar voor gebruik. Laagdrempelig, niet duur en verrassender dan het zoveelste videogesprek.",
};

export default function ZaaltjePage() {
  return <ZaaltjePagina />;
}
