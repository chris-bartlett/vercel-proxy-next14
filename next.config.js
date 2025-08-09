/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/my-test-route/:slug",
        destination:
          "https://vercel-proxy-next15.vercel.app/my-test-route/:slug",
      },
      {
        source: "/_next/:path*",
        destination: "https://vercel-proxy-next15.vercel.app/_next/:path*",
      },
      {
        source: "/static/:path*",
        destination: "https://vercel-proxy-next15.vercel.app/static/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
