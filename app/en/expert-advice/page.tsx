import type { Metadata } from "next";
import { Mail, Phone, Smartphone, CalendarDays } from "lucide-react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { HUBSPOT_PORTAL_ID, HUBSPOT_AGENDA, formulierVoor } from "@/lib/hubspot-forms";
import CTABlock from "@/components/ui/CTABlock";

export const metadata: Metadata = {
  title: "Free advice on your online gathering | MeetingMasters",
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,520px)] gap-10 lg:gap-16 items-start">
          <div className="max-w-2xl lg:pt-2">
            <p className="text-[#28A8AA] text-xs font-bold tracking-widest uppercase mb-4">
              Expert advice
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#2D2D2D] leading-[1.08] mb-6">
              Talking it through makes a difference.
            </h1>
            {/* Eén tekstgrootte voor de hele introductie, net als op de
                Nederlandse pagina. */}
            <p className="text-[#434343] text-lg leading-relaxed mb-4">
              No idea yet what you want? Or a concrete plan you find yourself
              wondering about, whether it could be done differently or better? Do
              give us a call. We think along straight away and you always get our
              honest advice. If you&rsquo;d like, we work it out into a no-obligation
              quote.
            </p>
            <p className="text-[#434343] text-lg leading-relaxed mb-10">
              Ask your question through the form, book a conversation, or simply get in touch directly.
            </p>

            {/* De directe routes staan bij de tekst, net als op de Nederlandse
                pagina. De agenda is hier gewoon een van de opties. */}
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-2">
              Rather talk to someone?
            </h2>
            <p className="text-sm text-[#434343] leading-relaxed mb-6">
              Email or call us whenever you like, a short chat is fine too.
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
                    <span className="block font-bold text-[#2D2D2D] text-sm">Pick a moment in the diary</span>
                    <span className="block text-sm text-[#434343]">Choose a time that suits you</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@meetingmasters.online"
                  className="flex items-start gap-4 rounded-lg border border-[#EBEBEB] p-5 hover:border-[#28A8AA] hover:bg-[#FAFAFA] transition-colors"
                >
                  <Mail size={22} className="text-[#28A8AA] flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="block font-bold text-[#2D2D2D] text-sm">Email us</span>
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
                    <span className="block font-bold text-[#2D2D2D] text-sm">Call us</span>
                    <span className="block text-sm text-[#434343]">
                      +31 20 239 03 13 <span className="text-[#6E6E6E] text-xs">(office)</span>
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
                    <span className="block font-bold text-[#2D2D2D] text-sm">WhatsApp / mobile</span>
                    <span className="block text-sm text-[#434343]">+31 6 4575 2819</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

            {/* The form right there in view, in its own white card. */}
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D2D] mb-2">
                Fill in the form
              </h2>
              <p className="text-sm text-[#434343] leading-relaxed mb-6">
                Leave your question or idea and we&rsquo;ll think it through. You&rsquo;re not
                committing to anything.
              </p>
              <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={formulierVoor("advies", "en")} taal="en" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABlock taal="en" />
    </div>
  );
}
