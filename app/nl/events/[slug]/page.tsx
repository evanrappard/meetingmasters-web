import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import { deelBeeldVanBron, ogBeeld } from "@/lib/deelbeelden";
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
  // Elk format deelt zijn eigen hero; anders krijgt elke gedeelde link
  // hetzelfde algemene beeld en zie je niet waar hij over gaat.
  const beeld = event.heroSrc ? deelBeeldVanBron(event.heroSrc) : undefined;
  return {
    alternates: taalAlternates(`/events/${slug}`),
    title: `${event.title} | MeetingMasters`,
    description: event.metaOmschrijving ?? event.tagline,
    ...(beeld && {
      openGraph: {
        title: event.title,
        description: event.metaOmschrijving ?? event.tagline,
        images: ogBeeld(beeld, event.heroAlt ?? event.title),
      },
      twitter: { card: "summary_large_image", images: [beeld] },
    }),
  };
}

export default async function EventTypePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return <EventPagina slug={slug} />;
}
