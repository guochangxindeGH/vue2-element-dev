'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    // webpack执行打包操作之后关闭进度条
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      // 开启控制台颜色输出
      colors: true,
      // 是否显示打包了源码文件
      modules: false,
      // 如果你是typescript,开启此项则会导致报错
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      // 后面这两个个人感觉和开启了modules没太大区别，只是显示更加简略一些
      // 是否显示生成的文件块
      chunks: false,
      // 显示打包的代码块来源
      chunkModules: false
    }) + '\n\n')
    // 当打包失败时
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    // 当打包成功时
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
