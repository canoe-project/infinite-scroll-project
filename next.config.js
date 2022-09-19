/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["archive.much.go.kr"],
  },
  env: {
    HOSTNAME: dev
      ? "http://localhost:3000"
      : "https://infinite-scroll-project.vercel.app/",
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
