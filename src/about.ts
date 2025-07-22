// About Us Page Animations - Televirgins
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function animateAboutHero() {
  gsap.from('.about-hero-content', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
    delay: 0.2
  });
}

function animateMissionBlocks() {
  gsap.utils.toArray('.about-mission-block').forEach((block: any, i: number) => {
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

function animateTeamCards() {
  gsap.utils.toArray('.team-card').forEach((card: any, i: number) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
      delay: i * 0.08
    });
  });
}

function animateAboutCTA() {
  gsap.from('.about-cta .cta-content', {
    scrollTrigger: {
      trigger: '.about-cta .cta-content',
      start: 'top 85%',
    },
    scale: 0.95,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
  });
}

document.addEventListener('DOMContentLoaded', () => {
  animateAboutHero();
  animateMissionBlocks();
  animateTeamCards();
  animateAboutCTA();
});
