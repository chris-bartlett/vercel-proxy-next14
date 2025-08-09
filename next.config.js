/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/my-test-route/:slug",
        destination:
          "https://vercel-proxy-next15.vercel.app/my-test-route/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
