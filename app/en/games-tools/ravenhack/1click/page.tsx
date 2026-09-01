import type { Metadata } from "next";
import EenKlikPagina from "@/components/games/EenKlikPagina";

/** De Engelse variant van "1klik". Zelfde opbouw, eigen slotbeeld. */
export const metadata: Metadata = {
  title: "Never just click a link | MeetingMasters",
  description:
    "Most digital attacks begin with a single click. The ground rules for safe digital behaviour, short and free of jargon.",
  robots: { index: false, follow: false },
};

export default function OneClickPage() {
  return <EenKlikPagina taal="en" />;
}
