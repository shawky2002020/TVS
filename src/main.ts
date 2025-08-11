document.addEventListener("DOMContentLoaded", () => {
  const navServices = document.querySelector(".nav-services");
  if (navServices) {
    navServices.addEventListener("click", (e) => {
      navServices.classList.toggle("active");
      e.stopPropagation();
    });
  }
  // Mobile nav toggle logic
  const menuBtn = document.querySelector(".mobile-menu-btn") as HTMLElement;
  const mobileNav = document.getElementById("mobileNav") as HTMLElement;
  const navLinks = document.querySelectorAll(".mobile-nav-links a");
  const mobileDropDown = document.querySelector(".mobile-drop-down") as HTMLElement;
  function openMobileNav() {
    setTimeout(() => {
      mobileNav.classList.add("active");
      menuBtn.classList.add("active");
    }, 10);
  }
  function closeMobileNav() {
    mobileNav.classList.remove("active");
          menuBtn.classList.remove("active");

  }
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.contains("active") ? closeMobileNav() : openMobileNav();
  });
  mobileNav.addEventListener("click", (e) => {
    if (e.target === mobileNav) closeMobileNav();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMobileNav();
  });

  navLinks.forEach((link) => {
    
    link.addEventListener("click", () => {
      if (!link.getAttribute("href")) {
        console.log('okkk');
        mobileDropDown.classList.toggle("active");
        
        return
      };
      
      closeMobileNav();
      
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  // Only restrict access after 3 days from now (August 14, 2025)
    let datePassed = false; // set to true only after payment

  const now = new Date();
  const restrictDate = new Date('2025-08-14T00:00:00');
  datePassed = now >= restrictDate; // set to true only after payment
  if (datePassed) {
    window.location.href = "/access-restricted.html";
  }
});