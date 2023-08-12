import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#172525",
        secondary: "#FDA043",
        title: "#f69805",
      },
      fontFamily: {
        titles: ["'Dancing Script'", "cursive"],
      },
      height: (theme) => ({
        "screen/2": "40vh",
        "screen/3": "calc(100vh / 3)",
        "screen/3/4": "calc(75vh)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  plugins: [],
};
export default config;
