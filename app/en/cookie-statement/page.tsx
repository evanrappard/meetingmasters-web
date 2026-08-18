import type { Metadata } from "next";
import Link from "next/link";
import JuridischePagina, { Blok, Lijst } from "@/components/ui/JuridischePagina";
import CookieKeuzeKnop from "@/components/ui/CookieKeuzeKnop";

const SITE = "https://www.meetingmasters.online";

/**
 * De Engelse cookieverklaring. Bewust een eigen bestand en geen gedeelde
 * template met tekstobject: juridische tekst loopt per taal uiteen en moet
 * per taal nagelezen kunnen worden. De opbouw is wel gelijk aan de
 * Nederlandse versie in app/nl/cookieverklaring.
 */
export const metadata: Metadata = {
  title: "Cookie statement | MeetingMasters",
  description:
    "Which cookies MeetingMasters uses, what they are for, and how to change your choice or delete them.",
  alternates: {
    canonical: `${SITE}/en/cookie-statement`,
    languages: {
      "nl-NL": `${SITE}/nl/cookieverklaring`,
      "en-GB": `${SITE}/en/cookie-statement`,
    },
  },
};

export default function CookieStatementPage() {
  return (
    <JuridischePagina
      taal="en"
      titel="Cookie statement"
      intro="We keep it small: only what is needed to make the site and our forms work. For the rest, we ask you first."
    >
      <Blok kop="What is a cookie?">
        <p>
          A cookie is a small, simple file that is sent along with the pages of our website
          and stored by your browser on your computer&rsquo;s hard drive. If you come back
          later, that information can be sent back to our servers. That is how the site
          knows, for instance, that you have already made a choice.
        </p>
      </Blok>

      <Blok kop="Essential and functional cookies">
        <p>
          These are always on, because without them the site does not work as it should.
          You do not have to do anything for them, and we do not measure anything with
          them.
        </p>
        <Lijst>
          <li>
            <strong className="text-dark-grey">Your cookie choice</strong> — we remember
            for a year what you chose, so that we do not have to ask again on every visit.
            We store that in your own browser, not with us.
          </li>
          <li>
            <strong className="text-dark-grey">Our forms and the calendar</strong> — the
            forms on this site and the calendar in which you book an appointment run on
            HubSpot. To be able to show them we load a script from HubSpot, and that
            happens as soon as you open such a page — so before you make a choice in the
            bar above. We do that because the form is the service itself: without that
            script you see an empty space instead of a contact form. HubSpot places
            cookies that are needed to show the form, to send what you fill in, and to
            keep out spam. Your details only reach us at the moment you click send.
          </li>
        </Lijst>
      </Blok>

      <Blok kop="Analytics and marketing cookies">
        <p>
          These are off by default. If you choose &ldquo;Accept all&rdquo;, we may measure
          how visitors use the site: which pages are read, how people find us and where
          they drop off. We use that to make the site better.
        </p>
        <p>
          If you choose &ldquo;Essential only&rdquo;, or make no choice at all, none of
          that happens and we do not place these cookies either.
        </p>
      </Blok>

      <Blok kop="Videos">
        <p>
          The videos on our site are hosted on YouTube. We load them in the
          privacy-friendly variant (youtube-nocookie) and only at the moment you click
          play yourself. If you do not, YouTube records nothing. If you do, Google&rsquo;s
          privacy policy applies from that moment on.
        </p>
      </Blok>

      <Blok kop="Social media">
        <p>
          Our site carries no like or share buttons that pull in code from social
          networks. You will only find an ordinary link to our LinkedIn page. Click it and
          you are on LinkedIn, where their policy applies.
        </p>
      </Blok>

      <Blok kop="Changing your choice">
        <p>Changed your mind? That is always allowed, and it takes one click.</p>
        <CookieKeuzeKnop taal="en" />
      </Blok>

      <Blok kop="Deleting cookies">
        <p>
          If you would rather have no cookies at all, you can switch them off in your
          browser or delete cookies that were placed earlier. See the help function or the
          settings of your browser for that. Do bear in mind that some parts of the site
          will then stop working — our forms, for instance.
        </p>
      </Blok>

      <Blok kop="Read more">
        <p>
          What else we do with your details, how long we keep them and which rights you
          have is set out in our{" "}
          <Link
            href="/en/privacy-statement"
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            privacy statement
          </Link>
          .
        </p>
      </Blok>
    </JuridischePagina>
  );
}
