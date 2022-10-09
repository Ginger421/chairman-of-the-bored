/** @type {import('css').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'girl' : "url(../src/assets/bored-girl.png)",
        'main' : "url(../src/assets/main-background.jpg)",
        'about' : "url(../src/assets/about-background.jpg)",
        'leaderboard' : "url(../src/assets/leaderboard.jpg)",
      },
    },
  },
  plugins: [],
};
