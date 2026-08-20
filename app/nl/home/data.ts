import React from "react";

/**
 * De taalloze data van de homepage: schema.org, logo's, beelden en de
 * indeling van de oplossingenblokken. De Nederlandse teksten staan hier ook,
 * de Engelse in tekst-en.ts.
 *
 * De Engelse pagina praat niet met Sanity: de inhoud daar is Nederlands.
 * Die gebruikt dus altijd de teksten uit tekst-en.ts.
 */

export const SCHEMA_ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MeetingMasters",
  "alternateName": "MeetingMasters Online",
  "url": "https://www.meetingmasters.online",
  "logo": { "@type": "ImageObject", "url": "https://www.meetingmasters.online/images/logo.webp" },
  "description": "MeetingMasters ontwerpt en begeleidt online bijeenkomsten voor 50 tot 500 mensen — events, virtual offices en interactieve formats. Gevestigd in Amsterdam, actief sinds 2020.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Schellingwouderdijk 157",
    "postalCode": "1023NC",
    "addressLocality": "Amsterdam",
    "addressCountry": "NL",
  },
  "contactPoint": [
    { "@type": "ContactPoint", "telephone": "+31-20-239-03-13", "contactType": "customer service", "availableLanguage": ["Dutch", "English"] },
    { "@type": "ContactPoint", "email": "contact@meetingmasters.online", "contactType": "customer service" },
  ],
  "sameAs": ["https://www.linkedin.com/company/meetingmastersonline"],
  "areaServed": { "@type": "Country", "name": "Netherlands" },
};

export const SCHEMA_SERVICES = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Spatial Events",
    "provider": { "@type": "Organization", "name": "MeetingMasters", "url": "https://www.meetingmasters.online" },
    "description": "Online strategiedagen, all-hands meetings, kick-offs en community events voor 50 tot 500 deelnemers. Concept, facilitatie en live productie.",
    "serviceType": "Online Event Organisation",
    "areaServed": { "@type": "Country", "name": "Netherlands" },
    "url": "https://www.meetingmasters.online/nl/events",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Virtual Office",
    "provider": { "@type": "Organization", "name": "MeetingMasters", "url": "https://www.meetingmasters.online" },
    "description": "Virtueel kantoor voor hybride en internationale teams. De digitale thuisbasis voor je organisatie — voor vergaderingen én de informele momenten daartussen.",
    "serviceType": "Virtual Office Service",
    "areaServed": { "@type": "Country", "name": "Netherlands" },
    "url": "https://www.meetingmasters.online/nl/virtual-office",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Games & Tools",
    "provider": { "@type": "Organization", "name": "MeetingMasters", "url": "https://www.meetingmasters.online" },
    "description": "Online escape rooms, onboarding games en interactieve tools voor meer betrokkenheid. Inclusief EscapeMasters en RavenHack cybersecurity escape room.",
    "serviceType": "Interactive Online Experience",
    "areaServed": { "@type": "Country", "name": "Netherlands" },
    "url": "https://www.meetingmasters.online/nl/games-tools",
  },
];

export const SCHEMA_FAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat doet MeetingMasters precies?",
      "acceptedAnswer": { "@type": "Answer", "text": "MeetingMasters ontwerpt en begeleidt online bijeenkomsten — van strategiedagen en all-hands tot virtual offices en escape rooms. Wij verzorgen concept, facilitatie en live productie." },
    },
    {
      "@type": "Question",
      "name": "Voor welke organisaties werkt MeetingMasters?",
      "acceptedAnswer": { "@type": "Answer", "text": "Wij werken voor organisaties die online bijeenkomsten organiseren voor 50 tot 500 mensen — profit, non-profit, overheid en internationaal." },
    },
    {
      "@type": "Question",
      "name": "Wat is SpatialChat en waarom gebruiken jullie dat?",
      "acceptedAnswer": { "@type": "Answer", "text": "SpatialChat is een virtueel platform waarbij deelnemers vrij door de ruimte bewegen en spontaan gesprekken aangaan. Wij gebruiken het omdat het gedrag mogelijk maakt dat in andere tools niet vanzelf ontstaat." },
    },
    {
      "@type": "Question",
      "name": "Wat kost een online event met MeetingMasters?",
      "acceptedAnswer": { "@type": "Answer", "text": "De kosten hangen af van type event, aantal deelnemers en gewenste ondersteuning. Neem contact op voor een eerste inschatting via contact@meetingmasters.online of +31 20 239 03 13." },
    },
  ],
};



// Fallback data — actief zolang er geen Sanity-content is
export const DEFAULT_STATS = [
  { number: "Sinds 2020", label: "online meeting professionals" },
  { number: "250+", label: "events begeleid" },
  { number: "94%", label: "tevredenheid na afloop*" },
  { number: "47%", label: "meer betrokkenheid*" },
  { number: "66%", label: "hogere opkomst*" },
];

export const DEFAULT_LOGOS = [
  { src: "/images/logos/belastingdienst.webp", alt: "Belastingdienst — klant van MeetingMasters Online" },
  { src: "/images/logos/ing.webp", alt: "ING — klant van MeetingMasters Online" },
  { src: "/images/logos/bergman-clinics.webp", alt: "Bergman Clinics — klant van MeetingMasters Online" },
  { src: "/images/logos/pbcf.webp", alt: "Prins Bernhard Cultuurfonds — klant van MeetingMasters Online" },
  { src: "/images/logos/amsterdam.webp", alt: "Gemeente Amsterdam — klant van MeetingMasters Online" },
  { src: "/images/logos/gemeente-utrecht.webp", alt: "Gemeente Utrecht — klant van MeetingMasters Online" },
  { src: "/images/logos/provincie-utrecht.webp", alt: "Provincie Utrecht — klant van MeetingMasters Online" },
  { src: "/images/logos/energie-nederland.webp", alt: "Energie Nederland — klant van MeetingMasters Online" },
  { src: "/images/logos/vitens.webp", alt: "Vitens — klant van MeetingMasters Online" },
  { src: "/images/logos/betaalvereniging.webp", alt: "Betaalvereniging Nederland — klant van MeetingMasters Online" },
  { src: "/images/logos/roc-nijmegen.webp", alt: "ROC Nijmegen — klant van MeetingMasters Online" },
  { src: "/images/logos/roosendaal.webp", alt: "Gemeente Roosendaal — klant van MeetingMasters Online" },
  { src: "/images/logos/pharmaccess.webp", alt: "PharmAccess — klant van MeetingMasters Online" },
  { src: "/images/logos/aberkyn.webp", alt: "Aberkyn — klant van MeetingMasters Online" },
  { src: "/images/logos/pcc.webp", alt: "PCC — klant van MeetingMasters Online" },
  { src: "/images/logos/nmq.webp", alt: "NMQ — klant van MeetingMasters Online" },
];

export type InspiratieItem = {
  label: string;
  title: string;
  body: string;
  img: string;
  imgAlt: string;
  /** Eigen adres; zonder dit wijst het item naar zijn categoriepagina. */
  href?: string;
};

export const DEFAULT_INSPIRATIE: InspiratieItem[] = [
  {
    label: "Event",
    title: "Online strategiedag voor 200 medewerkers.",
    body: "Plenaire sessies, breakouts en napraten achteraf. Deelnemers gaven een 8,4.",
    img: "/images/home-inspiratie-strategiedag.webp",
    imgAlt: "Online strategiedag in een sfeervolle virtuele buitenomgeving met lichtjes — deelnemers verdeeld over groepen, begeleid door MeetingMasters",
  },
  {
    label: "Virtual Office",
    title: "Virtueel clubhuis voor Olympiërs wereldwijd.",
    body: "World Olympians Association — actief tijdens de Spelen van Parijs en Milaan.",
    // Hierover staat een uitgeschreven verhaal op het blog; daar is dit item
    // meer waard dan op de algemene categoriepagina.
    href: "/nl/blog/olympiers",
    img: "/images/home-inspiratie-virtualoffice.webp",
    imgAlt: "Virtueel clubhuis van de World Olympians Association in SpatialChat — een besneeuwd bergterras met OLY-tafels en deelnemers wereldwijd",
  },
  {
    label: "Games & Tools",
    title: "Cybersecurity escape room voor 80 man.",
    body: "R@venHack — laagdrempelig instappen, hoge betrokkenheid.",
    img: "/images/inspiratie-escape.webp",
    imgAlt: "RavenHack cybersecurity escape room — deelnemers in een digitale wereld, MeetingMasters Games & Tools",
  },
];

// Elk voorbeeld linkt naar zijn eigen categoriepagina (Inspiratie-pagina is vervallen)
export const CATEGORY_HREF: Record<string, string> = {
  Event: "/nl/events",
  "Virtual Office": "/nl/virtual-office",
  "Games & Tools": "/nl/games-tools",
};

export const solutions = [
  {
    id: "events",
    num: "01",
    label: "Events",
    headline: "Meer betrokken, ook in grote groepen",
    bullets: ["Strategiedag", "All-hands & kick-off", "Leiderschapsdag", "Community event"],
    cta: "Verrassende interactieve bijeenkomsten",
    href: "/nl/events",
    img: "/images/home-oplossing-events.webp",
    imgAlt: "Online strategiedag: deelnemer werkt in een Miro-workshopboard en een SpatialChat-sessie met collega's — begeleid door MeetingMasters",
    bg: "bg-[#E8EDE4]",
    imgStyle: { transform: "scale(2.2)", transformOrigin: "54% 52%" } as React.CSSProperties,
  },
  {
    id: "remote-office",
    num: "02",
    label: "Virtueel Kantoor",
    headline: "Beter samenwerken, ook op afstand",
    bullets: ["Internationale organisaties", "Hybride teams", "Projectgroepen", "Samenwerkingsverbanden"],
    cta: "Verbonden via een virtueel kantoor",
    href: "/nl/virtual-office",
    img: "/images/home-oplossing-virtueelkantoor.webp",
    imgAlt: "Medewerker in een virtueel kantoor in SpatialChat — een open kantoorruimte met collega's die live samenwerken en contact maken",
    bg: "bg-[#E8EDE4]",
    imgStyle: { objectPosition: "center" } as React.CSSProperties,
  },
  {
    id: "games-tools",
    num: "03",
    label: "Games & Tools",
    headline: "Actiever samen ontdekken en leren",
    bullets: ["Online escape rooms", "Onboarding games", "Spellen en quizzen", "Maatwerk gamification"],
    cta: "Meer interactie en spel",
    href: "/nl/games-tools",
    img: "/images/format-escape.webp",
    imgAlt: "Deelnemers spelen een online escape room als interactieve teambuilding activiteit — MeetingMasters Games & Tools",
    bg: "bg-[#E8EDE4]",
    imgStyle: { transform: "scale(1.2)", transformOrigin: "30% center" } as React.CSSProperties,
  },
];




/** De losse teksten van de homepage in het Nederlands. */
export const NL_TEKST = {
  hero: {
    headline: "Een vergadering heb je.\nEen ontmoeting maak je.",
    subline:
      "Wij ontwerpen online bijeenkomsten die er écht toe doen.\nMeer betrokkenheid — met 5, 50 of 500 mensen.",
    cta: "Ervaar het zelf →",
    voorbeelden: "Bekijk voorbeelden",
    videoAlt:
      "Vrouw achter een laptop in een MeetingMasters SpatialChat-sessie — collega's als kring rond 'Making more of Meetings'",
  },
  oplossingen: {
    kicker: "Onze oplossingen",
    titel: "Hoe je elkaar ontmoet maakt verschil. Wij maken je online bijeenkomsten weer waardevol.",
    meer: "Meer →",
  },
  klanten: "Klanten",
  essentie: {
    kicker: "Essentie",
    kop: "Waar wij voor staan",
    alinea1:
      "Als mensen samenkomen ontstaat iets moois. We leren van elkaar. We versterken elkaar. Maar dat gaat niet vanzelf.",
    alinea2:
      "Een goede bijeenkomst is meer dan techniek en logistiek. Het is vooral een menselijke uitdaging.",
    quote: "Wij ontwerpen ontmoetingen met ruimte voor oprecht contact.",
    manifest: "Download het MeetingMasters Manifest",
    manifestHref: "/downloads/meetingmasters-manifest.pdf",
    contact: "Contact →",
  },
  spatialchat: {
    kicker: "SpatialChat: ons voorkeursplatform",
    kop: "Waarom wij werken met SpatialChat",
    onder: "Een videoplatform. Een ontmoetingsplaats.",
    demo: "Plan een demo →",
    punten: [
      "Mensen bewegen zelf.",
      "Nabijheid bepaalt interactie.",
      "Deelnemers navigeren en kiezen met wie ze in gesprek gaan.",
      "Gesprekken ontstaan spontaan — zoals in het echte leven.",
      "Designs die passen bij de context.",
      "Van intiem overleg tot een grote all-hands.",
    ],
  },
  inspiratie: {
    kicker: "Inspiratie",
    kop: "Drie voorbeelden. 1000 ideeën.",
  },
  faqKop: "Veelgestelde vragen",
  links: {
    events: "/nl/events",
    demo: "/nl/demo",
    contact: "/nl/contact",
    advies: "/nl/expert-advies",
  },
};


/**
 * De vragen die zichtbaar op de pagina staan én in het schema. Eén bron, zodat
 * ze niet uit elkaar kunnen lopen.
 */
export const NL_FAQ = [
  {
    q: "Wat doet MeetingMasters precies?",
    a: "MeetingMasters ontwerpt en begeleidt online bijeenkomsten — van strategiedagen en all-hands tot virtual offices en escape rooms. Wij verzorgen concept, facilitatie en live productie.",
  },
  {
    q: "Voor welke organisaties werkt MeetingMasters?",
    a: "Wij werken voor organisaties die online bijeenkomsten organiseren voor 50 tot 500 mensen — profit, non-profit, overheid en internationaal.",
  },
  {
    q: "Wat is SpatialChat en waarom gebruiken jullie dat?",
    a: "SpatialChat is een virtueel platform waarbij deelnemers vrij door de ruimte bewegen en spontaan gesprekken aangaan. Wij gebruiken het omdat het gedrag mogelijk maakt dat in andere tools niet vanzelf ontstaat.",
  },
  {
    q: "Wat kost een online event met MeetingMasters?",
    a: "De kosten hangen af van type event, aantal deelnemers en gewenste ondersteuning. Neem contact op voor een eerste inschatting via het formulier of contact@meetingmasters.online.",
  },
];
