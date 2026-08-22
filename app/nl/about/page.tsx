import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import OverOnsPagina from "@/components/about/OverOnsPagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/about")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/about")!] },
  alternates: taalAlternates("/about"),
  title: "Over ons — meesters in online samenkomen | MeetingMasters",
  description:
    "Sinds 2020 brengen wij oprecht contact terug in online bijeenkomsten, op de menselijke maat. Lees ons manifest: hoe we elkaar ontmoeten, maakt uit.",
};

export default function AboutPage() {
  return <OverOnsPagina />;
}
