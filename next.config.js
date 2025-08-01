/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
   
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 