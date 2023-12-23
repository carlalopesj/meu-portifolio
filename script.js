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
  