const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.symlinks(false)
  },
  configureWebpack: config => {
    config.resolve.alias.src = path.resolve(__dirname, './src')
    config.resolve.alias.tests = path.resolve(__dirname, './tests')

    if (config.mode === 'production') {
      config.externals['@vue/test-utils'] = '@vue/test-utils'
      config.externals['vuex'] = 'vuex'
      config.externals['axios'] = 'axios'
      config.externals['vue-browser-acl'] = 'vue-browser-acl'
      config.externals['vuex-xhr-state'] = 'vuex-xhr-state'

      delete config.devtool
    }
  },
}
