import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import HurenPagina from "@/components/vo/HurenPagina";

export const metadata: Metadata = {
  alternates: taalAlternates("/virtual-office/huren"),
  title: "Virtueel kantoor huren | MeetingMasters",
  description:
    "Huur een ingericht, levend virtueel kantoor en trek er meteen in, per maand of per jaar. Inclusief ondersteuning en onboarding. Gebouwd in SpatialChat.",
};

export default function HurenPage() {
  return <HurenPagina />;
}
