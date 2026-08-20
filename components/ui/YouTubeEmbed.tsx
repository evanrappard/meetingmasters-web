"use client";

import Image from "next/image";
import { useState } from "react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  /**
   * Eigen voorbeeldbeeld. Zonder dit valt hij terug op de thumbnail van
   * YouTube, en die halen we dan van i.ytimg.com — een extern adres dat we niet
   * in de hand hebben en dat de bezoeker bij YouTube bekend maakt vóór hij op
   * play klikt. Geef hem dus liever een bestand uit /public/images mee.
   */
  poster?: string;
  /** Beschrijving van het beeld voor wie het niet ziet. Valt terug op `title`. */
  posterAlt?: string;
};

/**
 * Lichtgewicht YouTube-embed: toont eerst alleen de thumbnail + play-knop.
 * De (zware) YouTube-speler wordt pas geladen zodra de bezoeker op play klikt —
 * dus geen impact op de laadtijd van de pagina.
 */
export default function YouTubeEmbed({ videoId, title, poster, posterAlt }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-black shadow-xl">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Speel de film af: ${title}`}
        >
          {poster ? (
            <Image
              src={poster}
              alt={posterAlt ?? title}
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="object-cover"
            />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
              }}
              alt={posterAlt ?? title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-24 items-center justify-center rounded-2xl bg-[#EEBE3D] shadow-lg transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#2D2D2D]" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
