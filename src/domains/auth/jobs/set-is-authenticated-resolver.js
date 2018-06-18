import keyValueStore from 'src/key-value-store'

export default (isAuthenticatedResolver) => {
  keyValueStore.set(keyValueStore.keys.IS_AUTHENTICATED_RESOLVER, isAuthenticatedResolver)
}
