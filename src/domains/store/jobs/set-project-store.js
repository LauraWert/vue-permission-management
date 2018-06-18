import keyValueStore from 'src/key-value-store'

export default (projectStore) => {
  keyValueStore.set(keyValueStore.keys.PROJECT_STORE, projectStore)
}
