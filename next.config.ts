import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.56.1"],
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
};

export default nextConfig;
