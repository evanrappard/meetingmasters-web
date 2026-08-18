import type { Metadata } from "next";
import { Mail, Phone, Smartphone, CalendarDays } from "lucide-react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { HUBSPOT_PORTAL_ID, HUBSPOT_AGENDA, formulierVoor } from "@/lib/hubspot-forms";
import CTABlock from "@/components/ui/CTABlock";

export const metadata: Metadata = {
  title: "Free advice | MeetingMasters",
  description:
    "Run your idea, design or set-up for an online gathering past us, no strings attached. You get our honest advice, with a quote alongside it if you want one.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/expert-advice",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/expert-advies",
      "en-GB": "https://www.meetingmasters.online/en/expert-advice",
    },
  },
};

export default function ExpertAdvicePage() {
  return (
    <div className="bg-white">
      {/* ── HERO / INTRO ── */}
      <section className="bg-[#F7F7F5] py-16 border-b border-[#EBEBEB]">
        <div className="max-w-content mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
              Expert advice
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-[1.08] mb-6">
              Run your idea past us, no strings attached.
            </h1>
            <p className="text-[#545454] text-lg leading-relaxed mb-4">
              We are specialists in online meetings. Do feel free to get in touch
              and try an idea out on us. You always get our honest advice, worked
              out into a no-obligation quote if that&rsquo;s what you want.
            </p>
            <p className="text-[#545454] text-base leading-relaxed">
              Whether it&rsquo;s advice with no strings attached, a second opinion on a
              design you already have, or a set-up you have in mind — what we add is
              always the same: as much personal contact, interaction and involvement
              as the occasion allows.
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
                Fill in the form
              </h2>
              <p className="text-sm text-[#545454] leading-relaxed mb-8">
                Leave your question or idea and we&rsquo;ll think it through. You&rsquo;re not
                committing to anything.
              </p>
              <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={formulierVoor("advies", "en")} />

              {/* Het formulier blijft voorop: daarin staat waar het over gaat,
                  en daardoor is het eerste gesprek meteen inhoudelijk. Wie dat
                  liever overslaat, prikt hieronder gewoon een moment. */}
              <div className="mt-8 pt-6 border-t border-[#EBEBEB]">
                <p className="text-sm text-[#545454] leading-relaxed mb-3">
                  Rather pick a moment straight away? That works too.
                </p>
                <a
                  href={HUBSPOT_AGENDA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D2D2D] border border-[#D2D2D0] rounded px-5 py-3 hover:border-[#2D2D2D] transition-colors"
                >
                  <CalendarDays size={17} className="text-[#28A8AA]" />
                  Pick a moment in the diary
                </a>
              </div>
            </div>

            {/* Directe opties */}
            <div className="lg:pt-1">
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                Rather talk to someone?
              </h2>
              <p className="text-sm text-[#545454] leading-relaxed mb-8">
                Email or call us — a quick word is fine too.
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
                        Email us
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
                        Call us
                      </span>
                      <span className="block text-sm text-[#545454]">
                        +31 20 239 03 13{" "}
                        <span className="text-[#898989] text-xs">(office)</span>
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
                        WhatsApp / mobile
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
      <CTABlock taal="en" />
    </div>
  );
}
