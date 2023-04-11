const button = document.querySelector('button');

button.addEventListener('click', () => {
  alert('Você clicou no botão!');
});

//contato
// Adiciona um ouvinte de eventos de clique ao botão Home
document.getElementById("btn-home").addEventListener("click", function() {
    window.location.href = "index.html";
});

// Adiciona um ouvinte de eventos de clique ao botão Contato
document.getElementById("btn-contato").addEventListener("click", function() {
    window.location.href = "contato.html";
});

// Adiciona um ouvinte de eventos de clique ao botão Portfólio
document.getElementById("btn-portfolio").addEventListener("click", function() {
    window.location.href = "portfolio.html";
});

// Adiciona um ouvinte de eventos de clique ao botão Serviços
document.getElementById("btn-servicos").addEventListener("click", function() {
    window.location.href = "servicos.html";
});
