
////////
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Hot Module Replacement (HMR) optimization for development
    if (dev && !isServer) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: ['react-refresh/babel'],
        },
      });
    }

    return config;
  },
};

export default nextConfig;
