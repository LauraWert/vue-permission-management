import { readPermissions } from '../../store/permission'
import { isAuthenticated, getCurrentUserId, store } from '../config'

let mockPermissions = null

export function mockUserPermissions (permissions) {
  if (!isAuthenticated()) throw new Error('Mocking permissions without being authenticated')
  mockPermissions = permissions
}

export function resetUserPermissions () {
  mockPermissions = null
}

function getPermissions () {
  if (mockPermissions !== null) return mockPermissions
  return readPermissions.data(store.getters, getCurrentUserId())
}

export function hasPermission (verb, noun) {
  const perms = getPermissions()
  return noun in perms && perms[noun].includes(verb)
}

export function loadPermissions () {
  if (!isAuthenticated()) {
    return new Promise(resolve => resolve([]))
  }

  return store.dispatch(readPermissions.fetch(), getCurrentUserId())
}
