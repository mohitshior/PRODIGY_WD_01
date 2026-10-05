// =========================================================
// Responsive Landing Page - Task 01
// Interactive fixed navigation using vanilla JavaScript
// =========================================================

const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

// Change navbar style when the user scrolls.
function handleScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 40);

  // Highlight the section currently visible on screen.
  let currentSection = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
}

// Mobile hamburger menu.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after selecting a page section.
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Hover effect is primarily handled by CSS.
// JavaScript handles scroll-based navigation styling.
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
