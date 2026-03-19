import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn-ilcgkon.nitrocdn.com" },
      { protocol: "https", hostname: "invest4kids.de" },
      { protocol: "https", hostname: "cdn.weglot.com" },
      { protocol: "https", hostname: "player.vimeo.com" },
      { protocol: "https", hostname: "i.vimeocdn.com" },
      { protocol: "https", hostname: "www.gstatic.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
