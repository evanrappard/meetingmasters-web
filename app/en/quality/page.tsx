import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Confidentiality | MeetingMasters",
  description:
    "Our commitment to quality, confidentiality, and professional standards in every meeting we support.",
};

export default function QualityPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-3">
          Quality &amp; Confidentiality
        </h1>
        <p className="text-[#525252] text-lg max-w-xl mx-auto">
          Your trust in us is paramount, and we strive to exceed your
          expectations at every opportunity.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Real contact needs real confidentiality
          </h2>
          <p className="text-[#525252] leading-relaxed">
            In our business, we see a lot, and we hear a lot. Rest assured: we
            are committed to delivering the highest standards in terms of privacy
            and confidentiality. Every Meeting Master has signed a confidentiality
            agreement, with confidentiality being a regularly recurring training
            topic.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Quality is a mindset that drives our business
          </h2>
          <p className="text-[#525252] leading-relaxed mb-4">
            With MeetingMasters, you can trust that every aspect of your meetings
            is handled with the utmost care and professionalism. Though we are
            keen users of technology, our business is primarily a people&apos;s
            business and online hospitality is our key service.
          </p>
          <p className="text-[#525252] leading-relaxed">
            Meeting Masters undergo extensive training covering meeting protocols,
            online etiquette, accessible support, and emergency procedures —
            with tailored briefings and dry runs for each meeting. When unexpected
            challenges arise, it is good to know that you have seasoned
            professionals by your side.
          </p>
        </div>

        <div className="border-l-4 border-accent pl-6 py-2">
          <p className="text-[#444444] italic text-lg">
            &ldquo;We bring inspiration, innovation, and a human touch to the
            domain of online meetings, virtual events, and remote working. We
            enable collaboration that is technology-based, but that always puts
            people first. Because good meetings are primarily a human
            challenge.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
