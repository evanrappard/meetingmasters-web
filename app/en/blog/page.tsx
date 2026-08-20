import type { Metadata } from "next";
import BlogOverzicht from "@/components/blog/BlogOverzicht";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/blog")!, "MeetingMasters blog") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/blog")!] },
  title: "Blog | MeetingMasters",
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

export default function BlogPage() {
  return <BlogOverzicht taal="en" />;
}
