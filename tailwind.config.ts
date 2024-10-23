import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-default": "linear-gradient(to bottom, #d4c9ba, #fefafb)",
        "gradient-dark": "",
      },
      fontFamily: {
        agdasima: ["var(--font-agdasima)", "sans-serif"],
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
      },
      spacing: {
        "emoji-sm": "2.5rem", // 24px = 1.5rem
        "emoji-md": "3rem", // 48px = 3rem
        "emoji-lg": "5rem", // 72px = 4.5rem
      },
      colors: {
        textColor: {
          header: {
            DEFAULT: "#000000",
            dark: "ffffff",
          },
          body: {
            DEFAULT: "#767374",
            dark: "",
          },
          button: {
            DEFAULT: "#ffffff",
            defaultHover: "",
            defaultFocus: "",
            primary: "#ea4d34",
            primaryHover: "",
            primaryFocus: "",
            secondary: "",
            secondaryHover: "",
            secondaryFocus: "",
            dark: "",
          },
        },
        background: {
          navbar: {
            DEFAULT: "#ffffff",
            dark: "",
          },
        },
      },
      borderRadius: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
