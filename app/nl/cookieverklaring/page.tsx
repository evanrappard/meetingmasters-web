import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import Link from "next/link";
import JuridischePagina, { Blok, Lijst, CookieTabel } from "@/components/ui/JuridischePagina";
import CookieKeuzeKnop from "@/components/ui/CookieKeuzeKnop";

export const metadata: Metadata = {
  alternates: taalAlternates("/cookieverklaring"),
  title: "Cookieverklaring | MeetingMasters",
  description:
    "Welke cookies MeetingMasters gebruikt, waarvoor ze dienen en hoe je je keuze wijzigt of cookies verwijdert.",
};

export default function CookieverklaringPage() {
  return (
    <JuridischePagina
      titel="Cookieverklaring"
      intro="Wij houden het klein: alleen wat nodig is om de site en onze formulieren te laten werken. De rest vragen we eerst."
    >
      <Blok kop="Wat is een cookie?">
        <p>
          Een cookie is een eenvoudig klein bestandje dat wordt meegestuurd met pagina&rsquo;s
          van onze website en door je browser op de harde schijf van je computer wordt
          opgeslagen. Kom je later terug, dan kan die informatie weer naar onze servers
          worden teruggestuurd. Zo weet de site bijvoorbeeld dat je een keuze al hebt
          gemaakt.
        </p>
      </Blok>

      <Blok kop="Noodzakelijke en functionele cookies">
        <p>
          Deze staan altijd aan, want zonder werkt de site niet zoals het hoort. Je hoeft
          er niets voor te doen en we meten er niets mee.
        </p>
        <Lijst>
          <li>
            <strong className="text-dark-grey">Je cookiekeuze</strong> — we onthouden een
            jaar lang wat je hebt gekozen, zodat we het niet elk bezoek opnieuw vragen.
            Dat slaan we op in je eigen browser, niet bij ons.
          </li>
          <li>
            <strong className="text-dark-grey">Onze formulieren</strong> — de formulieren op
            deze site draaien op HubSpot. Om er één te kunnen tonen laden we een script van
            HubSpot, en dat gebeurt zodra je zo&rsquo;n pagina opent — dus ook voordat je in
            de balk hierboven een keuze maakt. Dat doen we omdat het formulier de dienst
            zélf is: zonder dat script zie je een leeg vlak in plaats van een
            contactformulier. Wat daarbij verschijnt is één cookie op het domein van
            HubSpot: een botfilter dat een halfuur meegaat en voorkomt dat het formulier
            wordt volgespamd. Er wordt niets aan jou herkend en niets gemeten. Je gegevens
            gaan pas naar ons op het moment dat jij op verzenden klikt.
          </li>
          <li>
            <strong className="text-dark-grey">Pagina&rsquo;s zonder formulier</strong> —
            daar laden we HubSpot helemaal niet. Open je de home, een eventpagina of het
            blog, dan staat er geen enkele cookie in je browser tot je een keuze maakt.
          </li>
        </Lijst>
      </Blok>

      <Blok kop="Tracking van HubSpot: uit, tenzij je hem aanzet">
        <p>
          HubSpot kan bezoekers over meerdere bezoeken heen herkennen, met cookies als{" "}
          <code className="text-[13px] text-dark-grey">hubspotutk</code> en{" "}
          <code className="text-[13px] text-dark-grey">__hstc</code>. Dat is geen
          noodzakelijke cookie maar tracking, en die staat bij ons standaard uit: we zetten
          HubSpot vóór het laden op &ldquo;niet volgen&rdquo;. Het formulier werkt daar
          gewoon mee. Kies je &ldquo;Alles accepteren&rdquo;, dan zetten we hem om; trek je
          je toestemming later in, dan gaat hij terug én wissen we wat er stond.
        </p>
        <p>
          Eén ding valt buiten onze hand: de agenda waarin je een afspraak inplant, is een
          pagina van HubSpot zelf die wij in een venster tonen. Wat HubSpot binnen dat
          venster doet, valt onder{" "}
          <a
            href="https://legal.hubspot.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            hun eigen privacybeleid
          </a>
          . Wil je die agenda liever niet openen, mail of bel ons dan gewoon.
        </p>
      </Blok>

      <Blok kop="Analytische cookies">
        <p>
          Die staan standaard uit. Kies je &ldquo;Alles accepteren&rdquo;, dan mogen we
          meten hoe bezoekers de site gebruiken: welke pagina&rsquo;s gelezen worden, hoe
          mensen bij ons terechtkomen en waar ze afhaken. Daar maken we de site beter mee.
        </p>
        <p>
          Daarvoor gebruiken we <strong className="text-dark-grey">Google Analytics 4</strong>.
          Het script daarvan wordt pas geladen op het moment dat jij akkoord geeft: kies je
          niet voor &ldquo;Alles accepteren&rdquo;, dan gaat er niets naar Google, ook geen
          verzoek waarmee je IP-adres zou meegaan. De meting staat privacyvriendelijk
          ingesteld: IP-adressen worden niet opgeslagen, de gegevens worden niet gedeeld met
          andere diensten van Google en er gebeurt niets mee voor advertenties.
        </p>
        <p>
          Trek je je toestemming later weer in, dan stopt het meten meteen en verwijderen
          we de cookies die Google had gezet.
        </p>
        <p>
          <strong className="text-dark-grey">Marketing- of advertentiecookies gebruiken
          we niet.</strong> We volgen je dus niet over andere websites heen.
        </p>
        <p>
          Kies je &ldquo;Alleen noodzakelijk&rdquo;, of maak je geen keuze, dan gebeurt
          dat niet en plaatsen we deze cookies ook niet.
        </p>
      </Blok>

      <Blok kop="Welke cookies er precies staan">
        <p>
          Hieronder staat wat er werkelijk in je browser terechtkomt. Dit is nagemeten met{" "}
          <code className="text-[13px] text-dark-grey">scripts/cookie-inventaris.mjs</code>,
          in alle drie de situaties: geen keuze, alleen noodzakelijk, en alles accepteren.
        </p>
        <p className="font-bold text-dark-grey">Altijd — noodzakelijk en functioneel</p>
        <CookieTabel
          koppen={["Naam", "Geplaatst door", "Waarvoor", "Hoe lang"]}
          rijen={[
            {
              naam: "mm-cookie-keuze",
              plaatser: "MeetingMasters (opslag in je eigen browser)",
              doel: "onthoudt welke cookiekeuze je hebt gemaakt",
              termijn: "1 jaar",
            },
            {
              naam: "__cf_bm",
              plaatser: "Cloudflare, via HubSpot",
              doel: "botfilter voor onze formulieren; staat op het domein van HubSpot, niet op het onze",
              termijn: "30 minuten",
            },
          ]}
        />
        <p className="font-bold text-dark-grey">Alleen na &ldquo;Alles accepteren&rdquo;</p>
        <CookieTabel
          koppen={["Naam", "Geplaatst door", "Waarvoor", "Hoe lang"]}
          rijen={[
            {
              naam: "_ga",
              plaatser: "Google Analytics",
              doel: "onderscheidt bezoekers van elkaar",
              termijn: "13 maanden",
            },
            {
              naam: "_ga_XXXXXXXXXX",
              plaatser: "Google Analytics",
              doel: "houdt de stand van je bezoek bij; de tekens achteraan zijn ons meetnummer",
              termijn: "13 maanden",
            },
            {
              naam: "hubspotutk, __hstc, __hssc, __hssrc",
              plaatser: "HubSpot",
              doel: "herkent terugkerende bezoekers en koppelt een formulier aan eerdere bezoeken",
              termijn: "6 maanden tot sessie",
            },
          ]}
        />
        <p>
          Kies je &ldquo;Alleen noodzakelijk&rdquo; of maak je geen keuze, dan blijft het bij
          de eerste tabel. Open je de agenda van HubSpot, dan plaatst HubSpot binnen dat
          venster ook eigen cookies op hun eigen domein; die staan hierboven niet, want die
          zetten wij niet.
        </p>
      </Blok>

      <Blok kop="Video&rsquo;s">
        <p>
          De video&rsquo;s op onze site staan op YouTube. Wij laden ze in de
          privacyvriendelijke variant (youtube-nocookie) en pas op het moment dat je zelf
          op play klikt. Doe je dat niet, dan legt YouTube niets vast. Klik je wel, dan
          geldt vanaf dat moment het privacybeleid van Google.
        </p>
      </Blok>

      <Blok kop="Social media">
        <p>
          Op onze site staan geen like- of deelknoppen die code van sociale netwerken
          binnenhalen. Je vindt alleen een gewone link naar onze LinkedIn-pagina. Klik je
          daarop, dan ben je op LinkedIn en geldt hun beleid.
        </p>
      </Blok>

      <Blok kop="Je keuze wijzigen">
        <p>
          Van gedachten veranderd? Dat mag altijd, en het kost één klik.
        </p>
        <CookieKeuzeKnop />
      </Blok>

      <Blok kop="Cookies verwijderen">
        <p>
          Wil je helemaal geen cookies, dan kun je dat in je browser uitzetten of eerder
          geplaatste cookies verwijderen. Raadpleeg daarvoor de helpfunctie of de
          instellingen van je browser. Houd er rekening mee dat sommige onderdelen van de
          site het dan niet meer doen — onze formulieren bijvoorbeeld.
        </p>
      </Blok>

      <Blok kop="Meer lezen">
        <p>
          Wat we verder met je gegevens doen, hoe lang we ze bewaren en welke rechten je
          hebt, staat in ons{" "}
          <Link
            href="/nl/privacy-statement"
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            Privacy Statement
          </Link>
          .
        </p>
      </Blok>
    </JuridischePagina>
  );
}
