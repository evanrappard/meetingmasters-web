import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import HubSpotAgenda from "@/components/ui/HubSpotAgenda";
import { HUBSPOT_PORTAL_ID, type HubSpotFormKey, HUBSPOT_AGENDA, formulierVoor } from "@/lib/hubspot-forms";
import type { Taal } from "@/lib/talen";

/** De vaste teksten naast het formulier, per taal. */
const T = {
  nl: {
    directKop: "Liever direct contact?",
    directTekst: "Bellen of mailen mag altijd. Je krijgt gewoon een van ons aan de lijn.",
    nogNiet: "Nog niet zover?",
    nogNietLink: "Houd je idee eerst vrijblijvend tegen ons aan →",
    adviesHref: "/nl/expert-advies",
  },
  en: {
    directKop: "Rather talk to someone?",
    directTekst: "Call or email whenever you like — you'll reach one of us directly.",
    nogNiet: "Not quite ready?",
    nogNietLink: "Run your idea past us first, no strings attached →",
    adviesHref: "/en/expert-advice",
  },
} as const;

type Props = {
  /** Klein kopje boven de titel. */
  label: string;
  titel: string;
  /** Eén of twee alinea's onder de titel. */
  intro: React.ReactNode;
  formulier: HubSpotFormKey;
  /**
   * Toon de agenda in plaats van het formulier. Voor korte, vaste afspraken
   * zoals een rondleiding: zelf een moment kiezen is sneller dan een
   * voorkeursmoment opgeven en op antwoord wachten.
   */
  agenda?: boolean;
  /** Kop boven het formulier. */
  formulierKop: string;
  /** Regel onder die kop. */
  formulierUitleg: string;
  taal?: Taal;
};

/**
 * Vaste opzet voor de pagina's die om één formulier draaien: rondleiding,
 * boeking en kostenindicatie. Het formulier staat links, de directe route
 * (mail en telefoon) daarnaast — bellen mag altijd sneller zijn dan typen.
 */
export default function FormulierPagina({
  label,
  titel,
  intro,
  formulier,
  agenda = false,
  formulierKop,
  formulierUitleg,
  taal = "nl",
}: Props) {
  const t = T[taal];
  return (
    <div className="bg-white">
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
              {label}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-[1.08] mb-6">
              {titel}
            </h1>
            <div className="text-[#545454] text-lg leading-relaxed space-y-4">{intro}</div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">{formulierKop}</h2>
              <p className="text-sm text-[#545454] leading-relaxed mb-8">{formulierUitleg}</p>
              {agenda ? (
                <HubSpotAgenda link={HUBSPOT_AGENDA} taal={taal} />
              ) : (
                <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={formulierVoor(formulier, taal)} />
              )}
            </div>

            <div className="lg:pt-1">
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">{t.directKop}</h2>
              <p className="text-sm text-[#545454] leading-relaxed mb-8">{t.directTekst}</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#545454]">
                  <Mail size={18} className="text-[#28A8AA] shrink-0" />
                  <a
                    href="mailto:contact@meetingmasters.online"
                    className="hover:text-[#28A8AA] transition-colors"
                  >
                    contact@meetingmasters.online
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[#545454]">
                  <Phone size={18} className="text-[#28A8AA] shrink-0" />
                  <a href="tel:+31202390313" className="hover:text-[#28A8AA] transition-colors">
                    +31 20 239 03 13
                  </a>
                </li>
              </ul>

              <p className="text-sm text-[#545454] leading-relaxed mt-10">
                {t.nogNiet}{" "}
                <Link
                  href={t.adviesHref}
                  className="text-[#28A8AA] font-semibold hover:text-[#D4A835] transition-colors"
                >
                  {t.nogNietLink}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
