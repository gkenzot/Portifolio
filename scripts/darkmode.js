// Função para ativar/desativar o Dark Mode e armazenar o estado em um cookie
function toggleDarkMode() {
  const linkElement = document.querySelector('link[href="../styles/styles.css"]');
  let darkModeEnabled = linkElement.href.includes('../styles/styles-darkmode.css');
  const toggleButton = document.getElementById('toggleButton');

  // Função para criar ou atualizar um cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
  }

  // Função para ler um cookie
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  // Verificar se há um cookie de Dark Mode e definir o estado inicial
  const darkModeCookie = getCookie('darkMode');
  if (darkModeCookie !== null) {
    darkModeEnabled = darkModeCookie === 'true';
  }

  // Atualizar o estilo e o estado do Dark Mode e armazenar o estado em um cookie
  function updateDarkMode() {
    if (darkModeEnabled) {
      linkElement.href = '../styles/styles-darkmode.css';
    } else {
      linkElement.href = '../styles/styles.css';
    }
    setCookie('darkMode', darkModeEnabled, 30); // Armazenar o estado do Dark Mode por 30 dias
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      darkModeEnabled = !darkModeEnabled;
      updateDarkMode();
    });
  } else {
    console.error("Elemento toggleButton não encontrado no DOM.");
  }

  // Atualizar o estado inicial do Dark Mode quando a página é carregada
  updateDarkMode();
}

// Função para observar alterações no DOM
function observeDOM() {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        toggleDarkMode(); // Re-chamar a função toggleDarkMode após as alterações no DOM
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Chamar a função observeDOM() para observar alterações no DOM
document.addEventListener('DOMContentLoaded', function() {
  observeDOM();
});
