import Link from "next/link";
import { Mail, Phone, Smartphone } from "lucide-react";
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
    mailKop: "Mail ons",
    belKop: "Bel ons",
  },
  en: {
    directKop: "Rather talk to someone?",
    directTekst: "Call or email whenever you like — you'll reach one of us directly.",
    nogNiet: "Not quite ready?",
    nogNietLink: "Run your idea past us first, no strings attached →",
    adviesHref: "/en/expert-advice",
    mailKop: "Email us",
    belKop: "Call us",
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
  /**
   * Zet de directe routes (mail, telefoon, WhatsApp) in de linkerkolom onder de
   * tekst, in plaats van in een sectie onder het formulier. Zo ziet iemand die
   * liever belt dat meteen, zonder eerst langs het formulier te scrollen.
   * Zelfde opzet als de adviespagina.
   */
  directContactBijTekst?: boolean;
  taal?: Taal;
};

/**
 * Vaste opzet voor de pagina's die om één formulier draaien: rondleiding,
 * boeking en kostenindicatie.
 *
 * Het formulier staat naast de introtekst, rechts in het openingsblok. Het
 * stond eerder in een aparte sectie eronder, waardoor je eerst voorbij een
 * scherm tekst moest scrollen voor je het zag, terwijl de rechterhelft van de
 * opening leeg stond. De directe route (mail en telefoon) staat daaronder:
 * bellen mag altijd sneller zijn dan typen.
 */
export default function FormulierPagina({
  label,
  titel,
  intro,
  formulier,
  agenda = false,
  formulierKop,
  formulierUitleg,
  directContactBijTekst = false,
  taal = "nl",
}: Props) {
  const t = T[taal];
  return (
    <div className="bg-white">
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,520px)] gap-10 lg:gap-16 items-start">
            <div className="max-w-2xl lg:pt-2">
              <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
                {label}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-[1.08] mb-6">
                {titel}
              </h1>
              <div className="text-[#434343] text-lg leading-relaxed space-y-4">{intro}</div>

              {directContactBijTekst && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">{t.directKop}</h2>
                  <p className="text-sm text-[#434343] leading-relaxed mb-6">{t.directTekst}</p>
                  <ul className="space-y-4">
                    {[
                      { icoon: Mail, kop: t.mailKop, regel: "contact@meetingmasters.online", href: "mailto:contact@meetingmasters.online" },
                      { icoon: Phone, kop: t.belKop, regel: "+31 20 239 03 13", href: "tel:+31202390313" },
                      { icoon: Smartphone, kop: "WhatsApp", regel: "+31 6 4575 2819", href: "tel:+31645752819" },
                    ].map(({ icoon: Icoon, kop, regel, href }) => (
                      <li key={href}>
                        <a
                          href={href}
                          className="flex items-start gap-4 rounded-lg border border-[#EBEBEB] p-5 hover:border-[#28A8AA] hover:bg-[#FAFAFA] transition-colors"
                        >
                          <Icoon size={22} className="text-[#28A8AA] flex-shrink-0 mt-0.5" />
                          <span>
                            <span className="block font-bold text-[#2D2D2D] text-sm">{kop}</span>
                            <span className="block text-sm text-[#434343]">{regel}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Het formulier meteen in beeld, in een eigen wit kaartje. */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D2D] mb-2">{formulierKop}</h2>
              <p className="text-sm text-[#434343] leading-relaxed mb-6">{formulierUitleg}</p>
              {agenda ? (
                <HubSpotAgenda link={HUBSPOT_AGENDA} taal={taal} />
              ) : (
                <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={formulierVoor(formulier, taal)} taal={taal} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={`bg-white py-16 ${directContactBijTekst ? "hidden" : ""}`}>
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">{t.directKop}</h2>
              <p className="text-sm text-[#434343] leading-relaxed mb-8">{t.directTekst}</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#434343]">
                  <Mail size={18} className="text-[#28A8AA] shrink-0" />
                  <a
                    href="mailto:contact@meetingmasters.online"
                    className="hover:text-[#28A8AA] transition-colors"
                  >
                    contact@meetingmasters.online
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[#434343]">
                  <Phone size={18} className="text-[#28A8AA] shrink-0" />
                  <a href="tel:+31202390313" className="hover:text-[#28A8AA] transition-colors">
                    +31 20 239 03 13
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:pt-1">
              <p className="text-sm text-[#434343] leading-relaxed">
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
