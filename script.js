//functionality for mobile menu
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
  closeMenu();
});

const mobileDropdownWrapper = document.querySelector(".mobile-menu__dropdown-wrapper");
mobileDropdownWrapper.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const parentDiv = event.target.parentNode;
    const arrow = parentDiv.querySelector("img");
    arrow.classList.toggle("show");
    const dropdown = parentDiv.parentNode.querySelector(".mobile-menu__dropdown");
    dropdown.classList.toggle("show");
  }
});

let windowWidth = window.innerWidth;
//add window resize listener, close mobile menu (in case it was open)
window.addEventListener("resize", () => {
  if (window.innerWidth > 620 && windowWidth <= 620) {
    closeDropdowns(); 
    closeMenu();
  } //close desktop dropdowns if switch to mobile layout
  else if (window.innerWidth <=620 && windowWidth > 620){
    closeDropdowns();
  }
  windowWidth = window.innerWidth;
})

function closeMenu() {
  mobileMenuClose.style.display = "none";
  mobileMenuOpen.style.display = "block";
  mobileMenu.style.display = "none";
}
//functionality for desktop nav bar dropdowns 
const navBar = document.querySelector("nav");
navBar.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const parent = event.target.parentNode;
    const arrow = parent.querySelector("img");
    arrow.classList.toggle("show");
    const dropdown = parent.parentNode.querySelector(".nav__dropdown");
    dropdown.classList.toggle("show");
  }
});


function closeDropdowns() {
  const shown = document.getElementsByClassName("show"); 
  while (shown.length) {
    shown[0].classList.remove("show");
  }
}