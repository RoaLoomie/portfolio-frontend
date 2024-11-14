  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    images:{
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'th.bing.com',
        },
        {
          protocol: 'https',
          hostname: 'portfolio-salome.s3.us-east-2.amazonaws.com',
        },
      ]
    }
  }

  export default nextConfig;
