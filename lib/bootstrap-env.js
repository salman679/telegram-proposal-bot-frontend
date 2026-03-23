import "server-only";
import path from "node:path";
import dotenv from "dotenv";

const localEnvPath = path.join(process.cwd(), ".env.local");

dotenv.config({ path: localEnvPath, quiet: true });
dotenv.config({ quiet: true });