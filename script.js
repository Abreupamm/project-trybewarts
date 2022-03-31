const botao = document.getElementById('button');
const email = document.getElementById('login');
const senha = document.getElementById('senha');

function alerta() {
  const usuario = 'tryber@teste.com';
  const senhaDeAcesso = '123456';
  if (email.value === usuario && senha.value === senhaDeAcesso) {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}

botao.addEventListener('click', alerta);
