// Requisito 3
const botao = document.getElementById('button');

const email = document.getElementById('login');

const senha = document.getElementById('senha');

function alerta() {
  const usuario = 'tryber@teste.com';
  const senhaDeAcesso = '123456';
  if (email.value === usuario && senha.value === senhaDeAcesso) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

botao.addEventListener('click', alerta);

// Requisito 8
const submitB = document.getElementById('submit-btn');

const agreedCheck = document.getElementById('agreement');

submitB.disabled = true;

function habilitarBotao() {
  if (agreedCheck.checked === true) {
    submitB.disabled = false;
  } else {
    submitB.disabled = true;
  }
}
agreedCheck.addEventListener('click', habilitarBotao);

// Requisito 20
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');

function contadorDeCaracteres() {
  const tamanhoArea = textArea.value.length;
  counter.innerHTML = 500 - tamanhoArea;
}

textArea.addEventListener('input', contadorDeCaracteres); // ref.: https://www.w3schools.com/jsref/event_oninput.asp