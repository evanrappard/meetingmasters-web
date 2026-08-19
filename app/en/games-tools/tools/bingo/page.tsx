import type { Metadata } from "next";
import ToolKader from "@/components/tools/ToolKader";
import ToolPagina, { type FaqItem } from "@/components/tools/ToolPagina";
import { embedVoor } from "@/lib/tools";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  title: "Bingo — free online bingo for meetings | MeetingMasters",
  description:
    "Interactive bingo for your online meeting, training or conference. Participants cross off words as the session goes on. Free, with your own word list.",
  alternates: {
    canonical: `${SITE}/en/games-tools/tools/bingo`,
    languages: {
      "nl-NL": `${SITE}/nl/games-tools/tools/bingo`,
      "en-GB": `${SITE}/en/games-tools/tools/bingo`,
    },
  },
};

const faq: FaqItem[] = [
  {
    q: "What is bingo in a meeting?",
    a: "Participants get a card with words that are likely to come up during the gathering. Every time a word passes, they cross it off. Listening becomes active instead of passive.",
  },
  {
    q: "How do I start a game?",
    a: "Open the host panel, set your word list and share the player link with your participants. They open it on their own phone or laptop and each get a unique card.",
  },
  {
    q: "Does everyone get the same card?",
    a: "No. There are 250 unique cards, so participants have different combinations. That way not everyone wins at once.",
  },
  {
    q: "Can I use my own words?",
    a: "Yes. In the host panel you fill in your own list, matching the subject of the gathering. You can also save a list as a preset to use again later.",
  },
  {
    q: "Is there an English version?",
    a: "Yes. The tool exists in Dutch and English, each with its own player page and host panel.",
  },
  {
    q: "How do I check whether someone really has bingo?",
    a: "The player shows their card and the tool checks the combination. You don't have to keep score yourself.",
  },
  {
    q: "Is the tool free?",
    a: "Yes. Bingo is free to use, with no account and no installation. Participants open a link in their browser.",
  },
  {
    q: "Can I use bingo in my own meeting environment?",
    a: "Yes. Below the game there's an 'Embed code' button that copies the code you paste onto a screen in SpatialChat or on your own page. The allow=\"fullscreen\" attribute is already in that code.",
  },
];

export default function BingoPage() {
  return (
    <ToolPagina
      taal="en"
      huidig="bingo"
      titel="Bingo"
      oneliner="Participants cross off words as the session runs. Free, no account."
      tool={<ToolKader bron={embedVoor("bingo", "en")} naam="Bingo" taal="en" />}
      over={
        <>
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            About the bingo
          </p>
          <p className="text-[#434343] leading-relaxed mb-6">
            In a long plenary session attention drifts by itself. Give people something to watch
            for, and they listen more sharply than you asked:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
            Which words are going to come up today?
          </h2>
          <p className="text-[#434343] text-lg leading-[1.9]">
            Put your own words on the card.
            <br />
            Share the link with your participants.
            <br />
            Whoever fills a row first calls bingo.
          </p>
        </>
      }
      faq={faq}
      faqOnderwerp="the bingo"
      ctaTekst="Bingo holds attention through a long session. We make more of meetings, with tools, techniques and years of experience."
      appNaam="MeetingMasters Bingo"
      appOmschrijving="Free online bingo for meetings, training sessions and conferences, with your own word lists and a unique card per participant."
    />
  );
}
