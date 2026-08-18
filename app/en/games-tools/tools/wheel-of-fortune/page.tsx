import type { Metadata } from "next";
import ToolKader from "@/components/tools/ToolKader";
import ToolPagina, { type FaqItem } from "@/components/tools/ToolPagina";
import { embedVoor } from "@/lib/tools";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  title: "Wheel of Fortune — free online wheel | MeetingMasters",
  description:
    "Spin a wheel that picks a name, question or task at random. Share your screen and let chance decide. Free, fully adjustable, up to three wheels.",
  alternates: {
    canonical: `${SITE}/en/games-tools/tools/wheel-of-fortune`,
    languages: {
      "nl-NL": `${SITE}/nl/games-tools/tools/wheel-of-fortune`,
      "en-GB": `${SITE}/en/games-tools/tools/wheel-of-fortune`,
    },
  },
};

const faq: FaqItem[] = [
  {
    q: "What does the wheel do?",
    a: "You fill the wheel with names, questions or tasks and spin it. Chance decides. Handy when you do not want to point at anyone, when the order does not matter, or precisely when you want to make a game of it.",
  },
  {
    q: "How do I use it in an online meeting?",
    a: "Open the tool, set up your options and share your screen. Click 'Full screen' so that only the wheel is visible. Participants do not have to open or install anything themselves.",
  },
  {
    q: "Can I fill the wheel myself?",
    a: "Yes. Through the cog you set the segments per wheel, between 2 and 20, plus the colours, the spin time, the sound and the text on the button.",
  },
  {
    q: "Can I use several wheels at once?",
    a: "Yes, up to three wheels side by side. One with names and one with questions, for instance, so that a single spin decides who gets which question.",
  },
  {
    q: "Can a chosen option disappear after the spin?",
    a: "Yes, with elimination mode. The winner then leaves the wheel, which is handy for a raffle or for handing out turns. The reset button puts everything back.",
  },
  {
    q: "Can I save my settings for next time?",
    a: "Yes. You save a setting under a name of your own and get a link with it. Open that link and your wheel is ready. That way you can set up a version per client or per training.",
  },
  {
    q: "Is the tool free?",
    a: "Yes. The wheel is free to use, with no account and no installation.",
  },
  {
    q: "Can I use the wheel in my own meeting environment?",
    a: "Yes. Below the wheel there is an 'Embed code' button that copies the code you paste onto a screen in SpatialChat or on your own page. The allow=\"fullscreen\" attribute is already in that code.",
  },
];

export default function WheelOfFortunePage() {
  return (
    <ToolPagina
      taal="en"
      huidig="wheel-of-fortune"
      titel="Wheel of Fortune"
      oneliner="Share your screen, spin the wheel and let chance decide. Free, no account."
      tool={
        // Met drie wielen naast elkaar heeft deze app meer hoogte nodig; bij
        // een smaller kader zakken de wielen onder elkaar.
        <ToolKader
          bron={embedVoor("wheel-of-fortune", "en")}
          naam="Wheel of Fortune"
          hoogte="min(74dvh, 680px)"
          taal="en"
        />
      }
      over={
        <>
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            About the wheel
          </p>
          <p className="text-[#545454] leading-relaxed mb-6">
            A group does not much like pointing at itself. Let chance choose, and there is nothing
            personal about it — the conversation simply carries on:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
            Whose turn is it?
          </h2>
          <p className="text-[#545454] text-lg leading-[1.9]">
            Fill the wheel with names, questions or tasks.
            <br />
            Spin it and wait.
            <br />
            What comes out is nobody&rsquo;s choice.
          </p>
        </>
      }
      faq={faq}
      faqOnderwerp="the wheel"
      ctaTekst="A wheel keeps a session moving. We make more of meetings, with tools, techniques and years of experience."
      appNaam="MeetingMasters Wheel of Fortune"
      appOmschrijving="Free online wheel that picks a name, question or task at random, for use in meetings, workshops and training sessions."
    />
  );
}
