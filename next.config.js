/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  env: {
    SERVER: process.env.SERVER,
  },
};

module.exports = nextConfig;
