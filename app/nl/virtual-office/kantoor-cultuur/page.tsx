import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import KantoorCultuurPagina from "@/components/vo/KantoorCultuurPagina";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/virtual-office/kantoor-cultuur")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/virtual-office/kantoor-cultuur")!] },
  alternates: taalAlternates("/virtual-office/kantoor-cultuur"),
  title: "Kantoor + Cultuur — virtueel kantoor op maat | MeetingMasters",
  description:
    "Eerst het gesprek over waar je voor staat en hoe je wilt samenwerken. Daarna bouwen we samen het online kantoor waarin die cultuur tot leven komt.",
};

export default function KantoorCultuurPage() {
  return <KantoorCultuurPagina />;
}
