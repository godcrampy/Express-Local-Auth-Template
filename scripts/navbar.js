document.getElementById("navbar-ham").addEventListener("click", () => {
  let menu = document.getElementById("navbar-ham-menu");
  let button = document.getElementById("navbar-ham");
  menu.classList.toggle("is-active");
  button.classList.toggle("is-active");
});