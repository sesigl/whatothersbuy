import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import auth from "auth-astro";
import node from "@astrojs/node";

// https://astro.build/config

console.log(`IS_LOCAL_PREVIEW: ${process.env.IS_LOCAL_PREVIEW}`)
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)

export default defineConfig({
  output: "server",
  adapter: (process.env.IS_LOCAL_PREVIEW || process.env.NODE_ENV === 'development') ? node({
    mode: "standalone"
  }) : vercel(
    {
      imageService: true, 
      imagesConfig: {
        domains: ["picsum.photos", "githubusercontent.com", "googleusercontent.com", "lh3.googleusercontent.com", "avatars.githubusercontent.com", "ca.slack-edge.com"],
        sizes: [320, 640, 1280],
      }
    }
  ),
  site: "https://example.com",
  integrations: [tailwind({ applyBaseStyles: false }), react(), auth()],
});