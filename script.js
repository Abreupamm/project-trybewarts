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
// const submitB = document.getElementById('submit-btn');

// const agreedCheck = document.getElementById('agreement');

// function habilitarBotao() {
//   if(agreedCheck.checked) {
//     submitB.disable = true;
// } else {
//   submitB.disable = true;
// }
// }
// habilitarBotao();