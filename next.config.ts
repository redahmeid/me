import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Old Squarespace URLs (hmeid.com) keep working after the domain moves here.
  async redirects() {
    return [
      { source: "/football-blog", destination: "/blog", permanent: true },
      { source: "/football-blog/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/my-thoughts", destination: "/blog", permanent: true },
      { source: "/contact-me", destination: "/contact", permanent: true },
      { source: "/home", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
