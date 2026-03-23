import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const isMonorepoCheckout = fs.existsSync(
  path.join(repoRoot, "backend", "src", "app", "server.js")
);

/** @type {import("next").NextConfig} */
const nextConfig = isMonorepoCheckout
  ? {
      outputFileTracingRoot: repoRoot
    }
  : {};

export default nextConfig;