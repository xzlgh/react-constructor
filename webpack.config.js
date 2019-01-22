const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config')

const path = require('path')

var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const productionConfig = {
  /* 用来去除生成的.map文件,此配置主要用在开发环境:
    'inline-source-map': 开发过程中可以提示具体的报错位置
    'cheap-module-source-map': TODO 具体什么作用还不清楚,这个配置还会生成css的map
  */
  // devtool: 'cheap-module-source-map',

  /** 打包输出位置, 输出到dist文件夹，输出文件名字为bundle.js */
  output: {
    filename: '[name].[chunkhash:5].js',
  },

  mode: 'development',

  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
        include: path.join(__dirname, 'src')
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new webpack.optimize.SplitChunksPlugin(
      [
        {
          // 打包的公共模块名称，vendor配置了相应的公共模块
          name: 'runtime',
        }
      ]
    ),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        preset: ['default', {discardComments: {removeAll: true}}],
      },
      canPrint: true
    }),
    new UglifyJSPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}


module.exports = merge(commonConfig, productionConfig)







