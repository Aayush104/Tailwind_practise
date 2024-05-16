const navDialog = document.getElementById('nav-dialog');



const handleMenu = ()=>{
   navDialog.classList.toggle('hidden')

}




// For scrolling behaviour
const scrollToSection = (element) => {
   element.scrollIntoView({ behavior: 'smooth' });
};



document.addEventListener('click', (e) => {
   const targetClassList = e.target.classList;

   if (targetClassList.contains('nav_project') || targetClassList.contains('foot_project')) {
      scrollToSection(document.querySelector('.Project')) ;
      handleMenu(document.getElementById('project'));
   } else if (targetClassList.contains('nav_about') || targetClassList.contains('foot_about')) {
      scrollToSection(document.querySelector('.About'));
      handleMenu(document.getElementById('about'));
   } else if (targetClassList.contains('nav_home') || targetClassList.contains('foot_home')) {
      scrollToSection(document.querySelector('.Home'));
      handleMenu(document.getElementById('home'));
      
   } else if (targetClassList.contains('nav_contact') || targetClassList.contains('foot_contact')) {
      scrollToSection(document.querySelector('.Contact'));
      handleMenu(document.getElementById('contact'));
   }
});
