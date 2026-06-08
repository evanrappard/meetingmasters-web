import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Games & Tools | MeetingMasters",
  description:
    "EscapeMasters, R@venHack, and custom-built interactive formats. Online escape rooms, onboarding games, and security awareness experiences — ready-to-play or made to measure.",
};

const readyToPlay = [
  {
    id: "escape-masters",
    title: "EscapeMasters",
    subtitle: "The signature online escape room",
    desc: "Teams collaborate to solve puzzles, decode clues, and escape together. Genuinely team-building — designed to spark energy, laughter, and connection. Works for 10 to 200 participants.",
    href: "/nl/games-tools/escape-masters",
    image: "/images/format-escape.png",
    imageAlt: "EscapeMasters escape room",
    tag: "Ready to play",
  },
  {
    id: "ravenhack",
    title: "R@venHack: Cyber Security",
    subtitle: "A cybersecurity awareness experience",
    desc: "Teams race to stop a cyberattack. Participants learn about digital security in the most engaging way possible — by doing. Ideal for organisations that want to raise security awareness without a boring training.",
    href: "/nl/games-tools/ravenhack",
    image: "/images/format-2.png",
    imageAlt: "R@venHack cyber security game",
    tag: "Ready to play",
  },
];

const customOptions = [
  {
    title: "Custom escape room",
    desc: "Your content, your brand, your story — in an escape room format. We build it from scratch: puzzles, narrative, platform, and live facilitation.",
  },
  {
    title: "Onboarding game",
    desc: "An interactive introduction to your organisation, culture, and colleagues — designed as a game. New hires explore, discover, and connect from day one.",
  },
  {
    title: "Security awareness game",
    desc: "Beyond a phishing test. A playful, team-based experience that builds real understanding of digital risks — and makes it stick.",
  },
  {
    title: "Something specific",
    desc: "Have an idea that doesn't fit the above? Tell us. We've built interactive formats for onboarding, compliance, change management, and more.",
  },
];

export default function GamesToolsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-3 tracking-widest uppercase">
          Games &amp; Tools
        </p>
        <h1 className="text-4xl font-bold text-primary mb-5">
          Play together. Learn something.
        </h1>
        <p className="text-[#666666] text-lg max-w-2xl mx-auto leading-relaxed">
          Ready-to-play online formats and custom-built interactive experiences.
          From escape rooms to onboarding games — made for groups, designed for
          engagement.
        </p>
      </section>

      {/* Ready-to-play formats */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-3 text-center">
            Ready to play
          </h2>
          <p className="text-[#666666] text-center mb-12 max-w-xl mx-auto">
            Two formats that are ready to run — just add your team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {readyToPlay.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-accent hover:shadow-sm transition-all"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold text-white bg-accent rounded-full px-3 py-1">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs text-accent font-medium uppercase tracking-wider mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-accent transition-colors inline-block"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Made to measure */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Made to measure
            </h2>
            <p className="text-[#666666] max-w-xl mx-auto">
              When an off-the-shelf format isn&apos;t quite right, we build
              something specific. Custom content, your branding, your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {customOptions.map((opt) => (
              <div
                key={opt.title}
                className="bg-white border border-gray-200 rounded-xl p-7 hover:border-accent transition-colors"
              >
                <h3 className="font-bold text-[#333333] text-base mb-3">
                  {opt.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/nl/contact"
              className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
            >
              Talk to us about your idea
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="text-xl italic text-[#555555] leading-relaxed mb-6">
            &ldquo;Our Olympians always expect excellence, and with Meeting
            Masters that&apos;s simply the standard. The key might lay in the
            fact that it&apos;s just such a joy to work with them.&rdquo;
          </blockquote>
          <p className="font-bold text-[#333333] text-sm">
            World Olympians Association
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to see a format in action?
          </h2>
          <p className="text-white/70 mb-8">
            We can demo EscapeMasters or R@venHack live. Or walk through a
            custom concept for your organisation.
          </p>
          <Link
            href="/nl/contact"
            className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Plan a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
