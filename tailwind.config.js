/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  mode: 'jit',
  darkMode: 'class',
  theme: 
  {
    container: {
      center: true,
    },

    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1496px',
    },

    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lexend: ['Lexend Deca', 'sans-serif'],
        kalnia: ['Kalnia', 'sans-serif'],
      },

      colors: {
        //main colors
        'caqua': '#00FFEA',
        'cblue': '#00B2FF',
        //black & white
        'cblack': '#22262A',
        'ctextblack': '#464646',
        'clight-gray': "#F2F2F2",
        'cgray': "#A0A0A0",
        'cdarkgray': '#414141',
        //badges
        //positive
        'badge-light-green': '#CCF3D7',
        'badge-dark-green': '#416E53',
        //negative
        'badge-light-red': '#F9E8E9',
        'badge-dark-red': '#7F4141',
        //warning
        'badge-light-orange': '#FFF4E4',
        'badge-dark-orange': '#C38526',
      },
    },
  },
  plugins: [],
}

