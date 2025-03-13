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
  
};

module.exports = nextConfig;
