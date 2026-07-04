import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | MeetingMasters",
  description:
    "Inzichten, reflecties en praktische ideeën over online meetings, virtuele events en menselijke verbinding.",
};

const posts = [
  {
    slug: "systeemwoede",
    title: "Systeemwoede in online meetings: maakt meer kapot dan je lief is",
    date: "15 april 2026",
    excerpt:
      "Technologische frustratie is een onderschatte factor bij online bijeenkomsten. Wie nog bijkomt van een technisch gevecht, kan zich niet betekenisvol verbinden met de inhoud van een meeting — betrokkenheid begint bij het inloggen, niet bij het eerste agendapunt.",
  },
  {
    slug: "ai-paradox",
    title: "De AI-paradox: waarom meetings nu meer waard zijn",
    date: "1 april 2026",
    excerpt:
      "AI neemt het routinewerk over. Maar het moment waarop iemand zegt 'wacht, ik zie dit anders' en een gesprek de hele richting verandert? Daar schieten machines tekort. Dat gebeurt alleen wanneer mensen elkaar ontmoeten met genoeg structuur om dat gesprek te voeren.",
  },
  {
    slug: "niet-hetzelfde-wel-goed",
    title: "Niet hetzelfde. Wel goed.",
    date: "31 maart 2026",
    excerpt:
      "De meeste bijeenkomsten waren al ineffectief voordat ze online gingen. Online maakte dat alleen zichtbaarder. Succes hangt af van de methodiek, niet van het medium — de vraag is nooit 'online of offline?' maar 'wat moet hier gebeuren?'",
  },
  {
    slug: "acht-grens",
    title: "De acht-grens: wanneer een groep zichzelf niet meer regelt",
    date: "25 maart 2026",
    excerpt:
      "Groepen tot acht personen reguleren zichzelf op natuurlijke wijze. Voorbij die omvang verandert de dynamiek ingrijpend. Elke meeting met meer dan een handvol mensen is een ontwerpvraagstuk — niet alleen een logistiek vraagstuk.",
  },
  {
    slug: "stok-om-mee-te-slaan",
    title: "De stok om mee te slaan",
    date: "4 maart 2026",
    excerpt:
      "Online beperkingen creëren juist kansen. Ze dwingen tot bewust meetingontwerp. Wanneer organisatoren zich richten op echte interactie in plaats van te leunen op sociale elementen, verbetert de effectiviteit in alle formats.",
  },
  {
    slug: "olympiers",
    title: "Een online thuis voor oud-olympiërs wereldwijd",
    date: "7 februari 2026",
    excerpt:
      "Een videocall is een hulpmiddel. Een online ontmoetingsplek is iets heel anders. De World Olympians Association werkte samen met MeetingMasters om e-OLY House te creëren — een digitale ontmoetingsruimte die echte verbinding mogelijk maakt zonder verplicht programma.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-3">Blog</h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          Inzichten en reflecties over online meetings, virtuele events en
          menselijke verbinding — door Emilie van Rappard.
        </p>
      </div>

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-accent transition-colors flex flex-col"
            >
              <p className="text-xs text-[#888888] mb-3">{post.date}</p>
              <h2 className="font-bold text-[#333333] text-base mb-3 leading-snug flex-1">
                {post.title}
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <p className="text-xs text-[#888888] italic">
                Door Emilie van Rappard
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
