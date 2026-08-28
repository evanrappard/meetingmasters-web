import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/ui/JsonLd";
import { POSTS, getPost } from "../posts";
import { engelseSlugVoor } from "@/app/en/blog/posts";
import HeroBeeld from "@/components/ui/HeroBeeld";

const SITE = "https://www.meetingmasters.online";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog | MeetingMasters" };
  const url = `${SITE}/nl/blog/${post.slug}`;
  const image = `${SITE}${post.img}`;
  // Bestaat het artikel ook in het Engels, dan wijzen we er via hreflang naar.
  // Zo krijgt een Engelstalige lezer de Engelse versie in de zoekresultaten.
  const en = engelseSlugVoor(post.slug);
  return {
    title: `${post.metaTitle ?? post.title} | MeetingMasters`,
    description: post.metaDescription,
    alternates: {
      canonical: url,
      ...(en && {
        languages: { "nl-NL": url, "en-GB": `${SITE}/en/blog/${en}` },
      }),
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: "MeetingMasters",
      locale: "nl_NL",
      publishedTime: post.iso,
      authors: ["Emilie van Rappard"],
      images: [{ url: image, alt: post.imgAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Eerst artikelen uit dezelfde rubriek, dan aanvullen met de nieuwste rest.
  const anderen = POSTS.filter((p) => p.slug !== slug);
  const related = [
    ...anderen.filter((p) => p.rubriek === post.rubriek),
    ...anderen.filter((p) => p.rubriek !== post.rubriek),
  ].slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE}${post.img}`,
    datePublished: post.iso,
    dateModified: post.iso,
    author: { "@type": "Person", name: "Emilie van Rappard" },
    publisher: {
      "@type": "Organization",
      name: "MeetingMasters",
      logo: { "@type": "ImageObject", url: `${SITE}/images/logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/nl/blog/${post.slug}` },
  };

  return (
    <>
      <JsonLd data={schema} />

      <article className="bg-white">
        {/* ── HEADER ────────────────────────────────────────────────── */}
        <header className="pt-10 md:pt-14">
          <div className="max-w-[760px] mx-auto px-6 md:px-8">
            <Link href="/nl/blog" className="text-[#6D6D6D] text-xs font-semibold hover:text-[#2D2D2D] transition-colors">
              ← Alle blogs
            </Link>
            <p className="text-[#28A8AA] text-[10px] font-bold tracking-[0.2em] uppercase mt-6 mb-4">Blog</p>
            <h1
              className="font-bold text-[#2D2D2D] leading-[1.1] text-balance mb-5"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)" }}
            >
              {post.title}
            </h1>
            <p className="text-[#434343] text-lg leading-relaxed mb-6">{post.dek}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#999999] pb-8 border-b border-[#EEEEEE]">
              <span className="font-semibold text-[#2D2D2D]">Emilie van Rappard</span>
              <span>·</span>
              <time dateTime={post.iso}>{post.date}</time>
              <span>·</span>
              <span>{post.readingMinutes} min lezen</span>
            </div>
          </div>

          {/* Herhaling van de visual */}
          <div className="max-w-[920px] mx-auto px-6 md:px-8 mt-8">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#EDEDEA]">
              <HeroBeeld
                src={post.img}
                alt={post.imgAlt}
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="(max-width: 920px) 100vw, 920px"
              />
            </div>
          </div>
        </header>

        {/* ── BODY ──────────────────────────────────────────────────── */}
        <div className="max-w-[720px] mx-auto px-6 md:px-8 py-12 md:py-16">
          {post.blocks.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className="font-bold text-[#2D2D2D] text-2xl leading-snug mt-10 mb-4 first:mt-0">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={i} className="border-l-4 border-[#EEBE3D] pl-5 my-8 text-[#2D2D2D] text-xl font-medium italic leading-relaxed">
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="list-disc pl-5 my-6 space-y-2 text-[#333333] text-[17px] leading-relaxed">
                  {block.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "cta") {
              return (
                <div key={i} className="mt-10 mb-2">
                  <p className="text-[#333333] text-[17px] leading-[1.75] mb-4">{block.text}</p>
                  <Link
                    href={block.href}
                    className="inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
                  >
                    {block.label}
                  </Link>
                </div>
              );
            }
            return (
              <p key={i} className="text-[#333333] text-[17px] leading-[1.75] mb-6">
                {block.text}
              </p>
            );
          })}

          {/* Auteur */}
          <div className="mt-12 pt-8 border-t border-[#EEEEEE] flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFFBEE] border border-[#EEE6C8] flex items-center justify-center text-[#D4A835] font-bold shrink-0">
              EvR
            </div>
            <div>
              <p className="font-bold text-[#2D2D2D] text-sm">Emilie van Rappard</p>
              <p className="text-sm text-[#5F5F5F] leading-relaxed">
                Oprichter van MeetingMasters. Schrijft over betekenisvol samenkomen op afstand —
                online events, virtual offices en menselijke verbinding.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ── MEER LEZEN ────────────────────────────────────────────────── */}
      <section className="bg-[#F5F5F2] border-t border-[#E8E8E4] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-bold text-[#2D2D2D] text-xl">Meer lezen</h2>
            <Link href="/nl/blog" className="text-sm font-bold text-[#2D2D2D] border-b-2 border-[#EEBE3D] pb-0.5 hover:border-[#2D2D2D] transition-colors">
              Alle blogs →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/nl/blog/${p.slug}`} className="group bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EDEDEA]">
                  <Image src={p.img} alt={p.imgAlt} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[#28A8AA] text-[11px] font-bold tracking-widest uppercase mb-2">{p.date}</p>
                  <h3 className="font-bold text-[#2D2D2D] text-base leading-snug group-hover:text-[#D4A835] transition-colors">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-[#2D2D2D] py-14 md:py-16">
        <div className="max-w-content mx-auto px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div className="max-w-[560px]">
              <h2 className="font-bold text-white text-2xl leading-snug mb-2">Zelf een bijeenkomst die blijft hangen?</h2>
              <p className="text-white/60 text-base leading-relaxed">
                Wij ontwerpen en begeleiden online events die er écht toe doen. Vertel ons wat je
                wilt bereiken.
              </p>
            </div>
            <Link
              href="/nl/expert-advies"
              className="justify-self-start bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-7 py-3 rounded hover:bg-[#D4A835] transition-colors"
            >
              Plan een gesprek →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
