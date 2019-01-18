const path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  /** 入口 */
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],

  /** 打包输出位置, 输出到dist文件夹，输出文件名字为bundle.js */
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    /**
     * [chunkhash]是用来区分文件的唯一性的,如果缓存中有了该文件则,不会继续去请求文件
     */
    chunkFilename: '[name].[chunkhash].js'
  },

  mode: 'development',

  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 小于等于8k的图片会被转成base64编码,直接插入html,减少http请求
            limit: 8192
          }
        }]
      }
    ]
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
            return '/index.html'
          }
        }
      }
    }
  },

  resolve: {
    /** 设置别名 */
    alias: {
      SRC: path.join(__dirname, './src'),
      PAGES: path.join(__dirname, './src/pages'),
      COMPONENT: path.join(__dirname, './src/component'),
      ROUTER: path.join(__dirname, './src/router'),
      REDUX: path.join(__dirname, './src/redux')
    }
  },

  devtool: 'inline-source-map',

  /** 使用缓存减少文件请求 */
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, 'src/index.html')
  })]

}



