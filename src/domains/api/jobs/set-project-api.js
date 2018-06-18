import keyValueStore from 'src/key-value-store'

export default (projectApi) => {
  keyValueStore.set(keyValueStore.keys.PROJECT_API, projectApi)
}
