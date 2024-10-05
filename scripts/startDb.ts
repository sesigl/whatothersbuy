import {exec} from 'child_process';
import {config} from 'dotenv';
import {parseDbUrl} from "../src/lib/infrastructure/db/db.ts";

const startPostgres = () => {

    // read env variables from .env
    config();

    const requiredEnvVars = ['DB_URL'];
    const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

    if (missingEnvVars.length > 0) {
        console.error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
        return;
    }

    const { port, user, password, database } = parseDbUrl(process.env.DB_URL!)

    const command = `docker run --name postgres-dev -e POSTGRES_PASSWORD=${password} -e POSTGRES_USER=${user} -e POSTGRES_DB=${database} -d -p ${port}:${port} postgres:16.3-alpine3.20`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting PostgreSQL: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        console.log(`PostgreSQL started successfully: ${stdout}`);
    });
};

startPostgres();