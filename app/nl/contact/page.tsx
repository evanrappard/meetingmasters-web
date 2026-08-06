import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Smartphone, MapPin } from "lucide-react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { HUBSPOT_FORMS, HUBSPOT_PORTAL_ID } from "@/lib/hubspot-forms";

export const metadata: Metadata = {
  title: "Contact | MeetingMasters",
  description:
    "Neem contact op met MeetingMasters. Plan een vrijblijvend gesprek of boek een demo in ons virtuele kantoor.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact</h1>
        <p className="text-accent text-xl italic font-medium max-w-xl mx-auto">
          &ldquo;Verbinding is het vertrekpunt van elke ontwikkeling.&rdquo;
        </p>
        <p className="text-[#888888] text-sm mt-2 italic">
          &ldquo;Ontdekken begint bij nieuwsgierigheid.&rdquo;
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Het begint allemaal met contact.
        </h2>
        <p className="text-[#666666] leading-relaxed mb-4">
          Als we het doel van een bijeenkomst begrijpen, kunnen we meedenken,
          onze expertise inbrengen, mensen begeleiden en ingewikkelde dingen
          makkelijk maken. We horen graag van je.
        </p>
        <p className="text-[#666666] leading-relaxed mb-10">
          Past je vraag niet helemaal bij wat wij doen? Dan verwijzen we je graag
          verder.
        </p>

        {/* Contactkaart */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200 max-w-lg">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-[#555555]">
              <Mail size={18} className="text-accent flex-shrink-0" />
              <a
                href="mailto:contact@meetingmasters.online"
                className="hover:text-accent transition-colors"
              >
                contact@meetingmasters.online
              </a>
            </li>
            <li className="flex items-center gap-3 text-[#555555]">
              <Phone size={18} className="text-accent flex-shrink-0" />
              <a href="tel:+31202390313" className="hover:text-accent transition-colors">
                +31 20 239 03 13{" "}
                <span className="text-[#888888] text-xs">(kantoor)</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-[#555555]">
              <Smartphone size={18} className="text-accent flex-shrink-0" />
              <a href="tel:+31645752819" className="hover:text-accent transition-colors">
                +31 6 4575 2819{" "}
                <span className="text-[#888888] text-xs">(mobiel / WhatsApp)</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-[#555555]">
              <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
              <address className="not-italic text-sm leading-relaxed">
                Schellingwouderdijk 157
                <br />
                1023 NC Amsterdam
                <br />
                Nederland
              </address>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/nl/demo"
            className="border border-accent text-accent px-8 py-3 text-sm font-semibold rounded hover:bg-accent hover:text-white transition-colors inline-block"
          >
            Boek een demo in ons virtuele kantoor
          </Link>
        </div>

        {/* Formulier — de directe opties hierboven blijven daarnaast staan. */}
        <div className="mt-14 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-2">Stuur ons een bericht</h2>
          <p className="text-[#666666] leading-relaxed mb-8 max-w-lg">
            Liever schrijven dan bellen? Laat je vraag hier achter, dan reageren we zo snel
            mogelijk.
          </p>
          <div className="max-w-lg">
            <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORMS.contact} />
          </div>
        </div>
      </section>
    </div>
  );
}
