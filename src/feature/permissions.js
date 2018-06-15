import { readPermissions } from 'src/store/permission'
import { isAuthenticated, getCurrentUserId, store } from 'src/domains/config'
import getStorePermissions from 'src/domains/permissions/get-store-permissions'
import permissionsContains from 'src/domains/permissions/permissions-contains'
import loadStorePermissions from 'src/domains/permissions/load-store-permissions'



// let mockPermissions = null

// export function mockUserPermissions (permissions) {
//   if (!isAuthenticated()) throw new Error('Mocking permissions without being authenticated')
//   mockPermissions = permissions
// }

// export function resetUserPermissions () {
//   mockPermissions = null
// }

// function getPermissions () {
//   if (mockPermissions !== null) return mockPermissions
//   return getStorePermissions(store, getCurrentUserId())
// }

export function hasPermission (verb, noun) {
  const perms = getStorePermissions(store, getCurrentUserId())
  return permissionsContains(perms, verb, noun)
}

export function loadPermissions () {
  if (!isAuthenticated()) {
    return new Promise(resolve => resolve([]))
  }

  return loadStorePermissions(store, getCurrentUserId())
}
