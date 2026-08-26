import type { EventData } from "./data";

/**
 * De Engelse teksten van de eventpagina's. Alleen tekst: beeld, icoon, kleur en
 * structuur staan in data.ts en zijn taalloos.
 *
 * Wat hier niet in staat, is nog niet vertaald. Zo'n event valt dan terug op
 * het Nederlands en staat niet in de lijst met vertaalde pagina's in
 * lib/talen.ts — de taalschakelaar toont daar dus geen Engelse link.
 *
 * Dit bestand wordt gegenereerd; pas de vertaling aan in de bronbestanden.
 */
export const EVENT_TEKST_EN: Record<string, Partial<EventData>> = {
  "strategiedagen": {
    "metaOmschrijving": "An online strategy day that ends in decisions and direction, not in presentations. For 10 to 100 participants, designed and facilitated by MeetingMasters.",
    "randvoorwaardenKop": "What a successful online strategy day needs.",
    "title": "Running an online strategy day",
    "tagline": "A day that leads to decisions and direction — not just to presentations.",
    "intro": "Rather than have people watch presentations passively, let them contribute actively to the outcome. From framing the question to the shape of the programme and the design of the interaction: with a background as strategy consultants, we help with content, form and technology.",
    "forWho": "Executive teams, management layers, programme managers",
    "range": "10-100 participants",
    "heroAlt": "Participant in an online strategy day with a digital whiteboard full of sticky notes on the current situation, strategic themes and priorities",
    "outcomeSummary": "For a clear direction, wide support and a team that's genuinely involved.",
    "outcomes": [
      {
        "title": "A clear direction",
        "body": "By the end of the day everyone knows what was decided and why."
      },
      {
        "title": "Wide support",
        "body": "The course is carried by the whole team, not only by the top."
      },
      {
        "title": "An involved team",
        "body": "People understand where the organisation is heading and feel part of the story."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "We get to know your organisation, your group and the question at hand."
      },
      {
        "title": "Design",
        "body": "Agenda, plenary sessions, break-outs and decision moments, built around your case."
      },
      {
        "title": "Rehearsal",
        "body": "A technical run-through with speakers, hosts and stakeholders."
      },
      {
        "title": "Live production",
        "body": "Fully guided: the technology and the facilitation of the content."
      }
    ],
    "validation": {
      "headline": "Online strategy sessions work — provided they're properly designed.",
      "items": [
        {
          "title": "Sustainable and within reach",
          "body": "No travel time, no venue costs: participants from several offices or countries simply log in. Online strategy days scale without the logistical headache."
        },
        {
          "title": "Participatory and involved",
          "body": "A real conversation about goals, existing plans and new directions. With good questions, smart formats and collaboration tools such as Miro."
        },
        {
          "title": "Inspiring and purposeful",
          "body": "With the right set-up you get sharp, focused sessions with strong output. Online can work very well indeed, as long as it is well designed. That's our craft."
        }
      ]
    },
    "conditions": [
      {
        "title": "A clear strategic goal",
        "body": "What has to be decided or settled by the end? Without a clear goal a strategy session becomes a conversation rather than a direction."
      },
      {
        "title": "Meeting design that makes decisions possible",
        "body": "Not only presentations, but formats that genuinely contribute: prioritisation rounds, break-outs per theme, plenary synthesis. How the day is built determines what comes out of it."
      },
      {
        "title": "Guidance on technology and content alike",
        "body": "A good moderator keeps the pace, makes room for every voice and steps in when the group gets bogged down. That's the difference between a good conversation and a clear decision."
      }
    ],
    "cases": [
      {
        "label": "Trade association",
        "title": "80 members set the course together",
        "body": "A large representative body wants to hold part of its strategy programme online without losing depth. We design plenary sessions with brainstorms and prioritisation. The result is a widely supported, thoroughly substantive multi-year plan.",
        "imgAlt": "Laptop with a digital conversation card on which members of a trade association set the course together"
      },
      {
        "label": "Multinational",
        "title": "Five offices, one roadmap",
        "body": "A multinational with teams in five countries wants to build towards a clear strategic foundation. We run five online sessions with facilitation on the content and guidance on form and technology. The result: one central basis for development, with clear room for local differences.",
        "imgAlt": "Hybrid working session with a whiteboard full of sticky notes around Why, How and What, and colleagues on screen"
      },
      {
        "label": "Non-profit",
        "title": "An annual plan in one day, entirely online",
        "body": "A non-profit team of 50 wants to settle its business plan in a single day without meeting in person. A compact, creative programme makes that possible. The result: a day people talk about for a long time, and a plan the whole team stands behind.",
        "imgAlt": "Virtual forum in which a non-profit team settles the annual plan in plenary and in small groups"
      }
    ],
    "faq": [
      {
        "q": "How long does an online strategy day take?",
        "a": "An online strategy day usually runs for half a day (3 to 4 hours) or a full day (6 to 8 hours). Which works best depends on the number of topics, the depth you're after and the size of the group."
      },
      {
        "q": "How many people can take part?",
        "a": "We run online strategy days for 10 to 100 participants. In groups of every size we work with break-out sessions and interactive formats so that everyone can contribute actively."
      },
      {
        "q": "Which formats do you use?",
        "a": "That depends on the purpose of the day. We work with break-out conversations, interactive canvases, World Café, Open Space, prioritisation sessions, voting rounds and decision-making formats. The format always follows the question, never the other way round."
      },
      {
        "q": "What does MeetingMasters do during an online strategy day?",
        "a": "We help design and facilitate the programme, we handle the technical production and we guide speakers, workshop leaders and participants. That way everyone in the group can contribute as fully as possible and focus entirely on the content and the decisions that have to be made."
      },
      {
        "q": "How far ahead should we book?",
        "a": "For an online strategy day we advise allowing at least three to four weeks of preparation. For larger programmes or complex agendas, six to eight weeks is often better."
      },
      {
        "q": "What does an online strategy day cost?",
        "a": "The investment depends on group size, preparation, programme and the level of support you want. That's why we always make a proposal built around your case. Just get in touch."
      }
    ],
    "faqMore": [
      {
        "q": "Can an online strategy day also be hybrid?",
        "a": "Yes. It's possible to run an online strategy day as a hybrid. It does ask for careful design, though. Simply adding a camera and a screen doesn't work here. We design programmes so that both groups, the people online and the people in the room, can take part on equal terms."
      },
      {
        "q": "Which software do you use?",
        "a": "We always go for interactive platforms, because engagement is essential to a successful strategy day. We have experience with Zoom, Zoom Events and Teams. But for a strategy day we'd gladly show you SpatialChat as well — often exactly the bit of extra interaction that gets decision-making moving. What fits best depends on your goal and your group."
      },
      {
        "q": "How do participants prepare?",
        "a": "Participants receive clear instructions beforehand. Sometimes we also ask them to submit input in advance, so the available time is used to the full. Ultimately every session is a junction in a longer journey. We build on that."
      },
      {
        "q": "Does an online strategy day work for executive teams?",
        "a": "For executive teams in particular an online strategy day can work well. The online environment makes it easy to work together in a focused way, to bring in experts and to capture results immediately. And executive teams too are sometimes ready for something other than the traditional Teams meeting. We actively make use of that."
      },
      {
        "q": "Can you help with decision-making?",
        "a": "Yes. Many strategy days aren't only about gathering ideas but also about making choices. With well-trained facilitators we use formats that help set priorities and reach decisions together."
      },
      {
        "q": "What happens after the strategy day?",
        "a": "The results are captured and shared clearly. If you want, we also support follow-up sessions or the further working out of the choices that were made."
      }
    ]
  },
  "townhall": {
    "metaOmschrijving": "An online town hall that brings the whole organisation onto one line: 30 to 600 participants, with moderation and technical direction by MeetingMasters.",
    "randvoorwaardenKop": "What a successful online town hall needs.",
    "title": "Running an online town hall",
    "tagline": "The whole organisation together: open, transparent and professionally produced.",
    "intro": "An online town hall is the moment when leaders and staff speak to each other directly. We help organisations run an online town hall that isn't one-way traffic but a meeting: with live Q&A, polls, reflection and, where useful, break-outs for the questions that need more room.",
    "forWho": "Boards, communication teams, large organisations",
    "range": "30-600 participants",
    "heroAlt": "Employee following an online town hall with hundreds of colleagues on screen, next to a laptop showing the presentation",
    "outcomeSummary": "For better sharing of knowledge and understanding. A real conversation, even with large groups.",
    "outcomes": [
      {
        "title": "One line through the organisation",
        "body": "Everyone knows where things are heading and understands the decisions that were taken."
      },
      {
        "title": "Staff feel heard",
        "body": "Not one-way traffic but a genuine dialogue, with room for honest questions."
      },
      {
        "title": "A smooth session",
        "body": "Professionally produced, even with hundreds of participants at once."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Agenda, speakers, messages and what the technology has to carry."
      },
      {
        "title": "Design",
        "body": "Plenary structure, moments of interaction and the shape of the Q&A."
      },
      {
        "title": "Rehearsal",
        "body": "A full technical run-through with all speakers and hosts."
      },
      {
        "title": "Live production",
        "body": "Professionally produced from beginning to end."
      }
    ],
    "validation": {
      "headline": "Genuinely sharing what matters takes more than a webinar.",
      "items": [
        {
          "title": "A clear message, a real conversation",
          "body": "A good online town hall brings strategy, decisions and questions together. Not as a stand-alone presentation, but as an interactive online gathering where staff understand what is going on and why it matters."
        },
        {
          "title": "Engagement at scale",
          "body": "Interaction can work well even with hundreds of participants. With polls, chat, Q&A, short processing tasks and smaller conversations, people stay actively involved."
        },
        {
          "title": "Tight online production",
          "body": "Speakers, moderator, technology, timing, recording, chat and participant support all have to work together smoothly. We keep control of that, so the organisation can focus on the content."
        }
      ]
    },
    "conditions": [
      {
        "title": "A clear core message",
        "body": "What should staff understand afterwards? What should they apply or translate into their own work? A town hall without a clear core quickly becomes a collection of updates."
      },
      {
        "title": "Interaction that fits the group",
        "body": "Not every question has to be plenary. Sometimes a poll, a round of chat or a break-out works better. The design sets the direction and the degree of participation."
      },
      {
        "title": "Moderation and technical control",
        "body": "A strong moderator looks after the conversation. A technical host looks after the meeting. Separating the two makes an online town hall calmer and more professional."
      }
    ],
    "cases": [
      {
        "label": "Large organisation",
        "title": "The board in conversation with 450 staff",
        "body": "An organisation wants a quarterly update that doesn't feel like a broadcast. We design a compact town hall with live questions, polls and thematic break-outs. The result: more understanding of the course, and clear signals coming back from the organisation.",
        "imgAlt": "Hybrid set-up with participants in the room and online during a town hall held by the board"
      },
      {
        "label": "Change programme",
        "title": "Gathering questions in a delicate phase",
        "body": "During a reorganisation there's a need for transparency and calm. We handle the technical production and design a question process in which staff can respond both beforehand and live. The result is a careful conversation with room for nuance.",
        "imgAlt": "Digital board on which staff sort their questions around process, organisation and individual"
      },
      {
        "label": "International team",
        "title": "One story across several countries",
        "body": "For an organisation with staff in different time zones we build an online town hall with short presentations, energetic interaction and time to talk it over afterwards in the bar. With room for encounters across countries, everyone is up to date again.",
        "imgAlt": "World map with a virtual auditorium where colleagues from several countries come together"
      }
    ],
    "faq": [
      {
        "q": "How long does an online town hall take?",
        "a": "An online town hall usually runs between 60 and 120 minutes. That leaves enough room for updates, interaction and questions without attention drifting."
      },
      {
        "q": "How many staff can take part?",
        "a": "We run online town halls for 30 to well over 600 participants. Interaction stays possible even with large groups."
      },
      {
        "q": "How do you stop a town hall becoming one-way traffic?",
        "a": "By making interaction a deliberate part of the programme. And by not being afraid to split large groups into smaller units. People retain information better when they get to work with it themselves. So alongside live questions, polls and votes, we also build in formats for processing and enriching what has been presented."
      },
      {
        "q": "Can staff ask questions anonymously?",
        "a": "Dialogue and contact are central to everything we do. We work with anonymous questions only by exception, and in that case they're gathered beforehand."
      },
      {
        "q": "Which software do you use?",
        "a": "We work with Zoom, Zoom Events and Teams. For a town hall we'd also gladly show you SpatialChat: it makes real interaction with a large group surprisingly easy. The choice ultimately depends on what you want the gathering to achieve."
      },
      {
        "q": "What does an online town hall cost?",
        "a": "The investment depends on the number of participants, the production you want and the level of support. That's why we're happy to make a proposal built around your case."
      }
    ],
    "faqMore": [
      {
        "q": "What is the difference between a town hall and a webinar?",
        "a": "A webinar is usually about passing on knowledge. A town hall is more often about internal communication, engagement and dialogue between staff and management."
      },
      {
        "q": "Can a town hall be hybrid?",
        "a": "Yes. Many organisations combine an audience in the room with online participants. This often costs engagement and interaction. We therefore prefer a clear choice: everyone online, or everyone in person."
      },
      {
        "q": "Can staff submit questions in advance?",
        "a": "Yes. That often produces better and more considered questions, and it helps speakers prepare."
      },
      {
        "q": "Can we record the session?",
        "a": "Yes. The recording can be shared afterwards with people who were unable to attend."
      },
      {
        "q": "Is a moderator necessary?",
        "a": "We strongly recommend one. A moderator keeps the pace, makes interaction happen and helps the right questions come up at the right moment. Often the client provides an internal moderator and we provide the technical host, but we can supply a facilitator too."
      },
      {
        "q": "How often do organisations hold a town hall?",
        "a": "Many organisations hold a town hall quarterly or monthly as a fixed communication moment. More and more do this online, to save travel, time and money. That works now that there are formats which do more than simply broadcast."
      }
    ]
  },
  "all-hands": {
    "metaOmschrijving": "An online all-hands where the board and the staff genuinely talk to each other. For 50 to 500 participants, designed, moderated and technically produced.",
    "randvoorwaardenKop": "What a successful online all-hands needs.",
    "title": "Running an online all-hands",
    "tagline": "An open conversation between leadership and staff — transparent, live and genuinely involved.",
    "intro": "An all-hands meeting is built on openness: staff can ask questions, weigh in and say what they think. We design interactive all-hands gatherings where that really happens — not as a front, but as an honest dialogue between leadership, teams and the rest of the organisation.",
    "forWho": "Boards, HR and communication teams",
    "range": "50-500 participants",
    "heroAlt": "Participant in an online all-hands with the entire workforce on a large screen",
    "outcomeSummary": "For engagement across the organisation, open questions and a shared way forward.",
    "outcomes": [
      {
        "title": "Involved staff",
        "body": "People feel heard and taken seriously — no theatre, but genuine contact."
      },
      {
        "title": "Trust in leadership",
        "body": "Openness and transparency strengthen confidence in the direction the organisation is taking."
      },
      {
        "title": "An update that sticks",
        "body": "Staff know what is being asked of them and feel connected to the larger story."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Messages, questions and the tone the conversation should have."
      },
      {
        "title": "Design",
        "body": "A programme with an opening, updates, Q&A and moments of interaction."
      },
      {
        "title": "Rehearsal",
        "body": "A full technical run-through with speakers and hosts."
      },
      {
        "title": "Live production",
        "body": "Professionally produced, including moderation in real time."
      }
    ],
    "validation": {
      "headline": "An online all-hands should feel like a gathering of and with everyone.",
      "items": [
        {
          "title": "Everyone on board",
          "body": "An online all-hands brings the whole organisation together. Staff at other locations, at home or abroad can join easily and take an active part."
        },
        {
          "title": "Updates that stay with people",
          "body": "Strategy, results, successes and concerns mean more when staff get to work with them and feel genuinely invited to contribute."
        },
        {
          "title": "Openness with structure",
          "body": "An all-hands needs room and control at once. We look after a tight programme, clear roles, well-prepared speakers and technical support for everyone present."
        }
      ]
    },
    "conditions": [
      {
        "title": "A recognisable rhythm",
        "body": "All-hands gatherings work best with a clear format. Participants then know what to expect and when they can contribute."
      },
      {
        "title": "Room for real questions",
        "body": "Openness takes preparation. Think of questions submitted in advance, live chat, clear ground rules and a moderator who dares to follow up."
      },
      {
        "title": "Speakers who come across well online",
        "body": "Attention online is fragile. We steer towards short contributions, clear questions to the audience and good supporting material."
      }
    ],
    "cases": [
      {
        "label": "International SME",
        "title": "A new course for everyone",
        "body": "This organisation wants to hold its annual all-hands online for once. Participants come from every country it works in. We build an online all-hands with management updates, team stories and a broad round of questions. A session for direction and recognition.",
        "imgAlt": "Game course in company colours in which staff walk through the new course step by step"
      },
      {
        "label": "HR and communication",
        "title": "Diversity Day",
        "body": "For the annual Diversity Day we design a gathering with outside experts and colleagues from within. Alongside the presentations there's a virtual marketplace where participants talk further about the topics that matter to them.",
        "imgAlt": "Colourful welcome space for Diversity Day asking: what is your plus?"
      },
      {
        "label": "Mid-sized Dutch company",
        "title": "A monthly all-hands with a fixed shape",
        "body": "We help set up a recurring format for organisation-wide updates to staff spread across the country. With a recognisable structure and preparation that's easy to plan, it becomes a fixed point in the calendar.",
        "imgAlt": "Virtual organisation chart covering CEO, Finance, Sales, HR, Operations and Communications"
      }
    ],
    "faq": [
      {
        "q": "What is the difference between an all-hands and a town hall?",
        "a": "The terms are often used interchangeably. An all-hands usually addresses the whole organisation and combines updates, successes, strategy and questions from staff."
      },
      {
        "q": "How many people can take part?",
        "a": "We run all-hands gatherings for roughly 50 to well over 500 participants."
      },
      {
        "q": "How do you keep a large group involved?",
        "a": "With interactive formats, live questions, polls, break-outs, games and a clear programme that involves staff actively."
      },
      {
        "q": "How often do organisations hold an all-hands?",
        "a": "Many choose a monthly or quarterly gathering to keep staff connected to what is happening in the organisation."
      },
      {
        "q": "Can staff ask questions?",
        "a": "Yes. Staff can ask questions during the gathering and, in most cases, beforehand as well."
      },
      {
        "q": "What does an online all-hands cost?",
        "a": "The investment depends on the size of the gathering and the support you want. We make a proposal built around your case."
      }
    ],
    "faqMore": [
      {
        "q": "Which software do you use?",
        "a": "We have experience with Zoom, Zoom Events and Teams. For an all-hands, SpatialChat is worth considering — people move around freely and conversation starts on its own. Together we pick the platform that fits your purpose."
      },
      {
        "q": "Can you handle the whole production?",
        "a": "Yes. We guide the process from design and preparation through to delivery and follow-up."
      },
      {
        "q": "Can an all-hands be hybrid?",
        "a": "Yes. Both staff on location and online participants can take an active part."
      },
      {
        "q": "How long does an all-hands take?",
        "a": "Most all-hands gatherings run between 60 and 180 minutes."
      },
      {
        "q": "Can we share recordings?",
        "a": "Yes. Recordings can be made available afterwards for staff who were unable to attend."
      },
      {
        "q": "How do speakers prepare?",
        "a": "We guide speakers beforehand with a briefing, a technical check and, if wanted, a rehearsal."
      }
    ]
  },
  "alv": {
    "metaOmschrijving": "An online AGM that meets the statutes and still feels alive. 30 to 600 members, weighted voting possible, checklist from MeetingMasters included.",
    "randvoorwaardenKop": "What a successful online AGM needs.",
    "title": "Running an online AGM",
    "tagline": "Your AGM: formally watertight, well structured and still lively.",
    "intro": "An online annual general meeting needs the right infrastructure: voting modules, attendance registration and a structured round of questions. We help associations, foundations and cooperatives run a legally valid online AGM that goes off professionally.",
    "forWho": "Associations, foundations, cooperatives",
    "range": "30-600 participants",
    "heroAlt": "Online general meeting with a vote on the laptop screen: the Vote now button beside the annual report and the figures on the table",
    "outcomeSummary": "For careful decision-making, transparent voting and members who can all take part in full.",
    "outcomes": [
      {
        "title": "Formally watertight",
        "body": "The meeting satisfies every legal requirement, including quorum, voting procedures and minutes."
      },
      {
        "title": "Members genuinely involved",
        "body": "Members take part, vote and feel that their voice actually counts."
      },
      {
        "title": "Delivery without trouble",
        "body": "No technical or organisational problems. The board can focus entirely on the content."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Agenda, items to be voted on, quorum requirements and technical needs."
      },
      {
        "title": "Design",
        "body": "Setting up the platform, the voting module and the round of questions."
      },
      {
        "title": "Rehearsal",
        "body": "A full technical run-through with the board and the hosts."
      },
      {
        "title": "Live production",
        "body": "We run the meeting technically from beginning to end."
      }
    ],
    "validation": {
      "headline": "An AGM only works online when the process and the technology are both right.",
      "items": [
        {
          "title": "Decisions that hold up",
          "body": "An online AGM has to be reliable. With specialist partners we advise on voting procedures, proxies, roles and formal adoption."
        },
        {
          "title": "A strong turnout",
          "body": "Participants get clear instructions and live support. That lowers the threshold, including for members who rarely take part in online meetings."
        },
        {
          "title": "Calm for the board and the chair",
          "body": "We look after the technology, the online voting, participant support and the run sheet. That lets the board and the chair focus on the content and the meeting itself."
        }
      ]
    },
    "conditions": [
      {
        "title": "The statutes as the starting point",
        "body": "What do they say about meeting online, voting and quorum? How the meeting is set up always follows from what the statutes allow."
      },
      {
        "title": "A voting process you can rely on",
        "body": "Votes have to be correct and defensible afterwards. We work with the proven voting tool from our partner VoteCompany, who specialise in exactly this."
      },
      {
        "title": "A tight run sheet",
        "body": "An AGM has a fixed structure and formal moments. A clear run sheet prevents confusion at the point where it counts."
      }
    ],
    "cases": [
      {
        "label": "European trade association",
        "title": "Board meeting and AGM on the same day",
        "body": "This association, with members from across Europe, holds its statutory annual meeting with the board and with the members, after which the board has to formalise those outcomes. We handle the technical process, the voting environment, the switches between meetings and the guidance of participants.",
        "imgAlt": "Participants in an online members' meeting on screen during the statutory annual meeting"
      },
      {
        "label": "Investment company",
        "title": "Weighted votes handled carefully",
        "body": "For an investment company the voting process has to match a range of different voting rights. Together with VoteCompany we set up the procedure, test it beforehand and provide clear reporting during the meeting.",
        "imgAlt": "VoteCompany voting environment showing an election overview and weighted voting rights"
      },
      {
        "label": "Foundation",
        "title": "A change of board and the annual accounts, handled online",
        "body": "A foundation wants to deal with formal agenda items online without unrest in the technology. With a tight run sheet, a test moment and a technical host, the meeting runs clearly.",
        "imgAlt": "Online vote on the annual plan and the budget during a digital board meeting"
      }
    ],
    "faq": [
      {
        "q": "Is online voting allowed during an AGM?",
        "a": "That depends on your statutes and the way the meeting is set up. We help organisations run a careful and transparent voting process."
      },
      {
        "q": "How do you keep track of the quorum?",
        "a": "We work with VoteCompany, where everyone gets a unique voting code and voting behaviour is registered. That makes it clear throughout the meeting whether the conditions for decision-making are being met."
      },
      {
        "q": "Can members vote in advance?",
        "a": "That's possible where the statutes allow it and where you want it. We can support various forms of voting."
      },
      {
        "q": "How many members can take part?",
        "a": "We run online AGMs for 30 to well over 600 participants."
      },
      {
        "q": "What does an online AGM cost?",
        "a": "The investment depends on the number of participants, the voting procedures and the support you want. That's why we draw up a proposal for each association."
      }
    ],
    "faqMore": [
      {
        "q": "What voting options are there?",
        "a": "Depending on the situation we can work with open votes, closed votes and anonymous rounds. Weighted voting is possible alongside these."
      },
      {
        "q": "Which software do you use?",
        "a": "We work with the Online Voting Tool from VoteCompany. For informal votes we also use polling tools."
      },
      {
        "q": "Can an AGM be hybrid?",
        "a": "Yes. Some members can be present in the room while others take part online."
      },
      {
        "q": "Can members vote anonymously?",
        "a": "Yes. For certain votes anonymity may be desirable or necessary."
      },
      {
        "q": "How do you register attendance?",
        "a": "Attendance can be registered automatically or by hand, depending on the solution chosen."
      },
      {
        "q": "Do we get a voting report afterwards?",
        "a": "Yes. If you want, we supply an overview of the voting results and the turnout."
      }
    ],
    "download": {
      "titel": "Online AGM checklist",
      "body": "What to arrange in the month before, on the day itself and afterwards — from the agenda and the voting to the attendance list and the recording. Walk through it with your board.",
      "meta": "Checklist · pdf · 2024",
      "href": "/downloads/en/online-agm-checklist.pdf",
      "beeld": "/images/downloads/checklist-alv-voorblad.webp"
    }
  },
  "teambuilding": {
    "metaOmschrijving": "Online team building for teams of 6 to 50 who work far apart. From a single session to a longer programme, designed and facilitated by MeetingMasters.",
    "randvoorwaardenKop": "What successful online team building needs.",
    "title": "Running online team building",
    "tagline": "Teams that work together better — even when they work far apart.",
    "intro": "Online team building takes more than a nice activity. We design online team development in which teams learn, reflect and experiment together — with a lasting effect on how they collaborate, communicate and deliver.",
    "forWho": "Teams, departments, (project) managers",
    "range": "6-50 participants",
    "heroAlt": "Online team building in a virtual treehouse, where participants meet outside the work context",
    "outcomeSummary": "For teams that want to work together better, even when they mostly see each other online.",
    "outcomes": [
      {
        "title": "Better collaboration",
        "body": "The team communicates more effectively and works together more smoothly — at a distance and under pressure too."
      },
      {
        "title": "More mutual understanding",
        "body": "Team members get to know each other's working style and build a stronger basis of trust."
      },
      {
        "title": "Concrete agreements",
        "body": "The day ends with agreements about how to work that are actually kept."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Team dynamics, challenges and the change you're after."
      },
      {
        "title": "Design",
        "body": "Formats, moments of reflection and team exercises built around your case."
      },
      {
        "title": "Pilot",
        "body": "A first session as the starting point of the programme."
      },
      {
        "title": "Support",
        "body": "Ongoing support throughout the development programme."
      }
    ],
    "validation": {
      "headline": "Online team building becomes valuable when it's more than entertainment.",
      "items": [
        {
          "title": "Connection with an effect",
          "body": "Not a game with no consequences, but formats that strengthen collaboration, trust and communication. With a result that lasts."
        },
        {
          "title": "Especially good for hybrid teams",
          "body": "Teams that work apart lose their bond faster. Online team building makes that bond tangible again."
        },
        {
          "title": "Designed around your team",
          "body": "Every team is different. We design the programme around the situation, the questions and the goals of the team itself."
        }
      ]
    },
    "conditions": [
      {
        "title": "A clear question from the team",
        "body": "Is it about getting acquainted, trust, collaboration or energy? The question decides whether the session leans playful, reflective or developmental."
      },
      {
        "title": "A safe environment",
        "body": "Teams share more when the set-up is safe and clear. So we work with clear boundaries and formats that make taking part easy without putting anyone on the spot."
      },
      {
        "title": "Attention to what comes next",
        "body": "A session is a beginning, not an end. Team development sticks when there are agreements for afterwards."
      }
    ],
    "cases": [
      {
        "label": "New project team",
        "title": "Getting to know each other before the start",
        "body": "A project team with people from several organisations wants to lay a foundation quickly. We design an online session with introductions, working agreements and a short collaborative task.",
        "imgAlt": "Online introduction in a woodland circle, where a new project team gets to know each other"
      },
      {
        "label": "Hybrid department",
        "title": "Working together better at a distance",
        "body": "A department works partly from home and partly in the office. In a series of online team development sessions they examine what does and doesn't work in their meetings, decisions and communication.",
        "imgAlt": "Digital strategy board on which a hybrid department discusses working together at a distance"
      },
      {
        "label": "International team",
        "title": "Connecting around a shared task",
        "body": "For an international team we build online team building with creative tasks, a game and reflection. The session gives energy and produces firm agreements about working together.",
        "imgAlt": "Virtual meeting room with a timer set to three minutes during a short team task"
      }
    ],
    "faq": [
      {
        "q": "Does team development really work online?",
        "a": "Yes. Teams these days often work together online. It then makes sense to practise, reflect and develop online as well."
      },
      {
        "q": "How large can a team be?",
        "a": "We usually work with groups of 6 to around 50 participants."
      },
      {
        "q": "Is it a single session or a programme?",
        "a": "Both are possible. Many organisations choose a programme with several sessions."
      },
      {
        "q": "Which formats do you use?",
        "a": "Anything from reflective conversations and simulations to interactive exercises, games and team dialogues."
      },
      {
        "q": "Which software do you use?",
        "a": "We always pick the environment that fits the purpose best — though we lean towards SpatialChat, because a great deal is possible there and because the backdrops genuinely enrich the context of an exercise or a conversation."
      },
      {
        "q": "What does online team development cost?",
        "a": "That depends on group size, the number of sessions and the support you want. Do just call or email; we're glad to talk it through and give you a figure."
      }
    ],
    "faqMore": [
      {
        "q": "What is the difference between team building and team development?",
        "a": "Team building is often about connection. Team development goes a step further and looks at collaboration, roles and results as well."
      },
      {
        "q": "Does this work for hybrid teams?",
        "a": "Yes. Hybrid teams in particular tend to benefit from explicit attention to how they work together."
      },
      {
        "q": "Can you build something bespoke?",
        "a": "Yes. Almost every programme is designed specifically for the team."
      },
      {
        "q": "Can you work with team assessments?",
        "a": "Yes. Existing team assessments or research can be taken into account."
      },
      {
        "q": "How do you measure the result?",
        "a": "That differs per programme. Often we work with goals set beforehand and moments of evaluation."
      },
      {
        "q": "Can several teams take part at once?",
        "a": "Yes. We regularly run programmes with several teams inside one organisation."
      }
    ]
  },
  "brainstormen": {
    "metaOmschrijving": "An online brainstorm that gets past the sticky notes: from diverging to choosing. 10 to 100 participants, 2 to 4 hours, facilitated by MeetingMasters.",
    "randvoorwaardenKop": "What a successful online brainstorm session needs.",
    "title": "Running an online brainstorm session",
    "tagline": "Creative sessions that genuinely produce ideas, even with everyone at a distance.",
    "intro": "Brainstorming online asks for a different approach than a room does. We design online brainstorm sessions with the right energy, the right formats and tight facilitation — so that ideas flow, perspectives become visible and the best ideas get somewhere.",
    "forWho": "Innovation teams, marketing departments, product and strategy teams",
    "range": "10-100 participants",
    "heroAlt": "Online brainstorm in which participants gather ideas around De Bono's six thinking hats",
    "outcomeSummary": "For new ideas, smart choices and a session everyone contributes to.",
    "outcomes": [
      {
        "title": "Ideas you can use",
        "body": "Not a confused wall of sticky notes, but a filled bank of ideas with specific, well-documented input."
      },
      {
        "title": "Energy and creativity",
        "body": "The right formats put everyone into a creative mode, including people who wouldn't call themselves creative."
      },
      {
        "title": "Clear next steps",
        "body": "The brainstorm doesn't end at ideas but with a clear plan for what happens next."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "What is the challenge, and what should the brainstorm deliver?"
      },
      {
        "title": "Design",
        "body": "Creative formats, digital tools and a tight structure for the time."
      },
      {
        "title": "Rehearsal",
        "body": "A technical run-through and alignment with the facilitators."
      },
      {
        "title": "Live production",
        "body": "We facilitate the session from beginning to end."
      }
    ],
    "validation": {
      "headline": "Brainstorming online often produces more than a full meeting room does.",
      "items": [
        {
          "title": "More input in less time",
          "body": "In a digital brainstorm everyone can add ideas at once. That gives quieter participants a better hearing and makes the output visible straight away."
        },
        {
          "title": "From loose ideas to choices",
          "body": "A good online brainstorm doesn't stop at sticky notes. We build in phases for clustering, deepening, prioritising and translating into next steps."
        },
        {
          "title": "Creative and structured",
          "body": "With formats such as Miro, SpatialChat, Liberating Structures, World Café or our own, there's room for creativity without the session wandering off."
        }
      ]
    },
    "conditions": [
      {
        "title": "A good question",
        "body": "The quality of the question decides the quality of the ideas. Too broad and it goes vague, too narrow and it holds creativity back."
      },
      {
        "title": "Diverging and converging",
        "body": "First make room for plenty of ideas, then choose carefully. Without that second phase a brainstorm often stays a handsome board with no decision."
      },
      {
        "title": "A digital workspace that holds up",
        "body": "Miro, SpatialChat or another canvas has to be laid out sensibly beforehand. Participants should be able to add ideas without technical hurdles."
      }
    ],
    "cases": [
      {
        "label": "Marketing team",
        "title": "Developing ideas for a new campaign",
        "body": "A marketing team wants to gather a lot of angles for a new campaign quickly. We design an online brainstorm with individual input, group enrichment and sharp prioritisation.",
        "imgAlt": "Cards with themes such as love, intuition and protection as a spur to an online brainstorm"
      },
      {
        "label": "Innovation team",
        "title": "Testing and sharpening concepts",
        "body": "For an innovation programme we bring several disciplines together in a digital working session. We capture the results immediately and turn them into real choices between concepts.",
        "imgAlt": "Participants respond with emoji to each other's concepts in a virtual workspace"
      },
      {
        "label": "Strategy team",
        "title": "Exploring opportunities with a large group",
        "body": "An organisation wants broad input without organising a day in person. With break-outs, interactive canvases and a plenary round-up, an overview appears quickly.",
        "imgAlt": "Virtual hill landscape in which a large group explores opportunities in small companies"
      }
    ],
    "faq": [
      {
        "q": "Does brainstorming online really work?",
        "a": "Yes. Brainstorming online often produces more ideas than sessions in a room. Digital tools let everyone contribute at the same time."
      },
      {
        "q": "How many people can take part?",
        "a": "We run brainstorms for roughly 10 to 100 participants."
      },
      {
        "q": "What do we take away from the session?",
        "a": "An overview of ideas, insights and priorities. Everything is captured digitally as it happens."
      },
      {
        "q": "How long does an online brainstorm take?",
        "a": "Usually between 2 and 4 hours."
      },
      {
        "q": "Which tools do you use?",
        "a": "We prefer to work in SpatialChat: a creative and genuinely surprising environment that improves free conversation. But we also have plenty of experience with Zoom alongside interactive canvases such as Miro."
      },
      {
        "q": "What does an online brainstorm cost?",
        "a": "That depends on group size, preparation and facilitation. Do ask for a quote — it's usually less than people expect."
      }
    ],
    "faqMore": [
      {
        "q": "Can you help prioritise the ideas?",
        "a": "Yes. That's why we usually build in a phase where ideas are weighed and prioritised. Prioritising online is easier and faster than offline."
      },
      {
        "q": "Can participants contribute anonymously?",
        "a": "No, not with us. We set store by open conversation, and our formats are built so that everyone can be seen and heard. That surfaces more perspectives than anonymity does."
      },
      {
        "q": "Does brainstorming online work for large groups?",
        "a": "Especially then. Online, a great many people can contribute at the same time."
      },
      {
        "q": "Which brainstorming methods do you use?",
        "a": "Anything from Liberating Structures to World Café, Open Space formats and our own."
      },
      {
        "q": "Can a brainstorm be hybrid?",
        "a": "Yes. But it asks for very deliberate design and usually means close to doubling both preparation time and cost."
      },
      {
        "q": "What happens afterwards?",
        "a": "If you want, we help turn the ideas into specific next steps."
      }
    ]
  },
  "onboardingdag": {
    "metaOmschrijving": "An online onboarding where new colleagues feel the culture, not only the slides. 10 to 100 per cohort, designed and facilitated by MeetingMasters.",
    "randvoorwaardenKop": "What successful online onboarding needs.",
    "title": "Running online onboarding",
    "tagline": "A flying start for new staff, even when they log in from anywhere.",
    "intro": "First impressions count. We design online onboarding days where new staff are genuinely welcomed: they get to know the organisation and its culture, make contact with colleagues and understand how things work with you. That makes online onboarding more than a series of presentations.",
    "forWho": "HR teams, L&D departments, growing organisations",
    "range": "10-100 new staff per cohort",
    "heroAlt": "Online onboarding in a virtual loft, where new colleagues get to know each other and the organisation",
    "outcomeSummary": "For a warm welcome, a fast connection and colleagues who feel at home.",
    "outcomes": [
      {
        "title": "Welcome and connected",
        "body": "New staff feel at home from day one, even if they never come into the office."
      },
      {
        "title": "A clear picture of the organisation",
        "body": "Culture, ways of working and expectations are clear. No surprises in the first weeks."
      },
      {
        "title": "Faster integration",
        "body": "Fewer people drop out in the first months because they find their way around quickly."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Organisational culture, audience and what matters most in the content."
      },
      {
        "title": "Design",
        "body": "A programme with introductions, culture and interaction."
      },
      {
        "title": "Rehearsal",
        "body": "A technical run-through with HR and guest presenters."
      },
      {
        "title": "Live production",
        "body": "Fully guided — a day new staff remember."
      }
    ],
    "validation": {
      "headline": "Good onboarding sessions are a welcome on several levels at once.",
      "items": [
        {
          "title": "Making culture tangible",
          "body": "New staff want to know how the organisation really works. With stories, encounters and interactive tasks we let them experience the culture."
        },
        {
          "title": "Contact from day one",
          "body": "Getting acquainted online works well when it's deliberately designed. Think of speed dates, themed tables, buddy conversations and informal spaces."
        },
        {
          "title": "Scalable and recognisable",
          "body": "Many onboarding programmes run longer than a day. We help set up a fixed format with several modules that's easy to reuse."
        }
      ]
    },
    "conditions": [
      {
        "title": "Connection as the goal",
        "body": "An onboarding day isn't an information dump. Put getting acquainted and making contact at the centre; the rest can follow later."
      },
      {
        "title": "Colleagues who show up",
        "body": "New people feel welcome when existing colleagues join in. Plan the presence of the team and the leadership deliberately."
      },
      {
        "title": "Technology anyone can use",
        "body": "Participants are new. They shouldn't get lost, and they shouldn't drift off either. Accessible technology, clear instructions and a surprising design make the difference."
      }
    ],
    "cases": [
      {
        "label": "Growing organisation",
        "title": "Monthly onboarding for new colleagues",
        "body": "An organisation with a steady stream of new staff wants a fixed online introduction format. We design a morning with a welcome, practical information, a small taste of the culture and time with colleagues.",
        "imgAlt": "Virtual lounge with sofas where new colleagues meet each month"
      },
      {
        "label": "International group",
        "title": "Connecting new staff across several countries",
        "body": "For an international organisation we build a seven-part online programme alternating presentations, conversations and elements of play. That strengthens cohesion across borders too.",
        "imgAlt": "Participants indicate in different languages where in the world they come from"
      },
      {
        "label": "HR and L&D",
        "title": "From information pack to experience",
        "body": "An HR team has plenty of content but little interaction. We turn the onboarding into an active programme with tasks, Q&A and informal encounters.",
        "imgAlt": "Virtual library with reading tables, where onboarding becomes an experience rather than a package"
      }
    ],
    "faq": [
      {
        "q": "How do you make new staff feel welcome online?",
        "a": "By putting encounters at the centre. People remember colleagues better than presentations."
      },
      {
        "q": "How many staff can take part?",
        "a": "From around 10 to well over 100 new colleagues per edition."
      },
      {
        "q": "Can you run this regularly?",
        "a": "Yes. Many organisations hold an onboarding day monthly or quarterly."
      },
      {
        "q": "What do participants need?",
        "a": "A laptop, an internet connection and a quiet place to join from."
      },
      {
        "q": "Which software do you use?",
        "a": "That depends on the programme and what the organisation wants."
      },
      {
        "q": "What does an online onboarding day cost?",
        "a": "That depends on the size and the shape of the programme."
      }
    ],
    "faqMore": [
      {
        "q": "Can managers take part?",
        "a": "Yes. It's usually appreciated when they do."
      },
      {
        "q": "Can onboarding be hybrid?",
        "a": "Yes, provided it's deliberately designed."
      },
      {
        "q": "How do you encourage people to get acquainted?",
        "a": "With formats that actively bring people into contact with each other."
      },
      {
        "q": "Can you run international onboarding?",
        "a": "Yes. We regularly work with international groups."
      },
      {
        "q": "Can parts be recorded?",
        "a": "Yes. That's particularly handy for passing on knowledge."
      },
      {
        "q": "Is bespoke work possible?",
        "a": "Yes. Almost every onboarding day is designed around the organisation."
      }
    ]
  },
  "training-workshop": {
    "metaOmschrijving": "An online training or workshop where participants actually take part. For cohorts of 6 to 100, with meeting design, a run sheet and technical hosting.",
    "randvoorwaardenKop": "What successful online training and workshops need.",
    "title": "Running online training and workshops",
    "tagline": "Learning and growing in an online setting that works: not just watching, but doing.",
    "intro": "An online training or workshop takes more than a webinar. We help trainers, educators and L&D teams run engaging, interactive training online: with practice, reflection, collaboration and technical support that carries the learning experience.",
    "forWho": "L&D teams, HR departments, training institutes",
    "range": "6-100 participants per cohort",
    "heroAlt": "Online training with participants marking on a coloured scale how familiar they're with the subject",
    "outcomeSummary": "For interactive online training and workshops where people learn, practise and apply.",
    "outcomes": [
      {
        "title": "Learning you can measure",
        "body": "Participants demonstrably learn and grow: not only theory, but application in practice."
      },
      {
        "title": "A fit with your culture",
        "body": "The programme matches the learning style and the pace of your organisation."
      },
      {
        "title": "It sticks in daily work",
        "body": "The skills people learn travel back to the workplace and take root in the day-to-day."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Learning goals, audience and the time available."
      },
      {
        "title": "Design",
        "body": "Modular structure, formats and the digital learning environment."
      },
      {
        "title": "Pilot",
        "body": "A test run with the first group and adjustments based on their feedback."
      },
      {
        "title": "Roll-out",
        "body": "Full support, session by session or cohort by cohort."
      }
    ],
    "validation": {
      "headline": "Training online asks for a learning experience, not a computer programme or a digital lecture.",
      "items": [
        {
          "title": "Active learning instead of watching",
          "body": "Participants learn more when they practise themselves, answer questions, share examples and work together. So we design online workshops in short blocks with plenty of interaction."
        },
        {
          "title": "The same training, a new design",
          "body": "Copying a classroom training into Teams rarely works well. We translate the content into an online learning format that fits the group, the learning goal and the time available."
        },
        {
          "title": "Calm for trainer and participants alike",
          "body": "We handle the meeting design, the run sheet, the technical hosting and the interaction tools. That makes both trainers and participants better."
        }
      ]
    },
    "conditions": [
      {
        "title": "Sharp learning goals",
        "body": "What should participants know, be able to do or dare to do afterwards? A good online learning design starts with specific behaviour, not with slides."
      },
      {
        "title": "A rhythm that works online",
        "body": "Learning online asks for variation: short explanations, practice, sharing, reflection and application. That rhythm prevents fatigue and improves what people take away."
      },
      {
        "title": "Technology that supports the learning",
        "body": "Break-outs, polls, Miro, chat and assignments have to feel logical. We choose a platform and tools that reinforce the learning goal, not whatever happens to be available."
      }
    ],
    "cases": [
      {
        "label": "L&D team",
        "title": "Turning classroom training into online training",
        "body": "An organisation wants to offer an existing training online without it becoming a webinar. We redesign the formats, write a technical run sheet and support the first live editions.",
        "imgAlt": "Interactive scale from beginner to expert on which participants indicate what they already know"
      },
      {
        "label": "Training institute",
        "title": "Guiding cohorts through an online learning programme",
        "body": "For a learning programme with several groups we design a creative, varied series of interactive lectures, with plenary moments, break-outs, assignments and question hours.",
        "imgAlt": "Illustration of a climb to the summit, as an image for an online learning programme in cohorts"
      },
      {
        "label": "Internal experts",
        "title": "Helping trainers work online with confidence",
        "body": "A team of subject experts wants to run online workshops. We support them with formats, rehearsals and live support inside SpatialChat, so the content lands better.",
        "imgAlt": "Virtual room in SpatialChat where internal trainers deliver their online workshop"
      }
    ],
    "faq": [
      {
        "q": "How does online training differ from a webinar?",
        "a": "A webinar is usually about passing on knowledge. An online training asks for active participation. People practise, reflect, work together and apply what they learn straight away. That's exactly why the knowledge sticks better. Anyone who wants to run an interactive online training therefore needs more than a presentation and a camera."
      },
      {
        "q": "Can any training be given online?",
        "a": "Almost any training can be given online. A digital training does often ask for a different set-up, though. What works in a physical room doesn't automatically work online. So we help trainers and educators translate existing training into an effective online learning experience."
      },
      {
        "q": "How do you keep participants actively involved?",
        "a": "By not only letting people listen, but above all letting them do. Think of exercises, break-out conversations, interactive assignments, reflective questions and shared formats. People simply learn more from taking part than from observing. That holds for a short online workshop and for an extensive online learning programme alike."
      },
      {
        "q": "Which software do you use?",
        "a": "We have experience with Zoom, Teams, Zoom Events, SpatialChat, Miro and various learning and interaction tools. Which environment works best depends on the learning goal, the group size and the experience you're after. The technology supports the training, not the other way round."
      },
      {
        "q": "How many participants suit an online training?",
        "a": "Anything from small groups of six to larger learning programmes with a hundred participants or more. The ideal group size depends on how much interaction and guidance you want."
      },
      {
        "q": "What does an online training or workshop cost?",
        "a": "That depends on group size, the length of the programme, the preparation and the support you want. So we tailor the proposal to your learning goal."
      }
    ],
    "faqMore": [
      {
        "q": "Can you convert an existing training to online?",
        "a": "Yes. It's one of the questions we get most often. We usually keep the content but redesign the formats so that they suit online learning better. The result isn't an online version of a classroom training, but a training that makes the most of what digital learning can do."
      },
      {
        "q": "How do you avoid Zoom fatigue during a training?",
        "a": "By building in variation. Short blocks, active formats, movement, reflection and collaboration keep participants involved and keep their energy up."
      },
      {
        "q": "Does learning online work as well as learning in a classroom?",
        "a": "That depends on the learning goal. For many forms of knowledge sharing, collaboration and skills training, online learning works surprisingly well. Sometimes better, because participants practise straight away in their own working environment and apply what they learn faster."
      },
      {
        "q": "Can participants do assignments between sessions?",
        "a": "Yes. More than that: many successful learning programmes combine live sessions with assignments in between. That makes learning part of the daily work."
      },
      {
        "q": "Can you support the trainers?",
        "a": "Yes. Some clients provide the content themselves and bring us in for the design, the interaction and the technical support. That lets trainers focus entirely on their expertise."
      },
      {
        "q": "What makes an online training successful?",
        "a": "A successful online training starts not with the technology but with the learning goal. The best ones combine clear goals, active formats, interaction and enough room to apply what has been learned."
      },
      {
        "q": "Can you support longer learning programmes?",
        "a": "Yes. We regularly support online learning programmes made up of several training days, workshops, peer sessions or learning communities. There we help not only with the technology but with the design of the learning experience."
      },
      {
        "q": "What is the difference between an online workshop and an online training?",
        "a": "A workshop is usually shorter and more about exploring, creating or practising together. A training more often has a clear learning goal and a more structured build. In practice the two regularly run into each other."
      },
      {
        "q": "Why do trainers choose MeetingMasters?",
        "a": "Because we understand that training online asks for something other than copying a classroom training into Zoom. We help trainers, educators and L&D teams translate their expertise into interactive online training and workshops where participants stay genuinely involved and actually learn."
      }
    ]
  },
  "bedrijfsfeest": {
    "metaOmschrijving": "An online company party where people wander freely and run into each other. For 20 to 400 colleagues, with games, entertainment and hosting by MeetingMasters.",
    "randvoorwaardenKop": "What a successful online company party needs.",
    "title": "Running an online company party",
    "tagline": "A party people genuinely remember, even with everyone logging in from home.",
    "intro": "An online party doesn't have to be a compromise. Games, live entertainment, online escape rooms and social spaces can together make an evening that works beautifully — provided the programme is well designed and the technology runs smoothly.",
    "forWho": "Teams, departments, whole organisations",
    "range": "20-400 participants",
    "heroAlt": "Online company party with confetti, balloons and colleagues closing the year together",
    "outcomeSummary": "For an online party that feels like being together, even with everyone somewhere else.",
    "outcomes": [
      {
        "title": "Real connection",
        "body": "Not an awkward Zoom drinks but an evening people genuinely remember and look forward to."
      },
      {
        "title": "A fit with your culture",
        "body": "The party feels like your organisation: the right atmosphere, the right level, the right company."
      },
      {
        "title": "A proper send-off",
        "body": "Whether it's a milestone or an annual tradition, the moment gets the attention it deserves."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Atmosphere, scale and wishes: what suits your organisation?"
      },
      {
        "title": "Design",
        "body": "Programme, games, entertainment and social spaces."
      },
      {
        "title": "Rehearsal",
        "body": "Everything is ready and the hosts know their moves."
      },
      {
        "title": "Live production",
        "body": "We run the party entirely, so that you can enjoy it too."
      }
    ],
    "validation": {
      "headline": "An online company party becomes fun when people experience something together.",
      "items": [
        {
          "title": "Above all, not like a meeting",
          "body": "A screen full of faces isn't a party. We design a programme with games, entertainment and room to simply catch up."
        },
        {
          "title": "Wandering around and running into people",
          "body": "In the right environment people walk around freely and fall into conversation. Just as at a real party."
        },
        {
          "title": "Everyone included, wherever they are",
          "body": "Colleagues at home, in the office or abroad celebrate together. No travel, no fuss, at the same moment."
        }
      ]
    },
    "conditions": [
      {
        "title": "A programme with energy",
        "body": "An online company party needs pace, variation and short segments. Long plenary blocks take the energy out of it."
      },
      {
        "title": "A platform that supports meeting people",
        "body": "For informal online events a social environment usually works better than a standard video meeting. The choice of platform is crucial."
      },
      {
        "title": "Good hosting",
        "body": "A festive online gathering needs clear guidance. Hosts look after the atmosphere, the explanations, the technology and the transitions between segments."
      }
    ],
    "cases": [
      {
        "label": "International team",
        "title": "An online party for colleagues in several countries",
        "body": "An organisation wants to close the year with staff who rarely see each other in person. We build an online evening with a plenary opening, an interactive game and free space to meet.",
        "imgAlt": "Virtual lounge bar where colleagues from several countries sit together at small tables"
      },
      {
        "label": "Department event",
        "title": "From online drinks to a real programme",
        "body": "A team wants something better than the standard digital drinks. We design a compact company party with a formal word from the CEO, a bespoke quiz and themed rooms that suit spontaneous conversation.",
        "imgAlt": "Online company party with a quiz in a festively decorated virtual bar"
      },
      {
        "label": "SME",
        "title": "Several activities in one online environment",
        "body": "For a large group we combine entertainment, games and social spaces. Participants choose what they join, just as at a physical event.",
        "imgAlt": "Game course with numbered lanes in which participants choose for themselves where to join in"
      }
    ],
    "faq": [
      {
        "q": "Can an online company party really be fun?",
        "a": "Yes, provided it's more than online drinks. The best online company parties combine meeting people, interaction and a shared experience."
      },
      {
        "q": "How many people can take part?",
        "a": "We run online company parties for roughly 20 to well over 400 participants."
      },
      {
        "q": "What activities are possible?",
        "a": "Think of online escape rooms, quizzes, interactive games, speed dates, entertainment, workshops or informal encounters."
      },
      {
        "q": "Do participants have to install anything?",
        "a": "For a festive session we prefer a platform where conversation happens naturally. SpatialChat is decidedly festive and runs straight in your browser. Book a demo and see for yourself."
      },
      {
        "q": "What does an online company party cost?",
        "a": "That depends on the programme, the group size and the support you want."
      }
    ],
    "faqMore": [
      {
        "q": "Can international teams take part?",
        "a": "Yes. Online company parties suit international organisations particularly well."
      },
      {
        "q": "Can we add our own branding?",
        "a": "Yes. We regularly work branding, themes and organisation-specific elements into the programme."
      },
      {
        "q": "Are competitive games possible?",
        "a": "Yes. Many groups enjoy a healthy dose of competition, as long as the fun stays central."
      },
      {
        "q": "Can you arrange entertainment?",
        "a": "Yes. We regularly work with artists, quizmasters and other professionals."
      },
      {
        "q": "Can participants meet each other freely?",
        "a": "Yes. We often think the informal encounters matter at least as much as the programme itself."
      }
    ]
  },
  "kerstfeest": {
    "metaOmschrijving": "An online Christmas party that feels warm and gets retold for months. For 10 to 500 colleagues, from short drinks to a full end-of-year programme.",
    "randvoorwaardenKop": "What a successful online Christmas party needs.",
    "title": "Running an online Christmas party",
    "tagline": "A party people genuinely enjoy — even with the phone propped up on the kitchen table.",
    "intro": "Online Christmas drinks don't have to be a compromise. We design online Christmas parties full of energy, humour and real connection: with escape rooms, live entertainment, quiz games and social spaces where people can meet each other freely.",
    "forWho": "Teams, departments, whole organisations",
    "range": "10-500 participants",
    "heroAlt": "Online Christmas party in a festively decorated virtual space with gold balloons and colleagues on screen",
    "outcomeSummary": "For a warm close to the year, online and still personal.",
    "outcomes": [
      {
        "title": "Genuine warmth",
        "body": "Not a duty to be got through, but an evening people really enjoy and talk about for a long time."
      },
      {
        "title": "A fit with your organisation",
        "body": "The atmosphere, the level and the programme suit who you're as a company."
      },
      {
        "title": "A memorable end to the year",
        "body": "A proper send-off that leaves people feeling appreciated."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Atmosphere, scale and wishes — what suits your organisation and its culture?"
      },
      {
        "title": "Design",
        "body": "A programme with games, entertainment, social spaces and a few surprises."
      },
      {
        "title": "Rehearsal",
        "body": "Everything is ready and the hosts know the shape of the evening."
      },
      {
        "title": "Live production",
        "body": "We run the party entirely, so that you can enjoy it too."
      }
    ],
    "validation": {
      "headline": "An online Christmas party works when there's room for meeting, relaxing and telling stories.",
      "items": [
        {
          "title": "Closing the year together",
          "body": "A good online Christmas party gives attention to what has happened, what deserves celebrating and who contributed to it."
        },
        {
          "title": "Experiencing, not broadcasting",
          "body": "Not a speech with an audience, but an evening in which people do something together. Games, entertainment and room for a proper conversation."
        },
        {
          "title": "Built around your atmosphere",
          "body": "From compact online Christmas drinks to a full end-of-year party: we design the programme so that it fits the culture of the organisation."
        }
      ]
    },
    "conditions": [
      {
        "title": "Starting in good time",
        "body": "In November and December diaries fill up fast. A good online Christmas party therefore asks for early booking and early attention to form, programme and technology."
      },
      {
        "title": "A balance between plenary and free",
        "body": "A good Christmas party combines a shared programme with room for spontaneous conversation."
      },
      {
        "title": "Clear communication to participants",
        "body": "Festive online events work better when people know beforehand what to expect, what they need and how they get in."
      }
    ],
    "cases": [
      {
        "label": "Team party",
        "title": "A Christmas quiz and informal tables",
        "body": "A team wants to close the year together online without long speeches. We build a cheerful programme with short plenary moments, quiz rounds and free time to meet.",
        "imgAlt": "Virtual Christmas café with a Christmas quiz on screen and colleagues at informal tables"
      },
      {
        "label": "Large organisation",
        "title": "An end-of-year party with suppliers",
        "body": "For a large and varied group we design end-of-year conversations with a splendid drinks reception afterwards. Participants choose for themselves between talking in a pub or joining the quiz.",
        "imgAlt": "Wintry landscape with snowmen where staff and suppliers close the year together"
      },
      {
        "label": "Cooperative",
        "title": "A Christmas gathering with atmosphere",
        "body": "A group of companies wants to pause at Christmas over the intense year behind them. With room for reflection, storytelling and quieter themed rooms, there's space for the real conversation.",
        "imgAlt": "Atmospheric Christmas space with the words make a wish, where participants reflect on the past year"
      }
    ],
    "faq": [
      {
        "q": "How do you organise an online Christmas party?",
        "a": "A good online Christmas party combines meeting, relaxing and a shared moment. It isn't about broadcasting but about experiencing something together."
      },
      {
        "q": "What activities are possible?",
        "a": "Anything from online escape rooms and Christmas quizzes to workshops, entertainment and informal encounters."
      },
      {
        "q": "How many people can take part?",
        "a": "From small teams to organisations with hundreds of staff."
      },
      {
        "q": "When should we book?",
        "a": "In November and December in particular the diary fills up fast. So we advise getting in touch early."
      },
      {
        "q": "What does an online Christmas party cost?",
        "a": "That depends on the group size, the programme and the support you want."
      }
    ],
    "faqMore": [
      {
        "q": "Which software do you use?",
        "a": "For gatherings like these we prefer a platform where contact and working together come more easily. SpatialChat lends itself to that particularly well — do book a demo and try it."
      },
      {
        "q": "Can international teams take part?",
        "a": "Yes. That happens regularly."
      },
      {
        "q": "Can we personalise the party entirely?",
        "a": "Yes. We're glad to work in themes, stories and elements from the organisation."
      },
      {
        "q": "Are team-building activities possible?",
        "a": "Yes. Many organisations combine relaxation with collaboration and meeting people."
      },
      {
        "q": "Can participants wander around and meet people?",
        "a": "Yes. In interactive environments participants decide for themselves who they talk to."
      },
      {
        "q": "What makes an online Christmas party successful?",
        "a": "A good balance between programme, meeting people and room for spontaneous conversation."
      }
    ]
  },
  "teamuitje": {
    "metaOmschrijving": "An online team outing that connects without the fuss. For 10 to 300 colleagues, with games, real encounters and facilitation by MeetingMasters.",
    "randvoorwaardenKop": "What a successful online team outing needs.",
    "title": "Running an online team outing",
    "tagline": "Team building with real engagement: exciting, easy to join and entirely online.",
    "intro": "An online team outing isn't a digital version of the Friday afternoon drinks. We design online team and company outings where people play, talk and work together in an environment that invites contact. From quiz to escape challenge, from creative task to informal networking space: the programme fits your team, your goal and the energy you're after.",
    "forWho": "Teams, departments, project groups, international organisations",
    "range": "10-300 participants",
    "heroAlt": "Online team outing where colleagues work through a game course together instead of meeting",
    "outcomeSummary": "For remote and hybrid teams who want to do something enjoyable together.",
    "outcomes": [
      {
        "title": "Working together under pressure",
        "body": "Teams discover each other's strengths in an exciting environment that's easy to step into."
      },
      {
        "title": "High engagement",
        "body": "Everyone joins in, including the people who normally stay in the background."
      },
      {
        "title": "A shared experience",
        "body": "An adventure people retell for a long time, and that strengthens the bond between them."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Group size, goal and the theme you have in mind."
      },
      {
        "title": "Design",
        "body": "Choosing the format and any bespoke elements."
      },
      {
        "title": "Briefing",
        "body": "Participants are prepared and the technology is ready."
      },
      {
        "title": "Live production",
        "body": "Fully guided by our game masters."
      }
    ],
    "validation": {
      "headline": "An online team outing works best when people do something together.",
      "items": [
        {
          "title": "More than online drinks",
          "body": "A good online team outing has a clear shape. Not a loose conversation with awkward silences, but a shared activity anyone can step into easily."
        },
        {
          "title": "Meeting people, with a light structure",
          "body": "We combine free space with smart formats, so that colleagues genuinely talk to each other online too. That keeps the outing relaxed without making it optional."
        },
        {
          "title": "Scalable and easy to arrange",
          "body": "From one small team to several departments at once. We handle design, technology, hosting and support, so participants only have to log in."
        }
      ]
    },
    "conditions": [
      {
        "title": "A clear goal",
        "body": "Is it about relaxing, getting acquainted, showing appreciation, working together or rounding something off? The goal decides the programme and the tone."
      },
      {
        "title": "A programme with rhythm",
        "body": "Attention online asks for variation. Short rounds, clear transitions, active segments and room for informal encounters keep the energy up."
      },
      {
        "title": "Technology that stays out of the way",
        "body": "Participants have to be able to get in, move around and take part easily. We pick the platform that fits the group and run the whole production."
      }
    ],
    "cases": [
      {
        "label": "International team",
        "title": "Simply relaxing together",
        "body": "An organisation with colleagues in several countries wants to step away from business content and do something together. We design an online team outing with short plenary moments, games and informal spaces. The result: plenty of contact and pleasantly little fuss.",
        "imgAlt": "Virtual seaside terrace with a parasol, where colleagues from several countries relax together"
      },
      {
        "label": "Project team",
        "title": "Energy back into the collaboration",
        "body": "After an intense programme a project team wants to relax together and close the work off properly. With a short escape room and room for informal chat it becomes a shared moment rather than obligatory drinks.",
        "imgAlt": "Closing screen of an online escape room congratulating the team"
      },
      {
        "label": "Department",
        "title": "An online company outing for a large group",
        "body": "For a department of more than a hundred people we build a programme with parallel activities, clear guidance and a shared close. Everyone can choose, join in and meet colleagues outside the daily work context.",
        "imgAlt": "Virtual sports space with equipment, where a department splits up across parallel activities"
      }
    ],
    "faq": [
      {
        "q": "What is an online team outing?",
        "a": "An online team outing is an online activity for colleagues built around meeting, relaxing and experiencing something together. Think of a quiz, a game, a creative task, a challenge or an informal space to meet."
      },
      {
        "q": "Can an online team outing really be fun?",
        "a": "Yes, provided it's more than an open Teams call. A good online team outing has a clear shape, good guidance and enough room for contact."
      },
      {
        "q": "How many people can join?",
        "a": "We run online team outings from around 10 participants up to larger groups of several hundred colleagues."
      },
      {
        "q": "What activities are possible?",
        "a": "Think of quizzes, interactive games, challenges, speed dates, themed rooms, creative tasks or an informal programme in SpatialChat."
      },
      {
        "q": "How long does an online team outing take?",
        "a": "Usually one to two hours. For larger programmes, or where it's combined with something substantive, it can run longer."
      },
      {
        "q": "What does an online team outing cost?",
        "a": "That depends on group size, the activities and the support you want. We're glad to make a proposal that fits the purpose and the scale."
      }
    ],
    "faqMore": [
      {
        "q": "Does an online team outing suit international teams?",
        "a": "Yes. For international teams in particular it's practical: no travel time, and still a shared moment."
      },
      {
        "q": "Can teams compete against each other?",
        "a": "Yes. A little competition can give a lot of energy. We do make sure the fun and the contact stay central."
      },
      {
        "q": "Which software do you use?",
        "a": "We have experience with Zoom, Teams and SpatialChat. For informal online team outings we often prefer SpatialChat, because participants can move around more freely there and fall into conversation more easily."
      },
      {
        "q": "Do participants have to install anything?",
        "a": "Usually not. We prefer tools that work in the browser and we send clear instructions beforehand."
      },
      {
        "q": "Can you personalise the team outing?",
        "a": "Yes. We can work themes, branding, internal stories or organisation-specific questions into the programme."
      },
      {
        "q": "Can this be combined with something substantive?",
        "a": "Yes. An online team outing sits well alongside a team day, onboarding, training, an all-hands or an end-of-year gathering."
      }
    ]
  },
  "community-building": {
    "metaOmschrijving": "An online community that grows on rhythm and real conversation. From clubhouse to recurring format, designed and facilitated by MeetingMasters.",
    "randvoorwaardenKop": "What a successful online community needs.",
    "title": "Building an online community",
    "tagline": "Building a community that genuinely connects people — not one that just puts them in a group.",
    "intro": "A strong community doesn't just appear, online no more than anywhere else. We design gatherings and structures that encourage connection, make contributing easy and let the online community grow step by step.",
    "forWho": "Membership bodies, alumni, professional networks, platforms",
    "range": "dozens to thousands of participants",
    "heroAlt": "Online community of Olympians looking back together on the Games they competed in",
    "outcomeSummary": "For members, alumni and networks who want to meet online more often and better.",
    "outcomes": [
      {
        "title": "Active members",
        "body": "People take part, contribute and come back — the community is alive."
      },
      {
        "title": "Real connection",
        "body": "Members build relationships with others who share the same goals and interests."
      },
      {
        "title": "A community that grows",
        "body": "Structure and rhythm let the community reinforce itself and attract new members."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Who are your members, what binds them and what do you want to build?"
      },
      {
        "title": "Design",
        "body": "Gatherings, structures for interaction and the rhythm of the community."
      },
      {
        "title": "Launch",
        "body": "A first gathering as the start of a recurring structure."
      },
      {
        "title": "Support",
        "body": "Ongoing support with building and running it."
      }
    ],
    "validation": {
      "headline": "An online community grows through rhythm, recognition and real conversation.",
      "items": [
        {
          "title": "More than a single event",
          "body": "Building a community online takes a series of encounters, formats and moments where members find each other again. We design the rhythm and the spaces for that."
        },
        {
          "title": "A recognisable place online",
          "body": "A community benefits from an environment that doesn't feel like a stray meeting link. SpatialChat can work as an online clubhouse, meeting space or community hub."
        },
        {
          "title": "Contributing becomes easy",
          "body": "A community lives when people can bring, ask or share something. We design formats that make taking part low-threshold and worthwhile."
        }
      ]
    },
    "conditions": [
      {
        "title": "A shared purpose",
        "body": "People come back when it's clear why the community exists and what taking part gives them. That purpose has to be felt in every format."
      },
      {
        "title": "Rhythm and recognition",
        "body": "Communities need repetition. A fixed structure helps people step in faster and contribute actively."
      },
      {
        "title": "Community management and hosting",
        "body": "An online community needs looking after. Not everything has to be programmed, but without attention the contact soon falls quiet."
      }
    ],
    "cases": [
      {
        "label": "International network",
        "title": "An online clubhouse for Olympians",
        "body": "For the World Olympians Association we build an online clubhouse around the Games. Participants follow keynotes, visit workshops, organise watch parties and meet each other informally.",
        "imgAlt": "Virtual clubhouse with a view of the mountains, where Olympians meet around the Games"
      },
      {
        "label": "Alumni network",
        "title": "Recurring gatherings around themes",
        "body": "An alumni network wants to meet more than once a year. Online gatherings with themed tables, short contributions and room for people's own questions are the ideal complement to their event in person.",
        "imgAlt": "Stately hall with columns where an alumni network meets online again and again"
      },
      {
        "label": "Professional community",
        "title": "Sharing knowledge between gatherings",
        "body": "For a specialist network we build a recognisable online format in which members organise their own get-togethers to share experience and make new contacts.",
        "imgAlt": "Presentation about a culture of cohesion, with a flock of birds as an image for the community"
      }
    ],
    "faq": [
      {
        "q": "Can you build a community online?",
        "a": "Yes. But a community doesn't just appear. It takes rhythm, interaction and attention."
      },
      {
        "q": "Is this an event or a programme?",
        "a": "Usually a programme. You don't build a community in a single gathering."
      },
      {
        "q": "How do you keep members involved?",
        "a": "With regular gatherings, recognisable formats and room for members to exchange with each other."
      },
      {
        "q": "How large can a community be?",
        "a": "Anything from a few dozen to hundreds or even thousands of participants."
      },
      {
        "q": "Which software do you use?",
        "a": "We build communities in SpatialChat, because it's the only platform that combines the worlds of websites and online meetings, and can therefore support the community across every form of contact."
      }
    ],
    "faqMore": [
      {
        "q": "How often do communities hold gatherings?",
        "a": "That varies a great deal. Many choose a monthly or quarterly cycle."
      },
      {
        "q": "Can you support community managers?",
        "a": "Yes. We regularly support community managers and programme teams."
      },
      {
        "q": "Does this work internationally?",
        "a": "Yes. Online communities lend themselves particularly well to working across borders."
      },
      {
        "q": "How do you start a new community?",
        "a": "It usually begins with a shared question or a common goal."
      },
      {
        "q": "How do you increase activity?",
        "a": "By making it easy to contribute and to meet each other."
      },
      {
        "q": "Can you facilitate the community?",
        "a": "Yes. On the content and on the technology alike."
      }
    ]
  },
  "bewonersparticipatie": {
    "metaOmschrijving": "Online resident participation that reaches more people than a hall does. 10 to 500 residents, with clear boundaries and feedback they can see afterwards.",
    "randvoorwaardenKop": "What successful online resident participation needs.",
    "title": "Running online resident participation",
    "tagline": "Involving residents in policy, plans and decisions. In a way that actually works.",
    "intro": "Participation only becomes valuable when residents feel their voice counts. We design online resident participation in which people genuinely have their say — from a neighbourhood conversation to a city-wide consultation.",
    "forWho": "Municipalities, provinces, housing associations, developers",
    "range": "10-500 participants",
    "heroAlt": "Online resident participation: residents respond to an aerial photo of their neighbourhood showing the proposed change",
    "outcomeSummary": "For a wide reach, an honest conversation and residents who feel seen and heard.",
    "outcomes": [
      {
        "title": "Residents feel heard",
        "body": "Not merely invited, but genuinely involved. Their contribution counts and is visibly reported back."
      },
      {
        "title": "Policy input you can use",
        "body": "Well-documented insights that feed directly into your plans or decisions."
      },
      {
        "title": "Confidence in the process",
        "body": "A transparent approach that strengthens trust in the authority or the organisation."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "What is the question, who are the residents and what should this deliver?"
      },
      {
        "title": "Design",
        "body": "Format, structure of the conversation, moments of interaction and a way of documenting, built around your case."
      },
      {
        "title": "Rehearsal",
        "body": "A technical run-through with hosts and moderators."
      },
      {
        "title": "Live production",
        "body": "Fully guided. We make sure everyone can take part."
      }
    ],
    "validation": {
      "headline": "Resident participation gets better as the range of participants widens. We make sure everyone can join easily.",
      "items": [
        {
          "title": "Reaching more people",
          "body": "Online participation makes taking part easier for residents who wouldn't come to a hall. That can bring in more perspectives and a broader picture."
        },
        {
          "title": "Conversations with clear boundaries",
          "body": "Residents want to know what they can influence. We help sharpen the question, the programme and the way results are reported back."
        },
        {
          "title": "Capturing input visibly",
          "body": "Digital participation makes it possible to gather responses, ideas and concerns as they come, cluster them and share them in a recognisable form."
        }
      ]
    },
    "conditions": [
      {
        "title": "Start with a question",
        "body": "Consultation needs room for people to weigh in. What is the question actually on the table?"
      },
      {
        "title": "Accessibility first",
        "body": "Participants have to be able to get in easily and understand what is being asked of them. Clear instructions and live support make a great deal of difference."
      },
      {
        "title": "Transparency about influence",
        "body": "Participation only works when there's genuinely something to choose. Be clear beforehand about what can and can't be influenced."
      }
    ],
    "cases": [
      {
        "label": "Municipality",
        "title": "Neighbourhood conversations about art in the area",
        "body": "A municipality wants to involve residents online in a question about public space. We design a virtual tour, small rounds of conversation, a plenary report back and a clear digital record.",
        "imgAlt": "Two snow globes with small parks as a conversation image about art and layout in the neighbourhood"
      },
      {
        "label": "Housing association",
        "title": "Giving tenants a say in the service",
        "body": "For a housing association we build an online participation session in which residents share their experiences and set out their priorities. The outcomes can be taken forward straight away.",
        "imgAlt": "Virtual hall in which tenants have their say online about the service they receive"
      },
      {
        "label": "City-wide consultation",
        "title": "Gathering many perspectives clearly",
        "body": "In a larger programme we help split the group into thematic conversations. That keeps it personal while the range of input stays broad.",
        "imgAlt": "Residents choose in a virtual park between a picnic spot, a skate park and a playground"
      }
    ],
    "faq": [
      {
        "q": "Do residents really take part online?",
        "a": "Yes. Online participation often reaches people who wouldn't come to a gathering in person. That tends to make online resident participation more representative."
      },
      {
        "q": "How many residents can take part?",
        "a": "From 10 to well over 500 participants."
      },
      {
        "q": "How do you report the results back?",
        "a": "We make sure input is gathered visibly, summarised and shared."
      },
      {
        "q": "Is it accessible to residents who are less confident digitally?",
        "a": "We design for that deliberately. On top of that we guide participants inside the meeting itself, which makes a great deal of difference for anyone who is mainly unsure."
      },
      {
        "q": "Which participation tools do you use?",
        "a": "We often combine conversations, voting with your feet, polls, formal votes and digital canvases."
      },
      {
        "q": "What does an online participation programme cost?",
        "a": "That depends on the scale of the programme and the support you want. Do get in touch for a no-obligation quote."
      }
    ],
    "faqMore": [
      {
        "q": "How do you increase the turnout?",
        "a": "By making taking part easy."
      },
      {
        "q": "Does this work alongside gatherings in person?",
        "a": "Yes. Organisations often combine online and physical participation."
      },
      {
        "q": "How do you process all the input?",
        "a": "Digital participation makes it possible to capture input as it happens."
      },
      {
        "q": "Can you provide the moderation?",
        "a": "Yes. Our facilitators guide the conversations, but you can supply a moderator yourself as well. We then make sure they're fully prepared on the technical side."
      },
      {
        "q": "Can you support hybrid participation?",
        "a": "Yes. There we pay extra attention to everyone being able to take part on equal terms."
      }
    ]
  },
  "klankbordgroep": {
    "metaOmschrijving": "An online sounding board of 8 to 250 participants, 60 to 120 minutes. Sharp input, support you can test, and feedback that keeps people on board.",
    "randvoorwaardenKop": "What a successful online sounding board needs.",
    "title": "Running an online sounding board",
    "tagline": "Listening to the people who matter most, in a structured and effective way.",
    "intro": "A sounding board session is a valuable way to gather input, test support and keep relationships going. We design and facilitate online sounding boards with room for a proper conversation, so that the sounding board really does what it is for.",
    "forWho": "Policymakers, directors, project leads with external stakeholders",
    "range": "8-250 participants",
    "heroAlt": "Online sounding board in a virtual meeting room, where stakeholders respond to the plans",
    "outcomeSummary": "For sharp input, support you have actually tested and a conversation that gets you further.",
    "outcomes": [
      {
        "title": "Input worth having",
        "body": "Honest feedback from an involved and varied group who know what happens in practice."
      },
      {
        "title": "Stronger stakeholder relationships",
        "body": "Members of the sounding board feel taken seriously and stay actively involved."
      },
      {
        "title": "A view from outside",
        "body": "You hear what is going on beyond the walls of your organisation, and that's worth a great deal."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Purpose, who is in the group and what you want out of it."
      },
      {
        "title": "Design",
        "body": "The structure of the conversation, the questions and the moments of interaction."
      },
      {
        "title": "Rehearsal",
        "body": "A technical run-through with the hosts."
      },
      {
        "title": "Live production",
        "body": "Fully guided and documented."
      }
    ],
    "validation": {
      "headline": "An online sounding board gives more back when the conversation is properly designed.",
      "items": [
        {
          "title": "Testing for support",
          "body": "An online sounding board makes it easy to pick up feedback from members, residents, customers or stakeholders."
        },
        {
          "title": "Everyone seen and heard",
          "body": "With small conversations, clear roles and active moderation it isn't only the fastest or loudest voice that comes through."
        },
        {
          "title": "Insights you can use straight away",
          "body": "Signals, questions and advice are captured digitally. That makes the results quickly available for policy, communication or next steps."
        }
      ]
    },
    "conditions": [
      {
        "title": "A clear question for the board",
        "body": "What exactly are you asking feedback on? The sharper the question, the more useful the answers."
      },
      {
        "title": "The right composition",
        "body": "The value of a sounding board lies in the perspectives at the table. We advise on group size, spread and how the conversations are divided."
      },
      {
        "title": "A fixed structure and feedback loop",
        "body": "Participants stay involved when they see their input being used. So reporting back is part of the design."
      }
    ],
    "cases": [
      {
        "label": "Policy programme",
        "title": "Involving stakeholders early",
        "body": "A programme wants to test how a new direction is received. We design an online sounding board with thematic break-outs where different stakeholders can give their input.",
        "imgAlt": "Birds around a globe on the theme of migration, as a backdrop for an online sounding board"
      },
      {
        "label": "Membership body",
        "title": "A dialogue with a heartbeat",
        "body": "For an association we build a recurring online format in which members share signals, concerns and ideas. Supported by good communication, both turnout and engagement rise over time.",
        "imgAlt": "Online session with participants on screen alongside figures on working from home and CO2 saved"
      },
      {
        "label": "Project team",
        "title": "Testing support with external partners",
        "body": "A project lead wants input on plans without bringing everyone together in person. In an online session partners respond to the point and stay involved at every stage of the project.",
        "imgAlt": "Virtual project room with long reading tables, where external partners work through the plans"
      }
    ],
    "faq": [
      {
        "q": "What does an online sounding board give you?",
        "a": "An online sounding board gives you access to practical experience, insights and signals from the group you serve. That helps make policy, service or communication fit reality better."
      },
      {
        "q": "How large is an online sounding board?",
        "a": "Usually between 8 and 250 participants, with larger groups splitting into smaller companies as they go. That makes the session large enough for a range of perspectives and small enough for a real conversation."
      },
      {
        "q": "How often does a sounding board meet?",
        "a": "Anything from a one-off gathering to a standing meeting each month or quarter."
      },
      {
        "q": "How do you make sure everyone gets a say?",
        "a": "With a clear structure for the conversation, active moderation and formats where everyone can contribute. We work at making sure everyone can be seen and heard, not only the people who take the floor naturally. In this kind of session that's essential."
      },
      {
        "q": "Which software do you use?",
        "a": "We have experience with Zoom, Teams and Zoom Events, but we lean towards SpatialChat. The final choice depends on the group size, the interaction you want and the purpose of the gathering."
      },
      {
        "q": "What does an online sounding board cost?",
        "a": "That depends on the group size, how often it meets and the support you want. So you get a proposal built around your case."
      }
    ],
    "faqMore": [
      {
        "q": "When do you choose an online sounding board?",
        "a": "When you want to test regularly how policy, products or services are experienced by the people they're for. Or when you're looking for feedback on a new direction."
      },
      {
        "q": "How are the results captured?",
        "a": "Every insight is captured digitally so that ideas, signals and recommendations don't get lost."
      },
      {
        "q": "Does this work internationally?",
        "a": "Yes. Online sounding boards make it easy to involve participants from different regions or countries."
      },
      {
        "q": "How long does a session take?",
        "a": "Most online sounding boards run between 60 and 120 minutes."
      }
    ]
  },
  "focusgroep": {
    "metaOmschrijving": "An online focus group of 6 to 20 participants: deeper insight than a survey, with a topic guide, moderation and clear agreements about recording.",
    "randvoorwaardenKop": "What a successful online focus group needs.",
    "title": "Running an online focus group",
    "tagline": "In-depth research into what people really think: online, efficient and well facilitated.",
    "intro": "A focus group gives you insight into the world of the people you serve — their motives, their doubts and what they want. We design and facilitate inventive online focus groups where participants feel freer to be honest and researchers get insights they can use.",
    "forWho": "Researchers, marketers, policymakers, product developers",
    "range": "6-20 participants per group – several groups at once possible",
    "heroAlt": "Online focus group in which participants respond to a concept with short reactions such as Need and Impressive",
    "outcomeSummary": "For what a survey misses: deeper insight into what your audience thinks, feels and needs.",
    "outcomes": [
      {
        "title": "Deep insight",
        "body": "You learn what genuinely drives, worries and motivates your audience. Not what they say they want."
      },
      {
        "title": "Rich qualitative data",
        "body": "Insights that complement and deepen your quantitative research."
      },
      {
        "title": "Directly usable",
        "body": "Clear conclusions you can put straight to work in policy, product or communication."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "The research question, the audience and how deep you want to go."
      },
      {
        "title": "Design",
        "body": "Discussion guide, structure of the conversation and the digital environment."
      },
      {
        "title": "Recruitment",
        "body": "Selecting and inviting the right participants."
      },
      {
        "title": "Facilitation",
        "body": "Fully guided, including write-up and analysis."
      }
    ],
    "validation": {
      "headline": "An online focus group needs clear boundaries, an open structure and room to keep asking.",
      "items": [
        {
          "title": "Depth in the conversation",
          "body": "An online focus group suits the questions behind the behaviour: why people think something, where the doubt sits and what language they use. That takes more than switching the camera on."
        },
        {
          "title": "Comfortable participation",
          "body": "Participants can join from their own surroundings. That makes it easier to answer honestly and in detail."
        },
        {
          "title": "Capturing the research properly",
          "body": "With consent, sessions can be recorded, summarised or analysed. The digital setting keeps the processing manageable."
        }
      ]
    },
    "conditions": [
      {
        "title": "Careful selection",
        "body": "The composition decides the value of the focus group. Participants have to fit the research question and feel free enough to speak."
      },
      {
        "title": "A strong discussion guide",
        "body": "Good questions help you get deeper without closing the conversation down. The moderator looks after both structure and nuance."
      },
      {
        "title": "Agreements about privacy and recording",
        "body": "In research, clarity about consent, recording and processing matters. We arrange that beforehand and communicate it clearly."
      }
    ],
    "cases": [
      {
        "label": "Market research",
        "title": "Reactions to a new concept",
        "body": "An organisation wants to know how different audiences respond to a new offering. We facilitate several online focus groups working from a single discussion guide.",
        "imgAlt": "Virtual auditorium in which participants respond to a new product on screen"
      },
      {
        "label": "Policy research",
        "title": "Gathering users' experiences",
        "body": "For a public body we make room for personal experiences of a service. The online setting helps participants speak from their own context.",
        "imgAlt": "Virtual forest circle of tree stumps where participants take turns telling how the service worked for them"
      },
      {
        "label": "Product development",
        "title": "Understanding needs and objections",
        "body": "A product team wants to look beyond survey figures. In small online focus groups with product features highlighted, the language, the doubts and the expectations come through more sharply.",
        "imgAlt": "Virtual meeting room with a large screen, where a small group works through the product features"
      }
    ],
    "faq": [
      {
        "q": "How large is an online focus group?",
        "a": "Usually between 6 and 20 participants."
      },
      {
        "q": "Do participants speak freely online?",
        "a": "Usually, yes. Some participants feel more comfortable online than in a room."
      },
      {
        "q": "Do we get an analysis afterwards?",
        "a": "Yes. If you want, we supply a summary or an analysis of the main insights."
      },
      {
        "q": "Do you recruit participants?",
        "a": "We can. We're able to support both selection and invitation."
      },
      {
        "q": "Which software do you use?",
        "a": "That depends on the audience and the research question."
      },
      {
        "q": "What does an online focus group cost?",
        "a": "That depends on the scale and the support you want."
      }
    ],
    "faqMore": [
      {
        "q": "What is the difference between a focus group and a sounding board?",
        "a": "A focus group is usually a one-off. A sounding board meets more regularly."
      },
      {
        "q": "When do you choose a focus group?",
        "a": "When you want deep insight into experiences, needs or opinions."
      },
      {
        "q": "How long does a focus group take?",
        "a": "Usually between 60 and 120 minutes."
      },
      {
        "q": "Can you run several groups?",
        "a": "Yes. That happens regularly, to compare different audiences."
      },
      {
        "q": "How are the insights captured?",
        "a": "Digitally, so that nothing gets lost."
      },
      {
        "q": "Can sessions be recorded?",
        "a": "Yes, provided participants consent to it."
      }
    ]
  },
  "world-cafe": {
    "metaOmschrijving": "An online World Café for 20 to 400 participants: small table conversations, three to five rounds and a plenary harvest that makes the yield visible.",
    "randvoorwaardenKop": "What a successful online World Café needs.",
    "title": "Running an online World Café",
    "tagline": "Deep conversations in small groups, even with a large group. Online.",
    "intro": "The World Café format is ideal for exchanging knowledge and building shared understanding. We translate this powerful format into an online setting — with table conversations, rounds, hosts and a plenary harvest that makes the result visible.",
    "forWho": "Organisations that want to learn from and with each other",
    "range": "20-400 participants",
    "heroAlt": "Online World Café with participants at different tables and the harvest of the conversation on a digital board",
    "outcomeSummary": "For shared knowledge, new insight and a conversation that keeps moving.",
    "outcomes": [
      {
        "title": "Deep conversations",
        "body": "Small groups genuinely go into depth, including on complex or delicate questions."
      },
      {
        "title": "Shared understanding",
        "body": "Because everyone contributes, the outcome is widely carried."
      },
      {
        "title": "Connection across boundaries",
        "body": "People talk to colleagues or residents they would otherwise never speak to."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "The central question, the group size and what you want out of it."
      },
      {
        "title": "Design",
        "body": "How the tables are set, the question at each one and the structure of the rounds."
      },
      {
        "title": "Rehearsal",
        "body": "A technical run-through with the table hosts."
      },
      {
        "title": "Live production",
        "body": "We facilitate the whole World Café."
      }
    ],
    "validation": {
      "headline": "An online World Café makes large conversations personal and manageable.",
      "items": [
        {
          "title": "Small conversations, a large harvest",
          "body": "Participants move in small groups along a set of central questions. By switching rounds, insights travel through the whole group."
        },
        {
          "title": "Building a shared picture",
          "body": "An online World Café helps people understand each other's perspectives and see patterns. Good design supports both the process and the content."
        },
        {
          "title": "Captured digitally as it happens",
          "body": "Results are gathered during the session in canvases, notes or thematic harvests. That produces an overview quickly."
        }
      ]
    },
    "conditions": [
      {
        "title": "Strong central questions",
        "body": "A World Café stands or falls by its questions. They have to be open enough for conversation and sharp enough to deliver."
      },
      {
        "title": "Enough rounds",
        "body": "With three to five rounds insights really do travel. Switching tables is what makes the method powerful."
      },
      {
        "title": "A clear harvest",
        "body": "Gather the insights along the way, not only afterwards. That way nothing is lost and a usable overview appears."
      }
    ],
    "cases": [
      {
        "label": "Knowledge network",
        "title": "Sharing experience around a current theme",
        "body": "A professional network wants its members to learn from each other. We design an online World Café with several rounds and a shared report back.",
        "imgAlt": "Virtual bar with bar stools and an agenda showing sixteen break-outs for an online World Café"
      },
      {
        "label": "Internal organisation",
        "title": "Learning from projects together",
        "body": "An organisation wants to gather lessons from different teams. Combining table conversations with a digital harvest produces a picture that's both broad and concrete.",
        "imgAlt": "Digital board with the harvest of table conversations about the MMs, the organisation and the market"
      },
      {
        "label": "Partnership",
        "title": "Shared understanding across organisations",
        "body": "A group of organisations is looking for common ground. Online table conversations bring experiences and ideas together and produce a shared language as a starting point for working together.",
        "imgAlt": "Shared Miro board in SpatialChat on which organisations bring their insights together"
      }
    ],
    "faq": [
      {
        "q": "How does an online World Café work?",
        "a": "In an online World Café, participants talk in small groups around a set of central questions. After each round they switch tables and take the insights with them into the next conversation."
      },
      {
        "q": "How many people can take part?",
        "a": "We run online World Cafés for roughly 20 to well over 400 participants."
      },
      {
        "q": "What is an online World Café good for?",
        "a": "The format suits questions where sharing knowledge, building a common picture and gathering perspectives are what matter."
      },
      {
        "q": "How are the insights captured?",
        "a": "The results are gathered digitally as they come. That produces an overview of themes, insights and recommendations."
      },
      {
        "q": "Which software do you use?",
        "a": "For a World Café we prefer a platform where conversation runs naturally and people can switch tables easily. SpatialChat works excellently for that. Book a demo and see it in action."
      },
      {
        "q": "What does an online World Café cost?",
        "a": "That depends on the group size, the design and the facilitation."
      }
    ],
    "faqMore": [
      {
        "q": "Can a World Café be hybrid?",
        "a": "Yes. But as with other hybrid gatherings that asks for careful design and a strong alignment of the tools in use."
      },
      {
        "q": "How long does an online World Café take?",
        "a": "Usually between 90 minutes and 3 hours."
      },
      {
        "q": "How many rounds are usual?",
        "a": "We often work with three to five rounds, depending on the subject."
      },
      {
        "q": "Which subjects suit a World Café?",
        "a": "Above all, questions where different perspectives and experiences matter."
      },
      {
        "q": "Can participants switch tables?",
        "a": "Yes. That's an essential part of the method."
      },
      {
        "q": "What happens to the harvest?",
        "a": "The insights gathered are brought together and can serve as input for next steps, policy or decisions."
      }
    ]
  },
  "webinar": {
    "metaOmschrijving": "A webinar that holds people: not one-way traffic but questions, polls and conversation. Designed, hosted and technically produced by MeetingMasters.",
    "randvoorwaardenKop": "What a successful webinar needs.",
    "title": "Running a webinar",
    "tagline": "Webinars that hold people. Not just broadcasting, but genuinely connecting.",
    "intro": "A webinar doesn't have to be a one-way broadcast. We help organisations run an interactive webinar with room to go deeper and to talk one to one afterwards.",
    "forWho": "Marketing, communication and L&D teams, knowledge organisations",
    "range": "50-1000 participants",
    "heroAlt": "Online webinar where participants talk it over afterwards in a virtual lounge",
    "outcomeSummary": "For sharing knowledge in a way that goes beyond broadcasting.",
    "outcomes": [
      {
        "title": "Participants who take part",
        "body": "Not a passive audience but active participants who ask questions, vote and respond."
      },
      {
        "title": "A message that sticks",
        "body": "Content that genuinely lands, carried by the right structure and interaction."
      },
      {
        "title": "Concrete follow-up",
        "body": "Higher conversion and engagement afterwards, because participants actually took part."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Purpose, audience and how much interaction you want."
      },
      {
        "title": "Design",
        "body": "The structure of the presentation, the moments of interaction and the technical set-up."
      },
      {
        "title": "Rehearsal",
        "body": "A technical run-through with speakers and hosts."
      },
      {
        "title": "Live production",
        "body": "Fully guided, including live Q&A and technical support."
      }
    ],
    "validation": {
      "headline": "A good webinar isn't a broadcast but an online gathering, with attention and coffee afterwards.",
      "items": [
        {
          "title": "A clear story",
          "body": "A good webinar has a clear line: why does this subject matter, what does the participant learn, and what is the step you want them to take?"
        },
        {
          "title": "Interaction that strengthens the content",
          "body": "Polls, questions, chat and small conversations aren't decoration. They help participants process information and stay involved."
        },
        {
          "title": "Talking it over instead of signing off",
          "body": "The biggest difference sits at the end: room to talk further in small groups. That's where the real value appears."
        }
      ]
    },
    "conditions": [
      {
        "title": "A sharp purpose and audience",
        "body": "A webinar for leads asks for something different from an internal knowledge webinar. Audience, language and the action you want steer how the content unfolds."
      },
      {
        "title": "Interaction as a design choice",
        "body": "Engagement doesn't just happen. Build polls, questions and moments of exchange in beforehand."
      },
      {
        "title": "Good support for speakers",
        "body": "A strong speaker makes the difference. A briefing, a technical check and a rehearsal bring calm on the day and more engaged conversation."
      }
    ],
    "cases": [
      {
        "label": "Knowledge organisation",
        "title": "A broadcast that turned into a conversation",
        "body": "A knowledge organisation wants more than a talking head on screen. With polls and a lively break-out to arrive at good questions, the webinar becomes a conversation. Participants stay involved to the end.",
        "imgAlt": "Virtual lounge by the fire, where participants talk further after the webinar"
      },
      {
        "label": "Marketing team",
        "title": "Leads who genuinely took something away",
        "body": "A marketing team runs a webinar for customers and prospects. Interaction and talking it over in coffee rooms make the message stick. More conversations worth having, afterwards too.",
        "imgAlt": "Virtual beach lounge where participants talk it over once the webinar has ended"
      },
      {
        "label": "L&D team",
        "title": "Learning is something you do together",
        "body": "A learning programme uses webinars to bring in knowledge but wants more participation. We add assignments, puzzles, conversations and moments of reflection.",
        "imgAlt": "Participants watch a screen together in a virtual space during a learning programme"
      }
    ],
    "faq": [
      {
        "q": "How do you make a webinar interactive?",
        "a": "With polls, live questions, responses from the audience and other interactive formats. That keeps participants engaged with the content. The most important thing, though: we make room to talk it over afterwards in coffee rooms. That makes a great deal of difference."
      },
      {
        "q": "How many people can take part?",
        "a": "We run webinars for roughly 50 to well over 1,000 participants."
      },
      {
        "q": "Can participants ask questions?",
        "a": "Yes. Participants can ask questions through the chat."
      },
      {
        "q": "Do you handle the technology and support the speakers?",
        "a": "Yes. We handle the technical production, support the speakers and provide support during the broadcast."
      },
      {
        "q": "Do we get a recording?",
        "a": "Yes. Webinars can be recorded and shared or reused afterwards."
      },
      {
        "q": "What does a webinar cost?",
        "a": "The investment depends on the scale of the webinar and the support you want. So we draw up a proposal for each one."
      }
    ],
    "faqMore": [
      {
        "q": "What is the difference between a webinar and an online event?",
        "a": "A webinar usually focuses on one programme item or subject. An online event more often has several parts, sessions or opportunities to network."
      },
      {
        "q": "Which software do you use?",
        "a": "For webinars we work with Zoom, Zoom Events and Teams. But we'd gladly show you SpatialChat as well: participants can talk it over in small groups afterwards, which raises engagement considerably. What works best depends on your purpose and your audience."
      },
      {
        "q": "Can webinars be hybrid?",
        "a": "Yes. A webinar can be combined with an audience in the room."
      },
      {
        "q": "How long does a webinar take?",
        "a": "Most webinars run between 45 and 90 minutes."
      },
      {
        "q": "Can participants ask questions anonymously?",
        "a": "Yes. That often lowers the threshold to ask."
      },
      {
        "q": "Can you handle registration and follow-up?",
        "a": "We can support registration, reminders and follow-up afterwards. In most cases, though, the client handles this themselves."
      }
    ]
  },
  "conferentie": {
    "metaOmschrijving": "An online conference for 60 to 1,000 participants: keynotes, parallel sessions, networking moments and full technical production by MeetingMasters.",
    "randvoorwaardenKop": "What a successful online conference needs.",
    "title": "Running an online conference",
    "tagline": "Professional conferences for large groups: interactive, sharply produced and open to everyone.",
    "intro": "Online conferences need tight technical production and an approach to the content that keeps people involved. We handle both: from keynotes to parallel sessions, networking moments, live Q&A and support for participants.",
    "forWho": "Trade associations, knowledge institutions, large companies",
    "range": "60-1000 participants",
    "heroAlt": "Online conference with participants on screen beside a display showing the figures and results of the programme",
    "outcomeSummary": "For a fine programme, involved participants and room to meet.",
    "outcomes": [
      {
        "title": "A professional experience",
        "body": "Participants experience a conference of real quality, from home as well."
      },
      {
        "title": "Inspired and connected",
        "body": "Keynotes, sessions and networking moments give participants something that stays with them."
      },
      {
        "title": "Smooth at every level",
        "body": "From the plenary opening to parallel break-outs, everything runs faultlessly, technically and organisationally."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "Programme, speakers, session structure and technical requirements."
      },
      {
        "title": "Design",
        "body": "Platform, plenary and parallel sessions, networking moments."
      },
      {
        "title": "Rehearsal",
        "body": "A full run-through with speakers, hosts and session leaders."
      },
      {
        "title": "Live production",
        "body": "Professional production from beginning to end."
      }
    ],
    "validation": {
      "headline": "An online conference is more than the sum of some livestreams and a few separate sessions.",
      "items": [
        {
          "title": "A programme that works online",
          "body": "Putting a physical conference online one to one usually doesn't work. We redesign the rhythm, the session lengths, the interaction and the breaks for taking part online."
        },
        {
          "title": "Involved, even at scale",
          "body": "From sixty to well over a thousand participants. With variation and interaction, a large group stays engaged too."
        },
        {
          "title": "Meeting people is part of it",
          "body": "A conference is more than broadcasting. We design spaces where participants run into each other and carry conversations on."
        }
      ]
    },
    "conditions": [
      {
        "title": "A clear architecture for the programme",
        "body": "Participants have to understand where they should be and when. Navigation, sessions and transitions therefore need a great deal of attention."
      },
      {
        "title": "A platform chosen for the purpose",
        "body": "Zoom Events, Zoom, Teams or SpatialChat can all fit. The choice depends on the number of sessions, the interaction, the registration and the room to meet."
      },
      {
        "title": "Room to meet",
        "body": "Online participants should be more than onlookers. Set aside time and space for networking and conversation."
      }
    ],
    "cases": [
      {
        "label": "International conference",
        "title": "Plenary, parallel and hybrid at a high level",
        "body": "For the EU Community of Practice on Peace Mediation we support a large conference with hundreds of participants, parallel sessions, online participation and multilingual elements.",
        "imgAlt": "Control room of an international conference with monitors and the opening screen of CoP24"
      },
      {
        "label": "Knowledge institution",
        "title": "A multi-day programme as one whole",
        "body": "A knowledge institution runs a multi-day conference for an international audience. We handle design, technology and support. A smooth programme across several days.",
        "imgAlt": "Virtual garden with lanterns where participants gather between programme items"
      },
      {
        "label": "Trade association",
        "title": "Bringing members together online around current developments",
        "body": "For a trade association we design an online conference with plenary updates, breakout sessions and informal moments to meet.",
        "imgAlt": "Virtual mountain room with the programme of the annual conference and participants on screen"
      }
    ],
    "faq": [
      {
        "q": "How do you keep an online conference engaging?",
        "a": "By varying between plenary sessions, parallel programmes, interaction and time to meet. An online conference asks for a different rhythm from one in a room. We design for that deliberately."
      },
      {
        "q": "How many people can take part?",
        "a": "We run online conferences for roughly 60 to well over 1,000 participants. Thanks to interactive platforms and a smart programme structure, a large group stays involved too."
      },
      {
        "q": "Can participants network?",
        "a": "Yes. More than that: we think meeting people is an essential part of almost any conference. So we often design spaces where participants can meet each other and carry conversations on."
      },
      {
        "q": "Can you facilitate several sessions at once?",
        "a": "Yes. We regularly support conferences with several parallel programmes, break-outs and breakout sessions."
      },
      {
        "q": "Can you run multi-day conferences?",
        "a": "Yes. From a compact afternoon to a multi-day programme. We help with design, technology, participant support and production."
      },
      {
        "q": "What does an online conference cost?",
        "a": "The investment depends on the scale of the programme, the number of sessions and the support you want. So we always work with a proposal built around your case."
      }
    ],
    "faqMore": [
      {
        "q": "Which software do you use?",
        "a": "We have experience with Zoom, Zoom Events and SpatialChat. Which environment fits best depends on the goals of the conference."
      },
      {
        "q": "Do you handle the whole production?",
        "a": "Yes. We guide the entire process: from design and run sheet through technical production, participant support and evaluation."
      },
      {
        "q": "Can an online conference be hybrid?",
        "a": "Yes. But hybrid conferences need extra care. Online participants have to be more than onlookers."
      },
      {
        "q": "How do you support the speakers?",
        "a": "Speakers get a briefing, technical instructions and, where needed, a rehearsal."
      },
      {
        "q": "Can participants watch sessions back?",
        "a": "Yes. Sessions can be recorded and made available afterwards."
      },
      {
        "q": "How do participants register?",
        "a": "Through the client's existing systems, or through registration and event platforms that we support."
      }
    ]
  },
  "open-space": {
    "metaOmschrijving": "An online Open Space where the group sets its own agenda. 30 to 600 participants, clear ground rules and facilitation on process by MeetingMasters.",
    "randvoorwaardenKop": "What a successful online Open Space needs.",
    "title": "Running an online Open Space",
    "tagline": "Letting the group set the agenda: open, energetic and surprisingly productive.",
    "intro": "Open Space Technology is a powerful method for large groups: the participants set the agenda themselves. Anyone who wants to discuss something opens a session. Anyone interested joins in. Online, this works surprisingly well.",
    "forWho": "Organisations that want to renew, learn or work together",
    "range": "30-600 participants",
    "heroAlt": "Online Open Space in which participants propose sessions themselves and choose where to join",
    "outcomeSummary": "For large groups who create their own agenda, ownership and momentum.",
    "outcomes": [
      {
        "title": "An agenda that lives",
        "body": "Participants decide for themselves what gets discussed, and that brings energy and ownership."
      },
      {
        "title": "Unexpected insight",
        "body": "The conversations that happen are often exactly the ones that should have happened long ago."
      },
      {
        "title": "Strong ownership",
        "body": "Whoever contributes to the agenda feels responsible for what comes out of it."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "The central challenge or theme that brings the group together."
      },
      {
        "title": "Design",
        "body": "Setting up the platform for parallel sessions and the marketplace."
      },
      {
        "title": "Briefing",
        "body": "Participants are prepared for how Open Space works."
      },
      {
        "title": "Live production",
        "body": "We facilitate the whole Open Space event."
      }
    ],
    "validation": {
      "headline": "An online Open Space gives participants room without letting go of the process.",
      "items": [
        {
          "title": "The agenda comes from the group",
          "body": "Online Open Space suits questions where the energy, knowledge and ownership are already in the group. Participants decide for themselves what needs attention."
        },
        {
          "title": "Moving freely between sessions",
          "body": "In a good online environment participants can choose, switch and join the conversations that matter to them."
        },
        {
          "title": "A great deal of output in a short time",
          "body": "Every session produces insights, questions or next steps. Captured digitally, the record stays manageable."
        }
      ]
    },
    "conditions": [
      {
        "title": "An urgent central theme",
        "body": "Open Space works well around a question that's widely felt. Without urgency it stays too non-committal."
      },
      {
        "title": "Clear ground rules",
        "body": "Freedom only works within clear boundaries. Participants have to know how to open a session, how to take part and how to capture what comes out."
      },
      {
        "title": "Technology that lets people move",
        "body": "Participants have to be able to switch spaces easily. The online environment largely determines the quality of the experience."
      }
    ],
    "cases": [
      {
        "label": "Innovation programme",
        "title": "Staff set the sessions themselves",
        "body": "An organisation wants to gather ideas and concerns around innovation. We facilitate an online Open Space in which staff propose subjects themselves and start small sessions.",
        "imgAlt": "Circle of chairs with participants on screen and the theme staying connected on display"
      },
      {
        "label": "Community of practice",
        "title": "Sharing knowledge without a fixed programme",
        "body": "A professional community wants its members to shape the programme. Online Open Space makes room for dozens of self-chosen sessions. Knowledge sharing that comes from the group itself.",
        "imgAlt": "Virtual bar with an agenda of sixteen self-chosen break-out sessions"
      },
      {
        "label": "Strategic exploration",
        "title": "A complex question with many perspectives",
        "body": "A large group of stakeholders needs an open exploration. Online Open Space gives structure while leaving the content with the participants.",
        "imgAlt": "Circle of chairs on the grass where participants choose for themselves which conversation to join"
      }
    ],
    "faq": [
      {
        "q": "What is Open Space?",
        "a": "Open Space is a format in which participants propose subjects themselves and shape the agenda together. That creates ownership and engagement."
      },
      {
        "q": "Does Open Space work online?",
        "a": "Yes. Online Open Space works surprisingly well because participants can move between sessions easily and make their own choices."
      },
      {
        "q": "How many participants does Open Space suit?",
        "a": "From around 30 to well over 600 participants."
      },
      {
        "q": "How do you prevent chaos?",
        "a": "Open Space looks spontaneous, but it works precisely because of a clear process and clear ground rules. We guide that process carefully."
      },
      {
        "q": "Which software do you use?",
        "a": "For an Open Space we choose a platform where participants move freely and find their own sessions. SpatialChat suits that particularly well. Book a demo and try it."
      },
      {
        "q": "What does an online Open Space cost?",
        "a": "That depends on the group size and the facilitation you want."
      }
    ],
    "faqMore": [
      {
        "q": "How does the agenda come about?",
        "a": "The participants bring in the subjects they find important."
      },
      {
        "q": "Which subjects are suitable?",
        "a": "Above all, complex questions where the knowledge, experience and ownership have to come from the group itself."
      },
      {
        "q": "How are the results captured?",
        "a": "Every session produces results that are gathered and shared digitally."
      },
      {
        "q": "Can Open Space be hybrid?",
        "a": "Yes. But here too, hybrid only works when both groups can take part on equal terms."
      },
      {
        "q": "How long does an Open Space take?",
        "a": "Anything from a few hours to a full day."
      },
      {
        "q": "What is the facilitator's role?",
        "a": "The facilitator looks after the process, not the content."
      }
    ]
  },
  "netwerkevent": {
    "metaOmschrijving": "An online networking event where people who don't know each other get talking. 30 to 300 participants, with speed dates, theme tables and hosting.",
    "randvoorwaardenKop": "What a successful online networking event needs.",
    "title": "Running an online networking event",
    "tagline": "Connecting people who don't know each other yet: online, easy to join and with real conversation.",
    "intro": "We design online networking events where people genuinely meet: through smart matchmaking, structured conversations and an environment that encourages chance encounters.",
    "forWho": "Trade associations, alumni, platforms, HR teams",
    "range": "30-300 participants",
    "heroAlt": "Participant following an online networking event in SpatialChat on her laptop, with small groups talking across the virtual space",
    "outcomeSummary": "For conversations worth having, smart matches and online meeting that feels natural.",
    "outcomes": [
      {
        "title": "New contacts worth having",
        "body": "Participants leave the event with contacts that genuinely matter. Not an exchange of business cards."
      },
      {
        "title": "A networking event that feels good",
        "body": "Easy to join, well structured and with the right atmosphere. Online as well."
      },
      {
        "title": "Connection that carries on",
        "body": "The relationships made during the event continue after it too."
      }
    ],
    "steps": [
      {
        "title": "Intake",
        "body": "The audience, the purpose of the networking and the atmosphere you want."
      },
      {
        "title": "Design",
        "body": "The matchmaking structure, the conversation formats and the choice of platform."
      },
      {
        "title": "Rehearsal",
        "body": "A technical run-through with hosts and conversation leaders."
      },
      {
        "title": "Live production",
        "body": "Fully guided, the informal moments included."
      }
    ],
    "validation": {
      "headline": "Networking online works when it's more than putting people into break-outs at random.",
      "items": [
        {
          "title": "Conversations with a reason",
          "body": "The best networking conversations don't come out of nowhere. We give participants a question, a theme or a match that makes contact feel natural."
        },
        {
          "title": "Structure and freedom",
          "body": "Some participants want speed dates, others want to wander. A good online networking event combines fixed rounds with room for spontaneous encounters."
        },
        {
          "title": "Suits international groups",
          "body": "Networking online is strong when people are spread across countries, sectors or organisations. The threshold to take part is low."
        }
      ]
    },
    "conditions": [
      {
        "title": "Clear participant profiles",
        "body": "Matchmaking works better when it's known who is taking part and why. Roles, interests or questions can help."
      },
      {
        "title": "The right form of conversation",
        "body": "Not every networking goal asks for the same form. Speed dates, themed tables, open spaces and buddy conversations each have their own effect."
      },
      {
        "title": "An environment that encourages meeting",
        "body": "Moving freely and joining in spontaneously isn't possible in every tool. The right environment makes chance encounters possible."
      }
    ],
    "cases": [
      {
        "label": "International network",
        "title": "An online clubhouse for meeting people",
        "body": "For the World Olympians Association we build an online environment where participants find each other around programme items. The networking event becomes part of a wider community.",
        "imgAlt": "OLY Bar Milano: virtual bar where participants in the networking event meet each other"
      },
      {
        "label": "Alumni",
        "title": "Bringing new and long-standing members together",
        "body": "An alumni network wants more encounters worth having. We design an online networking event with themed tables, focused questions and free space for conversation.",
        "imgAlt": "Stately hall with a portrait gallery as a meeting place for the alumni network"
      },
      {
        "label": "Conference",
        "title": "Networking around the substantive sessions",
        "body": "For an online conference we build coffee rooms and rounds of conversation where participants talk over the keynotes and workshops.",
        "imgAlt": "Participants choose a theme to talk further about after the substantive sessions"
      }
    ],
    "faq": [
      {
        "q": "Does networking online actually work?",
        "a": "Yes, provided you organise it properly. Most people aren't waiting for a digital exchange of business cards. They're waiting for a good conversation. So we design networking events where meeting people is what it is about."
      },
      {
        "q": "How many people can take part?",
        "a": "We run online networking events for roughly 30 to well over 300 participants."
      },
      {
        "q": "How do you bring the right people together?",
        "a": "Depending on the purpose we work with matchmaking, themed tables, speed dates or self-directed encounters. The design decides which form works best."
      },
      {
        "q": "Which software do you use?",
        "a": "We have experience with Zoom, Zoom Events, Teams and SpatialChat. SpatialChat in particular often turns out to be surprisingly effective for informal encounters."
      },
      {
        "q": "How do you make sure the conversations are worth having?",
        "a": "By giving participants a clear reason to start talking to each other. The best conversations rarely happen by themselves."
      },
      {
        "q": "What does an online networking event cost?",
        "a": "That depends on the number of participants, the design and the support you want."
      }
    ],
    "faqMore": [
      {
        "q": "How does matchmaking work?",
        "a": "Matchmaking can be based on interests, expertise, sector, role or a specific question."
      },
      {
        "q": "Does networking online work internationally?",
        "a": "Especially then. Networking online makes it easy to bring participants from different countries together."
      },
      {
        "q": "How long does an online networking event take?",
        "a": "Usually between 60 minutes and 3 hours."
      },
      {
        "q": "Can you connect a community to the event?",
        "a": "Yes. Organisations regularly use a networking event as the starting point for a longer collaboration. For the World Olympians Association we built an online clubhouse that's always open."
      },
      {
        "q": "Can participants exchange contact details?",
        "a": "Yes. Participants of course decide for themselves what they want to share."
      }
    ]
  }
};

/**
 * De Engelse adressen van de eventpagina's. Een adres is leesbare tekst, dus
 * /en/events/strategy-day en niet /en/events/strategiedagen.
 */
const SLUGS: Array<[nl: string, en: string]> = [
  [
    "strategiedagen",
    "strategy-day"
  ],
  [
    "townhall",
    "town-hall"
  ],
  [
    "all-hands",
    "all-hands"
  ],
  [
    "alv",
    "general-meeting"
  ],
  [
    "teambuilding",
    "team-building"
  ],
  [
    "brainstormen",
    "brainstorm-session"
  ],
  [
    "onboardingdag",
    "onboarding"
  ],
  [
    "training-workshop",
    "training-and-workshops"
  ],
  [
    "bedrijfsfeest",
    "company-party"
  ],
  [
    "kerstfeest",
    "christmas-party"
  ],
  [
    "teamuitje",
    "team-outing"
  ],
  [
    "community-building",
    "community-building"
  ],
  [
    "bewonersparticipatie",
    "resident-participation"
  ],
  [
    "klankbordgroep",
    "sounding-board"
  ],
  [
    "focusgroep",
    "focus-group"
  ],
  [
    "world-cafe",
    "world-cafe"
  ],
  [
    "webinar",
    "webinar"
  ],
  [
    "conferentie",
    "conference"
  ],
  [
    "open-space",
    "open-space"
  ],
  [
    "netwerkevent",
    "networking-event"
  ]
];

export function engelseEventSlug(nl: string): string | undefined {
  return SLUGS.find(([n]) => n === nl)?.[1];
}

export function nederlandseEventSlug(en: string): string | undefined {
  return SLUGS.find(([, e]) => e === en)?.[0];
}

/** Alle events die in het Engels bestaan, als [nl, en]. */
export const VERTAALDE_EVENTS = SLUGS;
