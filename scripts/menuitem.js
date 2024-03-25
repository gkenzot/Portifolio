// Mapeamento dos nomes dos arquivos das páginas para os textos correspondentes do menu
const pageMenuMapping = {
  'index.html': 'Inicio',
  'projetos.html': 'Projetos',
  'sobremim.html': 'Sobre Mim'
};

// Função para destacar o item de menu correspondente à página atual
function highlightMenuItem() {
  const currentPage = window.location.pathname.split('/').pop(); // Obter o nome do arquivo da URL
  const menuItems = document.querySelectorAll('.lista-menu li');

  // Remover o ID de todos os itens de menu
  menuItems.forEach(item => {
    item.removeAttribute('id');
  });

  // Determinar qual item de menu deve ser destacado com base na página atual
  menuItems.forEach(item => {
    const link = item.querySelector('a');
    const href = link.getAttribute('href');
    if (href === currentPage) {
      item.id = 'lista-menu__selected';
    }
  });
}

// Função para observar alterações no DOM
function observeDOM() {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'childList') {
        highlightMenuItem(); // Re-chamar a função bindDarkModeButton após as alterações no DOM
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Chamar a função observeDOM() para observar alterações no DOM
document.addEventListener('DOMContentLoaded', function () {
  observeDOM();
});
