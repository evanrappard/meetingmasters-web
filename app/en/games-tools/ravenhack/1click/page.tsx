import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import EenKlikPagina from "@/components/games/EenKlikPagina";

/** De Engelse variant van "1klik". Zelfde opbouw, eigen slotbeeld. */
export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/games-tools/ravenhack/1klik")!, "Woman at a laptop with a blue padlock symbol on the screen") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/games-tools/ravenhack/1klik")!] },
  title: "Never just click a link | MeetingMasters",
  description:
    "Most digital attacks begin with a single click. The ground rules for safe digital behaviour, short and free of jargon.",
  robots: { index: false, follow: false },
};

export default function OneClickPage() {
  return <EenKlikPagina taal="en" />;
}
