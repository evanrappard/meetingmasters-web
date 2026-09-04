import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import OrganisatorenPagina from "@/components/games/OrganisatorenPagina";

/**
 * Richtlijnen voor wie een R@venHack organiseert. Buiten het menu en buiten de
 * sitemap; de link gaat mee bij een boeking.
 *
 * `robots: index false` hoort bij de vermelding in NIET_INDEXEREN in
 * `app/sitemap.ts` — zonder allebei vindt Google de pagina alsnog.
 */
export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/games-tools/ravenhack/organisatoren")!, "Hand die een zoekbalk met escapemasters.online aanraakt — R@venHack") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/games-tools/ravenhack/organisatoren")!] },
  title: "R@venHack organiseren: richtlijnen voor organisatoren | MeetingMasters",
  description:
    "Alles wat je nodig hebt om je team goed voorbereid aan de start van R@venHack te krijgen: de teamindeling, de uitnodiging, de agenda-afspraak en de technische tips.",
  robots: { index: false, follow: false },
};

export default function OrganisatorenPage() {
  return <OrganisatorenPagina />;
}
