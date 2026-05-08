"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";

const navItems = [
  { label: "STRATEGY & CONCEPT", href: "/en/strategy-concept" },
  { label: "PLANNING & SUPPORT", href: "/en/planning-support" },
  { label: "FORMATS", href: "/en/meeting-formats" },
  {
    label: "CLIENTS",
    href: "#",
    children: [
      { label: "Testimonials", href: "/en/testimonials" },
      { label: "CSR", href: "/en/csr" },
      { label: "Blog", href: "/en/blog" },
    ],
  },
  { label: "ESCAPE ROOM", href: "/en/escape-rooms" },
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
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-[#333333] hover:text-accent transition-colors tracking-wide">
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-md min-w-[160px] py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[#333333] hover:text-accent hover:bg-gray-50 transition-colors"
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
                className="text-sm font-medium text-[#333333] hover:text-accent transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-1 text-xs text-[#666666]">
            <Link href="/nl/home" className="hover:text-accent">NL</Link>
            <span>|</span>
            <Link href="/en/home" className="font-semibold text-accent">EN</Link>
          </div>
          <button aria-label="Cart" className="text-[#666666] hover:text-accent transition-colors">
            <ShoppingCart size={20} />
          </button>
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
          <div className="flex gap-3 pt-3 text-sm text-[#666666]">
            <Link href="/nl/home">NL</Link>
            <span>|</span>
            <Link href="/en/home" className="font-semibold text-accent">EN</Link>
          </div>
        </div>
      )}
    </header>
  );
}
