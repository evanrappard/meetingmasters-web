import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import SpatialChatPagina from "@/components/tech/SpatialChatPagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/technologie/spatialchat")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/technologie/spatialchat")!] },
  alternates: taalAlternates("/technologie/spatialchat"),
  title: "SpatialChat | MeetingMasters Technologie",
  description:
    "SpatialChat is het videoplatform waarin je vrij beweegt en zelf je gesprekken kiest. MeetingMasters is officieel Channel Partner voor Nederland.",
};

export default function SpatialChatPage() {
  return <SpatialChatPagina />;
}
