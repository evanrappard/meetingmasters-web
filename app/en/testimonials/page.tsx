import type { Metadata } from "next";
import ErvaringenOverzicht from "@/components/ervaringen/ErvaringenOverzicht";

export const metadata: Metadata = {
  title: "What clients say | MeetingMasters",
  description:
    "What our clients say about working with MeetingMasters Online — from municipalities and charities to clinics and the World Olympians Association.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/testimonials",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/testimonials",
      "en-GB": "https://www.meetingmasters.online/en/testimonials",
    },
  },
};

export default function TestimonialsPage() {
  return <ErvaringenOverzicht taal="en" />;
}
