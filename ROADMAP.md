# Project Roadmap: AI Explorer (Trí Tuệ Nhân Tạo)

An interactive, bilingual educational platform exploring modern AI fundamentals, transformer architectures, and edge hardware realities.

---

## Milestone Checklist

### 🚀 Stage 0: Foundation & Scaffolding
- [x] Create comprehensive architectural roadmap and curriculum plan
- [x] Author [AGENTS.md](file:///home/mk/AI-Agents/antigravity/ai/AGENTS.md) specifying agent directives, bilingual standards, and widget conventions
- [x] Configure TypeScript, Tailwind CSS v4, PostCSS, and Vite configuration with `base: '/ai/'`
- [x] Set up client-side hash router and state-driven i18n system (`en` & `vi`)

### 🌐 Stage 1: Core Shell & Navigation
- [x] Implement responsive Header / Navbar with language switcher (🇬🇧 EN / 🇻🇳 VI)
- [x] Implement dark/light theme support and responsive mobile styling
- [x] Create Landing Page hero section with module directory overview
- [x] Implement accessible Footer with links to GitHub repository and sound-classifier

### 🧠 Stage 2: Foundations & Training/Inference (Modules 1 & 2)
- [x] **Module 1: Foundations of AI & Neural Networks**
  - AI vs ML vs DL hierarchy
  - Perceptrons, MLP, CNN, and RNN concepts with architectural breakdown
- [x] **Module 2: Training & Inference Deep-Dive**
  - Weights, biases, activations (ReLU, GELU, Sigmoid)
  - The 4-step training cycle: Forward pass, loss calculation, backprop (chain rule), optimizers
  - Inference mechanics: Temperature, top-p sampling, deterministic vs stochastic output

### ⚡ Stage 3: The Transformer Revolution (Module 3)
- [x] Overcoming sequential bottlenecks (RNN vs Transformer parallelization)
- [x] Self-Attention mechanism explained ($Q, K, V$, scaled dot-product formula)
- [x] Positional Encodings (RoPE, sinusoidal), Multi-Head Attention concepts
- [x] **Interactive Widget**: Dynamic Attention Matrix Heatmap visualizer

### 🔬 Stage 4: Modern LLMs, Quantization & Hardware Bottlenecks (Modules 4 & 5)
- [x] **Module 4: Frontier LLM Concepts**
  - Tokens & Tokenization (BPE)
  - Tensors & Matrix operations (Vector, Matrix, Tensor)
  - Mixture of Experts (MoE) & FlashAttention
  - Modern AI evolution timeline (2012-2026)
- [x] **Module 5: Edge AI, Bandwidth & Quantization**
  - Can we run models on laptops/smartphones?
  - Compute-bound (Prefill) vs Memory Bandwidth-bound (Generation)
  - Memory streaming speed formula ($\text{Tokens/s} = \text{Bandwidth} / \text{Size}$)
  - Weight precision spectrum: FP32, FP16/BF16, FP8, NVFP4, INT8, INT4
- [x] **Interactive Widget**: LLM VRAM & Token Speed Hardware Calculator

### 🧪 Stage 5: Interactive Lab & Sound Classifier Showcase
- [x] Dedicated Interactive Lab hub ([lab.ts](file:///home/mk/AI-Agents/antigravity/ai/src/modules/lab.ts))
- [x] Full embedding and spotlight on `/public/sound-classifier/` (p5.js + ml5.js 6-tone neural net)
- [x] Interactive Tokenizer visualizer (English and Vietnamese subword chunking)
- [x] Weight precision comparison table and live calculator

### 📦 Stage 6: Build Verification & Deployment
- [x] Full static build verification with `npm run build`
- [x] Verify base path `/ai/` resolution for GitHub Pages
- [x] Confirm clean copy of `/public/sound-classifier/` into `dist/`
- [ ] Add further interactive visualizers (e.g., interactive 2D decision boundary canvas, interactive backpropagation step simulator)
