import { getLanguage } from '../i18n';

export function createAttentionMatrixWidget(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm';

  const isVi = getLanguage() === 'vi';

  const sentenceEn = ['The', 'animal', 'didn’t', 'cross', 'the', 'street', 'because', 'it', 'was', 'too', 'tired'];
  const sentenceVi = ['Con', 'vật', 'không', 'qua', 'đường', 'vì', 'nó', 'quá', 'mệt'];

  const tokens = isVi ? sentenceVi : sentenceEn;
  const n = tokens.length;

  // Generate a realistic attention matrix where "it" (or "nó") strongly attends to "animal" (or "vật")
  const matrix: number[][] = [];
  const targetIdx = isVi ? 6 : 7; // "nó" or "it"
  const referentIdx = 1; // "vật" or "animal"

  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    let sum = 0;
    for (let j = 0; j < n; j++) {
      let weight = Math.random() * 0.15;
      if (i === j) weight += 0.4; // Self token correlation
      if (i === targetIdx && j === referentIdx) weight += 0.85; // Strong cross-attention!
      if (j === targetIdx && i === referentIdx) weight += 0.4;
      row.push(weight);
      sum += weight;
    }
    // Softmax normalization approximation
    matrix.push(row.map(val => val / sum));
  }

  container.innerHTML = `
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xl">
        🔍
      </div>
      <div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">
          ${isVi ? 'Ma Trận Self-Attention Tương Tác' : 'Interactive Self-Attention Matrix Heatmap'}
        </h3>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          ${isVi
            ? 'Di chuột qua các từ để xem mức độ liên kết ngữ cảnh (Query - Key attention weights). Chú ý mối liên kết giữa "nó" và "con vật"!'
            : 'Hover over words to inspect Query-Key attention weights. Notice how "it" strongly attends back to "animal"!'}
        </p>
      </div>
    </div>

    <!-- Active Hover Inspector -->
    <div id="attention-tooltip" class="mb-4 p-3 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 rounded-xl text-xs text-purple-900 dark:text-purple-200 flex items-center justify-between">
      <span>${isVi ? '👉 Rê chuột vào một ô ma trận để xem giá trị Softmax(QKᵀ / √d)' : '👉 Hover over any cell to see Softmax(QKᵀ / √d) score'}</span>
      <span class="font-mono font-bold text-sm" id="attention-score">-</span>
    </div>

    <!-- Heatmap Grid -->
    <div class="overflow-x-auto pb-2">
      <div class="inline-block min-w-full">
        <table class="border-collapse text-xs font-mono">
          <thead>
            <tr>
              <th class="p-2 text-slate-400 font-normal">Tokens</th>
              ${tokens.map(t => `<th class="p-2 text-slate-600 dark:text-slate-300 font-semibold text-center">${t}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${tokens.map((rowToken, i) => `
              <tr>
                <td class="p-2 text-slate-600 dark:text-slate-300 font-semibold text-right whitespace-nowrap pr-3">${rowToken}</td>
                ${tokens.map((_, j) => {
                  const score = matrix[i][j];
                  const opacity = Math.min(Math.max(score * 1.8, 0.08), 0.95);
                  return `
                    <td
                      class="w-10 h-10 border border-slate-200 dark:border-slate-800 text-center cursor-pointer transition-colors duration-150 matrix-cell hover:ring-2 hover:ring-purple-500"
                      style="background-color: rgba(147, 51, 234, ${opacity.toFixed(2)});"
                      data-row="${tokens[i]}"
                      data-col="${tokens[j]}"
                      data-score="${score.toFixed(3)}"
                    >
                      <span class="${score > 0.3 ? 'text-white font-bold' : 'text-slate-700 dark:text-slate-300'} text-[10px]">
                        ${score.toFixed(2)}
                      </span>
                    </td>
                  `;
                }).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  const tooltipText = container.querySelector('#attention-tooltip span:first-child') as HTMLElement;
  const scoreBadge = container.querySelector('#attention-score') as HTMLElement;
  const cells = container.querySelectorAll('.matrix-cell');

  cells.forEach(cell => {
    cell.addEventListener('mouseenter', (e) => {
      const target = e.currentTarget as HTMLElement;
      const row = target.getAttribute('data-row');
      const col = target.getAttribute('data-col');
      const score = target.getAttribute('data-score');

      tooltipText.innerHTML = isVi
        ? `Từ <strong>"${row}"</strong> (Query) đang chú ý tới <strong>"${col}"</strong> (Key):`
        : `Token <strong>"${row}"</strong> (Query) attending to <strong>"${col}"</strong> (Key):`;
      scoreBadge.textContent = `${(parseFloat(score || '0') * 100).toFixed(1)}%`;
    });
  });

  return container;
}
