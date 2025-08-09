module.exports = {
  async rewrites() {
    return [
      {
        source: "/my-test-route/:slug",
        destination: "/another-local-route/:slug", // must be internal
      },
    ];
  },
};
