const hamburgerMenu = document.querySelector(".header__main-nav--hamburger");
const navMenu = document.querySelector(".header__main-nav--menu > div");

hamburgerMenu.addEventListener("click", function () {
  navMenu.classList.toggle("nav-menu-clicked");
});
