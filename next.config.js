/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Optimize barrel imports — avoids loading the entire framer-motion
    // module graph on every import (bundle-barrel-imports rule)
    optimizePackageImports: ["framer-motion"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "api.iconify.design" },
      { protocol: "https", hostname: "media.licdn.com" },
    ],
  },
}

module.exports = nextConfig
