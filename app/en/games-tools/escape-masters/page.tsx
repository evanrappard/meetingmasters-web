import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EscapeMasters | Online Escape Room | MeetingMasters",
  description:
    "EscapeMasters is our signature online escape room — designed for teams of 10 to 200 people. Genuinely team-building, actually fun.",
};

export default function EscapeMastersPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-3 tracking-widest uppercase">
          Games &amp; Tools
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">EscapeMasters</h1>
        <p className="text-[#525252] text-lg max-w-xl mx-auto">
          Our signature online escape room. Teams collaborate to solve puzzles,
          decode clues, and escape together. Designed to spark energy, laughter,
          and real connection.
        </p>
      </div>

      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5">
                What it is
              </h2>
              <p className="text-[#525252] leading-relaxed mb-4">
                EscapeMasters is a fully online escape room experience — no
                physical room required. Participants work together in small
                teams, solving a series of puzzles within a time limit. A
                Meeting Master hosts and facilitates the entire session live.
              </p>
              <p className="text-[#525252] leading-relaxed mb-4">
                Works for 10 to 200 participants. We split large groups into
                competing teams and run a shared leaderboard. The right size of
                adrenaline for a kick-off, a company party, or a team day.
              </p>
              <p className="text-[#525252] leading-relaxed mb-6">
                Duration: 60–90 minutes. Platform: browser-based, no downloads
                required.
              </p>
              <Link
                href="/en/contact"
                className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
              >
                Book EscapeMasters
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/format-escape.png"
                alt="EscapeMasters online escape room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 text-center border-y border-gray-200">
        <h2 className="text-xl font-bold text-primary mb-4">
          Want to see it in action?
        </h2>
        <p className="text-[#525252] mb-6 max-w-md mx-auto">
          We can run a short demo version of EscapeMasters — so you can
          experience it before you book.
        </p>
        <Link
          href="/en/contact"
          className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
        >
          Request a demo
        </Link>
      </section>
    </div>
  );
}
