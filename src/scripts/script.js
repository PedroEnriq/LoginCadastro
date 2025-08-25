const loginBox = document.getElementById('login-box');
const signBox = document.getElementById('sign-box');
const signupLink = document.getElementById('signup');
const loginLink = document.getElementById('login');

let nome = document.getElementById('nome');

// Função para mostrar a tela de Sign up e esconder a de Login
function showSignup() {
    loginBox.style.display = 'none';
    signBox.style.display = 'block';
}

// Função para mostrar a tela de Login e esconder a de Sign up
function showLogin() {
    signBox.style.display = 'none';
    loginBox.style.display = 'block';
}