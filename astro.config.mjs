import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";

import { siteConfig } from "./src/config";

// @ts-expected-error
export default defineConfig({
  site: siteConfig.site,
  output: "server",
  adapter: deno(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon(), mdx(), sitemap()],
  markdown: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
    ],
  },
});
