//Criação do Botão Hamburguer

const mobileBtn = document.querySelector(".btn-mobile");
const navLinks = document.getElementById("nav-links");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


//Interação do Formulário
const formElemento = document.querySelector("form");
const inputsElemento = document.querySelectorAll("input");

formElemento.addEventListener("submit", function(event) {
  event.preventDefault();

  inputsElemento.forEach(function(input) {
    console.log(input.value);
  })
});

