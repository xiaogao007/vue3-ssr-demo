import {
  createRouter as _createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

// 路由配置
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
    meta: { title: "首页" },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
    meta: { title: "关于" },
  },
];

/**
 * 创建路由实例
 * 服务端使用 Memory History，客户端使用 Web History
 * @returns {Router} 路由实例
 */
export function createRouter() {
  // 判断是否为客户端环境
  const isClient = typeof window !== "undefined";

  return _createRouter({
    // 服务端使用内存历史，客户端使用浏览器历史
    history: isClient ? createWebHistory() : createMemoryHistory(),
    routes,
  });
}
