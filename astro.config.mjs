import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Enable the Svelte renderer to support Svelte components.
  renderers: ["@astrojs/renderer-svelte"],
  buildOptions: {
    site: "https://dustindurden.com/",
    sitemap: true,
  },
  integrations: [sitemap()],
});
