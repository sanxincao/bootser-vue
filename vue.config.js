const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
      .set('styles', resolve('./src/styles'))
      .set('api', resolve('./src/api'))
  }
})
