import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/ui/HeroCarousel";

export const metadata: Metadata = {
  title: "MeetingMasters | Online Meeting Professionals",
  description:
    "We transform your online meetings into meaningful encounters. Strategy, facilitation, and technical support for virtual events.",
};

const formats = [
  "Online brainstorm sessions",
  "Online company party",
  "Online Escape Room",
  "Personal development online",
  "Online strategy sessions",
  "Interactive webinars",
  "Online team development",
  "Remote office",
  "Online citizen councils",
  "Online townhall",
  "Online World Café",
  "Annual meeting online",
  "Online Open Space",
  "Online conferences",
  "Online Community Building",
  "Online sounding board",
];

const testimonials = [
  {
    company: "World Olympians Association",
    quote:
      "Our Olympians always expect excellence, and with Meeting Masters that's simply the standard. The key might lay in the fact that it's just such a joy to work with them.",
  },
  {
    company: "Bergman Clinics",
    quote:
      "MeetingMasters also think along with you on how to get the best out of an online meeting or event. A valuable contribution to connection in this time.",
  },
  {
    company: "Red Cross Netherlands",
    quote:
      "An event where people could truly listen to each other and learn from one another. A new experience in the events world. Digital yet very natural.",
  },
];

const badges = [
  "SpatialChat Masters",
  "Zoom Masters",
  "Zoom Events Masters",
  "Teams Masters",
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* 4-column service overview */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "/images/strategy-banner.jpg",
                alt: "Strategy and concept",
                title: "Strategy & concept",
                desc: "Together, we design formats that work — in content, in tech, and for people.",
                href: "/en/strategy-concept",
              },
              {
                img: "/images/format-1.jpg",
                alt: "Meeting formats",
                title: "Meeting formats",
                desc: "16+ formats for every kind of gathering — brainstorms, strategy days, escape rooms, and more.",
                href: "/en/meeting-formats",
              },
              {
                img: "/images/planning-3.jpg",
                alt: "Planning and support",
                title: "Planning & support",
                desc: "We help with planning and design, live (tech)support, and guiding real-time interaction.",
                href: "/en/planning-support",
              },
              {
                img: "/images/planning-1.png",
                alt: "Meeting Academy",
                title: "Meeting Academy",
                desc: "Tools and approaches for running meetings that work — whether online, in person, or hybrid.",
                href: "/en/contact",
              },
            ].map((card) => (
              <div key={card.title} className="flex flex-col">
                <div className="relative w-full aspect-[4/3] mb-4 overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-base text-[#333333] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed flex-1">
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className="mt-3 text-sm text-accent hover:text-accent-dark underline underline-offset-2 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "We are online meeting professionals" */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-3">
            We are online meeting professionals
          </h2>
          <p className="text-[#666666] text-lg mb-12">
            We transform your online meetings into meaningful encounters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-12">
            {[
              {
                title: "Strategy & concept",
                body: "Together, we design formats that work — in content, in tech, and for people.",
                href: "/en/strategy-concept",
              },
              {
                title: "Planning & support",
                body: "We help with planning and design, live (tech)support, and guiding real-time interaction.",
                href: "/en/planning-support",
              },
              {
                title: "Meeting Academy",
                body: "Methods and techniques for meetings that work: online, offline, and hybrid.",
                href: "/en/contact",
              },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="font-bold text-[#333333] text-base mb-2">
                  {col.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed mb-3">
                  {col.body}
                </p>
                <Link
                  href={col.href}
                  className="text-sm text-accent hover:text-accent-dark transition-colors"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/en/contact"
              className="bg-accent text-white px-6 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors"
            >
              Plan a free consultation
            </Link>
            <Link
              href="/en/contact"
              className="border border-accent text-accent px-6 py-3 text-sm font-semibold rounded hover:bg-accent hover:text-white transition-colors"
            >
              Book a demo in our virtual office
            </Link>
            <a
              href="tel:+31202390313"
              className="text-accent px-6 py-3 text-sm font-semibold hover:text-accent-dark transition-colors"
            >
              Call or email us
            </a>
          </div>
        </div>
      </section>

      {/* Platform badges */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-primary mb-8">
            We are certified specialists in:
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => (
              <div
                key={badge}
                className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-sm font-semibold text-primary shadow-sm hover:border-accent hover:text-accent transition-colors"
              >
                {badge}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#666666]">
            Facilitator, moderator, host, co-host, online producer — we guide
            meetings with various technologies.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-10">
            What our clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.company}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <p className="italic text-[#666666] text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-bold text-[#333333] text-sm">{t.company}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/en/testimonials"
              className="text-accent hover:text-accent-dark text-sm font-medium transition-colors"
            >
              See all testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* Dark challenge section */}
      <section className="bg-[#2D2D2D] py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-3xl mx-auto leading-snug">
            The real challenge in online meetings isn&apos;t the tech or the
            logistics — it&apos;s the people.
          </h2>
          <p className="text-[#CCCCCC] text-base leading-relaxed max-w-2xl mx-auto mb-6">
            We help organisations turn meetings into more. We build the
            conditions for people-first collaboration — powered by tech, driven
            by real connection, learning, and growth.
          </p>
          <Link
            href="/en/quality"
            className="text-white underline underline-offset-4 hover:text-accent transition-colors text-sm"
          >
            Meetings are made by people. Read our commitment →
          </Link>
        </div>
      </section>

      {/* Manifest CTA */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Meetings are made by people.
          </h2>
          <p className="text-[#666666] mb-8 max-w-xl mx-auto">
            Download our manifest and read our commitment to the human factor in
            every meeting.
          </p>
          <a
            href="/MM-Manifest-UK.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-6 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            ↓ Download MeetingMasters Manifest
          </a>
        </div>
      </section>

      {/* Meeting formats grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-3">
            No single meeting is the same
          </h2>
          <p className="text-[#666666] text-center mb-10 max-w-xl mx-auto">
            What connects them: all of our meetings are about contact and
            connection.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {formats.map((f) => (
              <div
                key={f}
                className="bg-white border border-gray-200 rounded-lg p-3 text-center text-xs font-medium text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                {f}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/en/meeting-formats"
              className="text-accent hover:text-accent-dark text-sm font-medium transition-colors"
            >
              View all meeting formats →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-12">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#666666] mb-6">
            Keen to know what we can mean for your event?
          </p>
          <Link
            href="/en/contact"
            className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Contact us
          </Link>
          <p className="mt-4 text-xs text-[#888888]">
            <Link
              href="/en/testimonials"
              className="hover:text-accent transition-colors"
            >
              Check out our testimonials to see what clients say →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
