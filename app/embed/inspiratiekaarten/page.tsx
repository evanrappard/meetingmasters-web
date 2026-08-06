import type { Metadata } from "next";
import InspiratieKaarten from "@/components/tools/InspiratieKaarten";

/**
 * Kale versie van de inspiratiekaarten, bedoeld voor een iframe — bijvoorbeeld
 * op een scherm in een SpatialChat-kantoor. Geen navigatie, geen footer, alleen
 * de kaart. De tool vult het kader dat je hem geeft, staand én liggend.
 *
 * Insluiten:
 *   <iframe src="https://www.meetingmasters.online/embed/inspiratiekaarten"
 *           allow="fullscreen" style="border:0;width:100%;height:100%"></iframe>
 *
 * Deze route staat bewust buiten /nl, want daar zit de navigatie in de layout.
 */
export const metadata: Metadata = {
  title: "Inspiratiekaarten | MeetingMasters",
  // Niet los in de zoekresultaten: de echte toolpagina is de vindbare versie.
  robots: { index: false, follow: false },
};

export default function InspiratiekaartenEmbedPage() {
  return (
    <div className="h-dvh w-full overflow-hidden">
      <InspiratieKaarten variant="embed" />
    </div>
  );
}
