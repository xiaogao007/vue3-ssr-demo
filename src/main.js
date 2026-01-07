import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import { createRouter } from "./router";
import App from "./App.vue";

/**
 * 创建 Vue 应用实例
 * 每次请求都会创建新的实例，避免状态污染
 * @returns {Object} 包含 app 和 router 的对象
 */
export function createApp() {
  // 创建 Vue SSR 应用实例
  const app = createSSRApp(App);

  // 创建 Pinia 状态管理实例
  const pinia = createPinia();
  app.use(pinia);

  // 创建路由实例
  const router = createRouter();
  app.use(router);

  return { app, router, pinia };
}
