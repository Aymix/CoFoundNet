import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#137fec",
                secondary: "#E07A5F", // Terracotta
                "background-light": "#FDFBF7", // Light Sand
                "background-sand-dark": "#F2EFE9", // Slightly darker sand for contrast
                "background-dark": "#101922",
            },
            fontFamily: {
                display: ["Plus Jakarta Sans", "Noto Sans", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "1rem",
                lg: "2rem",
                xl: "3rem",
                full: "9999px",
            },
            backgroundImage: {
                moucharabiya: "radial-gradient(circle, #E07A5F 1.5px, transparent 1.5px)",
            },
        },
    },
    plugins: [],
};

export default config;
