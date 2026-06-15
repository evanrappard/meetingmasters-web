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
