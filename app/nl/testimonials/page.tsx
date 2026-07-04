import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ervaringen | MeetingMasters",
  description:
    "Wat onze klanten zeggen over de samenwerking met MeetingMasters Online.",
};

const testimonials = [
  {
    company: "ROC TOP",
    quote:
      "De flexibiliteit en creatieve kwaliteiten van de MeetingMasters waren zowel voor als tijdens het evenement van grote waarde. Een waardevolle bijdrage aan verbinding in deze tijd.",
  },
  {
    company: "Bergman Clinics",
    quote:
      "MeetingMasters zorgen er niet alleen voor dat u technisch ondersteund wordt. Ze denken ook met u mee over hoe u het beste uit een online meeting of evenement haalt. Een waardevolle bijdrage aan verbinding in deze tijd.",
  },
  {
    company: "ZonMW",
    quote:
      "MeetingMasters verzorgde voor ons de online facilitatie van een bijeenkomst van een innovatief lerend netwerk 'Maak Ruimte voor Gezondheid'. Een professionele en warme aanpak waardoor deelnemers zich echt op hun gemak voelden.",
  },
  {
    company: "Gemeente Roosendaal",
    quote:
      "MeetingMasters begeleidde ons zorgeloos door het hele proces: van het bepalen van de doelen en het aanscherpen van de inhoud van de bijeenkomst tot de live uitvoering.",
  },
  {
    company: "PharmAccess",
    quote:
      "Medewerkers uit 5 kantoren twee weken lang online samenbrengen om te strategiseren vraagt om essentiële facilitatievaardigheden. MeetingMasters bracht ons daar.",
  },
  {
    company: "Oranje Fonds",
    quote:
      "Emilie en haar team zijn professioneel en vakkundig en bereiden alle bijeenkomsten met grote betrokkenheid tot op de seconde voor. Een echte aanrader.",
  },
  {
    company: "World Olympians Association",
    quote:
      "Onze Olympiërs verwachten altijd het allerbeste, en met Meeting Masters is dat gewoon de standaard. Ik weet niet hoe ze hun magie doen, maar de sleutel ligt misschien in het feit dat het simpelweg zo'n plezier is om met hen samen te werken.",
  },
  {
    company: "Bouw & Infra",
    quote:
      "Emilie en collega's helpen ons elke keer met een gedegen voorbereiding en denken zorgvuldig na over wat er nodig is voor, tijdens en na de bijeenkomsten. Ze geven tips en tricks en helpen waar nodig.",
  },
  {
    company: "Omron",
    quote:
      "Emilie en haar team zitten er voortdurend bovenop, letten op alle details en passen de sessie aan op de behoeften. Ze verzorgden een zeer interactieve sessie over 'Effectief Vergaderen', waarin alle belangrijke aspecten aan bod kwamen die vergaderingen naar een hoger niveau tillen.",
  },
  {
    company: "Red Cross Netherlands",
    quote:
      "MeetingMasters organiseerde Diversity Day voor het Nederlandse Rode Kruis, met als doel meer bewustwording te creëren rond inclusie/exclusie. Een evenement waar mensen echt naar elkaar konden luisteren en van elkaar konden leren. Digitaal en toch heel natuurlijk.",
  },
  {
    company: "Het Cultuurfonds",
    quote:
      "Met een heldere visie, een frisse creatieve blik en zeer prettige service excelleren MeetingMasters echt in het online samenbrengen van mensen.",
  },
  {
    company: "Digital Fitness",
    quote:
      "MeetingMasters neemt alle technische en facilitaire aspecten uit handen, zodat u zich als trainer volledig op de inhoud kunt richten. Wie van een online sessie een klinkend succes wil maken, doet er goed aan om met MeetingMasters in gesprek te gaan.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-3">Ervaringen</h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          Wat onze klanten zeggen over de samenwerking met MeetingMasters.
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
