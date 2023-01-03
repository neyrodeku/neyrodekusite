/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.html",
        "./src/**/*.js",
        "./public/**/*.html",
        "./public/**/*.js",
        "./src/index.html",
        "./public/index.html",
    ],
    theme: {
        extend: {
            keyframes: {
                moveRight: {
                    "0%": { transform: "translate(0px)" },
                    "100%": { transform: "translate(36px)" },
                },
                moveLeft: {
                    "0%": { transform: "translate(0px)" },
                    "100%": { transform: "translate(-36px)" },
                },
                borderRight: {
                    
                }
            },
            animation: {
                moveRight: "moveRight .1s ease-in-out forwards",
                moveLeft: "moveLeft .1s ease-in-out forwards",
            },
            colors: {
                "stone-300-dark": "rgba(214, 211, 209, 0.6)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
