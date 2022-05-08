/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
  images: {
    domains: ["localhost:3000", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
