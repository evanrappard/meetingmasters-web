import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import RavenHackPagina from "@/components/games/RavenHackPagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/games-tools/ravenhack")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/games-tools/ravenhack")!] },
  alternates: taalAlternates("/games-tools/ravenhack"),
  title: "R@venHack — online escaperoom over cybersecurity | MeetingMasters",
  description:
    "Cybersecurity escape game waarin je team samen een digitale aanval stopt. Over phishing, datalekken en veilig gedrag. In de Experience van 90 minuten of de korte Quick.",
};

export default function RavenHackPage() {
  return <RavenHackPagina />;
}
