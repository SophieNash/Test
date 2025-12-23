// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("mobileOverlay");  

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("show");
  overlay.classList.remove("show");
});

// Fake contact form handler
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "Thank you! We'll be in touch soon ✨";
  form.reset();
});
