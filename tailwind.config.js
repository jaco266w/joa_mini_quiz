/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ['DM Serif Text', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", {
      matas: {
        "primary": "#002643",
        "primary-content": "#ffffff",
        "secondary": "#C09B8C",
        "accent": "#EB595D",
        "neutral": "#D8D1CB",
        "base-100": "#ffffff",
        "--rounded-box": "0.4rem",
      }
    }]
  },
};
