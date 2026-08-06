import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { HUBSPOT_PORTAL_ID, type HubSpotFormKey, HUBSPOT_FORMS } from "@/lib/hubspot-forms";

type Props = {
  /** Klein kopje boven de titel. */
  label: string;
  titel: string;
  /** Eén of twee alinea's onder de titel. */
  intro: React.ReactNode;
  formulier: HubSpotFormKey;
  /** Kop boven het formulier. */
  formulierKop: string;
  /** Regel onder die kop. */
  formulierUitleg: string;
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
  formulierKop,
  formulierUitleg,
}: Props) {
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
              <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORMS[formulier]} />
            </div>

            <div className="lg:pt-1">
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">Liever direct contact?</h2>
              <p className="text-sm text-[#545454] leading-relaxed mb-8">
                Bellen of mailen mag altijd. Je krijgt gewoon een van ons aan de lijn.
              </p>
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
                Nog niet zover?{" "}
                <Link
                  href="/nl/expert-advies"
                  className="text-[#28A8AA] font-semibold hover:text-[#D4A835] transition-colors"
                >
                  Houd je idee eerst vrijblijvend tegen ons aan →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
