import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

/**
 * Beeld-URL's uit Sanity. Nog nergens in gebruik, maar hij staat klaar.
 *
 * De builder wordt pas gemaakt bij de eerste aanroep, en alleen als Sanity ook
 * echt is ingesteld. Zou hij bij het laden van de module worden gemaakt, dan
 * liep de bouw stuk zodra de omgevingsvariabelen ontbreken — zoals op Vercel
 * vóór stap 3.
 */
let builder: ReturnType<typeof imageUrlBuilder> | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!client) return null;
  builder ??= imageUrlBuilder(client);
  return builder.image(source);
}
