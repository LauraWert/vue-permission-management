import keyValueStore from 'src/key-value-store'

export default (setCurrentUserIdResolver) => {
  keyValueStore.set(keyValueStore.keys.CURRENT_USER_ID_RESOLVER, setCurrentUserIdResolver)
}
