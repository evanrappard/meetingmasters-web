import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventPagina, { eventInTaal } from "@/components/events/EventPagina";
import { VERTAALDE_EVENTS, nederlandseEventSlug } from "@/app/nl/events/[slug]/tekst-en";

const SITE = "https://www.meetingmasters.online";

/**
 * Alleen de events die daadwerkelijk vertaald zijn krijgen een Engelse pagina.
 * Een half-Engelse pagina is slechter dan geen: de bezoeker denkt dan dat de
 * rest ook Engels is.
 */
export function generateStaticParams() {
  return VERTAALDE_EVENTS.map(([, en]) => ({ slug: en }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const nl = nederlandseEventSlug(slug);
  const event = nl ? eventInTaal(nl, "en") : undefined;
  if (!event || !nl) return {};
  return {
    title: `${event.title} | MeetingMasters`,
    description: event.metaOmschrijving ?? event.tagline,
    alternates: {
      canonical: `${SITE}/en/events/${slug}`,
      languages: {
        "nl-NL": `${SITE}/nl/events/${nl}`,
        "en-GB": `${SITE}/en/events/${slug}`,
      },
    },
  };
}

export default async function EventTypePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const nl = nederlandseEventSlug(slug);
  if (!nl) notFound();
  return <EventPagina slug={nl} taal="en" />;
}
