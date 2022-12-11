/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "840px",
      lg: "1200px",
    },
    extend: {
      colors: {
        primBlue: "#0F1378",
        lightBlue: "#F6FAFF",
        secWhite: "#FFFFFF",
        lightGrey: "#6B7280",
        textColor: "#1F2937",
      },
      fontWeight: {
        "b-300": "300",
        "b-400": "400",
        "b-500": "500",
        "b-600": "600",
        "b-700": "700",
        "b-800": "800",
        "b-900": "900",
        "bold-max": "1000",
      },
    },
  },
  plugins: [],
};
