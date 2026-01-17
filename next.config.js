/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ovationwps.com',
      },
      {
        protocol: 'https',
        hostname: 'admin.ovationwps.com',
      },
    ],
  },
}

module.exports = nextConfig
