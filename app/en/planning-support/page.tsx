import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import Image from "next/image";
import Link from "next/link";
import HeroBeeld from "@/components/ui/HeroBeeld";

export const metadata: Metadata = {
  alternates: taalAlternates("/planning-support", "en"),
  // Zelfde status als de Nederlandse pagina: nog niet af of vervangen, dus wel
  // bereikbaar maar niet in de zoekresultaten. Staat ook in NIET_INDEXEREN.
  robots: { index: false, follow: true },
  title: "Planning & Support | MeetingMasters",
  description:
    "Expert planning, design, and live support for your online meetings — before, during, and after.",
};

const phases = [
  {
    img: "/images/planning-3.webp",
    title: "Before your meeting",
    body: "Clear intention and a strong plan make meetings more interesting and effective. We are specialists in creating inspiring meeting designs and translate your wishes into a briefing with clear roles and tasks.",
    services: [
      "Meeting design",
      "Platform design",
      "Presentation design",
      "Speakers briefing",
      "Communication support",
      "Manuals & instruction",
      "Test meeting",
      "Entry workshop",
      "Dry run",
    ],
  },
  {
    img: "/images/planning-4.webp",
    title: "During your meeting",
    body: "Meeting Masters support the chairman and ensure that participants feel assisted — from guest reception and technical assistance to co-facilitation, interaction monitoring, and break-out guidance.",
    services: [
      "Participant onboarding",
      "Telephone & online support",
      "Screenshares",
      "Interaction monitoring",
      "Online voting",
      "Online whiteboarding",
      "Break-out guidance",
      "Co-host & social host",
      "Facilitator",
      "Recording & screenshots",
    ],
  },
  {
    img: "/images/planning-1.webp",
    title: "After your meeting",
    body: "Leave session is the end of the meeting — it is often only the beginning of more contact in the future. MeetingMasters supports with structured advice, reports, and participant evaluations.",
    services: [
      "Participants' evaluation",
      "Content report",
      "Technical report",
      "Improvement advice",
    ],
  },
];

export default function PlanningSupportPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <HeroBeeld
          src="/images/planning-2.webp"
          alt="Planning and support"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Planning & support: online meeting essentials
            </h1>
            <p className="text-base md:text-lg text-white/85">
              Want large, complex, or highly interactive meetings to run
              smoothly? Rely on our knowledge, professional guidance, and
              technical support.
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#525252] text-lg leading-relaxed">
            Digital or hybrid: good meetings are not about technology. They are
            about contact and engagement, which starts with human-centric design
            and a solid set-up. Our Meeting Masters are trained to guide and
            unburden participants and organizers as much as possible — planned
            and unplanned. That gives peace, focus, and a much more pleasant
            atmosphere.
          </p>
        </div>
      </section>

      {/* 3 phases */}
      <section className="bg-white pb-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">
            Make more of meetings:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {phases.map((phase) => (
              <div key={phase.title}>
                <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded">
                  <Image
                    src={phase.img}
                    alt={phase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-[#333333] text-lg mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-4">
                  {phase.body}
                </p>
                <ul className="space-y-1">
                  {phase.services.map((s) => (
                    <li key={s} className="text-sm text-[#444444] flex gap-2">
                      <span className="text-accent">►</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-14 text-center">
        <p className="text-[#525252] mb-2">
          Curious? Need more information? Want to get a sense of the costs?
        </p>
        <div className="mt-6">
          <Link
            href="/en/contact"
            className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
