import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

/**
 * Alle IPv4-adressen van deze machine, bijvoorbeeld 192.168.1.44.
 *
 * Next 16 weigert in ontwikkelmodus verzoeken naar /_next/* die van een ander
 * origin komen dan waarop de server denkt te draaien. Bekijk je de site op je
 * telefoon via het netwerk-IP, dan geeft elk JavaScript-bestand een 403: de
 * pagina laadt en ziet er goed uit, maar er draait niets. Geen menu, geen
 * cookiebanner, geen zoekfilters. Door de eigen adressen toe te staan werkt de
 * site op je telefoon net zo als op localhost. Dit raakt alleen `next dev`.
 */
const eigenNetwerkAdressen = Object.values(networkInterfaces())
  .flat()
  .filter((net) => net?.family === "IPv4")
  .map((net) => net!.address);

/**
 * Engelse adressen die (nog) geen eigen pagina hebben en dus doorverwijzen naar
 * het Nederlands. Zodra een pagina wél in het Engels bestaat, haal je hem hier
 * weg — anders is hij onbereikbaar, want doorverwijzingen gaan vóór op routes.
 *
 * Eruit gehaald omdat de Engelse pagina inmiddels bestaat: "blog" en
 * "contact". De pagina's met een eigen Engels adres (/en/quote, /en/booking,
 * /en/newsletter, /en/expert-advice) stonden hier nooit in.
 */
const enPaths = [
  "home", "about", "about/team", "about/quality", "about/partners", "about/csr",
  "cases", "csr", "design-preview", "escape-rooms", "events",
  "games-tools", "games-tools/escape-masters", "games-tools/ravenhack",
  "inspiratie", "layout-preview", "meeting-formats", "partners",
  "planning-support", "quality", "remote-office", "strategy-concept",
  "team",
];

const securityHeaders = [
  // Forceer HTTPS (Vercel serveert alles al via TLS)
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // GEEN X-Frame-Options: de site moet in een iframe kunnen draaien, o.a. in
  // SpatialChat en andere meetingomgevingen. De tools zijn daar zelfs voor
  // bedoeld. Zet dit dus niet terug op SAMEORIGIN zonder overleg.
  // Browser mag content-types niet "raden"
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Lek geen volledige referrer naar externe sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Schakel ongebruikte browser-API's uit
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: eigenNetwerkAdressen,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // De kaarten mogen niet los in Google Afbeeldingen belanden; ze horen
        // alleen binnen de tool. Zie ook app/robots.ts.
        source: "/images/tools/inspiratiekaarten/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, noimageindex" }],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect /en root
      { source: "/en", destination: "/nl/home", permanent: true },
      // Redirect each /en/[path] → /nl/[path]
      ...enPaths.map((p) => ({
        source: `/en/${p}`,
        destination: `/nl/${p}`,
        permanent: true,
      })),
      // Virtueel Kantoor verplaatst naar /nl/virtual-office
      { source: "/virtual-office", destination: "/nl/virtual-office", permanent: true },
      { source: "/virtual-office/:path*", destination: "/nl/virtual-office/:path*", permanent: true },
      // ── Oude bloglinks ──
      // De huidige site gebruikt /nl/blogs/<lange-slug>, de nieuwe
      // /nl/blog/<korte-slug>. Zonder deze regels breekt elke link die ooit in
      // een nieuwsbrief of op LinkedIn is gedeeld. De drie codes zijn
      // automatisch gegenereerde adressen van het oude systeem; welk artikel
      // erachter zat is per stuk nagekeken.
      { source: "/nl/blogs/terug-naar-kantoor-het-antwoord-op-de-verkeerde-vraag", destination: "/nl/blog/terug-naar-kantoor", permanent: true },
      { source: "/nl/blogs/vergelijking-online-offline", destination: "/nl/blog/niet-hetzelfde-wel-goed", permanent: true },
      { source: "/nl/blogs/heen-en-weer-thuiswerken-of-toch-terug-naar-kantoor", destination: "/nl/blog/heen-en-weer", permanent: true },
      { source: "/nl/blogs/online-contact-maken-is-een-vak-en-dat-is-goed-nieuws", destination: "/nl/blog/online-beheersen", permanent: true },
      { source: "/nl/blogs/wat-gamers-weten-over-online-samenzijn-dat-organisaties-nog-moeten-leren", destination: "/nl/blog/wat-gamers-weten", permanent: true },
      { source: "/nl/blogs/rondjes-versus-vierkantjes", destination: "/nl/blog/rondjes-versus-vierkantjes", permanent: true },
      { source: "/nl/blogs/systeemwoede-maakt-meer-kapot-dan-je-lief-is", destination: "/nl/blog/systeemwoede", permanent: true },
      { source: "/nl/blogs/edcjyif97qx3ryz6x45nrt5wo9of1z", destination: "/nl/blog/ai-paradox", permanent: true },
      { source: "/nl/blogs/5sdvo1sdbtrac3ujijivy6mzxvbb6p", destination: "/nl/blog/acht-grens", permanent: true },
      { source: "/nl/blogs/oxifta9r3w3fm9vk7ks43dn2glz4tw", destination: "/nl/blog/stok-om-mee-te-slaan", permanent: true },
      { source: "/nl/blogs/een-online-thuis-voor-oud-olympiers-wereldwijd", destination: "/nl/blog/olympiers", permanent: true },
      // Het overzicht en al het overige onder /nl/blogs.
      { source: "/nl/blogs", destination: "/nl/blog", permanent: true },
      { source: "/nl/blogs/category/:tak", destination: "/nl/blog", permanent: true },
      { source: "/nl/blogs/:slug", destination: "/nl/blog", permanent: true },

      // Technologie-sectie herzien (aug 2026): hulp en tools losgetrokken, de
      // overlappende pagina's opgegaan in hun nieuwe plek. Zie
      // docs/technologie-herinrichting.md. De oude bestanden staan er nog —
      // deze doorverwijzingen gaan vóór op de routes, dus ze zijn niet meer
      // bereikbaar. Pas opruimen als de nieuwe opzet bevalt.
      { source: "/nl/technologie/faq", destination: "/nl/technologie/hulp", permanent: true },
      { source: "/nl/technologie/helpdesk", destination: "/nl/technologie/hulp", permanent: true },
      { source: "/nl/technologie/platforms", destination: "/nl/technologie/tools", permanent: true },
      { source: "/nl/technologie/hoe-het-werkt", destination: "/nl/technologie/spatialchat", permanent: true },
      { source: "/nl/technologie/support", destination: "/nl/technologie/tools", permanent: true },
      // De losse platformpagina's en de oude hub zijn opgegaan in het
      // overzicht op /tools. SpatialChat houdt wel een eigen pagina.
      { source: "/nl/technologie", destination: "/nl/technologie/tools", permanent: true },
      { source: "/nl/technologie/zoom", destination: "/nl/technologie/tools", permanent: true },
      { source: "/nl/technologie/teams", destination: "/nl/technologie/tools", permanent: true },
      { source: "/nl/technologie/zoom-events", destination: "/nl/technologie/tools", permanent: true },
      // Escape Room is vervangen door Online Teamuitje
      { source: "/nl/events/escaperoom", destination: "/nl/events/teamuitje", permanent: true },
      // Event-slugs gelijkgetrokken met de titels
      { source: "/nl/events/team-ontwikkeling", destination: "/nl/events/teambuilding", permanent: true },
      { source: "/nl/events/ontwikkeltraject", destination: "/nl/events/training-workshop", permanent: true },
      // Virtueel Kantoor herstructurering: remote-office → virtual-office; subpagina's samengevoegd/hernoemd
      { source: "/nl/remote-office", destination: "/nl/virtual-office", permanent: true },
      { source: "/nl/virtual-office/huur", destination: "/nl/virtual-office/huren", permanent: true },
      { source: "/nl/virtual-office/bouw", destination: "/nl/virtual-office/kantoor-cultuur", permanent: true },
      { source: "/nl/virtual-office/cultuur", destination: "/nl/virtual-office/kantoor-cultuur", permanent: true },
      { source: "/nl/virtual-office/fundament", destination: "/nl/virtual-office/kantoor-cultuur", permanent: true },
      // Oude losse (Engelse) structuur geconsolideerd onder /nl
      { source: "/technology", destination: "/nl/technologie", permanent: true },
      { source: "/technology/:path*", destination: "/nl/technologie/:path*", permanent: true },
      { source: "/games", destination: "/nl/games-tools", permanent: true },
      { source: "/games/escape-masters", destination: "/nl/games-tools", permanent: true },
      { source: "/games/ravenhack", destination: "/nl/games-tools/ravenhack", permanent: true },
      { source: "/games/maatwerk", destination: "/nl/games-tools", permanent: true },
      // Escape room, korte games en maatwerk staan nu samen op het overzicht
      { source: "/nl/games-tools/escape-masters", destination: "/nl/games-tools", permanent: true },
      { source: "/nl/games-tools/korte-games", destination: "/nl/games-tools", permanent: true },
      { source: "/nl/games-tools/maatwerk", destination: "/nl/games-tools", permanent: true },
      { source: "/games/tools/wheel-of-fortune", destination: "/nl/games-tools/tools/wheel-of-fortune", permanent: true },
      { source: "/games/tools/bingo", destination: "/nl/games-tools/tools/bingo", permanent: true },
      { source: "/games/tools/inspiration-cards", destination: "/nl/games-tools/tools/inspiration-cards", permanent: true },
      { source: "/games/tools/storytelling", destination: "/nl/games-tools/tools/storytelling", permanent: true },
      { source: "/games/:path*", destination: "/nl/games-tools", permanent: true },
      { source: "/events", destination: "/nl/events", permanent: true },
      { source: "/events/:path*", destination: "/nl/events/:path*", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "mgkzogvgqpfvsynrfera.supabase.co" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
