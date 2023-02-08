module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
     screens: {
            'xs':'250px',
            'sm': '360px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1270px',
            '2xl' : '1536px'
        },
        
    extend: {
      colors:{
        'primary-clr1': '#FFBB00',
        'bg-darks':'#3a3939'
      },
      fontFamily: {
        sansserif:["sans-serif","Roboto"],
      },
    },
   
  },
  plugins: [],
}