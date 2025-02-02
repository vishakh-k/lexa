module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lexa: {
          50: "#F0F7FF",
          100: "#E0EFFF",
          200: "#B9DCFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
      },
      fontFamily: {
        logo: ["Montserrat", "sans-serif"], // You can choose a different font
      },
    },
  },
  plugins: [],
};
