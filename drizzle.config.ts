import {type Config, defineConfig} from 'drizzle-kit';
import {parseDbUrl} from "./src/lib/infrastructure/db/db.ts";

const { host, port, user, password, database } = parseDbUrl(process.env.DB_URL!)
export default defineConfig({
    schema: './src/schema.ts',
    out: './migration',
    dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
    dbCredentials: {
        host: host,
        port: port,
        user: user,
        password: password,
        database: database,
    },
} as Config);