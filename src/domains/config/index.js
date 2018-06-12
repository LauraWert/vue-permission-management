import { addApiCalls } from '../api'

export let isAuthenticated = null
export let getCurrentUserId = null
export let store = null
export let api = null

export function setConfig (projectStore, projectApi, getCurrentUserIdResolver, isAuthenticatedResolver, options) {
  api = projectApi
  addApiCalls(api)

  getCurrentUserId = getCurrentUserIdResolver

  store = projectStore
  isAuthenticated = isAuthenticatedResolver

  delete options.userIdResolver
}
