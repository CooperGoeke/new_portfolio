const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      'patterns': [
        path.resolve(__dirname, './src/assets/sass/project.scss')
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('snapsvg')
      .test(require.resolve('snapsvg'))
      .use('imports-loader?this=>window,fix=>module.exports=0')
      .loader('imports-loader')
      .end()
  }
}
