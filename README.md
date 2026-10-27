# AI Explorer (Trí Tuệ Nhân Tạo) ⚡

An interactive, bilingual (English & Vietnamese) educational platform exploring modern Artificial Intelligence from first principles to cutting-edge LLMs, Transformer architectures, and edge hardware bottlenecks.

Published live at: **[https://kreier.github.io/ai/](https://kreier.github.io/ai/)**

---

## 🌟 Key Features

- **🌐 True Bilingual Support (EN / VI)**: Switch dynamically between English (🇬🇧) and Vietnamese (🇻🇳) without reloading.
- **📚 Comprehensive Educational Curriculum**:
  1. **Foundations**: AI vs. ML vs. Deep Learning, Neural Networks, CNNs, and RNNs.
  2. **Training & Inference**: Forward pass, loss calculation, backpropagation (Chain Rule), optimizers (SGD, AdamW), and inference sampling (temperature, top-p).
  3. **The Transformer Revolution**: Massive parallelism, Query/Key/Value Attention mechanism, Positional Encodings (RoPE), and Multi-Head Attention.
  4. **Frontier LLMs**: Tokens (BPE), Vectors/Matrices/Tensors, Mixture of Experts (MoE), FlashAttention, emergent abilities, and timeline (2012–2026).
  5. **Hardware & Edge AI**: Prefill (compute-bound) vs Generation (memory bandwidth-bound), weight quantization (FP32, FP16/BF16, FP8, NVFP4, INT8, INT4), and running models on phones/laptops.
- **🧪 Interactive Lab & Experiments**:
  - **🎵 6-Tone Sound Classifier**: Full live embedding of the existing ml5.js & p5.js project classifying 400x400 grid coordinates into 6 audio tones using a 1-hidden-layer 16-node neural net.
  - **⚡ LLM Hardware & Speed Calculator**: Compute VRAM requirements and token generation speeds based on memory bandwidth and quantization levels.
  - **🔍 Interactive Self-Attention Heatmap**: Explore token-to-token attention weights in real-time.
  - **🔤 Subword Tokenizer Visualizer**: Test and visualize token chunking across English and Vietnamese sentences.

---

## 🛠️ Tech Stack

- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Language**: Vanilla TypeScript (Lightweight, strict typing, zero framework bloat)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Hosting**: GitHub Pages with `base: '/ai/'`

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Development
```bash
# Clone the repository
git clone https://github.com/kreier/ai.git
cd ai

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Build static bundle for GitHub Pages
npm run build

# Preview production build locally
npm run preview
```

---

## 🤖 Agentic Architecture & Guidelines

For AI coding agents and contributors:
- Read [AGENTS.md](file:///home/mk/AI-Agents/antigravity/ai/AGENTS.md) for strict architectural rules, bilingual translation standards, and widget specifications.
- Check [ROADMAP.md](file:///home/mk/AI-Agents/antigravity/ai/ROADMAP.md) for milestone tracking and future development phases.
