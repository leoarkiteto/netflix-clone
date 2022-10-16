/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self; script-src 'none; sandbox;",
    domains: ['rb.gy', 'image.tmdb.org']
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
