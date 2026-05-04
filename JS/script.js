const mobileBtn = document.querySelector(".btn-mobile");
const navLinks = document.getElementById("nav-links");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
