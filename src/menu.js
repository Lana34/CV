const menuButton = document.querySelector(".header__btn");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");

menuButton.addEventListener("click", () => {
  let expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
  menuButton.setAttribute("aria-expanded", !expanded);
  menuButton.classList.toggle("header__btn_state_open");
  headerMenu.classList.toggle("header__menu_state_open");
  header.classList.toggle("header_state_open");
});
