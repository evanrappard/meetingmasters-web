import type { Metadata } from "next";
import BlogOverzicht, { type BlogKaart } from "@/components/blog/BlogOverzicht";
import { POSTS } from "@/app/nl/blog/posts";
import { BLOG_RUBRIEKEN } from "@/app/nl/blog/posts";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/blog")!, "MeetingMasters blog") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/blog")!] },
  title: "Blog over online meetings en samenkomen | MeetingMasters",
  description:
    "Inzichten, reflecties en praktische ideeën over online meetings, virtuele events en menselijke verbinding — door Emilie van Rappard.",
  alternates: {
    canonical: "https://www.meetingmasters.online/nl/blog",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/blog",
      "en-GB": "https://www.meetingmasters.online/en/blog",
    },
  },
};

/** Alleen de velden die een kaart toont; de artikelteksten blijven hier. */
const kaarten: BlogKaart[] = POSTS.map(({ slug, title, date, img, imgAlt, excerpt, rubriek }) => ({
  slug, title, date, img, imgAlt, excerpt, rubriek,
}));

export default function BlogPage() {
  return <BlogOverzicht taal="nl" posts={kaarten} labels={BLOG_RUBRIEKEN} />;
}
