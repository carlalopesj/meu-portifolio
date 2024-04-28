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
// Variável para armazenar os projetos mostrados quando o botão "Ver mais" foi clicado
var projetosMostrados = [];

function mostrarProjetosAdicionais() {
  var projetosAdicionais = document.querySelectorAll('.projeto.hidden');

  if (projetosAdicionais.length > 0) {
    projetosAdicionais.forEach(function(projeto) {
      projeto.classList.remove('hidden');
    });
    document.querySelector('#ler-btn').textContent = 'Ver menos';
    // Adiciona apenas os projetos mostrados atualmente aos projetos mostrados
    projetosMostrados = Array.from(projetosAdicionais);
  } else {
    projetosMostrados.forEach(function(projeto) {
      projeto.classList.add('hidden');
    });
    document.querySelector('#ler-btn').textContent = 'Ver mais';
    projetosMostrados = []; // Limpa a lista de projetos mostrados
  }
}





// Adicione um listener ao botão
document.querySelector('button').addEventListener('click', mostrarProjetosAdicionais);


