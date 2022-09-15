/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["archive.much.go.kr"],
  },
  env: {
    HOSTNAME: process.env.HOSTNAME,
    CUL_SERVICE_KEY: process.env.CUL_SERVICE_KEY,
    CUL_GITHUB_PAGE: process.env.CUL_GITHUB_PAGE,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
