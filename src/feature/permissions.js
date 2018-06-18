import { MockedUserPermissions } from 'src/domains/permissions/mocked-permissions'
import { isAuthenticated, getCurrentUserId, store } from 'src/domains/config'
import getStorePermissions from 'src/domains/permissions/get-store-permissions'
import permissionsContains from 'src/domains/permissions/permissions-contains'
import loadStorePermissions from 'src/domains/permissions/load-store-permissions'

export function mockUserPermissions (permissions) {
  if (!isAuthenticated()) throw new Error('Mocking permissions without being authenticated')
  MockedUserPermissions.set(permissions)
}

export function resetUserPermissions () {
  MockedUserPermissions.reset()
}

function getPermissions () {
  if (MockedUserPermissions.get() !== null) return MockedUserPermissions.get()
  return getStorePermissions(store, getCurrentUserId())
}

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
