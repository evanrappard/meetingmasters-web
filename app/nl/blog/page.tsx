import type { Metadata } from "next";
import BlogOverzicht from "@/components/blog/BlogOverzicht";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/blog")!, "MeetingMasters blog") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/blog")!] },
  title: "Blog | MeetingMasters",
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

export default function BlogPage() {
  return <BlogOverzicht taal="nl" />;
}
