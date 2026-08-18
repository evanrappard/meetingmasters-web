/**
 * De Engelse teksten van de pagina Meeting Platforms.
 *
 * Merknamen blijven ongewijzigd. "Breakout rooms", "webinar" en "lobby" zijn
 * in het Engels al de gangbare termen en blijven dus staan; die vertalen zou
 * juist onduidelijker zijn.
 */

export const PLATFORMS_EN = {
  metaTitle: "What we work with: platforms and tools | MeetingMasters",
  metaDescription:
    "The platforms we build online gatherings with: SpatialChat, Zoom, Zoom Events and Teams, alongside Miro, Mentimeter, Kahoot and streamAlive.",

  hero: {
    kicker: "Technology",
    titel: "Every platform has its place.",
    intro: "We choose deliberately which instrument fits when:",
    intro2: "to your purpose, your group and what your participants are used to.",
    videoAlt:
      "Online gathering in SpatialChat, with participants spread across a designed virtual space",
  },

  platforms: {
    kop: "Four platforms, four purposes",
    onder: "This is where your gathering takes place. You choose one; the rest you then do not need.",
    sterkIn: "Strong at",
    items: {
      "Microsoft Teams": {
        sterk: "Internal day-to-day meetings",
        groep: "0 – 49",
        wanneer: "When your organisation runs on it",
        body: "Already sits inside your Microsoft environment and hangs off your calendar, so for internal meetings it saves an extra link and an extra account. Your documents are at hand and chat and meeting run into each other. For participants from outside your organisation it is less smooth. This is a work platform, not an events platform.",
      },
      Zoom: {
        sterk: "Meetings and events in larger groups",
        groep: "up to ~300",
        wanneer: "Business meetings with tight control",
        body: "Stable, widely known and usable by almost anyone without explanation. Break-out rooms work reliably and recording is simple. We set everything up beforehand — waiting room, permissions, recordings — so that you do not have to think about it during the session.",
      },
      "Zoom Events": {
        sterk: "Large events and congresses",
        groep: "from ~300",
        wanneer: "For multi-day or parallel programmes",
        body: "Registration in advance, several sessions side by side, a lobby and a programme participants walk through themselves. You know beforehand who is coming and afterwards who went where. Clear layouts and handsome design with personalised itineraries. Built for scale, so for a small session it is more than you need.",
      },
      SpatialChat: {
        sterk: "Webinars and events with personal interaction",
        groep: "up to ~600",
        wanneer: "When contact is the point",
        body: "You hear and see people as you come closer, so you can genuinely walk over to someone. You can join a table, take someone aside for a moment, talk it over afterwards. Runs in the browser with nothing to install, and we build the backdrops, rooms and layout around your event.",
      },
    } as Record<string, { sterk: string; groep: string; wanneer: string; body: string }>,
    badge: "New",
  },

  tools: {
    kop: "More collaboration and interaction",
    onder: "To raise interaction and collaboration within a gathering we sometimes bring in outside tools. We combine them with the platform; you do not choose them yourself.",
    binnenkort: "More to come",
    binnenkortBody: "Tools for recording and transcripts are on the way.",
    eigenVoor: "For more playful interaction we have also designed a",
    eigenLink: "set of our own tools",
    eigenNa: ". We can build those around your gathering too.",
    items: {
      Miro: {
        sterk: "Thinking and harvesting together",
        body: "The digital whiteboard we use most. Sticky notes, timelines and canvases; everyone works on the same board at once and at the end the harvest is already on paper. We build the board beforehand, so participants only have to write.",
      },
      Mentimeter: {
        sterk: "Gauging and prioritising",
        body: "Polls, word clouds and votes during a presentation. Participants answer on their phones and watch the result appear live. That way a large group gets a say in ten seconds.",
      },
      Kahoot: {
        sterk: "Energy and testing knowledge",
        body: "The quiz everyone knows. Short, competitive and effective at bringing attention back after an hour of listening. We write the questions around your organisation.",
      },
      streamAlive: {
        sterk: "Everyone gets a say, even in large groups",
        body: "Pulls responses out of the chat and puts them live on screen — as a map, a cloud or a race. Handy when not everyone can speak, but everyone has something to say.",
      },
      "Vote Company": {
        sterk: "Voting that holds up legally",
        body: "Weighted voting rights, secret ballots and a traceable result that stands up before a notary. We bring it in for members' meetings and board meetings, where the outcome has to hold formally.",
      },
    } as Record<string, { sterk: string; body: string }>,
  },

  faqKop: "Frequently asked questions",
  meerAntwoorden: "More answers?",
  minderAntwoorden: "Fewer answers",

  faq: [
    {
      q: "What is the difference between Zoom and Microsoft Teams?",
      a: "Teams is a work platform: it is tied to your Microsoft 365 environment, your calendar and your documents, and it is built for internal meetings. Zoom is more of a standalone meeting application that almost anyone can use without explanation, including people outside your organisation. For a gathering with external participants Zoom is therefore usually smoother; for daily internal work Teams is more practical.",
    },
    {
      q: "How many participants can join an online gathering?",
      a: "That depends on the platform and on the licence. In Zoom and Teams an ordinary meeting usually runs to a few hundred participants; with an add-on or a webinar licence that goes considerably higher. In SpatialChat we work with groups of up to around 600. We arrange the right licence, so this is not something you have to work out.",
    },
    {
      q: "What is the difference between a webinar and an online meeting?",
      a: "In a meeting everyone can talk and appear on camera. In a webinar a few speakers broadcast and the rest watch; participants ask questions through the chat or the Q&A. A webinar therefore scales much further, but no conversation happens. Want both? Then we combine them: broadcast plenary and afterwards talk further in smaller spaces.",
    },
    {
      q: "Do participants have to install anything or create an account?",
      a: "Not with SpatialChat: that runs entirely in the browser and you only fill in your name. With Zoom and Teams you can usually join through the browser too — choose “Continue on this browser” — although the app is a little more comfortable. For participants from outside an organisation we deliberately take the route with nothing to install.",
    },
    {
      q: "Which platform suits a large online event?",
      a: "If it is about broadcasting to a large audience with registration in advance and several sessions side by side, Zoom Events was built for that. If you want people to genuinely meet — join a table, talk afterwards, wander around — SpatialChat works better. The choice follows from what has to happen, not from the number of participants alone.",
    },
    {
      q: "Can an online gathering be recorded?",
      a: "Yes, on every platform we work with. The organiser switches it on and has to say so beforehand; participants see a notice on screen while it is recording. We agree in advance what is recorded and what is not — break-outs and informal spaces are left out of the recording as standard.",
    },
  ],

  faqMore: [
    {
      q: "What about privacy and the GDPR?",
      a: "Every platform publishes where its data sits, how it is encrypted and which certifications it holds; we link straight to that, so your IT department can check it. SpatialChat, for instance, runs on servers in Ireland, with encryption in transit and at rest, and a data processing agreement is available.",
    },
    {
      q: "What are break-out rooms, and when do you use them?",
      a: "Break-out rooms are small rooms where part of the group talks separately. They work well as soon as a group gets too large for everyone to have a say: in a group of four almost everyone joins in, in a group of forty nobody does. We design beforehand who ends up where and what the task is.",
    },
    {
      q: "Can we use several tools at once?",
      a: "Yes, and we often do. The platform is the space; tools such as Miro, Mentimeter or Kahoot come in alongside it for collaborating, gauging or energy. Participants notice little of it: they click one link and we make sure the rest is ready.",
    },
    {
      q: "Does it work on a phone or tablet?",
      a: "Joining usually works, but it is rarely comfortable: the screen is small and not every feature works. For a gathering where people also work together, we advise a laptop or computer. As a fallback when your laptop is being difficult, the phone is perfectly fine.",
    },
    {
      q: "What does an online meeting platform cost?",
      a: "For short, small meetings almost every platform has a free version, usually with a time limit. As soon as it is about larger groups, registration or a space of your own, a paid licence is needed. For a hosted gathering the licence is included in our proposal; you do not have to buy anything yourself.",
    },
    {
      q: "Can you also work with the platform we already have?",
      a: "Yes. If your organisation runs on Teams or Zoom, we work in it with you. Sometimes that is the sensible thing: the gain then sits in how the gathering is built, not in a different tool. We say so honestly when a different platform would make a difference.",
    },
  ],

  keuze: {
    kicker: "What do you choose?",
    kop: "It starts with the purpose",
    alinea1:
      "What has to have happened by the end of your gathering? Does something have to be decided, or do people need to get to know each other? Does the group meet regularly, or is this a one-off? And what are your participants used to — have they been in meetings all day, or is online the uncomfortable part for them?",
    alinea2:
      "The form follows from those answers, and only then the platform. Sometimes that is the tool you already have, and the gain sits mostly in how you build the gathering. Sometimes something else is needed, because what you want simply does not happen in a grid.",
  },

  cta: {
    kop: "Want to talk it through?",
    onder: "In a short conversation we usually know which direction suits your gathering.",
    advies: "Ask for advice →",
    hulp: "I need help right now",
  },

  links: {
    advies: "/en/expert-advice",
    hulp: "/en/help",
    spatialchat: "/en/spatialchat",
    eigenTools: "/nl/games-tools#tools",
  },
};
