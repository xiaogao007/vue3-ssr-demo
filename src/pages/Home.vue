<template>
  <div class="home-page">
    <!-- 英雄区块 -->
    <section class="hero">
      <h1 class="hero-title">
        <span class="gradient-text">Vue3 SSR</span>
        <br />
        服务端渲染示例
      </h1>
      <p class="hero-subtitle">
        使用 Vue 3 + Node BFF + Vite 构建的简版 SSR 项目
      </p>
    </section>

    <!-- 演示区块：计数器 + API 并排 -->
    <section class="demo-section">
      <div class="glass-card compact">
        <h2>🎯 计数器</h2>
        <div class="counter-display">
          <span class="count-value">{{ counter.count }}</span>
          <span class="double-count">×2 = {{ counter.doubleCount }}</span>
        </div>
        <div class="counter-actions">
          <button @click="counter.decrement" class="btn btn-sm btn-secondary">
            ➖
          </button>
          <button @click="counter.reset" class="btn btn-sm btn-outline">
            🔄
          </button>
          <button @click="counter.increment" class="btn btn-sm btn-primary">
            ➕
          </button>
        </div>
      </div>

      <div class="glass-card compact">
        <h2>📡 BFF API</h2>
        <button
          @click="fetchHello"
          class="btn btn-sm btn-primary"
          :disabled="loading"
        >
          {{ loading ? "加载中..." : "获取问候语" }}
        </button>
        <div v-if="apiResponse" class="api-response">
          <pre>{{ JSON.stringify(apiResponse, null, 2) }}</pre>
        </div>
      </div>
    </section>

    <!-- 特性展示 -->
    <section class="features-section">
      <h2>✨ 核心特性</h2>
      <div class="features-grid">
        <div
          class="feature-card"
          v-for="feature in features"
          :key="feature.title"
        >
          <span class="feature-icon">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "../stores/counter.js";

// 使用计数器 Store
const counter = useCounterStore();

// API 相关状态
const loading = ref(false);
const apiResponse = ref(null);

// 获取 API 数据
async function fetchHello() {
  loading.value = true;
  try {
    const res = await fetch("/api/hello");
    apiResponse.value = await res.json();
  } catch (error) {
    apiResponse.value = { error: "请求失败", message: error.message };
  } finally {
    loading.value = false;
  }
}

// 特性列表
const features = [
  {
    icon: "🚀",
    title: "服务端渲染",
    desc: "首屏由服务端生成 HTML，提升首屏加载速度和 SEO",
  },
  {
    icon: "⚡",
    title: "客户端激活",
    desc: "Hydration 将静态 HTML 转换为可交互的 Vue 应用",
  },
  {
    icon: "🔧",
    title: "Node BFF",
    desc: "Express 服务器提供 API 接口和 SSR 渲染服务",
  },
  {
    icon: "📦",
    title: "Vite 构建",
    desc: "极速开发体验，支持 HMR 和生产环境优化",
  },
];
</script>

<style scoped>
/* 首页样式 */
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

/* 英雄区块 - 紧凑版 */
.hero {
  text-align: center;
  padding: 1rem 0;
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background: linear-gradient(90deg, #00d9ff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

/* 演示区块 - 并排布局 */
.demo-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

/* 玻璃卡片 - 紧凑版 */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-card.compact {
  text-align: center;
}

.glass-card h2 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

/* 计数器区块 - 紧凑版 */
.counter-display {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.count-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}

.double-count {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
}

.counter-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

/* 按钮样式 */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-sm {
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
}

.btn-primary {
  background: linear-gradient(135deg, #00d9ff, #00ff88);
  color: #1a1a2e;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-1px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.btn-outline {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* API 响应 */
.api-response {
  margin-top: 0.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  padding: 0.5rem;
  text-align: left;
}

.api-response pre {
  color: #00ff88;
  font-family: monospace;
  font-size: 0.7rem;
  white-space: pre-wrap;
  word-break: break-all;
  margin: 0;
}

/* 特性区块 - 紧凑版 */
.features-section {
  margin-top: 0.5rem;
}

.features-section h2 {
  text-align: center;
  color: white;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.75rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: 1.5rem;
  display: block;
  margin-bottom: 0.25rem;
}

.feature-card h3 {
  color: white;
  margin-bottom: 0.25rem;
  font-size: 0.85rem;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.7rem;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .demo-section {
    grid-template-columns: 1fr;
  }
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
