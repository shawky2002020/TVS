
import { initGsapAnimations } from './scripts/gsap-animations';

document.addEventListener('DOMContentLoaded', () => {
  initGsapAnimations();
});

// window.addEventListener('scroll', () => {
//   const backImg = document.querySelector('.back img') as HTMLImageElement;
//   const scrollY = window.scrollY;
//   console.log(backImg);
  
//   if (backImg && window.innerWidth > 768) {
    
//     backImg.style.transform = `translateY(${scrollY * -0.1}px)`; // Try 0.1 to 0.3 for best effect
//   }
// });

import './projects-slider';
