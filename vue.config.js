module.exports = {
    "transpileDependencies": [
      "vuetify"
    ],
      devServer: {
          host: '0.0.0.0',
          public: '0.0.0.0:8080',
          disableHostCheck: true
      }
  }
  
  // const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  //     .BundleAnalyzerPlugin;
  // module.exports = {
  //     configureWebpack: {
  //         plugins: [new BundleAnalyzerPlugin()]
  //     }
  // };