import { unstable_cache } from "next/cache";
import { client } from "./client";

// Cache-tag voor revalidatie als Sanity-content verandert
const CACHE_TAG = "sanity";

export const getLogos = unstable_cache(
  async () =>
    client.fetch<{ name: string; logo: { asset: { url: string } } | null }[]>(
      `*[_type == "logo"] | order(order asc) { name, logo { asset -> { url } } }`
    ),
  ["logos"],
  { tags: [CACHE_TAG], revalidate: 60 }
);

export const getHomepageCases = unstable_cache(
  async () =>
    client.fetch<
      {
        title: string;
        client: string;
        summary: string;
        label: string;
        image: { asset: { url: string } } | null;
      }[]
    >(
      `*[_type == "caseStudy"] | order(order asc, publishedAt desc) [0..2] {
        title,
        client,
        summary,
        "label": coalesce(client, "Case"),
        image { asset -> { url } }
      }`
    ),
  ["homepage-cases"],
  { tags: [CACHE_TAG], revalidate: 60 }
);

export const getHomepageContent = unstable_cache(
  async () =>
    client.fetch<{
      heroHeadline?: string;
      heroSubline?: string;
      heroCta?: string;
      statementText?: string;
      stats?: { value: string; label: string }[];
    }>(`*[_type == "homepageContent"][0]`),
  ["homepage-content"],
  { tags: [CACHE_TAG], revalidate: 60 }
);
