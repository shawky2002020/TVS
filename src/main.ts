
import { initGsapAnimations } from './scripts/gsap-animations';

document.addEventListener('DOMContentLoaded', () => {
  initGsapAnimations();
});

// window.addEventListener('scroll', () => {
//   const backImg = document.querySelector('.back img') as HTMLImageElement;
//   const scrollY = window.scrollY;
//   console.log(backImg);
  
//   if (backImg) {
    
//     backImg.style.objectPosition = `center -${scrollY * 0.2}px`; // Adjust multiplier for effect strength
//   }
// });

import './projects-slider';
