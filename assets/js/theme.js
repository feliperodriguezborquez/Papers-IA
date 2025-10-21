document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themes = ['light', 'dark', 'true-dark'];
  const icons = {
    light: '☁️', // Next is soft-dark
    dark: '🌙', // Next is true-dark
    'true-dark': '☀️' // Next is light
  };

  // Get initial theme
  let currentTheme = localStorage.getItem('theme') || 'light';
  if (!themes.includes(currentTheme)) {
      // Fallback for old 'dark' value or invalid values
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      currentTheme = isSystemDark ? 'dark' : 'light';
  }
  
  // Aplicar tema al cargar la página
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = icons[theme];
    localStorage.setItem('theme', theme);
  }

  applyTheme(currentTheme);

  // Evento al hacer clic en el botón
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const currentIndex = themes.indexOf(currentTheme);
    // Cycle to the next theme in the array
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];

    applyTheme(newTheme);
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