// import type { NextConfig } from "next";
// import "./env"
// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


// import ".//env";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;