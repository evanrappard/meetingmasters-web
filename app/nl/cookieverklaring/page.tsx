import type { Metadata } from "next";
import Link from "next/link";
import JuridischePagina, { Blok, Lijst } from "@/components/ui/JuridischePagina";
import CookieKeuzeKnop from "@/components/ui/CookieKeuzeKnop";

export const metadata: Metadata = {
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
            <strong className="text-dark-grey">Onze formulieren</strong> — de formulieren
            op deze site draaien op HubSpot. Die plaatst cookies die nodig zijn om het
            formulier te tonen, je invulling te versturen en spam tegen te houden.
          </li>
        </Lijst>
      </Blok>

      <Blok kop="Analytische en marketingcookies">
        <p>
          Die staan standaard uit. Kies je &ldquo;Alles accepteren&rdquo;, dan mogen we
          meten hoe bezoekers de site gebruiken: welke pagina&rsquo;s gelezen worden, hoe
          mensen bij ons terechtkomen en waar ze afhaken. Daar maken we de site beter mee.
        </p>
        <p>
          Kies je &ldquo;Alleen noodzakelijk&rdquo;, of maak je geen keuze, dan gebeurt
          dat niet en plaatsen we deze cookies ook niet.
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
