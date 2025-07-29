// Projects slider logic for auto sliding, navigation, and animation
// Theme: dark holographic, best UI/UX

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('projectsSlider') as HTMLElement | null;
  const slides: HTMLElement[] = slider ? Array.from(slider.getElementsByClassName('project-slide')) as HTMLElement[] : [];
  const prevBtn = document.querySelector('.slider-btn.prev') as HTMLButtonElement | null;
  const nextBtn = document.querySelector('.slider-btn.next') as HTMLButtonElement | null;
  const dotsContainer = document.getElementById('sliderDots') as HTMLElement | null;
  let current = 0;
  let autoSlideInterval: ReturnType<typeof setInterval> | undefined;
  const SLIDE_TIME = 4000;

  if (!slider || slides.length === 0) return;

  // Create dots
  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx: number) => {
      const dot = document.createElement('div');
      dot.className = 'slider-dot' + (idx === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === current);
    });
    if (dotsContainer) {
      Array.from(dotsContainer.children).forEach((dot, idx) => {
        dot.classList.toggle('active', idx === current);
      });
    }
    if (slider) {
      slider.style.transform = `translateX(-${current * 100}%)`;
    }
  }

  function goToSlide(idx: number) {
    current = idx;
    updateSlider();
    resetAutoSlide();
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, SLIDE_TIME);
  }

  function resetAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Button events
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

  // Touch/drag support for mobile
  let startX = 0;
  let isDragging = false;
  if (slider) {
    slider.addEventListener('touchstart', (e: TouchEvent) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    });
    slider.addEventListener('touchmove', (e: TouchEvent) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) prevSlide();
        else nextSlide();
        isDragging = false;
        resetAutoSlide();
      }
    });
    slider.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  createDots();
  updateSlider();
  startAutoSlide();
});
