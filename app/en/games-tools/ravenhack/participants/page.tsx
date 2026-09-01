import type { Metadata } from "next";
import DeelnemersPagina from "@/components/games/DeelnemersPagina";

/**
 * De Engelse deelnemerspagina. Zelfde opbouw en dezelfde beelden als de
 * Nederlandse; alleen de teksten en de FAQ-link verschillen.
 *
 * Net als de Nederlandse: buiten het menu, buiten de sitemap en op noindex.
 */
export const metadata: Metadata = {
  title: "How to get ready for your online escape | MeetingMasters",
  description:
    "Everything you need to join an online escape room by EscapeMasters: which device, which browser, and where to find help when something does not work.",
  robots: { index: false, follow: false },
};

export default function ParticipantsPage() {
  return <DeelnemersPagina taal="en" />;
}
