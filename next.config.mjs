import withBundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config) => {
    config.optimization.chunkIds = "named";
    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 20000,
      maxSize: 244000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };
    return config;
  },
};

const withNextIntl = createNextIntlPlugin();

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
  generateStatsFile: true,
  statsFilename: "stats.json",
  analyzerMode: "static",
  reportFilename: "analyze/report.html",
  defaultSizes: "gzip",
})(withNextIntl(nextConfig));
