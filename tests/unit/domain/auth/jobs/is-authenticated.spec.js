import keyValueStore from 'src/key-value-store'
import isAuthenticated from 'src/domains/auth/jobs/is-authenticated'
import { expect } from 'chai'

describe('is-authenticated', () => {
  it('gets the auth state from the resolver', () => {
    keyValueStore.set(keyValueStore.keys.IS_AUTHENTICATED_RESOLVER, () => true)

    const userId = isAuthenticated()

    expect(userId).to.equal(true)
  })
})
