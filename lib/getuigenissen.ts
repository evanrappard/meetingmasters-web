/**
 * De klantgetuigenissen, op één plek.
 *
 * Stonden eerder in `components/ui/TestimonialsCarousel.tsx`. Dat is een
 * client-component, en een servercomponent die daar een waarde uit importeert
 * krijgt geen echte array terug maar een verwijzing: `SLIDES.find is not a
 * function`. Daarom staan ze hier, in een gewoon databestand dat beide kanten
 * op werkt.
 */

export const GETUIGENISSEN = [
  {
    quote: "MeetingMasters heeft ons zorgeloos door het hele traject begeleid: van het bepalen van doelen en het aanscherpen van de inhoud tot de live uitvoering.",
    quoteEn: "MeetingMasters guided us through the whole process without a worry: from setting the goals and sharpening the content right through to running it live.",
    company: "Gemeente Roosendaal",
    context: "Online participatiesessie",
    contextEn: "Online participation session",
    logo: "/images/logos/roosendaal.webp",
  },
  {
    quote: "MeetingMasters zorgt er niet alleen voor dat je technisch ondersteund bent. Ze denken ook mee over hoe je het beste uit een online meeting of event haalt.",
    quoteEn: "MeetingMasters do not just make sure you are supported technically. They also think along about how to get the most out of an online meeting or event.",
    company: "Bergman Clinics",
    context: "Online strategiedag",
    contextEn: "Online strategy day",
    logo: "/images/logos/bergman-clinics.webp",
  },
  {
    quote: "Medewerkers van 5 kantoren online samenbrengen om twee weken lang te strategiseren vereist sterke facilitatieve vaardigheden. MeetingMasters heeft ons daar gebracht.",
    quoteEn: "Bringing staff from five offices together online for two weeks of strategy work demands serious facilitation skills. MeetingMasters got us there.",
    company: "PharmAccess",
    context: "Online strategietraject — 5 internationale kantoren",
    contextEn: "Online strategy programme — 5 international offices",
    logo: "/images/logos/pharmaccess.webp",
  },
  {
    quote: "Met een heldere visie, een frisse creatieve blik en bijzonder prettige service blinkt MeetingMasters echt uit in het online samenbrengen van mensen.",
    quoteEn: "With a clear vision, a fresh creative eye and thoroughly pleasant service, MeetingMasters really do excel at bringing people together online.",
    company: "Prins Bernhard Cultuurfonds",
    context: "Online bijeenkomst",
    contextEn: "Online gathering",
    logo: "/images/logos/pbcf.webp",
  },
];
