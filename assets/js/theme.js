document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Aplicar tema al cargar la página
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙';
  }

  // Evento al hacer clic en el botón
  themeToggle.addEventListener('click', () => {
    let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Cambiar ícono del botón
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });

  // Funcionalidad de Búsqueda
  const searchInput = document.getElementById('paper-search');
  if (searchInput) {
    searchInput.addEventListener('keyup', (event) => {
      const searchTerm = event.target.value.toLowerCase();
      // Target .paper-item elements for filtering
      const paperItems = document.querySelectorAll('.paper-item');

      paperItems.forEach(item => {
        const textContent = item.textContent.toLowerCase();
        if (textContent.includes(searchTerm)) {
          item.style.display = ''; // Show item
        } else {
          item.style.display = 'none'; // Hide item
        }
      });
    });
  }
});