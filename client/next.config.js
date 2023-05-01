/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HUDDLE_KEY: process.env.HUDDLE_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
  },
}

module.exports = nextConfig
