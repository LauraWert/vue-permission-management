import keyValueStore from 'src/key-value-store'
import getCurrentUserId from 'src/domains/auth/jobs/get-current-user-id'
import { expect } from 'chai'

describe('get-current-user-id', () => {
  it('gets the user id from the resolver in the key value store', () => {
    keyValueStore.set(keyValueStore.keys.CURRENT_USER_ID_RESOLVER, () => 546146)

    const userId = getCurrentUserId()

    expect(userId).to.equal(546146)
  })
})
