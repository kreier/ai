import { t, getLanguage } from '../i18n';

export function renderTrainingPage(): HTMLElement {
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
        ${t('modules.training.title')}
      </h1>
      <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        ${t('modules.training.shortDesc')}
      </p>
    </div>

    <!-- The 4-Step Cycle Diagram -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <div class="w-10 h-10 mx-auto rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold mb-3">
          1
        </div>
        <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">${isVi ? 'Lan Truyền Tiến' : 'Forward Pass'}</h4>
        <p class="text-xs text-slate-500 font-mono">y_pred = σ(W·x + b)</p>
      </div>

      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <div class="w-10 h-10 mx-auto rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold mb-3">
          2
        </div>
        <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">${isVi ? 'Tính Hàm Mất Mát' : 'Loss Computation'}</h4>
        <p class="text-xs text-slate-500 font-mono">Loss = ℒ(y_pred, y_true)</p>
      </div>

      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <div class="w-10 h-10 mx-auto rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold mb-3">
          3
        </div>
        <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">${isVi ? 'Lan Truyền Ngược' : 'Backpropagation'}</h4>
        <p class="text-xs text-slate-500 font-mono">∂Loss / ∂W (Chain Rule)</p>
      </div>

      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <div class="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold mb-3">
          4
        </div>
        <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">${isVi ? 'Cập Nhật Trọng Số' : 'Weight Update'}</h4>
        <p class="text-xs text-slate-500 font-mono">W ← W - η · ∇W</p>
      </div>
    </div>

    <!-- Detailed Sections -->
    <div class="space-y-6">
      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
          ${isVi ? '1. Lan Truyền Tiến (Forward Pass)' : '1. The Forward Pass'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          ${t('modules.training.forwardPass')}
        </p>
        <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl font-mono text-xs text-slate-700 dark:text-slate-300">
          z = W₁·x₁ + W₂·x₂ + ... + Wₙ·xₙ + b &nbsp;→&nbsp; a = ReLU(z) = max(0, z)
        </div>
      </section>

      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
          ${isVi ? '2. Hàm Mất Mát & Lan Truyền Ngược (Loss & Backprop)' : '2. Loss & Backpropagation'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          ${t('modules.training.lossFunction')}
        </p>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          ${t('modules.training.backpropagation')}
        </p>
      </section>

      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
          ${isVi ? '3. Tối Ưu Hóa (Optimizers: SGD, AdamW)' : '3. Optimization (Gradient Descent & AdamW)'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          ${t('modules.training.optimization')}
        </p>
      </section>

      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
          ${isVi ? '4. Suy Luận (Inference)' : '4. How Inference Works'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          ${t('modules.training.inference')}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
          <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
            <span class="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">Temperature (T)</span>
            ${isVi ? 'Điều chỉnh độ phẳng của phân phối xác suất. T=0 cho kết quả tất định, T>0.7 sinh văn bản sáng tạo hơn.' : 'Flattens probability logits. T=0 is greedy/deterministic, T>0.7 allows creative randomness.'}
          </div>
          <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
            <span class="font-bold text-indigo-600 dark:text-indigo-400 block mb-1">Top-p (Nucleus Sampling)</span>
            ${isVi ? 'Chỉ lấy mẫu từ nhóm token tích lũy đạt ngưỡng p (ví dụ 0.9), loại bỏ các token kỳ quặc ở đuôi dài.' : 'Samples only from the top cumulative mass p (e.g. 0.9), filtering out low-probability tail noise.'}
          </div>
        </div>
      </section>
    </div>

    <!-- Next Chapter Callout -->
    <div class="mt-12 text-right">
      <a href="#/transformer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition">
        ${isVi ? 'Tiếp tục: Mô Hình Transformer' : 'Next Chapter: Transformers & Attention'} →
      </a>
    </div>
  `;

  return container;
}
