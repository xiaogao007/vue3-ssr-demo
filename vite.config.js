import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

// Vite 配置
// 支持开发模式（HMR）和生产构建（客户端 + 服务端）
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  // SSR 配置：将这些包作为外部模块，由 Node.js 直接加载
  ssr: {
    external: ["vue", "vue-router", "pinia", "vue/server-renderer"],
  },
});
