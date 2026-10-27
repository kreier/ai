import './styles/main.css';
import { onLanguageChange, getLanguage } from './i18n';
import { createNavbar } from './components/navbar';
import { createFooter } from './components/footer';
import { initRouter, navigateTo } from './router';

function bootstrap() {
  const app = document.getElementById('app');
  if (!app) return;

  // Set initial html lang attribute
  document.documentElement.lang = getLanguage();

  function renderLayout() {
    if (!app) return;
    app.innerHTML = '';

    const navbar = createNavbar((route) => {
      navigateTo(route);
    });

    const mainContent = document.createElement('main');
    mainContent.id = 'content';
    mainContent.className = 'flex-1';

    const footer = createFooter();

    app.appendChild(navbar);
    app.appendChild(mainContent);
    app.appendChild(footer);

    initRouter((page) => {
      mainContent.innerHTML = '';
      mainContent.appendChild(page);
    });
  }

  // Initial render
  renderLayout();

  // Re-render layout on language change
  onLanguageChange(() => {
    renderLayout();
  });
}

document.addEventListener('DOMContentLoaded', bootstrap);
