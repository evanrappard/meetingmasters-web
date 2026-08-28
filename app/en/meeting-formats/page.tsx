import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroBeeld from "@/components/ui/HeroBeeld";

export const metadata: Metadata = {
  title: "Meeting Formats | MeetingMasters",
  description:
    "16+ online meeting formats for every kind of gathering — brainstorms, strategy days, escape rooms, webinars, and more.",
};

const featured = [
  {
    img: "/images/format-party.png",
    alt: "Online company party",
    title: "Fantastic parties",
    desc: "Easy or custom-made — online parties that connect and celebrate. From a virtual borrel to a full Christmas experience.",
    cta: "Get in touch",
  },
  {
    img: "/images/format-escape.png",
    alt: "Online escape room",
    title: "Exciting Escape Rooms",
    desc: "Engaging, team-building escape experiences. Online. Our EscapeMasters and R@venHack formats guarantee energy and interaction.",
    cta: "Learn more",
  },
  {
    img: "/images/strategy-banner.jpg",
    alt: "Online strategy days",
    title: "Thoughtful strategy days",
    desc: "Well-designed online strategy sessions that drive alignment and action. We design the format, you focus on the content.",
    cta: "Get in touch",
  },
];

const allFormats = [
  "Online brainstorm sessions",
  "Online company party",
  "Online Escape Room",
  "Personal development online",
  "Online strategy sessions",
  "Interactive webinars",
  "Online team development",
  "Remote office",
  "Online citizen councils",
  "Online townhall / all-hands",
  "Online World Café",
  "Annual meeting online",
  "Online Open Space",
  "Online conferences",
  "Online Community Building",
  "Online sounding board",
];

export default function MeetingFormatsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[45vh] overflow-hidden">
        <HeroBeeld
          src="/images/format-1.jpg"
          alt="Meeting formats"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              The perfect format for your online gathering
            </h1>
            <p className="text-base text-white/85">
              No single meeting is the same. What connects them all: genuine
              contact and connection.
            </p>
          </div>
        </div>
      </div>

      {/* Featured 3 cards */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((f) => (
              <div key={f.title} className="flex flex-col">
                <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded">
                  <Image src={f.img} alt={f.alt} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-[#333333] text-lg mb-3">{f.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed flex-1 mb-4">
                  {f.desc}
                </p>
                <Link
                  href="/en/contact"
                  className="text-sm text-accent hover:text-accent-dark transition-colors"
                >
                  {f.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-3">
            All meeting formats
          </h2>
          <p className="text-[#525252] text-center mb-10">
            Personal support does not have to be expensive.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {allFormats.map((f) => (
              <div
                key={f}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center text-sm font-medium text-primary hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-14 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">
          Not sure which format fits?
        </h2>
        <p className="text-[#525252] mb-6">
          We&apos;re happy to advise — no strings attached.
        </p>
        <Link
          href="/en/contact"
          className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
