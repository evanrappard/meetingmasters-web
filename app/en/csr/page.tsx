import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility | MeetingMasters",
  description:
    "MeetingMasters is committed to sustainability, inclusivity, and social responsibility in everything we do.",
};

export default function CSRPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Corporate Social Responsibility
        </h1>
        <p className="text-accent text-xl font-medium max-w-2xl mx-auto">
          When digital meeting channels are better accessible, less people need
          to be lonely. Connecting more people. More contact. That&apos;s what
          we are committed to.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        <div>
          <p className="text-[#444444] text-lg font-medium mb-4">
            We share a passion to do good. NGOs and aid organizations can count
            on reduced rates.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary mb-4">
            Sustainability is a top priority for us
          </h2>
          <p className="text-[#525252] leading-relaxed mb-4">
            Naturally, online meetings are better for the environment than onsite
            gatherings. Participants don&apos;t need to travel, saving not only
            time and money but also fuel. If everyone in the Netherlands were to
            work from home just one day a week, it would lead to a significant
            reduction in CO₂ emissions. That is why we train people to turn
            online meetings into real interactions.
          </p>
          <p className="text-[#525252] leading-relaxed">
            Additionally, we are committed to sustainability in other ways. We
            advocate for the sustainable employability of individuals. We train
            organizations to make online encounters a natural part of their
            culture, so interactions are more than just instrumental contact
            moments. This fosters cohesion within the organization and results in
            more energetic, happier employees.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-primary mb-4">
            Working with NGOs or aid organizations?
          </h3>
          <p className="text-[#525252] mb-6">
            We offer reduced rates for non-profit organizations. Get in touch to
            discuss the possibilities.
          </p>
          <Link
            href="/en/contact"
            className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
