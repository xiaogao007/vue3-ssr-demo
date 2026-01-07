import { createApp } from "./main.js";

/**
 * 客户端入口
 * 负责激活（hydration）服务端渲染的 HTML
 * 将静态 HTML 转换为可交互的 Vue 应用
 */
async function hydrate() {
  const { app, router, pinia } = createApp();

  // 等待路由准备就绪
  await router.isReady();

  // 如果服务端注入了 Pinia 状态，则进行还原
  if (window.__PINIA_STATE__) {
    pinia.state.value = window.__PINIA_STATE__;
  }

  // 挂载应用，激活服务端渲染的 HTML
  app.mount("#app");

  console.log("🎉 Vue 应用已激活（Hydration 完成）");
}

// 执行客户端激活
hydrate();
