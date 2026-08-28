import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Een link die weet of hij de pagina verlaat of niet.
 *
 * Voor een sprong binnen dezelfde pagina (`#ergens`) hoort een gewone `<a>` te
 * staan. Next's `Link` behandelt zo'n adres als een navigatie en zet het anker
 * met `pushState` in de adresbalk — en dan blijft de `hashchange`-gebeurtenis
 * uit. Componenten die daarop luisteren, zoals het boekingsblok van R@venHack,
 * merken de sprong dus niet.
 *
 * Alle andere adressen gaan wél via `Link`, zodat de site niet opnieuw laadt.
 */
export default function PaginaLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
