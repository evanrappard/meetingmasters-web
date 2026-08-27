"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_ITEMS, kies } from "@/lib/navigatie";
import { taalVanPad, anderTaalPad } from "@/lib/talen";

/** De paar losse teksten in de balk zelf, per taal. */
const T = {
  nl: {
    gesprek: "Plan een gesprek",
    menuOpen: "Menu openen",
    menuDicht: "Menu sluiten",
    logoAlt:
      "MeetingMasters Online — specialist in online bijeenkomsten voor groepen van 50 tot 500 mensen",
    thuis: "/nl/home",
    cta: "/nl/expert-advies",
  },
  en: {
    gesprek: "Book a conversation",
    menuOpen: "Open menu",
    menuDicht: "Close menu",
    logoAlt:
      "MeetingMasters Online — specialists in online gatherings for groups of 50 to 500 people",
    thuis: "/en/home",
    cta: "/en/expert-advice",
  },
} as const;

// De balk toont niet alles: items met alleenFooter horen wel op de site,
// maar hoeven de hoofdnavigatie niet langer te maken.
const BALK_ITEMS = NAV_ITEMS.filter((i) => !i.alleenFooter);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pad = usePathname() ?? "/nl/home";
  const taal = taalVanPad(pad);
  const t = T[taal];
  const anderePad = anderTaalPad(pad);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  // Zet de achtergrond vast zolang het mobiele menu open staat. Zonder dit
  // scrollt de pagina onder het paneel door en springt het menu op iOS.
  useEffect(() => {
    if (!mobileOpen) return;
    const vorige = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = vorige;
    };
  }, [mobileOpen]);

  return (
    // z-[60] i.p.v. z-50: de cookiebanner staat ook op z-50 en komt later in de
    // DOM, waardoor die anders over het geopende mobiele menu heen valt.
    <header className="sticky top-0 z-[60]">
      {/* MM Yellow top stripe */}
      <div className="h-1 bg-[#EEBE3D] w-full" />

      <div className="bg-white border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10 h-[84px] flex items-center justify-between">
          {/* Logo */}
          <Link href={t.thuis} className="flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt={t.logoAlt}
              width={148}
              height={38}
              className="h-9 w-auto object-contain"
              priority
              quality={90}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {BALK_ITEMS.map((item) => {
              // Tekst en adres in de taal van de pagina. De sleutel voor het
              // uitklappen blijft het Nederlandse label: dat is interne staat
              // en moet niet meeveranderen met de taal.
              const nav = kies(item, taal);
              const kopje = taal === "en" ? item.feature?.titleEn : item.feature?.title;
              const meerLabel = taal === "en" ? item.moreLabelEn : item.moreLabel;
              const meerHref = taal === "en" ? item.moreHrefEn ?? item.moreHref : item.moreHref;

              // Menu met subpagina's: geel kopje + witte lijst eronder
              if (item.children && item.feature) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={nav.href}
                      className="flex items-center gap-1 text-[15px] font-medium text-[#434343] hover:text-[#EEBE3D] hover:font-bold transition-colors py-2"
                    >
                      {nav.label}
                      <ChevronDown size={13} className="opacity-50" />
                    </Link>

                    {/* Het uitklapmenu staat altijd in de pagina en wordt alleen
                        verborgen. Rendeerden we het pas bij hover, dan stonden de
                        links nergens in de HTML die de server verstuurt: Google
                        vond de subpagina's dan niet via het menu. */}
                    <div
                      className={`absolute top-full left-0 pt-0 z-50 transition-opacity ${
                        openDropdown === item.label
                          ? "opacity-100"
                          : "opacity-0 invisible pointer-events-none"
                      }`}
                      aria-hidden={openDropdown !== item.label}
                    >
                      {(
                        <div className="w-[300px] bg-white border border-[#EBEBEB] rounded-lg shadow-lg overflow-hidden">
                          {/* Geel kopje = moederpagina */}
                          <Link
                            href={nav.href}
                            className="block bg-[#FFFBEE] px-5 py-4 border-b border-[#F0E9CE] hover:bg-[#FCF3D6] transition-colors"
                          >
                            <span className="text-[15px] font-semibold leading-snug text-[#2D2D2D]">
                              {kopje}
                            </span>
                          </Link>

                          {/* Subpagina's in wit */}
                          <div className="p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={kies(child, taal).href}
                                className="block px-4 py-2.5 text-sm text-[#434343] rounded hover:text-[#2D2D2D] hover:bg-[#FAFAFA] transition-colors"
                              >
                                {kies(child, taal).label}
                              </Link>
                            ))}
                            {meerHref && (
                              <Link
                                href={meerHref}
                                className="flex items-center gap-1.5 mt-1 px-4 py-2.5 text-sm font-semibold text-[#D4A835] rounded border-t border-[#F3F3F3] hover:text-[#2D2D2D] hover:bg-[#FAFAFA] transition-colors"
                              >
                                {meerLabel}
                                <ArrowRight size={14} />
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }

              // Item met alleen een kopje (Over ons): geel kopje, geen lijst
              if (item.feature) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={nav.href}
                      className="text-[15px] font-medium text-[#434343] hover:text-[#EEBE3D] hover:font-bold transition-colors"
                    >
                      {nav.label}
                    </Link>

                    {/* Het uitklapmenu staat altijd in de pagina en wordt alleen
                        verborgen. Rendeerden we het pas bij hover, dan stonden de
                        links nergens in de HTML die de server verstuurt: Google
                        vond de subpagina's dan niet via het menu. */}
                    <div
                      className={`absolute top-full left-0 pt-0 z-50 transition-opacity ${
                        openDropdown === item.label
                          ? "opacity-100"
                          : "opacity-0 invisible pointer-events-none"
                      }`}
                      aria-hidden={openDropdown !== item.label}
                    >
                      <Link
                        href={nav.href}
                        className="block w-[240px] bg-[#FFFBEE] border border-[#EBEBEB] rounded-lg shadow-lg px-5 py-4 hover:bg-[#FCF3D6] transition-colors"
                      >
                        <span className="text-[15px] font-semibold leading-snug text-[#2D2D2D]">
                          {kopje}
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              }

              // Gewone link (Blog)
              return (
                <Link
                  key={item.label}
                  href={nav.href}
                  className="text-[15px] font-medium text-[#434343] hover:text-[#EEBE3D] hover:font-bold transition-colors"
                >
                  {nav.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* De schakelaar springt naar dezelfde pagina in de andere taal.
                Bestaat die niet, dan naar de startpagina van die taal — zie
                anderTaalPad in lib/navigatie.ts. */}
            {/* De schakelaar springt naar dezelfde pagina in de andere taal.
                Bestaat die pagina nog niet, dan staat de andere taal er grijs
                bij in plaats van als link: liever niets dan iemand op een
                willekeurige andere pagina laten belanden. */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#6E6E6E]">
              <TaalKeuze taal={taal} anderePad={anderePad} />
            </div>
            <Link
              href={t.cta}
              className="hidden lg:inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-6 py-2 rounded hover:bg-[#D4A835] transition-colors"
            >
              {t.gesprek}
            </Link>
            <button
              className="lg:hidden -mr-2 p-2 text-[#434343]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t.menuDicht : t.menuOpen}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — vast paneel onder de balk dat zelf scrollt. Niet in de
          flow van de sticky header laten meegroeien: die pint zich aan de
          bovenkant vast, waardoor alles onder de schermrand onbereikbaar wordt. */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bottom-0 overflow-y-auto overscroll-contain bg-white border-t border-[#EBEBEB] px-6 py-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] space-y-1">
          {BALK_ITEMS.map((item) => {
            const nav = kies(item, taal);
            const kopje = taal === "en" ? item.feature?.titleEn : item.feature?.title;
            const meerLabel = taal === "en" ? item.moreLabelEn : item.moreLabel;
            const meerHref = taal === "en" ? item.moreHrefEn ?? item.moreHref : item.moreHref;

            return item.children && item.feature ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="w-full flex justify-between items-center py-3 text-sm font-medium text-[#434343]"
                >
                  {nav.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="pb-3">
                    {/* Geel kopje = moederpagina */}
                    <Link
                      href={nav.href}
                      onClick={closeMobile}
                      className="block rounded-lg bg-[#FFFBEE] border border-[#F1E4BA] px-4 py-3 mb-1"
                    >
                      <span className="block text-[15px] font-semibold leading-snug text-[#2D2D2D]">
                        {kopje}
                      </span>
                    </Link>

                    {/* Subpagina's */}
                    <div className="pl-1 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={kies(child, taal).href}
                          onClick={closeMobile}
                          className="block py-2 text-sm text-[#6E6E6E] hover:text-[#2D2D2D]"
                        >
                          {kies(child, taal).label}
                        </Link>
                      ))}
                      {meerHref && (
                        <Link
                          href={meerHref}
                          onClick={closeMobile}
                          className="flex items-center gap-1.5 py-2 text-sm font-semibold text-[#D4A835] hover:text-[#2D2D2D]"
                        >
                          {meerLabel}
                          <ArrowRight size={13} />
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={nav.href}
                onClick={closeMobile}
                className="block py-3 text-sm font-medium text-[#434343] hover:text-[#2D2D2D] border-b border-[#F5F5F5]"
              >
                {nav.label}
              </Link>
            );
          })}
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href={t.cta}
              onClick={closeMobile}
              className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-5 py-3 rounded text-center hover:bg-[#D4A835] transition-colors"
            >
              {t.gesprek}
            </Link>
            <div className="flex gap-3 text-sm text-[#6E6E6E]">
              <TaalKeuze taal={taal} anderePad={anderePad} onKlik={closeMobile} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * NL | EN. De taal waarin je staat is vet, de andere is een link — maar alleen
 * als die pagina bestaat. Zo niet, dan staat hij er lichtgrijs bij met een
 * uitleg in de tooltip.
 */
function TaalKeuze({
  taal,
  anderePad,
  onKlik,
}: {
  taal: "nl" | "en";
  anderePad: string | null;
  onKlik?: () => void;
}) {
  const ander = taal === "nl" ? "en" : "nl";
  const merk = (t: string) => t.toUpperCase();

  const huidig = <span className="font-bold text-[#2D2D2D]">{merk(taal)}</span>;
  const andere = anderePad ? (
    <Link
      href={anderePad}
      hrefLang={ander}
      onClick={onKlik}
      className="hover:text-[#434343] transition-colors"
    >
      {merk(ander)}
    </Link>
  ) : (
    <span
      className="text-[#C9C9C9] cursor-default"
      title={
        ander === "en"
          ? "This page is not available in English yet"
          : "Deze pagina is er nog niet in het Nederlands"
      }
    >
      {merk(ander)}
    </span>
  );

  return taal === "nl" ? (
    <>
      {huidig}
      <span>|</span>
      {andere}
    </>
  ) : (
    <>
      {andere}
      <span>|</span>
      {huidig}
    </>
  );
}
