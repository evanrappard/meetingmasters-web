import type { BlogBlock, BlogPost } from "@/app/nl/blog/posts";

/**
 * De Engelse blogartikelen. Zelfde vorm als de Nederlandse, met twee
 * toevoegingen:
 *
 * - `nlSlug` wijst naar het Nederlandse artikel. Daarmee kan de taalschakelaar
 *   naar hetzelfde stuk springen in plaats van naar de homepage, en kunnen we
 *   hreflang goed zetten.
 * - De datum staat in Engelse notatie; `iso` is gedeeld, dus de volgorde in
 *   beide talen is gelijk.
 *
 * Beeld en leestijd komen uit de Nederlandse versie: de visuals bevatten geen
 * tekst en het aantal woorden loopt nauwelijks uiteen.
 *
 * Vertaald in augustus 2026. Bij een nieuwe of gewijzigde Nederlandse post moet
 * deze hier mee — er is geen automatische koppeling.
 */
export type BlogPostEN = BlogPost & { nlSlug: string };

const ONGESORTEERD: BlogPostEN[] = [
  {
    "slug": "back-to-the-office",
    "nlSlug": "terug-naar-kantoor",
    "title": "Back to the office: the answer to the wrong question",
    "date": "August 14, 2026",
    "iso": "2026-08-14",
    "img": "/images/blog/terug-naar-kantoor.webp",
    "imgAlt": "Illustration for an article on the argument between working from home and returning to the office",
    "excerpt": "More and more employers are fixing the number of office days. But the argument isn't about where people work — it's about cohesion. And nobody talks about that any more.",
    "dek": "At ABN AMRO there's a proposal to write office days into the collective labour agreement. Both sides want the same thing, and still the conversation is stuck. Because it's about the wrong subject.",
    "metaDescription": "Writing office days into a labour agreement: the means has become the end. The question isn't where people work, but how they work together.",
    "readingMinutes": 6,
    "blocks": [
      {
        "type": "p",
        "text": "At ABN AMRO there's a proposal to write a minimum number of office days into the collective labour agreement. The negotiation is about where people work. But that isn't what the argument is really about. Nor is it about productivity, whatever is claimed. And only indirectly about creativity or the capacity to innovate. The underlying pain being described is the loss of cohesion now that not everyone sits in the same place. As long as that stays a side issue rather than the main subject, everyone will keep talking past each other."
      },
      {
        "type": "h2",
        "text": "More and more employers are fixing office days"
      },
      {
        "type": "p",
        "text": "The facts first. ABN AMRO wants the new agreement to require staff to spend at least half their working week in the office. The bank motivates this with better collaboration, more creativity and a clearer line between work and private life. Partly defensible. What stands out, though, is the route. Writing an obligation like that into a labour agreement is unusual, and it seems to close down the very thing it's after: more contact. The bank's current agreement leaves the choice to the conversation between employee and manager. What used to be a conversation now has to become an enforceable rule."
      },
      {
        "type": "p",
        "text": "In that, ABN AMRO is ahead of a wider movement. Research by the Dutch employers' association AWVN shows that nearly eight in ten employers already set a minimum number of office days, usually two a week. And the pressure is rising. In KPMG's 2024 CEO Outlook, more than eight in ten executives expected staff to be back in the office full time within three years. A year earlier that was just over six in ten. What was an expectation then is on the negotiating table now."
      },
      {
        "type": "h2",
        "text": "Leadership has a point"
      },
      {
        "type": "p",
        "text": "Even though it's rarely named as such, the worry about the organisation being hollowed out is real. A long-running American study in Science shows that more than half of people working from home feel less connected to colleagues. Those living alone are the most vulnerable. Younger staff have nobody they can just put a quick question to. Onboarding stutters, knowledge travels more slowly, the sense of us wears thin. If you carry final responsibility for an organisation, you can't keep watching that happen."
      },
      {
        "type": "h2",
        "text": "Employees have a point too"
      },
      {
        "type": "p",
        "text": "Working from home delivers something nobody can dismiss. No two hours of travel for a one-hour meeting. Work that fits around school, caring for a parent or a hospital appointment. Room to concentrate. Fewer miles, lower costs. More than eight in ten employees now see working from home as an important condition of employment. People have built their lives around it, and rolling that back takes something away."
      },
      {
        "type": "p",
        "text": "Strikingly, they share the diagnosis. Almost nobody denies that cohesion gets harder when everyone sits somewhere else. Or that something needs to be done about it."
      },
      {
        "type": "h2",
        "text": "And yet the argument hardens"
      },
      {
        "type": "p",
        "text": "How does a conversation get stuck when both sides want the same thing? Because it's about the wrong subject. Attendance is the only lever you can count, check and put in writing. So leadership reaches for it, and steers on office days while it means belonging. Employees hear no concern, only distrust, and start talking about their freedom. Unions negotiate over it, and the moment something is negotiable it becomes currency. Two days in exchange for something else."
      },
      {
        "type": "p",
        "text": "At ABN AMRO you can already see it. The union De Unie calls the proposal an admission of weakness by management, and argues that it concerns only a small group who almost never come in. The positions are fixed before the conversation has started."
      },
      {
        "type": "quote",
        "text": "The means has become the end. The cohesion it all started with is no longer discussed by anyone."
      },
      {
        "type": "h2",
        "text": "The question isn't where, but how"
      },
      {
        "type": "p",
        "text": "Cohesion doesn't come from attendance itself. In the offices of the past it came from everything that happened around it: the question across the desk, the chat by the machine, going over a difficult conversation together afterwards."
      },
      {
        "type": "p",
        "text": "Since 2020 a great deal has been settled about where people may work. About how they work together, almost nothing has been agreed. That just grew, at the pace Teams and Zoom were rolled out. Ever more tactical, ever more transactional. Agenda, tick it off, next. Organisations accepted a way of working whose rules they never wrote down. And now that it chafes structurally, they reach for the one thing that's on paper. The place."
      },
      {
        "type": "h2",
        "text": "Have the conversation"
      },
      {
        "type": "p",
        "text": "The questions you need to rebuild cohesion in 2026 come out of relationships that were neglected in a fast-changing time. They're about the basics of working together: about me versus us. About freedom and being reachable. About knowledge and communication."
      },
      {
        "type": "ul",
        "items": [
          "What do we hold each other to?",
          "How do we reach each other: call, message or email?",
          "When are you available, and when are you deliberately not?",
          "May those preferences differ per person, or does the same apply to everyone?",
          "What do we do together and what does each of us do alone?",
          "Which moments matter enough that we come together for them, online or in person?"
        ]
      },
      {
        "type": "p",
        "text": "A conversation like that produces insight, more understanding and a new direction: the starting point for a culture that shifts and connects. On top of that, it lets you make agreements that hold up far longer, so a sense of us isn't only discussed but actually sticks."
      },
      {
        "type": "h2",
        "text": "Give it a place: the third way between home and office"
      },
      {
        "type": "p",
        "text": "Culture takes shape when people behave in comparable ways day after day, and behaviour that builds a sense of us needs a place where it's visible. Whoever is in the office has that place two or three days a week. The rest of the week there's nothing."
      },
      {
        "type": "p",
        "text": "Real cohesion appears when there's a field of play where location doesn't matter. Where closeness can exist without being physical. Where connection can grow regardless of place or time zone. We argue for a third way: the virtual office. Not instead of working from home. Not instead of the office. In between. That virtual office is a permanent online environment where colleagues are present without needing an agenda item to be there. Where you sit and work alongside each other, just as in the real office. And where, online, the informal conversation happens in and between meetings, just as it does on a physical floor."
      },
      {
        "type": "h2",
        "text": "Move to a new place — and clear out the attic while you're at it"
      },
      {
        "type": "p",
        "text": "The good thing about moving to a virtual office is that the place and the conversation reinforce each other. Anyone setting up a new workplace has to answer the questions above. Where do you normally sit? When are you open to a chat and when are you not? Can the camera be off? Do you have to say something if you nip out for groceries? Much as you only clear the attic when you're moving house, so it goes with setting up your virtual office: it's the natural occasion for the conversation that should have happened long ago. And afterwards it turns around: the place keeps the agreements alive, because the behaviour is visible there every day. The office is the occasion, not the goal."
      }
    ],
    "metaTitle": "Back to the office: the wrong question"
  },
  {
    "slug": "not-the-same-still-good",
    "nlSlug": "niet-hetzelfde-wel-goed",
    "title": "Not the same. Still good.",
    "date": "July 13, 2026",
    "iso": "2026-07-13",
    "img": "/images/blog/niet-hetzelfde-wel-goed.webp",
    "imgAlt": "Illustration for the article 'Not the same. Still good.' on online versus offline gatherings",
    "excerpt": "Most gatherings were already ineffective before they went online. Online only made it more visible. Success depends on the method, not the medium — the question is never 'online or offline?' but 'what has to happen here?'",
    "dek": "Most gatherings weren't good before they went online. Online only made it more visible: the problem is rarely the medium, but the form and the design.",
    "metaDescription": "Meeting online isn't a substitute for offline. The problem is rarely the medium, but the form. Here's how you design a gathering on purpose.",
    "readingMinutes": 4,
    "blocks": [
      {
        "type": "p",
        "text": "Most gatherings weren't good before they went online. Online only made it more visible. The awkwardness, the drifting off, the lack of energy or focus: it was usually already there. The problem is rarely the medium. The problem is the form. And the design."
      },
      {
        "type": "p",
        "text": "Even so we keep comparing online and offline as if they were two versions of the same thing. As if an online gathering is by definition a substitute for a real one. That frame runs deep. And it gets in the way of good design."
      },
      {
        "type": "h2",
        "text": "The wrong starting point"
      },
      {
        "type": "p",
        "text": "Comparing online and offline is a strange thing to do, really. We compare a physical gathering that has often been allowed to exist unquestioned for years with an online version that suddenly has to prove it's just as good. In doing so we forget how poorly many physical gatherings are set up. Long plenary sessions. One-way traffic. Barely any interaction. Vague goals. Nobody asking what this gathering is actually meant to produce."
      },
      {
        "type": "p",
        "text": "Offline has a head start because we're used to it. Not because it's better."
      },
      {
        "type": "p",
        "text": "Online takes that givenness away. Everything that doesn't add up becomes visible. Talk too long and you're looking at blank cameras. Leave no room for interaction and you lose people. Design no rhythm and you feel the energy drain. That's confronting. It's also valuable."
      },
      {
        "type": "h2",
        "text": "Start with the goal, not the medium"
      },
      {
        "type": "p",
        "text": "At MeetingMasters we always start with the same question: what has to happen here? Not: is this online or offline? But: what is the goal, who is coming, what do they need to be able to do, experience or decide?"
      },
      {
        "type": "p",
        "text": "Only then comes the medium. Sometimes that's offline. Sometimes hybrid. And very often online."
      },
      {
        "type": "p",
        "text": "For certain goals online isn't a compromise but the better choice. Think of international groups. Of equality in conversation. Of lowering the threshold to speak up. Of speed and frequency. Of sustainability. Of focus."
      },
      {
        "type": "p",
        "text": "Online lets you design the form far more explicitly. That asks for more thinking beforehand, but it gives more back too."
      },
      {
        "type": "h2",
        "text": "Method does the heavy lifting"
      },
      {
        "type": "p",
        "text": "What we see time and again: most of it's solved by method. By making choices about formats. By building rhythm. By alternating between listening, thinking and doing. By involving people actively instead of letting them consume passively."
      },
      {
        "type": "p",
        "text": "Good online gatherings are rarely spontaneous. They're designed. So are good offline gatherings, for that matter — we have simply grown less strict about those."
      },
      {
        "type": "p",
        "text": "Method helps steer behaviour. Deepen conversations. Make room for different voices. Keep energy up. That holds online and off."
      },
      {
        "type": "p",
        "text": "The difference is that online offers no escape routes. You can't hide behind a venue, a stage or a long lunch break. If the design doesn't work, you feel it straight away."
      },
      {
        "type": "h2",
        "text": "Form as an extra layer"
      },
      {
        "type": "p",
        "text": "On top of that comes the platform. Not as a trick, but as context. The form you place people in shapes how they behave. That's true offline, and just as true online."
      },
      {
        "type": "p",
        "text": "Platforms like SpatialChat add a layer that many traditional video platforms lack. Not a rigid grid of heads, but space. Distance. Closeness. Movement. Freedom to choose."
      },
      {
        "type": "p",
        "text": "People decide for themselves where they stand, who they talk to, when they join or leave. That sounds simple, but the effect is large. Conversations start more naturally. Networking feels less forced. Silence is allowed. So is observing."
      },
      {
        "type": "p",
        "text": "That spatial quality makes it possible to do something online that offline often seems obvious but in practice is rarely set up well: informal encounter."
      },
      {
        "type": "h2",
        "text": "Context steers behaviour"
      },
      {
        "type": "p",
        "text": "In a physical space everyone accepts that context shapes behaviour. A theatre invites you to listen. A café to talk. A meeting room to hold formal discussions. Online we often forget that, and put everything into the same Zoom or Teams format."
      },
      {
        "type": "p",
        "text": "SpatialChat shows that online context can be designed too. With zones. With distance. With visual cues. Not to make it fun, but to support behaviour that fits the purpose of that moment."
      },
      {
        "type": "p",
        "text": "That asks organisers to think differently. Less from the technology. More from the experience. What has to happen here? And which form helps with that?"
      },
      {
        "type": "h2",
        "text": "Online isn't less human"
      },
      {
        "type": "p",
        "text": "A stubborn misunderstanding is that online would be less human. What we usually mean is: badly designed online gatherings feel distant. But that applies just as much to badly designed physical ones."
      },
      {
        "type": "p",
        "text": "Humanity isn't in the medium. It's in attention. In room to respond. In being seen and heard. In pace. In taking participants seriously."
      },
      {
        "type": "p",
        "text": "Well-designed online gatherings can actually be more inclusive. People who are slow to speak up in a full room will do so in a smaller online setting. People who find travel hard can still take part. People who normally sit at the back get as much room as anyone else."
      },
      {
        "type": "h2",
        "text": "Stop defending, start designing"
      },
      {
        "type": "p",
        "text": "As long as we keep defending online against offline, we stay tense. We try to imitate what we know instead of using what is possible. The question isn't: how do we make online as much like offline as we can? The question is: how do we design gatherings that do what they need to do? Sometimes that's offline. Sometimes online. Sometimes a clever combination. But always chosen on purpose."
      },
      {
        "type": "quote",
        "text": "Online made visible what wasn't working already. That isn't a problem. That's an opportunity."
      }
    ]
  },
  {
    "slug": "back-and-forth",
    "nlSlug": "heen-en-weer",
    "title": "Back and forth. Work from home — or return to the office?",
    "date": "June 30, 2026",
    "iso": "2026-06-30",
    "img": "/images/blog/heen-en-weer.webp",
    "imgAlt": "Illustration for an article on working from home versus returning to the office",
    "excerpt": "Work from home, or a duty to come in? The argument swings back and forth. But the place is a side issue — what counts is how you really connect people, wherever they work.",
    "dek": "The argument about home versus office moves back and forth like the tide. Time for a third way, where the point isn't location but how much people actually work together.",
    "metaDescription": "Home or office? The debate keeps circling. Discover the third way: what counts isn't where work happens, but how much people work together and are present.",
    "readingMinutes": 3,
    "blocks": [
      {
        "type": "p",
        "text": "Centralise. Decentralise. Centralise. Decentralise… It's a reassuring swell that moves through the organisational landscape like the tide. Looking for uniformity, control and economies of scale? Centralise. Turns out you need more autonomy and a faster response? Decentralise. Back and forth. Back and forth."
      },
      {
        "type": "p",
        "text": "The argument about working from home or at the office follows the same pattern. That swell is driven by control versus autonomy too. But where the debate about central or decentral power produces a fairly stable picture, the swing around working from home keeps speeding up. Before we all lose our heads, let me argue for a third way, an ultimate balance, where the question is no longer where work happens but how much people work together."
      },
      {
        "type": "p",
        "text": "The acceleration around working from home is largely driven by technology. IBM was already experimenting with it in the early eighties, as the home computer arrived. Even so, working from home stayed a task-bound exception for a long time, reserved for Big Jobs like drafting the annual business plan. Until the pandemic. In a few weeks an entire world did what it had put off for decades. Everything at home. Everything online. And it worked, with laptops, decent wifi and software built for collaboration."
      },
      {
        "type": "p",
        "text": "Since then most people don't want to go back. Organisations move with them. Home-working policies appear, an allowance for setting up a desk at home, even a right to work from home. It saves on office costs, widens the pool in a tight labour market and fits how people want to work. Good reasons. But then: the familiar movement. A need for control. For more central steering. The feeling that the togetherness is slipping away. And so: everyone back to the office. Until the next round. When it turns out people aren't automatically productive in the office either. When the call for flexibility gets loud. When talent tires of the traffic and picks an organisation that works remotely."
      },
      {
        "type": "p",
        "text": "Back and forth. Until we realise it isn't home against office at all, and that location is a side issue. It isn't about where somebody is, but whether they're there. Whether they're reachable, whether you can approach them. It's about contact. Seeing the other person. Making room for the chance conversation, even at a distance."
      },
      {
        "type": "p",
        "text": "What we need is a shared space where people are present even when there's no meeting. A digital working environment where colleagues run into each other, even when there's no direct reason to. Where you can drop in on a department, or work quietly alongside someone without an agenda getting involved."
      },
      {
        "type": "p",
        "text": "We use SpatialChat as our remote office: a virtual environment where you can work, have a chat or wander over to the virtual coffee corner. Where a conversation starts because you're near someone. Where you can ask a question without it turning into a meeting. Just online. Just working. Just present together."
      },
      {
        "type": "p",
        "text": "Once location stops being decisive and being together doesn't, you reach a different level. Then the question is no longer how many days somebody sits in the office. The question is how you build a culture in which people find each other faster. Where staff feel seen, wherever they work. Where your colleagues are the reason you log on in the morning."
      },
      {
        "type": "p",
        "text": "Let us talk about that instead."
      }
    ],
    "metaTitle": "Working from home or back to the office?"
  },
  {
    "slug": "we-have-online-covered",
    "nlSlug": "online-beheersen",
    "title": "We have all got the hang of online by now.",
    "date": "June 10, 2026",
    "iso": "2026-06-10",
    "img": "/images/blog/online-beheersen.webp",
    "imgAlt": "Illustration for an article on making contact online as a craft in its own right",
    "excerpt": "Making contact online is a craft of its own. And that's good news, because far more is possible than most people think.",
    "dek": "A well-designed online session gets things done that would never work in a room. The grid of little square faces is only one way of meeting online, and the world beyond it's bigger than most people know.",
    "metaDescription": "Making contact online is a craft: with the right design, formats and environment you really bring scattered people together, well beyond a grid of faces.",
    "readingMinutes": 3,
    "blocks": [
      {
        "type": "p",
        "text": "A well-designed online session gets things done that would never work in a room. Two hundred people all making themselves heard within five minutes. An international group that speaks every month without a single plane ticket. An onboarding where new colleagues know on day one who to look for in which corner of the company."
      },
      {
        "type": "p",
        "text": "That may sound ambitious if your idea of online is mainly a grid of little square faces with the occasional screen share. There's broadcasting there, but not much sharing, and the bigger, longer or more delicate the session, the more that hurts. Yet the grid is only one way of meeting online. There are others, and the world beyond it's bigger than most people know."
      },
      {
        "type": "h2",
        "text": "Online is less forgiving than live"
      },
      {
        "type": "p",
        "text": "Making purposeful contact online asks three things. A design that fits what you want to achieve. Formats that get everyone present actually taking part. And an environment that supports the kind of conversation you need."
      },
      {
        "type": "p",
        "text": "Those three together separate a session where people afterwards say \"I was there\" from one where they say \"that was worth my time\". And a screen asks more of that design than a room does, not less. There's more distraction, looking away costs nobody anything, and someone who withdraws is less likely to be noticed. Which is exactly why the design matters more."
      },
      {
        "type": "p",
        "text": "If you have people vote by walking to a green or a red area rather than clicking briefly, for instance, they stay far more alert. And if you leave room for small conversations spread around the space, you usually harvest more than you'd in a plenary round."
      },
      {
        "type": "h2",
        "text": "For the things that matter, the standard isn't enough"
      },
      {
        "type": "p",
        "text": "A community of five hundred people who normally only meet through a newsletter can genuinely network in a well-built online space. A strategy day with a hundred people can still have energy after lunch. A change programme can land with teams spread across three time zones."
      },
      {
        "type": "p",
        "text": "Offline, for a session like that you'd book a venue, a chair, perhaps an events agency. Online, that same reflex ought to be standard, and increasingly it is. Not because you couldn't do it yourself, but because the session that matters deserves a different level of attention than the weekly catch-up."
      },
      {
        "type": "p",
        "text": "People who feel seen stay involved. Decisions taken with real support hold. A team that genuinely knows each other online works more smoothly than a team that only meets at transaction level. An organisation that takes its gatherings seriously, online just as much as in person, builds culture instead of wearing it away."
      },
      {
        "type": "h2",
        "text": "Meeting online hasn't stood still since 2020"
      },
      {
        "type": "p",
        "text": "There are spatial platforms where participants move themselves around and talk based on who is near them. There are formats that wouldn't even be possible in a physical room. There are formats that make large groups feel small and personal."
      },
      {
        "type": "p",
        "text": "Whoever has online down has mastered more than a tool. They have found a way to genuinely bring scattered people together. And for more and more organisations, that's exactly what they need."
      },
      {
        "type": "p",
        "text": "PS. The examples above come from work in SpatialChat, a platform where participants move themselves through a space and talk based on proximity. Quite unlike Zoom, Teams or Google Meet. If anything, it's closest to how meeting in real life works. And that makes all the difference."
      }
    ]
  },
  {
    "slug": "what-gamers-know",
    "nlSlug": "wat-gamers-weten",
    "title": "What gamers know about being together online that organisations still have to learn",
    "date": "May 27, 2026",
    "iso": "2026-05-27",
    "img": "/images/blog/wat-gamers-weten.webp",
    "imgAlt": "Person at a desk with a computer and a dog — for an article on gamers and being together online",
    "excerpt": "Gamers have known for years how being together online works — with their own etiquette and a surprising amount of connection. Organisations still have plenty to learn from them.",
    "dek": "Gamers keep friendships going entirely online. They hang around a virtual corner, they play, they chat, they're simply there. No agenda, no action points, no 'any questions?' Just being together, around a shared goal or a shared interest. A format we do very little with in organisations. Online, at least.",
    "metaDescription": "Gamers keep friendships going purely online: together without an agenda. What organisations can learn from that for culture and the virtual in-between.",
    "readingMinutes": 3,
    "blocks": [
      {
        "type": "h2",
        "text": "Hanging around a corner"
      },
      {
        "type": "p",
        "text": "Ask gamers how they keep their friendships going and you get an answer many managers wouldn't recognise. They log in, they hang around somewhere, they talk a bit. Sometimes they play something, sometimes they don't. The point isn't the activity. The point is being present."
      },
      {
        "type": "p",
        "text": "During the pandemic that suddenly became visible to a lot of people. Teenagers online for hours without anything 'productive' happening. Parents thinking: what a waste of time. Until they understood that this is exactly how this generation keeps friendships going. Not by arranging to meet, but by being there. Not by following a set plan, but by sharing a space."
      },
      {
        "type": "h2",
        "text": "The in-between"
      },
      {
        "type": "p",
        "text": "In organisations we knew that feeling too. The coffee machine. The corridor. The printer where you always ran into someone. Those were the moments between meetings, where you heard a colleague was struggling with something, where an idea appeared that was on nobody's agenda, where you felt you belonged to a team."
      },
      {
        "type": "p",
        "text": "Those moments are scarce now. Not because we stopped wanting them, but because we're almost never all in the same place. Because online there's no space left where this kind of encounter happens naturally. We kept the meetings, the calls, the scheduled sessions. But the in-between is gone. And the in-between is exactly where culture comes from."
      },
      {
        "type": "h2",
        "text": "Together without an agenda"
      },
      {
        "type": "p",
        "text": "Online, we mostly know meeting each other as a meeting. There has to be an invitation, a time, a beginning and an end. If you want to speak to a colleague, you book a call. If you want to catch up, you put it in the diary. And the moment something is in the diary, it feels like work. Whereas at that coffee machine nobody ever thought: this is taking too long."
      },
      {
        "type": "p",
        "text": "Gamers solve that without thinking about it. They have a place they go to. Not for a specific purpose, but because it's their place. They wander around, they run into people, sometimes they talk at length, sometimes they wave and move on. The space is always there. The threshold to step in is low."
      },
      {
        "type": "h2",
        "text": "From meeting to place"
      },
      {
        "type": "p",
        "text": "That principle works for organisations too. Not as a replacement for meetings, but alongside them. An environment you walk into without an invitation. Where you see who is around. Where you can join a conversation for a moment, or work quietly in a corner instead. A virtual office, not as a gadget, but as a place where people run into each other without having planned it."
      },
      {
        "type": "p",
        "text": "The shift is subtle, but large. A meeting is something you attend. A place is somewhere you go. In a meeting the organiser decides when you're there and what you do. In a place you decide that yourself. That autonomy makes the difference. It's the difference between 'I have to be on that call at ten' and 'let me drop by and see who is around.'"
      },
      {
        "type": "p",
        "text": "In organisations that set up a virtual office, we see something change in how people deal with each other. Slowly the moments come back that you have missed since everyone started working from home. The chat in the corridor. The idea over coffee. The feeling of belonging somewhere, even on a day when you aren't physically in the office."
      },
      {
        "type": "h2",
        "text": "No place, no culture"
      },
      {
        "type": "p",
        "text": "Culture doesn't come from scheduled sessions. It comes mostly from the space in between. From the moments you're there without having to be. Gamers have known that for years. They don't need to arrange anything to be together. They just make sure there's a place."
      },
      {
        "type": "p",
        "text": "You don't need to bring people together more often. You need to give them a place they go to themselves. No place, no culture. Only meetings."
      }
    ],
    "metaTitle": "What gamers know about being together online"
  },
  {
    "slug": "circles-versus-squares",
    "nlSlug": "rondjes-versus-vierkantjes",
    "title": "Circles versus squares",
    "date": "May 13, 2026",
    "iso": "2026-05-13",
    "img": "/images/blog/rondjes-versus-vierkantjes.webp",
    "imgAlt": "Illustration for an article on the shape of online environments: circles versus squares",
    "excerpt": "The shape of your online environment shapes how people behave. Boxes invite broadcasting and waiting; circles invite moving, choosing and running into each other.",
    "dek": "Zoom, Teams or Meet: a tidy grid of square boxes, neatly side by side. Everyone the same size, everyone the same distance away, everyone equally quiet. And still we expect that setting to produce energy.",
    "metaDescription": "Why a grid of square boxes makes your online session go quiet, and an open space with circles produces conversation and energy. Sit, or walk?",
    "readingMinutes": 4,
    "blocks": [
      {
        "type": "p",
        "text": "Zoom, Teams or Meet: a tidy grid of square boxes, neatly side by side. Everyone the same size, everyone the same distance away, everyone equally quiet. You're forced into following along passively. Walking off, or having a quick one-to-one, isn't an option. You're stuck. So is everybody else. And still we expect that setting to produce energy."
      },
      {
        "type": "h2",
        "text": "Your surroundings steer your behaviour"
      },
      {
        "type": "p",
        "text": "In a physical space we feel it at once. A meeting room with a long table and a projector on the wall says: presentations happen here. A circle of loose chairs says: we're going to talk. A foyer with standing tables says: walk around, make contact. The layout decides what people do before anyone has said a word."
      },
      {
        "type": "p",
        "text": "In Teams or Zoom it works exactly the same way. You open the link. Everyone appears, neatly, in the grid. The shape says: listen, wait your turn, sit still."
      },
      {
        "type": "h2",
        "text": "What a grid does to you"
      },
      {
        "type": "p",
        "text": "In a grid everyone is equal. That sounds democratic, but the effect is the opposite. You see the same amount of everyone, and you aren't really in contact with anyone. There's no near, no far. You can't step aside with two people. You can't use your body to show you want to be part of something. The only way to signal you're there's to unmute. And almost nobody does."
      },
      {
        "type": "p",
        "text": "Then there's the noise. In a grid every participant brings their own visual world. Your kitchen, your bookshelf, the cat, light that refuses to cooperate. No shared context, no common environment to give the conversation direction."
      },
      {
        "type": "h2",
        "text": "What changes when you can move"
      },
      {
        "type": "p",
        "text": "There are online environments where you aren't stuck in a box. Where you move through a shared space as a circle, decide for yourself where you go, step closer to someone or take a bit of distance instead. Where your voice softens as you walk further away, just as it does in real life."
      },
      {
        "type": "p",
        "text": "That changes how everyone behaves. In a grid you wait. In an open space you move. And that difference decides whether you get a conversation or a broadcast. In a grid one person asks a question. In a space five conversations start at once. People join something, listen in for a while, wander over to another group. They make micro-choices, just as they would at a physical event. And those choices are the difference between a meeting and a place."
      },
      {
        "type": "h2",
        "text": "Shared space instead of individual noise"
      },
      {
        "type": "p",
        "text": "In a space where everyone moves around as a circle, you share more than you contribute in noise. Your face is small, and so is your background. What is large is the shared space. And you can tailor that completely to what you're doing. A strategy session gets a different backdrop than a drinks reception. An onboarding looks different from an off-site. The environment brings atmosphere and functional structure at once. You can see where the break-outs are, where the plenary space is, where the coffee corner sits."
      },
      {
        "type": "p",
        "text": "In a grid the environment is neutral. In a designed space the environment is part of the design."
      },
      {
        "type": "h2",
        "text": "When a grid works and when it doesn't"
      },
      {
        "type": "p",
        "text": "A grid is perfectly fine when you want to broadcast. A presentation, an update, an announcement. One-to-one works fine too. Up to about eight people you can often still get away with it, because the group is small enough for social pressure to do its work. But as soon as you expect people to talk to each other, as soon as the group grows, the shape works against you."
      },
      {
        "type": "h2",
        "text": "Sit, or walk"
      },
      {
        "type": "p",
        "text": "So when you're organising an online session for a larger group, don't let the starting point be which tool you use. The first question is: do I want people to sit and listen, or do I want them to move and talk to each other? That answer decides the shape. And the shape decides what happens."
      },
      {
        "type": "p",
        "text": "PS. We work with SpatialChat, an online environment built during the pandemic by someone who wanted to drink cocktails online with friends. Not meet, not present. Just be together, and walk away from a conversation when the energy has gone out of it. You can feel that origin in how it works. Curious? Book an introduction and we'll show you."
      }
    ]
  },
  {
    "slug": "system-rage",
    "nlSlug": "systeemwoede",
    "title": "System rage in online meetings: it wrecks more than you realise",
    "date": "April 15, 2026",
    "iso": "2026-04-15",
    "img": "/images/blog/systeemwoede.webp",
    "imgAlt": "Illustration for an article on technical frustration in online meetings",
    "excerpt": "Frustration with technology is an underrated factor in online sessions. Anyone still recovering from a technical fight isn't connecting with the content — involvement starts at the login, not at the first agenda item.",
    "dek": "Rage at technology that won't cooperate is one of the most underrated factors in online gatherings. The answer isn't better kit, but more humanity.",
    "metaDescription": "System rage in online meetings blocks involvement. Why the answer isn't better tech, but more humanity and real in-meeting service.",
    "readingMinutes": 4,
    "blocks": [
      {
        "type": "p",
        "text": "In 1993 Compaq made a commercial about talking to your computer. Hilarious, I thought at the time. The promise: you speak, and your words appear on the screen. The reality is different. Most of the time we spend talking to our computers isn't because we're making clever use of voice input. We're swearing at technology. Just like in 1993."
      },
      {
        "type": "p",
        "text": "In this piece we look at what powerlessness does to involvement, and why the answer isn't better kit or ever more advanced features, but more humanity."
      },
      {
        "type": "h2",
        "text": "Thirty years of progress, one emotion"
      },
      {
        "type": "p",
        "text": "You're in an online meeting, you want to say something, and your microphone won't work. Or your camera freezes. Or you share your screen and everyone sees your inbox instead of your presentation. It takes two minutes to fix, sometimes five. Meanwhile the whole group waits and reads your email."
      },
      {
        "type": "p",
        "text": "That isn't a small inconvenience. Rage at technology that won't cooperate is one of the most underrated factors in online gatherings. It sounds trivial, but the effect is large. Somebody who has just spent five minutes fighting their audio isn't relaxed in the conversation. They're still simmering. They check out mentally before the content has even started."
      },
      {
        "type": "h2",
        "text": "Rage blocks involvement"
      },
      {
        "type": "p",
        "text": "It works like a wall. As long as someone is busy with technology that won't do what it should, that person isn't contributing to what is actually being discussed. And it isn't only about the person with the problem. The whole group feels it. Discomfort creeps in, impatience, distraction. The energy leaks away before a single substantive word has been said."
      },
      {
        "type": "p",
        "text": "After years of meeting online you'd expect this to be solved. It isn't. The tools have got better, that's true. But the combination of different devices, networks, settings and updates means there's always somebody for whom something doesn't work. And the bigger the group, the bigger the odds. That frustration piles up. And you carry it into your next meeting."
      },
      {
        "type": "h2",
        "text": "Two things that help"
      },
      {
        "type": "p",
        "text": "The obvious answer is: make the technology work better. But that's half the story. The solution lies in two things."
      },
      {
        "type": "p",
        "text": "The first is accepting that not everything will run flawlessly. And bearing that. One of the more pleasant discoveries during the pandemic was that everyone turned out to be human. Children walked through the frame, cats jumped onto keyboards, connections dropped. And the result wasn't chaos but understanding. There was more room for the person behind the job title. We have lost that room again. We expect everything and everyone to be perfect once more. And they aren't, and that disappointment only makes the rage worse."
      },
      {
        "type": "p",
        "text": "The second is: on the occasions when everything really does have to run smoothly, organise it. For a strategy day, an all-hands or a gathering that genuinely matters, you can't leave it to chance. Make someone responsible for a smooth session. Not only for the technology, but for the human side too. Or hire help. At a physical gathering someone arranges the room, the sound, the projector and the staff for the coffee. Online you let everybody work it out alone and hope it goes well."
      },
      {
        "type": "h2",
        "text": "More than tech support"
      },
      {
        "type": "p",
        "text": "At MeetingMasters we call that in-meeting service: the human mix of online hospitality and tech support. Not hidden behind a phone number or an AI bot, but present in the meeting itself to help wherever help is needed."
      },
      {
        "type": "p",
        "text": "That means: when somebody is struggling with the technology, you take them aside. You fix it away from the group, so the whole room doesn't have to watch. When somebody arrives late, you catch them up on what has happened so far and only then bring them back to the group."
      },
      {
        "type": "p",
        "text": "It lives in the small things. Letting participants in on mute as standard, so nobody ever rolls into the meeting shouting at their computer, their cat or their flatmate. A bit of music as people arrive. A share that just works. An extra round of the rooms to check everyone understood the assignment."
      },
      {
        "type": "p",
        "text": "But it goes further than buttons and settings. Most Meeting Masters understand the technology better than anyone. In the MeetingMaster Academy we also train on the personal approach and on dealing with people whose emotions are running high. What is behind someone's anger? What helps? What definitely doesn't? That isn't tech support. That's service in the broadest sense. And yes, online."
      },
      {
        "type": "h2",
        "text": "Involvement starts before the first slide"
      },
      {
        "type": "p",
        "text": "You don't organise involvement once the agenda begins. It starts the moment someone logs in. Do they feel welcome? Does everything work? Is there somebody to help when it doesn't? Or are you fiddling with your settings on your own while the rest have already started?"
      },
      {
        "type": "p",
        "text": "The difference is large. It isn't in the technology, but in the energy people carry into a session. And that energy decides whether you get a good conversation or an hour of silence with the occasional question."
      },
      {
        "type": "p",
        "text": "As long as you leave the technology to your participants, you aren't designing a gathering. You're organising a risk."
      }
    ],
    "metaTitle": "System rage in online meetings"
  },
  {
    "slug": "the-ai-paradox",
    "nlSlug": "ai-paradox",
    "title": "The AI paradox: why meetings are worth more now",
    "date": "April 1, 2026",
    "iso": "2026-04-01",
    "img": "/images/blog/ai-paradox.webp",
    "imgAlt": "Emilie van Rappard of MeetingMasters — for an article on the AI paradox",
    "excerpt": "AI is taking over the routine work. But the moment someone says 'hold on, I see this differently' and a conversation changes the whole direction? That's where machines fall short. It only happens when people genuinely meet.",
    "dek": "A timeline full of AI: sharper prompts, better tools, faster output. Meanwhile the first jobs are disappearing. The arrival of the machine changes what work is worth. Even so I am optimistic, because the value of working together is greater than ever. Time to invest in the human side.",
    "metaDescription": "AI takes over routine work, but that's precisely why working together grows in value. Why meetings with real human contact matter more than ever.",
    "readingMinutes": 2,
    "blocks": [
      {
        "type": "h2",
        "text": "Meetings are human accelerators"
      },
      {
        "type": "p",
        "text": "A machine writes the policy deck, sends the updates and checks the action list. But the moment somebody says \"hold on, I see this differently from you\" and a conversation starts that changes the whole direction? That's where a machine falls short. It only happens when people sit together and there's enough structure to have that conversation."
      },
      {
        "type": "p",
        "text": "Meetings are the moments where you think together, decide together, set direction together. They're also the moments where you feel how an organisation works. Or doesn't. Where you notice whether there's trust. Whether anyone dares say the plan is wrong. Where you arrive together at an insight nobody would have had alone."
      },
      {
        "type": "h2",
        "text": "Broadcasting instead of collaborating"
      },
      {
        "type": "p",
        "text": "Most gatherings let that chance go. The form doesn't allow for it. An hour of watching slides and jolting awake at the closing \"is that all clear?\" isn't collaboration. It's broadcasting. A recorded video would do the job just as well, better even, because then you choose when to watch."
      },
      {
        "type": "h2",
        "text": "Afraid of robots, while running on autopilot ourselves"
      },
      {
        "type": "p",
        "text": "And there's the paradox. We worry that AI will replace people. At the same time we spend most of our shared hours on activities a machine does just as well: sharing information, running through updates, recording action points. But surely we have so much more to offer as people? The part that makes us human, and makes us successful together, is the part we bring the least."
      },
      {
        "type": "p",
        "text": "Perhaps that also explains why the fear of AI sits so deep. We sense that in the moments that matter, we aren't working very humanly ourselves."
      },
      {
        "type": "h2",
        "text": "Right now, being together is worth more"
      },
      {
        "type": "p",
        "text": "Turn it around. Precisely because AI is taking over more and more tasks, the moments you spend together grow in value. The routine work disappears. What is left is the work only people do together: setting direction, building trust, arriving at a shared insight. That makes gatherings more important than ever."
      },
      {
        "type": "p",
        "text": "Organisations that grasp this raise the bar. They go for meetings with real contact, and put involvement above attendance. And they carry it through everywhere. In meetings in a room, and all the more in meetings online. Don't settle for staring blankly at a screen full of square talking heads. Be curious, be critical, be creative. Try putting that on the agenda. A philosophical conversation. Feet on the desk. AI will handle the transcript."
      }
    ],
    "metaTitle": "The AI paradox: meetings are worth more"
  },
  {
    "slug": "the-rule-of-eight",
    "nlSlug": "acht-grens",
    "title": "The rule of eight: when a group stops running itself",
    "date": "March 25, 2026",
    "iso": "2026-03-25",
    "img": "/images/blog/acht-grens.webp",
    "imgAlt": "Group of friends in a coffee bar — for an article on group dynamics and the rule of eight",
    "excerpt": "Groups of up to eight people regulate themselves naturally. Beyond that the dynamic changes completely. Every meeting with more than a handful of people is a design question — not just a logistical one.",
    "dek": "Everyone knows the scene: a meeting with thirty people where three talk and the rest stay quiet. The problem isn't the people, but the mismatch between the goal, the group and the approach.",
    "metaDescription": "Why does a large meeting fall silent? The rule of eight explains when group dynamics tip over, and which formats do work, online and off.",
    "readingMinutes": 4,
    "blocks": [
      {
        "type": "p",
        "text": "Everyone knows the scene. A meeting with thirty people where three talk and the rest stay quiet. Or an online strategy session with fifty participants where, after forty minutes, someone asks: \"Any questions?\" And nothing comes back."
      },
      {
        "type": "p",
        "text": "The problem isn't the people. Nor the intention, which is genuine. The problem is the mismatch between what you want to achieve, who is in the room and how you go about it. In this piece we show where the line sits and what you can do about it."
      },
      {
        "type": "h2",
        "text": "Three, eight, and beyond"
      },
      {
        "type": "p",
        "text": "Put three people together with a question and they will work it out. Within ten minutes they have an answer. Or at least a direction."
      },
      {
        "type": "p",
        "text": "Up to eight or even ten it still works, as long as the assignment is clear. Someone takes the floor, another responds, the rest join in. The group regulates itself."
      },
      {
        "type": "p",
        "text": "Above that it tips. Two or three people talk. The rest listen. Or pretend to. One is checking email, another is mostly waiting for a graceful moment to break in and tell their own story."
      },
      {
        "type": "p",
        "text": "Put more than fifteen people together and you have a presentation. Or chaos. One of the two. This isn't an opinion. This is group dynamics."
      },
      {
        "type": "h2",
        "text": "Why it goes wrong"
      },
      {
        "type": "p",
        "text": "The real problem isn't group size in itself. You can have a wonderful, involved gathering with three hundred people. The problem is that we don't think about the sum of three things: what do we want to achieve? Who is in the room? And what kind of involvement are we after? That's what you pick a format for."
      },
      {
        "type": "p",
        "text": "The \"I have a story, I have an audience, now I will tell it\" approach works for a presentation. But the moment you want something from the group — involvement, input, a decision — that asks for something else."
      },
      {
        "type": "h2",
        "text": "What usually goes wrong"
      },
      {
        "type": "p",
        "text": "You put thirty people in a meeting room and expect a good conversation. You open a Zoom call with fifty participants and ask: \"Any questions?\" Afterwards you say: involvement was low. Or: online doesn't work for this sort of thing. But it wasn't the people. And it wasn't the medium. It was that the format didn't match what you were asking of the group."
      },
      {
        "type": "h2",
        "text": "What does work"
      },
      {
        "type": "p",
        "text": "The basic principle is simple. Large groups don't work as large groups. They work as collections of small groups, provided you organise that."
      },
      {
        "type": "p",
        "text": "Up to eight people a clear assignment is enough. Not \"discuss this topic\", but \"answer this question and write down three points.\" Structure supports the social dynamic that appears by itself in a small group."
      },
      {
        "type": "p",
        "text": "Above that you need a facilitator. Someone who shares out the space, lets silences do their work and makes sure it isn't only the fast thinkers and loud talkers who get heard. And you work in subgroups. You split up, let small groups work and bring the results back together."
      },
      {
        "type": "p",
        "text": "That sounds like something everyone already does, but it's skipped surprisingly often. Or it's done with break-out rooms where nobody knows what the point is."
      },
      {
        "type": "h2",
        "text": "What this looks like online"
      },
      {
        "type": "p",
        "text": "Online the line gets sharper still. In a video call with more than ten people you can no longer read faces. You miss the body language that in a room tells you who wants to respond, who is drifting off, who disagrees. You can't talk over each other. And you can switch your camera off and answer email. The group doesn't notice, or pretends not to. That makes formats online not optional but necessary."
      },
      {
        "type": "p",
        "text": "And here it gets interesting. For simple assignments it's enough to put subgroups together and hand them a task. But for more complex questions, subjects you want to look at from several angles, you'd rather do it differently. Then you want participants to decide for themselves where their contribution fits best. Because the output gets better when people feel genuinely involved in what they're working on."
      },
      {
        "type": "h2",
        "text": "The design question"
      },
      {
        "type": "p",
        "text": "Every gathering with more than a handful of people is a design question. Not a logistical question. Not a technical question. A design question."
      },
      {
        "type": "p",
        "text": "How many people are in the group? What do we want from them? Which format fits that? The answer is almost never: we put everybody together and then we talk about it."
      },
      {
        "type": "p",
        "text": "It always starts with: how do we turn this large group into a collection of small groups that get to work? That's facilitation. Not a chair announcing the programme. Someone who creates the conditions in which a group can do what it came together for."
      },
      {
        "type": "p",
        "text": "And that starts with three questions: how many people are at the table, what do we want from them, and how are we going to go about it?"
      },
      {
        "type": "p",
        "text": "PS. Want to see what it looks like when participants choose for themselves where they go? In a SpatialChat environment people move through a space, see who is standing where and join the conversation that speaks to them most. That changes the dynamic. Curious? Get in touch for a demo."
      }
    ],
    "metaTitle": "The rule of eight in groups"
  },
  {
    "slug": "blaming-online",
    "nlSlug": "stok-om-mee-te-slaan",
    "title": "Blaming online",
    "date": "March 4, 2026",
    "iso": "2026-03-04",
    "img": "/images/blog/stok-om-mee-te-slaan.webp",
    "imgAlt": "Illustration for the article 'Blaming online' on meeting design",
    "excerpt": "The limits of online actually create opportunities. They force you to design a meeting on purpose. Focus on real interaction rather than leaning on the social extras, and every format gets better.",
    "dek": "You have to organise a strategy day for two hundred people, and then you hear: it has to be online. But is online really the problem, or are we blaming the medium for gatherings that were never well designed?",
    "metaDescription": "Online gets the blame when a strategy day or all-hands falls flat. But is it the medium, or gatherings that were never properly designed in the first place?",
    "readingMinutes": 2,
    "blocks": [
      {
        "type": "p",
        "text": "You have to organise a strategy day. Two hundred people, spread across the country. And then you hear: \"It has to be online.\" Ouch. Online will probably work for a webinar. For a presentation with a Q&A too. But a real strategy day? An all-hands that gives people energy? A cultural moment where connection happens? Good luck getting anyone behind that."
      },
      {
        "type": "h2",
        "text": "Is it the medium? Or…?"
      },
      {
        "type": "p",
        "text": "Ever since the lockdowns, online has been the stick to beat it with. \"We tried it and it was awful.\" So the moment something important comes along, everyone has to gather in person again. Two hours of travel for a day full of slides. Hotels to book. Catering to arrange. Because that's the only way it really works. But be honest. How was that last strategy day in a room? Were people genuinely involved? Or were they on their phones after lunch? Was there room for real conversation? Or was it mostly broadcasting?"
      },
      {
        "type": "p",
        "text": "Most large gatherings were already mediocre before we went online. Online only made it impossible to ignore."
      },
      {
        "type": "h2",
        "text": "The real problem"
      },
      {
        "type": "p",
        "text": "The problem isn't the medium. The problem is that we treat special gatherings as large versions of ordinary meetings. More people, more slides, a longer day. But the same approach. That doesn't work offline either. Online it becomes painfully visible. Eight hours of slides is unbearable online. But was it actually any good offline? Or did people only get through it because there was no alternative?"
      },
      {
        "type": "h2",
        "text": "The opportunity"
      },
      {
        "type": "p",
        "text": "Online forces you to think about what you're actually trying to achieve. You can't lean on the lunch, the drinks, the chance conversations in the corridor. You have to design involvement. And that turns out to be an opportunity. Because if you design a gathering with intent, if you think about the beginning, the middle and the end, if you make room for real interaction, then it works. Online, offline, hybrid. The medium isn't the deciding factor."
      },
      {
        "type": "quote",
        "text": "The question isn't: can we do this online? The question is: do we dare to design this gathering properly?"
      },
      {
        "type": "h2",
        "text": "The choice"
      },
      {
        "type": "p",
        "text": "You can keep saying online doesn't work for important gatherings. Get everyone to one location. Hope that being physically present makes the magic appear on its own. Or you can face it. Accept that a good gathering asks for attention wherever people are sitting. That the environment matters, the online environment included. That bringing two hundred people together is always a design question."
      },
      {
        "type": "p",
        "text": "That choice is yours. But stop blaming online for gatherings that were never well designed."
      }
    ]
  },
  {
    "slug": "an-online-home-for-olympians",
    "nlSlug": "olympiers",
    "title": "An online home for former Olympians worldwide",
    "date": "February 7, 2026",
    "iso": "2026-02-07",
    "img": "/images/blog/olympiers.webp",
    "imgAlt": "e-OLY House in SpatialChat — the virtual clubhouse for the World Olympians Association",
    "excerpt": "A video call is a tool. An online meeting place is something else entirely. Together with MeetingMasters, the World Olympians Association built e-OLY House — a digital space where real connection happens without a compulsory programme.",
    "dek": "Last Friday the Milan Cortina 2026 Winter Olympics began. While the opening ceremonies took place in northern Italy, somewhere on the internet a remarkable place opened its doors: e-OLY House, the exclusive meeting place for Olympians during the Games.",
    "metaDescription": "During Milan Cortina 2026, e-OLY House opened as the digital meeting place for Olympians. Meeting online is more than a box on your screen.",
    "readingMinutes": 3,
    "blocks": [
      {
        "type": "p",
        "text": "Last Friday the Milan Cortina 2026 Winter Olympics began. While opening ceremonies took place at various locations in northern Italy, somewhere on the internet a remarkable place opened its doors. Not a physical building, but the digital version of OLY House: the exclusive meeting place for Olympians during the Games. This is e-OLY House. In this piece we explain why meeting online can be so much more than a square on your screen."
      },
      {
        "type": "h2",
        "text": "Once an Olympian, always an Olympian"
      },
      {
        "type": "p",
        "text": "Anyone who has competed at the Olympic Games stays an Olympian for life. That shared experience connects people, across countries and generations. But how do you keep that connection alive when you're scattered across the world?"
      },
      {
        "type": "p",
        "text": "The World Olympians Association, the alumni body for Olympians worldwide, was looking for a way to connect its athletes, including those who can't travel to the Games. Work, distance, money: there are plenty of reasons to stay home. But staying home doesn't have to mean missing out."
      },
      {
        "type": "p",
        "text": "So MeetingMasters Online built e-OLY House together with the WOA. Not a webinar where you stare at a screen. Not a video call with two hundred little squares. A place where you walk around, run into people and fall into conversation."
      },
      {
        "type": "h2",
        "text": "Why the WOA didn't choose a video call"
      },
      {
        "type": "p",
        "text": "A video call is handy for a meeting. But as a place to gather during the Games? There it falls short."
      },
      {
        "type": "p",
        "text": "At a physical OLY House you walk in, look around and see familiar faces. You join a group, catch a conversation, start talking to someone you hadn't met. Those chance encounters are what make it worthwhile."
      },
      {
        "type": "p",
        "text": "In a standard video call those moments don't exist. You're speaking or you're silent. There's no room to look around, no way to walk over to someone. The WOA wanted something closer to the real experience."
      },
      {
        "type": "h2",
        "text": "Three pillars under e-OLY House"
      },
      {
        "type": "p",
        "text": "e-OLY House works differently from a video call. It's built on three pillars."
      },
      {
        "type": "h2",
        "text": "1. A central place to come together"
      },
      {
        "type": "p",
        "text": "When you enter e-OLY House, you're standing on top of a mountain. In front of you is a ski lodge, with the Italian flag and snow-covered peaks behind it. You see people moving, groups forming, conversations starting. From here you can navigate to other spaces, or simply linger and see who is around. In an ordinary video call you're put in a box. Here you choose your own spot."
      },
      {
        "type": "h2",
        "text": "2. Gatherings that go beyond broadcasting"
      },
      {
        "type": "p",
        "text": "During the Games, e-OLY House runs \"OLY@8\" every day: a show by Olympians, for Olympians. Every morning at eight and every evening at eight. In the morning show a host and a guest Olympian talk about what they're looking forward to that day. In the evening show they look back on it."
      },
      {
        "type": "p",
        "text": "But the real conversation only starts afterwards. After the show everyone moves through to the lounge. There you talk it over in small groups, with no moderator and no agenda. Exactly as you'd linger after an event."
      },
      {
        "type": "h2",
        "text": "3. Room for chance encounters"
      },
      {
        "type": "p",
        "text": "The best thing about e-OLY House shows itself when nothing is scheduled. During the Paris Summer Games in 2024, Olympians sat down together in e-OLY House of their own accord to watch events. A group gathered around the swimming, and an Olympic swimmer gave live commentary for the others. Not because it was on the programme, but because it was possible."
      },
      {
        "type": "p",
        "text": "That's what a meeting place does. It offers room for people to be, without anything having to happen. Real connection grows where there's room for chance and spontaneity."
      },
      {
        "type": "p",
        "text": "e-OLY House is open for the whole of the Games. Afterwards the clubhouse stays on for regular gatherings and community events. The party tent becomes a canteen, the social space becomes a place to work, and the OLY@8 stage becomes a platform for webinars."
      },
      {
        "type": "h2",
        "text": "What does this mean for your organisation?"
      },
      {
        "type": "p",
        "text": "e-OLY House was built for Olympians. But the principles behind it apply to any organisation that wants to connect people at a distance."
      },
      {
        "type": "p",
        "text": "Not everyone sits in the same place every day. Whether you have teams across locations, colleagues who often work from home, or volunteers you rarely see in person: the question isn't whether you meet online, but how."
      },
      {
        "type": "p",
        "text": "A video call is a tool. An online meeting place is something else. Part of the difference is the technology, of course, but mostly it's in how you bring purpose, form and experience together."
      },
      {
        "type": "h2",
        "text": "Curious?"
      },
      {
        "type": "p",
        "text": "Would you like to see what an online environment like this looks and feels like, for an event, a place to work together or a gathering that matters? Get in touch for a demo. We'd be glad to show you what is possible. Because meeting online can be so much more than a square on your screen."
      }
    ],
    "metaTitle": "An online home for former Olympians"
  }
];

/** Nieuwste eerst, op datum — niet op volgorde in dit bestand. */
export const POSTS_EN: BlogPostEN[] = [...ONGESORTEERD].sort((a, b) =>
  b.iso.localeCompare(a.iso)
);

export function getPostEN(slug: string): BlogPostEN | undefined {
  return POSTS_EN.find((p) => p.slug === slug);
}

/** Het Engelse artikel dat bij een Nederlandse slug hoort, als het bestaat. */
export function engelseSlugVoor(nlSlug: string): string | undefined {
  return POSTS_EN.find((p) => p.nlSlug === nlSlug)?.slug;
}

export type { BlogBlock };
