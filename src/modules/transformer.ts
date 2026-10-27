import { t, getLanguage } from '../i18n';
import { createAttentionMatrixWidget } from '../widgets/attention-matrix';

export function renderTransformerPage(): HTMLElement {
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
        ${t('modules.transformer.title')}
      </h1>
      <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        ${t('modules.transformer.shortDesc')}
      </p>
    </div>

    <!-- Core Explanations -->
    <div class="space-y-6 mb-10">
      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <span>🚀</span>
          ${isVi ? 'Tại Sao Transformer Thay Thế Hoàn Toàn RNN?' : 'Why Did Transformers Replace RNNs?'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          ${t('modules.transformer.parallelization')}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60">
            <strong class="text-rose-700 dark:text-rose-400 block mb-1">${t('modules.transformer.legacyRnn')}</strong>
            ${t('modules.transformer.legacyRnnDesc')}
          </div>
          <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60">
            <strong class="text-emerald-700 dark:text-emerald-400 block mb-1">${t('modules.transformer.transformerParallel')}</strong>
            ${t('modules.transformer.transformerParallelDesc')}
          </div>
        </div>
      </section>

      <!-- The Math of Attention -->
      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <span>🎯</span>
          ${isVi ? 'Cơ Chế Tự Tập Trung (Self-Attention) & Bộ Ba Q - K - V' : 'Self-Attention & Query, Key, Value'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          ${t('modules.transformer.qkv')}
        </p>

        <!-- Math Block -->
        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-center text-sm sm:text-base overflow-x-auto shadow-inner">
          Attention(Q, K, V) = Softmax( (Q · Kᵀ) / √dₖ ) · V
        </div>
      </section>
    </div>

    <!-- Interactive Attention Widget Insertion Point -->
    <div id="attention-widget-slot" class="mb-10"></div>

    <!-- Positional Encodings & RoPE -->
    <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-10">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
        📍 ${isVi ? 'Mã Hóa Vị Trí (Positional Encoding & RoPE)' : 'Positional Encodings & RoPE'}
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        ${t('modules.transformer.positionalEncoding')}
      </p>
    </section>

    <!-- Next Chapter Callout -->
    <div class="mt-12 text-right">
      <a href="#/frontier" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition">
        ${isVi ? 'Tiếp tục: LLM Hiện Đại, MoE & FlashAttention' : 'Next Chapter: Modern LLMs, MoE & FlashAttention'} →
      </a>
    </div>
  `;

  // Attach interactive widget
  const slot = container.querySelector('#attention-widget-slot');
  if (slot) {
    slot.appendChild(createAttentionMatrixWidget());
  }

  return container;
}
