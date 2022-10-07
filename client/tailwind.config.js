/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        girl: "url(../src/assets/bored-girl.png)",
      },
    },
  },
  plugins: [],
};
