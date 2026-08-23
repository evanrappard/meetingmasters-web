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
  // De enige pagina op de site zonder canonical. Hij hoort niet in de index,
  // maar zonder canonical moet Google zelf maar raden welk adres het origineel
  // is — en dat is precies wat "duplicate without user-selected canonical"
  // betekent.
  alternates: { canonical: "https://www.meetingmasters.online/embed/inspiratiekaarten" },
};

/**
 * De taal komt uit de zoekopdracht: `?taal=en` toont de Engelse kaartenset.
 * Zo blijft er één insluitadres, met een parameter erachter.
 */
export default async function InspiratiekaartenEmbedPage({
  searchParams,
}: {
  searchParams: Promise<{ taal?: string }>;
}) {
  const { taal } = await searchParams;
  return (
    <div className="h-dvh w-full overflow-hidden">
      <InspiratieKaarten variant="embed" taal={taal === "en" ? "en" : "nl"} />
    </div>
  );
}
