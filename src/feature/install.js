// import VueAcl from 'vue-browser-acl'
// import { setConfig } from 'src/domains/config'
//
// export default {
//   install: function (Vue, router, store, policySetter, api, getCurrentUserResolver, getCurrentUserIdResolver, isAuthenticatedResolver, options = {}) {
//     options = Object.assign(
//       {
//         caseMode: false,
//         strict: true,
//         router,
//         userIdResolver: null,
//       },
//       options,
//     )
//
//     setConfig(store, api, getCurrentUserIdResolver, isAuthenticatedResolver)
//     addApiCalls(api)
//
//     Vue.use(
//       VueAcl,
//       getCurrentUserResolver,
//       policySetter,
//       options,
//     )
//   },
// }
