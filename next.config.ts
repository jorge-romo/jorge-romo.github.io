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
  },
  
};

module.exports = nextConfig;
