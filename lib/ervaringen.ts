/**
 * De klantervaringen op /nl/testimonials en /en/testimonials: zestien
 * opdrachtgevers, elk met logo en de volledige tekst.
 *
 * De eerste twaalf komen van de oude Squarespace-pagina (17 september 2026).
 * De site had daarvóór ingekorte versies zonder logo; Emilie wilde de oude
 * pagina terug: logo in een witte cirkel, de naam, en de hele tekst in een
 * kaart. De Engelse teksten stonden ook op de oude site; alleen de World
 * Olympians Association gaf haar tekst oorspronkelijk in het Engels.
 *
 * Op 24 september 2026 kwamen RepairCare, Stem op een Vrouw, Parkos en
 * Flevoland erbij, aangeleverd door Emilie. Parkos gaf zijn tekst in het
 * Engels; die staat hier in zijn eigen woorden en is naar het Nederlands
 * vertaald. Bij de andere drie is het andersom.
 *
 * De volgorde is de volgorde op de pagina: nieuwe namen komen eronder.
 *
 * Kleine correcties in aangeleverde teksten (tikfouten, een ontbrekend woord)
 * mogen; de inhoud blijft van de klant. Zo zijn "kwamwn" en "boeieid" uit de
 * oude Omron-tekst verbeterd, en is "de facilitair" bij RepairCare
 * "de facilitator" geworden.
 *
 * De vier korte quotes in de carrousel op de homepage staan apart, in
 * `lib/getuigenissen.ts`; die zijn met opzet ingekort.
 */

export type Ervaring = {
  /** Bedrijfsnaam zoals hij onder het logo staat. */
  bedrijf: string;
  /** Alleen als de naam in het Engels anders is. */
  bedrijfEn?: string;
  quote: string;
  quoteEn: string;
  logo: string;
};

const LOGO = "/images/logos/ervaringen";

export const ERVARINGEN: Ervaring[] = [
  {
    bedrijf: "ROC TOP",
    quote:
      "De flexibiliteit en creatieve kwaliteiten van de MeetingMasters waren zowel in de voorbereiding- als tijdens het evenement van grote waarde. Het was erg prettig om samen een online studiedag voor docenten te organiseren waarbij wij ons op de dag zelf niet druk hoefden te maken over het virtuele verloop van de dag en benodigde technische ondersteuning voor de deelnemers en sprekers.",
    quoteEn:
      "The flexibility and creative qualities of the MeetingMasters were of great value both before and during the event. It was very nice to organize an online study day for teachers together, where we didn't have to worry about anything on the day itself.",
    logo: `${LOGO}/roc-top.webp`,
  },
  {
    bedrijf: "Bergman Clinics",
    quote:
      "De Meeting Masters zorgen er niet alleen voor dat je technisch wordt ontzorgd. Ze denken ook mee hoe je het beste haalt uit een online ontmoeting of event. In deze tijd een waardevolle bijdrage aan verbinding.",
    quoteEn:
      "The Meeting Masters not only ensure that you are technically supported. They also think along with you on how to get the best out of an online meeting or event. A valuable contribution to connection in this time.",
    logo: `${LOGO}/bergman-clinics.webp`,
  },
  {
    bedrijf: "ZonMW",
    quote:
      "Meeting Masters heeft de online facilitatie van een bijeenkomst van een innovatief leernetwerk ‘Maak Ruimte voor Gezondheid’ voor ons verzorgd. Dat gaf de meeting een stimulerend, creatief karakter waarin de verschillende aanwezige partijen (diverse onderzoeksinstituten, lokale en landelijke overheden, bedrijven en kennispartners) in korte tijd veel ideeën en kennis bij elkaar konden brengen. We hadden het gevoel lekker samen aan de slag te zijn geweest en met een aantal weer even echt in gesprek te zijn geweest. De gebruikte tools waren Zoom en Miro.",
    quoteEn:
      "MeetingMasters provided us with the online facilitation of a meeting of an innovative learning network ‘Make Room for Health’. This gave the meeting a stimulating, creative character in which the various parties present (various research institutes, local and national authorities, companies, and knowledge partners) were able to bring together many ideas and knowledge in a short time.",
    logo: `${LOGO}/zonmw.webp`,
  },
  {
    bedrijf: "Gemeente Roosendaal",
    quote:
      "MeetingMasters heeft ons ontzorgt en begeleid bij het gehele proces: van het komen tot de inhoud van de bijeenkomst, het opstellen van het draaiboek tot de technische begeleiding en ondersteuning gedurende de bijeenkomst. Ondanks dat het onderwerp, kinderarmoede, nieuw was voor hen, hebben we samen twee keer inhoudelijk een top meeting kunnen wegzetten! Hun deskundigheid, betrokkenheid, flexibiliteit en interesse in het (maatschappelijke) thema maakten de samenwerking een succes!",
    quoteEn:
      "MeetingMasters guided us worry-free through the entire process: from defining goals and sharpening the content of the meeting to drawing up the script for technical guidance and support. Despite the fact that the subject of child poverty was new to them, we were able to organize a great meeting together twice! Their expertise, involvement, flexibility, and interest in the (social) theme made the collaboration a success!",
    logo: `${LOGO}/roosendaal.webp`,
  },
  {
    bedrijf: "PharmAccess",
    quote:
      "Het bijeenbrengen van werknemers van 5 kantoren om gedurende twee weken samen online de strategie vast te stellen vereist essentiële facilitatievaardigheden. MeetingMasters heeft ons daarbij geholpen - door belangrijke leden van het team te ondersteunen bij het aanleren van cruciale online facilitatievaardigheden. Daarbij hebben ze ons ook ondersteund met Inspiration Talks, om met medewerkers te verkennen hoe de toekomst van werk er voor hen uitziet. Samenwerken met MeetingMasters is interactief, verhelderend en prikkelt de gedachten.",
    quoteEn:
      "Bringing together employees from 5 offices to strategize online for two weeks requires key facilitation skills. MeetingMasters got us there - helping key members of the team to learn important online facilitation skills that could engage, include and activate employees joining their sessions. They took us one step first by hosting an insightful collaborative session for employees to navigate what the future of work looks like for them. Working with MeetingMasters is interactive, insightful, and thought-provoking.",
    logo: `${LOGO}/pharmaccess.webp`,
  },
  {
    bedrijf: "Oranje Fonds",
    quote:
      "Net als veel organisaties moesten we als Oranje Fonds schakelen om live bijeenkomsten om te zetten naar online meetings. Zo is een personeelsbijeenkomst met de hulp van MeetingMasters omgezet naar een levendige en persoonlijke bijeenkomst waar veel ruimte was voor verbinding en persoonlijke aandacht voor alle medewerkers. Ook hebben we een programmabijeenkomst met 30 organisaties weten om te zetten naar een hybride event waarbij we alle mogelijke vormen van break-outs en interactie hebben gerealiseerd. Zonder de expertise over online meetings, de passie en kennis over goede doelen en de technische ondersteuning hadden we deze resultaten nooit kunnen bereiken.",
    quoteEn:
      "Like many organizations, we as Oranje Fonds had to switch to turn live events into online meetings. With the help of MeetingMasters, a staff meeting was converted into a lively and personal meeting with plenty of room for connection and personal attention for all employees. We also managed to translate a program meeting with 30 organizations into a hybrid event, in which we realized all possible forms of break-outs and interaction. Without the expertise in online meetings, the passion and knowledge about charities and the technical support, we would never have been able to achieve these results. Emilie and her team are professional and skilled and prepare all meetings down to the second with great commitment and military precision.",
    logo: `${LOGO}/oranje-fonds.webp`,
  },
  {
    bedrijf: "World Olympians Association",
    quote:
      "We hebben fantastische, praktische ondersteuning gekregen voor verschillende internationale online evenementen. Onze Olympiërs verwachten altijd het allerbeste, en met MeetingMasters is dat gewoon de norm. Mensen van over de hele wereld, die elkaar niet kennen, betrokken laten zijn in verschillende talen? Inspirerende boodschappen doorgeven en toch eindigen met zeer praktische resultaten? Met dit team: geen enkel probleem! Ik begrijp niet hoe ze het voor elkaar krijgen, maar het plezier van samenwerken met hen is misschien wel de sleutel tot hun succes.",
    quoteEn:
      "We received brilliant, hands-on support for several absolutely amazing international online events. Our Olympians always expect excellence, and with Meeting Masters that's simply the standard. Getting people from all over the world, who don't know each other, to engage in different languages? Passing inspiring messages and still ending up with very practical outcomes? With this team: no problem at all! I don't know how they do their magic, but the key might lay in the fact that it's just such a joy to work with them.",
    logo: `${LOGO}/woa.webp`,
  },
  {
    bedrijf: "Bouw & Infra",
    quote:
      "MeetingMasters heeft onze online informatiebijeenkomsten voor overstappers die de richting bouw & infra of techniek op willen, ondersteund. Emilie en haar collega's helpen ons elke keer met een goede voorbereiding en denken goed na over wat er nodig is voor, tijdens en na de bijeenkomsten. Ze geven tips en trucs en helpen waar nodig. De begeleiding tijdens de bijeenkomsten is ook erg prettig, we hoeven nergens meer over na te denken. Ze gebruiken de video's op tijd, laten ons via de chat weten als er vragen zijn, enzovoort. Ik zie een lange samenwerking met MeetingMasters tegemoet!",
    quoteEn:
      "Meeting Masters has supported our online information meetings for switchers who want to enter construction & infrastructure or technology. Emilie and colleagues help us every time with proper preparation and they think carefully about what is needed before, during and after the meetings. Provide tips and tricks and help where necessary. The guidance during the meetings is also very pleasant, we don't have to think about anything anymore. They use the videos on time, let us know if questions arise in the chat and so on. I foresee a long collaboration with MeetingMasters!",
    logo: `${LOGO}/bouw-infra.webp`,
  },
  {
    bedrijf: "Omron",
    quote:
      "Het was een groot plezier om samen te werken met Meeting Masters - ze leverden een zeer interactieve sessie over \"Effectieve Vergaderingen\", waarbij alle aspecten aan bod kwamen die vergaderingen in kwaliteit én resultaat naar een hoger niveau tillen. De combinatie van theorie, praktijk en de vele interacties maakten de workshop boeiend en leerzaam. Emilie en haar team zijn altijd nauwkeurig, attent op alle details, en passen de sessie aan naar de behoeften.",
    quoteEn:
      "It was a great pleasure working with Meeting Masters – they delivered a highly interactive session on the topic of “Effective Meetings”, emphasizing all the important aspects that bring meetings to the next level in terms of quality and outputs. The combination of practical value and interactive, engaging experience for participants is something especially recognized by learners. Emilie and her team are constantly spot-on, attentive to all the details, and adapting the session to the needs.",
    logo: `${LOGO}/omron.webp`,
  },
  {
    bedrijf: "Rode Kruis",
    bedrijfEn: "Red Cross Netherlands",
    quote:
      "MeetingMasters verzorgden Diversity Day van Rode Kruis Nederland, met als doel om meer bewustzijn te creëren rond inclusie/exclusie. Een evenement waar men werkelijk naar elkaar kon luisteren en van elkaar kon leren. Dat deden zij in SpatialChat, een fantastisch digitaal platform! Een nieuwe beleving in de evenementenwereld. Digitaal en toch heel natuurlijk. Zelfs de optie van 'over de streep' was mogelijk. Dankjewel Emilie van Rappard voor deze ervaring en jullie geweldige ondersteuning! Wat een power-team!",
    quoteEn:
      "MeetingMasters organized Diversity Day for the Red Cross Netherlands, aiming to create more awareness around inclusion/exclusion. An event where people could truly listen to each other and learn from one another. They did this in SpatialChat, a fantastic digital platform! A new experience in the events world. Digital yet very natural. Even the option of 'crossing the line' was possible. Thank you Emilie van Rappard for this experience and your amazing support! What a power team!",
    logo: `${LOGO}/rode-kruis.webp`,
  },
  {
    bedrijf: "het Cultuurfonds",
    bedrijfEn: "Cultuurfonds",
    quote:
      "Hoe zijn digitale ontmoetingen toch warm en persoonlijk? MeetingMasters organiseerde een verrassend virtueel personeelsfeest en ondersteunde ons op meerdere momenten om interne en externe bijeenkomsten meer contactgericht te maken. Opvallend was hoe daarbij steeds de juiste toon geraakt werd: CEO-level, mix gezelschap; schakelend van formeel naar informeel. Met een duidelijke visie, een frisse creatieve blik en een heel prettige service weten de Meeting Masters online mensen echt met elkaar in contact te brengen.",
    quoteEn:
      "How can digital meetings feel warm and really personal? MeetingMasters organized the most surprising virtual staff party and supported us on several occasions to realize internal and external meetings with more genuine contact. What stood out was how they consistently struck the right tone: CEO-level, mixing with the crowd; seamlessly transitioning from formal to informal. With a clear vision, a fresh creative perspective, and very pleasant service, MeetingMasters truly excel in bringing people together online.",
    logo: `${LOGO}/cultuurfonds.webp`,
  },
  {
    bedrijf: "Digital Fitness",
    quote:
      "MeetingMasters heeft ons enorm geholpen met het bedenken van leuke, inventieve en interactieve online trainingsessies. Maar een goed draaiboek verzinnen is niet hun enige toegevoegde waarde. Bij online bijeenkomsten staat of valt het succes bij het niet 'opgehouden' worden door technische storingen. Dat doen MeetingMasters en bovendien pakken ze alle bijkomende klusjes op, zodat je je als trainer volledig op de inhoud kunt richten. Wie van een online sessie een doorslaand succes wil maken doet er heel goed aan eens met MeetingMasters te praten!",
    quoteEn:
      "MeetingMasters has been tremendously helpful in designing fun, inventive and interactive online training sessions. But creating a strong run-of-show is only part of their added value. In online meetings, success depends on not being ‘held up’ by technical issues. MeetingMasters takes care of that and also handles all the additional tasks, so that as a trainer you can focus fully on the content. If you want your online session to be a real success, it’s well worth having a conversation with MeetingMasters.",
    logo: `${LOGO}/digital-fitness.webp`,
  },
  {
    bedrijf: "RepairCare",
    quote:
      "De meeting was heel gevarieerd en interessant. Jullie wilden een ontspannen sfeer neerzetten, en dat is echt gelukt. De facilitator deed het fantastisch: vriendelijk, en ook in het Duits deed ze het uitstekend.",
    quoteEn:
      "The meeting was varied and interesting. You set out to create a relaxed atmosphere, and you really pulled that off. The facilitator was fantastic: friendly, and excellent in German as well.",
    logo: `${LOGO}/repaircare.webp`,
  },
  {
    bedrijf: "Stem op een Vrouw",
    quote:
      "We hebben met veel plezier gewerkt met MeetingMasters voor een interactief online evenement, waar zowel sprekers, spelvormen en een onderling gesprek met deelnemers plaatsvond. Dat wordt al snel ingewikkeld online, maar het platform dat zij hebben maakt het visueel leuk en inzichtelijk. Ook hun enthousiasme over de inhoud was fijn! We raden samenwerking van harte aan.",
    quoteEn:
      "We really enjoyed working with MeetingMasters on an interactive online event with speakers, games and a conversation among the participants. That quickly gets complicated online, but the platform they use makes it visually enjoyable and easy to follow. Their enthusiasm about the subject was a pleasure too. We warmly recommend working with them.",
    logo: `${LOGO}/stem-op-een-vrouw.webp`,
  },
  {
    bedrijf: "Parkos",
    quote:
      "Ik heb hier als teamactiviteit erg van genoten; het was echt boeiend. Ik heb eerder online escape rooms gedaan, maar in deze vond ik het vooral mooi hoe gesprekken vanzelf ontstaan als je je icoon dichter naar mensen toe beweegt. Daardoor voelt alles echter en meer als samen bezig zijn. Ook de muziekkamer was een mooie toevoeging: die gaf het geheel een vrolijke sfeer.",
    quoteEn:
      "I really enjoyed the experience as a team activity, and it felt very engaging. I have played other online escape rooms before, but in this one I especially liked how conversations happen naturally when you move your icon closer to people — it makes everything feel more real and interactive. The music enigma room was a great addition too: it added a fun vibe to the whole experience.",
    logo: `${LOGO}/parkos.webp`,
  },
  {
    bedrijf: "Flevoland",
    quote:
      "Meeting Masters heeft de regio Flevoland ondersteund in het opzetten en uitvoeren van online informatiebijeenkomsten over de wet van school naar duurzaam werk. Het thema was inspireren en dat is gelukt! De online omgeving waar wij gebruik van maakten was inspirerend en nodigde de deelnemers uit om in diverse themakamers met elkaar in gesprek te gaan. Emilie en haar team hebben ons hier geweldig in geadviseerd en geholpen!",
    quoteEn:
      "Meeting Masters supported the Flevoland region in setting up and running online information sessions about the act on moving from school to lasting work. The theme was to inspire, and that is exactly what happened. The online environment we used was inspiring and invited participants to talk to one another in a range of themed rooms. Emilie and her team advised and helped us brilliantly along the way.",
    logo: `${LOGO}/flevoland.webp`,
  },
];
