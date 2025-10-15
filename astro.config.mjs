import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    // Example: allow processing all images from Hygraph
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.graphassets.com",
      },
    ],
  },

  integrations: [react()],
});