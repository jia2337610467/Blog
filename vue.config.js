const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: `https://e.xitu.io/resources`,
        changeOrigin: true, //允许跨域
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack: {
    name: 'YUEBlog',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },

  publicPath: './'
};
