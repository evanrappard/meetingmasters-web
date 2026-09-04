import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import ToolKader from "@/components/tools/ToolKader";
import ToolPagina, { type FaqItem } from "@/components/tools/ToolPagina";
import { embedVoor } from "@/lib/tools";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/games-tools/tools/storytelling")!, "Someone holding up a frame with participants and playing cards — Games & Tools by MeetingMasters") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/games-tools/tools/storytelling")!] },
  title: "Storytelling — free online tool for teams | MeetingMasters",
  description:
    "Take turns drawing a card with a question and tell your story within the time. Free tool for teams, in Zoom, Teams or SpatialChat.",
  alternates: {
    canonical: `${SITE}/en/games-tools/tools/storytelling`,
    languages: {
      "nl-NL": `${SITE}/nl/games-tools/tools/storytelling`,
      "en-GB": `${SITE}/en/games-tools/tools/storytelling`,
    },
  },
};

const faq: FaqItem[] = [
  {
    q: "How does the storytelling tool work?",
    a: "Participants take turns drawing a card with a question and tell their story within a time you set yourself. The others listen, without interrupting. Then it's the next person's turn.",
  },
  {
    q: "What are the rules?",
    a: "Draw a card and let the question settle for a moment. Start the clock or ask for a new card. Talk for as long as the time runs and close with 'This was my story'. The others respond briefly, without turning it into a story of their own. Then the next person follows.",
  },
  {
    q: "Why that closing line?",
    a: "Because it marks a clear ending. Without that ritual a group doesn't know when listening turns into responding, and someone talks over the story before it's finished.",
  },
  {
    q: "How long does a round take?",
    a: "You set that yourself with the time setting. In practice short works better than long: a few minutes per person forces people to the heart of it and holds the group's attention.",
  },
  {
    q: "Can I use my own questions?",
    a: "Yes. Alongside the standard sets you can have a set of questions made that suits the theme of your gathering — around collaboration, change or an anniversary, for instance.",
  },
  {
    q: "Where can I use the tool?",
    a: "In any environment where you can share your screen: Zoom, Teams, SpatialChat or simply a room with a projector. Participants don't have to open anything themselves.",
  },
  {
    q: "Is the tool free?",
    a: "Yes. The storytelling tool is free to use, with no account and no installation.",
  },
  {
    q: "Can I use the tool in my own meeting environment?",
    a: "Yes. Below the tool there's an 'Embed code' button that copies the code you paste onto a screen in SpatialChat or on your own page. The allow=\"fullscreen\" attribute is already in that code.",
  },
];

export default function StorytellingPage() {
  return (
    <ToolPagina
      taal="en"
      huidig="storytelling"
      titel="Storytelling"
      oneliner="Draw a card, tell your story, the rest listen. Free, no account."
      tool={<ToolKader bron={embedVoor("storytelling", "en")} naam="Storytelling" taal="en" />}
      over={
        <>
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            About the stories
          </p>
          <p className="text-[#434343] leading-relaxed mb-6">
            Teams who have worked together for years often know surprisingly little about each
            other. One question and a bit of silence do more about that than a team day:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
            Who tells the first story?
          </h2>
          <p className="text-[#434343] text-lg leading-[1.9]">
            Draw a card and read the question.
            <br />
            Talk for as long as the time runs.
            <br />
            The others listen, nothing more.
          </p>
        </>
      }
      faq={faq}
      faqOnderwerp="storytelling"
      ctaTekst="Stories bring a team closer than any presentation. We make more of meetings, with tools, techniques and years of experience."
      appNaam="MeetingMasters Storytelling"
      appOmschrijving="Free online storytelling tool in which participants take turns drawing a question and telling their story within a time you can set."
    />
  );
}
