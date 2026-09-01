import type { Metadata } from "next";
import EenKlikPagina from "@/components/games/EenKlikPagina";

/**
 * "1klik" — losse pagina over digitaal gezond verstand. Buiten het menu en
 * buiten de sitemap; de link gaat mee in een uitnodiging of een nazending.
 *
 * `robots: index false` hoort bij de vermelding in NIET_INDEXEREN in
 * `app/sitemap.ts` — zonder allebei vindt Google de pagina alsnog.
 */
export const metadata: Metadata = {
  title: "Druk nooit zomaar op een link | MeetingMasters",
  description:
    "De meeste digitale aanvallen beginnen met één klik. De basisregels voor veilig digitaal gedrag, kort en zonder jargon.",
  robots: { index: false, follow: false },
};

export default function EenKlikPage() {
  return <EenKlikPagina />;
}
