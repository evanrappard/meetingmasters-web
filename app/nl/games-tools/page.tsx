import type { Metadata } from "next";
import GamesToolsPagina from "@/components/games/GamesToolsPagina";

export const metadata: Metadata = {
  title: "Games & tools voor online meetings | MeetingMasters",
  description:
    "Online games die groepen samenbrengen — van escape room tot cybersecuritygame — en gratis tools voor levendige meetings. Speelklaar of volledig op maat gemaakt.",
};

export default function GamesToolsPage() {
  return <GamesToolsPagina />;
}
