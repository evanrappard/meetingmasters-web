import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import OverOnsPagina from "@/components/about/OverOnsPagina";

export const metadata: Metadata = {
  alternates: taalAlternates("/about"),
  title: "Over ons | MeetingMasters",
  description:
    "Sinds 2020 brengen wij oprecht contact terug in online bijeenkomsten, op de menselijke maat. Lees ons manifest: hoe we elkaar ontmoeten, maakt uit.",
};

export default function AboutPage() {
  return <OverOnsPagina />;
}
