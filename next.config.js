/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "assets.pokemon.com",
        protocol: "https",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
