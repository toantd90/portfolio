/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
}

module.exports = nextConfig
