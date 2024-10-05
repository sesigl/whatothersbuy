import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

if (!process.env.DB_URL) {
  throw new Error("DB_URL is not defined");
}

const client = postgres(process.env.DB_URL);
const db = drizzle(client);

export default db;
