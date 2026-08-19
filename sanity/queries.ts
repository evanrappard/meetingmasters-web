import { unstable_cache } from "next/cache";
import { client } from "./client";

// Cache-tag voor revalidatie als Sanity-content verandert
const CACHE_TAG = "sanity";

/**
 * Zonder Sanity-configuratie is `client` null. De pagina's die deze queries
 * gebruiken hebben allemaal vaste terugvalwaarden, dus we geven dan gewoon
 * niets terug in plaats van de bouw te laten struikelen.
 */
type Logo = { name: string; logo: { asset: { url: string } } | null };
type Case = {
  title: string;
  client: string;
  summary: string;
  label: string;
  image: { asset: { url: string } } | null;
};
type HomepageContent = {
  heroHeadline?: string;
  heroSubline?: string;
  heroCta?: string;
  statementText?: string;
  stats?: { value: string; label: string }[];
};

export const getLogos = unstable_cache(
  async (): Promise<Logo[]> =>
    client
      ? client.fetch<Logo[]>(
          `*[_type == "logo"] | order(order asc) { name, logo { asset -> { url } } }`
        )
      : [],
  ["logos"],
  { tags: [CACHE_TAG], revalidate: 60 }
);

export const getHomepageCases = unstable_cache(
  async (): Promise<Case[]> =>
    client
      ? client.fetch<Case[]>(
          `*[_type == "caseStudy"] | order(order asc, publishedAt desc) [0..2] {
        title,
        client,
        summary,
        "label": coalesce(client, "Case"),
        image { asset -> { url } }
      }`
        )
      : [],
  ["homepage-cases"],
  { tags: [CACHE_TAG], revalidate: 60 }
);

export const getHomepageContent = unstable_cache(
  async (): Promise<HomepageContent | null> =>
    client ? client.fetch<HomepageContent>(`*[_type == "homepageContent"][0]`) : null,
  ["homepage-content"],
  { tags: [CACHE_TAG], revalidate: 60 }
);
