import type { NextConfig } from "next";

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
  // Anti-clickjacking — eigen pagina's mogen alleen in een same-origin frame (bv. Sanity-preview)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Browser mag content-types niet "raden"
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Lek geen volledige referrer naar externe sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Schakel ongebruikte browser-API's uit
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
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
      // Virtueel Kantoor herstructurering: remote-office → virtual-office; subpagina's samengevoegd/hernoemd
      { source: "/nl/remote-office", destination: "/nl/virtual-office", permanent: true },
      { source: "/nl/virtual-office/huur", destination: "/nl/virtual-office/huren", permanent: true },
      { source: "/nl/virtual-office/bouw", destination: "/nl/virtual-office/fundament", permanent: true },
      { source: "/nl/virtual-office/cultuur", destination: "/nl/virtual-office/fundament", permanent: true },
      // Oude losse (Engelse) structuur geconsolideerd onder /nl
      { source: "/technology", destination: "/nl/technologie", permanent: true },
      { source: "/technology/:path*", destination: "/nl/technologie/:path*", permanent: true },
      { source: "/games", destination: "/nl/games-tools", permanent: true },
      { source: "/games/escape-masters", destination: "/nl/games-tools/escape-masters", permanent: true },
      { source: "/games/ravenhack", destination: "/nl/games-tools/ravenhack", permanent: true },
      { source: "/games/maatwerk", destination: "/nl/games-tools/maatwerk", permanent: true },
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
