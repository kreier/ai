import { t } from '../i18n';
import { APP_VERSION } from '../version';

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 py-10 text-sm text-slate-500 dark:text-slate-400 transition-colors';

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <span class="font-bold text-slate-900 dark:text-white">${t('site.title')}</span>
        <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">v${APP_VERSION}</span>
        <span>•</span>
        <span>${t('site.footerText')}</span>
      </div>

      <div class="flex items-center gap-6 text-xs font-semibold">
        <a href="./sound-classifier/index.html" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          🎵 ${t('site.soundClassifierLink')}
        </a>
        <a href="https://github.com/kreier/ai" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          ${t('site.github')}
        </a>
        <a href="https://kreier.github.io/ai/" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
          GitHub Pages
        </a>
      </div>
    </div>
  `;

  return footer;
}
