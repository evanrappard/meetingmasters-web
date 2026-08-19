import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import VirtueelKantoorOverzicht from "@/components/vo/VirtueelKantoorOverzicht";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/virtual-office")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/virtual-office")!] },
  alternates: taalAlternates("/virtual-office"),
  title: "Virtueel kantoor voor teams (Virtual Office) | MeetingMasters",
  description:
    "Een virtueel kantoor is de online plek waar je team elkaar weer tegenkomt, ook buiten meetings. Boek een zaaltje, huur een kantoor of bouw het op maat.",
};

export default function VirtualOfficePage() {
  return <VirtueelKantoorOverzicht />;
}
