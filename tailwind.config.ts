import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                backgroundz1: "#121212",
                backgroundz2: "#171717",
                backgroundz3: "#292929",
                buttons: "#696868",
                foregroundz1: "#FFF",
                foregroundz2: "#CCC",
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
