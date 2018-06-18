import keyValueStore from 'src/key-value-store'

export default () => {
  const resolver = keyValueStore.get(keyValueStore.keys.IS_AUTHENTICATED_RESOLVER)
  return resolver()
}
