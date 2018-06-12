import Vue from 'vue'
import Vuex from 'vuex'
import VueXhrState from 'vuex-xhr-state'
import { permissionManagementStorePlugins } from 'src/store'

Vue.use(Vuex)
Vue.use(VueXhrState)

const xhrPlugins = [...permissionManagementStorePlugins]
const store = new Vuex.Store({
  strict: true,
  plugins: [
    ...xhrPlugins.map((plugin) => plugin.plugin()),
  ],
})
store.xhrPlugins = xhrPlugins

store.$reset = () => {
  store.xhrPlugins.forEach((plugin) => {
    plugin.reset(store)
  })
}

export default store
