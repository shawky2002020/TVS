// Enhanced GSAP Animations for Televirgins Landing Page
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// LOADING SCREEN
export function animateLoadingScreen() {
  const tl = gsap.timeline();
  
  tl.to('.loading-progress .progress-bar', {
    width: '100%',
    duration: 2,
    ease: 'power2.inOut'
  })
  .to('.loading-text', {
    text: 'Welcome to Excellence',
    duration: 0.5
  }, '-=0.5')
  .to('.loading-screen', {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.inOut',
    onComplete: () => {
      document.getElementById('loadingScreen')?.remove();
      animateHero();
    }
  });
}

// ENHANCED HERO SECTION
export function animateHero() {
  const tl = gsap.timeline();
  
  // Hero badge animation
  tl.from('.hero-badge', {
    scale: 0,
    rotation: 180,
    duration: 1,
    ease: 'back.out(1.7)'
  })
  
  // Title animation with split text effect
  .from('.title-word-1', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out'
  }, '-=0.5')
  
  .from('.title-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, '-=0.8')
  
  // Animate special words with stagger
  .from('.animate-word', {
    y: 60,
    opacity: 0,
    rotationX: 90,
    stagger: 0.1,
    duration: 1,
    ease: 'back.out(1.7)'
  }, '-=0.6')
  
  .from('.title-line-text', {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'elastic.out(1, 0.5)'
  }, '-=0.4')
  
  // Buttons with magnetic effect setup
  .from('.hero-actions .btn', {
    y: 50,
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 1,
    ease: 'back.out(1.7)'
  }, '-=0.3')
  
  // Stats counter animation
  .from('.hero-stats .stat-item', {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.2');
  
  // Animate counters
  gsap.utils.toArray('.stat-number').forEach((counter: any) => {
    const target = parseInt(counter.dataset.target);
    gsap.to(counter, {
      innerText: target,
      duration: 2,
      ease: 'power2.out',
      snap: { innerText: 1 },
      delay: 1.5
    });
  });
  
  // Floating elements continuous animation
  gsap.to('.floating-element-1', {
    y: -20,
    rotation: 360,
    duration: 4,
    ease: 'none',
    repeat: -1,
    yoyo: true
  });
  
  gsap.to('.floating-element-2', {
    x: 15,
    y: -15,
    rotation: -360,
    duration: 5,
    ease: 'none',
    repeat: -1,
    yoyo: true
  });
}

// MAGNETIC BUTTON EFFECTS
export function initMagneticButtons() {
  gsap.utils.toArray('.btn-magnetic').forEach((btn: any) => {
    const btnContent = btn.querySelector('.btn-content');
    
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(btn.querySelector('.btn-glow'), {
        opacity: 1,
        scale: 1.2,
        duration: 0.3
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(btnContent, {
        x: 0,
        y: 0,
        duration: 0.3
      });
      
      gsap.to(btn.querySelector('.btn-glow'), {
        opacity: 0.5,
        scale: 1,
        duration: 0.3
      });
    });
    
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(btnContent, {
        x: x * 0.05,
        y: y * 0.05,
        duration: 0.3
      });
    });
  });
}

// ENHANCED SECTION HEADERS
export function animateSectionHeaders() {
  gsap.utils.toArray('.section-header').forEach((header: any) => {
    const badge = header.querySelector('.section-badge');
    const title = header.querySelector('.section-title');
    const subtitle = header.querySelector('.section-subtitle');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
    
    if (badge) {
      tl.from(badge, {
        scale: 0,
        rotation: 180,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });
    }
    
    if (title) {
      tl.from(title, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.4');
    }
    
    if (subtitle) {
      tl.from(subtitle, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.6');
    }
  });
}

// ENHANCED SERVICES ANIMATION
export function animateServices() {
  gsap.utils.toArray('.service-block').forEach((block: any, i: number) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });
    
    tl.from(block, {
      y: 80,
      opacity: 0,
      scale: 0.9,
      rotation: i % 2 === 0 ? 5 : -5,
      duration: 1,
      ease: 'back.out(1.7)'
    })
    
    .from(block.querySelector('.service-icon'), {
      scale: 0,
      rotation: 360,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.6')
    
    .from(block.querySelectorAll('.service-item'), {
      x: -30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4');
    
    // Hover animations
    block.addEventListener('mouseenter', () => {
      gsap.to(block, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(block.querySelector('.service-hover-effect'), {
        opacity: 1,
        scale: 1,
        duration: 0.3
      });
    });
    
    block.addEventListener('mouseleave', () => {
      gsap.to(block, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(block.querySelector('.service-hover-effect'), {
        opacity: 0,
        scale: 0.8,
        duration: 0.3
      });
    });
  });
}

// ENHANCED CLIENTS ANIMATION
export function animateClients() {
  gsap.utils.toArray('.client-card').forEach((card: any, i: number) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
    
    tl.from(card, {
      y: 50,
      opacity: 0,
      scale: 0.8,
      rotation: Math.random() * 10 - 5,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: i * 0.1
    });
    
    // Hover effect
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -5,
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(card.querySelector('.client-glow'), {
        opacity: 1,
        scale: 1.2,
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(card.querySelector('.client-glow'), {
        opacity: 0,
        scale: 1,
        duration: 0.3
      });
    });
  });
}

// ENHANCED TESTIMONIALS
export function animateTestimonials() {
  gsap.utils.toArray('.testimonial-card').forEach((card: any, i: number) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
    
    tl.from(card, {
      y: 60,
      opacity: 0,
      rotationY: 15,
      duration: 1,
      ease: 'power3.out',
      delay: i * 0.15
    })
    
    .from(card.querySelector('.testimonial-quote'), {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')
    
    .from(card.querySelector('.testimonial-author'), {
      x: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4');
  });
}

// ENHANCED WHY SECTION
export function animateWhy() {
  gsap.utils.toArray('.why-item').forEach((item: any, i: number) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      }
    });
    
    tl.from(item, {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.9,
      ease: 'back.out(1.7)',
      delay: i * 0.1
    })
    
    .from(item.querySelector('.why-icon'), {
      scale: 0,
      rotation: 180,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.6');
  });
}

// ENHANCED CTA ANIMATION
export function animateCTA() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.cta-content',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  });
  
  tl.from('.cta-content', {
    scale: 0.9,
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  })
  
  .from('.cta-title .cta-line-1', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  
  .from('.cta-title .cta-line-2', {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.6')
  
  .from('.cta-actions .btn', {
    y: 30,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'back.out(1.7)'
  }, '-=0.4');
}

// SCROLL ANIMATIONS
export function initScrollAnimations() {
  // Parallax effect for background elements
  gsap.utils.toArray('.holo-layer').forEach((layer: any, i: number) => {
    gsap.to(layer, {
      yPercent: -50 * (i + 1),
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
  
  // Navbar animation on scroll
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { className: 'scrolled', targets: '.nav' }
  });
}

// PARTICLE SYSTEM
export function initParticleSystem() {
  const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d') ?? new CanvasRenderingContext2D();
  if (!ctx) return;
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles: any[] = [];
  
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    });
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(27, 179, 179, ${particle.opacity})`;
      ctx.fill();
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
}

// INITIALIZATION
export function initGsapAnimations() {
  // Start with loading screen
  animateLoadingScreen();
  
  // Initialize other animations
  initMagneticButtons();
  animateSectionHeaders();
  animateServices();
  animateClients();
  animateTestimonials();
  animateWhy();
  animateCTA();
  initScrollAnimations();
  initParticleSystem();
  
  // Refresh ScrollTrigger on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
}
