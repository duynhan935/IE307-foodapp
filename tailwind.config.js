/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#FF3D71",
                secondary: "#1C1C1E",
                light: {
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    300: "#D1D5DB",
                },
                dark: {
                    100: "#374151",
                    200: "#1F2937",
                    300: "#111827",
                },
            },
        },
    },
    plugins: [],
};
