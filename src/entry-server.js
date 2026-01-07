import { renderToString } from "vue/server-renderer";
import { createApp } from "./main.js";

/**
 * 服务端渲染函数
 * 在 Node.js 环境中将 Vue 组件渲染为 HTML 字符串
 * @param {string} url - 当前请求的 URL 路径
 * @returns {Promise<{html: string, state: object}>} 渲染结果和状态
 */
export async function render(url) {
  const { app, router, pinia } = createApp();

  // 设置服务端路由位置
  router.push(url);

  // 等待路由准备就绪（处理异步组件）
  await router.isReady();

  // 将 Vue 应用渲染为 HTML 字符串
  const html = await renderToString(app);

  // 获取 Pinia 状态，用于客户端激活时还原
  const state = pinia.state.value;

  return { html, state };
}
