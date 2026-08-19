import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import PlatformsPagina from "@/components/tech/PlatformsPagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/technologie/tools")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/technologie/tools")!] },
  alternates: taalAlternates("/technologie/tools"),
  title: "Waar wij mee werken: platforms en tools | MeetingMasters",
  description:
    "De platforms waarmee wij online bijeenkomsten bouwen: SpatialChat, Zoom, Zoom Events en Teams, met Miro, Mentimeter, Kahoot en streamAlive erbij.",
};

export default function ToolsPage() {
  return <PlatformsPagina />;
}
