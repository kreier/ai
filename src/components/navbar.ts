import { t, getLanguage, setLanguage } from '../i18n';
import { APP_VERSION } from '../version';

export function createNavbar(onNavigate: (route: string) => void): HTMLElement {
  const nav = document.createElement('header');
  nav.className = 'sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors';

  const currentLang = getLanguage();

  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo & Title -->
      <a href="#/" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-sm shadow-indigo-500/30 group-hover:scale-105 transition-transform">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <span class="font-bold text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
            ${t('site.title')}
            <span class="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
              Interactive
            </span>
            <span class="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              v${APP_VERSION}
            </span>
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 text-sm font-medium">
        <a href="#/" class="nav-link px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          ${t('nav.home')}
        </a>
        <a href="#/foundations" class="nav-link px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          ${t('nav.foundations')}
        </a>
        <a href="#/training" class="nav-link px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          ${t('nav.training')}
        </a>
        <a href="#/transformer" class="nav-link px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          ${t('nav.transformer')}
        </a>
        <a href="#/frontier" class="nav-link px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          ${t('nav.frontier')}
        </a>
        <a href="#/hardware" class="nav-link px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          ${t('nav.hardware')}
        </a>
        <a href="#/lab" class="nav-link px-3 py-1.5 rounded-lg font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition">
          ${t('nav.lab')}
        </a>
      </nav>

      <!-- Language & External Links -->
      <div class="flex items-center gap-2">
        <!-- Language Switcher Button -->
        <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
          <button id="lang-en" class="px-2.5 py-1 rounded-md transition ${currentLang === 'en' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}">
            🇬🇧 EN
          </button>
          <button id="lang-vi" class="px-2.5 py-1 rounded-md transition ${currentLang === 'vi' ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}">
            🇻🇳 VI
          </button>
        </div>

        <!-- Sound Classifier direct link -->
        <a href="./sound-classifier/index.html" target="_blank" title="Open p5.js Sound Classifier Demo" class="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="Sound Classifier Demo">
          🎵
        </a>

        <!-- GitHub Link -->
        <a href="https://github.com/kreier/ai" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition" aria-label="GitHub Repository">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>
      </div>
    </div>
  `;

  // Attach language click listeners
  const btnEn = nav.querySelector('#lang-en') as HTMLButtonElement;
  const btnVi = nav.querySelector('#lang-vi') as HTMLButtonElement;

  btnEn.addEventListener('click', () => {
    setLanguage('en');
  });

  btnVi.addEventListener('click', () => {
    setLanguage('vi');
  });

  // Attach internal routing
  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href') || '#/';
      onNavigate(href.replace('#', ''));
    });
  });

  return nav;
}
