import {exec} from "child_process";


const stopPostgres = () => {
    const command = `docker stop postgres-dev && docker rm postgres-dev`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping PostgreSQL: ${error.message}`);
            return;
        }

        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        console.log(`PostgreSQL stopped and removed successfully: ${stdout}`);
    });
};

stopPostgres();