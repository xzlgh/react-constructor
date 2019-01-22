const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config')

const path = require('path')

const devConfig = { 
  // 显示错误信息提示
  devtool: 'inline-source-map',

  /** 入口 */
  entry: {
    app: [
      'react-hot-loader/patch',
      "babel-polyfill",
      path.join(__dirname, 'src/index.js')
    ]
  },

  /** 打包输出位置, 输出到dist文件夹，输出文件名字为bundle.js */
  output: {
    filename: '[name].[hash:5].js',
  },

  mode: 'development',

  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  /** 配置一个本地的web服务 */
  devServer: {
    contentBase: path.join(__dirname, './src'),
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
            return '/index.html'
          }
        }
      }
    }
  },
}


module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'entry.app') {
      return b
    }
    return undefined
  }
})(commonConfig, devConfig)







