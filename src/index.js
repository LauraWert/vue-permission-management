import VueAcl from 'vue-browser-acl'
import { setConfig } from './domains/config'

export default {
  install: function (Vue, router, store, policySetter, api, getCurrentUserResolver, getCurrentUserIdResolver, isAuthenticatedResolver, options = {}) {
    options = Object.assign(
      {
        caseMode: false,
        strict: true,
        router,
        userIdResolver: null,
      },
      options,
    )

    setConfig(store, api, getCurrentUserIdResolver, isAuthenticatedResolver, options)

    Vue.use(
      VueAcl,
      getCurrentUserResolver,
      policySetter,
      options,
    )
  },
}

export { mockUserPermissions, resetUserPermissions, hasPermission, loadPermissions } from './domains/acl/permissions'
export { createGlobalPolicy, permissionPolicy, createCrudPermissionPolicy } from './domains/acl/policies'
export { permissionManagementStorePlugins } from './store'
export { setConfig }
