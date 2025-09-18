const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("nav a");

// Toggle menu open/close
mobileMenu.addEventListener("click", () => {
  console.log("Hello");
  nav.classList.toggle("active");
});

// Close menu when clicking a link
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
