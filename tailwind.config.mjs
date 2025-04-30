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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "rgb(31, 41, 55)",
            lineHeight: "1.95",
            "h1, h2, h3, h4": {
              color: "rgb(17, 24, 39)",
              fontWeight: "700",
            },
            a: {
              color: "rgb(37, 99, 235)",
              "&:hover": {
                color: "rgb(29, 78, 216)",
              },
            },
            "ul li": {
              marginTop: "0.1em",
              marginBottom: "0.1em",
              lineHeight: "1.4",
            },

            code: {
              maxWidth: "100%",
              color: "rgb(31, 41, 55)",
              backgroundColor: "rgb(243, 244, 246)",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            blockquote: {
              maxWidth: "100%",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              padding: "0.75rem",
              marginLeft: "0",
              marginRight: "0",
            },
          },
        },
      },
    },
  },
  plugins: [
    addDynamicIconSelectors({
      prefix: "i",
      overrideOnly: true,
    }),
    require("@tailwindcss/typography"),
  ],
};
