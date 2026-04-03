/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gtcfx-bucket.s3.ap-southeast-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.gtcfx.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
