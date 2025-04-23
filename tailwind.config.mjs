/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@iconify/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["M PLUS Rounded 1c", "verdana", "sans-serif"],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors({
      prefix: "i",
      overrideOnly: true,
    }),
  ],
};
