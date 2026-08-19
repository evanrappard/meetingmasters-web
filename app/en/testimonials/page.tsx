import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What clients say | MeetingMasters",
  description:
    "What our clients say about working with MeetingMasters Online — from universities and hospitals to the World Olympians Association.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/testimonials",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/testimonials",
      "en-GB": "https://www.meetingmasters.online/en/testimonials",
    },
  },
};

/**
 * De quotes zijn oorspronkelijk in het Nederlands gegeven, op één na: die van
 * de World Olympians Association was al Engels. Die staat hier dus in zijn
 * eigen woorden; de rest is vertaald.
 */
const testimonials = [
  {
    company: "ROC TOP",
    quote:
      "The flexibility and creative skills of the MeetingMasters were of great value both before and during the event. A real contribution to connection in these times.",
  },
  {
    company: "Bergman Clinics",
    quote:
      "MeetingMasters do not just make sure you are supported technically. They also help you get the most out of an online meeting or event. A real contribution to connection in these times.",
  },
  {
    company: "ZonMW",
    quote:
      "MeetingMasters ran the online facilitation of a gathering for an innovative learning network, 'Maak Ruimte voor Gezondheid'. A professional and warm approach that genuinely put participants at ease.",
  },
  {
    company: "Gemeente Roosendaal",
    quote:
      "MeetingMasters took us through the whole process without a single worry: from setting the goals and sharpening the content of the gathering right through to running it live.",
  },
  {
    company: "PharmAccess",
    quote:
      "Bringing staff from five offices together online for two weeks of strategy work demands serious facilitation skills. MeetingMasters got us there.",
  },
  {
    company: "Oranje Fonds",
    quote:
      "Emilie and her team are professional and skilled, and prepare every gathering to the second with real commitment. Highly recommended.",
  },
  {
    company: "World Olympians Association",
    quote:
      "Our Olympians always expect the very best, and with Meeting Masters that is simply the standard. I do not know how they do their magic, but the key may lie in the fact that they are such a pleasure to work with.",
  },
  {
    company: "Bouw & Infra",
    quote:
      "Emilie and colleagues help us every time with thorough preparation and think carefully about what is needed before, during and after the gatherings. They share tips and tricks and step in where needed.",
  },
  {
    company: "Omron",
    quote:
      "Emilie and her team stay on top of everything, watch every detail and adapt the session to what is needed. They ran a highly interactive session on 'Effective Meetings' covering all the aspects that lift a meeting to another level.",
  },
  {
    company: "Red Cross Netherlands",
    quote:
      "MeetingMasters organised Diversity Day for the Netherlands Red Cross, aimed at building awareness around inclusion and exclusion. An event where people could genuinely listen to each other and learn from each other. Digital, and still entirely natural.",
  },
  {
    company: "Het Cultuurfonds",
    quote:
      "With a clear vision, a fresh creative eye and thoroughly pleasant service, MeetingMasters really do excel at bringing people together online.",
  },
  {
    company: "Digital Fitness",
    quote:
      "MeetingMasters take all the technical and practical work off your hands, so that as a trainer you can focus entirely on the content. Anyone who wants to make an online session a resounding success would do well to talk to MeetingMasters.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3">What clients say</h1>
        <p className="text-[#525252] text-lg max-w-xl mx-auto">
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
            <p className="italic text-[#525252] leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
