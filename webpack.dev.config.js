const path = require('path')

module.exports = {
  /** 入口 */
  entry: [
    path.join(__dirname, 'src/index.js')
  ],

  /** 打包输出位置, 输出到dist文件夹，输出文件名字为bundle.js */
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  mode: 'development',

  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
    }]
  },

  /** 配置一个本地的web服务 */
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    host: '0.0.0.0',
    port: 40000,
    historyApiFallback: {
      rewrites: [
        {from: /^./, to: './404.html'}
      ]
    },
    proxy: {
      'api': {
        target: 'http://localhost:40000',
        bypass: function(req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.')
            return '/index.html'
          }
        }
      }
    }
  }

}



