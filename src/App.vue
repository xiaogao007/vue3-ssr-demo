<template>
  <div class="app-container">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-brand">
        <span class="logo">🚀</span>
        <span class="title">Vue3 SSR Demo</span>
        <span class="author-tag">by 小高</span>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/about" class="nav-link">关于</router-link>
      </div>
    </nav>

    <!-- 主内容区域 -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <p>Vue3 SSR + Node BFF 示例项目</p>
      <p class="author-info">
        Made with ❤️ by <span class="author-name">小高</span> ·
        <a
          href="https://github.com/xiaogao/vue3-ssr-demo"
          target="_blank"
          class="github-link"
          >GitHub</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup>
// 根组件
// 包含导航栏、路由视图和页脚
</script>

<style>
/* 应用容器样式 */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
.navbar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  font-size: 1.5rem;
}

.author-tag {
  font-size: 0.75rem;
  color: #00ff88;
  background: rgba(0, 255, 136, 0.15);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  margin-left: 0.25rem;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

/* 主内容区域 */
.main-content {
  flex: 1;
  padding: 2rem;
}

/* 页脚样式 */
.footer {
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  padding: 1rem;
  font-size: 0.875rem;
}

.footer .author-info {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.footer .author-name {
  color: #00d9ff;
  font-weight: 600;
}

.footer .github-link {
  color: #00ff88;
  text-decoration: none;
  transition: color 0.3s;
}

.footer .github-link:hover {
  color: white;
  text-decoration: underline;
}
</style>
