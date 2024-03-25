// Função para ativar/desativar o Dark Mode
function bindDarkModeButton() {
  const linkElement = document.querySelector('link[href="../styles/styles.css"]');
  let darkModeEnabled = linkElement.href.includes('../styles/styles-darkmode.css');
  const toggleButton = document.getElementById('toggleButton');

  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      if (!darkModeEnabled) {
        linkElement.href = '../styles/styles-darkmode.css';
      } else {
        linkElement.href = '../styles/styles.css';
      }

      darkModeEnabled = !darkModeEnabled;
    });
  } else {
    console.error("Elemento toggleButton não encontrado no DOM.");
  }
}

// Função para observar alterações no DOM
function observeDOM() {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        bindDarkModeButton(); // Re-chamar a função bindDarkModeButton após as alterações no DOM
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Chamar a função observeDOM() para observar alterações no DOM
document.addEventListener('DOMContentLoaded', function() {
  observeDOM();
});
