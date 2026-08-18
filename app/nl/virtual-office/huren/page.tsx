import type { Metadata } from "next";
import HurenPagina from "@/components/vo/HurenPagina";

export const metadata: Metadata = {
  title: "Virtueel kantoor huren | MeetingMasters",
  description:
    "Huur een ingericht, levend virtueel kantoor en trek er meteen in, per maand of per jaar. Inclusief ondersteuning en onboarding. Gebouwd in SpatialChat.",
};

export default function HurenPage() {
  return <HurenPagina />;
}
