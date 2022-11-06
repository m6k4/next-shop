/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'], 
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'immense-island-34163.herokuapp.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'next-shop-m6k4.vercel.app',
        pathname: '/_next/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      }
    ],
  },
}

module.exports = nextConfig
