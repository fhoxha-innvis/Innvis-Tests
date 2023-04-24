let hamburger = document.querySelector(".header-navbar-container-hamburger");
let menu = document.querySelector(".header-navbar-container-menu");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  menu.classList.toggle("list");
});
