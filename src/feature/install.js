import VueAcl from 'vue-browser-acl'
import addApiCalls from 'src/domains/api/jobs/add-api-calls'
import setPermissionCheckOnRouter from 'src/feature/setPermissionCheckOnRouter'
import setCurrentUserIdResolver from 'src/domains/auth/jobs/set-current-user-id-resolver'
import setIsAuthenticatedResolver from 'src/domains/auth/jobs/set-is-authenticated-resolver'
import setProjectApi from 'src/domains/api/jobs/set-project-api'
import setProjectStore from 'src/domains/store/jobs/set-project-store'

export default {
  install: function (Vue, router, store, policySetter, api, getCurrentUserResolver, currentUserIdResolver, isAuthenticatedResolver, options = {}) {
    options = Object.assign(
      {
        caseMode: false,
        strict: true,
        router,
        userIdResolver: null,
      },
      options,
    )

    addApiCalls(api)
    setPermissionCheckOnRouter(router)

    setProjectApi(api)
    setProjectStore(store)
    setCurrentUserIdResolver(currentUserIdResolver)
    setIsAuthenticatedResolver(isAuthenticatedResolver)

    Vue.use(
      VueAcl,
      getCurrentUserResolver,
      policySetter,
      options,
    )
  },
}
