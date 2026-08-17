import type { Metadata } from "next";
import { Mail, Phone, Smartphone, CalendarDays } from "lucide-react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { HUBSPOT_FORMS, HUBSPOT_PORTAL_ID, HUBSPOT_AGENDA } from "@/lib/hubspot-forms";
import CTABlock from "@/components/ui/CTABlock";

export const metadata: Metadata = {
  title: "Vrijblijvend advies | MeetingMasters",
  description:
    "Specialisten in online meetings. Houd vrijblijvend een idee, een bestaand ontwerp of een opzet tegen ons aan — je krijgt altijd ons eerlijke advies, desgewenst in een vrijblijvende offerte.",
};

export default function ExpertAdviesPage() {
  return (
    <div className="bg-white">
      {/* ── HERO / INTRO ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
              Expert advies
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-[1.08] mb-6">
              Houd je idee vrijblijvend tegen ons aan.
            </h1>
            <p className="text-[#545454] text-lg leading-relaxed mb-4">
              Wij zijn specialisten op het gebied van online meetings. Voel je
              altijd vrij om even contact op te nemen om een idee tegen ons aan te
              houden. Je krijgt altijd ons eerlijke advies, desgewenst uitgewerkt
              in een vrijblijvende offerte.
            </p>
            <p className="text-[#545454] text-base leading-relaxed">
              Of het nu gaat om vrijblijvend advies, input op een bestaand ontwerp
              of een opzet die je voor ogen hebt — onze bijdrage ligt altijd in het
              toevoegen van maximaal persoonlijk contact en maximale interactie en
              betrokkenheid.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT-OPTIES + FORMULIER ── */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Formulier */}
            <div>
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                Vul het formulier in
              </h2>
              <p className="text-sm text-[#545454] leading-relaxed mb-8">
                Laat je vraag of idee achter, dan denken we met je mee. Je zit
                nergens aan vast.
              </p>
              <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={HUBSPOT_FORMS.advies} />

              {/* Het formulier blijft voorop: daarin staat waar het over gaat,
                  en daardoor is het eerste gesprek meteen inhoudelijk. Wie dat
                  liever overslaat, prikt hieronder gewoon een moment. */}
              <div className="mt-8 pt-6 border-t border-[#EBEBEB]">
                <p className="text-sm text-[#545454] leading-relaxed mb-3">
                  Liever meteen een moment prikken? Dat kan ook.
                </p>
                <a
                  href={HUBSPOT_AGENDA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D2D2D] border border-[#D2D2D0] rounded px-5 py-3 hover:border-[#2D2D2D] transition-colors"
                >
                  <CalendarDays size={17} className="text-[#28A8AA]" />
                  Kies een moment in de agenda
                </a>
              </div>
            </div>

            {/* Directe opties */}
            <div className="lg:pt-1">
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                Liever direct contact?
              </h2>
              <p className="text-sm text-[#545454] leading-relaxed mb-8">
                Mail of bel ons gerust — ook voor een kort overleg.
              </p>

              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:contact@meetingmasters.online"
                    className="flex items-start gap-4 rounded-lg border border-[#EBEBEB] p-5 hover:border-[#28A8AA] hover:bg-[#FAFAFA] transition-colors"
                  >
                    <Mail size={22} className="text-[#28A8AA] flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="block font-bold text-[#2D2D2D] text-sm">
                        Mail ons
                      </span>
                      <span className="block text-sm text-[#545454]">
                        contact@meetingmasters.online
                      </span>
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
                      <span className="block font-bold text-[#2D2D2D] text-sm">
                        Bel ons
                      </span>
                      <span className="block text-sm text-[#545454]">
                        +31 20 239 03 13{" "}
                        <span className="text-[#898989] text-xs">(kantoor)</span>
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
                      <span className="block font-bold text-[#2D2D2D] text-sm">
                        WhatsApp / mobiel
                      </span>
                      <span className="block text-sm text-[#545454]">
                        +31 6 4575 2819
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock />
    </div>
  );
}
