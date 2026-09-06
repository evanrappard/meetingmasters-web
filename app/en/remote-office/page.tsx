import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroBeeld from "@/components/ui/HeroBeeld";

export const metadata: Metadata = {
  title: "Remote Office | MeetingMasters",
  description:
    "A permanent virtual office where your team actually meets. Structured around SpatialChat — a platform where people move, connect, and collaborate without scheduling everything.",
};

const features = [
  {
    title: "Always-on presence",
    body: "Your team has a virtual space that exists between meetings. No need to schedule every interaction.",
  },
  {
    title: "Spatial movement",
    body: "People move between rooms, drop in on conversations, and run into each other — the way it works in a physical office.",
  },
  {
    title: "Structured setup",
    body: "We design your space: team rooms, project spaces, social corners. Organised around how your team actually works.",
  },
  {
    title: "Ongoing support",
    body: "We train your team, set up the environment, and are available when something doesn't work.",
  },
  {
    title: "Custom tools",
    body: "From digital whiteboards to polling, voting, and document sharing — everything you need, in one space.",
  },
  {
    title: "Meeting facilitation",
    body: "When important moments need more structure, a Meeting Master joins to facilitate.",
  },
];

export default function RemoteOfficePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <HeroBeeld
            src="/images/planning-3.webp"
            alt="Virtual office"
            fill
            className="object-cover opacity-25"
            priority
            quality={90}
          />
        </div>
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold mb-4 tracking-widest uppercase">
              Remote Office
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A virtual office that
              <br />
              actually works.
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
              Not a video call. A permanent online space where your team meets,
              collaborates, and stays connected — without scheduling everything
              in advance.
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

      {/* What it is */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5 leading-snug">
                Not just a meeting tool.
                <br />A place where your team lives.
              </h2>
              <p className="text-[#525252] leading-relaxed mb-4">
                Most remote teams work in isolation and only come together when
                something is scheduled. A virtual office changes that — it gives
                people a shared space that&apos;s always there.
              </p>
              <p className="text-[#525252] leading-relaxed mb-4">
                We work with SpatialChat: a platform where participants move
                through virtual rooms, fall into proximity-based conversations,
                and experience something closer to an office than a call grid.
              </p>
              <p className="text-[#525252] leading-relaxed mb-6">
                We set it up, design the layout, train your team, and stay
                available for the moments that need a facilitator.
              </p>
              <Link
                href="/en/contact"
                className="text-accent text-sm font-medium hover:text-accent-dark transition-colors"
              >
                Ask us about your situation →
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/strategy-1.webp"
                alt="SpatialChat virtual office interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">
            What you get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-7 border border-gray-200">
                <h3 className="font-bold text-[#333333] text-base mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case snapshot */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-50 rounded-xl p-10 border border-gray-200">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              Case
            </p>
            <h3 className="text-xl font-bold text-primary mb-4">
              World Olympians Association: e-OLY House
            </h3>
            <p className="text-[#525252] leading-relaxed mb-4">
              The World Olympians Association needed a virtual home for former
              Olympians around the globe — a place where members could connect,
              host events, and gather without mandated programming. We built
              e-OLY House in SpatialChat: a permanent virtual space with
              informal social areas, event rooms, and always-on presence for
              members in every timezone.
            </p>
            <Link
              href="/en/testimonials"
              className="text-accent text-sm font-medium hover:text-accent-dark transition-colors"
            >
              Read more cases →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to see how it works?
          </h2>
          <p className="text-white/70 mb-8">
            A 30-minute demo in our own virtual office. You&apos;ll experience
            the platform firsthand — and we can talk about what it would look
            like for your team.
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
