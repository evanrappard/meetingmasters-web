import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | MeetingMasters",
  description:
    "Meet Emilie van Rappard and the MeetingMasters team — experienced online meeting professionals.",
};

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-3">Our Team</h1>
        <p className="text-[#525252] text-lg">
          A clear vision and many years of solid experience.
        </p>
      </div>

      {/* Founder */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full aspect-[3/4] max-w-sm mx-auto md:mx-0 overflow-hidden rounded-lg">
            <Image
              src="/images/team-emilie.webp"
              alt="Emilie van Rappard"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="pt-4">
            <h2 className="text-2xl font-bold text-primary mb-1">
              Emilie van Rappard
            </h2>
            <p className="italic text-[#525252] text-base mb-6">Founder</p>
            <p className="text-[#444444] leading-relaxed mb-4">
              As a brand and participative strategy consultant, Emilie has been
              guiding national and international groups to explore new directions
              and drive change. Based on the principles of Genuine Contact and
              Liberating Structures, she is in search of what connects people and
              organizations — onsite and online.
            </p>
            <p className="text-[#444444] leading-relaxed">
              Emilie is the founder of MeetingMasters Online. With a passion for
              genuine human connection and a deep understanding of digital
              environments, she has built a team and a methodology that
              consistently delivers meaningful online gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* Our Masters */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-2">
            About our Meeting Masters
          </h2>
          <p className="text-[#525252] mb-8">
            With a small back office, an extensive partner network, and a solid
            team of highly educated Meeting Masters, we work every day to make
            your meetings, summits, and events better.
          </p>
          <div className="relative w-full aspect-[16/7] overflow-hidden rounded-lg mb-8">
            <Image
              src="/images/team-group.webp"
              alt="MeetingMasters team"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-[#444444] leading-relaxed max-w-3xl">
            Our Masters are students, recruited for their initiative, customer
            focus, and digital interest. They are problem solvers and communicate
            well, in different languages. Every Meeting Master has been trained at
            the MeetingMasters Academy. To keep knowledge and skills up to date,
            we have regular refresher meetings and tech tests. Together they
            facilitate genuine contact.
          </p>
        </div>
      </section>
    </div>
  );
}
