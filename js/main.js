const navToggle = document.querySelector(".js-nav-toggle");
const navLinks = document.querySelectorAll(".js-nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});