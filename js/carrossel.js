// ===== Carrossel 1: três cards =====
const tarefas = document.getElementById('tarefas');
const cards = tarefas.querySelectorAll('.tarefa');
const indicadores = document.querySelectorAll('#indicadores .bolinha');

let indiceAtual = 0;
const totalSlides = Math.ceil(cards.length / 3); // 3 cards por slide

function atualizarCarrossel() {
  // Esconde todos os cards
  cards.forEach(card => card.classList.remove('ativa'));

  // Mostra os 3 correspondentes ao índice atual
  const inicio = indiceAtual * 3;
  const fim = inicio + 3;
  for (let i = inicio; i < fim && i < cards.length; i++) {
    cards[i].classList.add('ativa');
  }

  // Atualiza os indicadores
  indicadores.forEach((b, i) => b.classList.toggle('ativa', i === indiceAtual));
}

// Inicializa o carrossel
atualizarCarrossel();

// Clique nas bolinhas
indicadores.forEach((b, i) => {
  b.addEventListener('click', () => {
    indiceAtual = i;
    atualizarCarrossel();
    reiniciarAutoPlay1();
  });
});

// Auto-play
let intervalo1;
function iniciarAutoPlay1() {
  intervalo1 = setInterval(() => {
    indiceAtual = (indiceAtual + 1) % totalSlides;
    atualizarCarrossel();
  }, 4000); // 4 segundos
}
function reiniciarAutoPlay1() {
  clearInterval(intervalo1);
  iniciarAutoPlay1();
}
iniciarAutoPlay1();


// ===== Carrossel 2: um card =====
// ===== Carrossel 2: um card =====
const tarefas2 = document.getElementById('tarefas-tsc');
const cards2 = tarefas2.querySelectorAll('.tc');
const indicadoresContainer2 = document.getElementById('indicadores-inds');

let indiceAtual2 = 0;
const totalSlides2 = cards2.length; // 1 card por slide

// Gera automaticamente as bolinhas com base na quantidade de cards
indicadoresContainer2.innerHTML = ""; // limpa as antigas (3)
for (let i = 0; i < totalSlides2; i++) {
  const span = document.createElement('span');
  span.classList.add('bolinha', 'bl');
  if (i === 0) span.classList.add('ativa');
  span.dataset.index = i;
  indicadoresContainer2.appendChild(span);
}

// Agora seleciona as bolinhas recém-criadas
const indicadores2 = indicadoresContainer2.querySelectorAll('.bl');

function atualizarCarrossel2() {
  cards2.forEach(card => card.classList.remove('ativa'));
  cards2[indiceAtual2].classList.add('ativa');

  indicadores2.forEach((b, i) => b.classList.toggle('ativa', i === indiceAtual2));
}

// Inicializa o segundo carrossel
atualizarCarrossel2();

// Clique nas bolinhas
indicadores2.forEach((b, i) => {
  b.addEventListener('click', () => {
    indiceAtual2 = i;
    atualizarCarrossel2();
    reiniciarAutoPlay2();
  });
});

// Auto-play
let intervalo2;
function iniciarAutoPlay2() {
  intervalo2 = setInterval(() => {
    indiceAtual2 = (indiceAtual2 + 1) % totalSlides2;
    atualizarCarrossel2();
  }, 4000); // 4 segundos
}
function reiniciarAutoPlay2() {
  clearInterval(intervalo2);
  iniciarAutoPlay2();
}
iniciarAutoPlay2();
