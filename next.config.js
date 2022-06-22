/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MACAQUINHO_API: process.env.MACAQUINHO_API,
  },
};

module.exports = nextConfig;
