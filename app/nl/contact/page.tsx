import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Smartphone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | MeetingMasters",
  description:
    "Get in touch with MeetingMasters. Plan a free consultation or book a demo in our virtual office.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-gray-50 py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact</h1>
        <p className="text-accent text-xl italic font-medium max-w-xl mx-auto">
          &ldquo;Connection is the starting point of all development.&rdquo;
        </p>
        <p className="text-[#888888] text-sm mt-2 italic">
          &ldquo;Discovery is the starting point of curiosity.&rdquo;
        </p>
      </div>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-primary mb-4">
          It all starts with contact.
        </h2>
        <p className="text-[#666666] leading-relaxed mb-4">
          Understanding a meeting&apos;s purpose enables us to brainstorm, bring
          in our expertise, guide people, and make difficult things easy. We are
          looking forward to hearing from you.
        </p>
        <p className="text-[#666666] leading-relaxed mb-10">
          If your request doesn&apos;t quite align with what we offer? We&apos;re
          happy to redirect you.
        </p>

        {/* Contact card */}
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
                <span className="text-[#888888] text-xs">(office)</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-[#555555]">
              <Smartphone size={18} className="text-accent flex-shrink-0" />
              <a href="tel:+31645752819" className="hover:text-accent transition-colors">
                +31 6 4575 2819{" "}
                <span className="text-[#888888] text-xs">(app / WhatsApp)</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-[#555555]">
              <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
              <address className="not-italic text-sm leading-relaxed">
                Schellingwouderdijk 157
                <br />
                1023NC Amsterdam
                <br />
                the Netherlands
              </address>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:contact@meetingmasters.online"
            className="bg-accent text-white px-8 py-3 text-sm font-semibold rounded hover:bg-accent-dark transition-colors inline-block"
          >
            Plan a free consultation
          </a>
          <Link
            href="/nl/contact"
            className="border border-accent text-accent px-8 py-3 text-sm font-semibold rounded hover:bg-accent hover:text-white transition-colors inline-block"
          >
            Book a demo in our virtual office
          </Link>
        </div>
      </section>
    </div>
  );
}
