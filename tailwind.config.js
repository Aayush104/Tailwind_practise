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
        'bt':'1.1rem',       
        'lg': '1.500rem',  
        'xl': '2.5rem',    
        '2xl': '4.5rem',    
        '3xl': '1.875rem',  
        
      },
      width:{
        'xs': '4rem',
        'lg': "25rem"
      }
    },
  },
  plugins: [],
}