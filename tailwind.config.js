/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        assistant: ["Assistant-ExtraBold"],
      },
    },
    colors: {
      "card-color": "#B8B56B",
      "bg-light": "#ECE9F6",
      "primary-green": "#98B847",
      "primary-accent": "#AADF26",
      "card-pic": "#824057",
      curriculum: "#9C9717",
    },
  },
  plugins: [],
};
