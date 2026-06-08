import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MeetingMasters",
  description:
    "Who we are, how we work, and why online gatherings are our life's work. Founded by Emilie van Rappard.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-3 tracking-widest uppercase">
          About
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          We take online gatherings seriously.
        </h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          Because how people meet shapes what they build together.
        </p>
      </div>

      {/* Emilie */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/team-emilie.jpg"
                alt="Emilie van Rappard"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                Founder
              </p>
              <h2 className="text-2xl font-bold text-primary mb-5">
                Emilie van Rappard
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Emilie van Rappard founded MeetingMasters with one conviction:
                online meetings can be as meaningful as the best in-person
                gatherings — if you design them properly.
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                With a background in organisational facilitation and a decade of
                experience in virtual collaboration, she built MeetingMasters
                into a team of specialists who handle the full spectrum: from
                strategy and format design to live production and technical
                support.
              </p>
              <p className="text-[#666666] leading-relaxed mb-6">
                Her guiding principle: people first. Technology is the means,
                not the product. An online meeting is only as good as the human
                design behind it.
              </p>
              <Link
                href="https://www.linkedin.com/in/emilievanrappard/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm font-medium hover:text-accent-dark transition-colors"
              >
                Connect on LinkedIn →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-5">
                The Meeting Masters
              </h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                MeetingMasters is a network of specialists — facilitators,
                moderators, hosts, co-hosts, and online producers. Each trained
                extensively in online meeting protocols, etiquette, and
                emergency procedures.
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                For every event, we assemble the right team and run a tailored
                briefing and dry run. You get seasoned professionals, not
                coordinators figuring it out on the day.
              </p>
              <p className="text-[#666666] leading-relaxed">
                Our network includes specialists in facilitation, PR,
                technology, education, and interaction design — so we can always
                bring the right expertise.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/team-group.jpg"
                alt="Meeting Masters team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Links to sub-pages */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/nl/about/quality"
              className="border border-gray-200 rounded-xl p-7 hover:border-accent hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-[#333333] text-base mb-2">
                Quality &amp; Confidentiality
              </h3>
              <p className="text-sm text-[#666666] mb-4">
                Every Meeting Master signs a confidentiality agreement. We hold
                ourselves to the highest professional standards.
              </p>
              <p className="text-xs text-accent font-medium">Read more →</p>
            </Link>
            <Link
              href="/nl/about/partners"
              className="border border-gray-200 rounded-xl p-7 hover:border-accent hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-[#333333] text-base mb-2">
                Partners
              </h3>
              <p className="text-sm text-[#666666] mb-4">
                Our network of professional specialists in technology,
                facilitation, PR, and more.
              </p>
              <p className="text-xs text-accent font-medium">See partners →</p>
            </Link>
            <Link
              href="/nl/about/csr"
              className="border border-gray-200 rounded-xl p-7 hover:border-accent hover:shadow-sm transition-all"
            >
              <h3 className="font-bold text-[#333333] text-base mb-2">
                CSR
              </h3>
              <p className="text-sm text-[#666666] mb-4">
                Our commitment to social responsibility and sustainable
                collaboration.
              </p>
              <p className="text-xs text-accent font-medium">Read more →</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
