module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white-smoke": "#f5f5f5",
        "dark-green": "#6c756b",
        "light-blue": "#c7d9e8",
        "crimson-red": "#dc143c",
        "crimson-light-red": "#ff3d64",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
