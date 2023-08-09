/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red : '#d71d24',
        
      }},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
  
