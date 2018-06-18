import keyValueStore from 'src/key-value-store'

export default () => {
  return keyValueStore.get(keyValueStore.keys.PROJECT_STORE)
}
