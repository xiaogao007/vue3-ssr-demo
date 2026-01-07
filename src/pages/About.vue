<template>
  <div class="about-page">
    <div class="glass-card">
      <h1>📖 关于本项目</h1>

      <section class="section">
        <h2>什么是 SSR？</h2>
        <p>
          服务端渲染（Server-Side Rendering，SSR）是指在服务器上将 Vue
          组件渲染成 HTML 字符串，
          然后将其发送到浏览器。与传统的客户端渲染（CSR）相比，SSR
          具有以下优势：
        </p>
        <ul>
          <li>
            <strong>更好的 SEO</strong>：搜索引擎可以直接抓取完整的页面内容
          </li>
          <li><strong>更快的首屏加载</strong>：用户可以更快看到页面内容</li>
          <li><strong>更好的用户体验</strong>：减少白屏时间</li>
        </ul>
      </section>

      <section class="section">
        <h2>项目架构说明</h2>
        <div class="architecture">
          <div class="arch-item">
            <span class="arch-icon">🖥️</span>
            <div class="arch-content">
              <h3>Node BFF 服务器</h3>
              <p>Express 服务器负责处理 SSR 渲染和 API 请求</p>
            </div>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-item">
            <span class="arch-icon">⚙️</span>
            <div class="arch-content">
              <h3>Vue SSR Renderer</h3>
              <p>将 Vue 组件渲染为 HTML 字符串</p>
            </div>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-item">
            <span class="arch-icon">🌐</span>
            <div class="arch-content">
              <h3>客户端激活</h3>
              <p>Hydration 将静态 HTML 转换为可交互应用</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>技术栈</h2>
        <div class="tech-stack">
          <span class="tech-badge">Vue 3</span>
          <span class="tech-badge">Vue Router 4</span>
          <span class="tech-badge">Pinia</span>
          <span class="tech-badge">Vite</span>
          <span class="tech-badge">Express</span>
          <span class="tech-badge">@vue/server-renderer</span>
        </div>
      </section>

      <section class="section">
        <h2>项目文件说明</h2>
        <div class="file-list">
          <div class="file-item">
            <code>server.js</code>
            <span>Express 服务器，处理 SSR 和 API</span>
          </div>
          <div class="file-item">
            <code>src/main.js</code>
            <span>Vue 应用工厂函数</span>
          </div>
          <div class="file-item">
            <code>src/entry-client.js</code>
            <span>客户端入口，负责 Hydration</span>
          </div>
          <div class="file-item">
            <code>src/entry-server.js</code>
            <span>服务端入口，导出渲染函数</span>
          </div>
        </div>
      </section>

      <!-- 作者信息 -->
      <section class="section author-section">
        <h2>👨‍💻 关于作者</h2>
        <div class="author-card">
          <div class="author-avatar">小高</div>
          <div class="author-details">
            <h3 class="author-name-title">小高</h3>
            <p class="author-bio">
              热爱前端技术，专注于 Vue.js 生态和现代 Web 开发
            </p>
            <div class="author-links">
              <a
                href="https://github.com/xiaogao"
                target="_blank"
                class="social-link"
              >
                <span>📦</span> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// 关于页面组件
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-card h1 {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

.section {
  margin-bottom: 2rem;
}

.section h2 {
  color: #00d9ff;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.section p {
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.section ul {
  color: rgba(255, 255, 255, 0.85);
  padding-left: 1.5rem;
  line-height: 2;
}

.section ul li {
  margin-bottom: 0.5rem;
}

/* 架构图 */
.architecture {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 0;
}

.arch-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  min-width: 150px;
}

.arch-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
}

.arch-content h3 {
  color: white;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.arch-content p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  margin: 0;
}

.arch-arrow {
  color: #00ff88;
  font-size: 1.5rem;
  font-weight: bold;
}

/* 技术栈徽章 */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

/* 文件列表 */
.file-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.file-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.file-item code {
  background: rgba(0, 217, 255, 0.2);
  color: #00d9ff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: "Fira Code", monospace;
  font-size: 0.875rem;
  min-width: 180px;
}

.file-item span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
}

/* 作者卡片样式 */
.author-section {
  margin-top: 1rem;
}

.author-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(0, 217, 255, 0.1) 0%,
    rgba(0, 255, 136, 0.1) 100%
  );
  border-radius: 16px;
  border: 1px solid rgba(0, 217, 255, 0.3);
}

.author-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.author-details {
  flex: 1;
}

.author-name-title {
  color: #00d9ff;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.author-bio {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 1rem !important;
}

.author-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .architecture {
    flex-direction: column;
  }

  .arch-arrow {
    transform: rotate(90deg);
  }

  .file-item {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
