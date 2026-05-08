import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cases | MeetingMasters",
  description:
    "Real examples of online events, virtual offices, and interactive formats — and what clients say about working with MeetingMasters.",
};

const cases = [
  {
    client: "World Olympians Association",
    category: "Remote Office",
    title: "e-OLY House: A virtual home for former Olympians worldwide",
    summary:
      "The World Olympians Association needed a digital gathering space for members across every timezone — not a call platform, but a virtual home. We built e-OLY House in SpatialChat: always-on, with social spaces, event rooms, and the feel of a real venue.",
    quote:
      "Our Olympians always expect excellence, and with Meeting Masters that's simply the standard. The key might lay in the fact that it's just such a joy to work with them.",
  },
  {
    client: "Bergman Clinics",
    category: "Event",
    title: "Annual meeting redesigned for online",
    summary:
      "Bergman Clinics needed to bring together their full organisation online — not for a passive broadcast, but for genuine dialogue. We designed the format, facilitated the interaction, and handled full live production.",
    quote:
      "MeetingMasters also think along with you on how to get the best out of an online meeting or event. A valuable contribution to connection in this time.",
  },
  {
    client: "Red Cross Netherlands",
    category: "Event",
    title: "Digital yet very natural",
    summary:
      "A complex event with multiple stakeholder groups — each needing to feel heard and connected. We designed the interaction logic, trained the hosts, and ran live production throughout the day.",
    quote:
      "An event where people could truly listen to each other and learn from one another. A new experience in the events world. Digital yet very natural.",
  },
];

const testimonials = [
  {
    company: "Municipality of Amsterdam",
    quote:
      "We asked MeetingMasters to design and run our online citizen participation event. The quality of the interaction surprised everyone involved.",
  },
  {
    company: "ABN AMRO",
    quote:
      "Professional, responsive, and they really understood what we needed. The event exceeded expectations.",
  },
  {
    company: "Erasmus University",
    quote:
      "MeetingMasters brought structure and energy to a complex event with a large audience. We'll work with them again.",
  },
  {
    company: "Randstad",
    quote:
      "The team handled everything — design, tech, and facilitation. We could focus entirely on our content.",
  },
];

export default function CasesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-3 tracking-widest uppercase">
          Cases &amp; Testimonials
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          What happens when it works.
        </h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          Real organisations, real events, and what they say about working with
          us.
        </p>
      </div>

      {/* Featured cases */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {cases.map((c) => (
              <div
                key={c.client}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="md:col-span-2">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                    {c.category} &mdash; {c.client}
                  </p>
                  <h2 className="text-xl font-bold text-primary mb-4">
                    {c.title}
                  </h2>
                  <p className="text-[#666666] leading-relaxed">{c.summary}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col justify-center">
                  <p className="italic text-[#666666] text-sm leading-relaxed mb-4">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <p className="font-bold text-[#333333] text-sm">
                    {c.client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More testimonials */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">
            More testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.company}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <p className="italic text-[#666666] text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-bold text-[#333333] text-sm">
                  {t.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">
          Want to know what this could look like for you?
        </h2>
        <Link
          href="/en/contact"
          className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
        >
          Plan a demo
        </Link>
      </section>
    </div>
  );
}
