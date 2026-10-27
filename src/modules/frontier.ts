import { t, getLanguage } from '../i18n';
import { createTokenVisualizer } from '../widgets/token-visualizer';

export function renderFrontierPage(): HTMLElement {
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
        ${t('modules.frontier.title')}
      </h1>
      <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        ${t('modules.frontier.shortDesc')}
      </p>
    </div>

    <!-- Tokenization Visualizer Slot -->
    <div id="token-widget-slot" class="mb-10"></div>

    <!-- Tensor, Matrix, Vector breakdown -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">1D Array</span>
        <h4 class="font-extrabold text-base text-indigo-600 dark:text-indigo-400 my-1">Vector</h4>
        <p class="text-xs text-slate-500">${isVi ? 'Nhúng 1 token thành vector số (d_model = 4096 chiều)' : 'Embedding vector of a single token'}</p>
      </div>

      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">2D Grid</span>
        <h4 class="font-extrabold text-base text-purple-600 dark:text-purple-400 my-1">Matrix</h4>
        <p class="text-xs text-slate-500">${isVi ? 'Ma trận trọng số W giữa 2 tầng nơ-ron liên tiếp' : 'Weight matrix W connecting neural layers'}</p>
      </div>

      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">N-Dimensional</span>
        <h4 class="font-extrabold text-base text-emerald-600 dark:text-emerald-400 my-1">Tensor</h4>
        <p class="text-xs text-slate-500">${isVi ? 'Mảng đa chiều: [Batch_Size, Seq_Len, Dim]' : 'Multi-dim batch container: [Batch, Seq, Dim]'}</p>
      </div>
    </div>

    <!-- MoE & FlashAttention -->
    <div class="space-y-6 mb-10">
      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <span>👥</span>
          ${isVi ? 'Mixture of Experts (MoE): Mô Hình Hỗn Hợp Chuyên Gia' : 'Mixture of Experts (MoE)'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          ${t('modules.frontier.moe')}
        </p>
        <div class="p-3 bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 rounded-xl text-xs text-indigo-950 dark:text-indigo-200">
          <strong>${isVi ? 'Ví dụ thực tế:' : 'Real-world Examples:'}</strong> Mixtral 8x7B, DeepSeek-V3, GPT-4.
          ${isVi
            ? 'Tổng mô hình có thể lên tới hàng trăm tỷ tham số, nhưng chỉ có một nhóm nhỏ tham số kích hoạt (Active Parameters) cho mỗi token, giữ tốc độ sinh từ cực cao!'
            : 'Total parameters can reach hundreds of billions, but only a small active subset processes each token, delivering massive capability with manageable compute cost.'}
        </div>
      </section>

      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <span>⚡</span>
          ${isVi ? 'FlashAttention: Tối Ưu Hóa Bộ Nhớ Phần Cứng GPU' : 'FlashAttention: Fast Hardware-Aware Attention'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          ${t('modules.frontier.flashAttention')}
        </p>
      </section>

      <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <span>✨</span>
          ${isVi ? 'Khả Năng Tự Xuất Hiện (Emergent Abilities) & Quy Luật Mở Rộng' : 'Emergent Abilities & Scaling Laws'}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          ${t('modules.frontier.emergentAbilities')}
        </p>
      </section>
    </div>

    <!-- AI Timeline -->
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-10">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">
        📅 ${isVi ? 'Dòng Thời Gian Tiến Hóa AI Hiện Đại' : 'Modern AI Evolution Timeline'}
      </h3>
      <div class="border-l-2 border-indigo-500 pl-4 space-y-6 text-xs text-slate-600 dark:text-slate-400">
        <div>
          <span class="font-bold text-indigo-600 dark:text-indigo-400">2012</span> — <strong>AlexNet</strong>: Khởi đầu kỷ nguyên Deep Learning bùng nổ trên GPU.
        </div>
        <div>
          <span class="font-bold text-indigo-600 dark:text-indigo-400">2017</span> — <strong>Transformer (Attention Is All You Need)</strong>: Google Brain công bố kiến trúc nền móng cho toàn bộ LLM.
        </div>
        <div>
          <span class="font-bold text-indigo-600 dark:text-indigo-400">2020</span> — <strong>GPT-3 (175B)</strong>: Chứng minh quy luật mở rộng (Scaling Laws) và năng lực In-Context Learning.
        </div>
        <div>
          <span class="font-bold text-indigo-600 dark:text-indigo-400">2023</span> — <strong>ChatGPT & LLaMA</strong>: Làn sóng AI đại chúng và mã nguồn mở cho cộng đồng nghiên cứu toàn cầu.
        </div>
        <div>
          <span class="font-bold text-indigo-600 dark:text-indigo-400">2024-2026</span> — <strong>MoE, FlashAttention-3 & Test-Time Reasoning</strong>: Kiến trúc chuyên gia MoE thưa thớt, suy luận chuỗi tư duy (o1, DeepSeek, Gemini).
        </div>
      </div>
    </div>

    <!-- Next Chapter Callout -->
    <div class="mt-12 text-right">
      <a href="#/hardware" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition">
        ${isVi ? 'Tiếp tục: Phần Cứng, Băng Thông & Lượng Tử Hóa' : 'Next Chapter: Hardware, Bandwidth & Quantization'} →
      </a>
    </div>
  `;

  // Attach tokenizer widget
  const slot = container.querySelector('#token-widget-slot');
  if (slot) {
    slot.appendChild(createTokenVisualizer());
  }

  return container;
}
