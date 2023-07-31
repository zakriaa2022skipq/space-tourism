/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        "mobile-home": "url('./assets/home/background-home-mobile.jpg')",
        "tablet-home": "url('./assets/home/background-home-tablet.jpg')",
        "desktop-home": "url('./assets/home/background-home-desktop.jpg')",
        "mobile-destination":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "tablet-destination":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "desktop-destination":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "mobile-crew": "url('./assets/crew/background-crew-mobile.jpg')",
        "tablet-crew": "url('./assets/crew/background-crew-tablet.jpg')",
        "desktop-crew": "url('./assets/crew/background-crew-desktop.jpg')",
        "mobile-tech":
          "url('./assets/technology/background-technology-mobile.jpg')",
        "tablet-tech":
          "url('./assets/technology/background-technology-tablet.jpg')",
        "desktop-tech":
          "url('./assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
