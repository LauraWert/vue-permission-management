import keyValueStore from 'src/key-value-store'
import getCurrentUserId from 'src/domains/auth/jobs/get-current-user-id'

describe('get-current-user-id', () => {
  it('gets the user id from the resolver in the key value store', () => {
    keyValueStore.set(keyValueStore.keys.CURRENT_USER_ID_RESOLVER, () => 546146)

    const userId = getCurrentUserId()

    expect(userId).toBe(546146)
  })
})
