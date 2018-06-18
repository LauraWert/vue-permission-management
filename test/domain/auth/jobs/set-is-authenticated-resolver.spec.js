import keyValueStore from 'src/key-value-store'

describe('set-is-authenticated-resolver', () => {
  it('sets is authenticated resolver in the key value store', () => {
    keyValueStore.set(keyValueStore.keys.IS_AUTHENTICATED_RESOLVER, () => false)

    const resolver = keyValueStore.get(keyValueStore.keys.IS_AUTHENTICATED_RESOLVER)
    expect(resolver()).toBe(false)
  })
})
