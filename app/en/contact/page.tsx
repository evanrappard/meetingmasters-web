import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Smartphone, MapPin } from "lucide-react";
import HubSpotForm from "@/components/ui/HubSpotForm";
import { HUBSPOT_PORTAL_ID, formulierVoor } from "@/lib/hubspot-forms";

export const metadata: Metadata = {
  title: "Contact | MeetingMasters",
  description:
    "Get in touch with MeetingMasters. Book a no-obligation conversation or a demo in our virtual office. We'd be glad to hear what you're working on.",
  alternates: {
    canonical: "https://www.meetingmasters.online/en/contact",
    languages: {
      "nl-NL": "https://www.meetingmasters.online/nl/contact",
      "en-GB": "https://www.meetingmasters.online/en/contact",
    },
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Contact</h1>
        <p className="text-accent text-xl italic font-medium max-w-xl mx-auto">
          &ldquo;Connection is where every kind of development starts.&rdquo;
        </p>
        <p className="text-[#6D6D6D] text-sm mt-2 italic">
          &ldquo;Discovery starts with being curious.&rdquo;
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-primary mb-4">
          It all starts with getting in touch.
        </h2>
        <p className="text-[#525252] leading-relaxed mb-4">
          Once we understand what a gathering is for, we can think it through with you, bring in what we know,
          guide people through it and make complicated things easy. We would like to hear from
          you.
        </p>
        <p className="text-[#525252] leading-relaxed mb-10">
          If your question doesn&rsquo;t quite fit what we do, we&rsquo;ll gladly point you somewhere
          that does.
        </p>

        {/* Contactkaart */}
        <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200 max-w-lg">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-[#444444] min-w-0">
              <Mail size={18} className="text-accent flex-shrink-0" />
              <a
                href="mailto:contact@meetingmasters.online"
                className="min-w-0 [overflow-wrap:anywhere] hover:text-accent transition-colors"
              >
                contact@meetingmasters.online
              </a>
            </li>
            <li className="flex items-center gap-3 text-[#444444] min-w-0">
              <Phone size={18} className="text-accent flex-shrink-0" />
              <a href="tel:+31202390313" className="hover:text-accent transition-colors">
                +31 20 239 03 13{" "}
                <span className="text-[#6D6D6D] text-xs">(office)</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-[#444444] min-w-0">
              <Smartphone size={18} className="text-accent flex-shrink-0" />
              <a href="tel:+31645752819" className="hover:text-accent transition-colors">
                +31 6 4575 2819{" "}
                <span className="text-[#6D6D6D] text-xs">(mobile / WhatsApp)</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-[#444444]">
              <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
              <address className="not-italic text-sm leading-relaxed">
                Schellingwouderdijk 157
                <br />
                1023 NC Amsterdam
                <br />
                The Netherlands
              </address>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/en/demo"
            className="border border-accent text-accent px-8 py-3 text-sm font-semibold rounded hover:bg-accent hover:text-white transition-colors inline-block"
          >
            Book a demo in our virtual office
          </Link>
        </div>

        {/* Formulier — de directe opties hierboven blijven daarnaast staan. */}
        <div className="mt-14 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary mb-2">Send us a message</h2>
          <p className="text-[#525252] leading-relaxed mb-8 max-w-lg">
            Rather write than call? Leave your question here and we&rsquo;ll get back to you as soon
            as we can.
          </p>
          <div className="max-w-lg">
            <HubSpotForm portalId={HUBSPOT_PORTAL_ID} formId={formulierVoor("contact", "en")} />
          </div>
        </div>
      </section>
    </div>
  );
}
