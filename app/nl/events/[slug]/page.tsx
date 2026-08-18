import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import EventPagina from "@/components/events/EventPagina";
import { EVENT_DATA } from "./data";

export function generateStaticParams() {
  return Object.keys(EVENT_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENT_DATA[slug];
  if (!event) return {};
  return {
    alternates: taalAlternates(`/events/${slug}`),
    title: `${event.title} | MeetingMasters`,
    description: event.metaOmschrijving ?? event.tagline,
  };
}

export default async function EventTypePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return <EventPagina slug={slug} />;
}
