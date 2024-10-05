import { getViteConfig } from 'astro/config';
import node from "@astrojs/node";

export default getViteConfig({
    test: {
        exclude: ["test/e2e/**/*"],
        include: ["test/**/*.spec.ts"],
    }
}, {
    adapter: node({
        mode: "standalone"
    }),

});