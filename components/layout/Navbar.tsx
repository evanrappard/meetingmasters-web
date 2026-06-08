"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

type NavChild = { label: string; href: string; separator?: false } | { separator: true };

const navItems: {
  label: string;
  href: string;
  children?: NavChild[];
}[] = [
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Strategiedag", href: "/events" },
      { label: "Virtuele kerstborrel", href: "/events" },
      { label: "Kick-off", href: "/events" },
      { label: "Community-event", href: "/events" },
      { label: "All-hands", href: "/events" },
      { label: "Alle eventformats →", href: "/events" },
    ],
  },
  {
    label: "Virtual Office",
    href: "/virtual-office",
    children: [
      { label: "Huur een kantoor", href: "/virtual-office/huur" },
      { label: "Bouw je eigen kantoor", href: "/virtual-office/bouw" },
      { label: "Kantoor als cultuurmoment", href: "/virtual-office/cultuur" },
    ],
  },
  {
    label: "Games",
    href: "/games",
    children: [
      { label: "R@venHack: Cybersecurity", href: "/games/ravenhack" },
      { label: "Maatwerkgames", href: "/games/maatwerk" },
      { separator: true },
      { label: "Wheel of Fortune", href: "/games/tools/wheel-of-fortune" },
      { label: "Inspiration Cards", href: "/games/tools/inspiration-cards" },
      { label: "Bingo", href: "/games/tools/bingo" },
      { label: "Storytelling", href: "/games/tools/storytelling" },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    children: [
      { label: "SpatialChat", href: "/technology/spatialchat" },
      { label: "Hoe het werkt", href: "/technology/hoe-het-werkt" },
      { label: "FAQ", href: "/technology/faq" },
      { label: "Helpdesk", href: "/technology/helpdesk" },
    ],
  },
  { label: "Inspiratie", href: "/nl/inspiratie" },
  {
    label: "Over ons",
    href: "/nl/about",
    children: [
      { label: "Ons team", href: "/nl/about/team" },
      { label: "Kwaliteit & vertrouwelijkheid", href: "/nl/about/quality" },
      { label: "Partners", href: "/nl/about/partners" },
    ],
  },
  { label: "Blog", href: "/nl/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
            {navItems.map((item) =>
              item.children ? (
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
                    <div className="absolute top-full left-0 mt-0 bg-white border border-[#EBEBEB] rounded shadow-lg min-w-[220px] py-1 z-50">
                      {item.children.map((child, idx) =>
                        child.separator ? (
                          <div key={`sep-${idx}`} className="mx-5 my-1 border-t border-[#F0F0F0]">
                            <span className="block text-[9px] font-bold tracking-[0.2em] uppercase text-[#CCCCCC] pt-2 pb-0.5">Tools</span>
                          </div>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-[#545454] hover:text-[#2D2D2D] hover:bg-[#FAFAFA] transition-colors"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[15px] font-medium text-[#545454] hover:text-[#EEBE3D] hover:font-bold transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#898989]">
              <Link href="/nl/home" className="font-bold text-[#2D2D2D]">NL</Link>
              <span>|</span>
              <Link href="/nl/home" className="hover:text-[#545454] transition-colors">EN</Link>
            </div>
            <Link
              href="/contact"
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
            item.children ? (
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
                  <div className="pl-4 space-y-1 pb-2">
                    {item.children.map((child, idx) =>
                      child.separator ? (
                        <div key={`msep-${idx}`} className="pt-2 pb-1">
                          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#CCCCCC]">Tools</span>
                        </div>
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-[#898989] hover:text-[#2D2D2D]"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-[#545454] hover:text-[#2D2D2D] border-b border-[#F5F5F5]"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/nl/contact"
              onClick={() => setMobileOpen(false)}
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
