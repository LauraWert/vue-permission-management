const path = require('path')
const { setBuildExternals } = require('@laura-wert/vue-helpers/build-helpers')

module.exports = {
  chainWebpack: config => {
    config.resolve.symlinks(false)
  },
  configureWebpack: config => {
    config.resolve.alias.src = path.resolve(__dirname, './src')
    config.resolve.alias.tests = path.resolve(__dirname, './tests')

    setBuildExternals(config)
  },
}
