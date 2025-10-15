/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "custom-lime" : "hsl(61, 70%, 52%)",
        "custom-red" : "hsl(4, 69%, 50%)"
      },
      fontFamily: {
        "jarkata" : '"Plus Jakarta Sans", sans-serif'
      }, 
      screens: {
        "mobile" : {
          min : "0px",
          max : "600px"
        },
        "laptop" : {
          min : "600px"
        }
      }
    },
  },
  plugins: [],
}
