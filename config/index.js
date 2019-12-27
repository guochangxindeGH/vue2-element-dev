'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  // 对应dev环境的快捷设置
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 使用webpack进行端口代理，一般是用于跨域
    proxyTable: {},

    // 这是设置的是局域网和本地都可以访问
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    // 是否自动打开浏览器
    autoOpenBrowser: false,
    errorOverlay: true,
    // 是否使用系统提示弹出错误简略信息
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */
    // 使用什么devtools
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },
  //  对应build环境的快捷设置
  build: {
    // 模板index
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // 此处决定打包的文件夹
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    // 针对vue，如果你想通过双击index打开你的页面的话
    // 你就需要更改为'./'即可
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // vue项目中由于对对组件的不正确使用、对第三方插件的滥用、本身项目功能复杂导致的打包后项目巨大，影响用户体验，因此vue脚手架2.x中内置的一个压缩"糖"
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // 此处配置是是否启动webpack打包检测你可以通过使用以下命令进行启动
    // `npm run build --report`
    // 或者你也可以直接设置true或者false来直接进行控制
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
