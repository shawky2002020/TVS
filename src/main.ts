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
      closeMobileNav();
    });
  });
});
