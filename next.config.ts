import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.credly.com',
        port: '',
        pathname: '/**',
      },
    ],
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
  },
  // Performance optimizations
  reactStrictMode: false,
  poweredByHeader: false, // optional, small perf boost
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },
};

module.exports = nextConfig;
