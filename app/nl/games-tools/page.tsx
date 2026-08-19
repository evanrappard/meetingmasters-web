import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import GamesToolsPagina from "@/components/games/GamesToolsPagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/games-tools")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/games-tools")!] },
  alternates: taalAlternates("/games-tools"),
  title: "Games & tools voor online meetings | MeetingMasters",
  description:
    "Online games die groepen samenbrengen — van escape room tot cybersecuritygame — en gratis tools voor levendige meetings. Speelklaar of volledig op maat gemaakt.",
};

export default function GamesToolsPage() {
  return <GamesToolsPagina />;
}
