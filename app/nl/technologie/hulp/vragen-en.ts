import type { Vraag, Categorie } from "./vragen";

/**
 * De Engelse versie van de hulpvragen.
 *
 * De knoppen en menupaden die hier genoemd worden zijn de échte Engelse
 * labels van de platforms — "Join from your browser", "Start Video",
 * "System Settings → Privacy & Security → Screen Recording". Een letterlijke
 * vertaling van de Nederlandse instructie zou een Engelse deelnemer naar een
 * knop sturen die niet bestaat.
 *
 * Dit bestand wordt gegenereerd met scripts/_vragen-en-bouw.mjs.
 */

export const CATEGORIEEN_EN: Categorie[] = [
  { id: "link", label: "I can't get in", icoon: "🔑", intro: "Link lost, or nothing happens when you click it." },
  { id: "audio", label: "My audio isn't working", icoon: "🔊", intro: "I can't hear anyone, or nobody can hear me." },
  { id: "video", label: "My video isn't working", icoon: "📷", intro: "Camera black or frozen, or you can't see the others." },
  { id: "overig", label: "Something else is wrong", icoon: "🛟", intro: "Stuttering, screen sharing, breakout rooms or anything else." },
];

/** De toolnamen zijn merknamen en dus in beide talen gelijk, op "Algemeen" na. */
export const TOOLS_EN = ["General", "SpatialChat", "Zoom Events", "Zoom", "Microsoft Teams"];

type QA = { q: string; a?: string; stappen?: string[] };
type ToolBlock = { link: QA[]; audio: QA[]; video: QA[]; overig: QA[] };

const DATA_EN: Record<string, ToolBlock> = {
  "Algemeen": {
    "link": [
      {
        "q": "Where do I find the link to the meeting?",
        "stappen": [
          "Search your mailbox for the organiser's name or for “invitation”.",
          "Check your calendar: with a calendar invitation the link is in the appointment itself.",
          "Look in your junk or spam folder; move the email to your inbox first and only then click the link."
        ]
      },
      {
        "q": "I click the link and nothing happens.",
        "stappen": [
          "Copy the whole link and paste it into your browser's address bar.",
          "Use Google Chrome. Edge and Firefox usually work too; Safari causes the most trouble.",
          "Close any window of the same meeting you opened earlier; two windows at once doesn't work."
        ]
      },
      {
        "q": "I get an error message when I try to join.",
        "stappen": [
          "Read which button the message offers you — usually “Allow” or “Open” — and click it.",
          "Close the window and click the link from the email again.",
          "Still nothing? Open the link in a private or incognito window, so that old cookies are left out of it."
        ]
      },
      {
        "q": "I have to log in or create an account.",
        "stappen": [
          "Look for a “Join as guest” or “Join in browser” button; often you don't need to create anything.",
          "If the platform does ask for an account, use the email address the invitation came to.",
          "With SpatialChat you never have to log in: you only fill in your name."
        ]
      },
      {
        "q": "I am in a waiting room and nothing is happening.",
        "stappen": [
          "Stay where you're: the organiser has to let you in and can see you in the list.",
          "Check that your name is recognisable; if it says “iPhone of…”, change it.",
          "If it takes a while, refresh the page once — you rejoin the queue automatically."
        ]
      }
    ],
    "audio": [
      {
        "q": "I can't hear anyone.",
        "stappen": [
          "Turn your computer's sound on and up far enough — and check that it isn't muted. Calling or meeting through the browser uses the same sound device as the rest of your computer.",
          "In the meeting settings, deliberately choose the right speaker (your headphones rather than the laptop speaker, for instance).",
          "Wearing earbuds or a headset? Take them out and put them back in, so the device is recognised again.",
          "Test the sound with the meeting's test button, if there's one."
        ]
      },
      {
        "q": "Nobody can hear me.",
        "stappen": [
          "Check that your microphone isn't off: there should be no line through the microphone icon.",
          "Choose the right microphone in the meeting; speak and see whether the level bar moves.",
          "Give your browser permission: click the padlock at the left of the address bar, set Microphone to “Allow” and refresh the page.",
          "Still silent? Then your operating system is blocking it. Mac: System Settings → Privacy & Security → Microphone, and tick your browser. Windows: Settings → Privacy & security → Microphone."
        ]
      },
      {
        "q": "My sound is coming out of the wrong device.",
        "stappen": [
          "Choose the right device in the meeting, separately for the microphone and for the speaker.",
          "Then set it in your computer's own sound settings as well.",
          "Plugging in a headset during the meeting? Select it by hand afterwards; that doesn't always happen automatically."
        ]
      },
      {
        "q": "There is an echo or a whine.",
        "stappen": [
          "If several of you're in the same room, let only one device have the sound on.",
          "Use a headset or earbuds; that almost always solves an echo.",
          "Mute your microphone when you aren't speaking."
        ]
      },
      {
        "q": "My sound stutters or sounds tinny.",
        "stappen": [
          "Turn your camera off; video takes by far the most bandwidth, and the sound then usually stays good.",
          "Close programmes that are syncing or downloading in the background.",
          "Sit closer to your wifi point, or plug in a network cable. Slow or unstable internet is by far the most common cause."
        ]
      }
    ],
    "video": [
      {
        "q": "My camera isn't working.",
        "stappen": [
          "Check that your camera isn't off: there should be no line through the camera icon.",
          "Choose the right camera in the meeting; laptops sometimes have more than one.",
          "Give your browser permission: click the padlock at the left of the address bar, set Camera to “Allow” and refresh the page.",
          "If that doesn't help, your operating system is blocking it. Mac: System Settings → Privacy & Security → Camera, and tick your browser. Windows: Settings → Privacy & security → Camera.",
          "Is another programme already using your camera? Close it completely — including when it's only running in the background — and refresh the page.",
          "Finally, check that there's no shutter or cap over your camera lens."
        ]
      },
      {
        "q": "I can't see the others.",
        "stappen": [
          "Check whether the others have their cameras on; often it isn't you.",
          "Refresh the page; the video streams then come in again.",
          "Turn your own camera off and on again, which rebuilds the video connection."
        ]
      },
      {
        "q": "My picture is frozen or blocky.",
        "stappen": [
          "Turn your camera off and, after a few seconds, on again.",
          "Close other programmes; video takes a lot of your processor.",
          "If it keeps stuttering, leave your camera off — the conversation carries on perfectly well on sound."
        ]
      }
    ],
    "overig": [
      {
        "q": "I can't share my screen.",
        "stappen": [
          "Click “Share screen” and choose what you want to show: your whole screen, one window or one tab.",
          "On a Mac you have to give your browser permission first: System Settings → Privacy & Security → Screen Recording. After that you have to quit the browser and open it again.",
          "Sharing a video with sound? Tick “Share sound”."
        ]
      },
      {
        "q": "I am being put into a breakout room. What should I do?",
        "stappen": [
          "That's a separate room for a conversation in a small group; click “Join” when you're asked to.",
          "Your video and sound come with you; you don't have to set anything up again.",
          "If you get stuck, click “Ask for help”. The host will come to you."
        ]
      },
      {
        "q": "My connection keeps dropping.",
        "stappen": [
          "Turn your camera off.",
          "Close programmes you don't need.",
          "Sit closer to your wifi point or use a cable.",
          "If nothing helps: leave the meeting and come back in through the link."
        ]
      },
      {
        "q": "I am on a computer belonging to my organisation and all sorts of things are blocked.",
        "stappen": [
          "Try a different browser first; sometimes only one is allowed.",
          "If that doesn't work, something is being blocked on the network or by your administrator rights.",
          "Send your IT department the settings at the bottom of this page; they set out what is needed per platform.",
          "Need it to work quickly? Join from your phone or a private laptop."
        ]
      },
      {
        "q": "Is the meeting being recorded? (recording and watching back)",
        "stappen": [
          "The organiser decides that, and has to say so beforehand.",
          "If a recording is running, you'll see a notice or a red dot on screen.",
          "Don't want to be on camera? Turn it off; you can still take part.",
          "Ask the organiser whether you can watch the recording back afterwards."
        ]
      },
      {
        "q": "How do I raise my hand? (raise hand)",
        "stappen": [
          "Look for the hand icon in the bar at the bottom, often under Reactions.",
          "Click it; the host can then see that you want to say something.",
          "Don't forget to lower your hand afterwards — that doesn't happen automatically.",
          "If there's no hand icon, type your question in the chat."
        ]
      },
      {
        "q": "Can I turn on subtitles?",
        "stappen": [
          "Many platforms have live captions; look in the bar at the bottom or under the three dots.",
          "If it is not there, the organiser has switched it off or the licence doesn't support it.",
          "Do ask; it's usually a single setting away."
        ]
      },
      {
        "q": "Nothing works.",
        "stappen": [
          "Close the meeting completely and click the link in your invitation again.",
          "Open the link in Google Chrome.",
          "Restart your computer — often faster than carrying on trying.",
          "Join from your phone; that works almost every time, even when your laptop is being difficult."
        ]
      }
    ]
  },
  "SpatialChat": {
    "link": [
      {
        "q": "I can't find my invitation link.",
        "stappen": [
          "Search your mailbox for the organiser's name or for “invitation”.",
          "Check your calendar: with a calendar invitation the link is in the appointment.",
          "Look in your junk or spam folder and move the email to your inbox."
        ]
      },
      {
        "q": "I click the link and nothing happens.",
        "stappen": [
          "Copy the whole link and paste it into your browser's address bar.",
          "Use Chrome, Firefox or Edge — not Safari.",
          "Press Enter. SpatialChat opens on its own; there's nothing to download."
        ]
      },
      {
        "q": "Do I have to create an account or install anything?",
        "stappen": [
          "No. Click the link and you're in.",
          "Fill in your name and organisation; that's your calling card in the space.",
          "Click Continue."
        ]
      },
      {
        "q": "I have lost the SpatialChat tab.",
        "stappen": [
          "Look in your browser for the tab with a red dot.",
          "That dot means your microphone and camera are active there — so that's where your meeting is still open."
        ]
      },
      {
        "q": "I can't get into a room.",
        "stappen": [
          "Look at the participant count after the room name, for instance 50/50. If it is full, you cannot get in.",
          "Go to another room, or try again in a few minutes."
        ]
      }
    ],
    "audio": [
      {
        "q": "My microphone isn't working.",
        "stappen": [
          "Look at the bar at the bottom: if there's a red line through the microphone icon, click it so that it turns green.",
          "Click the padlock at the left of the address bar and set the microphone to Allow. Also if you accidentally clicked Block earlier — that's by far the most common cause.",
          "Reload the page.",
          "If it stays silent, give your browser access in your system settings under Privacy, and restart the browser."
        ]
      },
      {
        "q": "Others can't hear me, or I can't hear them.",
        "stappen": [
          "Just as in real life, you have to be within earshot.",
          "Click your own video, hold, and drag yourself closer to the other person.",
          "Want to address the whole room? Click the megaphone in the bottom bar. Everyone then hears you, whatever the distance."
        ]
      },
      {
        "q": "Everything is green, but the sound isn't right.",
        "stappen": [
          "Click the cog icon for the settings.",
          "Check that the right microphone and the right speaker are both selected.",
          "Using an earbud or headset? Check that it's connected to your computer and not still to your phone."
        ]
      }
    ],
    "video": [
      {
        "q": "My camera isn't working.",
        "stappen": [
          "Look at the bottom bar: if there's a red line through the camera icon, click it so that it turns green.",
          "Click the padlock at the left of the address bar and set the camera to Allow.",
          "Reload the page.",
          "If you still can't see yourself, give your browser access to the camera in your system settings under Privacy, and restart the browser."
        ]
      },
      {
        "q": "I can see myself, but others can't.",
        "stappen": [
          "Your camera is fine, then; you're probably too far away.",
          "Drag your own video closer to the other person; the video connection opens on its own.",
          "Check as well that the other person's camera is on."
        ]
      },
      {
        "q": "My camera is off in the presentation room.",
        "stappen": [
          "That's how it should be. The presentation room is a room for listening: only the presenter can be seen and heard.",
          "When you go back to an ordinary room, turn your camera and microphone on again in the bottom bar."
        ]
      }
    ],
    "overig": [
      {
        "q": "Which browser and which device work best?",
        "stappen": [
          "Use a laptop or computer; every feature works there.",
          "Choose Chrome, Firefox or Edge. Safari doesn't always work properly.",
          "On a phone or tablet — an iPad included — not everything works and the screen is small."
        ]
      },
      {
        "q": "How do I move around the space and between rooms?",
        "stappen": [
          "Click your own video, hold, and drag yourself to where you want to stand.",
          "Zoom in and out with your mouse wheel, or with the buttons at the bottom right.",
          "You'll find other rooms at the top right: click a room name and you walk there."
        ]
      },
      {
        "q": "How do I share my screen?",
        "stappen": [
          "Click the screen icon in the bottom bar, next to the microphone and the camera.",
          "Choose whether you share a tab, a window or your whole screen.",
          "Prefer to share one tab or window; that's calmer for everyone. Going to present? Have your presentation open beforehand."
        ]
      },
      {
        "q": "I am on a corporate network and the connection keeps dropping.",
        "stappen": [
          "Some corporate networks block video and audio traffic through the firewall, and a VPN can get in the way too.",
          "Switch your VPN off for a moment, or try a different network or your phone's hotspot.",
          "If it keeps dropping, send your IT department the settings at the bottom of this page."
        ]
      }
    ]
  },
  "Zoom Events": {
    "link": [
      {
        "q": "I have not received a registration or join email.",
        "stappen": [
          "Look in your junk or spam folder; that's usually where it is.",
          "Move the email to your inbox; the link then works as normal.",
          "If you can't find anything, ask the organiser for a personal join link."
        ]
      },
      {
        "q": "I registered but I am not getting any Zoom emails at all.",
        "stappen": [
          "Create a free Zoom account using the same email address you registered with.",
          "Your personal join link is tied to that address and will then come through."
        ]
      },
      {
        "q": "My join link doesn't work.",
        "stappen": [
          "Check that you're signed in with the same email address you registered with; your access is tied to it.",
          "Sign out and back in with the right address if you need to.",
          "If it still doesn't work, ask the organiser to add you by hand."
        ]
      }
    ],
    "audio": [
      {
        "q": "I can't hear anything.",
        "stappen": [
          "Click the arrow next to the microphone icon at the bottom.",
          "Under Speaker, choose the right device — your headphones rather than the laptop speaker, for instance.",
          "Turn the volume up and refresh the page if you need to."
        ]
      },
      {
        "q": "Others can't hear me.",
        "stappen": [
          "Check that you aren't muted: if there's a red line through the microphone, click Unmute.",
          "Click the arrow next to the microphone and choose the right microphone.",
          "Give your browser permission for the microphone and refresh the page.",
          "Close other programmes using your microphone, such as Teams or a second Zoom window."
        ]
      },
      {
        "q": "I can't turn my microphone on at all.",
        "stappen": [
          "In a webinar session your audio and video are deliberately off; that's how it should be.",
          "Ask your question there through the Q&A.",
          "In an ordinary meeting session you can turn your microphone on yourself."
        ]
      }
    ],
    "video": [
      {
        "q": "My camera isn't working.",
        "stappen": [
          "If you see a red line through the camera icon, click Start Video.",
          "Click the arrow next to the icon and choose the right camera.",
          "Give your browser permission for the camera.",
          "Close other programmes using the camera; Zoom can't switch it on while another programme is holding it."
        ]
      },
      {
        "q": "I see a black picture, or the wrong camera.",
        "stappen": [
          "Click the arrow next to the camera icon.",
          "Choose the right webcam in the video settings.",
          "Check that there's no shutter or cap over the lens."
        ]
      },
      {
        "q": "I can't get myself on camera.",
        "stappen": [
          "In a webinar session you deliberately can't share video; you follow the speakers and ask questions through the Q&A.",
          "In an ordinary meeting session you turn your camera on with Start Video."
        ]
      }
    ],
    "overig": [
      {
        "q": "I can't see the join button for a session.",
        "stappen": [
          "The session hasn't started yet.",
          "Wait for the speaker to open it; the blue Join button then appears on its own.",
          "You can recognise sessions that are live by the red Now."
        ]
      },
      {
        "q": "How do I switch between sessions?",
        "stappen": [
          "Click the Sessions tab at the top for the full programme.",
          "There's a Join button after every session.",
          "The bookmark icon adds sessions to your own Itinerary, so that switching is easy."
        ]
      },
      {
        "q": "Where do I find the coffee or lunch break?",
        "stappen": [
          "Go to the Expo tab.",
          "Choose a space that's in progress; those are marked in red.",
          "Click Enter booth and then Join."
        ]
      },
      {
        "q": "I can't get into the event at all.",
        "stappen": [
          "Try a different browser; almost any browser works.",
          "On a Chromebook, the Zoom web app works best.",
          "Are you a speaker? Then join through the Zoom app."
        ]
      }
    ]
  },
  "Zoom": {
    "link": [
      {
        "q": "I can't find the link.",
        "stappen": [
          "Search your mailbox for “Zoom” or “invitation”, and check your spam folder too.",
          "The email has a blue link or an address starting with zoom.us.",
          "Click it."
        ]
      },
      {
        "q": "It is asking for a password or a code.",
        "stappen": [
          "That passcode is at the bottom of the same invitation email.",
          "Copy it or type it across."
        ]
      },
      {
        "q": "I have to download Zoom, and it won't work.",
        "stappen": [
          "You don't have to. Click Cancel in the window that appears.",
          "Choose Join from your browser at the bottom of the page.",
          "Fill in your name and you're in, with nothing installed."
        ]
      },
      {
        "q": "I see “Please wait, the host will let you in soon”.",
        "stappen": [
          "That's how it should be: you're in the digital waiting room.",
          "Stay on this screen and don't close it; you'll be let in within a minute."
        ]
      }
    ],
    "audio": [
      {
        "q": "I can't hear anyone.",
        "stappen": [
          "Click Join with Computer Audio at the bottom left, next to the microphone, if that hasn't happened yet.",
          "Turn your device's volume up.",
          "Click the arrow next to the microphone and, under Select a Speaker, choose your headphones or speakers."
        ]
      },
      {
        "q": "Nobody can hear me.",
        "stappen": [
          "Look at the bottom left: a red line through the microphone means you're muted. Click it once.",
          "Click the arrow next to the microphone and choose the right microphone.",
          "A headset or earbuds often work better than the built-in microphone."
        ]
      },
      {
        "q": "I hear an echo.",
        "stappen": [
          "An echo almost always comes from someone joining on two devices at once, or from two people sitting close together.",
          "Mute the sound on one of the devices.",
          "Use a headset; that usually fixes it at once."
        ]
      }
    ],
    "video": [
      {
        "q": "Others can't see me.",
        "stappen": [
          "Look at the camera icon at the bottom left: if there's a red line, click Start Video.",
          "Close programmes already using your camera, such as Teams or FaceTime.",
          "Click the arrow next to the camera and choose the right camera."
        ]
      },
      {
        "q": "I get no picture at all.",
        "stappen": [
          "Access is probably switched off. Windows: Settings → Privacy → Camera. Mac: System Settings → Privacy & Security → Camera.",
          "Switch Zoom on there.",
          "If that doesn't help, restart your computer."
        ]
      },
      {
        "q": "The picture stutters or freezes.",
        "stappen": [
          "Sit closer to your wifi point or use a network cable.",
          "Turn your own camera off for a moment; that frees up bandwidth.",
          "Close other programmes."
        ]
      }
    ],
    "overig": [
      {
        "q": "How do I change my display name? (rename)",
        "stappen": [
          "Click Participants at the bottom.",
          "Hover over your own name and click More.",
          "Choose Rename, type your name and click OK."
        ]
      },
      {
        "q": "How do I share my screen?",
        "stappen": [
          "Click the green Share Screen button at the bottom.",
          "Choose the window you want to show and click Share. Going to present? Have your presentation open beforehand.",
          "On a Mac you give Zoom permission once through System Settings → Privacy & Security → Screen Recording.",
          "If it doesn't work, the host may have restricted sharing; do ask."
        ]
      },
      {
        "q": "I am being put into a breakout room. What now?",
        "stappen": [
          "That's a separate room for a conversation in a small group.",
          "Click Join when you're asked to.",
          "If you get stuck, click Ask for Help; the host will come to you."
        ]
      },
      {
        "q": "I have been thrown out.",
        "stappen": [
          "Click the invitation link again to come back.",
          "If it keeps happening, restart Zoom.",
          "If that doesn't help, restart your computer."
        ]
      }
    ]
  },
  "Microsoft Teams": {
    "link": [
      {
        "q": "I can't find the link to the meeting.",
        "stappen": [
          "Look in the email invitation and in your calendar appointment; the Join meeting button is there.",
          "Otherwise search your mailbox for “Teams”.",
          "Check your junk email folder too."
        ]
      },
      {
        "q": "I click the link and it asks for the app.",
        "stappen": [
          "You don't have to install anything. Choose Continue on this browser.",
          "If the link still doesn't work, copy it and paste it into Microsoft Edge or Google Chrome."
        ]
      },
      {
        "q": "I have to sign in or enter a code.",
        "stappen": [
          "Teams sometimes sends a one-time code to your email; enter that.",
          "If that doesn't work, fill in your name and join as a guest."
        ]
      }
    ],
    "audio": [
      {
        "q": "I can't hear the others.",
        "stappen": [
          "Turn your computer's sound on and up far enough.",
          "In the meeting, click the three dots and then Device settings.",
          "Check that the right speaker is selected.",
          "If that doesn't help, try headphones or earbuds."
        ]
      },
      {
        "q": "The others can't hear me.",
        "stappen": [
          "Check that your microphone isn't muted; there should be no line through the microphone icon.",
          "Click the three dots, then Device settings, and choose the right microphone.",
          "A headset with a microphone often works better than the built-in one."
        ]
      },
      {
        "q": "Teams doesn't recognise my microphone.",
        "stappen": [
          "Using a separate Bluetooth or USB microphone? Then choose the computer's own microphone for the moment.",
          "In the Teams settings, under Permissions, switch Media on.",
          "In your computer's settings, under Privacy, switch on access to the microphone, for apps as well."
        ]
      },
      {
        "q": "I hear an echo.",
        "stappen": [
          "An echo almost always comes from someone joining on two devices at once, or from two people sitting close together.",
          "Mute the sound on one of the devices."
        ]
      }
    ],
    "video": [
      {
        "q": "Others can't see me.",
        "stappen": [
          "Check that your camera is on; there should be no line through the camera icon.",
          "Click the three dots and then Device settings.",
          "Choose the right camera there."
        ]
      },
      {
        "q": "Teams can't find my camera.",
        "stappen": [
          "Using a separate webcam? Then choose the computer's own camera for the moment.",
          "In the Teams settings, under Permissions, switch Media on.",
          "In your computer's settings, under Privacy, switch on access to the camera, for apps as well."
        ]
      },
      {
        "q": "My picture stutters or freezes.",
        "stappen": [
          "Turn your virtual background off.",
          "Turn your video off too if you need to; the conversation carries on perfectly well on sound.",
          "Close other programmes and sit closer to the router, or use a cable.",
          "If nothing helps, restart Teams; you then rejoin through the link."
        ]
      }
    ],
    "overig": [
      {
        "q": "I don't have a Teams account. Can I still join?",
        "stappen": [
          "Yes. Click the link and choose Continue on this browser.",
          "Fill in your name and join as a guest.",
          "You may wait in the lobby for a moment until the organiser lets you in; that's how it should be."
        ]
      },
      {
        "q": "Do I have to install the app?",
        "stappen": [
          "No. Choose Continue on this browser; that works in Microsoft Edge and Google Chrome.",
          "If you do want the app, you can download it — but for joining once, the browser is faster."
        ]
      },
      {
        "q": "How do the breakout rooms work?",
        "stappen": [
          "As a participant you don't have to do anything; the organiser opens the rooms.",
          "You're moved to your group automatically and back again afterwards.",
          "If you choose a room yourself, click Join."
        ]
      },
      {
        "q": "How do I share my screen?",
        "stappen": [
          "Click the screen sharing icon in the meeting bar, the upward arrow.",
          "Choose your whole desktop or a single window.",
          "Want to send the sound of a video along? Switch Include computer sound on before you choose the screen."
        ]
      }
    ]
  }
};

const CAT_IDS: (keyof ToolBlock)[] = ["link", "audio", "video", "overig"];

/**
 * De id's blijven gelijk aan de Nederlandse, zodat een link naar een vraag in
 * beide talen op hetzelfde antwoord uitkomt. De tool heet in het Engels
 * "General" maar houdt intern de sleutel "Algemeen".
 */
const TOOL_SLEUTELS = ["Algemeen", "SpatialChat", "Zoom Events", "Zoom", "Microsoft Teams"];

export const VRAGEN_EN: Vraag[] = TOOL_SLEUTELS.flatMap((sleutel, t) =>
  CAT_IDS.flatMap((cat) =>
    (DATA_EN[sleutel]?.[cat] ?? []).map((qa, i) => ({
      id: `${sleutel}-${cat}-${i}`.replace(/\s+/g, "-").toLowerCase(),
      categorie: cat,
      tool: TOOLS_EN[t],
      vraag: qa.q,
      antwoord: qa.a ?? (qa.stappen ?? []).join(" "),
      stappen: qa.stappen,
    }))
  )
);
