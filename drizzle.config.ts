import { env } from "@/env";
import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
config();

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
