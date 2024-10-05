import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { config } from "dotenv";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js/driver";

config({ path: ".env" });

let db: PostgresJsDatabase | null = null;

export function getDb(): PostgresJsDatabase {
  if (!process.env.DB_URL) {
    throw new Error("DB_URL is not defined");
  }

  if (db === null) {
    const queryClient = postgres(process.env.DB_URL, { max: 1 }); // will use psql environment variables

    db = drizzle(queryClient);
  }

  return db;
}

export interface DbUrlValues {
  protocol: string;
  user: string;
  password: string;
  host: string;
  port: string;
  database: string;
}

export function parseDbUrl(dbUrl: string): DbUrlValues {
  const regex =
    /(?<protocol>.*):\/\/(?<user>.*):(?<password>.*)@(?<host>.*):(?<port>.*)\/(?<database>.*)/;
  const match = dbUrl.match(regex);
  if (!match) {
    throw new Error("DB_URL is not in the correct format");
  }
  return match.groups as {
    protocol: string;
    user: string;
    password: string;
    host: string;
    port: string;
    database: string;
  };
}
