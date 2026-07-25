import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cases | MeetingMasters",
  description:
    "Echte voorbeelden van online events, virtuele kantoren en interactieve formats — en wat klanten zeggen over de samenwerking met MeetingMasters.",
};

const cases = [
  {
    client: "World Olympians Association",
    category: "Virtueel kantoor",
    title: "e-OLY House: een virtueel thuis voor oud-Olympiërs wereldwijd",
    summary:
      "De World Olympians Association had behoefte aan een digitale ontmoetingsplek voor leden in elke tijdzone — geen belplatform, maar een virtueel thuis. Wij bouwden e-OLY House in SpatialChat: altijd open, met sociale ruimtes, eventzalen en de sfeer van een echte locatie.",
    quote:
      "Onze Olympiërs verwachten altijd topkwaliteit, en met Meeting Masters is dat gewoon de standaard. Misschien zit het hem er wel in dat het simpelweg zo'n plezier is om met ze samen te werken.",
  },
  {
    client: "Bergman Clinics",
    category: "Event",
    title: "Jaarvergadering opnieuw ontworpen voor online",
    summary:
      "Bergman Clinics wilde de hele organisatie online samenbrengen — niet voor een passieve uitzending, maar voor een echt gesprek. Wij ontwierpen het format, begeleidden de interactie en verzorgden de volledige live productie.",
    quote:
      "MeetingMasters denkt ook met je mee over hoe je het beste uit een online meeting of event haalt. Een waardevolle bijdrage aan verbinding in deze tijd.",
  },
  {
    client: "Red Cross Netherlands",
    category: "Event",
    title: "Digitaal en toch heel natuurlijk",
    summary:
      "Een complex event met meerdere stakeholdergroepen — die zich elk gehoord en verbonden moesten voelen. Wij ontwierpen de interactielogica, trainden de hosts en verzorgden de live productie gedurende de hele dag.",
    quote:
      "Een event waar mensen echt naar elkaar konden luisteren en van elkaar konden leren. Een nieuwe ervaring in de eventwereld. Digitaal en toch heel natuurlijk.",
  },
];

const testimonials = [
  {
    company: "Municipality of Amsterdam",
    quote:
      "We vroegen MeetingMasters om ons online burgerparticipatie-event te ontwerpen en te begeleiden. De kwaliteit van de interactie verraste iedereen die erbij betrokken was.",
  },
  {
    company: "ABN AMRO",
    quote:
      "Professioneel, betrokken en ze begrepen echt wat we nodig hadden. Het event overtrof de verwachtingen.",
  },
  {
    company: "Erasmus University",
    quote:
      "MeetingMasters bracht structuur en energie in een complex event met een groot publiek. We werken zeker weer met ze samen.",
  },
  {
    company: "Randstad",
    quote:
      "Het team regelde alles — ontwerp, techniek en begeleiding. Wij konden ons volledig richten op onze inhoud.",
  },
];

export default function CasesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <p className="text-accent text-sm font-semibold mb-3 tracking-widest uppercase">
          Cases &amp; Ervaringen
        </p>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Wat er gebeurt als het werkt.
        </h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          Echte organisaties, echte events, en wat zij zeggen over de
          samenwerking met ons.
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
            Meer ervaringen
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
          Wil je weten hoe dit er voor jou uit kan zien?
        </h2>
        <Link
          href="/nl/contact"
          className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
        >
          Plan een demo
        </Link>
      </section>
    </div>
  );
}
