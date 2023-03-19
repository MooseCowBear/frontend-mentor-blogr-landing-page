const mobileMenuOpen = document.querySelector(".mobile-menu-open");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuOpen.addEventListener("click", () => {
  //make hamburger hidden, close x seen
  mobileMenuClose.style.display = "block";
  mobileMenuOpen.style.display = "none";
  //open the menu
  mobileMenu.style.display = "flex";
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenuClose.style.display = "none";
  mobileMenuOpen.style.display = "block";
  mobileMenu.style.display = "none";
});