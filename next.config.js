/** @type {import('next').NextConfig} */
const nextConfig = {
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