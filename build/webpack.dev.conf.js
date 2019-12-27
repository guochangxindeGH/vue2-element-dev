'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 识别某些类别的webpack错误，并清理，聚合和优先级，以提供更好的开发人员体验。
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    // 日志等级
    clientLogLevel: 'warning',
    // 当使用history出现404时则自动调回index页
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    // 热加载模式
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    // 启用gzip
    compress: true,
    // 设置webpackdevServer地址
    host: HOST || config.dev.host,
    // 设置webpackdevServer端口
    port: PORT || config.dev.port,
    // 设置是否自动打开浏览器
    open: config.dev.autoOpenBrowser,
    // 当编译器出现错误时，在全屏覆盖显示错误位置
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    // 从config文件中读取端口代理设置
    proxy: config.dev.proxyTable,
    // 启用简洁报错
    quiet: true, // necessary for FriendlyErrorsPlugin
    // 启用监听文件变化
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})


// 使用portfinder来检查端口占用问题，如果发现端口出现被占用的情况
// 则端口号+1，直到找到可以使用的端口为止，默认情况是8000到25565
// 当然你还可以自己设置搜索范围，详情请查看：https://www.npmjs.com/package/portfinder

// 这里还使用了FriendlyErrorsPlugin对控制台输出信息进行简略友好化输出。
// 详情使用请查看：https://www.npmjs.com/package/friendly-errors-webpack-plugin

// 当一切准备就绪就通过Promise.resolve方法抛出处理好的webpack配置信息
// 出现错误则是Promise.reject方法抛出错误信息供开发者调试修改
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
