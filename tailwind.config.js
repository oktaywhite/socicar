/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
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
        socicar: ['Urbanist', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },

      colors: {
        //main colors
        'caqua': '#00FFEA',
        'cblue': '#00B2FF',
        //black & white
        'cblack': '#0D0C0E',
        'ctextblack': '#464646',
        'clight-gray': "#F2F2F2",
        'cgray': "#A0A0A0",
        'cdarkgray': '#414141',
        'buttonblack': '#22262A',
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

