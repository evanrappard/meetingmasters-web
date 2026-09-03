import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import { Mail, Phone, Smartphone, CalendarDays } from "lucide-react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { HUBSPOT_FORMS, HUBSPOT_PORTAL_ID, HUBSPOT_AGENDA } from "@/lib/hubspot-forms";
import AgendaUitleg from "@/components/ui/AgendaUitleg";
import CTABlock from "@/components/ui/CTABlock";
import { FORMULIERVORM } from "@/lib/hubspot-vorm";

export const metadata: Metadata = {
  alternates: taalAlternates("/expert-advies"),
  title: "Vrijblijvend advies | MeetingMasters",
  description:
    "Houd je idee, ontwerp of opzet voor een online bijeenkomst vrijblijvend tegen ons aan. Je krijgt ons eerlijke advies, desgewenst met een offerte erbij.",
};

export default function ExpertAdviesPage() {
  return (
    <div className="bg-white">
      {/* ── HERO / INTRO ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,520px)] gap-10 lg:gap-16 items-start">
          <div className="max-w-2xl lg:pt-2">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
              Vrijblijvend advies
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-[1.08] mb-6">
              Even sparren maakt veel verschil.
            </h1>
            {/* Eén tekstgrootte voor de hele introductie: de tweede alinea stond
                eerder kleiner, en dat las als een voetnoot in plaats van als
                doorlopende tekst. */}
            <p className="text-[#434343] text-lg leading-relaxed mb-4">
              Nog geen idee wat je precies wilt? Of juist een concreet plan waarvan
              je je afvraagt of het ook anders of beter kan? Bel ons gerust. Wij
              denken direct mee en je krijgt altijd ons eerlijke advies. Desgewenst
              werken we dat uit in een vrijblijvende offerte.
            </p>
            <p className="text-[#434343] text-lg leading-relaxed mb-10">
              Stel je vraag via het formulier, plan gewoon een gesprek of neem direct contact met ons op.
            </p>

            {/* De directe routes staan bij de tekst, niet in een sectie onder het
                formulier: wie liever belt of meteen een moment prikt, hoort dat
                te zien zonder eerst langs het formulier te scrollen. De agenda
                is hier gewoon een van de opties. */}
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">
              Liever direct contact?
            </h2>
            <p className="text-sm text-[#434343] leading-relaxed mb-6">
              Mail of bel ons gerust, ook voor een kort overleg.
            </p>

            <ul className="space-y-4">
              <li>
                <a
                  href={HUBSPOT_AGENDA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-lg border border-[#EBEBEB] p-5 hover:border-[#28A8AA] hover:bg-[#FAFAFA] transition-colors"
                >
                  <CalendarDays size={22} className="text-[#28A8AA] flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="block font-bold text-[#2D2D2D] text-sm">Kies een moment in de agenda</span>
                    <span className="block text-sm text-[#434343]">Je prikt zelf een tijd die je uitkomt</span>
                  </span>
                </a>
              </li>
              <li>
                {/* De link hierboven opent HubSpots eigen boekingspagina in een
                    nieuw tabblad; onze uitleg gaat daar niet mee. Daarom staat
                    hij hier, vóór de klik. */}
                <AgendaUitleg taal="nl" />
              </li>
              <li>
                <a
                  href="mailto:contact@meetingmasters.online"
                  className="flex items-start gap-4 rounded-lg border border-[#EBEBEB] p-5 hover:border-[#28A8AA] hover:bg-[#FAFAFA] transition-colors"
                >
                  <Mail size={22} className="text-[#28A8AA] flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="block font-bold text-[#2D2D2D] text-sm">Mail ons</span>
                    <span className="block text-sm text-[#434343]">contact@meetingmasters.online</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+31202390313"
                  className="flex items-start gap-4 rounded-lg border border-[#EBEBEB] p-5 hover:border-[#28A8AA] hover:bg-[#FAFAFA] transition-colors"
                >
                  <Phone size={22} className="text-[#28A8AA] flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="block font-bold text-[#2D2D2D] text-sm">Bel ons</span>
                    <span className="block text-sm text-[#434343]">
                      +31 20 239 03 13 <span className="text-[#6E6E6E] text-xs">(kantoor)</span>
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+31645752819"
                  className="flex items-start gap-4 rounded-lg border border-[#EBEBEB] p-5 hover:border-[#28A8AA] hover:bg-[#FAFAFA] transition-colors"
                >
                  <Smartphone size={22} className="text-[#28A8AA] flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="block font-bold text-[#2D2D2D] text-sm">WhatsApp / mobiel</span>
                    <span className="block text-sm text-[#434343]">+31 6 4575 2819</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

            {/* Het formulier meteen in beeld, in een eigen wit kaartje. Stond
                eerder in een sectie hieronder, waardoor je er eerst een scherm
                tekst voorbij moest scrollen terwijl deze helft leeg stond. */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D2D] mb-2">
                Vul het formulier in
              </h2>
              <p className="text-sm text-[#434343] leading-relaxed mb-6">
                Laat je vraag of idee achter, dan denken we met je mee. Je zit
                nergens aan vast.
              </p>
              <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORMS.advies} taal="nl" stijl={FORMULIERVORM} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock />
    </div>
  );
}
