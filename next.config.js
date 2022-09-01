/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gimg2.baidu.com'],
  },
  distDir: 'build',
}

module.exports = nextConfig
