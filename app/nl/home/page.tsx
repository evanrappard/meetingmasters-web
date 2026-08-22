import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import HomePagina from "@/components/home/HomePagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/home")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/home")!] },
  alternates: taalAlternates("/home"),
  title: "Online events, virtueel kantoor en games | MeetingMasters",
  description:
    "Wij ontwerpen online bijeenkomsten voor 50 tot 500 mensen — events, virtual offices en interactieve formats. 250+ events begeleid, 94% tevredenheid.",
};

export default function HomePage() {
  return <HomePagina />;
}
