/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primaryBg": "#f5f5f5",
        "labelColor": "#312a2a",
        "primary": "#00263f",
        "primaryHover": "#3945f8",
        "thirdBg": "#095484",
        "textColor": "#888888",
        "secondryColor": "#444444bf",
        "darkBg": "#212130",
      },
    },

  },

  plugins: [],
};
