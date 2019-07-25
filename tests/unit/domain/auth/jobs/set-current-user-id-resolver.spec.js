import keyValueStore from 'src/key-value-store'
import { expect } from 'chai'

describe('set-current-user-id-resolver', () => {
  it('sets the user id resolver in the key value store', () => {
    keyValueStore.set(keyValueStore.keys.CURRENT_USER_ID_RESOLVER, () => 'resolver result')

    const resolver = keyValueStore.get(keyValueStore.keys.CURRENT_USER_ID_RESOLVER)
    expect(resolver()).to.equal('resolver result')
  })
})
