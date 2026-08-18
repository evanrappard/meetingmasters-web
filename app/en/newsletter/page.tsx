import type { Metadata } from "next";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  title: "Newsletter | MeetingMasters",
  description:
    "Something useful about online gatherings now and then: what works, what doesn't, and why. No sales pitch, and you can unsubscribe with one click.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/newsletter",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/nieuwsbrief",
      "en-GB": "https://www.meetingmasters.online/en/newsletter",
    },
  },
};

export default function NewsletterPage() {
  return (
    <FormulierPagina
      taal="en"
      label="Newsletter"
      titel="Something useful, now and then."
      intro={
        <>
          <p>
            A few times a year we send what we come across while making online gatherings: a
            format that worked surprisingly well, a mistake we won&rsquo;t make twice, a tool worth
            knowing about.
          </p>
          <p className="text-base">
            No sales pitch and no weekly reminder that we exist. If it&rsquo;s not for you, one click
            at the bottom of any email takes you off the list.
          </p>
        </>
      }
      formulier="nieuwsbrief"
      formulierKop="Sign up"
      formulierUitleg="Your email address is enough. We only use it for the newsletter."
    />
  );
}
