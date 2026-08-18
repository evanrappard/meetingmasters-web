import type { Metadata } from "next";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  title: "A no-obligation quote or cost estimate | MeetingMasters",
  description:
    "Ask for a no-obligation price indication for an online event, a virtual office or a game. Tell us what you want to organise and for how many people.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/quote",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/offerte",
      "en-GB": "https://www.meetingmasters.online/en/quote",
    },
  },
};

export default function QuotePage() {
  return (
    <FormulierPagina
      taal="en"
      label="Cost estimate"
      titel="Roughly what will it cost?"
      intro={
        <>
          <p>
            That depends on the group, the set-up and how much support you want. Which is why we
            work with a proposal built around your case rather than a price list.
          </p>
          <p className="text-base">
            Tell us what you have in mind and we&rsquo;ll give you a realistic range, with what&rsquo;s
            in it and what isn&rsquo;t.
          </p>
        </>
      }
      formulier="kostenindicatie"
      formulierKop="Request an estimate"
      formulierUitleg="Tell us what you want to organise and for how many people. You're not committing to anything."
    />
  );
}
