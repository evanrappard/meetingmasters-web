import type { Metadata } from "next";
import SpatialChatPagina from "@/components/tech/SpatialChatPagina";

export const metadata: Metadata = {
  title: "SpatialChat | MeetingMasters Technologie",
  description:
    "SpatialChat is het videoplatform waarin je vrij beweegt en zelf je gesprekken kiest. MeetingMasters is officieel Channel Partner voor Nederland.",
};

export default function SpatialChatPage() {
  return <SpatialChatPagina />;
}
