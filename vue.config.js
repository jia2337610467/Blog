module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: `http://192.168.1.32:8083`,
        changeOrigin: true, //允许跨域
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  publicPath: './'
};
