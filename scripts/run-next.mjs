import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const command = process.argv[2];
const extraArgs = process.argv.slice(3);

if (!["dev", "build", "start"].includes(command)) {
  console.error(`Unsupported Next command: ${command ?? "missing"}`);
  process.exit(1);
}

const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const distDir = command === "dev" ? ".next-dev" : ".next";

const child = spawn(process.execPath, [nextBin, command, ...extraArgs], {
  cwd: process.cwd(),
  stdio: "inherit",
  env: {
    ...process.env,
    NEXT_DIST_DIR: distDir
  }
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
