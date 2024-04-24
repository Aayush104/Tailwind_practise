/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        "primary": '#2a69e3',
      
      },
      fontSize: {
        'xs': '0.75rem',    
        'sm': '0.875rem',   
        'base': '1.1rem',
        'xlbt':'1.8rem',
        'bt':'1.2rem',  
        'lg': '2rem',  
        'xl': '2.3rem',
        'icons':'1.6rem',
        'heading':'2.8rem' ,   
        '2xl': '3.8rem',    
        '3xl': '1.875rem',  
        
      },
      width:{
        'xs': '4rem',
        'lg': "25rem"
      },
      margin:{
        'section':'5rem'
      },
      backgroundImage:{
        "hero":"url('/img/bg.png')"
      },
      height:{
        "full":"85vh",
      }
    },
  },
  plugins: [],
}