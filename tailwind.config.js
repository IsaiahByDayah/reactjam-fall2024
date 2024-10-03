const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        "honey-blot": ["HoneyBlot", "sans-serif"],
        "honey-pigeon": ["HoneyPigeon", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        playpen: ["Playpen", "sans-serif"],
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
