import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "R@venHack: Cyber Security | MeetingMasters",
  description:
    "A cybersecurity-themed escape game that educates and thrills. Teams stop a cyberattack while learning about digital security in the most engaging way possible.",
};

export default function RavenHackPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-3 tracking-widest uppercase">
          Games &amp; Tools
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          R@venHack: Cyber Security
        </h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          A cybersecurity awareness experience in escape room format. Teams work
          together to stop a cyberattack — and actually understand why it
          matters.
        </p>
      </div>

      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/format-2.png"
                alt="R@venHack cyber security game"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5">
                Beyond the phishing test.
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                R@venHack is a team-based online game in which participants have
                to stop a fictional cyberattack. The clock is ticking. The
                clues are real. And the lessons stick — because they were
                discovered under pressure, together.
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                Designed for organisations that want to raise digital security
                awareness beyond a mandatory e-learning. R@venHack makes the
                abstract concrete, the boring engaging, and the individual
                lesson a shared team experience.
              </p>
              <p className="text-[#666666] leading-relaxed mb-6">
                Duration: 60–90 minutes. Works for 10 to 150 participants.
                Custom scenarios available on request.
              </p>
              <Link
                href="/nl/contact"
                className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
              >
                Book R@venHack
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 text-center border-y border-gray-200">
        <h2 className="text-xl font-bold text-primary mb-4">
          Want to run a demo?
        </h2>
        <p className="text-[#666666] mb-6 max-w-md mx-auto">
          We can walk you through R@venHack and discuss whether a custom
          scenario would fit your organisation better.
        </p>
        <Link
          href="/nl/contact"
          className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
        >
          Request a demo
        </Link>
      </section>
    </div>
  );
}
