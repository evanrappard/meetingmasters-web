import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | MeetingMasters",
  description:
    "What our clients say about working with MeetingMasters Online.",
};

const testimonials = [
  {
    company: "ROC TOP",
    quote:
      "The flexibility and creative qualities of the MeetingMasters were of great value both before and during the event. A valuable contribution to connection in this time.",
  },
  {
    company: "Bergman Clinics",
    quote:
      "MeetingMasters not only ensure that you are technically supported. They also think along with you on how to get the best out of an online meeting or event. A valuable contribution to connection in this time.",
  },
  {
    company: "ZonMW",
    quote:
      "MeetingMasters provided us with the online facilitation of a meeting of an innovative learning network 'Make Room for Health'. A professional and warm approach that made participants feel genuinely at ease.",
  },
  {
    company: "Gemeente Roosendaal",
    quote:
      "MeetingMasters guided us worry-free through the entire process: from defining goals and sharpening the content of the meeting to the live execution.",
  },
  {
    company: "PharmAccess",
    quote:
      "Bringing together employees from 5 offices to strategize online for two weeks requires key facilitation skills. MeetingMasters got us there.",
  },
  {
    company: "Oranje Fonds",
    quote:
      "Emilie and her team are professional and skilled and prepare all meetings down to the second with great commitment. Highly recommended.",
  },
  {
    company: "World Olympians Association",
    quote:
      "Our Olympians always expect excellence, and with Meeting Masters that's simply the standard. I don't know how they do their magic, but the key might lay in the fact that it's just such a joy to work with them.",
  },
  {
    company: "Bouw & Infra",
    quote:
      "Emilie and colleagues help us every time with proper preparation and they think carefully about what is needed before, during and after the meetings. They give tips and tricks and help where needed.",
  },
  {
    company: "Omron",
    quote:
      "Emilie and her team are constantly spot-on, attentive to all the details, and adapting the session to the needs. They delivered a highly interactive session on 'Effective Meetings', emphasizing all the important aspects that bring meetings to the next level.",
  },
  {
    company: "Red Cross Netherlands",
    quote:
      "MeetingMasters organized Diversity Day for the Red Cross Netherlands, aiming to create more awareness around inclusion/exclusion. An event where people could truly listen to each other and learn from one another. Digital yet very natural.",
  },
  {
    company: "Het Cultuurfonds",
    quote:
      "With a clear vision, a fresh creative perspective, and very pleasant service, MeetingMasters truly excel in bringing people together online.",
  },
  {
    company: "Digital Fitness",
    quote:
      "MeetingMasters takes care of all the technical and facilitation aspects, so that as a trainer you can focus fully on the content. Whoever wants to make an online session a resounding success would do very well to talk to MeetingMasters.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-3">Testimonials</h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          What our clients say about working with MeetingMasters.
        </p>
      </div>

      {/* List */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-0">
        {testimonials.map((t, i) => (
          <div
            key={t.company}
            className={`py-8 ${i < testimonials.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <h3 className="font-bold text-[#333333] text-lg mb-3">
              {t.company}
            </h3>
            <p className="italic text-[#666666] leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
