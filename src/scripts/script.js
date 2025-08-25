// script.js
const loginBox = document.getElementById('login-box');
const signBox = document.getElementById('sign-box');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');

function showSignup() {
    loginBox.style.display = 'none';
    signBox.style.display = 'block';
}

function showLogin() {
    signBox.style.display = 'none';
    loginBox.style.display = 'block';
}

signupLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    showSignup();
});

loginLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    showLogin();
});

document.addEventListener('DOMContentLoaded', () => {
    showLogin();
});