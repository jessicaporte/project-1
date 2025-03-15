const darkModeToggle = document.querySelector("[data-js='darkModeToggle']");
const darkModePantalla = document.querySelector("[data-js='darkModePantalla']");

darkModeToggle.addEventListener("change", () => {
  darkModePantalla.classList.toggle("dark-mode");
});
