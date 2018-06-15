export let isAuthenticated = null
export let getCurrentUserId = null
export let store = null
export let api = null

export function setConfig (projectStore, projectApi, getCurrentUserIdResolver, isAuthenticatedResolver) {
  api = projectApi

  getCurrentUserId = getCurrentUserIdResolver

  store = projectStore
  isAuthenticated = isAuthenticatedResolver
}
