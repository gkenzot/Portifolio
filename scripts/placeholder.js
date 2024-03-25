// Função para carregar o header
function loadHeader() {
  fetch('fragments/header.html')
    .then(response => response.text())
    .then(text => {
      document.getElementById('header-placeholder').innerHTML = text;
    });
}

// Função para carregar o footer
function loadFooter() {
  fetch('fragments/footer.html')
    .then(response => response.text())
    .then(text => document.getElementById('footer-placeholder').innerHTML = text);
}

// Chamar as funções para carregar o header e footer
loadHeader();
loadFooter();
