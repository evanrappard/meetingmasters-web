import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-[#CCCCCC]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="MeetingMasters Online"
              width={140}
              height={35}
              className="h-8 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-sm leading-relaxed text-[#AAAAAA]">
              We bring inspiration, innovation, and a human touch to the domain
              of online meetings, virtual events, and remote working.
            </p>
            <p className="text-sm font-semibold text-white">
              We make more of meetings. We are MeetingMasters.
            </p>
            <a
              href="https://www.linkedin.com/company/meetingmasters-online"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-block text-[#CCCCCC] hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Col 2 — Organisation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Organisation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Team", href: "/en/team" },
                { label: "Partners", href: "/en/partners" },
                { label: "Vacancies", href: "/nl/vacatures" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Library */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Library
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Meeting Masters Manifest", href: "/MM-Manifest-UK.pdf" },
                { label: "Quality commitment", href: "/en/quality" },
                { label: "Downloads", href: "/en/downloads" },
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
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
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
                  +31 20 239 03 13{" "}
                  <span className="text-[#888888] text-xs">(office)</span>
                </a>
              </li>
              <li>
                <a href="tel:+31633034707" className="hover:text-white transition-colors">
                  +31 6 33034707{" "}
                  <span className="text-[#888888] text-xs">(in-meeting)</span>
                </a>
              </li>
              <li className="text-[#888888] text-xs leading-relaxed pt-1">
                Schellingwouderdijk 157
                <br />
                1023NC Amsterdam
                <br />
                the Netherlands
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#444444] px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-center text-xs text-[#666666]">
          © 2025 MeetingMasters Online
        </p>
      </div>
    </footer>
  );
}
