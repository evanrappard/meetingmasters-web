"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

type NavChild = { label: string; href: string };

type NavItem = {
  label: string;
  href: string;
  feature?: { title: string; desc: string };
  children?: NavChild[];
  moreLabel?: string;
  moreHref?: string;
};

const navItems: NavItem[] = [
  {
    label: "Events",
    href: "/nl/events",
    feature: {
      title: "Bijeenkomsten die écht iets opleveren",
      desc: "Beter contact, meer draagvlak, concrete besluiten – ook in grote groepen.",
    },
    children: [
      { label: "Strategiedag", href: "/nl/events/strategiedagen" },
      { label: "Virtuele kerstborrel", href: "/nl/events/kerstfeest" },
      { label: "All-hands", href: "/nl/events/all-hands" },
      { label: "Community-event", href: "/nl/events/community-building" },
      { label: "Online teambuilding", href: "/nl/events/teambuilding" },
    ],
    moreLabel: "Alle eventformats",
    moreHref: "/nl/events#formats",
  },
  {
    label: "Virtueel Kantoor",
    href: "/nl/virtual-office",
    feature: {
      title: "Samen werken als startpunt",
      desc: "Een verbindende plek voor wie niet allemaal op 1 locatie zit.",
    },
    children: [
      { label: "Boek een zaaltje", href: "/nl/virtual-office/zaaltje" },
      { label: "Huur een instapklaar kantoor", href: "/nl/virtual-office/huren" },
      { label: "Kantoor + Cultuur", href: "/nl/virtual-office/kantoor-cultuur" },
    ],
  },
  {
    label: "Games",
    href: "/nl/games-tools",
    feature: {
      title: "Tools voor meer betrokkenheid",
      desc: "Interactieve formats voor verrassende ervaring en meer verbinding.",
    },
    children: [
      { label: "Games", href: "/nl/games-tools#games" },
      { label: "Escape Room R@venHack", href: "/nl/games-tools/ravenhack" },
      { label: "Tools", href: "/nl/games-tools#tools" },
    ],
  },
  {
    label: "Technologie",
    href: "/nl/technologie",
    feature: {
      title: "Platform plus support",
      desc: "Online meetings en events met menselijke maat.",
    },
    children: [
      { label: "Volledige ontzorging", href: "/nl/technologie/support" },
      { label: "SpatialChat", href: "/nl/technologie/spatialchat" },
      { label: "Teams", href: "/nl/technologie/teams" },
      { label: "Zoom", href: "/nl/technologie/zoom" },
      { label: "Zoom Events", href: "/nl/technologie/zoom-events" },
    ],
  },
  {
    label: "Over ons",
    href: "/nl/about",
    feature: {
      title: "Online Meeting Professionals",
      desc: "",
    },
  },
  { label: "Blog", href: "/nl/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* MM Yellow top stripe */}
      <div className="h-1 bg-[#EEBE3D] w-full" />

      <div className="bg-white border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10 h-[84px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="MeetingMasters Online — specialist in online bijeenkomsten voor groepen van 50 tot 500 mensen"
              width={148}
              height={38}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
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
                      href={item.href}
                      className="flex items-center gap-1 text-[15px] font-medium text-[#545454] hover:text-[#EEBE3D] hover:font-bold transition-colors py-2"
                    >
                      {item.label}
                      <ChevronDown size={13} className="opacity-50" />
                    </Link>

                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-0 z-50">
                        <div className="w-[300px] bg-white border border-[#EBEBEB] rounded-lg shadow-lg overflow-hidden">
                          {/* Geel kopje = moederpagina */}
                          <Link
                            href={item.href}
                            className="block bg-[#FFFBEE] px-5 py-4 border-b border-[#F0E9CE] hover:bg-[#FCF3D6] transition-colors"
                          >
                            <span className="text-[15px] font-semibold leading-snug text-[#2D2D2D]">
                              {item.feature.title}
                            </span>
                          </Link>

                          {/* Subpagina's in wit */}
                          <div className="p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-4 py-2.5 text-sm text-[#545454] rounded hover:text-[#2D2D2D] hover:bg-[#FAFAFA] transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                            {item.moreHref && (
                              <Link
                                href={item.moreHref}
                                className="flex items-center gap-1.5 mt-1 px-4 py-2.5 text-sm font-semibold text-[#D4A835] rounded border-t border-[#F3F3F3] hover:text-[#2D2D2D] hover:bg-[#FAFAFA] transition-colors"
                              >
                                {item.moreLabel}
                                <ArrowRight size={14} />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
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
                      href={item.href}
                      className="text-[15px] font-medium text-[#545454] hover:text-[#EEBE3D] hover:font-bold transition-colors"
                    >
                      {item.label}
                    </Link>

                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-0 z-50">
                        <Link
                          href={item.href}
                          className="block w-[240px] bg-[#FFFBEE] border border-[#EBEBEB] rounded-lg shadow-lg px-5 py-4 hover:bg-[#FCF3D6] transition-colors"
                        >
                          <span className="text-[15px] font-semibold leading-snug text-[#2D2D2D]">
                            {item.feature.title}
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              // Gewone link (Blog)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-medium text-[#545454] hover:text-[#EEBE3D] hover:font-bold transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#898989]">
              <Link href="/nl/home" className="font-bold text-[#2D2D2D]">NL</Link>
              <span>|</span>
              <Link href="/nl/home" className="hover:text-[#545454] transition-colors">EN</Link>
            </div>
            <Link
              href="/nl/expert-advies"
              className="hidden lg:inline-block bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-6 py-2 rounded hover:bg-[#D4A835] transition-colors"
            >
              Plan een gesprek
            </Link>
            <button
              className="lg:hidden text-[#545454]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#EBEBEB] px-6 py-4 space-y-1">
          {navItems.map((item) =>
            item.children && item.feature ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="w-full flex justify-between items-center py-3 text-sm font-medium text-[#545454]"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="pb-3">
                    {/* Geel kopje = moederpagina */}
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className="block rounded-lg bg-[#FFFBEE] border border-[#F1E4BA] px-4 py-3 mb-1"
                    >
                      <span className="block text-[15px] font-semibold leading-snug text-[#2D2D2D]">
                        {item.feature.title}
                      </span>
                    </Link>

                    {/* Subpagina's */}
                    <div className="pl-1 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobile}
                          className="block py-2 text-sm text-[#898989] hover:text-[#2D2D2D]"
                        >
                          {child.label}
                        </Link>
                      ))}
                      {item.moreHref && (
                        <Link
                          href={item.moreHref}
                          onClick={closeMobile}
                          className="flex items-center gap-1.5 py-2 text-sm font-semibold text-[#D4A835] hover:text-[#2D2D2D]"
                        >
                          {item.moreLabel}
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
                href={item.href}
                onClick={closeMobile}
                className="block py-3 text-sm font-medium text-[#545454] hover:text-[#2D2D2D] border-b border-[#F5F5F5]"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/nl/expert-advies"
              onClick={closeMobile}
              className="bg-[#EEBE3D] text-[#2D2D2D] text-sm font-bold px-5 py-3 rounded text-center hover:bg-[#D4A835] transition-colors"
            >
              Plan een gesprek
            </Link>
            <div className="flex gap-3 text-sm text-[#898989]">
              <Link href="/nl/home" className="font-bold text-[#2D2D2D]">NL</Link>
              <span>|</span>
              <Link href="/nl/home">EN</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
