module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFanily: {
      sans: ["muli", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      bold: 600, 
    },
    extend: {
      colors: {
        coral: {
          600: "#FA7268",
        },
      },
      opacity: {
        10: "0.1",
        20: "0.2",
        69: "0.69",
        95: "0.95",
      },
    },
  },
  plugins: [],
};
