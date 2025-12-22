/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    VEHICLE_CRM_API_TOKEN: process.env.VEHICLE_CRM_API_TOKEN,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL,
    NEXT_PUBLIC_VEHICLE_CRM_API_TOKEN: process.env.NEXT_PUBLIC_VEHICLE_CRM_API_TOKEN || process.env.VEHICLE_CRM_API_TOKEN,
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable persistent filesystem cache in dev to avoid EPERM/ENOENT rename errors on Windows
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false
    }
    return config
  },
  // Next.js doesn't support devServer in config
  // Port can be set using --port flag or in package.json scripts
}

module.exports = nextConfig