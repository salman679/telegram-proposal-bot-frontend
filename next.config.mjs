import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const isMonorepoCheckout = fs.existsSync(
  path.join(repoRoot, "backend", "src", "app", "server.js")
);

export default function createNextConfig(phase) {
  return {
    ...(isMonorepoCheckout
      ? {
          outputFileTracingRoot: repoRoot
        }
      : {}),
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next"
  };
}

