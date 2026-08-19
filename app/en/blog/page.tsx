import type { Metadata } from "next";
import { deelBeeld, ogBeeld } from "@/lib/deelbeelden";
import Image from "next/image";
import Link from "next/link";
import { POSTS_EN } from "./posts";

export const metadata: Metadata = {
  openGraph: { images: ogBeeld(deelBeeld("/blog")!, "MeetingMasters blog") },
  twitter: { card: "summary_large_image", images: [deelBeeld("/blog")!] },
  title: "Blog | MeetingMasters",
  description:
    "Insights, reflections and practical ideas about online meetings, virtual events and human connection — by Emilie van Rappard.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/blog",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/blog",
      "en-GB": "https://www.meetingmasters.online/en/blog",
    },
  },
};

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section>
        <div className="relative w-full md:h-[44vw] md:min-h-[320px] md:max-h-[560px] overflow-hidden">
          {/* Op dit beeld staat het Nederlandse menu. Emilie heeft besloten dat
              tijdelijk zo te laten; een Engelse variant volgt zodra de Engelse
              site staat, want het is een schermafbeelding van de site zelf. */}
          <Image
            src="/images/blog/blog-hero.webp"
            alt="Close-up of someone working at a desk with the MeetingMasters blog on screen"
            fill
            priority
            className="object-cover object-[center_78%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent md:hidden" />
          <div className="relative md:absolute md:inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pt-[42vw] pb-12 md:pt-0 md:pb-20">
              <div className="max-w-[520px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>Blog</p>
                <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] sm:leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  Insights on online meetings, events and human connection.
                </h1>
                <p className="text-white text-lg leading-relaxed" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  Reflections and practical ideas about meaningful gatherings at a distance — by Emilie van Rappard, Founder of MeetingMasters Online
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POSTS ────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] py-14 md:py-20">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {POSTS_EN.map((post) => (
              <Link
                key={post.slug}
                href={`/en/blog/${post.slug}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#28A8AA]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EDEDEA]">
                  <Image
                    src={post.img}
                    alt={post.imgAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-2">
                    {post.date}
                  </p>
                  <h2 className="font-bold text-[#2D2D2D] text-lg leading-snug mb-3 group-hover:text-[#28A8AA] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#525252] leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-semibold text-[#2D2D2D] pt-4 border-t border-[#F0F0F0] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read more
                    <span aria-hidden className="text-[#28A8AA]">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
