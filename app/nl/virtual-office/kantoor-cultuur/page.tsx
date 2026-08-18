import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import KantoorCultuurPagina from "@/components/vo/KantoorCultuurPagina";

export const metadata: Metadata = {
  alternates: taalAlternates("/virtual-office/kantoor-cultuur"),
  title: "Kantoor + Cultuur — virtueel kantoor op maat | MeetingMasters",
  description:
    "Eerst het gesprek over waar je voor staat en hoe je wilt samenwerken. Daarna bouwen we samen het online kantoor waarin die cultuur tot leven komt.",
};

export default function KantoorCultuurPage() {
  return <KantoorCultuurPagina />;
}
