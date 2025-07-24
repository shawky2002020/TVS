import { initGsapAnimations } from "./scripts/gsap-animations";


document.addEventListener("DOMContentLoaded", () => {
  initGsapAnimations();

  // Initialize other scripts or functionalities if needed
  // Mobile nav toggle logic
  const menuBtn =
    document.querySelector(".mobile-menu-btn") ??
    document.createElement("button");
  const overlay =
    document.getElementById("mobileNavOverlay") ??
    document.createElement("div");
  let navOpen = false;
  function openMobileNav() {
    overlay.style.display = "flex";
    overlay.classList.add("active");
    navOpen = true;
    menuBtn.classList.add("active");
  }
  function closeMobileNav() {
    overlay.classList.remove("active");
    navOpen = false;
    menuBtn.classList.remove("active");
  }
  menuBtn.addEventListener("click", () => {
    if (navOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeMobileNav();
  });

  // Close nav when a link is clicked
  const navLinks = overlay.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileNav();
    });
  });
});
