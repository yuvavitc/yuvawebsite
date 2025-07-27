/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        tango: "#EF7114",
        woodsmoke: "#040505",
        matisse: "#185898",
        apple: "#4A972F",
      },
      fontFamily: {
        heading: ["'DM Serif Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
