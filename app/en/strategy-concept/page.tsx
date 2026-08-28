import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroBeeld from "@/components/ui/HeroBeeld";

export const metadata: Metadata = {
  title: "Strategy & Concept | MeetingMasters",
  description:
    "We design online meeting strategies and formats that work — in content, technology, and for people.",
};

const cards = [
  {
    img: "/images/strategy-1.png",
    alt: "Goal and direction",
    title: "Goal & direction",
    body: "We formulate meeting strategies that stimulate engagement and contribute to reaching your goals. What is the context of your meetings? What is the envisioned result, both in terms of content and relationships?",
  },
  {
    img: "/images/format-1.jpg",
    alt: "Formats and technology",
    title: "Formats & technology",
    body: "What fits the objectives? How surprising can the online setting be? We advise on platform, formats, and concepts that stimulate interaction and give ideas space and direction.",
  },
  {
    img: "/images/planning-1.png",
    alt: "Structure and design",
    title: "Structure & design",
    body: "We translate plans into detailed playbooks: a guideline for organizers, speakers, and facilitators — and an important anchor for supporting Masters.",
  },
];

export default function StrategyConceptPage() {
  return (
    <>
      {/* Hero banner */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <HeroBeeld
          src="/images/strategy-banner.jpg"
          alt="Strategy and concept"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase mb-3 text-white/70">
              ► From strategy to online meeting concept
            </p>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Strategy & Concept
            </h1>
            <p className="text-base md:text-lg text-white/85">
              We aim for an efficient approach to online interaction, with
              maximum engagement for real results.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#525252] text-lg leading-relaxed">
            Whether you&apos;re hosting a small, intense online meeting or a
            large multi-day online summit — gatherings rarely exist in isolation.
            We design formats that genuinely work: for your content, your
            relationships, and your goals.
          </p>
        </div>
      </section>

      {/* 3 service cards */}
      <section className="bg-white py-8 pb-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((c) => (
              <div key={c.title}>
                <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded">
                  <Image src={c.img} alt={c.alt} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-[#333333] text-lg mb-3">{c.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-14 text-center">
        <h2 className="text-xl font-bold text-primary mb-4">
          Ready to design your next meeting?
        </h2>
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
