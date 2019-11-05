// 这个js就是webpack的配置文件
// 跨域反向代理
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.97.33.178',
        changeOrigin: true
      }
    }
  }
}