/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {colors: {
      customA: '#dddddd', //banner
      customB: '#04332B', //navBar
      customC: '#d8d8c0', //nada
      customD: '#04332B', //BG
      customE: '#ffffff', //texto
      primary: '#429A82',
      accent: '#04332B',
    },
  },
  },
  plugins: [],
}