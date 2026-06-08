import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-[#AAAAAA]">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Merk */}
          <div className="space-y-5">
            <Image
              src="/images/logo-diapositief.webp"
              alt="MeetingMasters Online — specialist in online bijeenkomsten voor groepen van 50 tot 500 mensen"
              width={140}
              height={36}
              className="h-9 w-auto"
            />
            <p className="text-sm leading-relaxed text-[#898989]">
              Wij ontwerpen online bijeenkomsten die mensen bijblijven — events, virtual offices en interactieve formats voor groepen van 50 tot 500 mensen.
            </p>
            <p className="text-sm font-semibold text-[#EEBE3D]">
              Mensen maken meetings.
            </p>
            <a
              href="https://www.linkedin.com/company/meetingmasters-online"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-block text-[#898989] hover:text-[#EEBE3D] transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Col 2 — Diensten */}
          <div>
            <h4 className="text-[#EEBE3D] text-xs font-bold mb-5 uppercase tracking-widest">
              Diensten
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Events", href: "/nl/events" },
                { label: "Remote Office", href: "/nl/remote-office" },
                { label: "Games & Tools", href: "/nl/games-tools" },
                { label: "Cases", href: "/nl/cases" },
                { label: "Publicaties", href: "/nl/publicaties" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Organisatie */}
          <div>
            <h4 className="text-[#EEBE3D] text-xs font-bold mb-5 uppercase tracking-widest">
              Organisatie
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Over ons", href: "/nl/about" },
                { label: "Blog", href: "/nl/blog" },
                { label: "Partners", href: "/nl/about/partners" },
                { label: "Kwaliteit & vertrouwelijkheid", href: "/nl/about/quality" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-[#EEBE3D] text-xs font-bold mb-5 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@meetingmasters.online"
                  className="hover:text-white transition-colors"
                >
                  contact@meetingmasters.online
                </a>
              </li>
              <li>
                <a href="tel:+31202390313" className="hover:text-white transition-colors">
                  +31 20 239 03 13
                  <span className="text-[#666666] text-xs ml-1">(kantoor)</span>
                </a>
              </li>
              <li>
                <a href="tel:+31645752819" className="hover:text-white transition-colors">
                  +31 6 4575 2819
                  <span className="text-[#666666] text-xs ml-1">(WhatsApp)</span>
                </a>
              </li>
              <li className="text-[#AAAAAA] text-xs leading-relaxed pt-1">
                Schellingwouderdijk 157<br />
                1023NC Amsterdam<br />
                Nederland
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3D3D3D] px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-[#555555]">© 2026 MeetingMasters Online</p>
        <p className="text-xs text-[#555555]">Amsterdam, Nederland</p>
      </div>
    </footer>
  );
}
