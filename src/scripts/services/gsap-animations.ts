import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function animateMarketingPage() {
  // Hero section animation
  gsap.to(".services-hero", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".services",
    start: "top bottom",
    end: "top center",
    scrub: true,
  }
});

  gsap.from(".services-hero .section-badge", {
    y: -40,
    opacity: 0,
    scale: 0.7,
    duration: 1,
    ease: "back.out(1.7)",
  });
  gsap.from(".services-hero .section-title", {
    y: 60,
    opacity: 0,
    scale: 0.9,
    duration: 1.1,
    delay: 0.2,
    ease: "power3.out",
  });
  gsap.from(".services-hero .section-subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.9,
    delay: 0.4,
    ease: "power2.out",
  });

  // Service blocks animation
  gsap.utils.toArray(".service-block").forEach((block, i) => {
    const el = block as HTMLElement;
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: 80,
      opacity: 0,
      scale: 0.92,
      duration: 1.1,
      delay: i * 0.08,
      ease: "back.out(1.5)",
    });
    // Animate service title icon
    const icon = el.querySelector(".service-title i");
    if (icon) {
      gsap.from(icon, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "back.out(2)",
      });
    }
    // Animate features list
    const features = el.querySelectorAll(".service-features li");
    gsap.from(features, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
      x: -30,
      opacity: 0,
      stagger: 0.07,
      duration: 0.5,
      delay: 0.3,
      ease: "power2.out",
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".services-hero")) {
    animateMarketingPage();
  }
});
