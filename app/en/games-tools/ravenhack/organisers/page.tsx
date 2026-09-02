import type { Metadata } from "next";
import OrganisatorenPagina from "@/components/games/OrganisatorenPagina";

/** De Engelse richtlijnen voor organisatoren. Buiten het menu en op noindex. */
export const metadata: Metadata = {
  title: "Organising R@venHack: guidelines for organisers | MeetingMasters",
  description:
    "Everything you need to get your team to the start of R@venHack well prepared: the team line-up, the invitation, the calendar appointment and the technical tips.",
  robots: { index: false, follow: false },
};

export default function OrganisersPage() {
  return <OrganisatorenPagina taal="en" />;
}
