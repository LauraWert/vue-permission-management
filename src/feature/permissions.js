import { MockedUserPermissions } from 'src/domains/permissions/jobs/mocked-user-permissions'
import getProjectStore from 'src/domains/store/jobs/get-project-store'
import getStorePermissions from 'src/domains/permissions/jobs/get-store-permissions'
import permissionsContains from 'src/domains/permissions/jobs/permissions-contains'
import loadStorePermissions from 'src/domains/permissions/jobs/load-store-permissions'
import getCurrentUserId from 'src/domains/auth/jobs/get-current-user-id'
import isAuthenticated from 'src/domains/auth/jobs/is-authenticated'

export function mockUserPermissions (permissions) {
  if (!isAuthenticated()) throw new Error('Mocking permissions without being authenticated')
  MockedUserPermissions.set(permissions)
}

export function resetUserPermissions () {
  MockedUserPermissions.reset()
}

function getPermissions () {
  if (MockedUserPermissions.get() !== null) return MockedUserPermissions.get()
  return getStorePermissions(getProjectStore(), getCurrentUserId())
}

export function hasPermission (verb, noun) {
  const perms = getPermissions()
  return permissionsContains(perms, verb, noun)
}

export function loadPermissions () {
  if (!isAuthenticated()) {
    return new Promise(resolve => resolve([]))
  }

  return loadStorePermissions(getProjectStore(), getCurrentUserId())
}
