/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      spacing: {
        horizontal: "1.1rem",
      },
      colors: {
        primary: {
          DEFAULT: "rgb(94, 161, 122)",
          50: "rgb(239, 246, 242)",
          100: "rgb(223, 236, 228)",
          200: "rgb(191, 217, 202)",
          300: "rgb(159, 198, 175)",
          400: "rgb(126, 180, 149)",
          500: "rgb(94, 161, 122)",
          600: "rgb(75, 129, 98)",
          700: "rgb(57, 96, 73)",
          800: "rgb(38, 64, 49)",
          900: "rgb(19, 32, 24)",
          950: "rgb(9, 16, 12)",
        },
      },
    },
  },
  plugins: [],
};
