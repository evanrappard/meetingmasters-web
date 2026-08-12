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

const enPaths = [
  "home", "about", "about/team", "about/quality", "about/partners", "about/csr",
  "blog", "cases", "contact", "csr", "design-preview", "escape-rooms", "events",
  "games-tools", "games-tools/escape-masters", "games-tools/ravenhack",
  "inspiratie", "layout-preview", "meeting-formats", "partners",
  "planning-support", "quality", "remote-office", "strategy-concept",
  "team", "testimonials",
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
