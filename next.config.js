/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["d37ux0sksrhmoi.cloudfront.net"],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd37ux0sksrhmoi.cloudfront.net',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
}