import type { Metadata } from "next";
import Link from "next/link";
import JuridischePagina, { Blok, Lijst, CookieTabel } from "@/components/ui/JuridischePagina";
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
            <strong className="text-dark-grey">Our forms</strong> — the forms on this site
            run on HubSpot. To be able to show one we load a script from HubSpot, and that
            happens as soon as you open such a page — so before you make a choice in the bar
            above. We do that because the form is the service itself: without that script
            you see an empty space instead of a contact form. What appears alongside it is a
            single cookie on HubSpot&rsquo;s own domain: a bot filter that lasts half an hour
            and keeps the form from being spammed. Nothing about you is recognised and
            nothing is measured. Your details only reach us at the moment you click send.
          </li>
          <li>
            <strong className="text-dark-grey">Pages without a form</strong> — there we do
            not load HubSpot at all. Open the home page, an event page or the blog and there
            is not a single cookie in your browser until you make a choice.
          </li>
        </Lijst>
      </Blok>

      <Blok kop="HubSpot tracking: off unless you switch it on">
        <p>
          HubSpot can recognise visitors across separate visits, using cookies such as{" "}
          <code className="text-[13px] text-dark-grey">hubspotutk</code> and{" "}
          <code className="text-[13px] text-dark-grey">__hstc</code>. That is not an
          essential cookie but tracking, and with us it is off by default: we set HubSpot to
          &ldquo;do not track&rdquo; before the script loads. The form works perfectly well
          that way. Choose &ldquo;Accept all&rdquo; and we switch it on; withdraw your
          consent later and it goes back off, and we delete what was there.
        </p>
        <p>
          One thing is outside our hands: the calendar in which you book an appointment is a
          page of HubSpot&rsquo;s own that we show in a frame. What HubSpot does inside that
          frame falls under{" "}
          <a
            href="https://legal.hubspot.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            their own privacy policy
          </a>
          . If you would rather not open that calendar, simply email or call us.
        </p>
      </Blok>

      <Blok kop="Analytics cookies">
        <p>
          These are off by default. If you choose &ldquo;Accept all&rdquo;, we may measure
          how visitors use the site: which pages are read, how people find us and where
          they drop off. We use that to make the site better.
        </p>
        <p>
          For that we use <strong className="text-dark-grey">Google Analytics 4</strong>. Its
          script is only loaded at the moment you agree: if you do not choose &ldquo;Accept
          all&rdquo;, nothing goes to Google at all &mdash; not even a request that would
          carry your IP address. The measurement is set up to be privacy-friendly: IP
          addresses are not stored, the data is not shared with other Google services, and
          none of it is used for advertising.
        </p>
        <p>
          If you withdraw your consent later, measuring stops straight away and we delete
          the cookies Google had set.
        </p>
        <p>
          <strong className="text-dark-grey">We do not use marketing or advertising
          cookies.</strong> So we do not follow you around other websites.
        </p>
        <p>
          If you choose &ldquo;Essential only&rdquo;, or make no choice at all, none of
          that happens and we do not place these cookies either.
        </p>
      </Blok>

      <Blok kop="Exactly which cookies are set">
        <p>
          Below is what actually ends up in your browser. We measured this with{" "}
          <code className="text-[13px] text-dark-grey">scripts/cookie-inventaris.mjs</code>{" "}
          in all three situations: no choice, essential only, and accept all.
        </p>
        <p className="font-bold text-dark-grey">Always — essential and functional</p>
        <CookieTabel
          koppen={["Name", "Set by", "What for", "How long"]}
          rijen={[
            {
              naam: "mm-cookie-keuze",
              plaatser: "MeetingMasters (stored in your own browser)",
              doel: "remembers which cookie choice you made",
              termijn: "1 year",
            },
            {
              naam: "__cf_bm",
              plaatser: "Cloudflare, via HubSpot",
              doel: "bot filter for our forms; sits on HubSpot's domain, not on ours",
              termijn: "30 minutes",
            },
          ]}
        />
        <p className="font-bold text-dark-grey">Only after &ldquo;Accept all&rdquo;</p>
        <CookieTabel
          koppen={["Name", "Set by", "What for", "How long"]}
          rijen={[
            {
              naam: "_ga",
              plaatser: "Google Analytics",
              doel: "tells visitors apart",
              termijn: "13 months",
            },
            {
              naam: "_ga_XXXXXXXXXX",
              plaatser: "Google Analytics",
              doel: "keeps track of your visit; the characters at the end are our measurement ID",
              termijn: "13 months",
            },
            {
              naam: "hubspotutk, __hstc, __hssc, __hssrc",
              plaatser: "HubSpot",
              doel: "recognises returning visitors and links a form to earlier visits",
              termijn: "6 months to session",
            },
          ]}
        />
        <p>
          Choose &ldquo;Essential only&rdquo;, or make no choice, and it stops at the first
          table. Open HubSpot&rsquo;s calendar and HubSpot will also place its own cookies
          inside that frame, on its own domain; those are not listed above, because we are
          not the ones setting them.
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
