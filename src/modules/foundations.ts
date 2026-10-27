import { t, getLanguage } from '../i18n';

export function renderFoundationsPage(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10';

  const isVi = getLanguage() === 'vi';

  container.innerHTML = `
    <!-- Header -->
    <div class="mb-10">
      <a href="#/" class="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 hover:underline">
        ← ${isVi ? 'Quay lại Trang chủ' : 'Back to Overview'}
      </a>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        ${t('modules.foundations.title')}
      </h1>
      <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        ${t('modules.foundations.shortDesc')}
      </p>
    </div>

    <!-- AI/ML/DL Hierarchy Diagram -->
    <div class="p-6 mb-10 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
      <h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
        ${t('modules.foundations.hierarchyTitle')}
      </h3>
      <div class="relative p-6 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/30 dark:bg-indigo-950/20 text-center">
        <span class="text-xs font-extrabold text-indigo-700 dark:text-indigo-300 block mb-2">
          ${t('modules.foundations.aiHierarchy')}
        </span>
        <div class="p-5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/30">
          <span class="text-xs font-extrabold text-blue-700 dark:text-blue-300 block mb-2">
            ${t('modules.foundations.mlHierarchy')}
          </span>
          <div class="p-4 rounded-xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/40">
            <span class="text-xs font-extrabold text-purple-700 dark:text-purple-300 block mb-2">
              ${t('modules.foundations.dlHierarchy')}
            </span>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-900 dark:text-purple-200">
                ${t('modules.foundations.cnnLabel')}
              </div>
              <div class="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-900 dark:text-purple-200">
                ${t('modules.foundations.rnnLabel')}
              </div>
              <div class="p-2.5 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-xs">
                ${t('modules.foundations.transformerLabel')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Concept Cards -->
    <div class="space-y-6">
      <!-- AI Definition -->
      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center text-sm font-bold">1</span>
          ${isVi ? 'Trí Tuệ Nhân Tạo (Artificial Intelligence - AI)' : 'Artificial Intelligence (AI)'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          ${t('modules.foundations.aiDef')}
        </p>
      </section>

      <!-- ML Definition -->
      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-bold">2</span>
          ${isVi ? 'Học Máy (Machine Learning - ML)' : 'Machine Learning (ML)'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          ${t('modules.foundations.mlDef')}
        </p>
      </section>

      <!-- Deep Learning & Neural Networks -->
      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center text-sm font-bold">3</span>
          ${isVi ? 'Học Sâu & Mạng Nơ-ron (Deep Learning & Neural Networks)' : 'Deep Learning & Neural Networks'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          ${t('modules.foundations.dlDef')}
        </p>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          ${t('modules.foundations.nnDef')}
        </p>
      </section>

      <!-- Classic Architectures: CNN vs RNN -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">
            🖼️ Convolutional Neural Networks (CNN)
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            ${t('modules.foundations.cnnDef')}
          </p>
        </section>

        <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">
            🔁 Recurrent Neural Networks (RNN)
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            ${t('modules.foundations.rnnDef')}
          </p>
        </section>
      </div>
    </div>

    <!-- Next Chapter Callout -->
    <div class="mt-12 text-right">
      <a href="#/training" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition">
        ${isVi ? 'Tiếp tục: Huấn Luyện & Suy Luận' : 'Next Chapter: Training & Inference'} →
      </a>
    </div>
  `;

  return container;
}
