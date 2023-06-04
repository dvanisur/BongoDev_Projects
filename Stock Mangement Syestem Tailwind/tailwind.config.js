/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        "nav-color":"linear-gradient(180deg,#5014ad,#8e13a6 25%,#c5109a 51%,#f22379 79%,#ff40b6)",
        "mbody-color":"#f6e1ff",
        "body-color":"#3b2a82",
        "text-color":"#3b2a82",
        "text-purple-color":"#cf8cff",
        "text-green-color":"#45fff9",
        "text-pink-color":"#C5109A;",
      },
    },
    
  },
  plugins: [],
}

