// Test if our JS file is properly linked to the HTML File
console.log(123);
const hamburgerMenu = document.querySelector(".header__main-nav--hamburger");
const headerMainNav = document.querySelector(".header__main-nav");
const navMenu = document.querySelector(".header__main-nav--menu > div");

hamburgerMenu.addEventListener("click", function () {
  navMenu.classList.toggle("nav-menu-clicked");
  headerMainNav.classList.toggle("zindex");
});
