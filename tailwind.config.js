/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red : '#048ed6',
        primary : '#048ed6',
        secondary : '#003159',
        gray : '#3C4043',
        
      }},
      
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

