import Link from "next/link";
import type { Taal } from "@/lib/talen";

/**
 * De regel over grotere groepen, op elke plek waar we de groepsgrootte van
 * R@venHack noemen.
 *
 * Op de site staat als vaste claim 5 tot 75 mensen. Technisch kan het spel
 * verder — tot 150 — maar dat vraagt om extra begeleiding en een gesprek
 * vooraf, en dat is niets om iemand zelf te laten uitzoeken. Vandaar deze zin
 * met een link naar het gesprek, en niet een groter getal in de claim.
 */

const T = {
  nl: {
    zin: "R@venHack is ook te spelen met nog grotere groepen.",
    link: "Neem daarvoor even contact met ons op.",
    href: "/nl/expert-advies",
  },
  en: {
    zin: "R@venHack can be played with larger groups too.",
    link: "Do get in touch about that.",
    href: "/en/expert-advice",
  },
} as const;

export default function GrotereGroepen({
  taal = "nl",
  className = "",
}: {
  taal?: Taal;
  className?: string;
}) {
  const t = T[taal];
  return (
    <p className={`text-[#434343] leading-relaxed ${className}`}>
      {t.zin}{" "}
      <Link href={t.href} className="text-[#28A8AA] font-semibold hover:underline">
        {t.link}
      </Link>
    </p>
  );
}
