/**
 * Next.js build/runtime options.
 * Strict mode is off to avoid double-mount side effects during local demos;
 * ignoreBuildErrors allows deploy when type errors remain (tighten for production).
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
