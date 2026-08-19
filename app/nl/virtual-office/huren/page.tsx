import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import HurenPagina from "@/components/vo/HurenPagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/virtual-office/huren")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/virtual-office/huren")!] },
  alternates: taalAlternates("/virtual-office/huren"),
  title: "Virtueel kantoor huren | MeetingMasters",
  description:
    "Huur een ingericht, levend virtueel kantoor en trek er meteen in, per maand of per jaar. Inclusief ondersteuning en onboarding. Gebouwd in SpatialChat.",
};

export default function HurenPage() {
  return <HurenPagina />;
}
