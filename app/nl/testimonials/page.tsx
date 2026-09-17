import type { Metadata } from "next";
import ErvaringenOverzicht from "@/components/ervaringen/ErvaringenOverzicht";
import { taalAlternates } from "@/lib/talen";

export const metadata: Metadata = {
  alternates: taalAlternates("/testimonials"),
  title: "Ervaringen van opdrachtgevers | MeetingMasters",
  description:
    "Wat opdrachtgevers zeggen over de samenwerking met MeetingMasters Online: van gemeente en goed doel tot kliniek en de World Olympians Association.",
};

export default function TestimonialsPage() {
  return <ErvaringenOverzicht taal="nl" />;
}
