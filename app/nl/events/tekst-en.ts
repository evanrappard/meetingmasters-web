/**
 * De Engelse teksten van het eventoverzicht.
 *
 * Alleen tekst: de categorieën, iconen, kleuren en volgorde staan in
 * `page.tsx` en zijn taalloos. De titels en omschrijvingen van de twintig
 * formats staan hier per Nederlandse slug, zodat ze niet kunnen verlopen als
 * er een format bij komt — een ontbrekende vertaling valt zichtbaar terug op
 * het Nederlands.
 *
 * Over de woordkeuze: "online event" is in het Engels de gangbare term en ook
 * waar op gezocht wordt, dus die houden we aan. "Virtual event" komt er als
 * variant naast te staan in de omschrijvingen, niet als vervanging.
 */

export const OVERZICHT_EN = {
  metaTitle: "Twenty online event formats | MeetingMasters",
  metaDescription:
    "20 online event formats: from strategy day and webinar to escape game, participation programme and community event. Designed and hosted by MeetingMasters.",

  hero: {
    kicker: "Virtual events",
    titel: "Online gatherings where people are genuinely present.",
    intro1: "An important gathering for 5, 50 or 500 people:",
    intro2: "when it matters, the standard won't do.",
    cta: "Expert advice →",
    formats: "See the event formats",
    videoAlt:
      "Participants at an online event in an atmospheric virtual garden with video participants, MeetingMasters Events on SpatialChat",
  },

  resultaten: {
    kicker: "Built on years of experience",
    titel: "Gatherings that matter deserve particular care.",
    items: [
      {
        title: "More expertise",
        body: "Experienced thinking partners who take work off your hands, with hospitality as second nature: everything runs to time, calmly, and nothing gets forgotten.",
      },
      {
        title: "More engagement",
        body: "Interaction that means something strengthens trust, connection and reputation.",
      },
      {
        title: "More impact",
        body: "Strategy days, webinars and events that genuinely deliver. Wider support, sharper choices and better follow-up.",
      },
    ],
  },

  formats: {
    kicker: "Every kind of event has its own shape and its own logic.",
    titel: "The form follows the purpose. What do you want to achieve?",
  },

  categorieen: {
    koers: "Direction & decisions",
    leren: "Learning & development",
    verbinding: "Connection & fun",
    dialoog: "Dialogue & consultation",
    kennis: "Knowledge & networking",
  } as Record<string, string>,

  /** Titel en de tekst die verschijnt als je over een format zweeft. */
  formatTeksten: {
    strategiedagen: { title: "Online strategy day", desc: "A day that leads to decisions, not only presentations." },
    townhall: { title: "Online town hall", desc: "Large internal gatherings that bring the whole organisation into line." },
    "all-hands": { title: "Online all-hands", desc: "An open conversation between leadership and staff — transparent and live." },
    alv: { title: "Online AGM", desc: "Formally watertight, well structured and still lively." },
    teambuilding: { title: "Online team building", desc: "Teams that work together better — even when they work far apart." },
    "training-workshop": { title: "Online training & workshops", desc: "Learning and growing in an online setting that genuinely works." },
    brainstormen: { title: "Online brainstorming", desc: "Creative sessions that genuinely produce ideas, even when everyone is apart." },
    onboardingdag: { title: "Online onboarding day", desc: "Welcoming new staff in a way that actually builds something." },
    bedrijfsfeest: { title: "Online company party", desc: "A party people genuinely remember, even online." },
    kerstfeest: { title: "Online Christmas party", desc: "An end-of-year party that feels warm and gets talked about long afterwards." },
    teamuitje: { title: "Online team outing", desc: "A team outing that connects. Time off together, however far apart you are." },
    "community-building": { title: "Online community building", desc: "Building a community that genuinely connects people." },
    bewonersparticipatie: { title: "Online resident participation", desc: "Involving residents online in policy, plans and decisions." },
    klankbordgroep: { title: "Online sounding board", desc: "Listening to the people who matter most." },
    focusgroep: { title: "Online focus group", desc: "In-depth research into what people really think, well facilitated." },
    "world-cafe": { title: "Online World Café", desc: "Deep conversations in small groups, with large groups." },
    webinar: { title: "Webinar", desc: "Webinars that hold attention. Not just broadcasting, but connecting." },
    conferentie: { title: "Online conference", desc: "Professional conferences for large groups: interactive and well produced." },
    "open-space": { title: "Online Open Space", desc: "Letting the group set the agenda: open, energetic and productive." },
    netwerkevent: { title: "Online networking event", desc: "Connecting people who don't know each other yet, online and easy to join." },
  } as Record<string, { title: string; desc: string }>,

  visie: {
    kicker: "Part of a larger story",
    titel: "Gatherings where something actually happens.",
    intro: "We make sure the time people spend together is used to the full, with:",
    punten: [
      {
        kop: "Event strategy.",
        desc: "Which format fits your purpose, your group and your moment? Our specialists advise you and help take it one step further.",
      },
      {
        kop: "Planning & design.",
        desc: "A clear schedule, personal guidance and a detailed run sheet: we guide the whole process from intake to evaluation.",
      },
      {
        kop: "In-meeting service.",
        desc: "We're there live at your meeting. As facilitator, producer and the person to turn to for anything technical. So that you can focus on the people and the content.",
      },
    ],
    cta: "Advice, no strings attached →",
    beeldAlt:
      "Interactive online event in SpatialChat, with participants spread across a storyline on several levels",
  },

  faqKop: "Frequently asked questions about online events",
  meerAntwoorden: "More answers?",
  minderAntwoorden: "Fewer answers",

  faq: [
    {
      q: "What is an online event?",
      a: "An online event is a gathering that takes place entirely digitally. That can be a webinar, but equally a conference, town hall, networking event, training or strategy day. The key difference from an ordinary online meeting is that an online event is deliberately designed around interaction, engagement and experience.",
    },
    {
      q: "How do you run a successful online event?",
      a: "A successful online event starts with a clear purpose. After that come the choices about audience, programme, formats, technology and facilitation. It's exactly that combination that decides whether participants stay actively involved or drift off after twenty minutes.",
    },
    {
      q: "Which software do you use for online events?",
      a: "We have experience with Zoom, Zoom Events, Teams, SpatialChat and a range of additional tools for interaction and collaboration. Which environment fits best depends on the purpose of the event and the experience you want participants to have.",
    },
    {
      q: "How do you keep participants involved during an online event?",
      a: "By not only letting people watch, but having them take an active part. Think of conversations, polls, break-outs, shared assignments, networking moments and interactive formats. People remember above all what they were part of themselves.",
    },
    {
      q: "How many participants can take part in an online event?",
      a: "Anything from ten participants to several thousand. The technology is rarely the limiting factor. It's the design of the programme that decides what works well.",
    },
    {
      q: "What does an online event cost?",
      a: "The investment depends on the type of event, the group size, the technology and the support you want. That's why we draw up a proposal for every request.",
    },
  ],

  faqMore: [
    {
      q: "What is the difference between an online event and a webinar?",
      a: "A webinar is usually about passing on knowledge around a single subject and leans heavily towards broadcasting. An online event is often built more broadly and contains, for instance, several sessions, opportunities to network or interactive elements. Knowledge isn't only shared by the speaker: participants share their insights with each other too.",
    },
    {
      q: "Is an online event as effective as meeting in person?",
      a: "That depends on the purpose. For sharing knowledge, working together and international gatherings, online often has the advantage. For some forms of building relationships or informal encounters, meeting in person stays valuable. So we always look at the purpose first and the form second.",
    },
    {
      q: "Can an online event be hybrid?",
      a: "Yes. Some participants are then present online and some in the room. That does ask for a different approach from an event that's entirely online or entirely in person. We design hybrid gatherings so that everyone can take part on equal terms.",
    },
    {
      q: "Can you handle the whole organisation of it?",
      a: "Yes. We support organisations with design, programme development, technical production, communication to participants, speaker support and live support.",
    },
    {
      q: "How long does an online event take?",
      a: "Anything from a compact one-hour session to a multi-day conference. The ideal length depends on the purpose and the audience.",
    },
    {
      q: "Can participants network during an online event?",
      a: "Yes. Online there are surprisingly many ways to meet. Think of speed dates, themed tables, coffee rooms, break-out conversations or open networking spaces.",
    },
    {
      q: "Can you help with interaction and formats?",
      a: "Yes. It's an important part of what we do. Technology makes an online event possible, but the format decides whether people genuinely get involved.",
    },
    {
      q: "What does an online event deliver?",
      a: "A good online event brings people together around a shared purpose. That might be sharing knowledge, taking decisions, meeting each other, building engagement or developing new ideas. Success isn't in the number of participants but in what people take away afterwards.",
    },
    {
      q: "Does an online event suit international participants?",
      a: "Yes. Online events make it easy to bring participants from different countries and time zones together. That often makes them more efficient and more accessible than the alternatives in person.",
    },
    {
      q: "Why do organisations choose MeetingMasters?",
      a: "Because we don't start with the technology but with the gathering and the people in it. We design online events from the question of what people need to experience, learn, discuss or decide. Only then do we choose the right formats and technology.",
      href: "/en/testimonials",
      hrefLabel: "Read what clients say →",
    },
  ],
};
