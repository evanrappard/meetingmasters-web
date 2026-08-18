import type { Metadata } from "next";
import { taalAlternates } from "@/lib/talen";
import Link from "next/link";
import JuridischePagina, { Blok, Lijst } from "@/components/ui/JuridischePagina";
import { ADRES_REGEL, BEDRIJF } from "@/lib/bedrijfsgegevens";

export const metadata: Metadata = {
  alternates: taalAlternates("/privacy-statement"),
  title: "Privacy Statement | MeetingMasters",
  description:
    "Wat MeetingMasters met je gegevens doet: welke gegevens we verwerken, waarom, hoe lang we ze bewaren en welke rechten je hebt.",
};

export default function PrivacyStatementPage() {
  return (
    <JuridischePagina
      titel="Privacy Statement"
      intro="Bezoek je onze website of doe je mee aan een bijeenkomst die wij begeleiden, dan verwerken we een aantal persoonsgegevens. Daar gaan we zorgvuldig mee om, want privacy is belangrijk."
    >
      <Blok kop="Wie zijn wij">
        <p>
          {BEDRIJF.naam} is verantwoordelijk voor de gegevens die op deze website en
          rond onze bijeenkomsten worden verwerkt. Je vindt ons op {ADRES_REGEL}.
        </p>
        <p>
          Heb je een vraag over je gegevens? Mail{" "}
          <a
            href={`mailto:${BEDRIJF.email}`}
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            {BEDRIJF.email}
          </a>{" "}
          of bel{" "}
          <a
            href={BEDRIJF.telefoonHref}
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            {BEDRIJF.telefoon}
          </a>
          . Je krijgt van ons antwoord, geen formulierbrief.
        </p>
        {(BEDRIJF.kvk || BEDRIJF.btw) && (
          <p>
            {BEDRIJF.kvk && <>KvK-nummer {BEDRIJF.kvk}. </>}
            {BEDRIJF.btw && <>Btw-nummer {BEDRIJF.btw}.</>}
          </p>
        )}
      </Blok>

      <Blok kop="Privacy voor deelnemers aan bijeenkomsten">
        <p>
          Veel klanten vragen om screenshots of opnames van de bijeenkomsten die wij
          begeleiden. Deelnemers horen dat bij aanvang van de bijeenkomst, inclusief
          waarvoor de opname wordt gebruikt. De opnames die wij voor een klant maken
          bewaren wij maximaal een jaar. Daarna verwijderen we ze van de server.
        </p>
        <p>
          Onze opdrachtgever bepaalt wat er daarna met een opname gebeurt; wij maken die
          in opdracht. Wil je als deelnemer niet in beeld of geluid, laat het weten aan
          de organisator of aan ons — daar vinden we altijd een oplossing voor.
        </p>
        <p>
          Voor elke bijeenkomst geldt de geheimhoudingsverklaring die alle Meeting
          Masters hebben ondertekend. Is er behoefte aan meer, dan stellen we graag een
          aparte non-disclosure-verklaring op tussen {BEDRIJF.naam} en de organiserende
          partij.
        </p>
        <p>
          Bijeenkomsten draaien op platforms als Zoom, Microsoft Teams en SpatialChat.
          Die partijen verwerken zelf ook gegevens van deelnemers, zoals de naam waarmee
          je inlogt en je IP-adres. Daarvoor geldt hun eigen privacybeleid.
        </p>
      </Blok>

      <Blok kop="Welke gegevens we van websitebezoekers verwerken">
        <Lijst>
          <li>
            <strong className="text-dark-grey">Vul je een formulier in</strong>, dan
            bewaren we je naam, organisatie, e-mailadres, eventueel je telefoonnummer en
            wat je ons schrijft.
          </li>
          <li>
            <strong className="text-dark-grey">Meld je je aan voor de nieuwsbrief</strong>
            , dan bewaren we je naam en e-mailadres.
          </li>
          <li>
            <strong className="text-dark-grey">Mail of bel je ons</strong>, dan bewaren we
            wat je zelf deelt, zodat we je vraag kunnen beantwoorden.
          </li>
          <li>
            <strong className="text-dark-grey">Bezoek je de site</strong>, dan legt onze
            hostingpartij technische gegevens vast in logbestanden, waaronder je
            IP-adres. Die gebruiken we om storingen op te sporen en de site veilig te
            houden.
          </li>
        </Lijst>
        <p>
          Laat je geen gegevens achter, dan kunnen we je vraag niet beantwoorden en geen
          nieuwsbrief sturen. Je kunt er natuurlijk ook voor kiezen ons rechtstreeks te
          mailen of te bellen.
        </p>
      </Blok>

      <Blok kop="Waarom we dat doen, en op welke grond">
        <Lijst>
          <li>
            <strong className="text-dark-grey">Je vraag beantwoorden en een voorstel
            maken</strong> — nodig voor de uitvoering van een opdracht of de aanloop
            daarnaartoe.
          </li>
          <li>
            <strong className="text-dark-grey">De nieuwsbrief sturen</strong> — met je
            toestemming. Onderaan elke nieuwsbrief zit een afmeldlink.
          </li>
          <li>
            <strong className="text-dark-grey">Opnames en screenshots maken</strong> — in
            opdracht van de organiserende partij, die daarvoor de grondslag bepaalt.
            Deelnemers worden vooraf geïnformeerd.
          </li>
          <li>
            <strong className="text-dark-grey">De site veilig en werkend houden</strong> —
            ons gerechtvaardigd belang om misbruik en storingen tegen te gaan.
          </li>
          <li>
            <strong className="text-dark-grey">Onze administratie bijhouden</strong> —
            omdat de wet dat van ons vraagt.
          </li>
        </Lijst>
      </Blok>

      <Blok kop="Hoe lang we het bewaren">
        <p>
          Wij bewaren je gegevens niet langer dan nodig. Wettelijke bewaartermijnen
          respecteren we uiteraard.
        </p>
        <Lijst>
          <li>Contactgegevens: tot een jaar na het laatste contact.</li>
          <li>Aanmelding voor de nieuwsbrief: tot je je afmeldt.</li>
          <li>Opnames en screenshots van bijeenkomsten: maximaal een jaar.</li>
          <li>Facturen en administratie: zeven jaar, omdat de belastingwet dat vraagt.</li>
          <li>Je cookiekeuze: een jaar, daarna vragen we het opnieuw.</li>
        </Lijst>
      </Blok>

      <Blok kop="Met wie we gegevens delen">
        <p>
          We verkopen je gegevens niet en geven ze niet zomaar door. Wel werken we met een
          paar leveranciers die gegevens voor ons verwerken. Met hen hebben we een
          verwerkersovereenkomst.
        </p>
        <Lijst>
          <li>
            <strong className="text-dark-grey">HubSpot</strong> — onze formulieren, de
            nieuwsbrief en ons klantcontact. Onze HubSpot-omgeving staat in het Europese
            datacentrum.
          </li>
          <li>
            <strong className="text-dark-grey">Vercel</strong> — de hosting van deze
            website, inclusief de logbestanden die daarbij horen.
          </li>
          <li>
            <strong className="text-dark-grey">YouTube</strong> — de video&rsquo;s op onze
            site. Die laden pas als je zelf op play klikt.
          </li>
        </Lijst>
        <p>
          Verwerkt een leverancier gegevens buiten de Europese Economische Ruimte, dan
          gebeurt dat op basis van de modelcontracten van de Europese Commissie of het
          EU-VS Data Privacy Framework.
        </p>
      </Blok>

      <Blok kop="Hoe we je gegevens beveiligen">
        <p>
          Deze website draait volledig op https. Daarmee gaan gegevens versleuteld over de
          lijn, zodat ze onderweg niet te onderscheppen zijn. Toegang tot wat er
          binnenkomt hebben alleen de mensen die het nodig hebben voor hun werk, en zij
          hebben allemaal een geheimhoudingsverklaring getekend.
        </p>
      </Blok>

      <Blok kop="Cookies">
        <p>
          Met cookies verzamelen we gegevens om de site goed te laten werken. Welke dat
          precies zijn en hoe je je keuze wijzigt, lees je in onze{" "}
          <Link
            href="/nl/cookieverklaring"
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            cookieverklaring
          </Link>
          .
        </p>
      </Blok>

      <Blok kop="Jouw rechten">
        <p>Je mag ons altijd vragen om:</p>
        <Lijst>
          <li>in te zien welke gegevens we van je hebben;</li>
          <li>iets te corrigeren dat niet klopt;</li>
          <li>je gegevens te verwijderen;</li>
          <li>het gebruik ervan te beperken of er bezwaar tegen te maken;</li>
          <li>je gegevens in een overdraagbaar bestand te krijgen;</li>
          <li>een eerder gegeven toestemming weer in te trekken.</li>
        </Lijst>
        <p>
          Stuur een e-mail naar{" "}
          <a
            href={`mailto:${BEDRIJF.email}`}
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            {BEDRIJF.email}
          </a>
          , dan maken wij dat binnen drie werkdagen in orde.
        </p>
      </Blok>

      <Blok kop="Niet tevreden?">
        <p>
          Heb je een klacht over hoe wij met je gegevens omgaan? Geef ons dan eerst de
          gelegenheid het samen op te lossen. Onze contactgegevens staan bovenaan deze
          pagina en onderaan de site.
        </p>
        <p>
          Zie je aanleiding om het formeler aan te pakken, dan kun je een klacht indienen
          bij de Autoriteit Persoonsgegevens, via{" "}
          <a
            href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:text-accent-dark"
          >
            autoriteitpersoonsgegevens.nl
          </a>
          .
        </p>
      </Blok>

      <Blok kop="Wijzigingen">
        <p>
          Verandert er iets aan onze werkwijze of aan de partijen waarmee we werken, dan
          passen we dit statement aan. De datum hieronder laat zien wanneer dat voor het
          laatst gebeurde.
        </p>
      </Blok>
    </JuridischePagina>
  );
}
