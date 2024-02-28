/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url(./assets/home-background.jpg)",
        "about-background":
          "url(./assets/no-revisions-kWVImL5QxJI-unsplash.jpg)",
      },
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
    },
    screens: {
      smallMobile: "350px",
    },
  },
  plugins: [],
};
