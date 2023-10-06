import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                backgroundz1: "#121212",
                backgroundz2: "#171717",
                foreground: "#FFF",
            },
            fontFamily: {
                JetBrains_Mono: ["JetBrains Mono", "mono"],
                Rubik: ["Rubik", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
