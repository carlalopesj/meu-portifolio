function toggleMenu() {
    const ul = document.getElementById('ul');
    ul.classList.toggle('menu-open');
}

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', toggleMenu);

function mostrarDescricao(elemento) {
    elemento.querySelector('.descricao').style.opacity = 1;
  }
  
  function esconderDescricao(elemento) {
    elemento.querySelector('.descricao').style.opacity = 0;
  }
  
//Efeito de digitação
const textoOriginal = "Seu Texto Aqui";
const elementoTexto = document.getElementById("textoDigitado");

let index = 0;

function escreverTexto() {
  elementoTexto.textContent = textoOriginal.slice(0, index);
  index++;

  if (index <= textoOriginal.length) {
    setTimeout(escreverTexto, 100); // Ajuste o tempo (em milissegundos) entre cada letra
  }
}

escreverTexto();