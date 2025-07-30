

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function animateClientSections() {
  gsap.utils.toArray('.client-section').forEach((section, i) => {
    const sec = section as HTMLElement;
    
    // Section slide-in
    gsap.from(sec, {
      x: -80,
      opacity: 0.5,
      duration: 1.1,
      ease: 'power3.out',
      delay: i * 0.08,
      scrollTrigger: {
        trigger: sec,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
        once: false,
      },
    });

    // Layered reveal for client-info
    const info = sec.querySelector('.client-info');
    if (info) {
      gsap.from(info, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.2 + i * 0.08,
        scrollTrigger: {
          trigger: sec,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      });

      // Animate logo pop-in
      const logo = info.querySelector('.client-logo img');
      if (logo) {
        gsap.from(logo, {
          scale: 0.5,
          opacity: 0,
          duration: 0.7,
          ease: 'back.out(1.7)',
          delay: 0.35 + i * 0.08,
          scrollTrigger: {
            trigger: sec,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
            once: false,
          },
        });
      }

      // Animate name, brief, stats with stagger
      const name = info.querySelector('.client-name');
      const brief = info.querySelector('.client-brief');
      const stats = info.querySelector('.client-stats');
      gsap.from([name, brief, stats], {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.45 + i * 0.08,
        scrollTrigger: {
          trigger: sec,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      });
    }

    // Animate work-gallery reveal
    const gallery = sec.querySelector('.work-gallery');
    if (gallery) {
      gsap.from(gallery, {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: 'expo.out',
        delay: 0.7 + i * 0.08,
        scrollTrigger: {
          trigger: sec,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      });
      // Animate each work-item with a staggered pop
      const items = gallery.querySelectorAll('.work-item');
      gsap.from(items, {
        opacity: 0,
        scale: 0.85,
        y: 40,
        duration: 0.7,
        stagger: 0.13,
        ease: 'back.out(1.5)',
        delay: 0.85 + i * 0.08,
        scrollTrigger: {
          trigger: sec,
          start: 'top 68%',
          toggleActions: 'play none none reverse',
          once: false,
        },
      });
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".client-section")) {
    animateClientSections();

    // --- Scroll Indicator Logic ---
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".client-section"));
    const dots = Array.from(document.querySelectorAll<HTMLElement>(".scroll-dot"));

    // Highlight active dot on scroll
    function updateActiveDot() {
      const windowH = window.innerHeight;
      let activeIdx = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowH * 0.33 && rect.bottom > windowH * 0.33) {
          activeIdx = i;
        }
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeIdx);
      });
    }
    window.addEventListener('scroll', updateActiveDot, { passive: true });
    updateActiveDot();

    // Scroll to section on dot click
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const target = sections[i];
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 24, // offset for nav if needed
            behavior: 'smooth',
          });
        }
      });
    });
  }
});


