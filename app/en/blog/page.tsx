import type { Metadata } from "next";
import BlogOverzicht, { type BlogKaart } from "@/components/blog/BlogOverzicht";
import { POSTS_EN } from "@/app/en/blog/posts";
import { BLOG_RUBRIEKEN_EN } from "@/app/en/blog/posts";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/blog")!, "MeetingMasters blog") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/blog")!] },
  title: "Blog on online meetings and gathering | MeetingMasters",
  description:
    "Insights, reflections and practical ideas about online meetings, virtual events and human connection — by Emilie van Rappard.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/blog",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/blog",
      "en-GB": "https://www.meetingmasters.online/en/blog",
    },
  },
};

/** Alleen de velden die een kaart toont; de artikelteksten blijven hier. */
const kaarten: BlogKaart[] = POSTS_EN.map(({ slug, title, date, img, imgAlt, excerpt, rubriek }) => ({
  slug, title, date, img, imgAlt, excerpt, rubriek,
}));

export default function BlogPage() {
  return <BlogOverzicht taal="en" posts={kaarten} labels={BLOG_RUBRIEKEN_EN} />;
}
