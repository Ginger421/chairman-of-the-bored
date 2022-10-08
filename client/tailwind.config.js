/** @type {import('css').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'girl' : "url(../src/assets/bored-girl.png)",
        'main' : "url(../src/assets/option-2.png)",
      },
    },
  },
  plugins: [],
};
