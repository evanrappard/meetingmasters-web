import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Events | MeetingMasters",
  description:
    "Meaningful online gatherings for 50 to 500 people. Strategy days, kick-offs, community events, virtual parties — designed, facilitated, and produced by MeetingMasters.",
};

const eventTypes = [
  {
    title: "Strategy Day",
    desc: "A full day that produces decisions, not just presentations. We design for real dialogue and clear outcomes.",
    href: "/en/events/strategy-day",
    tag: "Most requested",
  },
  {
    title: "Virtual Christmas Party",
    desc: "An evening that people actually enjoy — online. Games, live music, escape rooms, social spaces. Not a Zoom call with wine.",
    href: "/en/events/christmas-party",
    tag: "Fan favourite",
  },
  {
    title: "Kick-off",
    desc: "The right energy at the start of a year, a project, or a new chapter. High energy, clear direction, and a team that leaves connected.",
    href: "/en/events/kick-off",
    tag: null,
  },
  {
    title: "Community Event",
    desc: "For associations, alumni networks, or professional communities. A recurring gathering that people look forward to.",
    href: "/en/events/community-event",
    tag: null,
  },
  {
    title: "All-hands Meeting",
    desc: "Town halls for 100 to 500 people — with real interaction. Not a passive broadcast. A moment where your people are actually present.",
    href: "/en/events/all-hands",
    tag: null,
  },
  {
    title: "Onboarding Event",
    desc: "First impressions last. An onboarding that introduces new people to culture, colleagues, and working methods — without a single 'put yourself on mute'.",
    href: "/en/events/onboarding",
    tag: null,
  },
  {
    title: "Annual Meeting",
    desc: "Governance-compliant, well-structured, and not as boring as they sound. We handle the tech, you handle the agenda.",
    href: "/en/events/annual-meeting",
    tag: null,
  },
  {
    title: "Something else",
    desc: "Every event is different. Tell us what you need.",
    href: "/en/contact",
    tag: null,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Intake",
    body: "We learn about your organisation, your group, and what this event needs to accomplish.",
  },
  {
    step: "02",
    title: "Design",
    body: "We design the format: platform setup, agenda, interaction moments, and any custom elements.",
  },
  {
    step: "03",
    title: "Dry run",
    body: "We run a technical rehearsal with hosts, speakers, and any relevant stakeholders.",
  },
  {
    step: "04",
    title: "Live production",
    body: "On the day, a team of Meeting Masters handles all technical production and participant support.",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-1.jpg"
            alt="Online gathering"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold mb-4 tracking-widest uppercase">
              Events
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Online gatherings
              <br />
              for 50 to 500 people.
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
              Strategy days, kick-offs, community events, and virtual parties —
              designed so something actually happens. We handle the design,
              facilitation, and full technical production.
            </p>
            <Link
              href="/en/contact"
              className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
            >
              Plan a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Event types grid */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-bold text-primary mb-4">
              What kind of event are you organising?
            </h2>
            <p className="text-[#666666] max-w-xl mx-auto">
              Each type has its own logic. Click to see examples, formats, and
              what&apos;s possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eventTypes.map((e) => (
              <Link
                key={e.title}
                href={e.href}
                className="group border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-sm transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[#333333] text-base group-hover:text-accent transition-colors leading-snug">
                    {e.title}
                  </h3>
                  {e.tag && (
                    <span className="ml-2 flex-shrink-0 text-[10px] font-semibold text-accent bg-accent/10 rounded-full px-2 py-0.5">
                      {e.tag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#666666] leading-relaxed flex-1">
                  {e.desc}
                </p>
                <p className="mt-4 text-xs text-accent font-medium group-hover:underline">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl font-bold text-primary mb-4">
              How we work
            </h2>
            <p className="text-[#666666] max-w-xl mx-auto">
              From first conversation to live production. We take care of the
              whole trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step}>
                <p className="text-4xl font-bold text-accent/20 mb-3">
                  {step.step}
                </p>
                <h3 className="font-bold text-primary text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="text-xl italic text-[#555555] leading-relaxed mb-6">
            &ldquo;An event where people could truly listen to each other and
            learn from one another. A new experience in the events world. Digital
            yet very natural.&rdquo;
          </blockquote>
          <p className="font-bold text-[#333333] text-sm">
            Red Cross Netherlands
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Have an event coming up?
          </h2>
          <p className="text-white/70 mb-8">
            Tell us what you&apos;re planning. We&apos;ll tell you what&apos;s
            possible.
          </p>
          <Link
            href="/en/contact"
            className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Plan a demo
          </Link>
        </div>
      </section>
    </div>
  );
}
