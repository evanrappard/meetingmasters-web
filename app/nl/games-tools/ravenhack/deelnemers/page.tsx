import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import DeelnemersPagina from "@/components/games/DeelnemersPagina";

/**
 * De voorbereidingspagina voor deelnemers aan een R@venHack. Bewust buiten het
 * menu en buiten de sitemap: je krijgt de link in de uitnodiging.
 *
 * `robots: index false` hoort bij de vermelding in NIET_INDEXEREN in
 * `app/sitemap.ts` — zonder allebei vindt Google de pagina alsnog.
 */
export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/games-tools/ravenhack/deelnemers")!, "Silhouetten van vijf teamleden achter een regen van enen en nullen — R@venHack") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/games-tools/ravenhack/deelnemers")!] },
  title: "Zo bereid je je voor op je online escape | MeetingMasters",
  description:
    "Alles wat je nodig hebt om mee te doen aan een online escape room van EscapeMasters: welk apparaat, welke browser, en waar je hulp vindt als iets niet werkt.",
  robots: { index: false, follow: false },
};

export default function DeelnemersPage() {
  return <DeelnemersPagina />;
}
