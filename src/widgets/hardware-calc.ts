import { t, getLanguage } from '../i18n';

export function createHardwareCalculator(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm';

  const isVi = getLanguage() === 'vi';

  container.innerHTML = `
    <div class="flex items-center gap-3 mb-6">
      <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xl">
        ⚡
      </div>
      <div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white" data-i18n="calc.calculatorTitle">
          ${t('modules.lab.calculatorTitle')}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          ${t('modules.lab.calcDescription')}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <!-- Model Size -->
      <div>
        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          ${isVi ? 'Kích thước mô hình (Tỷ tham số)' : 'Model Size (Billion Parameters)'}
        </label>
        <select id="calc-model-size" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm text-slate-800 dark:text-slate-100 font-medium">
          <option value="1">1B (Llama 3.2 1B, SmolLM)</option>
          <option value="3">3B (Llama 3.2 3B, Phi-3.5)</option>
          <option value="8" selected>8B (Llama 3.1 8B, Gemma 2 9B)</option>
          <option value="14">14B (Qwen 2.5 14B)</option>
          <option value="32">32B (Qwen 2.5 32B)</option>
          <option value="70">70B (Llama 3.3 70B)</option>
          <option value="405">405B (Llama 3.1 405B)</option>
        </select>
      </div>

      <!-- Precision -->
      <div>
        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          ${isVi ? 'Độ chính xác (Lượng tử hóa)' : 'Weight Precision (Quantization)'}
        </label>
        <select id="calc-precision" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm text-slate-800 dark:text-slate-100 font-medium">
          <option value="0.5" selected>INT4 / NVFP4 (4-bit, ~0.55 GB / 1B)</option>
          <option value="1.0">INT8 / FP8 (8-bit, ~1.05 GB / 1B)</option>
          <option value="2.0">FP16 / BF16 (16-bit, ~2.10 GB / 1B)</option>
          <option value="4.0">FP32 (32-bit Float, ~4.15 GB / 1B)</option>
        </select>
      </div>

      <!-- Memory Bandwidth Preset -->
      <div>
        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
          ${isVi ? 'Băng thông bộ nhớ phần cứng' : 'Hardware Memory Bandwidth'}
        </label>
        <select id="calc-hardware" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-sm text-slate-800 dark:text-slate-100 font-medium">
          <option value="50">📱 Smartphone (LPDDR5 ~50 GB/s)</option>
          <option value="85">💻 Standard Laptop (DDR5 Dual ~85 GB/s)</option>
          <option value="200" selected>🍏 Apple M-Series Pro (~200 GB/s)</option>
          <option value="400">🍏 Apple M-Series Max (~400 GB/s)</option>
          <option value="280">🎮 Nvidia RTX 4060 (~272 GB/s)</option>
          <option value="1008">🚀 Nvidia RTX 4090 (~1,008 GB/s)</option>
          <option value="3350">🏢 Datacenter Nvidia H100 (~3,350 GB/s)</option>
        </select>
      </div>
    </div>

    <!-- Results Panel -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800">
      <div class="text-center p-3 bg-white dark:bg-slate-900 rounded-lg shadow-xs">
        <span class="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
          ${isVi ? 'Dung lượng RAM/VRAM' : 'Required VRAM'}
        </span>
        <span id="res-vram" class="text-2xl font-black text-indigo-600 dark:text-indigo-400">4.4 GB</span>
        <span class="text-xs text-slate-400 block mt-1">+ ~1 GB KV Cache</span>
      </div>

      <div class="text-center p-3 bg-white dark:bg-slate-900 rounded-lg shadow-xs">
        <span class="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
          ${isVi ? 'Tốc độ sinh từ lý thuyết' : 'Max Generation Speed'}
        </span>
        <span id="res-speed" class="text-2xl font-black text-emerald-600 dark:text-emerald-400">45.5 tok/s</span>
        <span class="text-xs text-slate-400 block mt-1">${isVi ? 'Băng thông giới hạn' : 'Bandwidth limited'}</span>
      </div>

      <div class="text-center p-3 bg-white dark:bg-slate-900 rounded-lg shadow-xs">
        <span class="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
          ${isVi ? 'Đánh giá khả năng chạy' : 'Edge Suitability'}
        </span>
        <span id="res-badge" class="inline-block mt-1 px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
          ${isVi ? 'Chạy mượt trên máy cá nhân' : 'Runs smoothly on Edge'}
        </span>
      </div>
    </div>

    <!-- Explanatory Insight -->
    <div class="mt-4 p-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400 bg-amber-500/5 border border-amber-500/20 rounded-xl">
      <strong class="text-amber-600 dark:text-amber-400 font-semibold">${isVi ? 'Quy luật cốt lõi:' : 'The Golden Law:'}</strong>
      ${isVi
        ? 'Khi sinh từng token (autoregressive generation), GPU phải đọc toàn bộ dung lượng mô hình từ VRAM qua bus bộ nhớ 1 lần cho mỗi từ. Do đó: Tốc độ tối đa = Băng thông bộ nhớ ÷ Kích thước mô hình.'
        : 'In autoregressive token generation, the GPU must stream the entire active model weights from memory once per token. Hence: Max Generation Speed = Memory Bandwidth ÷ Model Size.'}
    </div>
  `;

  const modelSelect = container.querySelector('#calc-model-size') as HTMLSelectElement;
  const precisionSelect = container.querySelector('#calc-precision') as HTMLSelectElement;
  const hardwareSelect = container.querySelector('#calc-hardware') as HTMLSelectElement;

  const resVram = container.querySelector('#res-vram') as HTMLElement;
  const resSpeed = container.querySelector('#res-speed') as HTMLElement;
  const resBadge = container.querySelector('#res-badge') as HTMLElement;

  function update() {
    const params = parseFloat(modelSelect.value); // Billions
    const bytesPerParam = parseFloat(precisionSelect.value);
    const bandwidth = parseFloat(hardwareSelect.value); // GB/s

    // Model memory size: params * 1e9 * bytesPerParam / (1024^3)
    const modelGb = (params * bytesPerParam * 1.05); // including overhead
    const tokensPerSec = bandwidth / modelGb;

    resVram.textContent = `${modelGb.toFixed(1)} GB`;
    resSpeed.textContent = `${tokensPerSec.toFixed(1)} tok/s`;

    if (modelGb <= 6) {
      resBadge.className = 'inline-block mt-1 px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300';
      resBadge.textContent = isVi ? 'Điện thoại & Laptop chạy tốt' : 'Runs on Phones & Laptops';
    } else if (modelGb <= 16) {
      resBadge.className = 'inline-block mt-1 px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300';
      resBadge.textContent = isVi ? 'Cần Laptop RAM 16GB+ hoặc GPU rời' : 'Needs 16GB+ RAM / Discrete GPU';
    } else if (modelGb <= 48) {
      resBadge.className = 'inline-block mt-1 px-3 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300';
      resBadge.textContent = isVi ? 'Cần Mac Studio hoặc 2x RTX 3090/4090' : 'Needs Mac Studio or 2x GPUs';
    } else {
      resBadge.className = 'inline-block mt-1 px-3 py-1 text-xs font-bold rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300';
      resBadge.textContent = isVi ? 'Cụm máy chủ GPU chuyên dụng (A100/H100)' : 'Requires Multi-GPU Server Cluster';
    }
  }

  modelSelect.addEventListener('change', update);
  precisionSelect.addEventListener('change', update);
  hardwareSelect.addEventListener('change', update);
  update();

  return container;
}
