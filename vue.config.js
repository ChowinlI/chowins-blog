const path = require('path')

function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      less: {

      }
    }
  },
  pluginOptions: {
    // 'style-resources-loader': {
    //   preProcessor: 'less',
    //   patterns: [resolve('src/common/iconfont/iconfont.css')]
    // }
  },
  devServer: {

  },
  chainWebpack(config){
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('router', resolve('src/router'))
      .set('views', resolve('src/views'))
  }
}