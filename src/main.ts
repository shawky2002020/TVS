
import { initGsapAnimations } from './scripts/home/gsap-animations';
document.addEventListener('DOMContentLoaded', () => {
  initGsapAnimations();
  const navServices = document.querySelector('.nav-services') as HTMLElement | null;
  if (navServices) {
    navServices.addEventListener('click', (e) => {
      navServices.classList.toggle('active');
      e.stopPropagation();
    });
  }
});

// window.addEventListener('scroll', () => {
//   const backImg = document.querySelector('.back img') as HTMLImageElement;
//   const scrollY = window.scrollY;
//   console.log(backImg);
  
//   if (backImg && window.innerWidth > 768) {
    
//     backImg.style.transform = `translateY(${scrollY * -0.1}px)`; // Try 0.1 to 0.3 for best effect
//   }
// });

import './scripts/home/projects-slider';
