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
};

module.exports = nextConfig;
