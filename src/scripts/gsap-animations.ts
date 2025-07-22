// GSAP Animations for Televirgins Landing Page
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// HERO SECTION
export function animateHero() {
  gsap.from('.hero-title', {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    delay: 0.2
  });
  gsap.from('.hero-description', {
    y: 40,
    opacity: 0,
    duration: 1.1,
    ease: 'power2.out',
    delay: 0.6
  });
  gsap.from('.hero-actions .btn', {
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: 'back.out(1.7)',
    delay: 1
  });
  gsap.from('.scroll-indicator', {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 1.3
  });
}

// SECTION HEADERS
export function animateSectionHeaders() {
  gsap.utils.toArray('.section-header').forEach((header: any) => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  });
}

// SERVICES GRID
export function animateServices() {
  gsap.utils.toArray('.service-block').forEach((block: any, i: number) => {
    gsap.from(block, {
      scrollTrigger: {
        trigger: block,
        start: 'top 85%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      delay: i * 0.1
    });
  });
}

// CLIENTS GRID
export function animateClients() {
  gsap.utils.toArray('.client-card').forEach((card: any, i: number) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: i * 0.07
    });
  });
}

// TESTIMONIALS
export function animateTestimonials() {
  gsap.utils.toArray('.testimonial-card').forEach((card: any, i: number) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: i * 0.1
    });
  });
}

// WHY GRID
export function animateWhy() {
  gsap.utils.toArray('.why-item').forEach((item: any, i: number) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
      },
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      delay: i * 0.08
    });
  });
}

// CTA
export function animateCTA() {
  gsap.from('.cta-content', {
    scrollTrigger: {
      trigger: '.cta-content',
      start: 'top 85%',
    },
    scale: 0.95,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
  });
}

// INIT
export function initGsapAnimations() {
  animateHero();
  animateSectionHeaders();
  animateServices();
  animateClients();
  animateTestimonials();
  animateWhy();
  animateCTA();
}
