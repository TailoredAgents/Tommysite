import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The gallery already uses compressed WebP files, so serve them directly.
  // This also keeps local development and Render independent of Cloudflare Images.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
