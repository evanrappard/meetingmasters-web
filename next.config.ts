import type { NextConfig } from "next";

const enPaths = [
  "home", "about", "about/team", "about/quality", "about/partners", "about/csr",
  "blog", "cases", "contact", "csr", "design-preview", "escape-rooms", "events",
  "games-tools", "games-tools/escape-masters", "games-tools/ravenhack",
  "inspiratie", "layout-preview", "meeting-formats", "partners",
  "planning-support", "quality", "remote-office", "strategy-concept",
  "team", "testimonials",
];

const nextConfig: NextConfig = {
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
