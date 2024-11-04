import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

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
            dark: "#d9d9d9",
          },
          buttonText: {
            DEFAULT: "#ffffff",
            dark: "#000000",
            answerButton: "",
            answerButtonDark: "",
          },
          button: {
            DEFAULT: "#000000",
            defaultHover: "",
            defaultFocus: "",
            primary: "#ea4d34",
            primaryHover: "",
            primaryFocus: "",
            dark: "#ffffff",
          },
          answerButton: {
            DEFAULT: "#ffffff",
            hover: "#f0f0f0",
            focus: "#d9d9d9",
            dark: "#000000",
            darkHover: "#2a2a2a",
            darkFocus: "#4d4d4d",
          },
        },
        background: {
          navbar: {
            DEFAULT: "#ffffff",
            dark: "#000000",
          },
          statusCard: {
            DEFAULT: "#000000",
            red: "#ea4d34",
            blue: "#90c6d8",
            green: "#8dcd75",
            yellow: "#ffcb3e",
            purple: "#9c7af8",
          },
        },
      },
      borderRadius: {},
    },
  },
  plugins: [animate],
};
export default config;
