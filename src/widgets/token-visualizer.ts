import { getLanguage } from '../i18n';

export function createTokenVisualizer(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm';

  const isVi = getLanguage() === 'vi';

  container.innerHTML = `
    <div class="flex items-center gap-3 mb-6">
      <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-xl">
        🔤
      </div>
      <div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">
          ${isVi ? 'Mô Phỏng Tách Token (Tokenization Playground)' : 'Subword Tokenizer Visualizer'}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          ${isVi ? 'Khám phá cách mô hình ngôn ngữ chia nhỏ văn bản thành các token độc lập.' : 'See how language models break input sentences into individual subword tokens.'}
        </p>
      </div>
    </div>

    <!-- Quick Preset Buttons -->
    <div class="flex flex-wrap gap-2 mb-4">
      <button id="preset-en" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition">
        English: "Artificial intelligence transforms computing."
      </button>
      <button id="preset-vi" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition">
        Tiếng Việt: "Trí tuệ nhân tạo đang thay đổi thế giới."
      </button>
    </div>

    <!-- Text Input -->
    <textarea id="token-input" rows="3" class="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"></textarea>

    <!-- Token Output Display -->
    <div class="mt-4">
      <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">
          ${isVi ? 'Các Mảnh Token Được Phân Tách:' : 'Parsed Token Chunks:'}
        </span>
        <div class="text-xs font-medium text-slate-500 flex items-center gap-4">
          <span>${isVi ? 'Số ký tự:' : 'Characters:'} <strong id="char-count" class="text-slate-900 dark:text-white">0</strong></span>
          <span>${isVi ? 'Số token ước tính:' : 'Tokens:'} <strong id="token-count" class="text-indigo-600 dark:text-indigo-400">0</strong></span>
        </div>
      </div>

      <div id="token-chips" class="min-h-[64px] p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5 items-center font-mono text-xs">
        <!-- Token badges inserted dynamically -->
      </div>
    </div>
  `;

  const input = container.querySelector('#token-input') as HTMLTextAreaElement;
  const tokenChips = container.querySelector('#token-chips') as HTMLElement;
  const charCount = container.querySelector('#char-count') as HTMLElement;
  const tokenCount = container.querySelector('#token-count') as HTMLElement;

  const presetEn = container.querySelector('#preset-en') as HTMLButtonElement;
  const presetVi = container.querySelector('#preset-vi') as HTMLButtonElement;

  const colors = [
    'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800',
    'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
    'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
    'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800',
    'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800',
    'bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800',
  ];

  // Realistic subword heuristic tokenizer
  function tokenize(text: string): string[] {
    if (!text) return [];
    // Split on spaces and punctuation while keeping delimiters
    const words = text.match(/[\w\u00C0-\u1EF9]+|[^\w\s\u00C0-\u1EF9]+|\s+/g) || [];
    const tokens: string[] = [];

    for (const word of words) {
      if (/^\s+$/.test(word)) {
        tokens.push('␣');
      } else if (word.length > 5) {
        // Break long words into subwords (simulating BPE)
        let i = 0;
        while (i < word.length) {
          const chunkLen = Math.min(Math.floor(Math.random() * 2) + 3, word.length - i);
          tokens.push(word.slice(i, i + chunkLen));
          i += chunkLen;
        }
      } else {
        tokens.push(word);
      }
    }
    return tokens;
  }

  function renderTokens() {
    const text = input.value;
    charCount.textContent = String(text.length);
    const tokens = tokenize(text);
    tokenCount.textContent = String(tokens.length);

    tokenChips.innerHTML = '';
    if (tokens.length === 0) {
      tokenChips.innerHTML = `<span class="text-slate-400 italic">${isVi ? 'Nhập văn bản phía trên để xem các mảnh token...' : 'Type text above to inspect token chunks...'}</span>`;
      return;
    }

    tokens.forEach((tok, idx) => {
      const chip = document.createElement('span');
      const colorClass = colors[idx % colors.length];
      chip.className = `px-2 py-1 rounded-md border font-mono font-medium shadow-2xs hover:scale-105 transition-transform cursor-pointer ${colorClass}`;
      chip.textContent = tok;
      chip.title = `Token #${idx + 1}: "${tok}"`;
      tokenChips.appendChild(chip);
    });
  }

  presetEn.addEventListener('click', () => {
    input.value = "Artificial intelligence transforms computing by learning patterns from data.";
    renderTokens();
  });

  presetVi.addEventListener('click', () => {
    input.value = "Trí tuệ nhân tạo đang thay đổi thế giới nhờ việc học các quy luật từ dữ liệu.";
    renderTokens();
  });

  input.addEventListener('input', renderTokens);

  // Set default initial value based on active language
  input.value = isVi
    ? "Mô hình ngôn ngữ lớn hoạt động dựa trên cơ chế Attention và biểu diễn ma trận."
    : "Large Language Models operate using the Self-Attention mechanism and matrix multiplications.";
  renderTokens();

  return container;
}
