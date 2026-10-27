# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-10-27

### Added
- **Full Bilingual Support (English & Vietnamese)**:
  - Instant client-side locale toggle between English (🇬🇧 EN) and Vietnamese (🇻🇳 VI) without page reloads.
  - Complete 1:1 translation dictionary parity across all educational modules, interactive widgets, and metadata.
- **Interactive Educational Modules**:
  - **Module 1: Foundations**: AI vs. ML vs. Deep Learning hierarchy, perceptrons, multilayer perceptrons, CNNs, and RNNs.
  - **Module 2: Training & Inference**: 4-step learning cycle (forward pass, loss computation, backpropagation via calculus chain rule, AdamW/SGD optimization), and autoregressive inference sampling parameters (temperature, top-p nucleus sampling).
  - **Module 3: Transformers & Self-Attention**: Parallelization vs sequential bottlenecks, Query-Key-Value attention mechanics, scaled dot-product formula, and RoPE / positional encodings.
  - **Module 4: Frontier LLMs & Architectures**: Subword tokenization (BPE), multi-dimensional tensors, Mixture of Experts (MoE) sparse routing, hardware-aware FlashAttention-3, emergent capabilities, and the Modern AI Evolution Timeline (2012–2026).
  - **Module 5: Hardware & Edge AI**: Prefill (compute-bound) vs Generation (memory-bandwidth-bound) dynamics, the memory streaming law ($\text{Tokens/s} = \text{Bandwidth} / \text{Size}$), and weight precision comparison (FP32, FP16/BF16, FP8, INT8, INT4, NVFP4).
- **Interactive Widgets & Calculators**:
  - **Interactive Self-Attention Matrix Heatmap**: Live visual Query-Key attention weight inspector with Softmax scores.
  - **Subword Tokenizer Visualizer**: Real-time token chunking comparison across English and Vietnamese text.
  - **LLM Hardware & Generation Speed Calculator**: Computes required VRAM and estimated tokens/sec based on parameter scale, quantization precision, and device memory bandwidth.
- **Interactive Lab**:
  - Showcase and direct embedding of the 6-tone neural network sound classifier built with p5.js and ml5.js.
- **Site UI & Navigation**:
  - Responsive client-side hash router compatible with GitHub Pages (`base: '/ai/'`).
  - Dark and light theme support via Tailwind CSS.
  - Application version display (`v0.1.0`) in both navigation header and footer.
- **Documentation**:
  - Comprehensive `README.md`, `ROADMAP.md`, `AGENTS.md` operational guidelines, and `CHANGELOG.md`.

### Fixed
- **Bilingual Translation Parity in Modern AI Evolution Timeline**:
  - Corrected hardcoded Vietnamese text in the Modern AI Evolution Timeline (`#/frontier`) so English users receive proper English translations for AlexNet, Transformer, GPT-3, ChatGPT/LLaMA, and MoE/FlashAttention/Reasoning milestones.
- **Bilingual Consistency Across Components**:
  - Fixed AI/ML/DL hierarchy labels in Foundations module to render correctly in English and Vietnamese.
  - Fixed RNN vs Transformer comparison cards in Transformer module.
  - Fixed featured demo showcase banner on the overview landing page.
  - Fixed neural network specs labels in the interactive lab.
- **TypeScript & Build Configuration**:
  - Updated `tsconfig.json` module resolution to `bundler` for TypeScript 7+ compatibility.
  - Added `src/vite-env.d.ts` for Vite client type declarations.
  - Cleaned up unused imports in navbar component.
