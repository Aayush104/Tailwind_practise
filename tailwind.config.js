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
        'base': '1rem',
        'bt':'1.8rem',       
        'lg': '2rem',  
        'xl': '2.5rem',
        'heading':'2.8rem' ,   
        '2xl': '4.5rem',    
        '3xl': '1.875rem',  
        
      },
      width:{
        'xs': '4rem',
        'lg': "25rem"
      },
      margin:{
        'section':'4rem'
      }
    },
  },
  plugins: [],
}