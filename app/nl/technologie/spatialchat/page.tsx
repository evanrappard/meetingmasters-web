import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import { taalAlternates } from "@/lib/talen";
import SpatialChatPagina from "@/components/tech/SpatialChatPagina";

/**
 * Tijdelijk uit beeld: deze pagina is nog niet af. De route blijft bestaan —
 * oude links en gedeelde adressen geven dus geen foutmelding — maar hij staat
 * niet meer in het menu, niet in de sitemap en op `noindex`.
 *
 * Terugzetten is drie dingen: deze `robots`-regel weg, het adres uit
 * NIET_INDEXEREN in `app/sitemap.ts`, en de menuregel terug in
 * `lib/navigatie.ts`. Het gele "Favoriet"-label op Meeting Platforms mag dan
 * ook weer een link worden (`app/nl/technologie/tools/data.ts`).
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  openGraph: { images: ogBeeld(deelBeeld("/technologie/spatialchat")!, "MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/technologie/spatialchat")!] },
  alternates: taalAlternates("/technologie/spatialchat"),
  title: "SpatialChat | MeetingMasters Technologie",
  description:
    "SpatialChat is het videoplatform waarin je vrij beweegt en zelf je gesprekken kiest. MeetingMasters is officieel Channel Partner voor Nederland.",
};

export default function SpatialChatPage() {
  return <SpatialChatPagina />;
}
