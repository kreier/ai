import { t, getLanguage } from '../i18n';
import { createHardwareCalculator } from '../widgets/hardware-calc';
import { createTokenVisualizer } from '../widgets/token-visualizer';
import { createAttentionMatrixWidget } from '../widgets/attention-matrix';

export function renderLabPage(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10';

  const isVi = getLanguage() === 'vi';

  container.innerHTML = `
    <!-- Header -->
    <div class="mb-10">
      <a href="#/" class="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 hover:underline">
        ← ${isVi ? 'Quay lại Trang chủ' : 'Back to Overview'}
      </a>
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            ${t('modules.lab.title')}
          </h1>
          <p class="text-base text-slate-600 dark:text-slate-400">
            ${t('modules.lab.shortDesc')}
          </p>
        </div>
      </div>
    </div>

    <!-- Spotlight Section: Sound Classifier -->
    <section class="p-6 rounded-3xl bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 mb-12 shadow-sm">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            Project Showcase
          </div>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
            ${t('modules.lab.soundClassifierTitle')}
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl">
            ${t('modules.lab.soundClassifierDesc')}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <a
            href="./sound-classifier/index.html"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs shadow-md shadow-amber-600/20 transition hover:scale-[1.02]"
          >
            ${t('modules.lab.launchSoundClassifier')} ↗
          </a>
        </div>
      </div>

      <!-- Neural Network Specs Pill Bar -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-xs font-mono">
        <div class="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <span class="text-slate-400 block text-[10px] uppercase">Input Grid</span>
          <span class="font-bold text-slate-800 dark:text-slate-100">400 × 400 (x, y)</span>
        </div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <span class="text-slate-400 block text-[10px] uppercase">Hidden Architecture</span>
          <span class="font-bold text-indigo-600 dark:text-indigo-400">1 Layer, 16 Nodes</span>
        </div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <span class="text-slate-400 block text-[10px] uppercase">Output Classes</span>
          <span class="font-bold text-emerald-600 dark:text-emerald-400">6 Distinct Tones</span>
        </div>
        <div class="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          <span class="text-slate-400 block text-[10px] uppercase">Libraries</span>
          <span class="font-bold text-amber-600 dark:text-amber-400">ml5.js + p5.js</span>
        </div>
      </div>

      <!-- Embedded Iframe Container -->
      <div class="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-black shadow-lg aspect-[4/3] max-h-[580px]">
        <iframe
          id="sound-classifier-frame"
          src="./sound-classifier/index.html"
          title="p5.js Sound Classifier"
          class="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>
    </section>

    <!-- Lab Tools Grid -->
    <div class="space-y-12">
      <!-- Tool 1: Hardware Calculator -->
      <div id="lab-hardware-calc"></div>

      <!-- Tool 2: Attention Matrix -->
      <div id="lab-attention-matrix"></div>

      <!-- Tool 3: Tokenizer Visualizer -->
      <div id="lab-token-visualizer"></div>
    </div>
  `;

  // Mount widgets into lab slots
  const calcSlot = container.querySelector('#lab-hardware-calc');
  if (calcSlot) calcSlot.appendChild(createHardwareCalculator());

  const attnSlot = container.querySelector('#lab-attention-matrix');
  if (attnSlot) attnSlot.appendChild(createAttentionMatrixWidget());

  const tokenSlot = container.querySelector('#lab-token-visualizer');
  if (tokenSlot) tokenSlot.appendChild(createTokenVisualizer());

  return container;
}
