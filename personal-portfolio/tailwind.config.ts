import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                MFDFont: ["MFDFont", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
