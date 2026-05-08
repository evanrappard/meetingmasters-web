import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MeetingMasters | Online Gatherings That Matter",
  description:
    "We design meaningful online gatherings — from large-scale virtual events and escape rooms to structured remote collaboration. For groups of 50 to 500.",
};

const pillars = [
  {
    id: "events",
    label: "Events",
    headline: "Online gatherings for 50 to 500 people.",
    body: "Strategy days, kick-offs, annual meetings, community events, virtual parties. We take care of design, facilitation, and live production. You take care of showing up.",
    cta: { label: "See what's possible", href: "/en/events" },
    image: "/images/hero-1.jpg",
    imageAlt: "Online event with large group",
  },
  {
    id: "remote-office",
    label: "Remote Office",
    headline: "A virtual office that actually works.",
    body: "Not a video call. A permanent online space where your team meets, collaborates, and stays connected — without scheduling everything in advance.",
    cta: { label: "Explore Remote Office", href: "/en/remote-office" },
    image: "/images/planning-3.jpg",
    imageAlt: "Virtual office collaboration",
  },
  {
    id: "games-tools",
    label: "Games & Tools",
    headline: "Escape rooms, onboarding games, and custom formats.",
    body: "EscapeMasters and R@venHack are our ready-to-play formats. Or we build something specific: a custom escape room, an interactive onboarding, a security awareness game.",
    cta: { label: "See Games & Tools", href: "/en/games-tools" },
    image: "/images/format-escape.png",
    imageAlt: "Online escape room",
  },
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

const clients = [
  "World Olympians Association",
  "Bergman Clinics",
  "Red Cross Netherlands",
  "ABN AMRO",
  "Municipality of Amsterdam",
  "Erasmus University",
  "Randstad",
  "Philips",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-2.jpg"
            alt="Online gathering"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold mb-4 tracking-widest uppercase">
              Online events &bull; Remote office &bull; Games &amp; Tools
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              How we meet matters.
              <br />
              Even online.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl">
              We design online gatherings that people actually remember. For
              organisations that care about what happens when their people come
              together — on screen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/en/contact"
                className="bg-accent text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
              >
                Plan a demo
              </Link>
              <Link
                href="/en/events"
                className="border border-white/50 text-white px-8 py-3.5 text-sm font-semibold rounded hover:bg-white/10 transition-colors inline-block"
              >
                See what we do
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-5">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <span className="text-xs text-[#999999] uppercase tracking-widest font-medium">
              Trusted by
            </span>
            {clients.map((c) => (
              <span key={c} className="text-sm text-[#777777] font-medium">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-white py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Three ways we can help
            </h2>
            <p className="text-[#666666] text-lg max-w-xl mx-auto">
              Each with its own logic, its own tools, and its own kind of attention.
            </p>
          </div>

          <div className="space-y-16">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                  <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
                    {pillar.label}
                  </p>
                  <h3 className="text-2xl font-bold text-primary mb-4 leading-snug">
                    {pillar.headline}
                  </h3>
                  <p className="text-[#666666] leading-relaxed mb-6">
                    {pillar.body}
                  </p>
                  <Link
                    href={pillar.cta.href}
                    className="inline-block bg-primary text-white text-sm font-semibold px-6 py-3 rounded hover:bg-accent transition-colors"
                  >
                    {pillar.cta.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What makes it different */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 leading-snug">
                Most online meetings are forgotten
                <br />
                within the week.
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Not because online is worse. But because most meetings weren&apos;t
                designed to be memorable — online or off. We change that.
              </p>
              <p className="text-[#666666] leading-relaxed mb-6">
                We work with SpatialChat as our primary platform: a virtual space where
                people actually move around, bump into each other, and have side
                conversations. Closer to a physical venue than a video call.
              </p>
              <Link
                href="/en/remote-office"
                className="text-accent text-sm font-medium hover:text-accent-dark transition-colors"
              >
                See how the platform works →
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/planning-4.jpg"
                alt="SpatialChat virtual office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">
            What clients say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.company}
                className="bg-gray-50 rounded-xl p-7 border border-gray-200 flex flex-col"
              >
                <p className="italic text-[#666666] text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-bold text-[#333333] text-sm">{t.company}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/en/cases"
              className="text-accent hover:text-accent-dark text-sm font-medium transition-colors"
            >
              See all cases and testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="bg-primary py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-5">
            Curious what this looks like for your organisation?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            A demo takes 30 minutes. We walk through our platform, ask about your
            situation, and you leave with a clear picture.
          </p>
          <Link
            href="/en/contact"
            className="bg-accent text-white px-10 py-4 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Plan a demo
          </Link>
          <p className="mt-5 text-white/50 text-sm">
            Or email us at{" "}
            <a
              href="mailto:contact@meetingmasters.online"
              className="underline hover:text-white transition-colors"
            >
              contact@meetingmasters.online
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
