import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                backgroundz1: "#121212",
                backgroundz2: "#171717",
                buttons: "#696868",
                foreground: "#FFF",
            },
            fontFamily: {
                mono: ["JetBrains Mono", "mono"],
                sans: ["Rubik", "sans"],
            },
        },
    },
    plugins: [],
};
export default config;
