/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,
  
  // Image optimization
  images: {
    domains: [], // Add domains for external images here
    formats: ['image/webp'],
  },
  
  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig