/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens:{
    'xxs': "320px",
    'xs' : "375px",
    'mdl' : "425px",
    'sm' : '640px',
    'md' : '768px',
    'lg': '1024px',
    'xl': '1280px',
    'lxl': '1440px',
    '2xl': '1536px',    
  },
  theme: {
    extend: {
      colors: {
        primary: "#D14D72",
        secondary: "#FFABAB",
        tertiary: "#FCC8D1",
        lightest: "#FEF2F4",
      },
      fontFamily: {
        bodyFont: ["Quicksand", "sans-serif"],
        titleFont: ["Vollkorn", "serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(220,168,177,0.4)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

