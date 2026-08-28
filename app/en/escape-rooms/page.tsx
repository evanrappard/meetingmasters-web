import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GrotereGroepen from "@/components/games/GrotereGroepen";
import { taalAlternates } from "@/lib/talen";

export const metadata: Metadata = {
  title: "Online Escape Rooms | MeetingMasters",
  description:
    "Exciting, team-building online escape room experiences — EscapeMasters and R@venHack Cyber Security.",
  alternates: taalAlternates("/escape-rooms", "en"),
  // Zelfde behandeling als de Nederlandse pagina: bereikbaar via een directe
  // link en via de taalschakelaar, maar niet in de sitemap en niet indexeren.
  // Die staat in sitemap.ts onder NIET_INDEXEREN omdat de pagina nog niet af is.
  robots: { index: false, follow: true },
};

export default function EscapeRoomsPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-2 tracking-widest uppercase">
          🆕 New
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Online Escape Rooms
        </h1>
        <p className="text-[#525252] text-lg max-w-xl mx-auto">
          Exciting, team-building escape experiences. Online. Perfect for team
          events, onboarding, and conferences.
        </p>
      </div>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* EscapeMasters */}
          <div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <Image
                src="/images/format-escape.png"
                alt="EscapeMasters online escape room"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              EscapeMasters
            </h2>
            <p className="text-[#525252] leading-relaxed mb-6">
              Our signature online escape room experience — engaging, fun, and
              genuinely team-building. Participants collaborate to solve puzzles,
              decode clues, and escape together. Designed to spark energy, laughter,
              and connection in your team.
            </p>
            <Link
              href="/en/contact"
              className="bg-accent text-white px-6 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
            >
              Book EscapeMasters
            </Link>
          </div>

          {/* R@venHack */}
          <div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-6">
              <Image
                src="/images/format-2.png"
                alt="R@venHack cyber security escape room"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              R@venHack: Cyber Security
            </h2>
            <p className="text-[#525252] leading-relaxed mb-6">
              A cybersecurity-themed escape game that educates and thrills. Teams
              work together to stop a cyberattack, learning about digital security
              in the most engaging way possible. Ideal for organizations that want
              to raise security awareness while having fun.
            </p>
            <p className="text-[#525252] leading-relaxed mb-6">
              You play with 5 to 75 people, in several teams at once. The Experience
              of 90 minutes has the connection built in: time to get to know each
              other, to get stuck together and to talk it over calmly afterwards. The
              Quick of 60 minutes leaves that out and is purely the game, for groups
              of up to 30 who already know each other well.
            </p>
            <GrotereGroepen taal="en" className="mb-6" />
            <Link
              href="/en/contact"
              className="bg-accent text-white px-6 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
            >
              Book R@venHack
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">
          Want to know more or get a quote?
        </h2>
        <Link
          href="/en/contact"
          className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
