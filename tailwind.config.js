/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#001233",
        secondaryColor: "#FF595A",
        tertiaryColor: "#CAC0B3",
        fourthColor: "#717EC3",
        fifthColor: "#496DDB",
      },
      fontFamily: {
        main: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
