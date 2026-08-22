"use client";

import { useEffect, useState } from "react";

type Bron = { src: string; type: string };

type Props = {
  /** Het rustbeeld. Op de telefoon is dit het hele hero-beeld. */
  poster: string;
  /** Kleinere uitsnede voor telefoons (900px breed). */
  posterMobiel?: string;
  /** Tussenmaat voor gewone schermen (1600px breed), als die kleiner is. */
  posterDesktop?: string;
  /** Eén of meer videobronnen, beste eerst (WebM vóór MP4). */
  bronnen: Bron[];
  /** Beschrijving voor wie het beeld niet ziet. Laat leeg als de hero decoratief is. */
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Hero-achtergrond: een beeld dat er altijd is, met een video eroverheen — maar
 * alleen waar die video ook iets toevoegt.
 *
 * De video wordt bewust **niet** geladen als:
 *  - het scherm smaller is dan 768px. Op de telefoon woog zo'n hero 1,4 tot
 *    2,4 MB, terwijl het bewegende beeld daar het kleinst en het minst
 *    belangrijk is. Het rustbeeld doet daar hetzelfde werk voor 25 tot 120 kB.
 *  - de bezoeker "verminder beweging" aan heeft staan in zijn systeem.
 *  - de bezoeker databesparing aan heeft, of op een trage verbinding zit.
 *
 * De <video> komt pas ná die beslissing in de pagina, dus er wordt niets
 * gedownload dat we vervolgens weggooien. Het beeld blijft eronder liggen: valt
 * het afspelen weg, dan is er nooit een zwart vlak.
 */
export default function HeroAchtergrond({
  poster,
  posterMobiel,
  posterDesktop,
  bronnen,
  alt,
  className = "absolute inset-0 w-full h-full object-cover",
  style,
}: Props) {
  const [toonVideo, setToonVideo] = useState(false);

  useEffect(() => {
    const groot = window.matchMedia("(min-width: 768px)");
    const rustig = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Niet in elke browser aanwezig; ontbreekt hij, dan gaan we uit van ruim.
    const verbinding = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const zuinig =
      verbinding?.saveData === true ||
      ["slow-2g", "2g"].includes(verbinding?.effectiveType ?? "");

    const bepaal = () => setToonVideo(groot.matches && !rustig.matches && !zuinig);
    bepaal();
    groot.addEventListener("change", bepaal);
    rustig.addEventListener("change", bepaal);
    return () => {
      groot.removeEventListener("change", bepaal);
      rustig.removeEventListener("change", bepaal);
    };
  }, []);

  return (
    <>
      {/*
        Bewust <picture> met een media-query en niet srcset met breedtes: bij
        srcset rekent de browser de pixeldichtheid mee, en een telefoon met
        dichtheid 3 vraagt dan alsnog het grootste bestand op. Met media kiezen
        wíj: onder 768px het kleine bestand, daarboven het grote. Voor een
        hero-beeld achter een verloop is dat ruim scherp genoeg.
      */}
      <picture className="contents">
        {posterMobiel && <source media="(max-width: 767px)" srcSet={posterMobiel} />}
        {posterDesktop && <source media="(min-width: 768px)" srcSet={posterDesktop} />}
        <img
          src={poster}
          alt={alt ?? ""}
          aria-hidden={alt ? undefined : true}
          fetchPriority="high"
          decoding="async"
          className={className}
          style={style}
        />
      </picture>
      {toonVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className={className}
          style={style}
        >
          {bronnen.map((b) => (
            <source key={b.src} src={b.src} type={b.type} />
          ))}
        </video>
      )}
    </>
  );
}
