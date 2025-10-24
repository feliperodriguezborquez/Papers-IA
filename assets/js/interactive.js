document.addEventListener('DOMContentLoaded', () => {
  const bibliographySidebar = document.getElementById('bibliography-sidebar');
  const definitionsSidebar = document.getElementById('definitions-sidebar');

  const interactiveData = document.getElementById('interactive-data');
  if (!interactiveData || !bibliographySidebar || !definitionsSidebar) return;

  const highlightedTerms = document.querySelectorAll('.highlight-term');
  const closeButtons = document.querySelectorAll('.close-sidebar-btn');

  // --- 1. Populate Sidebars on Load ---
  function populateSidebars() {
    const bibContent = bibliographySidebar.querySelector('.sidebar-content');
    const defContent = definitionsSidebar.querySelector('.sidebar-content');
    
    // Clear existing content to avoid duplication
    bibContent.innerHTML = '';
    defContent.innerHTML = '';

    const processedTermIds = new Set();
    // Get all highlighted terms from the main content in their order of appearance
    const termsInContent = document.querySelectorAll('.paper-detail .highlight-term');

    termsInContent.forEach(term => {
      const termId = term.dataset.termId;
      if (!termId || processedTermIds.has(termId)) {
        return; // Skip if no ID or already processed
      }
      processedTermIds.add(termId);

      const termDataContainer = interactiveData.querySelector(`[data-term-id="${termId}"]`);
      if (!termDataContainer) return;

      let leftContent = '';
      let rightContent = '';

      const bibInfo = termDataContainer.querySelector('.bib-info');
      const postInfo = termDataContainer.querySelector('.post-info');
      const defInfo = termDataContainer.querySelector('.def-info');
      
      if (bibInfo && postInfo) {
        leftContent = `<div class="sidebar-group" id="sidebar-item-${termId}">${bibInfo.innerHTML}<hr class="sidebar-separator">${postInfo.innerHTML}</div>`;
      } else if (bibInfo) {
        leftContent = `<div id="sidebar-item-${termId}" class="bib-info">${bibInfo.innerHTML}</div>`;
      } else if (postInfo) {
        leftContent = `<div id="sidebar-item-${termId}" class="post-info">${postInfo.innerHTML}</div>`;
      }
      if (defInfo) {
        rightContent = `<div id="sidebar-item-def-${termId}" class="def-info">${defInfo.innerHTML}</div>`;
      }
      if (leftContent) bibContent.innerHTML += leftContent;
      if (rightContent) defContent.innerHTML += rightContent;
    });
  }

  populateSidebars();

  // --- 2. Sidebar Visibility Control ---
  function showSidebar(sidebar) {
    sidebar.classList.add('visible');
  }

  function hideSidebar(sidebar) {
    sidebar.classList.remove('visible');
  }

  function toggleSidebar(sidebar) {
    sidebar.classList.toggle('visible');
  }

  // Add event listener for explicit close buttons
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const sidebarToClose = button.closest('.sidebar');
      if (sidebarToClose) {
        hideSidebar(sidebarToClose);
      }
    });
  });

  // --- 3. Highlighting and Scrolling Logic ---
  function removeHighlights() {
    document.querySelectorAll('.sidebar-item-highlight').forEach(el => {
      el.classList.remove('sidebar-item-highlight');
    });
  }

  function highlightAndScroll(termId) {
    // Remove previous highlights from all sidebars
    removeHighlights();

    // Highlight in left sidebar
    const bibItem = document.getElementById(`sidebar-item-${termId}`);
    if (bibItem) {
      bibItem.classList.add('sidebar-item-highlight');
      if (bibliographySidebar.classList.contains('visible')) {
        bibItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    // Highlight in right sidebar
    const defItem = document.getElementById(`sidebar-item-def-${termId}`);
    if (defItem) {
      defItem.classList.add('sidebar-item-highlight');
      if (definitionsSidebar.classList.contains('visible')) {
        defItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  // --- 4. Event Listeners for Terms in Text ---
  highlightedTerms.forEach(term => {
    term.addEventListener('mouseenter', () => {
      const termId = term.dataset.termId;
      if (!termId) return;

      // --- Despliegue automático al pasar el mouse ---
      const bibItem = document.getElementById(`sidebar-item-${termId}`);
      if (bibItem && !bibliographySidebar.classList.contains('visible')) {
        showSidebar(bibliographySidebar);
      }

      const defItem = document.getElementById(`sidebar-item-def-${termId}`);
      if (defItem && !definitionsSidebar.classList.contains('visible')) {
        showSidebar(definitionsSidebar);
      }

      highlightAndScroll(termId);
    });
  });

  // --- 5. Keyboard and Global Click Listeners ---
  // Deselect on neutral click
  document.addEventListener('click', (event) => {
    // If the click is not on a highlighted term and not inside a sidebar, remove highlights
    if (!event.target.closest('.highlight-term') && !event.target.closest('.sidebar')) {
      removeHighlights();
    }
  });

  // Keyboard controls for sidebars
  document.addEventListener('keydown', (event) => {
    // Ignore if typing in an input field
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;

    if (event.key === 'ArrowLeft') {
      toggleSidebar(bibliographySidebar);
    } else if (event.key === 'ArrowRight') {
      toggleSidebar(definitionsSidebar);
    }
  });

  // --- 6. Prevent Scroll Chaining ---
  function preventScrollChaining(sidebar) {
    sidebar.addEventListener('wheel', (event) => {
      const { scrollTop, scrollHeight, clientHeight } = sidebar;

      // Scrolling up at the top
      if (scrollTop === 0 && event.deltaY < 0) {
        event.preventDefault();
      }

      // Scrolling down at the bottom
      if (scrollTop + clientHeight >= scrollHeight && event.deltaY > 0) {
        event.preventDefault();
      }
    });
  }
  preventScrollChaining(bibliographySidebar);
  preventScrollChaining(definitionsSidebar);
});