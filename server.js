import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

// 获取当前目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 判断是否为生产环境
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;

/**
 * 创建并启动 Express 服务器
 * 开发模式：集成 Vite 中间件，支持 HMR
 * 生产模式：提供静态文件服务和 SSR 渲染
 */
async function createServer() {
  const app = express();

  // 定义 Vite 实例和模板
  let vite;
  let template;
  let render;

  if (!isProduction) {
    // 开发模式：创建 Vite 开发服务器
    const { createServer: createViteServer } = await import("vite");
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    // 使用 Vite 中间件处理请求
    app.use(vite.middlewares);
  } else {
    // 生产模式：提供静态文件服务
    app.use(
      express.static(path.resolve(__dirname, "dist/client"), {
        index: false, // 禁用默认 index.html
      })
    );
  }

  // ============== API 路由（BFF 接口） ==============

  // 示例 API：获取问候语
  app.get("/api/hello", (req, res) => {
    res.json({
      message: "你好，这是来自 Node BFF 的响应！",
      timestamp: new Date().toISOString(),
      env: isProduction ? "production" : "development",
    });
  });

  // 示例 API：获取用户数据
  app.get("/api/users", (req, res) => {
    res.json({
      users: [
        { id: 1, name: "张三", role: "前端开发" },
        { id: 2, name: "李四", role: "后端开发" },
        { id: 3, name: "王五", role: "全栈工程师" },
      ],
    });
  });

  // ============== SSR 渲染 ==============

  // 处理所有页面请求
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      if (!isProduction) {
        // 开发模式：动态读取 HTML 模板
        template = fs.readFileSync(
          path.resolve(__dirname, "index.html"),
          "utf-8"
        );
        // 应用 Vite HTML 转换（注入 HMR 客户端等）
        template = await vite.transformIndexHtml(url, template);
        // 动态加载服务端入口
        render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
      } else {
        // 生产模式：使用预构建的模板和渲染器
        template = fs.readFileSync(
          path.resolve(__dirname, "dist/client/index.html"),
          "utf-8"
        );
        render = (await import("./dist/server/entry-server.js")).render;
      }

      // 执行服务端渲染
      const { html: appHtml, state } = await render(url);

      // 将渲染结果注入模板
      let finalHtml = template.replace("<!--ssr-outlet-->", appHtml);

      // 注入初始状态（用于客户端激活）
      if (state) {
        finalHtml = finalHtml.replace(
          "</head>",
          `<script>window.__PINIA_STATE__ = ${JSON.stringify(
            state
          )}</script></head>`
        );
      }

      // 返回渲染后的 HTML
      res.status(200).set({ "Content-Type": "text/html" }).end(finalHtml);
    } catch (e) {
      // 开发模式下，让 Vite 处理错误堆栈
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error("SSR 渲染错误:", e);
      next(e);
    }
  });

  // 启动服务器
  app.listen(port, () => {
    console.log(`
╔════════════════════════════════════════════════╗
║     Vue3 SSR Demo 服务器已启动！               ║
╠════════════════════════════════════════════════╣
║  🚀 访问地址: http://localhost:${port}             ║
║  📦 运行模式: ${isProduction ? "生产环境" : "开发环境"}                 ║
║  📡 API 接口: http://localhost:${port}/api/hello   ║
╚════════════════════════════════════════════════╝
    `);
  });
}

// 启动服务器
createServer();
