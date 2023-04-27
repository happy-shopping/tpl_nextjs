/** @type {import('next').NextConfig} */
let BUILD_DIR = "loc";

switch (process.env.NEXT_PUBLIC_TLD) {
  case "loc":
    BUILD_DIR = "build/loc";
    break;
  case "dev":
    BUILD_DIR = "build/dev";
    break;
  case "kr":
    BUILD_DIR = "build/main";
    break;
  default:
    BUILD_DIR = "build/loc";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: BUILD_DIR,
  trailingSlash: true,
};

module.exports = nextConfig;
