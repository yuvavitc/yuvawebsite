/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        woodsmoke: "#040505",
        tango: "#EF7114",
        matisse: "#185898",
        apple: "#4A972F",
      },
    },
  },
  plugins: [],
};
