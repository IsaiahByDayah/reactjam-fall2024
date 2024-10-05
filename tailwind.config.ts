import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import defaultTheme from "tailwindcss/defaultTheme"

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
  plugins: [typography, forms],
}
