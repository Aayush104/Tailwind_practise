/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        
  'mid':'901px',
        'laptop': '1024px',
        
  'lg_mid':'1000px',
        'desktop': '1280px',
       
      },
      colors:{
        "primary": '#2a69e3',
      
      },
      fontSize: {
        'xs': '0.9rem',    
        'sm': '0.875rem',   
        'base': '1.3rem',
        'xlbt':'1.8rem',
        'bt':'1.2rem',  
        'lg': '2rem',  
        'xl': '2.5rem',
        'icons':'1.5rem',
        'heading':'2.8rem',
        '1.3':'1.3rem',
        'pro_head': '1.652rem',
        'main_head':'3.5rem',  
        '2xl': '3.8rem',    
        '3xl': '1.875rem', 
        '1rem':' 1.008rem' ,
        "par":'1.150rem'
        
      },
      width:{
        'xs': '4rem',
        'img_width': '100px',
        'lg': "25rem",
       
      },
      margin:{
        'sx': '2.5rem',
        'section':'5rem',
        'section1': '8rem',
        'lg_section': "9rem"
      },
      backgroundImage:{
        "hero":"url('/img/bg.png')"
      },
      height:{
        "full":"85vh",
      },
      boxShadow:{
        "c_box":"0 0 10px rgba(0,0,0,0.2)"
      }
    },
  },
  plugins: [],
}