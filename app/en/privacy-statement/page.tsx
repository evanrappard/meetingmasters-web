import type { Metadata } from "next";
import Link from "next/link";
import JuridischePagina, { Blok, Lijst } from "@/components/ui/JuridischePagina";
import { ADRES_REGEL, BEDRIJF } from "@/lib/bedrijfsgegevens";

const SITE = "https://www.meetingmasters.online";

/**
 * De Engelse privacyverklaring. Eigen bestand, net als de cookieverklaring:
 * juridische tekst moet per taal nagelezen kunnen worden. De opbouw volgt
 * app/nl/privacy-statement blok voor blok.
 */
export const metadata: Metadata = {
  title: "Privacy statement | MeetingMasters",
  description:
    "What MeetingMasters does with your data: which data we process, why, how long we keep it and which rights you have.",
  alternates: {
    canonical: `${SITE}/en/privacy-statement`,
    languages: {
      "nl-NL": `${SITE}/nl/privacy-statement`,
      "en-GB": `${SITE}/en/privacy-statement`,
    },
  },
};

export default function PrivacyStatementPage() {
  return (
    <JuridischePagina
      taal="en"
      titel="Privacy statement"
      intro="If you visit our website or take part in a gathering we host, we process a number of personal details. We handle those carefully, because privacy matters."
    >
      <Blok kop="Who we are">
        <p>
          {BEDRIJF.naam} is responsible for the personal data we process for running our
          own business — through this website, for instance, and in our contact with
          clients. At gatherings we also process personal data on behalf of our clients. In
          those cases it is the client who decides what the data is used for and how. You
          will find us at {ADRES_REGEL}.
        </p>
        <p>
          Do you have a question about your data? Email{" "}
          <a
            href={`mailto:${BEDRIJF.email}`}
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            {BEDRIJF.email}
          </a>{" "}
          or call{" "}
          <a
            href={BEDRIJF.telefoonHref}
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            {BEDRIJF.telefoon}
          </a>
          . You will get an answer from us, not a form letter.
        </p>
        {(BEDRIJF.kvk || BEDRIJF.btw) && (
          <p>
            {BEDRIJF.kvk && <>Chamber of Commerce number {BEDRIJF.kvk}. </>}
            {BEDRIJF.btw && <>VAT number {BEDRIJF.btw}.</>}
          </p>
        )}
      </Blok>

      <Blok kop="Privacy for participants in gatherings">
        <p>
          Many clients ask for screenshots or recordings of the gatherings we host.
          Participants are told at the start of the gathering, including what the
          recording will be used for. Recordings we make for a client are kept for a year
          at most. After that we remove them from the server.
        </p>
        <p>
          Our client decides what happens to a recording afterwards; we make it on their
          instruction. If you would rather not appear on camera or be recorded, let the
          organiser or us know — we always find a way around it.
        </p>
        <p>
          Every gathering is covered by the confidentiality declaration that all Meeting
          Masters have signed. If more is needed, we are glad to draw up a separate
          non-disclosure agreement between {BEDRIJF.naam} and the organising party.
        </p>
        <p>
          Gatherings run on platforms such as Zoom, Microsoft Teams and SpatialChat. Those
          parties also process participant data themselves, such as the name you log in
          with and your IP address. Their own privacy policies apply to that.
        </p>
      </Blok>

      <Blok kop="Which data we process from website visitors">
        <Lijst>
          <li>
            <strong className="text-dark-grey">If you fill in a form</strong>, we keep your
            name, organisation, email address, your telephone number if you give it, and
            what you write to us.
          </li>
          <li>
            <strong className="text-dark-grey">If you sign up for the newsletter</strong>,
            we keep your name and email address.
          </li>
          <li>
            <strong className="text-dark-grey">If you email or call us</strong>, we keep
            what you share yourself, so that we can answer your question. If you reach us
            through WhatsApp, bear in mind that Meta, as the provider of WhatsApp, also
            processes your data itself, under its own policy.
          </li>
          <li>
            <strong className="text-dark-grey">If you visit the site</strong>, our hosting
            provider records technical data in log files, including your IP address. We use
            those to trace faults and to keep the site secure.
          </li>
        </Lijst>
        <p>
          If you leave no details, we cannot answer your question and cannot send a
          newsletter. You are of course free to email or call us directly instead.
        </p>
      </Blok>

      <Blok kop="Why we do that, and on what legal basis">
        <Lijst>
          <li>
            <strong className="text-dark-grey">To answer your question and make a
            proposal</strong> — necessary for carrying out an assignment or the run-up to
            one.
          </li>
          <li>
            <strong className="text-dark-grey">To send the newsletter</strong> — with your
            consent. Every newsletter carries an unsubscribe link at the bottom. We do
            measure whether a newsletter is opened and what is clicked, so that we can see
            which subjects readers find interesting.
          </li>
          <li>
            <strong className="text-dark-grey">To make recordings and screenshots</strong>{" "}
            — on the instruction of the organising party, who determines the legal basis
            for it. Participants are informed beforehand.
          </li>
          <li>
            <strong className="text-dark-grey">To keep the site secure and
            working</strong> — our legitimate interest in preventing misuse and faults.
          </li>
          <li>
            <strong className="text-dark-grey">To keep our records</strong> — because the
            law requires it of us.
          </li>
        </Lijst>
      </Blok>

      <Blok kop="How long we keep it">
        <p>
          We do not keep your data longer than necessary. Statutory retention periods we
          of course respect.
        </p>
        <Lijst>
          <li>Contact details: up to a year after the last contact.</li>
          <li>Newsletter sign-up: until you unsubscribe.</li>
          <li>Recordings and screenshots of gatherings: a year at most.</li>
          <li>Invoices and records: seven years, because tax law requires it.</li>
          <li>Your cookie choice: a year, after which we ask again.</li>
        </Lijst>
      </Blok>

      <Blok kop="Who we share data with">
        <p>
          We do not sell your data and we do not pass it on lightly. We do work with a few
          suppliers who process data for us. We have a data processing agreement with each
          of them.
        </p>
        <Lijst>
          <li>
            <strong className="text-dark-grey">HubSpot</strong> — our forms, the newsletter
            and our client contact. Our HubSpot environment is in the European data centre.
          </li>
          <li>
            <strong className="text-dark-grey">Vercel</strong> — the hosting of this
            website, including the log files that go with it.
          </li>
          <li>
            <strong className="text-dark-grey">YouTube</strong> — the videos on our site.
            Those only load once you click play yourself.
          </li>
          <li>
            <strong className="text-dark-grey">Google Analytics 4</strong> — measuring how
            the site is used. Only if you give permission for it in the cookie bar. The
            measurement is set up to be privacy-friendly: IP addresses are not stored, the
            data is not shared with other Google services, and none of it is used for
            advertising.
          </li>
        </Lijst>
        <p>
          Our HubSpot environment runs in a European data centre. Vercel and Google are US
          companies; both take part in the EU-US Data Privacy Framework, under which the
          European Commission has found their level of protection adequate. Where that
          framework does not apply, we work with the European Commission&rsquo;s standard
          contractual clauses.
        </p>
      </Blok>

      <Blok kop="No decisions made by a computer">
        <p>
          We make no decisions about you on the basis of automated processing, and we build
          no profiles that sort you into a category. There is no system sitting between us
          deciding something about you with consequences for you.
        </p>
      </Blok>

      <Blok kop="How we secure your data">
        <p>
          This website runs entirely on https. That means data travels encrypted, so that
          it cannot be intercepted along the way. Only the people who need it for their
          work have access to what comes in, and they have all signed a confidentiality
          declaration.
        </p>
      </Blok>

      <Blok kop="Cookies">
        <p>
          With cookies we collect data to make the site work properly. Exactly which ones,
          and how to change your choice, is set out in our{" "}
          <Link
            href="/en/cookie-statement"
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            cookie statement
          </Link>
          .
        </p>
      </Blok>

      <Blok kop="Your rights">
        <p>You may always ask us to:</p>
        <Lijst>
          <li>show you which data we hold about you;</li>
          <li>correct anything that is wrong;</li>
          <li>delete your data;</li>
          <li>restrict its use or object to it;</li>
          <li>give you your data in a transferable file;</li>
          <li>withdraw consent you gave earlier.</li>
        </Lijst>
        <p>
          Send an email to{" "}
          <a
            href={`mailto:${BEDRIJF.email}`}
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            {BEDRIJF.email}
          </a>
          . You will hear from us within a few days, and we will deal with your request as
          quickly as we can — within a month at the latest, which is the period the law
          sets for it.
        </p>
      </Blok>

      <Blok kop="Not satisfied?">
        <p>
          Do you have a complaint about the way we handle your data? Then please give us
          the chance to resolve it together first. Our contact details are at the top of
          this page and at the foot of the site.
        </p>
        <p>
          If you see reason to take a more formal route, you can lodge a complaint with
          the Dutch Data Protection Authority (Autoriteit Persoonsgegevens), via{" "}
          <a
            href="https://www.autoriteitpersoonsgegevens.nl/en/submitting-a-tip-off-or-a-complaint-to-the-ap"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            autoriteitpersoonsgegevens.nl
          </a>
          .
        </p>
      </Blok>

      <Blok kop="Changes">
        <p>
          If anything changes in the way we work or in the parties we work with, we will
          amend this statement. The date below shows when that last happened.
        </p>
      </Blok>
    </JuridischePagina>
  );
}
