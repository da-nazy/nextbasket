/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    webpack(config) {
      // config.infrastructureLogging = { debug: /PackFileCache/ };
      return config;
    },
    images: {
      remotePatterns: [
        {
          hostname: "**",
          protocol: "https", // Optional, defaults to 'https'
        },
      ],
    
    },
    typescript: {
      ignoreBuildErrors: false,
    },
  };
export default nextConfig;
