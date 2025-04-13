// @ts-check
import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: "@astrojs/image/squoosh",
      config: {},
    },
  },
});
