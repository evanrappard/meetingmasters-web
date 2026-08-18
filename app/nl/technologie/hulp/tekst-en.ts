/**
 * De Engelse teksten van de hulppagina.
 *
 * De handleidingen zijn de Engelse pdf's die Emilie aanleverde; de link naar
 * Microsoft wijst al naar hun Engelse hulppagina. De instellingen voor
 * IT-afdelingen verwijzen naar dezelfde bronnen, met de Engelse variant van
 * de Zoom-pagina.
 */

export const HULP_EN = {
  metaTitle: "Direct support for your online meeting | MeetingMasters",
  metaDescription:
    "A technical problem just before an online meeting? Sort it here step by step — for SpatialChat, Zoom, Zoom Events and Microsoft Teams.",

  hero: {
    kicker: "Helpdesk",
    titel: "Direct support for your online meeting.",
    intro1: "A technical problem, and a meeting to get into?",
    intro2: "Below we take you through it step by step.",
    videoAlt:
      "Someone at a laptop getting help with a technical problem just before an online meeting",
  },

  handleidingen: {
    kop: "Step-by-step guides",
    onder: "Read through before your meeting, or forward to your participants.",
    items: [
      {
        naam: "SpatialChat",
        logo: "spatialchat",
        href: "/downloads/en/spatialchat-participant-instructions.pdf",
        soort: "Participant guide (pdf)",
        actie: "Download",
      },
      {
        naam: "Zoom",
        logo: "zoom",
        href: "/downloads/en/zoom-participant-instructions.pdf",
        soort: "Participant guide (pdf)",
        actie: "Download",
      },
      {
        naam: "Microsoft Teams",
        logo: "teams",
        href: "https://support.microsoft.com/en-gb/teams/platform/troubleshoot-in-microsoft-teams",
        soort: "Help from Microsoft itself",
        actie: "Go to the help page",
      },
    ],
  },

  faq: {
    kop: "Frequently asked questions",
    onder:
      "What we hear most often, in three groups: the general problems, the settings on your own device, and the help that is there during a meeting.",
    groepen: {
      algemeen: "Technical problems in general",
      device: "Settings on your own device",
      support: "Help during the meeting",
    },
  },

  algemeneFaq: [
    {
      q: "It is not working and the meeting starts any minute. What do I do first?",
      a: "Close the meeting completely and click the link in your invitation again. That solves most problems. If that does not work, open the link in Google Chrome; it works with every platform we use. If that does not help either, restart your computer — annoying just before a session, but often faster than carrying on trying.",
    },
    {
      q: "Do I have to install anything to take part?",
      a: "Not for SpatialChat: that runs entirely in your browser. For Zoom and Teams you can usually join through the browser too, although the app is a little more comfortable. If your organisation asks for an installation that will not work, there is usually a block on administrator rights — in which case your own IT department is the fastest place to go.",
    },
    {
      q: "Which browser should I use?",
      a: "Google Chrome. Edge and Firefox usually work too. Safari more often causes problems with the microphone and camera. If you are on a computer belonging to your organisation, Chrome is often already installed.",
    },
    {
      q: "My connection keeps dropping. What can I do?",
      a: "Turn your camera off for a moment; video takes by far the most bandwidth and the sound then usually stays fine. Close programmes you do not need, especially if something is syncing in the background. If you are on wifi and it is possible, sit closer to the router or use a cable.",
    },
    {
      q: "I am on a work computer and all sorts of things are blocked.",
      a: "That happens more often than you might think: many organisations block unfamiliar domains or the use of the camera and microphone in the browser. This is not something we can solve for you. At the bottom of this page you will find, per platform, which settings an IT department needs — you can forward that information.",
    },
  ],

  deviceFaq: [
    {
      q: "The browser is not asking for permission for my microphone or camera.",
      a: "Click the padlock or the icon at the left of your browser's address bar. It shows per site whether the camera and microphone are allowed. Set them to allow and then refresh the page.",
    },
    {
      q: "I have given permission, and it still does not work.",
      a: "Then your operating system is probably still blocking it. On a Mac that sits under System Settings → Privacy & Security → Microphone and Camera; your browser has to be ticked there. On Windows it is under Settings → Privacy & security → Microphone and Camera.",
    },
    {
      q: "My sound is coming out of the wrong speaker or microphone.",
      a: "In the meeting settings, explicitly choose the right device, and do the same in your computer's own sound settings. Wearing earbuds or a headset? Take them out and put them back in; the device is then recognised again.",
    },
    {
      q: "Another application is already using my camera.",
      a: "Cameras can only be used by one programme at a time. Close other meeting programmes completely — including when they are only running in the background — and then refresh the page.",
    },
  ],

  supportFaq: [
    {
      q: "Is anyone reachable during the meeting?",
      a: "Yes, at meetings we host. From half an hour before the start and throughout the session, someone is standing by. How to reach them is in your invitation.",
    },
    {
      q: "What does a tech host do?",
      a: "The tech host runs the technology: the platform, screen sharing, break-outs, video and sound. They make sure everything keeps working, including when something goes wrong along the way.",
    },
    {
      q: "And what does a Meeting Master do?",
      a: "The Meeting Master focuses on the people rather than the technology. They welcome participants, help anyone who gets stuck and keep the space hospitable — so that nobody has to work out how it all works.",
    },
    {
      q: "Will I miss the meeting if I need help?",
      a: "No. You are helped separately while the rest carries on, and brought back into the session afterwards. The group notices nothing.",
    },
    {
      q: "Can someone look over my shoulder if I cannot get it to work?",
      a: "During a hosted meeting, yes. We look at what you are seeing and walk through the steps with you. That is usually faster than carrying on searching alone.",
    },
    {
      q: "What happens if the platform itself goes down?",
      a: "Then we switch. At meetings we host there is a fallback ready, and participants are told through the channel they were invited on.",
    },
  ],

  it: {
    kop: "Settings for organisations",
    onder:
      "The settings needed to take part in an online meeting differ per platform, per organisation and per device.",
    platformsKnop: "See the meeting platforms",
    platformsIntro: "Want to know what we work with, and why?",
    platformsStaart: " — with what each platform is good at, and the tools we combine it with.",
    platforms: [
      {
        naam: "SpatialChat",
        logo: "spatialchat",
        kern: "Runs entirely in the browser; participants install nothing. Data sits with AWS in Dublin.",
        punten: [
          "Encrypted: TLS 1.2 in transit, AES-256 at rest.",
          "On the allowlist: spatial.chat and *.spatial.chat, plus the media endpoints of LiveKit and Agora (TCP 443, UDP 3478 and 50000–60000).",
          "GDPR-compliant, with a data processing agreement available for signature.",
        ],
        links: [
          { label: "Settings for corporate networks", href: "https://how.spatial.chat/help/control-and-management/settings-for-corporate-network/" },
          { label: "Security and privacy", href: "https://how.spatial.chat/help/control-and-management/security-and-privacy/" },
        ],
      },
      {
        naam: "Zoom",
        logo: "zoom",
        kern: "Zoom publishes the full firewall and proxy configuration, including IP ranges per service.",
        punten: [
          "Firewall rules per service, with IP ranges in IPv4 and IPv6, as a downloadable list.",
          "Protocols and ports per component, plus an explanation of the “Network error, please try again” message.",
          "Certifications and attestations are gathered in the Trust Center.",
        ],
        links: [
          { label: "Network firewall and proxy settings", href: "https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060549" },
          { label: "Zoom Trust Center", href: "https://www.zoom.com/en/trust/" },
        ],
      },
      {
        naam: "Microsoft Teams",
        logo: "teams",
        kern: "Runs on your existing Microsoft 365 environment; if that is already set up, Teams is usually sorted too.",
        punten: [
          "Open the TCP ports and IP addresses from the Microsoft 365 list of URLs and IP ranges.",
          "Microsoft recommends split-tunnel VPN: Teams traffic outside the VPN, which makes a noticeable difference to quality.",
          "Allow WebSocket traffic, otherwise Teams falls back on slower polling traffic.",
        ],
        links: [
          { label: "Prepare your network for Teams", href: "https://learn.microsoft.com/en-gb/microsoftteams/prepare-network" },
          { label: "Troubleshoot in Microsoft Teams", href: "https://support.microsoft.com/en-gb/teams/platform/troubleshoot-in-microsoft-teams" },
        ],
      },
    ],
  },
};
