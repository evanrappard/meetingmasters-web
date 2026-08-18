import type { Metadata } from "next";
import PlatformsPagina from "@/components/tech/PlatformsPagina";

export const metadata: Metadata = {
  title: "Waar wij mee werken: platforms en tools | MeetingMasters",
  description:
    "De platforms waarmee wij online bijeenkomsten bouwen: SpatialChat, Zoom, Zoom Events en Teams, met Miro, Mentimeter, Kahoot en streamAlive erbij.",
};

export default function ToolsPage() {
  return <PlatformsPagina />;
}
