const colors = require("tailwindcss/colors");
module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            hntRegular: [
                "'HelveticaNowText-Regular'",
                "Helvetica",
                "Arial",
                "sans-serif",
            ],
            hntMedium: [
                "'HelveticaNowText-Medium'",
                "Helvetica",
                "Arial",
                "sans-serif",
            ],
            hntBlack: [
                "'HelveticaNowText-Black'",
                "Helvetica",
                "Arial",
                "sans-serif",
            ],
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1368px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            container: {
                center: true,
            },

            colors: {
                // Remove the "gray" colors from the theme.
                gray: {},
                grey: {
                    ...colors["blueGray"],
                },

                blue: {
                    DEFAULT: "#7B4AEE",
                    dark: "#1a2e4b",
                    100: "#EBF1FE",
                    200: "#3c68ff",
                },
                indigo: {
                    100: "#F2EEFF",
                    200: "#8356CD",
                    300: "#6239eb",
                },
                green: {
                    200: "#52CD99",
                },
                purple: {
                    DEFAULT: "#43A9D5",
                },
            },
            spacing: {
                88: "22rem",
            },
        },
    },
    variants: {
        extend: { translate: ["hover"], boxShadow: ["hover"] },
    },
    plugins: [],
};
