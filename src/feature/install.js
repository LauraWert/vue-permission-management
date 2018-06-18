import VueAcl from 'vue-browser-acl'
import { setConfig } from 'src/domains/config'
import addApiCalls from 'src/domains/api/jobs/add-api-calls'
import setCurrentUserIdResolver from 'src/domains/auth/jobs/set-current-user-id-resolver'
import setIsAuthenticatedResolver from 'src/domains/auth/jobs/set-is-authenticated-resolver'

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

    setConfig(store, api)
    setCurrentUserIdResolver(currentUserIdResolver)
    setIsAuthenticatedResolver(isAuthenticatedResolver)
    addApiCalls(api)

    Vue.use(
      VueAcl,
      getCurrentUserResolver,
      policySetter,
      options,
    )
  },
}
