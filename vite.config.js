import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
  //样式相关
  css: {},
  //打包相关
  esbuild: {},
  base: "./",
  // 项目构建目录
  outDir: "dist",
  sever: {
    // host:'',//主机名称
    // port:'',//端口号

    // 服务器代理
    proxy: {
      https: false, //启用https
      open: true, // @{boolean | string} 自动打开程序 | url的路径名
      "/api": {
        target: "http://192.168.1.31:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    // 别名
    alias: {
      "@": path.resolve(__dirname, "src"),
      comps: path.resolve(__dirname, "src/components"),
      views: path.resolve(__dirname, "src/views"),
      styles: path.resolve(__dirname, "src/styles"),
      routes: path.resolve(__dirname, "src/routes"),
      store: path.resolve(__dirname, "src/store"),
    },
    // 省略文件拓展名称 （不建议省略vue）
    extensions: [".js", ".ts", ".json", "jsx", "tsx"],
  },
  // 插件基于Rollup ,利用插件去扩展项目
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: "element-plus",
          style: (name) => {
            return `element-plus/lib/theme-chalk/el-${name}.css`;
          },
        },
      ],
    }),
  ],
});
