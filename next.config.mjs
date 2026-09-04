const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  assetPrefix: isGithubPages ? basePath : undefined,
  basePath: isGithubPages ? basePath : undefined,
  devIndicators: false,
  images: {
    unoptimized: true
  },
  output: "export",
  trailingSlash: true,
  reactStrictMode: true
};

export default nextConfig;
