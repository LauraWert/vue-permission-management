import { hasPermission } from './permissions'
import { isAuthenticated } from 'src/domains/config'

export function permissionPolicy (verb, noun) {
  return () => isAuthenticated() && hasPermission(verb, noun)
}

export function createGlobalPolicy () {
  return {
    public: true,
    authenticated: () => isAuthenticated(),
  }
}

export function createCrudPermissionPolicy (noun) {
  return {
    create: permissionPolicy('c', noun),
    read: permissionPolicy('r', noun),
    update: permissionPolicy('u', noun),
    delete: permissionPolicy('d', noun),
  }
}
