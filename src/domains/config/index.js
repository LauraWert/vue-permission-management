export let isAuthenticated = null

export let store = null
export let api = null

export function setConfig (projectStore, projectApi) {
  api = projectApi

  store = projectStore
}
