import type { Metadata } from "next";
import InspiratieKaarten from "@/components/tools/InspiratieKaarten";
import ToolPagina, { type FaqItem } from "@/components/tools/ToolPagina";

const SITE = "https://www.meetingmasters.online";

export const metadata: Metadata = {
  title: "Inspiration Cards — free online tool | MeetingMasters",
  description:
    "Draw a digital inspiration card with a theme and an image. Share your screen, draw a card and the conversation begins. Free, no account, works on your phone.",
  alternates: {
    canonical: `${SITE}/en/games-tools/tools/inspiration-cards`,
    languages: {
      "nl-NL": `${SITE}/nl/games-tools/tools/inspiration-cards`,
      "en-GB": `${SITE}/en/games-tools/tools/inspiration-cards`,
    },
  },
};

const faq: FaqItem[] = [
  {
    q: "What are the inspiration cards?",
    a: "Digital cards with a theme and an image. No task and no right answer — you draw a card and see what the theme brings up in the group. There are 49 cards and you draw them in random order, without repeats.",
  },
  {
    q: "How do I use them in an online meeting?",
    a: "Open the tool in your browser and share your screen. Click 'Full screen' so that only the card is visible, and draw a card with the button or the space bar. Participants do not have to open or install anything themselves.",
  },
  {
    q: "When do you bring a card in?",
    a: "As an opening, before the agenda starts: one word takes people out of their role. Halfway through a long session, to let some air in. When a conversation is stuck, because a card puts another perspective on the table without anyone having to change their mind. Or as a closing, where everyone says in one sentence what they are taking away.",
  },
  {
    q: "Is the tool free?",
    a: "Yes. The inspiration cards are free to use, with no account and no installation. They are meant to make your meeting better, even if you take nothing else from us.",
  },
  {
    q: "Does it work on my phone or tablet?",
    a: "Yes. The card scales with your screen and always fits fully in view. You can also add the page to your home screen in Safari or Chrome, and it opens like an app.",
  },
  {
    q: "Can I save or share a card?",
    a: "Yes. The download button saves the card on screen as an image, to put in a write-up or a chat message, for instance.",
  },
  {
    q: "Can I use the cards in my own meeting environment?",
    a: "Yes. Below the card there is an 'Embed code' button that copies the code you paste onto a screen in SpatialChat or on your own page. The allow=\"fullscreen\" attribute is already in that code.",
  },
  {
    q: "Which gatherings do they suit?",
    a: "Almost any meeting where people talk to each other. From a team discussion to a strategy session, from onboarding to an all-hands. Anywhere you want to open a conversation that goes beyond the agenda.",
  },
  {
    q: "Can I order these inspiration cards?",
    a: "No, the cards are not for sale. Using them is fine, free and as often as you like.",
  },
  {
    q: "Who made these cards?",
    a: "The cards are a gift from a former colleague, who brought art in as a source of inspiration.",
  },
  {
    q: "What are the inspiration cards based on?",
    a: "The inspiration for these cards comes from Dalar Consultancy, the founders of Genuine Contact.",
  },
];

export default function InspirationCardsPage() {
  return (
    <ToolPagina
      taal="en"
      huidig="inspiration-cards"
      titel="Inspiration Cards"
      oneliner="Share your screen, draw a card and the conversation begins. Free, no account."
      tool={<InspiratieKaarten taal="en" />}
      over={
        <>
          <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-3">
            About the cards
          </p>
          <p className="text-[#545454] leading-relaxed mb-6">
            The success of a brainstorm lies in making connections and associations. This little
            tool is a fine warm-up:
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] leading-snug mb-5">
            Which card belongs to your question?
          </h2>
          <p className="text-[#545454] text-lg leading-[1.9]">
            Press Draw a card.
            <br />
            Let the word and the image work on you.
            <br />
            What is the relation to your question?
          </p>
        </>
      }
      faq={faq}
      faqOnderwerp="the inspiration cards"
      ctaTekst="Inspiration cards enrich conversations. We make more of meetings, with tools, techniques and years of experience."
      appNaam="MeetingMasters Inspiration Cards"
      appOmschrijving="Free online tool that shows random inspiration cards for use in meetings, workshops and team sessions."
    />
  );
}
