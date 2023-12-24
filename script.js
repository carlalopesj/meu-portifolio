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

//Menu responsivo
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "imagem/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "imagem/close_white_36dp.svg";
  }
}

//Função botão ver mais projetos
function mostrarProjetosAdicionais() {
  var projetosAdicionais = document.querySelectorAll('.projeto.hidden');

  projetosAdicionais.forEach(function(projeto) {
    projeto.classList.toggle('hidden');
  });

  var btnVer = document.querySelector('#ler-btn');
  if (projeto.classList.contains('hidden')) {
    return btnVer.textContent = 'Ver menos';
  }
  btnVer.textContent = 'Ver mais';
}

// Adicione um listener ao botão
document.querySelector('button').addEventListener('click', mostrarProjetosAdicionais);


