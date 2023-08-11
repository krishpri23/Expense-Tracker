module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   primary: "#01B9A8",
    //   darkBlue: "hsl(228, 39%, 23%)",
    //   darkGrayBlue: "hsl(227, 12%, 61%)",
    //   veryDarkBlue: "hsl(233, 12%, 13%)",
    //   veryPaleRed: "hsl(13, 100%, 96%)",
    //   veryLightGray: "hsl(0, 0%, 98%)",
    // },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  extend: {},
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
  },

  plugins: [],
};
