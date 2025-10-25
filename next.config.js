/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable RSC support
  trailingSlash: true,
  images: {
    unoptimized: true,
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
  // Set a consistent port to avoid conflicts
  devServer: {
    port: 3001,
  },
}

module.exports = nextConfig