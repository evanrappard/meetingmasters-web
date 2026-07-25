"use client";

import { useEffect, useRef } from "react";

type HeroVideoProps = {
  src: string;
  /** Rustend beginbeeld (basisbeeld) — getoond vóór en na het afspelen. */
  startImage: string;
  alt?: string;
  /** Hoe lang (ms) stil blijven op begin- en eindbeeld. */
  holdMs?: number;
  /** Aparte duur (ms) van de begin-hold vóór de video inzet (default = holdMs). */
  startHoldMs?: number;
  /** Meteen afspelen zonder begin-still/fade (alleen de eerste keer). */
  startImmediately?: boolean;
  /** Duur (ms) van de cross-fades. */
  fadeMs?: number;
  /** Afspeelsnelheid (1 = normaal). */
  playbackRate?: number;
  /** Verticale uitsnede, bv. "center top" = alleen onderkant bijsnijden. */
  objectPosition?: string;
  className?: string;
  /** Stijl die op zowel de video als de still wordt toegepast (bv. filter). */
  layerStyle?: React.CSSProperties;
};

/**
 * Hero met rustig ritme:
 *   beginbeeld (3s) → fade naar video → afspelen (vertraagd) →
 *   eindbeeld (3s) → fade terug naar beginbeeld → opnieuw.
 *
 * Het terugspoelen naar het begin gebeurt verborgen achter het beginbeeld,
 * dus er is nooit een grijs vlak. Muted + playsInline voor autoplay op mobiel.
 */
export default function HeroVideo({
  src,
  startImage,
  alt,
  holdMs = 3000,
  startHoldMs = holdMs,
  startImmediately = false,
  fadeMs = 1800,
  playbackRate = 0.35,
  objectPosition = "center top",
  className,
  layerStyle,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const coverRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const cover = coverRef.current;
    if (!v || !cover) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((res) => timers.push(setTimeout(res, ms)));
    const setCover = (opacity: number) => {
      cover.style.opacity = String(opacity);
    };

    v.playbackRate = playbackRate;

    // Vang het eerste frame uit de (scherpe) video zelf en gebruik dat als
    // beginbeeld — even scherp als de video en perfect uitgelijnd.
    const captureFirstFrame = () => {
      try {
        if (!v.videoWidth) return;
        const canvas = document.createElement("canvas");
        canvas.width = v.videoWidth;
        canvas.height = v.videoHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(v, 0, 0, canvas.width, canvas.height);
        cover.src = canvas.toDataURL("image/jpeg", 0.95);
      } catch {
        /* canvas-capture mislukt: val terug op de meegegeven startImage */
      }
    };

    const playToEnd = () =>
      new Promise<void>((res) => {
        const onEnded = () => {
          v.removeEventListener("ended", onEnded);
          res();
        };
        v.addEventListener("ended", onEnded);
        v.playbackRate = playbackRate;
        void v.play().catch(() => res());
      });

    const seekToStart = () =>
      new Promise<void>((res) => {
        if (v.currentTime === 0) return res();
        const onSeeked = () => {
          v.removeEventListener("seeked", onSeeked);
          res();
        };
        v.addEventListener("seeked", onSeeked);
        try {
          v.pause();
          v.currentTime = 0;
        } catch {
          v.removeEventListener("seeked", onSeeked);
          res();
        }
      });

    const loop = async () => {
      await seekToStart();
      captureFirstFrame(); // scherp beginbeeld uit de 4K
      // Bij startImmediately: eerste ronde meteen afspelen, zonder begin-still.
      setCover(startImmediately ? 0 : 1);
      let firstRun = true;
      while (!cancelled) {
        if (!(firstRun && startImmediately)) {
          await wait(startHoldMs); // 1. beginbeeld stil (vóór de video inzet)
          if (cancelled) break;
          setCover(0); // 2. fade beginbeeld → vertrekbeeld (video frame 0)
          await wait(fadeMs);
          if (cancelled) break;
        }
        firstRun = false;
        await playToEnd(); // 3. video afspelen (vertraagd)
        if (cancelled) break;
        await wait(holdMs); // 4. eindbeeld 3s stil (scherp 4K-frame)
        if (cancelled) break;
        setCover(1); // 5. fade eindbeeld → beginbeeld
        await wait(fadeMs);
        if (cancelled) break;
        await seekToStart(); // 6. verborgen terugspoelen achter beginbeeld
      }
    };

    const start = () => void loop();
    // 'loadeddata' i.p.v. 'loadedmetadata' zodat frame 0 echt gedecodeerd is
    // (nodig om het eerste frame te kunnen vangen).
    if (v.readyState >= 2) start();
    else v.addEventListener("loadeddata", start, { once: true });

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      v.removeEventListener("loadeddata", start);
    };
  }, [holdMs, startHoldMs, startImmediately, fadeMs, playbackRate]);

  return (
    <div className={className}>
      <video
        ref={videoRef}
        src={src}
        poster={startImage}
        aria-label={alt}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition, ...layerStyle }}
      />
      <img
        ref={coverRef}
        src={startImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          objectPosition,
          opacity: startImmediately ? 0 : 1,
          transition: `opacity ${fadeMs}ms ease-in-out`,
          ...layerStyle,
        }}
      />
    </div>
  );
}
