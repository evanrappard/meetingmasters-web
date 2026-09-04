import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import EenKlikPagina from "@/components/games/EenKlikPagina";

/**
 * "1klik" — losse pagina over digitaal gezond verstand. Buiten het menu en
 * buiten de sitemap; de link gaat mee in een uitnodiging of een nazending.
 *
 * `robots: index false` hoort bij de vermelding in NIET_INDEXEREN in
 * `app/sitemap.ts` — zonder allebei vindt Google de pagina alsnog.
 */
export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/games-tools/ravenhack/1klik")!, "Vrouw achter een laptop met een blauw slotsymbool op het scherm") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/games-tools/ravenhack/1klik")!] },
  title: "Druk nooit zomaar op een link | MeetingMasters",
  description:
    "De meeste digitale aanvallen beginnen met één klik. De basisregels voor veilig digitaal gedrag, kort en zonder jargon.",
  robots: { index: false, follow: false },
};

export default function EenKlikPage() {
  return <EenKlikPagina />;
}
