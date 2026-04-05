/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const moves = [
      ["cfd-trading", "cfd-trading"],
      ["metals", "metals"],
      ["energy-cfds", "energy-cfds"],
    ];
    const out = [];
    for (const [fromSeg, toSeg] of moves) {
      out.push({
        source: `/trading/${fromSeg}`,
        destination: `/${toSeg}`,
        permanent: true,
      });
      for (const loc of ["ar", "zh"]) {
        out.push({
          source: `/${loc}/trading/${fromSeg}`,
          destination: `/${loc}/${toSeg}`,
          permanent: true,
        });
      }
    }
    return out;
  },
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
