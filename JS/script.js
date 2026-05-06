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

//Validação do Email

function validateForm() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  
  
  if (nome === "" || email === "" || telefone === "") {
    alert("Todos os campos são obrigatórios");
    return false;
  }

  if (nome.length < 3 || nome.length > 50) {
    alert('O nome deve ter entre 3 e 50 caracteres');
    return false;
  }

  if (email.length < 5 || email.length > 70) {
    alert('O nome deve ter entre 3 e 50 caracteres');
    return false;
  }

  const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

  if (!emailPattern.test(email)) {
    alert("Insira um email válido");
    return false;
  }

  return true;
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      alert("Formulário Validado");
    } else {
      alert("Falha na Validação");
    }
  });
