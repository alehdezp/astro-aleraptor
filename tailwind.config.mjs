/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["M PLUS Rounded 1c", "verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
};
