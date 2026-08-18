import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import VirtueelKantoorOverzicht from "@/components/vo/VirtueelKantoorOverzicht";

export const metadata: Metadata = {
  alternates: taalAlternates("/virtual-office"),
  title: "Virtueel kantoor voor teams (Virtual Office) | MeetingMasters",
  description:
    "Een virtueel kantoor is de online plek waar je team elkaar weer tegenkomt, ook buiten meetings. Boek een zaaltje, huur een kantoor of bouw het op maat.",
};

export default function VirtualOfficePage() {
  return <VirtueelKantoorOverzicht />;
}
