/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red : '#048ed6',
        primary : '#048ed6',
        secondary : '#003159',
        
      }},
  },
  daisyui: {
    themes: ["light",],
  },
  plugins: [require("daisyui")],
}

