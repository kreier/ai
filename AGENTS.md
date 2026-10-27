# AGENTS.md — AI Agent Operating Guide for AI Explorer

Welcome, Agent. This repository contains **AI Explorer (Trí Tuệ Nhân Tạo)**: an interactive, bilingual (English & Vietnamese) educational website built with Vite, Vanilla TypeScript, and Tailwind CSS.

This file serves as your directive and specification manual for implementing features, writing educational content, maintaining translations, and building interactive widgets.

---

## 1. Project Philosophy & Core Stack

1. **Lightweight & Fast**: Use Vanilla TypeScript + Tailwind CSS. Avoid heavy frontend frameworks (React/Vue/Angular) unless explicitly requested. Fast load times and zero dependency bloat are core principles.
2. **Deeply Educational & Intuitive**: Explain complex machine learning topics with clear mental models, mathematical intuition (LaTeX/KaTeX styling), and interactive explorable visualizations.
3. **True Bilingual Parity**: Every piece of content, label, button, and educational explanation must exist in both **English (`en`)** and **Vietnamese (`vi`)**.
4. **GitHub Pages Compatibility**: The site deploys to `https://<username>.github.io/ai/`. All assets, relative links, and router paths must respect `base: '/ai/'`.

---

## 2. Directory Structure

```text
ai/
├── public/
│   ├── sound-classifier/       # Existing p5.js + ml5.js neural net project (DO NOT MODIFY)
│   ├── click-classifier.jpg
│   └── favicon.svg
├── src/
│   ├── components/             # Reusable UI components (Navbar, Footer, LanguageSwitcher, Card)
│   ├── i18n/                   # Internationalization engine and dictionary files
│   │   ├── en.json             # English content strings
│   │   ├── vi.json             # Vietnamese content strings
│   │   └── index.ts            # Reactive i18n state and helper functions (t(), setLanguage())
│   ├── modules/                # Educational chapters / topic views
│   │   ├── foundations.ts      # AI, ML, Deep Learning, RNN, CNN, Neural Networks
│   │   ├── training.ts         # Forward pass, loss, backpropagation, optimizers, inference
│   │   ├── transformer.ts      # Transformers, Attention (Q, K, V), Multi-Head Attention
│   │   ├── frontier.ts         # Tokens, Matrices/Tensors, MoE, FlashAttention, Emergent abilities
│   │   └── hardware.ts         # Edge AI, Bandwidth bottleneck, FLOPs, Weight formats (FP16..NVFP4)
│   ├── widgets/                # Interactive visual components & calculators
│   │   ├── token-visualizer.ts # Interactive text tokenization highlighter
│   │   ├── attention-matrix.ts # Interactive query-key attention heatmap
│   │   ├── hardware-calc.ts    # Memory bandwidth & tokens/sec speed estimator
│   │   └── quant-table.ts      # Weight formats and VRAM footprint comparison tool
│   ├── styles/
│   │   └── main.css            # Tailwind CSS directives and custom styling
│   ├── router.ts               # Hash-based or query-based client router (GitHub Pages safe)
│   └── main.ts                 # Application entrypoint & DOM initialization
├── index.html                  # Root HTML template
├── vite.config.js              # Vite configuration (base: '/ai/')
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript compiler configuration
├── ROADMAP.md                  # Staged project milestones & progress tracker
└── AGENTS.md                   # Agent operating manual (this document)
```

---

## 3. Bilingual Terminology & Translation Rules

When adding new content, both `src/i18n/en.json` and `src/i18n/vi.json` must be updated concurrently. The keys must match 1:1.

### Key AI Terminology in Vietnamese:
- **Artificial Intelligence (AI)**: Trí tuệ nhân tạo
- **Machine Learning (ML)**: Học máy
- **Deep Learning (DL)**: Học sâu
- **Neural Network**: Mạng nơ-ron (hoặc Mạng nơ-ron nhân tạo)
- **Forward Pass / Propagation**: Lan truyền tiến (hoặc Truyền thẳng)
- **Backpropagation**: Lan truyền ngược
- **Loss Function**: Hàm mất mát (Loss)
- **Weights & Biases**: Trọng số & Hệ số điều chỉnh (Biases)
- **Inference**: Suy luận (hoặc Chạy mô hình)
- **Transformer**: Mô hình Transformer
- **Self-Attention**: Cơ chế tự tập trung (Self-Attention)
- **Token / Tokenization**: Token / Quá trình tách token (Token hóa)
- **Matrix / Tensor**: Ma trận / Ten-xơ
- **Mixture of Experts (MoE)**: Mô hình hỗn hợp chuyên gia (MoE)
- **Quantization**: Lượng tử hóa
- **Memory Bandwidth**: Băng thông bộ nhớ
- **Latency / Throughput**: Độ trễ / Băng thông xử lý (Tokens mỗi giây)
- **Edge AI**: AI trên thiết bị cục bộ / Thiết bị biên

*Note*: Widely adopted technical acronyms (e.g. LLM, RNN, CNN, MoE, Q/K/V, FP16, INT8, NVFP4, VRAM) should be retained alongside their Vietnamese explanation.

---

## 4. Interactive Widget Development Standards

1. **Lightweight & Self-contained**: Every widget inside `src/widgets/` must export an `init<WidgetName>(container: HTMLElement)` function or a factory class.
2. **State Cleanup**: Widgets must provide a cleanup or destroy function to remove listeners when switching pages.
3. **Theme & Responsive Aware**: Use Tailwind CSS classes or CSS variables for colors so widgets work seamlessly in dark and light modes.
4. **Accessible Inputs**: Use standard HTML `<input type="range">`, `<select>`, and `<button>` elements with clear labels and tooltips.

---

## 5. Development & Verification Workflow

When performing tasks in this repository, follow this workflow:

1. **Inspect Before Editing**: Always check existing files and dependencies.
2. **Execute Cleanly**:
   - Install dependencies: `npm install`
   - Build validation: `npm run build`
   - Code verification: Ensure zero TypeScript (`tsc --noEmit`) and Vite bundling errors.
3. **Preserve Legacy Assets**:
   - Never break or delete `/public/sound-classifier/`. It is linked from the navigation and Interactive Lab.
4. **Update ROADMAP.md**:
   - Check off completed milestones in [ROADMAP.md](file:///home/mk/AI-Agents/antigravity/ai/ROADMAP.md).

---

## 6. Staged Milestones for Agents

- [x] **Stage 0: Foundation & Scaffolding** (TypeScript, Tailwind, i18n scaffolding, AGENTS.md, ROADMAP.md)
- [x] **Stage 1: Bilingual Shell & Navigation** (Navbar, Language Switcher EN/VI, Hero, Footer, Hash Router)
- [x] **Stage 2: Module 1 & 2** (Foundations of AI/ML/DL/CNN/RNN + Training & Inference Loop)
- [x] **Stage 3: Module 3** (Transformers, Attention Q/K/V with interactive Attention Heatmap)
- [x] **Stage 4: Module 4 & 5** (LLMs, MoE, FlashAttention + Hardware, Bandwidth & Quantization Calculator)
- [x] **Stage 5: Interactive Lab & Sound Classifier** (Integration of `/public/sound-classifier/` + playground)
- [x] **Stage 6: Final Polish & Deployment Build** (Mobile verification, asset optimization, base path check)
