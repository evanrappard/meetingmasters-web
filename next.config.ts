import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "mgkzogvgqpfvsynrfera.supabase.co" },
    ],
  },
};

export default nextConfig;
