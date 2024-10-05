
import Google from '@auth/core/providers/google';
import { defineConfig } from 'auth-astro';
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { getDb } from "./src/lib/infrastructure/db/db";
import { skillmatchCompanyId } from '@src/lib/infrastructure/repository/EmployeeInMemoryRepository';


export default defineConfig({
    adapter: DrizzleAdapter(getDb()),
    providers: [
        Google({
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    callbacks: {
        session: async (session) => {

            if (session?.user?.email?.includes("@skillmatch.de")) {
                session.companyId = skillmatchCompanyId;
            }

            if (session?.user?.email?.includes("akrillo89@gmail.com")) {
                session.companyId = skillmatchCompanyId;
            }
            return Promise.resolve(session);
        },
    },
});