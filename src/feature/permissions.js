import getProjectStore from 'src/domains/store/jobs/get-project-store'
import getPermissionsJob from 'src/domains/permissions/jobs/get-permissions'
import permissionsContains from 'src/domains/permissions/jobs/permissions-contains'
import loadStorePermissions from 'src/domains/permissions/jobs/load-store-permissions'
import getCurrentUserId from 'src/domains/auth/jobs/get-current-user-id'
import isAuthenticated from 'src/domains/auth/jobs/is-authenticated'
import mockUserPermissionsJob from 'src/domains/permissions/jobs/mock-user-permissions'

export function mockUserPermissions (permissions) {
  mockUserPermissionsJob(permissions)
}

export function resetMockedUserPermissions () {
  mockUserPermissionsJob(null)
}

function getPermissions () {
  return getPermissionsJob(getProjectStore(), getCurrentUserId())
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
