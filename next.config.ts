import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "astro-zen.vercel.app",
      },
    ],
  },
};

export default nextConfig;
