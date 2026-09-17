import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Eén format als ronde tegel: de gekleurde bol met het icoon, bij mouseover de
 * korte omschrijving in de bol, en de naam eronder. Dit is de tegel uit de
 * catalogus onderaan de events-pagina; het keuzeblok gebruikt hem sinds
 * 17 september 2026 ook voor zoekresultaten, zodat die er hetzelfde uitzien
 * en dezelfde kleur meebrengen.
 *
 * Het icoon komt als kant-en-klaar element binnen (`icoon`), niet als
 * component. Zo kan de server de tegel opbouwen en aan een client-component
 * geven: een React-element reist mee, een Lucide-component niet.
 */

export type FormatBolProps = {
  href: string;
  titel: string;
  /** Verschijnt in de bol bij mouseover. */
  omschrijving?: string;
  /** De achtergrond van de bol, een radial-gradient. */
  bg: string;
  /** Een beeld dat de bol vult; gaat vóór het icoon. */
  iconSrc?: string;
  /** Het icoon, al gerenderd, voor formats zonder beeld. */
  icoon?: ReactNode;
  /** "klein" voor de zoekresultaten in het keuzeblok. */
  maat?: "normaal" | "klein";
  onClick?: () => void;
};

export default function FormatBol({
  href,
  titel,
  omschrijving,
  bg,
  iconSrc,
  icoon,
  maat = "normaal",
  onClick,
}: FormatBolProps) {
  const klein = maat === "klein";
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex flex-col items-center text-center rounded-2xl p-2 sm:p-3 hover:bg-[#FFFBEE] transition-colors"
    >
      <div
        className={`relative w-full aspect-square mx-auto rounded-full overflow-hidden flex items-center justify-center mb-3 group-hover:scale-[1.06] transition-transform duration-200 ${
          klein ? "max-w-[128px]" : "max-w-[176px]"
        }`}
        style={{
          background: bg,
          boxShadow: "0 6px 20px rgba(0,0,0,0.14), 0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt={titel}
            fill
            sizes={klein ? "128px" : "(min-width: 640px) 176px, 45vw"}
            className="object-cover transition-opacity duration-200 group-hover:opacity-0"
          />
        ) : (
          <span
            className="transition-opacity duration-200 group-hover:opacity-0 flex items-center justify-center"
            aria-hidden="true"
          >
            {icoon}
          </span>
        )}
        {omschrijving && (
          <div
            className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
              klein ? "p-3" : "p-4"
            }`}
            style={{ backgroundColor: "rgba(0,0,0,0.52)" }}
          >
            <p
              className={`text-white leading-snug font-medium text-center ${
                klein ? "text-[10px]" : "text-[11px]"
              }`}
            >
              {omschrijving}
            </p>
          </div>
        )}
      </div>
      <p
        className={`font-bold text-[#2D2D2D] leading-snug group-hover:text-[#EEBE3D] transition-colors px-1 ${
          klein ? "text-xs max-w-[128px]" : "text-sm max-w-[160px]"
        }`}
      >
        {titel}
      </p>
    </Link>
  );
}
