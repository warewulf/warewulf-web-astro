import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
      textShadow: {
        "3d": "2.75px 2.75px 0 #fdc13a",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          50: "#f0fdf4",
          100: "#dbfde7",
          200: "#baf8d1",
          300: "#84f1ad",
          400: "#47e181",
          500: "#1ec95f",
          600: "#13a64b",
          700: "#117839", // base color
          800: "#146735",
          900: "#13542e",
          950: "#042f17",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
  ],
};
