//当 vue.config.js配置文件 配置的代理proxy是这样
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true,
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_REQUEST_URL,//'http://192.168.124.15:8000'
        ws: true,
        changOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
          //需要rewrite的,process.env.VUE_APP_BASE_API:'/dev-api'
        }
      }
    }
  },
})
