// Função para ativar/desativar o Dark Mode
function bindDarkModeButton() {
  const toggleButton = document.getElementById('toggleButton');
  const linkElement = document.querySelector('link[href="../styles/styles.css"]');
  let darkModeEnabled = linkElement.href.includes('../styles/styles-darkmode.css');

  toggleButton.addEventListener('click', function () {
    if (!darkModeEnabled) {
      linkElement.href = '../styles/styles-darkmode.css';
    } else {
      linkElement.href = '../styles/styles.css';
    }

    darkModeEnabled = !darkModeEnabled;
  });
}
