/**
 * De Engelse teksten van de homepage.
 *
 * Over de zoektermen: de Engelse markt zoekt op "online events" en "virtual
 * office", niet op vertalingen daarvan. Die twee staan dus letterlijk in de
 * titel en de omschrijving. "Remote work" is bewust weggelaten — dat is een
 * bredere term waar we niet op willen concurreren.
 */

export const HOME_EN = {
  metaTitle: "MeetingMasters | Online events & virtual office specialists",
  metaDescription:
    "We design online gatherings for 50 to 500 people — events, virtual offices and interactive formats. 250+ events hosted, 94% satisfaction.",

  hero: {
    // Het Nederlands speelt met "hebben" tegenover "maken": een vergadering
    // overkomt je, een ontmoeting moet je maken. In het Engels houdt
    // hold/make datzelfde onderscheid vast.
    headline: "A meeting you hold.\nAn encounter you make.",
    subline:
      "We design online gatherings that genuinely matter.\nMore involvement — with 5, 50 or 500 people.",
    cta: "See for yourself →",
    voorbeelden: "See examples",
    videoAlt:
      "Woman at a laptop in a MeetingMasters SpatialChat session — colleagues in a circle around 'Making more of Meetings'",
  },

  stats: [
    { number: "Since 2020", label: "online meeting professionals" },
    { number: "250+", label: "events hosted" },
    { number: "94%", label: "satisfaction afterwards" },
    { number: "47%", label: "more involvement*" },
    { number: "66%", label: "higher turnout*" },
  ],

  oplossingen: {
    kicker: "Our solutions",
    titel: "We are online meeting professionals. Designers of moments that matter.",
    meer: "More →",
    items: {
      events: {
        label: "Events",
        headline: "More involvement, even with large groups",
        bullets: ["Strategy day", "All-hands & kick-off", "Leadership day", "Community event"],
        cta: "Surprising, interactive gatherings",
        sub: "When the standard will not do: from strategy days to all-hands and community events.",
      },
      "remote-office": {
        label: "Virtual Office",
        headline: "Working together better, at a distance too",
        bullets: ["International organisations", "Hybrid teams", "Project groups", "Partnerships"],
        cta: "Connected through a virtual office",
        sub: "The place for your team to come together — also when nobody is in a meeting.",
      },
      "games-tools": {
        label: "Games & Tools",
        headline: "Discovering and learning together, more actively",
        bullets: ["Online escape rooms", "Onboarding games", "Games and quizzes", "Bespoke gamification"],
        cta: "More interaction and play",
        sub: "Online escape rooms, onboarding games and smart apps for more involvement.",
      },
    } as Record<string, { label: string; headline: string; bullets: string[]; cta: string; sub: string }>,
  },

  klanten: "Clients",

  essentie: {
    kicker: "Essence",
    kop: "What we stand for",
    alinea1:
      "When people come together, something good happens. We learn from each other. We strengthen each other. But it does not happen by itself.",
    alinea2:
      "A good gathering is more than technology and logistics. Above all it is a human challenge. How we come across each other is what makes the difference.",
    quote: "We design encounters with room for genuine contact.",
    manifest: "Download the MeetingMasters manifesto",
    manifestHref: "/downloads/en/meetingmasters-manifesto.pdf",
    contact: "Contact →",
  },

  spatialchat: {
    kicker: "SpatialChat: our platform of choice",
    kop: "Why we work with SpatialChat",
    onder: "A video platform. A meeting place.",
    demo: "Book a demo →",
    punten: [
      "People move around themselves.",
      "Proximity decides the interaction.",
      "Participants navigate and choose who they talk to.",
      "Conversations start spontaneously — as they do in real life.",
      "Designs that fit the occasion.",
      "From an intimate discussion to a large all-hands.",
    ],
  },

  inspiratie: {
    kicker: "Inspiration",
    kop: "Three examples. A thousand ideas.",
    items: [
      {
        label: "Event",
        title: "An online strategy day for 200 staff.",
        body: "Plenary sessions, break-outs and time to talk afterwards. Participants gave it an 8.4.",
        imgAlt:
          "Online strategy day in an atmospheric virtual outdoor setting with lights — participants spread across groups, hosted by MeetingMasters",
      },
      {
        label: "Virtual Office",
        title: "A virtual clubhouse for Olympians worldwide.",
        body: "World Olympians Association — active during the Paris and Milan Games.",
        imgAlt:
          "Virtual clubhouse of the World Olympians Association in SpatialChat — a snow-covered mountain terrace with OLY tables and participants worldwide",
      },
      {
        label: "Games & Tools",
        title: "A cybersecurity escape room for 80 people.",
        body: "R@venHack — easy to step into, high involvement.",
        imgAlt:
          "RavenHack cybersecurity escape room — participants in a digital world, MeetingMasters Games & Tools",
      },
    ],
  },

  faqKop: "Frequently asked questions",

  faq: [
    {
      q: "What exactly does MeetingMasters do?",
      a: "MeetingMasters designs and hosts online gatherings — from strategy days and all-hands to virtual offices and escape rooms. We handle the concept, the facilitation and the live production.",
    },
    {
      q: "Which organisations does MeetingMasters work for?",
      a: "We work for organisations running online gatherings for 50 to 500 people — commercial, non-profit, government and international.",
    },
    {
      q: "What is SpatialChat, and why do you use it?",
      a: "SpatialChat is a virtual platform where participants move freely through the space and fall into conversation. We use it because it makes behaviour possible that does not appear by itself in other tools.",
    },
    {
      q: "What does an online event with MeetingMasters cost?",
      a: "The cost depends on the type of event, the number of participants and the support you want. Get in touch for a first estimate through the form or at contact@meetingmasters.online.",
    },
  ],

  /** Adressen die op de Engelse pagina naar een Engelse pagina moeten wijzen. */
  links: {
    events: "/en/events",
    demo: "/en/demo",
    contact: "/en/contact",
    advies: "/en/expert-advice",
  },
};
