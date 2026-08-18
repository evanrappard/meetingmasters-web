import type { Metadata } from "next";
import Link from "next/link";

/**
 * Eigen 404. Zonder dit bestand toont Next een kale Engelse standaardpagina
 * zonder menu, en zit een bezoeker met een oude link vast. Bewust tweetalig:
 * hier weten we niet in welke taal iemand binnenkwam.
 */
export const metadata: Metadata = {
  title: "Pagina niet gevonden | MeetingMasters",
  robots: { index: false, follow: true },
};

const LINKS = [
  { nl: "Home", en: "Home", nlHref: "/nl/home", enHref: "/en/home" },
  { nl: "Events", en: "Events", nlHref: "/nl/events", enHref: "/en/events" },
  { nl: "Virtueel kantoor", en: "Virtual office", nlHref: "/nl/virtual-office", enHref: "/en/virtual-office" },
  { nl: "Blog", en: "Blog", nlHref: "/nl/blog", enHref: "/en/blog" },
  { nl: "Contact", en: "Contact", nlHref: "/nl/contact", enHref: "/en/contact" },
];

export default function NotFound() {
  return (
    <div className="bg-white min-h-[70vh] flex items-center">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-20">
        <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2D2D2D] leading-snug mb-4 max-w-[620px]">
          Deze pagina bestaat niet meer.
          <span className="block text-[#898989]">This page no longer exists.</span>
        </h1>
        <p className="text-[#545454] leading-relaxed max-w-[560px] mb-2">
          Misschien is hij verhuisd, of klopt er iets niet aan de link. Hieronder
          kom je weer op weg.
        </p>
        <p className="text-[#898989] leading-relaxed max-w-[560px] mb-8">
          It may have moved, or the link may be wrong. The links below will get
          you back on track.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 max-w-[560px]">
          {LINKS.map((l) => (
            <div key={l.nlHref} className="flex items-baseline gap-3">
              <Link
                href={l.nlHref}
                className="text-[#2D2D2D] font-semibold hover:text-[#28A8AA] transition-colors"
              >
                {l.nl}
              </Link>
              <span className="text-[#D2D2D0]">·</span>
              <Link
                href={l.enHref}
                className="text-sm text-[#898989] hover:text-[#28A8AA] transition-colors"
              >
                {l.en} <span className="text-[11px]">EN</span>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#898989] mt-10">
          Kom je er niet uit? Mail{" "}
          <a
            href="mailto:contact@meetingmasters.online"
            className="text-[#28A8AA] font-semibold hover:underline"
          >
            contact@meetingmasters.online
          </a>
        </p>
      </div>
    </div>
  );
}
