import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                background: "#121212",
                foreground: "#FFF",
            },
        },
    },
    plugins: [],
};
export default config;
