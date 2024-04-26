import { withUt } from "uploadthing/tw";

/** @type {import('tailwindcss').Config} */
module.exports = withUt({
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
});
