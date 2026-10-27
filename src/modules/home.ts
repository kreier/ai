import { t } from '../i18n';

export function renderHomePage(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12';

  container.innerHTML = `
    <!-- Hero Section -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6 shadow-2xs">
        <span class="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
        ${t('site.badge')}
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
        ${t('hero.title')}
      </h1>
      <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
        ${t('hero.description')}
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <a href="#/foundations" class="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02]">
          ${t('hero.exploreModules')}
        </a>
        <a href="#/lab" class="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-all hover:scale-[1.02]">
          ${t('hero.tryLab')}
        </a>
      </div>

      <!-- Spotlight Banner for Existing Sound Classifier -->
      <div class="mt-10 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-purple-500/10 border border-amber-500/20 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl font-bold shrink-0">
            🎵
          </div>
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Featured Demo</span>
            <h4 class="font-bold text-slate-900 dark:text-white text-sm">6-Tone Neural Sound Classifier (p5.js + ml5.js)</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">Classifies a 400x400 grid with 1 hidden layer & 16 nodes to predict tones.</p>
          </div>
        </div>
        <a href="./sound-classifier/index.html" class="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold whitespace-nowrap transition">
          Launch Demo →
        </a>
      </div>
    </div>

    <!-- Chapter Grid Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card 1 -->
      <a href="#/foundations" class="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg transition duration-200">
        <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
          🧠
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
          ${t('modules.foundations.title')}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          ${t('modules.foundations.shortDesc')}
        </p>
      </a>

      <!-- Card 2 -->
      <a href="#/training" class="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg transition duration-200">
        <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
          🔄
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
          ${t('modules.training.title')}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          ${t('modules.training.shortDesc')}
        </p>
      </a>

      <!-- Card 3 -->
      <a href="#/transformer" class="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg transition duration-200">
        <div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
          ⚡
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
          ${t('modules.transformer.title')}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          ${t('modules.transformer.shortDesc')}
        </p>
      </a>

      <!-- Card 4 -->
      <a href="#/frontier" class="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg transition duration-200">
        <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
          🌌
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
          ${t('modules.frontier.title')}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          ${t('modules.frontier.shortDesc')}
        </p>
      </a>

      <!-- Card 5 -->
      <a href="#/hardware" class="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg transition duration-200">
        <div class="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
          💻
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
          ${t('modules.hardware.title')}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          ${t('modules.hardware.shortDesc')}
        </p>
      </a>

      <!-- Card 6 -->
      <a href="#/lab" class="group p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 hover:shadow-lg transition duration-200">
        <div class="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
          🧪
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
          ${t('modules.lab.title')}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          ${t('modules.lab.shortDesc')}
        </p>
      </a>
    </div>
  `;

  return container;
}
