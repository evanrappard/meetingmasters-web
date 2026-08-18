import type { Metadata } from "next";
import FormulierPagina from "@/components/ui/FormulierPagina";

export const metadata: Metadata = {
  title: "Booking and availability | MeetingMasters",
  description:
    "Book an online meeting room, R@venHack or EscapeMasters. Let us know your preferred date and group size and we will tell you quickly what is possible.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/booking",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/boeken",
      "en-GB": "https://www.meetingmasters.online/en/booking",
    },
  },
};

export default function BookingPage() {
  return (
    <FormulierPagina
      taal="en"
      label="Booking"
      titel="What would you like to book?"
      intro={
        <>
          <p>
            An online meeting room for a small group, a cybersecurity game or an escape room:
            tell us what you are after and when, and we will let you know what is possible.
          </p>
          <p className="text-base">
            Not sure yet? Add what you have in mind and we will suggest what fits.
          </p>
        </>
      }
      formulier="boeking"
      formulierKop="Check availability"
      formulierUitleg="Tell us what you want to book, for which group and when. You are not committing to anything."
    />
  );
}
