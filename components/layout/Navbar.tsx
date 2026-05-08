"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Events",
    href: "/en/events",
    children: [
      { label: "Strategy Day", href: "/en/events/strategy-day" },
      { label: "Virtual Christmas Party", href: "/en/events/christmas-party" },
      { label: "Kick-off", href: "/en/events/kick-off" },
      { label: "Community Event", href: "/en/events/community-event" },
      { label: "All-hands Meeting", href: "/en/events/all-hands" },
      { label: "All event formats →", href: "/en/events" },
    ],
  },
  { label: "Remote Office", href: "/en/remote-office" },
  {
    label: "Games & Tools",
    href: "/en/games-tools",
    children: [
      { label: "EscapeMasters", href: "/en/games-tools/escape-masters" },
      { label: "R@venHack: Cyber Security", href: "/en/games-tools/ravenhack" },
      { label: "Onboarding Game", href: "/en/games-tools/onboarding" },
    ],
  },
  { label: "Cases", href: "/en/cases" },
  {
    label: "About",
    href: "/en/about",
    children: [
      { label: "Our Team", href: "/en/about/team" },
      { label: "Quality & Confidentiality", href: "/en/about/quality" },
      { label: "Partners", href: "/en/about/partners" },
      { label: "CSR", href: "/en/about/csr" },
    ],
  },
  { label: "Blog", href: "/en/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/en/home" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="MeetingMasters Online"
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-[#333333] hover:text-accent transition-colors py-2"
                >
                  {item.label}
                  <ChevronDown size={13} className="opacity-60" />
                </Link>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded shadow-lg min-w-[220px] py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[#333333] hover:text-accent hover:bg-gray-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#333333] hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1 text-xs text-[#666666]">
            <Link href="/nl/home" className="hover:text-accent transition-colors">NL</Link>
            <span>|</span>
            <Link href="/en/home" className="font-semibold text-accent">EN</Link>
          </div>
          <Link
            href="/en/contact"
            className="hidden lg:inline-block bg-accent text-white text-sm font-semibold px-5 py-2 rounded hover:bg-accent-dark transition-colors"
          >
            Plan a demo
          </Link>
          <button
            className="lg:hidden text-[#333333]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="w-full flex justify-between items-center py-3 text-sm font-medium text-[#333333]"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div className="pl-4 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-[#666666] hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-[#333333] hover:text-accent border-b border-gray-100"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/en/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-accent text-white text-sm font-semibold px-5 py-3 rounded text-center hover:bg-accent-dark transition-colors"
            >
              Plan a demo
            </Link>
            <div className="flex gap-3 text-sm text-[#666666]">
              <Link href="/nl/home">NL</Link>
              <span>|</span>
              <Link href="/en/home" className="font-semibold text-accent">EN</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
