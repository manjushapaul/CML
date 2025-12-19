/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // Explicitly use webpack for @react-pdf/renderer compatibility
  experimental: {
    webpackBuildWorker: false,
  },
  // Empty turbopack config to use webpack instead
  turbopack: {},
  webpack: (config, { isServer }) => {
    // Fix for @react-pdf/renderer in Next.js
    if (isServer) {
      config.externals = [...(config.externals || []), 'canvas', 'jsdom']
    }
    // Resolve canvas for client-side if needed
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    }
    return config
  },
}

module.exports = nextConfig
