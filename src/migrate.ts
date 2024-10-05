import { migrate } from "drizzle-orm/postgres-js/migrator";
import { config } from "dotenv";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js/driver";
import { getDb } from "./lib/infrastructure/db/db.ts";

config({ path: ".env" });

// error if env variable DB_URL is not set
if (!process.env.DB_URL) {
  console.error("Environment variable DB_URL not set");
  process.exit(1);
}

export const startMigrate = async (db: PostgresJsDatabase = getDb()) => {
  try {
    await migrate(db, { migrationsFolder: "./migration" });
    console.log("Migration completed");
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
};

import { resolve } from "path";
import { fileURLToPath } from "url";

const pathToThisFile = resolve(fileURLToPath(import.meta.url));
const pathPassedToNode = resolve(process.argv[1]);
const isThisFileBeingRunViaCLI = pathToThisFile.includes(pathPassedToNode);

if (isThisFileBeingRunViaCLI) {
  startMigrate().then(() => process.exit(0));
}
