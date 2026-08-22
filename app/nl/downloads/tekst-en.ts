/**
 * De Engelse teksten van de Downloads-pagina.
 *
 * Vergadermacht valt hier weg: die publicatie bestaat niet in het Engels, en
 * het formulier erachter evenmin. Besluit van Emilie, 17 aug 2026. Zie
 * docs/engelse-media-register.md.
 */

export const DOWNLOADS_EN = {
  metaTitle: "Downloads — guides and publications | MeetingMasters",
  metaDescription:
    "Our publications about meeting online, and the participant guides you can send out beforehand. Free, no form, and meant to be passed on.",

  hero: {
    kicker: "Downloads",
    titel: "Take away, pass on, read later.",
    intro: "Our publications about meeting online, and the guides you can send your participants beforehand.",
    beeldAlt: "Someone at a desk with a laptop showing a download button",
  },

  direct: {
    kicker: "Straight to download",
    titel: "No form. Free, and meant to be passed on — to your colleagues, your board or the people you invite.",
  },

  publicaties: [
    {
      titel: "The MeetingMasters manifesto",
      soort: "Manifesto · pdf",
      body: "What we stand for, in short. About why how we meet each other matters, and what goes wrong when a gathering becomes an agenda item instead of a moment.",
      href: "/downloads/en/meetingmasters-manifesto.pdf",
      beeld: "/images/downloads/en/manifest-voorblad.webp",
      actie: "Download the manifesto",
    },
    {
      titel: "Online AGM checklist",
      soort: "Checklist · pdf",
      body: "For a members' meeting that has to hold up online: voting, quorum, and a process that stands formally.",
      href: "/downloads/en/online-agm-checklist.pdf",
      beeld: "/images/downloads/checklist-alv-voorblad.webp",
      actie: "Download the checklist",
    },
  ],

  kompas: {
    label: "Decision aid · 2022",
    titel: "Meeting Compass",
    body: "Online, hybrid, in person, audio only, asynchronous or no gathering at all — which form fits what you want to achieve? The compass walks through the trade-offs, so that you make that choice deliberately rather than out of habit.",
    jaar: "(2022)",
    cta: "Download the meeting compass →",
    href: "/downloads/en/meeting-compass.pdf",
    beeld: "/images/downloads/en/keuzekompas-voorblad.webp",
    video: "/videos/meeting-compass.mp4",
    youtube: "https://www.youtube.com/watch?v=y4cW29ukTKM",
    youtubeLabel: "Watch it on YouTube",
    onderschrift: "Explained in fourteen seconds. Also",
    onderschriftLink: "on YouTube ↗",
    geenVideo: "Your browser can't show this video.",
  },

  handleidingen: {
    kop: "Guides for participants",
    onder: "Practical, in plain language. Send them along with your invitation and nobody has to work anything out on the day itself.",
    items: [
      {
        titel: "Taking part through SpatialChat",
        soort: "Guide · pdf",
        body: "Step by step for participants: getting in, finding your way around the space, and setting video and sound properly. Handy to send in advance.",
        href: "/downloads/en/spatialchat-participant-instructions.pdf",
        actie: "Download the guide",
      },
      {
        titel: "Taking part through Zoom",
        soort: "Guide · pdf",
        body: "What a participant needs to know to get in and join without trouble. Also usable as an attachment to your invitation.",
        href: "/downloads/en/zoom-participant-instructions.pdf",
        actie: "Download the guide",
      },
    ],
    techHulp: "Tech help",
    hulpVoor: "Stuck on something during a meeting?",
    hulpNa: "lists what you can do, problem by problem.",
  },

  cta: {
    kop: "Rather talk it through than read?",
    onder: "In a short conversation we usually know which direction suits your gathering.",
    advies: "Ask for advice →",
  },

  links: { advies: "/en/expert-advice", hulp: "/en/help" },
};
