import keyValueStore from 'src/key-value-store'

export default () => {
  const resolver = keyValueStore.get(keyValueStore.keys.CURRENT_USER_ID_RESOLVER)
  return resolver()
}
