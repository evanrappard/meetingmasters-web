import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "./posts";

export const metadata: Metadata = {
  title: "Blog | MeetingMasters",
  description:
    "Inzichten, reflecties en praktische ideeën over online meetings, virtuele events en menselijke verbinding — door Emilie van Rappard.",
};

export default function BlogPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section>
        <div className="relative w-full h-[44vw] min-h-[320px] max-h-[560px] overflow-hidden">
          <Image
            src="/images/blog/blog-hero.webp"
            alt="Close-up van iemand die aan een bureau werkt met de MeetingMasters-blog op het scherm"
            fill
            priority
            className="object-cover object-[center_78%]"
            sizes="100vw"
          />
          {/* Lichte gradient links→rechts — contrast achter de tekstkolom, scherm rechts blijft helder */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-content mx-auto px-6 lg:px-10 pb-14 sm:pb-20">
              <div className="max-w-[520px]">
                <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>Blog</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.05] mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}>
                  Inzichten over online meetings, events en menselijke verbinding.
                </h1>
                <p className="text-white text-lg leading-relaxed" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
                  Reflecties en praktische ideeën over betekenisvol samenkomen op afstand — door Emilie van Rappard, Founder MeetingMasters Online
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
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/nl/blog/${post.slug}`}
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
                  <p className="text-sm text-[#666666] leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-xs font-semibold text-[#2D2D2D] pt-4 border-t border-[#F0F0F0] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Lees verder
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
