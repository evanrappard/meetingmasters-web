import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import LastUpdated from "@/components/ui/LastUpdated";
import { BEDRIJF } from "@/lib/bedrijfsgegevens";
import { navPerGroep, FOOTER_EXTRA, FOOTER_JURIDISCH, kies, type Taal } from "@/lib/navigatie";

/**
 * De losse teksten in de footer, per taal. De links komen uit lib/navigatie.ts,
 * zodat menu en footer niet uit elkaar kunnen lopen.
 *
 * De taal komt uit de layout (app/en/layout.tsx geeft "en" mee). Daarmee blijft
 * de footer een servercomponent: geen extra JavaScript in de browser alleen om
 * te weten in welke taal we staan.
 */
const T = {
  nl: {
    logoAlt:
      "MeetingMasters Online — specialist in online bijeenkomsten voor groepen van 50 tot 500 mensen",
    over:
      "Wij ontwerpen online bijeenkomsten die mensen bijblijven — events, virtual offices en interactieve formats voor groepen van 50 tot 500 mensen.",
    slogan: "Mensen maken meetings.",
    diensten: "Diensten",
    organisatie: "Organisatie",
    contact: "Contact",
    kantoor: "(kantoor)",
    whatsapp: "(WhatsApp)",
    land: "Nederland",
    plaats: "Amsterdam, Nederland",
    bijgewerkt: "juni 2026",
  },
  en: {
    logoAlt:
      "MeetingMasters Online — specialists in online gatherings for groups of 50 to 500 people",
    over:
      "We design online gatherings people remember — events, virtual offices and interactive formats for groups of 50 to 500 people.",
    slogan: "People make meetings.",
    diensten: "Services",
    organisatie: "Company",
    contact: "Contact",
    kantoor: "(office)",
    whatsapp: "(WhatsApp)",
    land: "The Netherlands",
    plaats: "Amsterdam, The Netherlands",
    bijgewerkt: "June 2026",
  },
} as const;

export default function Footer({ taal = "nl" }: { taal?: Taal }) {
  const t = T[taal];

  return (
    <footer className="bg-[#2D2D2D] text-[#AAAAAA]">
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Merk */}
          <div className="space-y-5">
            <Image
              src="/images/logo-diapositief.webp"
              alt={t.logoAlt}
              width={227}
              height={83}
              className="h-9 w-auto"
            />
            <p className="text-sm leading-relaxed text-[#898989]">{t.over}</p>
            <p className="text-sm font-semibold text-[#EEBE3D]">{t.slogan}</p>
            <a
              href="https://www.linkedin.com/company/meetingmastersonline"
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
              {t.diensten}
            </h4>
            <ul className="space-y-3 text-sm">
              {navPerGroep("diensten").map((item) => {
                const l = kies(item, taal);
                return (
                  <li key={item.href}>
                    <Link href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3 — Organisatie */}
          <div>
            <h4 className="text-[#EEBE3D] text-xs font-bold mb-5 uppercase tracking-widest">
              {t.organisatie}
            </h4>
            <ul className="space-y-3 text-sm">
              {[...navPerGroep("organisatie"), ...FOOTER_EXTRA].map((item) => {
                const l = kies(item, taal);
                return (
                  <li key={item.href}>
                    <Link href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-[#EEBE3D] text-xs font-bold mb-5 uppercase tracking-widest">
              {t.contact}
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
                  <span className="text-[#666666] text-xs ml-1">{t.kantoor}</span>
                </a>
              </li>
              <li>
                <a href="tel:+31645752819" className="hover:text-white transition-colors">
                  +31 6 4575 2819
                  <span className="text-[#666666] text-xs ml-1">{t.whatsapp}</span>
                </a>
              </li>
              <li className="text-[#AAAAAA] text-xs leading-relaxed pt-1">
                Schellingwouderdijk 157<br />
                1023NC Amsterdam<br />
                {t.land}
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="border-t border-[#3D3D3D] px-6 lg:px-10 py-5 flex flex-col lg:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#555555] text-center lg:text-left">
          © 2026 {BEDRIJF.naam}
          {BEDRIJF.kvk && <> · KvK {BEDRIJF.kvk}</>}
          {BEDRIJF.btw && <> · {taal === "en" ? "VAT" : "Btw"} {BEDRIJF.btw}</>}
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
          {FOOTER_JURIDISCH.map((item) => {
            const l = kies(item, taal);
            return (
              <Link
                key={item.href}
                href={l.href}
                className="text-[#777777] hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LastUpdated date={t.bijgewerkt} taal={taal} />
          <p className="text-xs text-[#555555]">{t.plaats}</p>
        </div>
      </div>
    </footer>
  );
}
