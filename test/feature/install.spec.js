// import installer from 'src'
// import { isAuthenticated, getCurrentUserId, store, api } from 'src/domains/config'
//
// jest.mock('vue-browser-acl', () => ({_name: 'vueBrowserAclMock'}))
//
// describe('install', () => {
//   it('can install the package', () => {
//
//     const VueMock = {
//       use: jest.fn(),
//     }
//     const router = {
//       _name: 'router',
//     }
//     const storeMock = {
//       _name: 'store',
//     }
//     const policySetter = {
//       _name: 'policySetter',
//     }
//     const apiMock = {
//       _name: 'api',
//     }
//     const getCurrentUserResolver = {
//       _name: 'getCurrentUserResolver',
//     }
//     const getCurrentUserIdResolver = {
//       _name: 'getCurrentUserIdResolver',
//     }
//     const isAuthenticatedResolver = {
//       _name: 'isAuthenticatedResolver',
//     }
//     const options = {
//       _name: 'options',
//     }
//
//     installer.install(VueMock, router, storeMock, policySetter, apiMock, getCurrentUserResolver, getCurrentUserIdResolver, isAuthenticatedResolver, options)
//
//     expect(isAuthenticated).toBe(isAuthenticatedResolver)
//     expect(getCurrentUserId).toBe(getCurrentUserIdResolver)
//     expect(store).toBe(storeMock)
//     expect(api).toBe(apiMock)
//
//     expect(VueMock.use).toBeCalledWith(
//       {_name: 'vueBrowserAclMock'},
//       getCurrentUserResolver,
//       policySetter,
//       {
//         _name: 'options',
//         caseMode: false,
//         router: {'_name': 'router'},
//         strict: true,
//         userIdResolver: null,
//       },
//     )
//   })
// })
