import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#fffbf1",
        "bg-warm": "#fdf3d8",
        ink:     "#1c1e22",
        muted:   "#7a7060",
        accent:  "#c9a96e",
      },
      fontFamily: {
        sans:    ["var(--font-raleway)", "sans-serif"],
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
