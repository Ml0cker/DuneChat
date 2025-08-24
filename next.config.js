/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Ignore type errors during build (useful for noisy third-party packages)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint during production builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;


