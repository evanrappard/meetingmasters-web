import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | MeetingMasters",
  description:
    "Insights, reflections, and practical thinking on online meetings, virtual events, and human connection.",
};

const posts = [
  {
    slug: "systeemwoede",
    title: "Systeemwoede in online meetings: maakt meer kapot dan je lief is",
    date: "April 15, 2026",
    excerpt:
      "Technological frustration is an underestimated factor in online gatherings. Someone recovering from a technical struggle cannot meaningfully engage with meeting content — engagement begins at login, not with the first agenda item.",
  },
  {
    slug: "ai-paradox",
    title: "De AI-paradox: waarom meetings nu meer waard zijn",
    date: "April 1, 2026",
    excerpt:
      "AI takes over routine work. But the moment someone says 'wait, I see this differently' and a conversation shifts the entire direction? That's where machines fall short. That only happens when people meet with enough structure to have that conversation.",
  },
  {
    slug: "niet-hetzelfde-wel-goed",
    title: "Niet hetzelfde. Wel goed.",
    date: "March 31, 2026",
    excerpt:
      "Most gatherings were already ineffective before moving online. Online simply made it more visible. Success depends on methodology rather than medium — the question is never 'online or offline?' but 'what should happen here?'",
  },
  {
    slug: "acht-grens",
    title: "De acht-grens: wanneer een groep zichzelf niet meer regelt",
    date: "March 25, 2026",
    excerpt:
      "Groups up to eight people self-regulate naturally. Beyond this size, dynamics shift dramatically. Every meeting above a handful of people is a design question — not just a logistics one.",
  },
  {
    slug: "stok-om-mee-te-slaan",
    title: "De stok om mee te slaan",
    date: "March 4, 2026",
    excerpt:
      "Online constraints actually create opportunities. They force intentional meeting design. When organizers focus on real interaction rather than relying on social elements, effectiveness improves across all formats.",
  },
  {
    slug: "olympiers",
    title: "Een online thuis voor oud-olympiërs wereldwijd",
    date: "February 7, 2026",
    excerpt:
      "A videocall is a tool. An online meeting place is something else entirely. The World Olympians Association partnered with MeetingMasters to create e-OLY House — a digital gathering space that facilitates genuine connection without mandated programming.",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-3">Blog</h1>
        <p className="text-[#666666] text-lg max-w-xl mx-auto">
          Insights and reflections on online meetings, virtual events, and human
          connection — by Emilie van Rappard.
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
                By Emilie van Rappard
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
