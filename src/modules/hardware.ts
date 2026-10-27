import { t, getLanguage } from '../i18n';
import { createHardwareCalculator } from '../widgets/hardware-calc';

export function renderHardwarePage(): HTMLElement {
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
        ${t('modules.hardware.title')}
      </h1>
      <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        ${t('modules.hardware.shortDesc')}
      </p>
    </div>

    <!-- Core Question: Can we run AI on phones/PCs? -->
    <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
        <span>📱</span>
        ${isVi ? 'Chúng Ta Có Thể Chạy AI Trên Điện Thoại & Laptop Không?' : 'Can We Run AI On Phones and Laptops?'}
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
        ${t('modules.hardware.canWeRun')}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
          <strong class="text-indigo-600 dark:text-indigo-400 font-bold block mb-1">
            ${isVi ? '1. Nút thắt Prefill (Xử lý đề bài / Prompt)' : '1. Prefill Phase (Prompt Ingestion)'}
          </strong>
          <span class="text-slate-600 dark:text-slate-300">
            ${isVi
              ? 'Toàn bộ câu hỏi đầu vào được tính toán song song. Giai đoạn này là Compute-Bound (nghẽn năng lực tính toán FLOPs của GPU/NPU).'
              : 'All prompt tokens are processed simultaneously. Compute-bound (limited by GPU/NPU TFLOPs).'}
          </span>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
          <strong class="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
            ${isVi ? '2. Nút thắt Generation (Sinh từng từ kết quả)' : '2. Generation Phase (Token-by-Token)'}
          </strong>
          <span class="text-slate-600 dark:text-slate-300">
            ${isVi
              ? 'Sinh từng từ một tuần tự. Giai đoạn này là Memory-Bandwidth-Bound (nghẽn tốc độ truyền dữ liệu từ RAM/VRAM vào chip xử lý).'
              : 'Autoregressive generation. Strictly memory-bandwidth bound (limited by GB/s RAM streaming speed).'}
          </span>
        </div>
      </div>
    </section>

    <!-- Interactive Hardware Calculator Slot -->
    <div id="calculator-widget-slot" class="mb-10"></div>

    <!-- Weight Formats & Precision Comparison Table -->
    <section class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-10">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
        ⚖️ ${isVi ? 'Bảng So Sánh Các Định Dạng Trọng Số (Weight Formats)' : 'Weight Precision Formats Comparison'}
      </h3>
      <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
        ${t('modules.hardware.quantizationIntro')}
      </p>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase font-semibold">
              <th class="py-2.5 px-3">Format</th>
              <th class="py-2.5 px-3">Bits</th>
              <th class="py-2.5 px-3">Bytes / Param</th>
              <th class="py-2.5 px-3">VRAM for 8B Model</th>
              <th class="py-2.5 px-3">Primary Use</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
            <tr>
              <td class="py-2.5 px-3 font-bold font-mono text-slate-900 dark:text-white">FP32</td>
              <td class="py-2.5 px-3 font-mono">32-bit</td>
              <td class="py-2.5 px-3 font-mono">4.0 B</td>
              <td class="py-2.5 px-3 font-mono text-rose-600 dark:text-rose-400">~32.0 GB</td>
              <td class="py-2.5 px-3">${isVi ? 'Nghiên cứu & Master weights huấn luyện' : 'Research & master weights'}</td>
            </tr>
            <tr class="bg-slate-50/50 dark:bg-slate-800/30">
              <td class="py-2.5 px-3 font-bold font-mono text-indigo-600 dark:text-indigo-400">FP16 / BF16</td>
              <td class="py-2.5 px-3 font-mono">16-bit</td>
              <td class="py-2.5 px-3 font-mono">2.0 B</td>
              <td class="py-2.5 px-3 font-mono text-amber-600 dark:text-amber-400">~16.0 GB</td>
              <td class="py-2.5 px-3">${isVi ? 'Chuẩn huấn luyện & suy luận gốc hiện đại' : 'Modern standard baseline'}</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-bold font-mono text-blue-600 dark:text-blue-400">FP8 (E4M3)</td>
              <td class="py-2.5 px-3 font-mono">8-bit</td>
              <td class="py-2.5 px-3 font-mono">1.0 B</td>
              <td class="py-2.5 px-3 font-mono text-blue-600 dark:text-blue-400">~8.5 GB</td>
              <td class="py-2.5 px-3">${isVi ? 'Nvidia H100 / Blackwell Datacenter' : 'Nvidia Hopper H100 datacenter'}</td>
            </tr>
            <tr class="bg-slate-50/50 dark:bg-slate-800/30">
              <td class="py-2.5 px-3 font-bold font-mono text-emerald-600 dark:text-emerald-400">INT8</td>
              <td class="py-2.5 px-3 font-mono">8-bit</td>
              <td class="py-2.5 px-3 font-mono">1.0 B</td>
              <td class="py-2.5 px-3 font-mono text-emerald-600 dark:text-emerald-400">~8.5 GB</td>
              <td class="py-2.5 px-3">${isVi ? 'Lượng tử hóa số nguyên bảo toàn độ chính xác' : 'Accurate integer quantization'}</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-bold font-mono text-purple-600 dark:text-purple-400">INT4 (GGUF/AWQ)</td>
              <td class="py-2.5 px-3 font-mono">4-bit</td>
              <td class="py-2.5 px-3 font-mono">0.5 B</td>
              <td class="py-2.5 px-3 font-mono text-purple-600 dark:text-purple-400 font-bold">~4.5 GB</td>
              <td class="py-2.5 px-3">${isVi ? 'Chạy cục bộ trên laptop cá nhân & điện thoại' : 'Local LLMs on laptops & phones'}</td>
            </tr>
            <tr class="bg-indigo-50/30 dark:bg-indigo-950/20">
              <td class="py-2.5 px-3 font-bold font-mono text-indigo-500">NVFP4</td>
              <td class="py-2.5 px-3 font-mono">4-bit</td>
              <td class="py-2.5 px-3 font-mono">0.5 B</td>
              <td class="py-2.5 px-3 font-mono text-indigo-500 font-bold">~4.5 GB</td>
              <td class="py-2.5 px-3">${isVi ? 'Kiến trúc Nvidia Blackwell (gấp đôi tốc độ FP8)' : 'Nvidia Blackwell micro-scaling'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Next Chapter Callout -->
    <div class="mt-12 text-right">
      <a href="#/lab" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition">
        ${isVi ? 'Mở Phòng Thí Nghiệm & Thử Nghiệm Âm Thanh' : 'Open Interactive Lab & Sound Classifier'} →
      </a>
    </div>
  `;

  // Attach calculator widget
  const slot = container.querySelector('#calculator-widget-slot');
  if (slot) {
    slot.appendChild(createHardwareCalculator());
  }

  return container;
}
