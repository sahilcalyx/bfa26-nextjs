import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Keep existing shim for react-router-dom
      "react-router-dom": path.resolve(__dirname, "lib", "react-router-dom-shim.js"),
      // Replace react-helmet with proxy to react-helmet-async
      "react-helmet": path.resolve(__dirname, "lib", "react-helmet-proxy.js"),
      // On the server, provide a safe shim for odometer to avoid `document` usage
      ...(isServer
        ? {
            odometer: path.resolve(__dirname, "lib", "odometer-server-shim.js"),
          }
        : {}),
    };
    return config;
  },
};

export default nextConfig;
