import type { Metadata } from "next";
import HomePagina from "@/components/home/HomePagina";

export const metadata: Metadata = {
  title: "MeetingMasters | Online events & remote work specialisten",
  description:
    "Wij ontwerpen online bijeenkomsten voor 50 tot 500 mensen — events, virtual offices en interactieve formats. 250+ events begeleid, 94% tevredenheid.",
};

export default function HomePage() {
  return <HomePagina />;
}
